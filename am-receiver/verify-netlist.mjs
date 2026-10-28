import fs from 'node:fs';
const state=JSON.parse(fs.readFileSync(new URL('./build-state.json',import.meta.url),'utf8'));
const parent=new Map();
function root(x){if(!parent.has(x))parent.set(x,x);if(parent.get(x)!==x)parent.set(x,root(parent.get(x)));return parent.get(x);}
function normalize(x){if(!x.startsWith('BB.'))return x;const n=x.slice(3);if(n[0]==='Y'||n[0]==='Z')return 'BB.'+n[0];return 'BB.'+('FGHIJ'.includes(n[0])?'upper':'lower')+n.slice(1);}
for(const edge of state.graph){if(edge.some(p=>p.error>1))throw Error('Unresolved wire endpoint');parent.set(root(normalize(edge[0].pin)),root(normalize(edge[1].pin)));}
const pairs=[
 ['D1.Anode','L1.Terminal 1'],['D1.Anode','Ctune.Terminal 1'],
 ['D1.Cathode','Rdet.Terminal 2'],['D1.Cathode','Cdet.Terminal 1'],['D1.Cathode','Cin.Terminal 1'],
 ['Cin.Terminal 2','Qamp.Base'],['Rbias1.Terminal 1','Qamp.Base'],['Rbias1.Terminal 2','battery.Positive'],
 ['Rc.Terminal 2','battery.Positive'],['Rc.Terminal 1','Qamp.Collector'],['Qamp.Emitter','Re.Terminal 2'],
 ['Re.Terminal 1','battery.Negative'],['L1.Terminal 2','battery.Negative'],['Ctune.Terminal 2','battery.Negative'],
 ['scopeAudio.Positive','battery.Positive'],['scopeAudio.Negative','Qamp.Collector'],
 ['scopeDet.Positive','D1.Cathode'],['scopeDet.Negative','battery.Negative'],
 ['scopeRF.Positive','D1.Anode'],['scopeRF.Negative','battery.Negative'],
 ['Rmod.Terminal 1','Qmod.Collector'],['Rmod.Terminal 1','Ctest.Terminal 1'],['Ctest.Terminal 2','Rsource.Terminal 1'],['Rsource.Terminal 2','D1.Anode']
];
for(const [a,b] of pairs)if(root(normalize(a))!==root(normalize(b)))throw Error(`Missing connection: ${a} -> ${b}`);
for(const [a,b] of [['battery.Positive','battery.Negative'],['Ctest.Terminal 1','Ctest.Terminal 2'],['D1.Anode','D1.Cathode']])if(root(normalize(a))===root(normalize(b)))throw Error(`Short circuit: ${a} -> ${b}`);
console.log(`PASS: ${state.graph.length} wires; ${pairs.length} required connections; power, diode and test-coupling isolation verified.`);
