import json,pathlib,re,sys
D=pathlib.Path(__file__).resolve().parent;root=D.parents[2]
kit=(root/'deck-system/figma-deck-kit.js').read_text(encoding='utf-8')
old=(D.parent/'preamble.js').read_text(encoding='utf-8')
palette=old[old.index('const C = {'):old.index('};',old.index('const C = {'))+2]
kit=re.sub(r'const C = \{.*?\n\};',lambda m:palette,kit,count=1,flags=re.S)
v=json.loads((D.parent/'values.js').read_text(encoding='utf-8')[10:].strip().rstrip(';'))
helpers=(D/'helpers.js').read_text(encoding='utf-8')
for n in map(int,sys.argv[1:]):
    body=(D/f's{n:02d}.js').read_text(encoding='utf-8-sig')
    keys=set(re.findall(r'\bV\.([\w]+)',body))
    for i,part in enumerate(body.split('// ===== PART =====')):
        code=kit+'\nawait loadDeckFonts();\n'+helpers+'\nconst V = '+json.dumps({k:v[k] for k in keys},ensure_ascii=False)+';\n'+part
        if 'const s=' not in part and 'const s =' not in part:code=code.replace('\n'+part,'\nconst s=await figma.getNodeByIdAsync('+json.dumps(json.loads((D.parent/'slide-ids.json').read_text())['S%d'%n])+');\n'+part)
        (D/f'run_{n:02d}_{i+1}.js').write_text(code,encoding='utf-8');print(n,i+1,len(code))
