import json,re
from pathlib import Path
d=json.loads(Path(__file__).with_name('asset_candidates.json').read_text())
for k,v in d.items():
 if k not in ['Amazon','Dream Forge']:print(k,v.get('status'),v.get('error'),v.get('tags',[])[:2])
for p in Path(__file__).parent.glob('*.html'):
 if p.stem in ['Zypp_Electric','Yulu','Ather','Hero_Vida','Bajaj_Auto','Kinetic_Green','IEEE_DTU']:
  h=p.read_text(encoding='utf-8')
  print(p.name,re.findall(r'[^\s<>"\x27]{0,90}(?:logo|Logo)[^\s<>"\x27]{0,90}',h)[:25])
