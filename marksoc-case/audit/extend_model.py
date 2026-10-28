"""T22-T29 extension using the independent exhibit-driven calculator.
No writes outside this audit directory. All raw numeric cells remain unrounded in JSON.
Run: python -X utf8 marksoc-case/audit/extend_model.py
"""
from pathlib import Path
import json, math
import independent_audit as a
OUT=Path(__file__).resolve().parent
ROOT=OUT.parent

def small(p):
    m=p['m']['Mar']
    return dict(plan=a.name(p),growth_money_lakh=p['gm_tot'],march_ebitda_lakh=p['e']['Mar'],q1_ebitda_lakh=p['q1'],march_return_rate=m['rr'],march_delivered=m['sold'],tests=p['tests'],conditional_pass=p['ok'])
def mar(params=None):return a.calc(('B1','B2'),True,params=params)['cam']-67

def build():
    audit=json.loads((OUT/'independent-audit.json').read_text(encoding='utf8'));assert audit['status']=='PASS'
    ps=a.all_plans();feasible=sorted([p for p in ps if p['ok']],key=lambda p:-p['q1']);rec=feasible[0]
    b=audit['boundaries'];tables={};checks={}
    selected=[('Recommended',('B1','B2'),'Feb'),('Rohan price push',('A',),None),('Rohan price push with shift',('A',),'Feb'),('Kabir report and warranty without shift',('B1','B2'),None),('Store managers trade in',('C',),None),('Battery promise without report',('B2',),'Feb'),('Report warranty and trade in without shift',('B1','B2','C'),None),('Report warranty and trade in with shift',('B1','B2','C'),'Feb')]
    details=[]
    for title,options,shift in selected:
        p=a.plan(options,shift)
        for month in ('Feb','Mar'):
            m=p['m'][month]
            for c in m['cells']:
                details.append(dict(case=title,plan=a.name(p),month=month,channel=c['channel'],grade=c['grade'],demand=c['demand'],post_superb=c['post_superb'],delivered=c['delivered'],superb_factor=m['fS'],lab_factor=m['fC'],superb_capacity=m['supS'],lab_capacity=m['cap'],lost_to_superb=c['demand']-c['post_superb'],lost_to_lab=c['post_superb']-c['delivered']))
    tables['T22']=dict(title='Delivered demand and sequential rationing by channel and grade',inputs='Case E3 channel orders/mixes; E4b Superb 2000; E6 effects, trade-in arrivals and supply, H4 rationing order.',definitions={'demand':'orders before rationing','post_superb':'demand multiplied by Superb factor for S only','delivered':'post_superb multiplied by total lab factor','lost_to_superb':'demand minus post_superb','lost_to_lab':'post_superb minus delivered','superb_factor':'min(1,available Superb / demanded Superb)','lab_factor':'min(1,capacity / all post-Superb orders)'},rows=details)
    pared=[]
    for p in feasible:
        row=small(p)
        row['dominated_by']=[a.name(q) for q in feasible if q is not p and q['gm_tot']<=p['gm_tot'] and q['e']['Mar']>=p['e']['Mar'] and q['q1']>=p['q1'] and q['m']['Mar']['rr']<=p['m']['Mar']['rr'] and (q['gm_tot']<p['gm_tot'] or q['e']['Mar']>p['e']['Mar'] or q['q1']>p['q1'] or q['m']['Mar']['rr']<p['m']['Mar']['rr'])]
        row['pareto_efficient']=not row['dominated_by'];pared.append(row)
    tables['T23']=dict(title='Five conditionally feasible plans and Pareto comparison',inputs='All 84 permitted plans. Tests: growth <=80 lakh, March EBITDA >=0, March returns <=6%, B1 proxy for claims controls.',definitions={'sort':'descending unrounded Q1 EBITDA; team objective','pareto_efficient':'no other feasible plan has no higher growth money, no lower March/Q1 EBITDA, and no higher return rate, with at least one strict gain','conditional_pass':'Exhibit 5 operating controls remain to be demonstrated'},rows=pared)
    ups=[.08,b['combined_order_uplift'],.1664,.20];swaps=[.4,.5,b['good_swap_share'],.6]
    grid=[dict(combined_order_uplift=u,good_swap_share=g,march_ebitda_lakh=mar({'combined_uplift':u,'gbat':g}),delivered=a.calc(('B1','B2'),True,params={'combined_uplift':u,'gbat':g})['sold']) for u in ups for g in swaps]
    tables['T24']=dict(title='March EBITDA by combined order uplift and Good battery swap share',inputs={'combined_order_uplift':ups,'good_battery_swap_share':swaps,'options':['B1','B2'],'shift':True,'other_inputs':a.DEFAULT},definitions={'row_axis':'combined order uplift, applied once as 1+u','column_axis':'Good battery replacement share g, per delivered Good cost g*1000','march_ebitda_lakh':'delivered contribution less 99 channel fixed, 58 company fixed and 9 shift; report/batteries/claims/returns/commission included','break_even_rows':'exact uplift root holds Good swaps at 40%','break_even_columns':'exact Good swap root holds uplift at 16.64%; their intersection need not be zero'},rows=grid)
    timing=[]
    for shift in ('Feb','Mar',None):
        p=a.plan(('B1','B2'),shift);r=small(p)
        r.update(january_ebitda_lakh=p['e']['Jan'],february_ebitda_lakh=p['e']['Feb'],february_delivered=p['m']['Feb']['sold'],february_growth_lakh=p['gm']['Feb'],march_growth_lakh=p['gm']['Mar'],q1_delta_vs_feb_shift_lakh=p['q1']-rec['q1']);timing.append(r)
    tables['T25']=dict(title='Third shift timing and Q1 consequences',inputs='B1+B2 setups 40 lakh in January; shift 9 lakh each active month; January unchanged.',definitions={'q1_delta_vs_feb_shift_lakh':'alternative Q1 EBITDA minus February shift Q1 EBITDA','conditional_pass':'all four numerical screen fields, with claims proxy conditional'},rows=timing)
    scores={'Flagship on a budget':[5,5,1,5,3,3],'Value seekers':[4,1,5,1,1,1],'Family buyers':[3,3,5,3,5,5],'Upgraders':[2,4,3,4,2,1]}
    criteria=['Size','Contribution per phone','Q1 room to grow','Grade return risk','Worry addressed by B1+B2','Board-feasible lever reach'];weighted=[]
    for scheme,w in [('Equal',[1]*6),('Double size',[2,1,1,1,1,1]),('Double margin',[1,2,1,1,1,1])]:
        totals={seg:sum(x*y for x,y in zip(s,w)) for seg,s in scores.items()}
        for seg,s in scores.items():weighted.append(dict(scheme=scheme,segment=seg,scores=s,weights=w,weighted_total=totals[seg],weighted_mean=totals[seg]/sum(w),rank=1+sum(v>totals[seg] for v in totals.values())))
    tables['T26']=dict(title='Segment ranking sensitivity to stated judgement weights',inputs={'criteria':criteria,'scores':scores,'basis':'Inherited T10 team judgement, 1 weak to 5 strong. Size order follows E1C; contribution and capacity follow E2/E4/E6. No measured segment-specific demand elasticity is available.'},definitions={'weighted_total':'sum(score_i * weight_i)','weighted_mean':'weighted_total / sum(weights)','rank':'1 + number of strictly larger totals; ties share rank'},rows=weighted)
    beorders=a.calc(('B1','B2'),True,params={'combined_uplift':b['combined_order_uplift']})['sold']
    weekly=[dict(metric='Delivered orders',definition='All-channel delivered phones in the completed week; monthly comparison divided by 4.33.',owner='Growth lead and operations lead',planned=rec['m']['Mar']['sold']/4.33,warning=beorders/4.33,boundary=beorders/4.33,boundary_type='March EBITDA zero at base mix and costs',unit='phones/week',proposed_action='If below this level for two completed weeks, diagnose channel demand and delivery loss; preserve claims controls and retest the full-month forecast.'),dict(metric='Completed seven-day cohort return rate',definition='Phones returned within seven days divided by phones delivered in the same fully matured sales cohort, aggregated across channels. Exclude immature cohorts.',owner='Customer service lead',planned=rec['m']['Mar']['rr'],warning=.055,boundary=.06,boundary_type='March board test limit; not EBITDA zero',unit='fraction',proposed_action='At 5.5%, inspect grade/channel cohorts and pause misleading creative; at 6%, escalate to CEO and correct the operating cause.'),dict(metric='Good battery replacement share',definition='Good phones requiring replacement divided by Good phones tested in the same relevant batch. Keep batch counts and tracker version.',owner='Lab lead',planned=.4,warning=.5,boundary=b['good_swap_share'],boundary_type='March EBITDA zero holding all other base inputs',unit='fraction',proposed_action='At 50%, audit supplier lots and tester calibration; near 55.06%, rerun sourcing and margin economics before accepting further lots.')]
    tables['T27']=dict(title='Proposed weekly operating definitions and response levels',inputs={'weeks_per_month':4.33,'model_boundary_order_uplift':b['combined_order_uplift'],'good_swap_break_even':b['good_swap_share'],'return_warning':.055,'return_board_limit':.06,'good_swap_warning':.5},definitions={'status':'All owners, cohort conventions, warning periods and actions are proposed management rules, not observed performance. Monthly board tests remain authoritative.','warning_vs_boundary':'50% Good swaps is a warning; the model boundary is about 55%. Return 6% is a board boundary and is not an EBITDA zero point.'},rows=weekly)
    keep=mar();ramp=[];cumulative=-35.;recovered=None
    for i,t in enumerate((1000,1800,2600,3400,4000,4000,4000,4000)):
        m=a.calc(('B1','B2','C'),True,t);ongoing=m['cam']-67;incremental=ongoing-keep;setup=35. if i==0 else 0.;before=cumulative;cumulative+=incremental
        if recovered is None and cumulative>=0:recovered=dict(month_index=i+1,month=['April','May','June','July','August','September','October','November'][i],fraction_of_month=-before/incremental,elapsed_months=i+(-before/incremental))
        ramp.append(dict(month=['April','May','June','July','August','September','October','November'][i],tradeins=t,passed_tradeins=sum(m['tin_pass'].values()),incremental_buyer_demand=t*.3,incremental_buyer_delivered=m['rows']['ti']['q'],delivered=m['sold'],demand=m['demand'],sourcing_savings_lakh=m['save'],pickup_cost_lakh=m['pick'],buyer_credit_lakh=m['rows']['ti']['credit'],ongoing_ebitda_lakh=ongoing,keep_plan_ebitda_lakh=keep,incremental_ongoing_ebitda_lakh=incremental,setup_cash_lakh=setup,month_ebitda_after_setup_lakh=ongoing-setup,month_incremental_after_setup_lakh=incremental-setup,cumulative_incremental_benefit_after_setup_lakh=cumulative,return_rate=m['rr']))
    tables['T28']=dict(title='April trade-in ramp, setup payment and recovery',inputs={'setup_lakh':35.,'tradein_ramp':[1000,1800,2600,3400,4000],'assumption':'A15: new next-quarter growth funding; April launch restarts the case ramp at 1000. Keep B1+B2 and February third shift running. No second B1/B2 setup charge. Months after August held at 4000.'},definitions={'ongoing_ebitda_lakh':'contribution after marketing minus 58 company fixed minus 9 shift, before C setup','incremental_ongoing_ebitda_lakh':'ongoing EBITDA minus keep-plan ongoing EBITDA','setup_cash_lakh':'35 in April, zero thereafter; under case convention also deduct from April EBITDA','month_ebitda_after_setup_lakh':'ongoing EBITDA minus setup in that month','cumulative_incremental_benefit_after_setup_lakh':'sum incremental ongoing EBITDA since April minus one-off 35','payback':'first cumulative nonnegative month; fractional estimate assumes within-month incremental benefit accrues evenly, not a promised cash-flow forecast'},payback=recovered,inherited_constant_first_month_payback_months=35/ramp[0]['incremental_ongoing_ebitda_lakh'],payback_method_correction='Inherited 2.2 months holds first-month incremental benefit constant. Ramp-aware cumulative incremental recovery occurs during May, interpolated about 1.75 months. Never divide setup by total company EBITDA.',rows=ramp)
    tests=[]
    def alt(label,options=('B1','B2'),shift='Feb',params=None,policy=None,basis='',verdict=''):
        p=a.plan(options,shift,params,policy);reference=a.plan(options,shift)
        tests.append(dict(reading=label,scope='Jan to Mar',plan=a.name(p),march_ebitda_lakh=p['e']['Mar'],q1_ebitda_lakh=p['q1'],q1_delta_vs_canonical_same_plan_lakh=p['q1']-reference['q1'],march_return_rate=p['m']['Mar']['rr'],growth_money_lakh=p['gm_tot'],tests=p['tests'],basis=basis,interpretation=verdict))
    alt('Canonical multiplicative effects',basis='C-E6H2 explicitly says multiply order and return effects.',verdict='Retain')
    alt('Only passed trade-in participants buy',('B1','B2','C'),'Feb',policy={'buyers_only_passed':True},basis='A07: 30% of people who trade in is read as all participants. Alternative restricts to passed phones.',verdict='Disclose sensitivity; case wording supports canonical all-participant reading')
    alt('All trade-in failures concentrated in Superb',('B1','B2','C'),'Feb',policy={'passed_grade_shares':(.15,.5,.2)},basis='A06 assumes the 15% failure rate is proportional across grades. This alternative puts all failed units in Superb, leaving total passed units unchanged.',verdict='Sensitivity only: grade-level failure rates are absent from the case')
    alt('All trade-in failures concentrated in Fair',('B1','B2','C'),'Feb',policy={'passed_grade_shares':(.3,.5,.05)},basis='A06 alternative puts all failed units in Fair; total passed units remain 85%.',verdict='Sensitivity only: neither concentration is evidenced')
    alt('Add B1 and B2 return reductions',policy={'additive_returns':True},basis='Would retain 50% of former rates, rather than 56%.',verdict='Reject: C-E6H2 requires multiplication')
    alt('MegaKart commission retains original prices',policy={'old_commission_price':True},basis='Would fail to raise commission on Superb and Good when B2 price rises.',verdict='Reject: C-E3N2 commission is 12% of selling price')
    alt('Savings paid on failed trade-ins too',('B1','B2','C'),'Feb',policy={'savings_failed':True},basis='A20 charges savings only on passed phones; failed phones recover acquisition cost as parts.',verdict='Reject: C-E6TI3 limits savings to phones that pass')
    alt('Pickup charged on passed phones only',('B1','B2','C'),'Feb',policy={'pickup_passed_only':True},basis='A failed trade-in still had a pickup.',verdict='Reject: C-E6TI2 charges every pickup')
    for trade,label in ((1000,'Restart April ramp'),(2600,'Continue original calendar ramp')):
        m=a.calc(('B1','B2','C'),True,trade)
        tests.append(dict(reading=label,scope='April only',tradeins=trade,ongoing_ebitda_lakh=m['cam']-67,after_setup_lakh=m['cam']-67-35,incremental_ongoing_vs_keep_lakh=m['cam']-67-keep,basis='A15. If C was deferred in Q1, restarting at 1000 is the stated team assumption. A continued calendar ramp at 2600 is an alternative, not case-confirmed.',interpretation='Scenario comparison; secure new funding before either'))
    # A14 affects the diagnostic only and must not become an extra sold-phone failure charge.
    tests.append(dict(reading='Good battery sample extrapolation',scope='diagnostic only',sample_fail_share=22/200,extrapolated_monthly_below_claim=22/200*a.calc()['grade_sold']['G'],incremental_q1_ebitda_lakh=0.,basis='A14 extrapolates a sample to show indicative scale; no downgrade/scrap rate or remediation cost was specified.',interpretation='Keep qualitative limitation; do not charge an invented Q1 loss'))
    delta=(-170/12)-(a.calc()['cam']-58)
    tests.append(dict(reading='Use annual rounded EBITDA as monthly baseline',scope='historical reconciliation only',monthly_from_annual_lakh=-170/12,exhibit_monthly_lakh=a.calc()['cam']-58,monthly_difference_lakh=delta,q1_difference_if_repeated_lakh=3*delta,basis='LTM and Exhibit 3 averages cover different/rounded historical scopes.',interpretation='Reject replacement: preserve case facts and use exhibit-built monthly model'))
    tables['T29']=dict(title='Material assumption alternatives and consequences',inputs='All alternatives hold remaining exhibit inputs fixed. Rejected readings diagnose model errors and are not permitted Q1 strategies.',definitions={'q1_delta_vs_canonical_same_plan_lakh':'alternative calculation minus canonical same levers/shift result','April scope':'post-Q1, requires fresh funding and explicit ramp assumption','compliance':'B1 screen is conditional; removing the proxy cannot demonstrate compliance or price missing controls'},rows=tests)
    checks['T22 both months all selected plans complete']=len(details)==sum((18 if 'C' in options else 15)*2 for _,options,_ in selected)
    checks['T22 each channel-grade demand reconciles']=all(abs(r['demand']-r['lost_to_superb']-r['lost_to_lab']-r['delivered'])<1e-8 for r in details)
    checks['T23 contains five conditionally feasible plans']=len(pared)==5 and all(r['conditional_pass'] for r in pared)
    checks['T24 contains 16 distinct intersections']=len(grid)==16 and len(set((r['combined_order_uplift'],r['good_swap_share']) for r in grid))==16
    checks['T24 combined uplift applied once']=abs(a.calc(('B1','B2'),True,params={'combined_uplift':.1664})['demand']-7200*1.1664)<1e-8
    checks['T24 exact single-input boundaries return zero']=abs(mar({'combined_uplift':b['combined_order_uplift']}))<1e-8 and abs(mar({'gbat':b['good_swap_share']}))<1e-8
    checks['T25 March and no shift comparison complete']=len(timing)==3 and abs(timing[0]['q1_delta_vs_feb_shift_lakh'])<1e-8
    checks['T26 family ranks first all stated weights']=all(r['rank']==1 for r in weighted if r['segment']=='Family buyers')
    checks['T27 weekly figures independently reconcile']=abs(weekly[0]['planned']*4.33-rec['m']['Mar']['sold'])<1e-8
    checks['T27 warns separately from failure boundaries']=weekly[2]['warning']<weekly[2]['boundary'] and weekly[1]['boundary_type'].endswith('not EBITDA zero')
    checks['T28 setup charged exactly once']=sum(r['setup_cash_lakh'] for r in ramp)==35
    checks['T28 cumulative recovery and April EBITDA separate']=all(abs(r['month_ebitda_after_setup_lakh']-(r['ongoing_ebitda_lakh']-r['setup_cash_lakh']))<1e-8 and abs(r['cumulative_incremental_benefit_after_setup_lakh']-(sum(x['incremental_ongoing_ebitda_lakh'] for x in ramp[:i+1])-35))<1e-8 for i,r in enumerate(ramp))
    checks['T29 alternative calculations remain scoped']=all('scope' in r and 'interpretation' in r for r in tests)
    out=dict(status='PASS' if all(checks.values()) else 'FAIL',model_hash=audit['original_output_hash'],units='All company monetary fields ending _lakh are INR lakh; rates/shares are fractions; phone counts are expected delivered units. JSON floats are unrounded.',definitions='Each T22-T29 object gives inputs, cell definitions and unrounded rows. Markdown is generated from this same JSON object.',checks=checks,tables=tables)
    (OUT/'extended-model-tables.json').write_text(json.dumps(out,indent=2,ensure_ascii=False),encoding='utf8')
    md=['# Independent model extension: T22 to T29','',f"Frozen original model: {out['model_hash']}. {out['units']}",'','Tables below show numeric values to 12 significant digits for audit readability. Use JSON floats for calculations. Company totals in a submitted deck must be shown to one decimal lakh. Every table is generated from the same object as the JSON.','']
    def cell(v):
        if isinstance(v,bool):return str(v)
        if isinstance(v,float):return format(v,'.12g')
        if isinstance(v,(list,dict)):return json.dumps(v,ensure_ascii=False).replace('|','/')
        return str(v).replace('|','/').replace('\n',' ')
    for tid,t in tables.items():
        md.extend([f"## {tid}. {t['title']}",'','Inputs: '+cell(t['inputs']),'','Cell definitions: '+cell(t['definitions']),''])
        if 'payback' in t:md.extend(['Payback: '+cell(t['payback']),'','Payback-method correction: '+t['payback_method_correction'],''])
        columns=list(dict.fromkeys(k for row in t['rows'] for k in row))
        md+=['| '+' | '.join(columns)+' |','| '+' | '.join(['---']*len(columns))+' |']
        md+=['| '+' | '.join(cell(row.get(k,'')) for k in columns)+' |' for row in t['rows']]
        md.append('')
    md+=['## Checks','']+[('- PASS: ' if v else '- FAIL: ')+k for k,v in checks.items()]
    text='\n'.join(md)+'\n'
    (OUT/'extended-model-tables.md').write_text(text,encoding='utf8')
    # This verifies extension JSON/Markdown generation; report/deck agreement stays coordinator-owned.
    reread=json.loads((OUT/'extended-model-tables.json').read_text(encoding='utf8'))
    assert reread==out
    assert all(format(r['march_ebitda_lakh'],'.12g') in text for r in grid)
    print(json.dumps(dict(status=out['status'],checks=len(checks),T28_April=ramp[0],payback=recovered,T26_family=[r for r in weighted if r['segment']=='Family buyers']),indent=2))
    if out['status']!='PASS':raise SystemExit(1)
    return out
if __name__=='__main__':build()
