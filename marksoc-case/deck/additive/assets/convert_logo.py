import pymupdf as f,json,pathlib
p=pathlib.Path(r'C:/Users/harsh/Desktop/HARSH/PPTS-CASE-STUDY/nsut-innovators-court/marksoc-case/deck/additive/assets')
s=f.open(p/'counterpoint.svg');d=f.open('pdf',s.convert_to_pdf());d[0].get_pixmap(matrix=f.Matrix(6,6),alpha=True).save(p/'counterpoint.png')
for k in ['sanchar-saathi','nch','counterpoint','gsma']:
 a=f.Pixmap(p/(k+'.png'));print(k,a.width,a.height)
