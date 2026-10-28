import whisper,json,torch
from pathlib import Path
torch.set_num_threads(4)
m=whisper.load_model('base')
for f in sorted(Path('assets/voice/raw').glob('*.mp3')):
 r=m.transcribe(str(f),language='en',fp16=False,word_timestamps=True)
 Path('qa',f.stem+'-transcript.json').write_text(json.dumps(r,indent=2))
 print(f.name,r['text'],flush=True)
