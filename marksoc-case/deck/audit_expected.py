import importlib.util,json,subprocess,pathlib
D=pathlib.Path(__file__).resolve().parent
s=importlib.util.spec_from_file_location('g',D/'gen.py');g=importlib.util.module_from_spec(s);s.loader.exec_module(g)
g.derive()
ids=json.loads((D/'slide-ids.json').read_text())
for n in range(1,13):
    mock=g.rd('mock_figma.js').replace('CODE_JSON',json.dumps(g.compose(n,'S%d'%n)))
    mock=mock.replace('  const issues = [];','  console.log("AUDITJSON"+JSON.stringify(Object.values(slides).flatMap(s=>s.findAll(n=>n.type===\"TEXT\").map(t=>t.characters))));\n  const issues = [];')
    r=subprocess.run(['node','-'],input=mock,capture_output=True,text=True,encoding='utf-8')
    a=json.loads(next(l[9:] for l in r.stdout.splitlines() if l.startswith('AUDITJSON')))
    code='const expected='+json.dumps(a,ensure_ascii=False)+';const s=await figma.getNodeByIdAsync('+json.dumps(ids['S%d'%n])+');const actual=s.findAllWithCriteria({types:["TEXT"]}).map(t=>t.characters);const counts=a=>a.reduce((o,v)=>(o[v]=(o[v]||0)+1,o),{});const e=counts(expected),a=counts(actual);return {slide:'+str(n)+',missing:Object.keys(e).filter(k=>(a[k]||0)<e[k]),extra:Object.keys(a).filter(k=>(e[k]||0)<a[k])};'
    (D/'build'/('audit_%02d.js'%n)).write_text(code,encoding='utf-8')
print('12 audit scripts written')
