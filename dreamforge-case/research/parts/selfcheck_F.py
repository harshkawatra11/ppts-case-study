import re,io,sys
t=io.open(r'C:\Users\harsh\Desktop\HARSH\PPTS-CASE-STUDY\nsut-innovators-court\dreamforge-case\research\parts\part-F.md',encoding='utf-8').read()
print('words',len(t.split()),'tables',len(re.findall(r'^\|[ :|-]+\|\s*$',t,re.M)),'dashes',len(re.findall('[\u2014\u2013]',t)),'excl',t.count('!'),'ph',len(re.findall(r'<[a-z][^>]{0,20}>',t)),'rs',len(re.findall(r'\bRs\.? ?\d',t)))
# per-section breakdown
secs=re.split(r'(?m)^## ',t)
for s in secs[1:]:
    head=s.split('\n',1)[0]
    body='## '+s
    print('SEC',head[:60],'words',len(body.split()),'tables',len(re.findall(r'^\|[ :|-]+\|\s*$',body,re.M)))
