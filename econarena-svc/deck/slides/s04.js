{ const s = await figma.getNodeByIdAsync("S4");
skelBT(s,2,"3 / 3","TASK 3: ENVIRONMENTAL STRATEGY",470,"Rented IndiaAI GPUs in Mumbai use "+V.e_mwh+", emit "+V.co2l+" of CO2e and "+V.water_kl+" of water over 24 months; renewable contracts cut the carbon to "+V.co2m,
  "Source: IndiaAI portal rates (case packet) | Hugging Face Inference Endpoints prices | Yotta Shakti Cloud | NVIDIA H100 and L40S data sheets | CEA CO2 baseline database | team model "+V.hash+" (T12 to T15)");
const a=layered(s,64,316,1792,52,C.primaryDeep,"CARD: choice");
TL(a,16,8,22,"OUR CHOICE",{color:C.accent});
T(a,200,11,1576,22,"Rent IndiaAI portal GPUs in Mumbai: lenders' data stays in India, an L40S costs ₹67.5 an hour, and the buyers are close.",{family:"Inter",style:"Semi Bold",color:C.white});
rail(s,64,384,254,"WHERE IT RUNS",C.primaryDeep); rail(s,64,648,196,"FOOTPRINT",C.primary); rail(s,64,854,178,"TRADE-OFFS",C.good);
const p1=pnl(s,116,384,860,254,"ONE WORKLOAD, FIVE WAYS TO RUN IT, 24 MONTHS");
tbl(p1,14,46,[296,74,78,64,112,92,96],["Route","₹ Cr","Weeks","PUE","Renewable","In India","t CO2e"],V.prov,{hh:26,rh:26,name:"compute routes",align:["LEFT","RIGHT","RIGHT","RIGHT","RIGHT","LEFT","RIGHT"],fills:[C.goodTint]});
sT(p1,14,210,832,18,V.budget+" would rent "+V.h100_eq+" H100-hours; we need "+V.h100_hours+". Compute is not the constraint.",{family:"Inter",style:"Bold",color:C.primaryDeep});
const p2=pnl(s,988,384,868,254,"WORKLOAD TO HARDWARE, 24 MONTHS");
tbl(p2,14,46,[226,214,116,284],["Workload","Runs on","GPU-hours","Why this way"],[
  ["Training, evaluation","H100, reserved",V.h100_hours,"adapt speech, fine-tune"],["Batch call review","L40S, at night",V.batch_hours,"throughput doubles by H4"],
  ["Live voice reminders","L40S, 8 am to 7 pm",V.voice_hours,"16 calls on one GPU"],["Development, tests","L40S, always on",V.dev_hours,"2 GPUs for regression tests"],
  ["Hard-case summaries","Claude on Bedrock","API","2% of minutes, India region"]],{hh:26,rh:26,name:"workloads",align:["LEFT","LEFT","RIGHT","LEFT"]});
sT(p2,14,210,840,18,"Review waits for the night batch; voice runs only inside the 8 am to 7 pm calling window.",{family:"Inter",style:"Bold",color:C.primaryDeep});
}
// ===== PART =====
{ const s = await figma.getNodeByIdAsync("S4");
const p3=pnl(s,116,648,860,196,"ENERGY, CARBON AND WATER BY HALF-YEAR");
tbl(p3,14,46,[262,110,110,110,110,110],["Base case","H1","H2","H3","H4","24 months"],V.env,{hh:26,rh:24,name:"footprint",align:["LEFT","RIGHT","RIGHT","RIGHT","RIGHT","RIGHT"],bold:[5]});
const p4=pnl(s,988,648,868,196,"THREE TARGETS WE REPORT EVERY MONTH");
tbl(p4,14,46,[262,140,150,288],["Target","Month 6","Month 24","How"],V.targets,{hh:26,rh:26,name:"targets",align:["LEFT","RIGHT","RIGHT","LEFT"]});
sT(p4,14,160,840,18,"Read from provider meters and certificates, and logged in each lender's evidence file.",{family:"Inter",style:"Bold",color:C.primaryDeep});
const p5=pnl(s,116,854,1100,178,"COST, SPEED AND CARBON: WHAT EACH CHOICE GIVES UP");
hgrid(p5,14,46,["Portal GPUs, not on demand","Cloud bridge, months 1 to 4","Distilled small models","Mumbai, near the buyers"],["Cost","Speed","Carbon"],[
  [{t:V.prov_save+" cheaper",f:C.goodTint},{t:"6 weeks to allocate",f:C.alertTint,tc:C.alert},{t:"same",f:C.white}],
  [{t:"1.6x price, 4 months",f:C.alertTint,tc:C.alert},{t:"live in week 1",f:C.goodTint},{t:"same",f:C.white}],
  [{t:"half the GPU-hours",f:C.goodTint},{t:"3 months to distil",f:C.alertTint,tc:C.alert},{t:"half the energy",f:C.goodTint}],
  [{t:"same",f:C.white},{t:"low latency to lenders",f:C.goodTint},{t:"needs green contracts",f:C.alertTint,tc:C.alert}]],{lw:330,cw:244,rh:24,hh:24,corner:"Choice",name:"tradeoffs"});
const p6=pnl(s,1228,854,628,178,"FOUR NUMBERS BEHIND THE CHOICE");
[[V.west_dc,"of capacity: Mumbai, Pune"],[V.gpu_portal,"GPU rent, 24 months"],[V.co2_drop,"less CO2e at 70% renewable"],[V.subsidy_up,"40% subsidy, upside only"]].forEach((r,i)=>
  tile(p6,14+302*(i%2),46+64*Math.floor(i/2),292,62,r[0],r[1],{size:24,ly:38}));
results.push({slide:s.id,total:s.findAll(()=>true).length,top:s.children.length}); }
