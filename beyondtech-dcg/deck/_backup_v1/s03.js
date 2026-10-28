{ const s = await figma.getNodeByIdAsync("S3");
skelBT(s,1,"2 / 8","DIAGNOSIS",300,V.f3,"Source: case brief B10 to B13 | beyondtech.org.in and LinkedIn, Oct 2026 (W06 to W14) | DTU NIRF 2025 | model "+V.hash+", T1, T2, T11, T13");
const fp=panel(s,64,316,560,714,"THE DTU FUNNEL TODAY");
stepFunnel(fp,16,64,528,[{t:V.tam+" in years 2 to 4"},{t:V.sam+" open to non-tech"},{t:V.now+" enrolled ("+V.pen+")",tc:C.ink},{t:"50+ selections",tc:C.ink}],{tierH:58,minW:270,size:24});
addTable(fp,16,336,[150,130,120,128],["Case","Pool","Enrolled","Share"],[0,1,2].map(i=>[["Bear","Base","Bull"][i],V.sam3[i],V.now3[i],V.pen3[i]]),{rowH:42,headerH:44});
fine(fp,16,512,528,"Pool: years 3 and 4 at the non-tech share, year 2 at half (A03, est.). Enrolled today: A04, est., from 50+ selections.");
TL(fp,16,566,22,"HOW ENROLMENTS ARRIVE TODAY",{color:C.primaryDeep,maxW:528});
const rf=parseInt(V.ref,10); segBar(fp,16,602,528,48,[{v:rf,c:C.primaryDeep,t:V.ref+" referral"},{v:100-rf,c:C.accent,t:(100-rf)+"%",tc:C.ink}]);
T(fp,16,658,528,22,"Recall is not the gap; the brief calls it strong (B11).",{family:"Inter",style:"Bold",color:C.primary});
const lp=panel(s,640,316,640,714,"FIVE LEAKS BETWEEN HEARING AND PAYING");
const rt0=addFrame(lp,16,62,608,48,C.primaryDeep,C.ink,2,"ROOT"); addText(rt0,"Poppins","Bold",22,C.white,"Has heard of BeyondTech, has not enrolled",16,0,576,48,"LEFT","CENTER");
addRect(lp,34,110,2.5,494,C.ink);
[["Referral misses most","Word of mouth runs through placed seniors, mostly circuital fourth years.","not measurable"],
 ["No net at the top","8 free PDFs and the sampler are open links that capture no contact.","8 of 8 open"],
 ["One founder, one chat","Every enquiry goes to one WhatsApp number; the founder runs each interview.",V.hours[0]+" hours a year"],
 ["Price hidden at the gate","Application, review, fit interview, payment; no fee shown anywhere.","no fee shown"],
 ["No early-year capture","No channel is built for second or third years before the January batch.","0% second years"]]
.forEach((l,i)=>{ const y=128+i*114; addRect(lp,34,y+19,22,2.5,C.ink); addBadge(lp,56,y,40,i+1,C.primary,C.white);
  TL(lp,108,y+4,22,l[0],{color:C.primaryDeep,maxW:300});
  const ch=addFrame(lp,424,y,200,36,(i===0||i===3)?C.surface:C.alertTint,C.ink,1.5,"CHIP"); addText(ch,"Inter","Bold",22,C.ink,l[2],6,0,188,36,"CENTER","CENTER");
  T(lp,108,y+42,516,22,l[1]); });
fine(lp,16,688,608,"Evidence: I1, W08, W11, W06, A28; research section 9.");
const ap=panel(s,1296,316,560,714,"WHAT THE THREE LINKS SHOW");
TL(ap,16,60,22,"LINKEDIN REACTIONS BY POST",{color:C.primaryDeep,maxW:528});
hBars(ap,16,94,528,V.posts.map((p,i)=>({label:p[0],value:p[1],text:String(p[1]),color:i===0?C.primary:(i===1?C.primaryDeep:C.alert)})),{labelW:180,rowH:42,valueW:60});
T(ap,16,270,528,22,"Students answer personal upside: the intern post drew "+V.posts[0][1]+", the cold ambassador call "+V.posts[2][1]+" (W13, W14).",{family:"Inter",style:"Bold"});
imgSlot(ap,16,360,256,132,"shot-resources","Screenshot: resources page"); imgSlot(ap,288,360,256,132,"shot-admission","Screenshot: admission steps");
TL(ap,16,498,22,"8 PDFs, open links",{family:"Inter",style:"Bold",maxW:256}); TL(ap,288,498,22,"Fit interview, no fee",{family:"Inter",style:"Bold",maxW:256});
TL(ap,16,540,22,"FOUNDER HOURS A YEAR",{color:C.primaryDeep,maxW:528});
hBars(ap,16,578,528,[{label:"Today",value:V.hours[0],text:V.hours[0]+" h, 2.0 each",color:C.alert},{label:"After plan",value:V.hours[0]+V.hours[1],text:(V.hours[0]+V.hours[1])+" h, 0.8 each",color:C.good}],{labelW:130,rowH:44,valueW:180,max:V.hours[0]});
fine(ap,16,676,528,"Hours: A22, A23 (est.). Shots: beyondtech.org.in, Oct 2026");
results.push({slide:s.id,total:s.findAll(()=>true).length,top:s.children.length}); }
