from pathlib import Path
import re,json
p=Path('.');dur=json.loads((p/'qa/timing.json').read_text())['sceneDurations'];start=0;aud=[]
for i,d in enumerate(dur,1):
 sid=f'S{i:02d}';f=p/f'compositions/frames/{sid}.html';s=f.read_text();a=re.search(r'<audio[^>]*></audio>',s)[0];s=s.replace(a,'');f.write_text(s)
 a=a.replace('data-start="0.15"',f'data-start="{start+.15:.3f}"').replace('../../assets/','assets/');aud.append(a);start+=d
f=p/'index.html';s=f.read_text().replace('    </div>\n    <script>', '\n      '+'\n      '.join(aud)+'\n    </div>\n    <script>');f.write_text(s)
