// Preserve the campaign, channel economics and Exhibit 5 matrix. Refine only the product page and copy.
const s=await figma.getNodeByIdAsync('3:10');
const old=s.children.find(n=>n.name==='PANEL: WHAT A CUSTOMER SEES FIRST');if(old)old.remove();
const p=box(s,64,310,640,722,'PROOF FIRST: THE PRODUCT PAGE');
const br=addFrame(p,14,54,612,654,C.surfaceAlt,C.ink,2,'BROWSER: product page');
addRect(br,0,0,612,34,R.navy,C.ink,1);tx(br,14,3,584,'Tikau / refurbished / Good / 128 GB',{style:'Bold',color:C.white});
function drawPhone(g,x,y,w,h,back){addRect(g,x,y,w,h,R.navy,C.ink,1.5);if(back){addEllipse(g,x+6,y+6,9,9,C.ink,C.white,1);addEllipse(g,x+6,y+20,9,9,C.ink,C.white,1);}else{addRect(g,x+4,y+7,w-8,h-14,C.tint,C.ink,1);addRect(g,x+8,y+h*.30,w-16,h*.25,R.blue,C.ink,1);addRect(g,x+w*.3,y+8,w*.4,3,C.ink);}}
[['FRONT',false],['BACK',true],['EDGE',true],['SCREEN',false]].forEach((r,i)=>{const x=14+i*148,f=addFrame(br,x,53,136,143,C.white,C.ink,1.5,'ILLUSTRATION');if(i===2){addRect(f,64,9,8,90,R.blue,C.ink,1.5);addRect(f,70,35,3,20,R.navy,C.ink,1);}else drawPhone(f,42,9,52,90,r[1]);tx(f,4,110,128,r[0],{style:'Bold',align:'CENTER'});});
const report=addFrame(br,14,212,584,280,R.ltgold,C.ink,2,'REPORT: example');label(report,14,8,556,'TIKAU REPORT • EXAMPLE');
tx(report,14,49,556,'87% battery health',{display:true,size:30,color:R.green});addRect(report,14,93,556,15,C.tint,C.ink,1);addRect(report,14,93,556*.87,15,R.green,C.ink,1);addRect(report,14+556*.85,87,3,27,C.ink);
table(report,14,126,[162,394],['Proof','What this listing shows'],[['Condition','Good; light marks on the back'],['Identity','IMEI checked; data wipe certificate'],['Cover','12-month warranty; 7-day returns']],{hh:36,rh:36});
tx(br,14,512,235,'₹16,640',{display:true,size:38});tx(br,270,521,328,'Warranty included',{style:'Bold',color:R.green});
const button=addFrame(br,14,569,584,46,R.blue,C.ink,2,'CTA');tx(button,8,8,568,'ADD TO CART',{display:true,align:'CENTER',color:C.white});
tx(br,14,624,584,'Device drawings and readings are illustrative.',{size:22,color:R.navy});
const main=s.children.find(n=>n.name==='PANEL: THE MAIN IDEA');if(main){const t=main.findAllWithCriteria({types:['TEXT']}).find(t=>t.characters.startsWith('Show the report before the price.'));if(t){t.characters='One report across the product page, store counter, referral link and every labelled creator video.';t.fontSize=22;t.textAutoResize='HEIGHT';}tx(main,14,137,1108,'Measured battery  →  visible condition  →  named repair owner',{style:'Bold',color:R.navy});}
const src=s.children.find(n=>n.name==='SOURCE');src.characters='Source: case Exhibits 3, 5 and 6 | team model 9b3628d94d, T21 | product page and phone drawings are illustrative; 87% is an example, not a measured device';
return stats(s);
