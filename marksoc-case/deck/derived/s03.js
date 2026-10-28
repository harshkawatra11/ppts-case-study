{ const s = await figma.getNodeByIdAsync("S3");
skelBT(s,1,"2 / 8","THE ECONOMICS",300,"Every phone earns money before marketing, but Fair earns "+V.c_F+" to Superb's "+V.c_S+", ads lose ₹2.1 lakh a month and Tikau loses ₹"+V.e0.replace("−","")+" lakh a month",
  "Source: case Exhibits 2 and 3, page 3 | team model "+V.hash+" (T2 to T6) | dashboard cost per order as the growth team reports it: fixed spend plus coupons over orders");
const p=pnl(s,64,310,700,360,"ONE PHONE, ₹: WHERE THE SELLING PRICE GOES");
const G=[["Superb","S",24000],["Good","G",16000],["Fair","F",10000]], cl=[C.primaryDeep,C.blue,HG[2],C.alert,HR[3],C.good], k=500/24000;
G.forEach((g,i)=>{ const y=56+i*48; sTL(p,14,y+6,18,g[0],{family:"Inter",style:"Bold"}); let x=120;
  V.stack[g[1]].forEach((v,j)=>{ const w=Math.max(2,v*k); addRect(p,x,y,w,36,cl[j],C.ink,1);
    if(j===0||j===5){ const tx="₹"+fmtN(v); if(w>=70) sTL(p,0,y+6,18,tx,{family:"Inter",style:"Bold",color:C.white,centerAt:x+w/2}); else if(j===5) sTL(p,x+w+6,y+6,18,tx,{family:"Inter",style:"Bold",color:i===2?C.alert:C.good}); }
    x+=w; }); });
let lx=14; [["Trader price",0],["Lab",1],["Packing",2],["Claims",3],["Returns",4],["Contribution",5]].forEach(l=>{ lx=lgS(p,lx,206,cl[l[1]],l[0]); });
tbl(p,14,244,[170,160,170,172],["Grade","Contribution","Share of price","Claims, returns"],G.map(g=>{ const a=V.stack[g[1]]; return [g[0],"₹"+fmtN(a[5]),(100*a[5]/g[2]).toFixed(1)+"%","₹"+fmtN(a[3]+a[4])]; }),
  {hh:26,rh:24,name:"grades",align:["LEFT","RIGHT","RIGHT","RIGHT"],rc:[C.ink,C.ink,C.alert]});
}
// ===== PART =====
{ const s = await figma.getNodeByIdAsync("S3");
const q=pnl(s,780,310,1076,360,"CONTRIBUTION AFTER MARKETING BY CHANNEL, ₹ LAKH A MONTH");
const SN=["Paid ads","MegaKart","Creators","Stores","Referrals"];
vbarsN(q,14,46,440,300,SN.map((n,i)=>({label:n,value:V.ch_cam_n[i],color:V.ch_cam_n[i]<0?C.alert:(i===4?C.good:C.primary)})),{min:-5,max:22,lab:30});
tbl(q,470,52,[150,76,106,116,144],["Channel","Orders","Per order","Dashboard","True cost"],V.ch.map((r,i)=>[SN[i],r[1],r[3],r[4],r[5]]),
  {hh:26,rh:28,name:"channels",align:["LEFT","RIGHT","RIGHT","RIGHT","RIGHT"],rc:[C.alert,C.ink,C.ink,C.ink,C.good]});
note(q,470,232,592,"The dashboard misleads: ","it shows MegaKart at ₹0 an order, but the 12% commission costs "+V.mk_comm_per+" an order and leaves "+V.ch[1][3]+". Ads look mid-priced and lose money.",{});
}
// ===== PART =====
{ const s = await figma.getNodeByIdAsync("S3");
const w=pnl(s,64,686,640,346,"THE MONTH TODAY, ₹ LAKH");
wfN(w,14,48,612,240,V.wf_month,{min:-60,max:190,dp:1,bw:56,lh:46});
sT(w,14,298,612,18,"x 12 = "+V.ltm_rl+", against the case's −₹170 lakh for the last twelve months.",{family:"Inter",style:"Bold",color:C.primaryDeep});
const h=pnl(s,720,686,560,346,"RETURN RATE BY CHANNEL AND GRADE, %");
const hc=v=>{ const x=parseFloat(v); return {t:v,f:x<=3.5?HG[1]:(x<=7?HG[2]:(x<=10?HR[2]:HR[3])),tc:C.ink}; };
hgrid(h,14,48,V.retgrid.map(r=>r[0]),["Superb","Good","Fair","Channel"],V.retgrid.map(r=>r.slice(1).map(hc)),{lw:180,cw:86,rh:32,hh:30,name:"returns"});
kv(h,14,262,V.rr0,"of phones come back within 7 days; the board's March limit is 6.0%",{size:40,numW:120,w:400,dy:4});
const d=pnl(s,1296,686,560,346,"WHAT DISTRUST COSTS EACH MONTH, ₹ LAKH");
hbarsN(d,14,54,532,[{label:"Warranty claims",value:parseFloat(V.claims_cost)},{label:"Returns",value:parseFloat(V.ret_cost)},{label:"Both together",value:parseFloat(V.trust_tax),color:C.accent},
  {label:"EBITDA loss",value:-V.e0_n,color:C.alert}],{lw:170,rh:40,min:0,max:25,vw:60});
note(d,14,228,532,"More than the loss: ",V.claims0+" claims and "+V.rets0+" returns a month cost "+V.trust_rl+". Repairs take 9 days and 38% of claims need a second visit.",{});
results.push({slide:s.id,total:s.findAll(()=>true).length,top:s.children.length}); }
