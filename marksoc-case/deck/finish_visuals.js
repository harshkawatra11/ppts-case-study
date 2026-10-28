// Run after the saved 12-slide build, prefixed with preamble.js verbatim.
// Native vector illustrations, not photographs or measured device evidence.
const done=[];
function clearSlot(p,fill){for(const c of [...p.children])c.remove();p.fills=[{type:'SOLID',color:fill||C.blueTint}];p.strokes=[{type:'SOLID',color:C.ink}];p.strokeWeight=1.5;p.dashPattern=[];p.cornerRadius=0;}
function phone(p,x,y,w,h,back){
  addRect(p,x,y,w,h,back?C.blue:C.primaryDeep,C.ink,1.5);
  if(back){addEllipse(p,x+4,y+4,Math.max(3,w*.14),Math.max(3,w*.14),C.ink,C.white,1);addEllipse(p,x+4,y+12,Math.max(3,w*.14),Math.max(3,w*.14),C.ink,C.white,1);}
  else {addRect(p,x+3,y+5,w-6,h-10,C.tint,C.ink,1);addRect(p,x+w*.3,y+5,w*.4,2,C.ink);addRect(p,x+6,y+h*.3,w-12,h*.25,C.blue);addRect(p,x+6,y+h*.65,w-12,2,C.white);}
}
function family(p){const w=p.width,h=p.height;clearSlot(p);const sc=h>100;
  const hy=h*(sc?.27:.28),r=h*(sc?.095:.16);
  for(const [cx,col] of [[w*.27,C.primary],[w*.73,C.accent]]){
    addEllipse(p,cx-r,hy-r,2*r,2*r,C.white,C.ink,1.5);
    addRect(p,cx-r*1.5,hy+r+3,r*3,h*(sc?.31:.38),col,C.ink,1.5);
  }
  phone(p,w*.44,h*.38,w*.13,h*(sc?.31:.48),false);
  addRect(p,w*.35,h*.52,w*.09,Math.max(3,h*.025),C.white,C.ink,1);
  addRect(p,w*.57,h*.52,w*.09,Math.max(3,h*.025),C.white,C.ink,1);
  if(sc){addText(p,'Inter','Bold',22,C.primaryDeep,'FAMILY BUYER',10,h-52,w-20,28,'CENTER','CENTER');addText(p,'Inter','Semi Bold',14,C.primaryDeep,'Illustration',10,h-24,w-20,18,'CENTER','CENTER').name='FINEPRINT';}
}
for(const id of ['5:16','14:5']){const p=await figma.getNodeByIdAsync(id);family(p);p.name='IMG: Family buyer illustration';done.push(p.id);}
{const p=await figma.getNodeByIdAsync('5:34');clearSlot(p);const w=p.width,h=p.height;addRect(p,12,12,w-24,h-16,C.white,C.ink,1.5);addRect(p,9,6,w-18,11,C.accent,C.ink,1.5);addRect(p,20,23,22,25,C.tint,C.ink,1);addRect(p,w-40,23,23,16,C.blue,C.ink,1);p.name='IMG: Phone shop illustration';done.push(p.id);}
{const p=await figma.getNodeByIdAsync('5:42');clearSlot(p);const w=p.width;addEllipse(p,24,8,16,16,C.white,C.ink,1.5);addRect(p,19,27,27,22,C.primary,C.ink,1.5);phone(p,w-37,8,22,38,false);addRect(p,w-47,25,10,4,C.accent,C.ink,1);p.name='IMG: Creator illustration';done.push(p.id);}
{const p=await figma.getNodeByIdAsync('5:48');clearSlot(p);addRect(p,18,39,p.width-36,5,C.primaryDeep,C.ink,1);for(const x of [34,90,146]){phone(p,x,8,20,30,false);addRect(p,x+23,16,18,10,C.good,C.ink,1);}p.name='IMG: Testing bench illustration';done.push(p.id);}
for(const [id,label] of [['5:54','Sanchar\nSaathi'],['5:56','Consumer\nhelpline'],['5:68','Counterpoint\nResearch'],['5:70','GSMA']]){
 const p=await figma.getNodeByIdAsync(id);clearSlot(p,C.white);p.name='IDENTIFIER: '+label.replace('\n',' ');addText(p,'Inter','Bold',14,C.primaryDeep,label,3,3,p.width-6,p.height-6,'CENTER','CENTER').name='FINEPRINT';done.push(id);
}
for(const [i,id] of ['22:70','22:72','22:74','22:76'].entries()){
 const p=await figma.getNodeByIdAsync(id);clearSlot(p);p.name='IMG: Illustrative '+['front','back','edge','screen'][i];
 if(i===2){addRect(p,64,7,8,57,C.blue,C.ink,1.5);addRect(p,70,20,3,12,C.primaryDeep,C.ink,1);}
 else phone(p,51,5,34,59,i===1);
 const t=addText(p,'Inter','Bold',14,C.primaryDeep,['Front','Back','Edge','Screen on'][i],4,70,p.width-8,20,'CENTER','CENTER');t.name='FINEPRINT';done.push(id);
}
const s8=await figma.getNodeByIdAsync('3:10');const source=s8.findAllWithCriteria({types:['TEXT']}).find(t=>t.name==='SOURCE');source.characters=source.characters.replace('the product page is an illustration: the battery reading shown is an example, not a measured phone','product page and device drawings are illustrative; battery reading is an example, not a measured phone');
const s1=await figma.getNodeByIdAsync('3:2');const roleCaption=s1.findAllWithCriteria({types:['TEXT']}).find(t=>t.characters.startsWith('Monograms mark'));roleCaption.characters="Monograms mark fictional actors; diagrams illustrate roles; names identify the case's real bodies.";
const s12=await figma.getNodeByIdAsync('3:14');const promise=s12.findAllWithCriteria({types:['TEXT']}).find(t=>t.characters.startsWith('The research document'));promise.characters='The case exhibits, the model and every working step sit behind this deck';
return {done,warnings};

