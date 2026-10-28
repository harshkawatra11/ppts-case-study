from pathlib import Path
import requests,json,concurrent.futures
P=Path(__file__).parent
jobs=json.loads(P.joinpath('upload_jobs.json').read_text())
def upload(j):
 name=j['brand'].replace(' ','_');ext='webp' if name=='Battery_Smart' else 'png'
 if name=='IEEE_DTU':name='IEEE_alternate'
 f=P/(name+'.'+ext)
 r=requests.post(j['url'],data=f.read_bytes(),headers={'Content-Type':'image/'+ext},timeout=40)
 return {'brand':j['brand'],'status':r.status_code,'response':r.json()}
with concurrent.futures.ThreadPoolExecutor(max_workers=8) as ex:out=list(ex.map(upload,jobs))
P.joinpath('upload_results.json').write_text(json.dumps(out,indent=2));print(json.dumps(out,indent=2))
