"""Clean the eight narration takes and time every word.
  python tools/audio.py
Reads assets/voice/raw/S01.* .. S08.*, writes assets/voice/S0n.wav (48 kHz mono, -16 LUFS) and assets/voice/words.json.
Exit 2 if the finished video would run past 119.5 s."""
import json, pathlib, subprocess, sys
import whisper
P = pathlib.Path(__file__).resolve().parents[1]
RAW = P / "assets" / "voice" / "raw"; OUT = P / "assets" / "voice"
SPEC = json.loads((P / "scenes.json").read_text(encoding="utf-8"))
CHAIN = ("highpass=f=80,lowpass=f=12000,afftdn=nf=-25,"
         "silenceremove=start_periods=1:start_threshold=-45dB:start_silence=0.08,areverse,"
         "silenceremove=start_periods=1:start_threshold=-45dB:start_silence=0.15,areverse,"
         "acompressor=threshold=-20dB:ratio=3:attack=5:release=80,loudnorm=I=-16:TP=-1.5:LRA=7")
PROMPT = "Eurogrip, Team IdeaForge, Bandhan app, lakh, crore, Tamil Nadu, Uttar Pradesh, puncture shops, tyre, re-survey."


def dur(p):
    return float(subprocess.check_output(["ffprobe", "-v", "error", "-show_entries", "format=duration", "-of", "csv=p=0", str(p)]).decode().strip())


model = whisper.load_model("small.en"); res = {}; total = 0.0
for sc in SPEC["scenes"]:
    sid = sc["id"]; src = sorted(RAW.glob(sid + ".*"))
    assert src, f"missing take {sid} in {RAW}"
    wav = OUT / f"{sid}.wav"
    subprocess.run(["ffmpeg", "-y", "-loglevel", "error", "-i", str(src[0]), "-af", CHAIN, "-ar", "48000", "-ac", "1", str(wav)], check=True)
    d = dur(wav)
    r = model.transcribe(str(wav), language="en", word_timestamps=True, initial_prompt=PROMPT, condition_on_previous_text=False)
    words = [{"w": w["word"].strip(), "s": round(w["start"], 3), "e": round(w["end"], 3)} for seg in r["segments"] for w in seg.get("words", [])]
    res[sid] = {"duration": round(d, 3), "text": r["text"].strip(), "words": words}
    sd = SPEC["head_pad"] + d + sc.get("tail", SPEC["tail_pad"]); total += sd
    print(f"{sid} take {d:6.2f}s scene {sd:6.2f}s | {r['text'].strip()}")
(OUT / "words.json").write_text(json.dumps(res, indent=1, ensure_ascii=False), encoding="utf-8")
print(f"TOTAL {total:.2f}s (limit 119.5s)")
sys.exit(0 if total <= 119.5 else 2)
