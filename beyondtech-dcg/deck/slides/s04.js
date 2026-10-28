{ const s = await figma.getNodeByIdAsync("S4");
skelBT(s,2,"3 / 8","DTU PLAN",260,V.f4,"Source: model "+V.hash+", tables T3 and T5 | societies.csv, Instagram counts Oct 2026 | beyondtech.org.in (W05, W06, W08) | registrations: A06 benchmark, est.");
const cp=panel(s,64,316,740,714,"ELEVEN CHANNELS IN THREE LAYERS");
const fills=V.ch.map((r,i)=>i<7?(i%2?C.surfaceAlt:C.white):(V.cac_rows.find(c=>c[0]===r[1])[3]?C.accentTint:C.alertTint));
wrapTable(cp,16,60,[270,100,90,138,110],["Channel","Reach","Enrol.","Cash","CAC"],V.ch.map(r=>[r[1],r[2],r[3],r[4],r[5]]),{rowH:46,headerH:44,fills,name:"channels"});
let lx=lg(cp,16,620,C.white,"Organic"); lx=lg(cp,lx,620,C.accentTint,"Paid, funded"); lg(cp,lx,620,C.alertTint,"Paid, ₹0");
T(cp,16,656,708,22,"Layer 1 costs ₹0: gate the library, show a fee band, run group sessions.",{family:"Inter",style:"Bold",color:C.primaryDeep});
const pp=panel(s,820,316,560,714,"SIX DTU PARTNERS AND THEIR MONTH");
const PR=[["DCG","Workshop after this competition","Dec 2026","150","DCG"],["Placement cell","Info session before the batch","Jan 2027","200","DTU"],
 ["180DC DTU","Casebook session","Feb 2027","150","180DC DTU"],["TEDxDTU","Career segment at the event","Mar 2027","250","TEDxDTU"],
 ["ASSETS DTU","Numbers behind the offer","Apr 2027","80","ASSETS DTU"],["E-Cell DTU","Result stories to 14,600","Sep 2027","n/a","E-Cell DTU"]];
wrapTable(pp,88,60,[108,172,106,80],["Society","Activation","Month","Reg."],PR.map(r=>r.slice(0,4)),{rowH:84,headerH:44,name:"partners"});
PR.forEach((r,i)=>logoSlot(pp,16,60+44+i*84+11,62,62,r[4]));
callout(pp,16,620,528,82,"Order: ","borrow 180DC's relevance first, then the reach of E-Cell and DTU Times (19,000).");
const kp=panel(s,1396,316,460,714,"SPEND BY MONTH, BASE CASE");
hBars(kp,16,60,428,V.months.map((m,i)=>({label:m,value:V.spend[i],text:"₹"+fmtN(V.spend[i]),color:m==="Jan"?C.primary:(m==="Aug"?C.accent:C.primaryDeep)})),{labelW:56,rowH:32,barH:22,valueW:100,max:50000});
bl(kp,16,456,428,[["Oct: ","gate library, fee band"],["Nov: ","reps and mock drive"],["Jan: ","batch opens 15 January"],["Aug: ","placement push (est.)"]],{gap:6});
fine(kp,16,600,428,"Jan peak: batch start (W05). Aug: placement season, est. 1 August. Paid spend never starts before an organic list exists to retarget.");
results.push({slide:s.id,total:s.findAll(()=>true).length,top:s.children.length}); }
