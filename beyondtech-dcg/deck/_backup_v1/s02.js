{ const s = await figma.getNodeByIdAsync("S2");
skelBT(s,0,"1 / 8","EXECUTIVE SUMMARY",380,V.f2,"Source: case brief B04 to B19 | beyondtech.org.in and LinkedIn, Oct 2026 | college_scorecard.csv (32 colleges) | model "+V.hash+", tables T4, T6, T8, T10, T11");
[["SITUATION","An 11-week course for non-tech roles has 50+ DTU selections this season and strong recall, and grows by word of mouth and the founder's own mentoring."],
 ["COMPLICATION","The engine is informal and tied to the founder: no repeatable paid channel, no ambassador flywheel, and outside DTU, NSUT, Thapar and BIT Mesra almost no one knows BeyondTech."],
 ["THE TASK","Grow DTU on a stated organic and paid budget, then pick 3 to 4 Tier-1 campuses and enter each one without a local founder or word of mouth."],
 ["OUR ANSWER","Distribute proof, not awareness: capture students earlier at DTU, then borrow a society's trust on four new campuses and let a founding cohort's offers do the selling."]]
.forEach((q,i)=>{ const x=64+i*452, last=i===3;
  const f=last?layered(s,x,316,436,236,C.primaryDeep,"CARD: "+q[0]):addFrame(s,x,316,436,236,C.white,C.ink,2,"CARD: "+q[0]);
  const hd=addFrame(f,0,0,436,46,last?C.accent:C.tint,C.ink,2,"HEAD"); TL(hd,16,6,22,q[0],{color:C.primaryDeep,maxW:404});
  T(f,16,58,404,22,q[1],{color:last?C.white:C.ink}); });
const pillar=(x,title,num,lab,items)=>{ const f=layered(s,x,568,880,266,C.white,"CARD: "+title);
  const hd=addFrame(f,0,0,880,46,C.primaryDeep,C.ink,2,"HEAD"); TL(hd,16,6,22,title,{color:C.white,maxW:848});
  TL(f,16,56,52,num,{family:"Poppins",style:"ExtraBold",color:C.primary,maxW:260,min:30});
  T(f,16,140,260,22,lab,{family:"Inter",style:"Bold"});
  addRect(f,292,58,2,164,C.ink); bl(f,310,58,554,items,{gap:8}); };
pillar(64,"PILLAR 1: DEEPEN DTU",V.budget_lk,"DTU budget for the season, "+V.org_pct0+" organic",
 [["Fix first: ","gate the 8 free PDFs and publish a fee band, two leaks closed at ₹0."],
  ["Reach early: ","societies, branch reps and a mock drive reach the years referral misses."],
  ["Pay last: ","only warm retargeting and micro-influencers get money."]]);
pillar(976,"PILLAR 2: LAUNCH AT FOUR CAMPUSES","4 of "+V.screen[0],"campuses picked on seven criteria",
 [["Where: ","BITS Pilani and NIT Tiruchirappalli in Jan 2027, PEC and COEP in summer."],
  ["How: ","a case competition co-branded with each campus's consulting society, then a cohort of "+V.cohort20+"."],
  ["Who sells: ","ambassadors drawn only from that cohort."]]);
[[V.enrol,"DTU enrolments in a season, up from "+V.now],[V.cac,"blended cost per enrolment at DTU"],
 [V.org_e_pct0,"of enrolments, from "+V.org_pct0+" of the cash"],["Season 1","when a new campus turns cash positive"],
 [String(-V.hours[1])+" hours","of founder time freed a year at DTU"]]
.forEach((k,i)=>kpi(s,64+i*362,850,342,152,k[0],k[1],{ly:74}));
results.push({slide:s.id,total:s.findAll(()=>true).length,top:s.children.length}); }
