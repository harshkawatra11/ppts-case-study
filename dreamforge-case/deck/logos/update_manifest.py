import json
from pathlib import Path
P=Path(__file__).parent
manifest=json.loads(P.joinpath('manifest.json').read_text(encoding='utf-8'))
downloaded={}
for file in ['downloaded.json','downloaded_more.json','downloaded_final.json']:
 for name,item in json.loads(P.joinpath(file).read_text()).items():
  if item.get('file') and item.get('content_type','').startswith('image/'):downloaded[name]=item
overrides={
 'IEEE DTU':('IEEE_DTU.png','https://www.ieeedtu.in/IEEE_DTU_Logo.png'),
 'Amazon':('Amazon.txt','https://cdn.jsdelivr.net/npm/simple-icons@11.15.0/icons/amazon.svg'),
 'Yulu':('Yulu-real.png','https://iconlogovector.com/uploads/images/2026/01/lg-697bf6cb56d59-Yulu.webp'),
 'Battery Smart':('Battery_Smart.png','https://www.batterysmart.in/_next/static/media/logo.9f0b8870.webp'),
 'Tata Power':('Tata_Power.svg','https://cdn.latestlogo.com/media/uploads/2026/09/tata-power.svg'),
 'MHI':('Delhi_Govt.png','https://delhi.gov.in/sites/default/files/emblem-dark.png')}
out=[]
for entry in manifest:
 brand=entry['brand']
 if brand=='Zomato':continue
 entry['slide']='S1 Cover, S7 Thank You' if brand in ['IEEE DTU','Dream Forge','DTU'] else 'S1 Cover mind map'
 entry['backing_box_removed']=True
 if brand=='Dream Forge':
  entry.update(applied=False,rendering='Native text wordmark: DREAM / FORGE 3.0',licence_note='No verified event-specific artwork found; IEEE Day thumbnail rejected as a different mark.')
 else:
  entry.update(applied=True,rendering='Official brand asset or sourced identification mark; native vector where available',licence_note='Brand or institutional mark, used for identification in academic case analysis.')
  if brand in overrides:
   file,url=overrides[brand];entry['file']=str(P.joinpath(file));entry['source_url']=url
  elif brand in downloaded:
   entry['file']=downloaded[brand]['file'];entry['source_url']=downloaded[brand]['url']
 out.append(entry)
P.joinpath('manifest.json').write_text(json.dumps(out,ensure_ascii=False,indent=2),encoding='utf-8')
print('Updated',len(out),'brand records;',sum(e['applied'] for e in out),'marks and one event text wordmark.')
