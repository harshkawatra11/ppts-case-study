import requests,concurrent.futures,json,re
from pathlib import Path
from urllib.parse import urljoin
P=Path(__file__).parent
urls={'IEEE DTU':'https://www.ieeedtu.in/IEEE_DTU_Logo.png','Dream Forge':'https://d8it4huxumps7.cloudfront.net/uploads/images/150x150/uploadedManual-6aa8d0e033c50_images.png','Dream Forge Banner':'https://d8it4huxumps7.cloudfront.net/lambda-pdfs/opportunity-bannerImages/1789397929.png','Battery Smart':'https://www.batterysmart.in/_next/static/media/logo.9f0b8870.webp','Sun Mobility':'https://www.sunmobility.com/assets/images/header/logo.png','Delhi Govt':'https://delhi.gov.in/sites/default/files/emblem-dark.png','MHI':'https://heavyindustries.gov.in/themes/mhi/images/logo.png','Ather':'https://media.atherenergy.com/Ather-logo-black.svg','TVS Motor':'https://www.tvsmotor.com/-/media/Feature/Header/TVSLogo-hr.svg','Hero Vida':'https://media.vidaworld.com/is/image/heromotocorp/VIDA-new-logo?fmt=png-alpha','Amazon':'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg','Bajaj Auto':'https://www.bajajauto.com/images/default-source/bajaj-logo/bajaj-logo2.png'}
def get(i):
 n,u=i
 try:
  r=requests.get(u,timeout=25);r.raise_for_status();ct=r.headers.get('content-type','');ext='svg' if 'svg' in ct else 'png' if 'png' in ct else 'webp' if 'webp' in ct else 'jpg'
  f=P/(n.replace(' ','_')+'.'+ext);f.write_bytes(r.content)
  return n,dict(url=u,file=str(f),content_type=ct,size=len(r.content))
 except Exception as e:return n,dict(url=u,error=str(e))
with concurrent.futures.ThreadPoolExecutor(max_workers=12) as ex:out=dict(ex.map(get,urls.items()))
P.joinpath('downloaded.json').write_text(json.dumps(out,indent=2))
print(json.dumps(out,indent=2))
for name,base in [('Yulu','https://www.yulu.bike'),('Zypp_Electric','https://zypp.app'),('Kinetic_Green','https://kineticgreen.com')]:
 h=P.joinpath(name+'.html').read_text(encoding='utf-8')
 print(name,re.findall(r'<script[^>]*src=["\x27]([^"\x27]+)',h))
