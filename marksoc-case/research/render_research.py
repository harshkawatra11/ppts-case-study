"""Render the report or two-page rebuild card using embedded local fonts."""
import pathlib,re,html,base64,subprocess,sys,json
from markdown_it import MarkdownIt
R=pathlib.Path(__file__).resolve().parent
card='--card' in sys.argv
src=R.parent/'rebuild-card.md' if card else R/'dobaara-research.md'
text=src.read_text(encoding='utf-8'); md=MarkdownIt('commonmark').enable('table');md.options['html']=False
font=[]
for name,weight,style in [('arial.ttf',400,'normal'),('arialbd.ttf',700,'normal'),('ariali.ttf',400,'italic')]:
 data=base64.b64encode((pathlib.Path('C:/Windows/Fonts')/name).read_bytes()).decode()
 font.append("@font-face{font-family:Report;src:url(data:font/ttf;base64,"+data+");font-weight:"+str(weight)+";font-style:"+style+";}")
tokens=md.parse(text);toc=[];seen={}
for i,t in enumerate(tokens):
 if t.type=='heading_open':
  name=tokens[i+1].content;slug=re.sub('[^a-z0-9]+','-',name.lower()).strip('-');seen[slug]=seen.get(slug,0)+1
  if seen[slug]>1:slug+='-'+str(seen[slug])
  t.attrSet('id',slug)
  if t.tag=='h2':toc.append((name,slug))
body=md.renderer.render(tokens,md.options,{})
if not card:
 start29=body.find('<h2 id="t29-material-assumption-alternatives-and-consequences"')
 end29=body.find('<h2 id="checks"',start29)
 if start29>=0 and end29>start29:
  segment=body[start29:end29]
  def readable_alternatives(match):
   table=match.group(0)
   headers=re.findall(r'<th\b[^>]*>([\s\S]*?)</th>',table)
   records=re.findall(r'<tr\b[^>]*>([\s\S]*?)</tr>',table)
   cards=[]
   for record in records:
    cells=re.findall(r'<td\b[^>]*>([\s\S]*?)</td>',record)
    if not cells:continue
    rows=[]
    for key,value in zip(headers,cells):
     if not re.sub('<[^>]+>','',value).strip():continue
     label=key.replace('_',' ')
     rows.append('<tr><td style="width:28%">'+label+'</td><td>'+value+'</td></tr>')
    cards.append('<h3>Alternative reading: '+cells[0]+'</h3><table><thead><tr><th>Field</th><th>Value or interpretation</th></tr></thead><tbody>'+''.join(rows)+'</tbody></table>')
   return '<p>Each alternative is displayed as a field/value record; empty fields are omitted. All values retain the model output precision.</p>'+''.join(cards)
  segment=re.sub(r'<table\b[\s\S]*?</table>',readable_alternatives,segment)
  body=body[:start29]+segment+body[end29:]
if not card:
 start=body.find('<h2 id="appendix-b-model-working-t1-to-t29"')
 end=body.find('<h2 id="appendix-c-glossary',start)
 if start>=0 and end>start:body=body[:start]+'<div class="model-appendix">'+body[start:end]+'</div>'+body[end:]
css=''.join(font)+'''
@page{size:A4;margin:19mm 17mm 20mm;@bottom-left{content:"Project DOBAARA | Model 9b3628d94d | v1.0";font:7pt Report;color:#1F4E9A}@bottom-right{content:counter(page);font:8pt Report}}
*{box-sizing:border-box}body{font:10pt/1.48 Report,Arial,sans-serif;color:#101820;margin:0}h1,h2,h3,h4{color:#0B2A5B;line-height:1.23;break-after:avoid}h1{font-size:29pt;margin:0 0 8mm;border-bottom:4px solid #F5B700;padding-bottom:5mm}h2{font-size:16pt;border-bottom:2px solid #F5B700;padding:0 0 3mm;margin:9mm 0 4mm;break-before:page}h3{font-size:12pt;margin:6mm 0 2mm}h4{font-size:10.5pt;margin:4mm 0 2mm}p{margin:0 0 3.2mm;orphans:3;widows:3}a{color:#1F4E9A;text-decoration:none;overflow-wrap:anywhere}table{border-collapse:collapse;table-layout:auto;width:100%;font-size:8pt;line-height:1.34;margin:3mm 0 5mm;break-inside:auto}thead{display:table-header-group}tr{break-inside:avoid}th{background:#0B2A5B;color:white;text-align:left;padding:2mm;border:1px solid #0B2A5B}td{border:1px solid #BBC9DC;padding:1.7mm;vertical-align:top;overflow-wrap:anywhere}tbody tr:nth-child(even){background:#F0F4FA}blockquote{border-left:4px solid #1F4E9A;background:#E5EDF8;margin:4mm 0;padding:3mm 4mm}blockquote p:last-child{margin:0}ul,ol{padding-left:6mm}li{margin-bottom:1mm}code{font-family:Report;font-size:.92em;background:#F0F4FA;overflow-wrap:anywhere}pre{white-space:pre-wrap;break-inside:avoid;background:#F0F4FA;padding:3mm}hr{border:0;border-top:1px solid #BBC9DC;margin:5mm 0}.contents{break-after:page}.contents h2{break-before:auto}.contents ol{list-style:none;padding:0}.contents li{padding:1.3mm 0;border-bottom:1px solid #BBC9DC}.version{color:#1F4E9A;font-size:9pt}.cover{break-after:page;min-height:245mm;background:#0B2A5B;color:white;padding:15mm 12mm;border-left:6mm solid #F5B700}.cover h1{color:white;font-size:37pt}.cover .eyebrow{color:#F5B700;letter-spacing:1.2px;font-size:10pt;font-weight:bold}.cover .subtitle{font-size:17pt;line-height:1.45}.cover .note{font-size:10pt;margin-top:25mm;color:#DCE6F5}
'''
css+='@page modelwide{size:A3 landscape;margin:16mm 15mm 18mm}.model-appendix{page:modelwide}.model-appendix table{font-size:9pt;line-height:1.35}.model-appendix td,.model-appendix th{padding:1.8mm}.model-appendix h2{break-before:page}'
if card:
 css+='body{font-size:9.3pt;line-height:1.36}h1{font-size:22pt;margin-bottom:4mm}h2{font-size:13pt;margin:5mm 0 3mm;break-before:auto}h2[id^="page-2"]{break-before:page}h3{font-size:10.7pt;margin:4mm 0 2mm}table{font-size:8.5pt;margin:2mm 0 3mm}p{margin-bottom:2.5mm}'
 front=''
else:
 front='<section class="cover"><p class="eyebrow">MARKSOC DTU CASE COMPETITION 2026</p><h1>Project<br>DOBAARA</h1><p class="subtitle">Research, decision working and defence of the Tikau Phones turnaround</p><p class="note">Team IdeaForge<br>Research version 1.0 | 28 October 2026<br>Model 9b3628d94d<br><br>This document supports preparation. The competition assesses the submitted PDF deck.<br><br>Fictional case analysis and external context are kept separate.</p></section><nav class="contents"><h2>Contents</h2><ol>'+''.join('<li><a href="#'+slug+'">'+html.escape(n)+'</a></li>'for n,slug in toc)+'</ol></nav>'
title='DOBAARA numerical rebuild card' if card else 'Project DOBAARA research'
doc='<!doctype html><html lang="en"><head><meta charset="utf-8"><title>'+title+'</title><style>'+css+'</style></head><body>'+front+body+'</body></html>'
out=src.with_suffix('.html');pdf=src.with_suffix('.pdf');out.write_text(doc,encoding='utf-8')
chrome=pathlib.Path('C:/Program Files/Google/Chrome/Application/chrome.exe')
cmd=[str(chrome),'--headless=new','--disable-gpu','--no-pdf-header-footer','--allow-file-access-from-files','--virtual-time-budget=10000','--print-to-pdf='+str(pdf),out.resolve().as_uri()]
r=subprocess.run(cmd,capture_output=True,timeout=300)
if r.returncode or not pdf.exists():raise RuntimeError(r.stderr.decode(errors='replace')[-2000:])
print(json.dumps({'html':str(out),'pdf':str(pdf),'bytes':pdf.stat().st_size}))
