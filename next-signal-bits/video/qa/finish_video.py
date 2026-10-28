from pathlib import Path
import subprocess,json,re
p=Path('.')
(p/'assets/voice/master').mkdir(exist_ok=True)
durs=[15.4,6.2,14,19,17.3,12.4,13.2,10.5]
for i in range(1,9):
 sid=f'S{i:02d}'; f=p/f'assets/voice/raw/{sid}.mp3'; j=json.loads((p/f'qa/{sid}-levels.json').read_text())
 af=f"loudnorm=I=-16:TP=-1.5:LRA=11:measured_I={j['input_i']}:measured_TP={j['input_tp']}:measured_LRA={j['input_lra']}:measured_thresh={j['input_thresh']}:offset={j['target_offset']}:linear=true,afade=t=in:d=0.025"
 subprocess.run(['ffmpeg','-v','error','-y','-i',str(f),'-af',af,'-ar','48000','-c:a','pcm_s24le',str(p/f'assets/voice/master/{sid}.wav')],check=True)
# Keep existing visual system and sync title/method to recorded words.
for i in [1,3,8]:
 sid=f'S{i:02d}'; f=p/f'compositions/frames/{sid}.html'; s=f.read_text()
 s=re.sub(r'\s*<audio[^>]*></audio>','',s)
 dur=float(subprocess.check_output(['ffprobe','-v','error','-show_entries','format=duration','-of','csv=p=0',f'assets/voice/master/{sid}.wav'],text=True))
 audio=f'<audio id="{sid}_audio" class="clip" data-start="0.15" data-duration="{dur:.6f}" data-track-index="1" data-has-audio="true" src="../../assets/voice/master/{sid}.wav"></audio>'
 s=s.replace(f'<div id="{sid}_root" data-composition-id="{sid}" data-width="1920" data-height="1080">',f'<div id="{sid}_root" data-composition-id="{sid}" data-width="1920" data-height="1080">\n    {audio}')
 s=re.sub(r'tl.to\(\{\}, \{ duration: [\d.]+ \}, 0\);',f'tl.to({{}}, {{ duration: {durs[i-1]:.3f} }}, 0);',s)
 s=s.replace('back.out(1.5)','power2.out').replace('back.out(1.6)','power2.out')
 s=s.replace('width:1920px;height:1080px','width:100%;height:100%')
 if i==1:
  s=s.replace('}, 5.5);','}, 6.7);')
  s=re.sub(r'\s*tl.to\("#S01_strap",[^\n]+\n','\n',s)
 if i==3:
  s=s.replace('cards.forEach((sel, i) => {','const spoken = [3.46, 4.36, 5.28, 6.16, 7.08, 7.92];\n      cards.forEach((sel, i) => {')
  s=s.replace('1.0 + i * 0.6','spoken[i] + 0.10').replace('1.0 + cards.length * 0.6 + 0.4','9.25')
 if i==8: s=s.replace('color:#75716A','color:#595650')
 f.write_text(s)
# Footage scenes: clean product-only captures; no narration captions.
for i in [2,4,5,6,7]:
 sid=f'S{i:02d}'; dur=durs[i-1]
 adur=float(subprocess.check_output(['ffprobe','-v','error','-show_entries','format=duration','-of','csv=p=0',f'assets/voice/master/{sid}.wav'],text=True))
 audio=f'<audio id="{sid}_audio" class="clip" data-start="0.15" data-duration="{adur:.6f}" data-track-index="1" data-has-audio="true" src="../../assets/voice/master/{sid}.wav"></audio>'
 media=''
 if i in [4,5]:
  media=f'<video id="{sid}_video" class="clip" data-start="0" data-duration="{dur}" data-has-audio="false" muted src="../../assets/footage/beat{i}.mp4"></video>'
  css=f'#{sid}_video{{position:absolute;left:0;top:110px;width:1920px;height:860px;object-fit:contain;background:white}}'
 else:
  shots={2:[('home-clean.png',0,2),('home-cipla.png',2,dur-2)],6:[('evidence-clean.png',0,5.7),('challenge-clean.png',5.7,dur-5.7)],7:[('export-clean.png',0,5),('research-export.png',5,dur-5)]}[i]
  for k,(name,start,length) in enumerate(shots):
   media+=f'<img id="{sid}_shot{k}" class="clip" data-start="{start}" data-duration="{length}" data-track-index="0" src="../../assets/footage/raw/{name}" />\n'
  css=f'#{sid}_root img{{position:absolute;left:0;top:0;width:1920px;height:1080px;object-fit:contain;background:#F6F5F3}}'
 s=f'''<template>
 <style>#{sid}_root{{position:relative;width:100%;height:100%;overflow:hidden;background:#F6F5F3}}{css}</style>
 <div id="{sid}_root" data-composition-id="{sid}" data-width="1920" data-height="1080">
 {media}
 {audio}
 </div>
 <script>(()=>{{const tl=gsap.timeline({{paused:true}});tl.to({{}},{{duration:{dur}}},0);window.__timelines["{sid}"]=tl;}})();</script>
</template>
'''
 (p/f'compositions/frames/{sid}.html').write_text(s)
# Retime all host slots from the actual recordings, with reading room between them.
f=p/'index.html';s=f.read_text();start=0
for i,dur in enumerate(durs,1):
 pat=rf'(<div id="clip-S{i:02d}"[^>]*data-start=")[^"]+(" data-duration=")[^"]+'
 s=re.sub(pat,lambda m:m[1]+f'{start:.3f}'+m[2]+f'{dur:.3f}',s)
 start+=dur
s=s.replace('120.000',f'{start:.3f}')
s=s.replace('const tl = gsap.timeline','const tl = gsap.timeline')
f.write_text(s)
# Keep team credits consistent in editable project materials.
for f in Path('..').rglob('*'):
 if f.is_file() and f.suffix in ['.md','.html','.py','.js','.json','.txt'] and not any(x in f.parts for x in ['.hyperframes','qa','assets']):
  try:s=f.read_text(encoding='utf-8')
  except (UnicodeError,OSError):continue
  if not re.search('Anuj|Gambhir',s,re.I):continue
  s=re.sub(r'^.*\| Anuj Gambhir \|.*\n','',s,flags=re.M)
  s=s.replace('Anuj Gambhir, Delhi Technological University<br>','').replace('Anuj Gambhir and ','').replace('Anuj Gambhir, ','').replace(', Anuj Gambhir','').replace('Anuj and ','').replace(', Anuj,',',').replace('Anuj Gambhir','').replace('Anuj','Harsh')
  f.write_text(s,encoding='utf-8')
(p/'qa/timing.json').write_text(json.dumps({'duration':start,'sceneDurations':durs},indent=2))
print('Finished narration, scene sync, clean captures. Total duration',start)
