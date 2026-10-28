import fitz,json,pathlib
p=pathlib.Path(r'C:/Users/harsh/Desktop/HARSH/PPTS-CASE-STUDY/nsut-innovators-court/marksoc-case/deck/additive')
d=fitz.open()
for f in sorted((p/'exports').glob('slide-*.pdf')):
 s=fitz.open(f); d.insert_pdf(s)
d.save(p/'dobaara-submission.pdf',garbage=4,deflate=True)
for i,page in enumerate(d):
 page.get_pixmap(matrix=fitz.Matrix(1,1)).save(p/'previews'/f'slide-{i+1:02}.png')
print(json.dumps({'pages':len(d),'sizes':list({(p.rect.width,p.rect.height) for p in d})}))