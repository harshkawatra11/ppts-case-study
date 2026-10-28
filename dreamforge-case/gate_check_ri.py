import re,io,glob,collections
rows=[l for l in io.open(r'research\raw\R-I-pipeline.md',encoding='utf-8') if re.match(r'^\|\s*RI\d',l)]
verified=[l for l in rows if 'VERIFIED' in l or 'CORRECTED' in l]
print('rows',len(rows),'verified_or_corrected',len(verified),'pct', round(100*len(verified)/max(1,len(rows)),1))
reg=[l.split('|')[1].strip() for l in io.open(r'research\raw\sources.md',encoding='utf-8') if l.startswith('| S')]
print('total_sources',len(reg),'dup_sids',[k for k,v in collections.Counter(reg).items() if v>1])
