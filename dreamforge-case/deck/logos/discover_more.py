import requests,re,concurrent.futures
from pathlib import Path
P=Path(__file__).parent
urls={'Yulu-js':'https://www.yulu.bike/main.acdb22f10a278b1188ed.js','Zypp-js':'https://zypp.app/assets/index-DlVuIPRy.js','Kinetic-js':'https://kineticgreen.com/assets/index-BLj3qgyN.js','Tata-kit':'https://www.tatapower.com/news-and-media/media-kit','Bajaj-site':'https://www.bajajauto.com/','Amazon-wiki':'https://en.wikipedia.org/wiki/Amazon_(company)'}
def run(item):
 n,u=item
 try:
  r=requests.get(u,timeout=25);h=r.text;P.joinpath(n+'.txt').write_text(h,encoding='utf-8')
  hits=re.findall(r'[^\s<>"\x27`]{0,120}(?:logo|Logo|LOGO)[^\s<>"\x27`]{0,120}',h)
  print(n,r.status_code,repr(hits[:45]),flush=True)
 except Exception as e:print(n,str(e),flush=True)
with concurrent.futures.ThreadPoolExecutor(max_workers=6) as ex:list(ex.map(run,urls.items()))
