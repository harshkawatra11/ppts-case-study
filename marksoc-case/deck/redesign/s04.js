const s=await resetBody('3:6','Proof is the constraint: 91.6% leave the phone page, while the full lab cannot absorb demand without a third shift','Source: case Exhibits 1, 4, 5 and 6 | team model 9b3628d94d, T7 to T9 | visitor survey: multiple responses allowed | service blueprint and release gates are proposed');
const a=box(s,64,310,400,366,'THE CONVERSION LEAK',{dark:R.navy});
[['9,60,000 visits',368],['3,10,000 phone views',330],['26,000 add to cart',290],['4,200 orders',250]].forEach((r,i)=>{const f=addFrame(a,16+(368-r[1])/2,55+i*39,r[1],32,i===3?R.gold:(i%2?C.tint:R.blue),C.ink,1.5,'FUNNEL');tx(f,5,2,r[1]-10,r[0],{style:'Bold',align:'CENTER',color:i===0?C.white:C.ink});});
table(a,16,226,[194,174],['Stage','Conversion'],[['Visit → phone','32.3%'],['Phone → cart','8.4%'],['Cart → order','16.2%']],{rh:31,hh:31});
const b=box(s,484,310,844,366,'BARRIER → PROOF → COMMERCIAL RESPONSE',{dark:R.blue});
table(b,14,54,[230,78,270,238],['Barrier','%','Proof / response','Lever / channel'],[['Battery may fail','46','Own lab reading','B1 + B2'],['Condition unclear','41','Photos + report','B1'],['Warranty too short','31','12-month cover','B2'],['Want to see it','28','Battery demo','Stores'],['Price vs shop','24','Value, not a cut','Refuse A'],['Stolen / locked','22','IMEI check','B1'],['Previous data','12','Wipe certificate','B1']],{hh:42,rh:36});
const c=box(s,1348,310,508,366,'THE PHYSICAL BOTTLENECK');
label(c,14,57,480,'7,200 / 7,200 SELLABLE');addRect(c,14,100,480,25,R.red,C.ink,1.5);tx(c,14,134,480,'Lab output is fully utilised.',{style:'Bold'});
tx(c,14,174,480,'Superb supply: 1,775 / 2,000',{style:'Bold'});addRect(c,14,211,480,17,C.tint,C.ink,1);addRect(c,14,211,480*1775/2000,17,R.gold,C.ink,1);
tx(c,14,246,480,'22 / 200 Good phones fail 80%',{style:'Bold',color:R.red});
for(let i=0;i<200;i++)addEllipse(c,15+(i%25)*18,291+Math.floor(i/25)*8,6,6,i<22?R.red:C.tint,C.ink,.5);
const d=box(s,64,694,1792,338,'SERVICE BLUEPRINT: MAKE THE PROMISE TRUE BEFORE EVERY SALE',{dark:R.navy});
table(d,14,54,[188,296,296,296,296,392],['Control layer','1 INTAKE','2 TEST + FIX','3 LIST + SELL','4 SERVICE','5 LEARN'],[
 ['Customer touch','Trader supplies the phone','Buyer fears battery and condition','Report before price; store demo','12-month warranty; 7-day returns','Weekly review by batch and channel'],
 ['Evidence held','Record grade, source and IMEI','Own battery read; photos; wipe proof','Reading and real condition report','Repair log; return reason; repeat visit','Orders, returns and Good battery swaps'],
 ['Release gate','Identity and supply check','85% floor or replace the battery','Only claims true for that phone','Named repair owner and closure','Intervene at the thresholds on Signals']
],{hh:40,rh:78});
return stats(s);
