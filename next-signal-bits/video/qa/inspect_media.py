from pathlib import Path
import subprocess,json
from PIL import Image,ImageDraw
p=Path('.')
imgs=[]
for f in sorted(p.glob('assets/footage/beat*.mp4')):
 d=float(subprocess.check_output(['ffprobe','-v','error','-show_entries','format=duration','-of','csv=p=0',str(f)],text=True))
 for k,t in enumerate([1,d/2,d-1]):
  out=p/'qa'/f'{f.stem}_{k}.jpg'
  subprocess.run(['ffmpeg','-v','error','-y','-ss',str(t),'-i',str(f),'-frames:v','1','-vf','scale=640:-1',str(out)],check=True)
  im=Image.open(out).convert('RGB'); tile=Image.new('RGB',(640,im.height+30),'#e9e7e3');tile.paste(im,(0,30));ImageDraw.Draw(tile).text((10,8),f'{f.stem} / {t:.1f}s',fill='black');imgs.append(tile)
board=Image.new('RGB',(1920,5*imgs[0].height),'white')
for i,im in enumerate(imgs): board.paste(im,((i%3)*640,(i//3)*im.height))
board.save(p/'qa'/'footage-contact.jpg')
for f in sorted(p.glob('assets/voice/raw/*.mp3')):
 r=subprocess.run(['ffmpeg','-hide_banner','-i',str(f),'-af','loudnorm=I=-16:TP=-1.5:LRA=11:print_format=json','-f','null','-'],capture_output=True,text=True)
 j=json.JSONDecoder().raw_decode(r.stderr[r.stderr.rfind('{'):])[0];print(f.name,j)
 (p/'qa'/f'{f.stem}-levels.json').write_text(json.dumps(j))

