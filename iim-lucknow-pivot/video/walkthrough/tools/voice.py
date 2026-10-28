"""Clean the raw voice files and transcribe them with word timestamps.
Usage (from the project root):  python tools/voice.py            # clean + transcribe
                                python tools/voice.py --tempo 1.04   # also speed up slightly
"""
import glob, json, pathlib, subprocess, sys

ROOT = pathlib.Path(__file__).resolve().parents[1]
RAW = ROOT.parent / "voice" / "raw"
OUT = ROOT / "assets" / "voice"; OUT.mkdir(parents=True, exist_ok=True)
CUES = ROOT / "data" / "cues"; CUES.mkdir(parents=True, exist_ok=True)
tempo = 1.0
if "--tempo" in sys.argv:
    tempo = float(sys.argv[sys.argv.index("--tempo") + 1])
    assert 1.0 <= tempo <= 1.06, "tempo must be between 1.00 and 1.06"

CHAIN = ("highpass=f=80,afftdn=nf=-25,"
         "silenceremove=start_periods=1:start_threshold=-45dB:start_silence=0.06,areverse,"
         "silenceremove=start_periods=1:start_threshold=-45dB:start_silence=0.10,areverse,"
         + (f"atempo={tempo}," if tempo != 1.0 else "") +
         "loudnorm=I=-16:TP=-1.5:LRA=11,aresample=48000")
total = 0.0; missing = []
for i in range(1, 12):
    line = f"L{i:02d}"
    hits = [p for p in glob.glob(str(RAW / (line + ".*"))) if p.lower().endswith((".wav", ".m4a", ".mp3", ".aac", ".ogg", ".flac"))]
    if not hits:
        missing.append(line); continue
    dst = OUT / f"{line}.wav"
    subprocess.check_call(["ffmpeg", "-y", "-v", "error", "-i", hits[0], "-af", CHAIN, "-ac", "1", "-c:a", "pcm_s16le", str(dst)])
    d = float(subprocess.check_output(["ffprobe", "-v", "error", "-show_entries", "format=duration", "-of", "csv=p=0", str(dst)]).decode().strip())
    total += d; print(f"{line}  {d:6.2f}s  <- {pathlib.Path(hits[0]).name}")
if missing:
    raise SystemExit("missing raw files: " + ", ".join(missing))
print(f"voice total {total:.2f}s; video will be about {total + 11 * 0.65 + 1.2:.2f}s")
if "--no-whisper" not in sys.argv:
    for i in range(1, 12):
        line = f"L{i:02d}"
        subprocess.check_call(["whisper", str(OUT / f"{line}.wav"), "--model", "small.en", "--language", "en",
                               "--word_timestamps", "True", "--output_format", "json", "--output_dir", str(CUES),
                               "--fp16", "False", "--verbose", "False"])
        j = json.load(open(CUES / f"{line}.json", encoding="utf-8"))
        print(line, "heard:", j.get("text", "").strip()[:110])
