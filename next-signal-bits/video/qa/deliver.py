from pathlib import Path
import subprocess,json
from PIL import Image,ImageDraw
p=Path('.')
base=p/'renders/Next-Signal-Final.mp4'
raw=p/'renders/Next-Signal-Render-Master.mp4'
base.rename(raw)
# The final pass replaces only the evidence cutaway with the verified drawer capture.
args=['ffmpeg','-hide_banner','-y','-i',str(raw),'-loop','1','-i','assets/footage/raw/evidence-drawer-final.png','-filter_complex',"[1:v]scale=1920:1080:force_original_aspect_ratio=decrease,pad=1920:1080:(ow-iw)/2:(oh-ih)/2:color=0xF6F5F3,setsar=1[drawer];[0:v][drawer]overlay=0:0:enable='gte(t,71.9)*lt(t,77.6)'[v]",'-map','[v]','-map','0:a:0','-c:v','libx264','-preset','fast','-crf','16','-pix_fmt','yuv420p','-threads','6','-c:a','copy','-t','108','-movflags','+faststart',str(base)]
with (p/'qa/finish-encode.log').open('w') as log:subprocess.run(args,stdout=log,stderr=log,check=True)
probe=json.loads(subprocess.check_output(['ffprobe','-v','error','-show_format','-show_streams','-of','json',str(base)],text=True));(p/'qa/final-probe.json').write_text(json.dumps(probe,indent=2))
frames=[7,18,31,45,63,74,80,87,93,103]
board=Image.new('RGB',(1600,5*477),'#eee')
for i,t in enumerate(frames):
 out=p/f'qa/final-{t}.jpg';subprocess.run(['ffmpeg','-v','error','-y','-ss',str(t),'-i',str(base),'-frames:v','1','-vf','scale=800:450',str(out)],check=True)
 tile=Image.new('RGB',(800,477),'#eee');tile.paste(Image.open(out),(0,27));ImageDraw.Draw(tile).text((10,8),f'{t}s',fill='black');board.paste(tile,((i%2)*800,(i//2)*477))
board.save(p/'qa/final-contact.jpg')
r=subprocess.run(['ffmpeg','-hide_banner','-i',str(base),'-af','loudnorm=I=-16:TP=-1.5:LRA=11:print_format=json','-f','null','-'],capture_output=True,text=True)
(p/'qa/final-audio.json').write_text(json.dumps(json.JSONDecoder().raw_decode(r.stderr[r.stderr.rfind('{'):])[0],indent=2))
subprocess.run(['ffmpeg','-v','error','-i',str(base),'-f','null','-'],check=True)
print('FINAL VERIFIED',base,base.stat().st_size,probe['format']['duration'],flush=True)
