import requests,concurrent.futures,json,re
from pathlib import Path
P=Path(__file__).parent
urls={'Yulu':'https://www.yulu.bike/wp-content/uploads/2019/08/Yulu-Logo.svg','Bajaj Auto':'https://cdn.bajajauto.com/-/media/images/bajajauto/media-kit/logos/bajaj-logo-new.png','Amazon':'https://cdn.worldvectorlogo.com/logos/amazon-2.svg','Tata Power':'https://cdn.worldvectorlogo.com/logos/tata-power.svg'}
def get(i):
 n,u=i
 try:
  r=requests.get(u,timeout=20);r.raise_for_status();ct=r.headers.get('content-type','');ext='svg' if 'svg' in ct else 'png'
  f=P/(n.replace(' ','_')+'.'+ext);f.write_bytes(r.content)
  return n,dict(url=u,file=str(f),content_type=ct,size=len(r.content))
 except Exception as e:return n,dict(error=str(e))
with concurrent.futures.ThreadPoolExecutor(max_workers=4) as ex:out=dict(ex.map(get,urls.items()))
P.joinpath('downloaded_final.json').write_text(json.dumps(out,indent=2));print(json.dumps(out,indent=2))
