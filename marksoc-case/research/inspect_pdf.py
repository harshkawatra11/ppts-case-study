"""Render every page and report geometry defects; human review must inspect contact sheets and selected full pages."""
import pathlib,json,sys,re,math
import pymupdf as fitz
R=pathlib.Path(__file__).resolve().parent
name='rebuild-card' if '--card' in sys.argv else 'dobaara-research'
p=R.parent/(name+'.pdf') if '--card' in sys.argv else R/(name+'.pdf')
out=R/'qa'/name;out.mkdir(parents=True,exist_ok=True)
doc=fitz.open(p);pages=[]
for i,page in enumerate(doc):
 text=page.get_text();bad=[]
 for b in page.get_text('dict')['blocks']:
  for line in b.get('lines',[]):
   for s in line.get('spans',[]):
    x0,y0,x1,y1=s['bbox']
    if x0<-1 or y0<-1 or x1>page.rect.width+1 or y1>page.rect.height+1:bad.append({'text':s['text'],'bbox':s['bbox']})
 page.get_pixmap(matrix=fitz.Matrix(1,1),alpha=False).save(out/('page-'+str(i+1).zfill(3)+'.png'))
 pages.append({'page':i+1,'width':page.rect.width,'height':page.rect.height,'text_characters':len(text.strip()),'links':len(page.get_links()),'outside_page':bad,'replacement_glyph':text.count('\ufffd')})
for start in range(0,len(doc),12):
 sheet=fitz.open();c=sheet.new_page(width=900,height=1700)
 for j in range(min(12,len(doc)-start)):
  col=j%3;row=j//3;x=col*300;y=row*425
  c.insert_text((x+6,y+14),'Page '+str(start+j+1),fontsize=11,color=(.04,.16,.36))
  pix=doc[start+j].get_pixmap(matrix=fitz.Matrix(.45,.45),alpha=False)
  c.insert_image(fitz.Rect(x+6,y+23,x+294,y+419),stream=pix.tobytes('png'),keep_proportion=True)
 c.get_pixmap(alpha=False).save(out/('contact-'+str(start//12+1).zfill(3)+'.png'))
 sheet.close()
summary={'pdf':str(p),'pages':len(doc),'searchable':all(x['text_characters']>0 for x in pages),'blank_candidates':[x['page'] for x in pages if x['text_characters']<60],'outside_page_count':sum(len(x['outside_page']) for x in pages),'replacement_glyphs':sum(x['replacement_glyph'] for x in pages),'page_records':pages,'human_review_required':True}
(out/'page-checks.json').write_text(json.dumps(summary,indent=2),encoding='utf-8')
print(json.dumps({k:v for k,v in summary.items() if k!='page_records'},indent=2))
