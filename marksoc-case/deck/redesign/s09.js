const s=await resetBody('3:11','Intervene before March: 1,838 weekly orders is break-even, while joint downside cuts EBITDA to −₹8.7 lakh','Source: team model 9b3628d94d, T17 to T20 | weekly = monthly / 4.33 (A13); stress inputs ±25% (A16) | April assumes new growth money (A15) | owners and actions are proposed');
const a=box(s,64,310,1136,372,'MANAGEMENT BY EXCEPTION: REVIEW WEEKLY FROM 1 FEBRUARY',{dark:R.navy});
table(a,14,54,[190,310,190,418],['Signal / owner','Plan → warning → limit','Review rule','Action on breach'],[
 ['Orders / Growth','1,923 → 1,838 / week','Two weeks below 1,838','Audit report placement; put store and referral effort into demos'],
 ['Returns / Lab','4.5% → 5.5% → 6.0%','Any week above 5.5%','Find the channel and batch; retest batteries and condition'],
 ['Good swaps / Lab','40% → 50% → 55%','Any week above 50%','Read at intake; negotiate lower prices for weak-battery Good phones']
],{hh:58,rh:82});
tx(a,14,327,1108,'Warnings create time to act; 55% Good swaps is a break-even point, not the operating target.',{style:'Bold',color:R.red});
const b=box(s,1220,310,636,372,'SENSITIVITY: ONE INPUT AT A TIME',{dark:R.blue});
const L=230,W=355,X=v=>L+W*v/10;[0,5.6,10].forEach(v=>{addRect(b,X(v),67,1,216,v===5.6?R.red:C.surface);tx(b,X(v)-22,45,44,String(v),{align:'CENTER',color:v===5.6?R.red:C.ink});});
V.tor.forEach((r,i)=>{const yy=86+i*39;tx(b,14,yy-5,210,r[0],{style:'Bold'});addRect(b,X(r[1]),yy+4,X(5.6)-X(r[1]),18,R.gold,C.ink,1);addRect(b,X(5.6),yy+4,X(r[2])-X(5.6),18,R.blue,C.ink,1);});
tx(b,14,296,608,'Gold: input 25% worse. Blue: 25% better.',{style:'Bold'});tx(b,14,332,608,'₹ lakh EBITDA; every single downside stays positive.');
const c=box(s,64,702,650,330,'JOINT SCENARIOS: THE COMBINATION CAN FAIL');
bars(c,14,58,622,[{l:'Bear',v:-8.7,t:'−8.7',c:R.red},{l:'Base',v:5.6,t:'+5.6',c:R.blue},{l:'Bull',v:20.5,t:'+20.5',c:R.green}],{lw:118,rh:43,min:-12,max:25,vw:92});
table(c,14,203,[196,142,142,142],['March','Bear','Base','Bull'],[['Returns','5.3%','4.5%','3.8%'],['All four tests','FAIL','PASS','PASS']],{hh:34,rh:36});
tx(c,14,285,622,'Joint bear: all five uncertain effects 25% worse.');
const d=box(s,734,702,584,330,'THE INTERVENTION TREE');
const steps=[['ORDERS BELOW FLOOR','Check visibility of the proof before adding spend'],['RETURNS ABOVE WARNING','Fix the batch and channel before scaling sales'],['SWAPS ABOVE WARNING','Reprice sourcing; do not weaken the 85% promise']];
steps.forEach((r,i)=>{const yy=55+i*86;const f=addFrame(d,14,yy,210,65,i===2?R.gold:C.tint,C.ink,1.5,'TRIGGER');tx(f,8,7,194,r[0],{style:'Bold',color:R.navy});tx(d,237,yy+1,331,r[1],{style:'Bold'});});
const e=box(s,1338,702,518,330,'APRIL: FUND TRADE IN IN STAGES');
table(e,14,52,[186,154,150],['Option','EBITDA','vs plan'],[['Keep B1+B2+shift','5.6','0.0'],['Add B3','−5.5','−11.1'],['Add A','−40.3','−45.9'],['C, first month','21.4','+15.8'],['C, 4,000 trade ins','45.3','+39.7']],{hh:36,rh:34});
tx(e,14,269,490,'₹35 lakh setup; ~2.2-month payback. New funding; retain the third shift.',{style:'Bold',color:R.navy});
return stats(s);
