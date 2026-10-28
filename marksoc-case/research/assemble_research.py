"""Research assembly and conservative diagnostics. Never interprets tag presence as factual entailment."""
import pathlib,json,re,hashlib,collections,sys
R=pathlib.Path(__file__).resolve().parent;P=R.parent
TAG=re.compile(r'\[([^\]\n]+)\]')
TOKEN=re.compile(r'C-[A-Za-z0-9]+|A\d{2}|M|T\d{1,2}|S\d{3}|[B-I]\d{2,3}')
EXT=re.compile(r'\b(?:S\d{3}|[B-I]\d{2,3})\b')
NUM=re.compile(r'₹\s*[−+\-]?\d|\d(?:\.\d+)?%|\d[\d,]*(?:\.\d+)?\s+(?:lakh|crore|phones|orders|customers|respondents|weeks|months|days)\b',re.I)
def refs(group):
 out=[]
 for item in re.split(r'[,;]',group):
  item=item.strip()
  if TOKEN.fullmatch(item):out.append(item);continue
  m=re.fullmatch(r'([B-I]|T|S|A)(\d{1,3})\s*(?:-|to)\s*(?:\1)?(\d{1,3})',item)
  if m:
   pre,lo,hi=m.groups();width=len(lo)
   if int(lo)<=int(hi) and int(hi)-int(lo)<100:out.extend(pre+str(i).zfill(width) for i in range(int(lo),int(hi)+1))
 return out

def read(p):return p.read_text(encoding='utf-8-sig').replace('\r','')
def words(s):return len(re.findall(r'\b[\w]+(?:[’\x27-][\w]+)*\b',s))
def authored_only(s):
 # Exclude clearly identified generated reproductions from count; retain manually authored analytical tables.
 s=re.sub(r'Required decision table, reproduced from T15[^\n]*\n\s*\n(?:\|[^\n]*\n)+','',s)
 s=re.sub(r'Supporting T24 heat map, reproduced[^\n]*\n\s*\n(?:\|[^\n]*\n)+','',s)
 s=re.sub(r'\[[^\]\n]+\]','',s)
 s=re.sub(r'\b(?:C-[A-Za-z0-9]+|R\d{2}-\d{2}|A\d{2}|T\d{1,2}|S\d{3}|[B-I]\d{2,3})\b','',s)
 return s

def blocks(s):return [x.strip() for x in re.split(r'\n\s*\n',s) if x.strip()]
def main():
 paths=[R/'parts'/('part-'+x+'.md') for x in 'ABCDEF']+[R/'parts'/'appendix-C.md',R/'parts'/'appendix-D.md']
 missing=[str(p.relative_to(P)) for p in paths if not p.exists()]
 if missing:print(json.dumps({'status':'FAIL','missing_parts':missing},indent=2));return1=1;return return1
 parts=[read(p) for p in paths];body='\n\n'.join(parts[:6]);authored='\n\n'.join(parts)
 evidence=json.loads(read(R/'raw'/'evidence-register.json'));emap={e['evidence_id']:e for e in evidence};sources=json.loads(read(R/'raw'/'sources.json'));sidmap=json.loads(read(R/'raw'/'rid_to_sid.json'))
 caseids=set(re.findall(r'^\| (C-[A-Za-z0-9]+) \|',read(P/'case'/'01-case.md'),re.M));valid=caseids|{'M'}|{'A'+str(i).zfill(2) for i in range(1,21)}|{'T'+str(i) for i in range(1,30)}|set(emap)|{x['source_id'] for x in sources}
 issues=[];diagnostics=[];citations=set();tableids=[];tablehash=[];sectionnums=[];numeric=[];context=[];badrefs=[]
 for part in parts[:6]:
  current=-1
  partblocks=blocks(part)
  for bi,block in enumerate(partblocks):
   h=re.match(r'## (\d+)\.',block)
   if h:current=int(h.group(1));sectionnums.append(current)
   tags=[t for group in TAG.findall(block) for t in refs(group)]
   if block.startswith('|') and bi>0:
    caption=partblocks[bi-1]
    if caption.startswith(('Table ','Required decision table','Supporting T')):
     tags.extend(t for group in TAG.findall(caption) for t in refs(group))
     tags.extend(re.findall(r'\bT\d{1,2}\b',caption))
    if block.startswith('| Case ID'):tags.extend(re.findall(r'\bC-[A-Za-z0-9]+\b',block))
   citations.update(tags)
   for tag in tags:
    if tag not in valid:badrefs.append(tag)
    if tag in emap and emap[tag]['status'] not in ('VERIFIED','CORRECTED'):badrefs.append(tag+':unverified')
   if tags and any(EXT.fullmatch(t) for t in tags) and not(12<=current<=17 or current==0 or ('context' in block.lower() and current in (20,27,36))):context.append((current,block[:150]))
   if NUM.search(block) and not tags and not block.startswith('#') and 'Proposed' not in block and 'Team judgement' not in block:numeric.append((current,block[:200]))
   tableids+=re.findall(r'\bR\d{2}-\d{2}\b',block[:300])
  countpart=re.sub(r'Required decision table, reproduced from T15[^\n]*\n\s*\n(?:\|[^\n]*\n)+','',part)
  countpart=re.sub(r'Supporting T24 heat map, reproduced[^\n]*\n\s*\n(?:\|[^\n]*\n)+','',countpart)
  for t in re.findall(r'(?m)^\|.*\n\|[ :|\-]+\|\s*\n(?:\|.*\n?)+',countpart):tablehash.append(hashlib.sha256(re.sub(r'\s+',' ',t).encode()).hexdigest())
 usedsources={sidmap[t] for t in citations if t in sidmap}|{t for t in citations if re.fullmatch(r'S\d{3}',t)}
 for s in sources:
  if s['url'] in authored:usedsources.add(s['source_id'])
 para=[re.sub(r'\s+',' ',b).lower() for b in blocks(authored) if len(b)>180 and not b.startswith(('|','#','>'))];dups=[(s[:160],n) for s,n in collections.Counter(para).items() if n>1]
 stale=[]
 for pat in (r'₹2,649',r'₹1,257(?![\d.])',r'₹14\.3\s*lakh'):
  for m in re.finditer(pat,authored):
   window=authored[max(0,m.start()-90):m.end()+100]
   if not re.search(r'stale|correct|old|histor|replace',window,re.I):stale.append(window)
 authoredtables=len(tablehash);uniquetables=len(set(tablehash));allsections=set(sectionnums)
 if allsections!=set(range(38)):issues.append('Missing or unexpected numbered sections')
 if len(sectionnums)!=38:issues.append('Duplicate or missing section openings')
 if words(authored_only(authored))<85000:issues.append('Authored words below85000')
 if uniquetables<180:issues.append('Distinct authored tables below180')
 if re.search('[—–]',authored):issues.append('Em or en dashes remain in authored text')
 if badrefs:issues.append('Orphan or unverified citations')
 if context:issues.append('External context isolation failures')
 if stale:issues.append('Unresolved stale canonical values')
 if dups:issues.append('Repeated authored paragraphs')
 if len(usedsources)<60:issues.append('Fewer than60 substantively cited distinct sources')
 if numeric:issues.append('Numeric claim blocks require explicit citation or proposed-rule label')
 if len(tablehash)!=len(set(tablehash)):issues.append('Exact repeated tables require removal or generated classification')
 if len(tableids)!=len(set(tableids)):diagnostics.append('Repeated table identifiers: inspect references versus captions')
 header='# Project DOBAARA: research and calculation record\n\n**Fund the Tikau Report and Battery85 promise, then add the February shift to reach modelled March break-even.**\n\nPrepared for: MarKSoc DTU Case Competition 2026. Research version 1.0, 28 October 2026. Model 9b3628d94d.\n\n---\n\n'
 modelworking=read(P/'model'/'model_tables.md')
 modelworking=re.sub(r'(^## T17[^\n]*\n)',r'\1\nInterpretation note: the return-rate row gives the 6.0% board limit, not an EBITDA-zero point. The other rows concern local EBITDA break-even. Preserve the case denominator and read the return row with T27. [C-T3t, T27]\n',modelworking,flags=re.M)
 generated='\n\n## Appendix A: verified bibliography\n\n'+read(R/'raw'/'sources.md')+'\n\n## Appendix B: model working T1 to T29\n\n'+re.sub(r'^# .*\n','',modelworking,count=1)+'\n\n'+re.sub(r'^# .*\n','',read(P/'audit'/'extended-model-tables.md'),count=1)
 document=header+body+generated+'\n\n'+'\n\n'.join(parts[6:])
 if words(document)<90000:issues.append('Total words below90000')
 result=dict(status='PASS' if not issues else 'FAIL',authored_words=words(authored_only(authored)),total_words=words(document),authored_tables=authoredtables,unique_authored_tables=uniquetables,substantive_source_citations=len(usedsources),case_ids_referenced=len(caseids&set(re.findall(r'\bC-[A-Za-z0-9]+\b',authored))),case_ids_total=len(caseids),missing_case_ids=sorted(caseids-set(re.findall(r'\bC-[A-Za-z0-9]+\b',authored))),numbered_sections=sectionnums,issues=issues,diagnostics=diagnostics,numeric_blocks_for_review=numeric,context_leaks=context,invalid_refs=sorted(set(badrefs)),stale_values=stale,duplicate_paragraphs=dups,limitations=['Tag validity does not prove claim entailment. Human claim-level review remains mandatory.','Table hashes detect exact duplication; distinct analytical purpose must be reviewed.','Humanization semantic equivalence requires a numerical and editorial review.'])
 if caseids-set(re.findall(r'\bC-[A-Za-z0-9]+\b',authored)):result['issues'].append('Case coverage citations missing');result['status']='FAIL'
 (R/'dobaara-research.md').write_text(document,encoding='utf-8')
 (R/'qa'/'assembly-checks.json').write_text(json.dumps(result,ensure_ascii=False,indent=2),encoding='utf-8')
 print(json.dumps({k:v for k,v in result.items() if k not in ('numeric_blocks_for_review','duplicate_paragraphs')},ensure_ascii=False,indent=2));return int(result['status']!='PASS')
if __name__=='__main__':sys.exit(main())
