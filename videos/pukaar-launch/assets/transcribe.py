import whisper
import json

model = whisper.load_model("base")
result = model.transcribe("videos/pukaar-launch/assets/pukaar-voiceover-clean.wav", language="en")

print("=== SEGMENTS ===")
for seg in result["segments"]:
    start = seg["start"]
    end = seg["end"]
    text = seg["text"]
    print(f"[{start:.2f}s -> {end:.2f}s] {text}")

with open("videos/pukaar-launch/assets/whisper_transcript.json", "w", encoding="utf-8") as f:
    json.dump(result, f, indent=2)
print("Transcript saved successfully.")
