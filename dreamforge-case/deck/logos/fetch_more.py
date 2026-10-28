import requests,concurrent.futures,json,re
from pathlib import Path
P=Path(__file__).parent
urls={'Zypp Electric':'https://zypp.app/assets/Zypp-Electric-Logo-ChISi-2M.svg','Kinetic Green':'https://kineticgreen.com/assets/header_logo-BwEmavfP.png','Amazon':'https://cdn.jsdelivr.net/gh/gilbarbara/logos@main/logos/amazon.svg','Yulu-home':'https://www.yulu.bike/api/header','Yulu-news':'https://newsroom.yulu.bike/','Tata-commons':'https://commons.wikimedia.org/wiki/File:Tata_Power_logo.svg','Bajaj-media':'https://legacy.bajajauto.com/corporate/media-centre','IEEE alternate':'https://www.ieeedtu.in/images/logo.png'}
def get(i):
 n,u=i
 try:
  r=requests.get(u,timeout=20);r.raise_for_status();ct=r.headers.get('content-type','');ext='svg' if 'svg' in ct else 'png' if 'png' in ct else 'txt'
  f=P/(n.replace(' ','_')+'.'+ext);f.write_bytes(r.content)
  if ext=='txt':
   print(n,repr(re.findall(r'[^\s<>"\x27]{0,150}(?:logo|Logo)[^\s<>"\x27]{0,150}',r.text)[:22]),flush=True)
  return n,dict(url=u,file=str(f),content_type=ct,size=len(r.content))
 except Exception as e:return n,dict(error=str(e))
with concurrent.futures.ThreadPoolExecutor(max_workers=8) as ex:out=dict(ex.map(get,urls.items()))
P.joinpath('downloaded_more.json').write_text(json.dumps(out,indent=2));print(json.dumps(out,indent=2))
h=P.joinpath('Yulu-js.txt').read_text();print('YULU API',re.findall(r'.{0,80}(?:baseUrl|apiUrl|api.yulu|header-content|getHeaderContent|baseURL).{0,120}',h)[-12:])
