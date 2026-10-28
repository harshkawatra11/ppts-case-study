from pathlib import Path
import re,requests,json
P=Path(__file__).parent
for n in ['Tata-alt','Yulu-alt']:
 h=P.joinpath(n+'.txt').read_text(encoding='utf-8')
 hits=re.findall(r'''(?:src|href|data-url)=["']([^"']+)''',h)
 print(n,[u for u in hits if any(v in u.lower() for v in ['.svg','.png','.zip'])][:30])
 print('DL',re.findall(r'.{0,100}(?:Yulu.svg|yulu.svg|downloadFile|download-file).{0,100}',h)[:8])
