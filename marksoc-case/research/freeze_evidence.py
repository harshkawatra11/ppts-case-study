"""Freeze verified evidence without promoting search leads."""
import json,pathlib,re,urllib.parse,hashlib
R=pathlib.Path(__file__).resolve().parent
REQUIRED='evidence_id lane claim publisher source_title source_url publication_date period_covered access_date page_or_section supporting_excerpt status source_type jurisdiction_or_population limitations permitted_report_section'.split()
def rows(p):
 d=json.loads(p.read_text(encoding='utf-8-sig')); return d if isinstance(d,list) else d.get('evidence',d.get('rows',[]))
def norm(u):
 p=urllib.parse.urlsplit(u); q=urllib.parse.parse_qsl(p.query); q=[(k,v) for k,v in q if not k.startswith('utm_') and k not in ('msockid','_rsc')];return urllib.parse.urlunsplit((p.scheme,p.netloc.lower(),p.path.rstrip('/'),urllib.parse.urlencode(q),''))
def run():
 allrows=[];issues=[]
 for lane in 'BCDEFGHI':
  p=R/'raw'/('R-'+lane+'.json')
  if not p.exists():issues.append('Missing lane '+lane);continue
  for x in rows(p):
   missing=[k for k in REQUIRED if k not in x]
   if missing:issues.append(x.get('evidence_id','?')+' missing '+','.join(missing))
   if x.get('access_date','')>'2026-10-28':issues.append(x['evidence_id']+' future access date')
   if x.get('status') not in ('VERIFIED','CORRECTED','SEARCH_ONLY','UNVERIFIABLE','SUPERSEDED','OUT_OF_SCOPE'):issues.append(x['evidence_id']+' invalid status')
   allrows.append(x)
 ids=[x['evidence_id'] for x in allrows]
 if len(ids)!=len(set(ids)):issues.append('Duplicate evidence IDs')
 usable=[x for x in allrows if x.get('status') in ('VERIFIED','CORRECTED')]
 grouped={}
 for x in usable:grouped.setdefault(norm(x['source_url']),[]).append(x)
 reg=[];rid={};quotes={}
 for i,(url,rr) in enumerate(sorted(grouped.items()),1):
  sid='S'+str(i).zfill(3);x=rr[0]
  qw=sum(len(re.findall(r'\S+',z.get('supporting_excerpt',''))) for z in rr)
  quotes[url]=qw
  if qw>20:issues.append('Quote record cap '+str(qw)+' '+url)
  primary=any('primary' in z.get('source_type','').lower() for z in rr)
  reg.append(dict(source_id=sid,url=url,title=x['source_title'],publisher=x['publisher'],publication_date=x['publication_date'],access_date=x['access_date'],primary=primary,evidence_ids=[z['evidence_id'] for z in rr]))
  for z in rr:rid[z['evidence_id']]=sid
 primary=sum(x['primary'] for x in reg)
 if len(reg)<60:issues.append('Fewer than60 distinct verified sources')
 if reg and primary/len(reg)<.7:issues.append('Primary source share below70%')
 result=dict(status='PASS' if not issues else 'FAIL',date='2026-10-28',rows=len(allrows),usable_rows=len(usable),sources=len(reg),primary_sources=primary,issues=issues,quotation_words_by_url=quotes)
 (R/'raw'/'evidence-register.json').write_text(json.dumps(allrows,ensure_ascii=False,indent=2),encoding='utf-8')
 (R/'raw'/'sources.json').write_text(json.dumps(reg,ensure_ascii=False,indent=2),encoding='utf-8')
 (R/'raw'/'rid_to_sid.json').write_text(json.dumps(rid,indent=2),encoding='utf-8')
 (R/'qa'/'evidence-checks.json').write_text(json.dumps(result,ensure_ascii=False,indent=2),encoding='utf-8')
 md='# Verified source register\n\nContext only. Access dates refer to actual full-text inspections. Excluded statuses remain in the raw evidence register.\n\n|ID|Publisher and source|Published|Accessed|Type|Evidence IDs|\n|---|---|---|---|---|---|\n'
 for x in reg:md+='|'+x['source_id']+'|['+x['publisher']+': '+x['title'].replace('|','/')+']('+x['url']+')|'+str(x['publication_date'] or 'Undated')+'|'+x['access_date']+'|'+('Primary' if x['primary'] else 'Secondary')+'|'+', '.join(x['evidence_ids'])+'|\n'
 (R/'raw'/'sources.md').write_text(md,encoding='utf-8')
 print(json.dumps({k:v for k,v in result.items() if k!='quotation_words_by_url'},ensure_ascii=False,indent=2))
 return result
if __name__=='__main__':run()
