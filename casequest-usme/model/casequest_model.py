import json, hashlib, datetime
from pathlib import Path
ROOT=Path(r'C:/Users/harsh/Desktop/HARSH/PPTS-CASE-STUDY/nsut-innovators-court/casequest-usme')
M=ROOT/'model'; D=ROOT/'deck'
M.mkdir(exist_ok=True); D.mkdir(exist_ok=True)
A={
'sale':[2600,3000,3400],'product':[1100,1000,950],'pack':[100,80,70],
'platform':[.15,.12,.10],'payment_fx':[.04,.03,.025],'seller_duty':[180,0,0],
'minutes_before':[50,40,35],'minutes_after':[35,20,15],'hourly':[140,120,100],
'freight_saving':[0,.15,.25],'service':[50,30,25],'collection':[40,22,15],
'return_before':[.16,.10,.07],'return_after':[.16,.09,.05],'lost':[.02,.01,.005],
'reimport_share':[.70,.55,.40],'resale_share':[.15,.25,.40],'refund_no_return_share':[.15,.20,.20],
'reimport_cost':[900,700,550],'resale_recovery':[.50,.70,.80],
'fixed_monthly':[500,300,200],'orders_month':[5,10,16],'activation_m9':[.35,.60,.75],'retention_m12':[.40,.65,.80]
}
INPUT={
'version':'1.0.0','evidence_freeze':'2026-10-28',
'quote':{'inr':638,'date':'2026-10-28','source_id':'R2-03','url':'https://www.indiapost.gov.in/calculate-postage?ACK=0&COD=0&POD=false&REG=0&fromPincode=110001&height=5&product=parcel&tab=international&toCountry=US&weight=250&width=5','qualification':'Delhi to US 250 g International Tracked Packet; check merchandise eligibility, dimensions, date and destination'},
'assumptions':A,
'pilot':{'sellers':1200,'clusters':6,'groups_per_cluster':10,'sellers_per_group':20,'intervention_fraction':.5,'budget_inr':{'local_desks':3600000,'training':1200000,'technology':2400000,'evaluation':1200000,'contingency':1200000}},
'warning':'All numerical inputs other than the postal quote and structural pilot allocation are illustrative team assumptions, not observed data.'
}
if (M/'inputs.json').exists():
 INPUT=json.loads((M/'inputs.json').read_text(encoding='utf-8'))
 A=INPUT['assumptions']
else:
 (M/'inputs.json').write_text(json.dumps(INPUT,indent=2,ensure_ascii=False),encoding='utf-8')
def run(i,after):
 x={k:v[i] for k,v in A.items()}
 sale=x['sale']; product=x['product']; pack=x['pack']; freight=638*(1-x['freight_saving'] if after else 1)
 compliance=x['minutes_after' if after else 'minutes_before']/60*x['hourly']
 service=x['service'] if after else 0; collection=x['collection'] if after else 0
 common=product+pack+freight+sale*(x['platform']+x['payment_fx'])+x['seller_duty']+compliance+service+collection
 pret=x['return_after' if after else 'return_before']; lost=x['lost']; delivered=1-pret-lost
 shares=[x['reimport_share'],x['resale_share'],x['refund_no_return_share']]
 assert abs(sum(shares)-1)<1e-9 and delivered>=0
 outcomes={
 'delivered':{'prob':delivered,'contribution':sale-common},
 'reimported':{'prob':pret*shares[0],'contribution':-common-x['reimport_cost']+product*.5},
 'overseas_resale':{'prob':pret*shares[1],'contribution':sale*x['resale_recovery']-common-120},
 'refund_no_return':{'prob':pret*shares[2],'contribution':-common},
 'lost':{'prob':lost,'contribution':-common}
 }
 assert abs(sum(v['prob'] for v in outcomes.values())-1)<1e-9
 expected=sum(v['prob']*v['contribution'] for v in outcomes.values())
 return {'expected_contribution_inr':round(expected,2),'monthly_contribution_inr':round(x['orders_month']*expected-(x['fixed_monthly'] if after else 0),2),'delivered_contribution_inr':round(sale-common,2),'outcomes':outcomes,'costs':{'product':product,'packaging':pack,'freight':round(freight,2),'platform':sale*x['platform'],'payment_fx':sale*x['payment_fx'],'seller_destination':x['seller_duty'],'compliance':round(compliance,2),'service':service,'collection':collection}}
def sensitivity(freight_fraction, return_rate, service_cost):
 old=(A['freight_saving'][1],A['return_after'][1],A['service'][1])
 A['freight_saving'][1]=freight_fraction; A['return_after'][1]=return_rate; A['service'][1]=service_cost
 value=run(1,True)['expected_contribution_inr']
 A['freight_saving'][1],A['return_after'][1],A['service'][1]=old
 return value
S={}
for label,i in [('downside',0),('base',1),('upside',2)]:
 b=run(i,False); p=run(i,True)
 S[label]={'baseline':b,'proposed':p,'delta_per_order_inr':round(p['expected_contribution_inr']-b['expected_contribution_inr'],2),'delta_monthly_inr':round(p['monthly_contribution_inr']-b['monthly_contribution_inr'],2)}
budget=sum(INPUT['pilot']['budget_inr'].values())
pilot=[]
for month in range(1,13):
 fraction=0 if month<3 else (month-2)/7 if month<9 else 1
 active=round(600*A['activation_m9'][1]*fraction)
 retained=round(active*A['retention_m12'][1]) if month>=9 else 0
 pilot.append({'month':month,'active_early_sellers':active,'retained_early_sellers':retained,'incremental_seller_contribution_inr':round(active*A['orders_month'][1]*S['base']['delta_per_order_inr'],2)})
costs=S['base']['proposed']['costs']; baseline=S['base']['baseline']['costs']
pool_saving=baseline['freight']-costs['freight']-costs['collection']-costs['service']
out={'version':INPUT['version'],'input_sha256':hashlib.sha256((M/'inputs.json').read_bytes()).hexdigest(),'evidence_freeze':INPUT['evidence_freeze'],'representative_lane':'Illustrative eligible 250 g textile accessory, Delhi to US, postal','quote':INPUT['quote'],'scenarios':S,'pilot_budget_inr':budget,'pilot_budget_lakh':budget/100000,'pilot_months':pilot,'pooling_net_saving_inr_per_order':round(pool_saving,2),'pilot_cost_per_retained_early_exporter_inr':round(budget/max(1,pilot[-1]['retained_early_sellers']),2),'assumption_status':'illustrative; no verified cohort freight discount, return rate, sale price or programme budget'}
(M/'model_outputs.json').write_text(json.dumps(out,indent=2,ensure_ascii=False),encoding='utf-8')
(D/'values.json').write_text(json.dumps({'moneyshot_delta_inr':S['base']['delta_per_order_inr'],'baseline_inr':S['base']['baseline']['expected_contribution_inr'],'proposed_inr':S['base']['proposed']['expected_contribution_inr'],'downside_delta_inr':S['downside']['delta_per_order_inr'],'upside_delta_inr':S['upside']['delta_per_order_inr'],'budget_lakh':out['pilot_budget_lakh'],'budget_inr':budget,'assumption_status':out['assumption_status']},indent=2),encoding='utf-8')
checks={'probabilities_sum_to_one':all(abs(sum(v['prob'] for v in t['outcomes'].values())-1)<1e-9 for s in S.values() for t in [s['baseline'],s['proposed']]),'budget_sums':budget==9600000,'no_discount_pooling_can_lose':638-638-A['service'][0]-A['collection'][0]<0,'scenario_order':S['downside']['proposed']['expected_contribution_inr']<S['base']['proposed']['expected_contribution_inr']<S['upside']['proposed']['expected_contribution_inr'],'pilot_allocation':600==1200*INPUT['pilot']['intervention_fraction']}
(M/'validation.json').write_text(json.dumps({'checks':checks,'pass':all(checks.values())},indent=2),encoding='utf-8')
def row(*c):return '| '+' | '.join(str(x) for x in c)+' |'
tables=[]
for n,title,head,rows in [
(1,'Assumption register',['Input','Downside','Base','Upside'],[[k,*v] for k,v in A.items()]),
(2,'Baseline economics',['Scenario','Expected contribution ₹/order','Monthly ₹'],[[k,v['baseline']['expected_contribution_inr'],v['baseline']['monthly_contribution_inr']] for k,v in S.items()]),
(3,'Proposed economics',['Scenario','Expected contribution ₹/order','Monthly ₹'],[[k,v['proposed']['expected_contribution_inr'],v['proposed']['monthly_contribution_inr']] for k,v in S.items()]),
(4,'Cost decomposition',['Component','Before ₹','After ₹'],[[k,baseline[k],costs[k]] for k in baseline]),
(5,'Return decision tree',['Outcome','Probability','Contribution ₹'],[[k,round(v['prob'],4),round(v['contribution'],2)] for k,v in S['base']['proposed']['outcomes'].items()]),
(6,'Monthly seller contribution',['Scenario','Before ₹','After ₹','Change ₹'],[[k,v['baseline']['monthly_contribution_inr'],v['proposed']['monthly_contribution_inr'],v['delta_monthly_inr']] for k,v in S.items()]),
(7,'Pooling threshold',['Scenario','Freight saving ₹','Service + collection ₹','Net ₹'],[[k,round(638*A['freight_saving'][i],2),A['service'][i]+A['collection'][i],round(638*A['freight_saving'][i]-A['service'][i]-A['collection'][i],2)] for i,k in enumerate(['downside','base','upside'])]),
(8,'Pilot budget',['Item','₹'],[[k,v] for k,v in INPUT['pilot']['budget_inr'].items()]+[['Total',budget]]),
(9,'Monthly activation',['Month','Active early sellers','Retained early sellers','Incremental contribution ₹'],[[r['month'],r['active_early_sellers'],r['retained_early_sellers'],r['incremental_seller_contribution_inr']] for r in pilot]),
(10,'Scenario summary',['Scenario','Before ₹/order','After ₹/order','Change ₹/order'],[[k,v['baseline']['expected_contribution_inr'],v['proposed']['expected_contribution_inr'],v['delta_per_order_inr']] for k,v in S.items()]),
(11,'Freight sensitivity',['Freight saving','Return rate','Expected contribution ₹','Pool saving ₹'],[[f,r,sensitivity(f,r,A['service'][1]),round(638*f-A['service'][1]-A['collection'][1],2)] for f in [0,.10,.20,.25] for r in [.05,.09,.16]]),
(12,'Adoption and service cost',['Active sellers','Service cost ₹/order','Expected contribution ₹','Budget per active ₹'],[[a,svc,sensitivity(A['freight_saving'][1],A['return_after'][1],svc),round(budget/a,2)] for a,svc in [(150,50),(300,40),(600,30),(900,25)]]),
(13,'Fiscal and resource accounts',['Account','Base ₹','Treatment'],[['Government cash budget',budget,'Cost'],['Seller change/order',S['base']['delta_per_order_inr'],'Private benefit estimate'],['Tax and subsidies',0,'Transfer; not new resource benefit']]),
(14,'Option scoring inputs',['Option','Status'],[['Outreach only','Evidence review required'],['New central portal','Evidence review required'],['Broad shipping subsidy','Evidence review required'],['Single-platform partnership','Evidence review required'],['Cluster Export Compact','Working hypothesis, not automatically preferred']]),
(15,'Pilot KPI definitions',['KPI','Target','Status'],[['Controllable service cost','-20%','Proposed test target'],['Seller admin time','-50%','Proposed test target'],['Return resolution time','-30%','Proposed test target']])
]:
 tables.extend([f'### T{n:02d}. {title}',row(*head),row(*(['---']*len(head)))]+[row(*r) for r in rows]+[''])
(M/'model_tables.md').write_text('# CaseQuest model tables\n\nAll economics are illustrative team assumptions except the cited postal quote. Pilot budget is a proposed estimate, not sanctioned funding.\n\n'+'\n'.join(tables),encoding='utf-8')
print(json.dumps({'base':S['base'],'downside_delta':S['downside']['delta_per_order_inr'],'upside_delta':S['upside']['delta_per_order_inr'],'budget_lakh':budget/100000,'checks':checks},ensure_ascii=False))

