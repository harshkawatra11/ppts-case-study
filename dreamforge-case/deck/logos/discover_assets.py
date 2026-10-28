import concurrent.futures, requests, re, json
from urllib.parse import urljoin
from pathlib import Path
sites={'Amazon':'https://www.amazon.in','Zypp Electric':'https://zypp.app','Yulu':'https://www.yulu.bike','Battery Smart':'https://www.batterysmart.in','Sun Mobility':'https://www.sunmobility.com','Tata Power':'https://www.tatapower.com','Delhi Govt':'https://delhi.gov.in','MHI':'https://heavyindustries.gov.in','Ather':'https://www.atherenergy.com','TVS Motor':'https://www.tvsmotor.com','Bajaj Auto':'https://www.bajajauto.com','Hero Vida':'https://www.vidaworld.com','Kinetic Green':'https://kineticgreen.com','IEEE DTU':'https://ieeedtu.in','Dream Forge':'https://www.startupgrantsindia.com/competitions/dream-forge-30'}
def get(item):
 name,url=item
 try:
  r=requests.get(url,timeout=25); html=r.text
  Path(__file__).parent.joinpath(name.replace(' ','_')+'.html').write_text(html,encoding='utf-8')
  tags=re.findall(r'<(?:img|source|meta)\b[^>]*>',html,re.I)
  hits=[t for t in tags if re.search(r'logo|og:image|dream.?forge',t,re.I)]
  return name,{'url':r.url,'status':r.status_code,'tags':hits[:24]}
 except Exception as e:return name,{'error':str(e)}
with concurrent.futures.ThreadPoolExecutor(max_workers=12) as ex: out=dict(ex.map(get,sites.items()))
Path(__file__).parent.joinpath('asset_candidates.json').write_text(json.dumps(out,indent=2),encoding='utf-8')
print(json.dumps(out,indent=2))
