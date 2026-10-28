"""Independent exhibit-driven calculator. Writes only audit outputs beside this script.
Original model is imported solely after independent calculations, for comparison.
Money in rupees inside phone cells; company aggregates in lakh.
"""
from pathlib import Path
from itertools import product
import json, math, hashlib, importlib.util, sys
sys.dont_write_bytecode=True
ROOT=Path(__file__).resolve().parents[1]
OUT=Path(__file__).resolve().parent
GR=('S','G','F')
# Case pp4-6, Exhibits 2,3,6. No constants are imported from the original.
SELL=(24000.,16000.,10000.); BUY=(17800.,11600.,7000.); LAB=(800.,1000.,1200.)
WARRANTY=(.03,.06,.10); RETURN=(.04,.07,.13)
CHANNELS={
'ads':(2600,(.20,.40,.40),60.,0.,0.,1.),
'mk':(2000,(.10,.45,.45),0.,.12,0.,1.),
'cr':(900,(.40,.50,.10),18.,0.,0.,1.5),
'st':(1000,(.45,.45,.10),21.,0.,0.,.5),
'rf':(700,(.35,.50,.15),0.,0.,350.,1.)}
DEFAULT=dict(upA=.50,upB1=.08,upB2=.08,upB3=.05,rrB1=.30,rrB2=.20,gbat=.40,fbat=.70,kcl=1.,rep=120.,pB2=.04,pA=.03,tin_fail=.15,tin_buy=.30,tin_save=.08,pickup=400.,credit=1000.,gbat_c=1000.,fbat_c=800.)
SETUP={'A':0.,'B1':15.,'B2':25.,'B3':0.,'C':35.}
MONTHLY={'A':10.,'B1':0.,'B2':0.,'B3':15.,'C':0.}

def calc(options=(),shift=False,tradeins=0.,params=None,policy=None):
    p=DEFAULT|dict(params or {}); policy=dict(policy or {}); live=set(options)
    price=list(SELL); claim=list(WARRANTY); extras=[0.,0.,0.]
    if 'A' in live: price[2]*=1-p['pA']
    if 'B2' in live:
        price[0]*=1+p['pB2'];price[1]*=1+p['pB2']
        claim=[x*p['kcl'] for x in (.04,.06,.09)]
        extras[1]=p['gbat']*p['gbat_c'];extras[2]=p['fbat']*p['fbat_c']
    if 'B1' in live: extras=[x+p['rep'] for x in extras]
    retfactor=math.prod(1-p['rr'+b] for b in ('B1','B2') if b in live)
    if policy.get('additive_returns'): retfactor=1-sum(p['rr'+b] for b in ('B1','B2') if b in live)
    rows=[]
    for channel,(n,mix,fix,commission,coupon,rm) in CHANNELS.items():
        factor=1.
        if 'A' in live and channel in ('ads','mk'):
            factor*=1+p['upA'];mix=(.15,.35,.50) if channel=='ads' else (.05,.40,.55)
        for b in ('B1','B2'):
            if b in live: factor*=1+p['up'+b]
        if 'B3' in live and channel!='mk':factor*=1+p['upB3']
        if 'combined_uplift' in p:
            # Replace the combined B1/B2 demand effect once, preserving other levers.
            factor/=math.prod(1+p['up'+b] for b in ('B1','B2') if b in live)
            factor*=1+p['combined_uplift']
        for i,g in enumerate(GR):rows.append(dict(channel=channel,grade=g,demand=n*mix[i]*factor,commission_rate=commission,coupon=coupon,return_multiplier=rm))
    arrivals=tradeins if 'C' in live else 0.
    passes={g:arrivals*(1-p['tin_fail'])*share for g,share in zip(GR,(.30,.50,.20))}
    if 'passed_grade_shares' in policy: passes={g:arrivals*v for g,v in zip(GR,policy['passed_grade_shares'])}
    available=2000.+passes['S']
    buyers=arrivals*p['tin_buy']*(1-p['tin_fail'] if policy.get('buyers_only_passed') else 1)
    if arrivals:
        for g,mix in zip(GR,(.40,.50,.10)):rows.append(dict(channel='ti',grade=g,demand=buyers*mix,commission_rate=0.,coupon=0.,return_multiplier=1.))
    sd=sum(r['demand'] for r in rows if r['grade']=='S');sf=min(1.,available/sd) if sd else 1.
    for r in rows:r['post_superb']=r['demand']*(sf if r['grade']=='S' else 1.)
    cap=9000. if shift else 7200.
    cf=min(1.,cap/sum(r['post_superb'] for r in rows))
    for r in rows:
        i=GR.index(r['grade']);q=r['delivered']=r['post_superb']*cf
        rr=RETURN[i]*r['return_multiplier']*retfactor
        r.update(price=price[i],purchase=BUY[i],lab=LAB[i],pack=600.,extra=extras[i],claim_rate=claim[i],return_rate=rr,
          warranty_expense=q*claim[i]*2500.,return_expense=q*rr*1800.,returns=q*rr,
          commission=q*r['commission_rate']*(SELL[i] if policy.get('old_commission_price') else price[i]),
          coupons=q*r['coupon'],credit=q*p['credit'] if r['channel']=='ti' else 0.)
        r['unit_before_channel']=price[i]-BUY[i]-LAB[i]-600.-extras[i]-claim[i]*2500.-rr*1800.
        r['contribution_before_channel']=q*r['unit_before_channel']
        r['contribution_variable']=r['contribution_before_channel']-r['commission']-r['coupons']-r['credit']
    savings=sum((arrivals*share if policy.get('savings_failed') else passes[g])*BUY[i]*p['tin_save'] for i,(g,share) in enumerate(zip(GR,(.30,.50,.20))))
    pickup=arrivals*p['pickup']*(1-p['tin_fail'] if policy.get('pickup_passed_only') else 1.)
    fixed=sum(v[2] for v in CHANNELS.values())
    channel={}
    for k in list(CHANNELS)+(['ti'] if arrivals else []):
        rs=[r for r in rows if r['channel']==k];q=sum(r['delivered'] for r in rs)
        channel[k]=dict(q=q,cam=sum(r['contribution_variable'] for r in rs)/1e5-(CHANNELS[k][2] if k in CHANNELS else 0.),
          returns=sum(r['returns'] for r in rs),comm=sum(r['commission'] for r in rs)/1e5,
          coupons=sum(r['coupons'] for r in rs)/1e5,credit=sum(r['credit'] for r in rs)/1e5,
          grade={g:sum(r['delivered'] for r in rs if r['grade']==g) for g in GR})
    sold=sum(r['delivered'] for r in rows);returned=sum(r['returns'] for r in rows)
    cam=sum(r['contribution_variable'] for r in rows)/1e5-fixed+(savings-pickup)/1e5
    return dict(cam=cam,sold=sold,rets=returned,rr=returned/sold,rows=channel,cells=rows,demand=sum(r['demand'] for r in rows),
        demS=sd,supS=available,fS=sf,fC=cf,cap=cap,save=savings/1e5,pick=pickup/1e5,tin_pass=passes,
        grade_sold={g:sum(r['delivered'] for r in rows if r['grade']==g) for g in GR},
        claim_expense=sum(r['warranty_expense'] for r in rows)/1e5,return_expense=sum(r['return_expense'] for r in rows)/1e5,
        claim_count=sum(r['delivered']*r['claim_rate'] for r in rows),price=dict(zip(GR,price)),retm=retfactor)

def plan(options=(),shift=None,params=None,policy=None):
    options=tuple(options)
    if 'B3' in options and not {'B1','B2'}&set(options):raise ValueError('B3 needs B1 or B2')
    months={m:calc(() if m=='Jan' else options,m!='Jan' and (shift=='Feb' or shift=='Mar' and m=='Mar'),0 if m=='Jan' else (1000 if m=='Feb' else 1800),params,policy) for m in ('Jan','Feb','Mar')}
    gm={'Jan':sum(SETUP[x] for x in options),'Feb':sum(MONTHLY[x] for x in options)+(9 if shift=='Feb' else 0),'Mar':sum(MONTHLY[x] for x in options)+(9 if shift else 0)}
    e={m:months[m]['cam']-58-gm[m] for m in months}
    tests={'t1':sum(gm.values())<=80+1e-9,'t2':e['Mar']>=-1e-9,'t3':months['Mar']['rr']<=.06+1e-12,'t4':'B1' in options}
    return dict(levers=list(options),shift=shift,m=months,e=e,gm=gm,gm_tot=sum(gm.values()),q1=sum(e.values()),tests=tests,ok=all(tests.values()))

def all_plans():
    ps=[]
    for bits in product((False,True),repeat=5):
        options=tuple(x for x,b in zip(SETUP,bits) if b)
        if 'B3' in options and not {'B1','B2'}&set(options):continue
        for shift in (None,'Feb','Mar'):ps.append(plan(options,shift))
    return ps

def name(p):return (' + '.join(p['levers']) or 'Do nothing')+(' + shift from '+p['shift'] if p['shift'] else '')
def close(a,b,tol=1e-8):return abs(a-b)<=tol

def root(f,lo,hi):
    flo=f(lo)
    assert flo*f(hi)<=0
    for _ in range(100):
        mid=(lo+hi)/2
        if flo*f(mid)<=0:hi=mid
        else:lo=mid;flo=f(lo)
    return (lo+hi)/2

def main():
    base=calc();ps=all_plans();feasible=sorted([p for p in ps if p['ok']],key=lambda p:-p['q1']);rec=feasible[0];nothing=plan()
    unit={g:SELL[i]-BUY[i]-LAB[i]-600-WARRANTY[i]*2500-RETURN[i]*1800 for i,g in enumerate(GR)}
    regimes={str(rm):{g:SELL[i]-BUY[i]-LAB[i]-600-WARRANTY[i]*2500-RETURN[i]*rm*1800 for i,g in enumerate(GR)} for rm in (.5,1.,1.5)}
    # Only now open the inherited engine. It supplies comparison values, never independent inputs.
    spec=importlib.util.spec_from_file_location('inherited_dobaara',ROOT/'model/dobaara_model.py');original=importlib.util.module_from_spec(spec);spec.loader.exec_module(original)
    inherited,_,_,_,original_ps=original.run()
    ref={(tuple(p['levers']),p['shift']):p for p in original_ps}
    errors=[];max_error=0.
    def compare(label,a,b):
        nonlocal max_error
        error=abs(a-b);max_error=max(max_error,error)
        if error>1e-8:errors.append(dict(field=label,independent=a,original=b,error=error))
    for p in ps:
        o=ref[(tuple(p['levers']),p['shift'])]
        for m in p['m']:
            compare(name(p)+' '+m+' EBITDA',p['e'][m],o['e'][m])
            for key in ('cam','sold','rr','save','pick','fS','fC','demS','supS','demand','cap','rets'):
                compare(name(p)+' '+m+' '+key,p['m'][m][key],o['m'][m][key])
            for k,v in p['m'][m]['rows'].items():
                for key in ('q','cam','returns','comm','coupons','credit'):compare(name(p)+' '+m+' '+k+' '+key,v[key],o['m'][m]['rows'][k][key])
                for g in GR:compare(name(p)+' '+m+' '+k+' '+g,v['grade'][g],o['m'][m]['rows'][k]['grade'][g])
        compare(name(p)+' q1',p['q1'],o['q1'])
        if p['tests']!=o['tests']:errors.append(dict(plan=name(p),independent=p['tests'],original=o['tests']))
    for g in GR:
        compare('baseline unit '+g,unit[g],inherited['T2'][g]['contrib'])
        for rm in (.5,1.,1.5):compare('return regime '+g+' '+str(rm),regimes[str(rm)][g],inherited['T3'][g][rm])
    for k,v in base['rows'].items():
        compare('baseline before marketing '+k,sum(r['contribution_before_channel'] for r in base['cells'] if r['channel']==k)/1e5,inherited['T4'][k]['contrib_before'])
    compare('baseline expected claim count',base['claim_count'],inherited['T5']['claims_n'])
    compare('baseline warranty expense',base['claim_expense'],inherited['T5']['claims_cost'])
    compare('baseline return expense',base['return_expense'],inherited['T5']['ret_cost'])
    checks={}
    def check(label,value):checks[label]=bool(value)
    check('independent baseline unit contributions',unit=={'S':4653.,'G':2524.,'F':716.})
    check('all 84 valid plans independently reproduced',len(ps)==84 and not errors)
    check('inherited thirteen checks pass',all(inherited['checks'].values()) and len(inherited['checks'])==13)
    check('January operating inputs unchanged across all plans',all(close(p['m']['Jan']['cam'],base['cam']) and close(p['m']['Jan']['sold'],7200) for p in ps))
    check('January setup reduces January EBITDA',all(close(p['e']['Jan'],base['cam']-58-p['gm']['Jan']) for p in ps))
    check('A extra advertising charged once',plan(('A',))['gm']=={'Jan':0,'Feb':10,'Mar':10} and close(calc(('A',))['cam'],sum(x['cam'] for x in calc(('A',))['rows'].values())))
    try:
        plan(('B3',))
        rejected=False
    except ValueError:rejected=True
    check('B3 invalid plan actively rejected',rejected)
    check('B3 forbidden without B1 or B2',all('B3' not in p['levers'] or bool({'B1','B2'}&set(p['levers'])) for p in ps))
    d1=calc(('B1',),True);d3=calc(('B1','B3'),True)
    check('B3 does not uplift MegaKart demand',close(sum(x['demand'] for x in d1['cells'] if x['channel']=='mk'),sum(x['demand'] for x in d3['cells'] if x['channel']=='mk')))
    together=calc(('B1','B2'),True)
    check('B1 and B2 order and return effects multiply',close(together['demand'],7200*1.08**2) and close(together['retm'],.7*.8))
    ca=calc(('A',),True)
    check('A mix changes only specified channels',all(close(next(r for r in ca['cells'] if r['channel']==k and r['grade']==g)['demand'],n*mix[i]*(1.5 if k in ('ads','mk') else 1)) for k,(n,old,_,_,_,_) in CHANNELS.items() for mix in [(.15,.35,.50) if k=='ads' else (.05,.40,.55) if k=='mk' else old] for i,g in enumerate(GR)))
    check('B2 changes prices only Superb and Good',together['price']=={'S':24960.,'G':16640.,'F':10000.})
    check('MegaKart commission uses increased selling price',all(close(r['commission'],r['delivered']*r['price']*.12) for r in together['cells'] if r['channel']=='mk'))
    check('all no-shift months respect 7200 sellable limit',all(x['sold']<=7200+1e-8 for p in ps if p['shift'] is None for x in p['m'].values()))
    check('all shift months respect 9000 sellable limit',all(x['sold']<=9000+1e-8 for p in ps for x in p['m'].values()))
    check('Superb rationed before lab',all(close(r['post_superb'],r['demand']*(x['fS'] if r['grade']=='S' else 1)) and close(r['delivered'],r['post_superb']*x['fC']) for p in ps for x in p['m'].values() for r in x['cells']))
    trade=calc(('A','B1','B2','B3','C'),True,1800)
    check('trade-in buyer uplift excluded from levers',close(sum(r['demand'] for r in trade['cells'] if r['channel']=='ti'),1800*.30))
    check('all trade-ins incur pickup cost including failed',close(trade['pick'],1800*400/1e5))
    check('failed trade-ins generate no sourcing saving',close(trade['save'],1800*.85*sum(a*b*.08 for a,b in zip((.3,.5,.2),BUY))/1e5))
    check('trade-in credits charged to delivered incremental buyers',close(trade['rows']['ti']['credit'],trade['rows']['ti']['q']*1000/1e5))
    check('channel and grade volume conservation every plan-month',all(close(x['sold'],sum(x['grade_sold'].values())) and close(x['sold'],sum(r['q'] for r in x['rows'].values())) for p in ps for x in p['m'].values()))
    check('feasible ranking uses full Q1 precision',len(feasible)==5 and all(feasible[i]['q1']>=feasible[i+1]['q1'] for i in range(len(feasible)-1)))
    # Independently evaluate bridge on the recommended delivered matrix, changing one cost layer at a time.
    q=together['cells']
    def bridgecam(priceup=False,bat=False,report=False,claims=False,returns=False):
        ans=0.
        for r in q:
            i=GR.index(r['grade']);k=r['channel'];price=SELL[i]*(1.04 if priceup and i<2 else 1)
            ex=([0,400,560][i] if bat else 0)+(120 if report else 0)
            wr=(.04,.06,.09)[i] if claims else WARRANTY[i]
            rr=RETURN[i]*CHANNELS[k][5]*(.56 if returns else 1)
            ans+=r['delivered']*(price-BUY[i]-LAB[i]-600-ex-wr*2500-rr*1800-CHANNELS[k][3]*price-CHANNELS[k][4])
        return ans/1e5-99
    running=[base['cam']]+[bridgecam(*([True]*i)) for i in range(6)]
    steps=[running[i+1]-running[i] for i in range(6)]
    check('independent March bridge sums exactly',close(base['cam']-58+sum(steps)-9,rec['e']['Mar']))
    allowed={'upB1','upB2','rrB1','rrB2','gbat','fbat','kcl'};scenarios={}
    for k,label in ((.75,'Bear'),(1.,'Base'),(1.25,'Bull')):
        pp={a:(DEFAULT[a]*k if a in ('upB1','upB2','rrB1','rrB2') else min(1.,DEFAULT[a]*(2-k)) if a in ('gbat','fbat') else DEFAULT[a]*(2-k)) for a in allowed}
        s=plan(('B1','B2'),'Feb',pp);scenarios[label]=dict(inputs=pp,e=s['e'],q1=s['q1'],rr=s['m']['Mar']['rr'],ok=s['ok'])
        for m in s['e']:compare('scenario '+label+' '+m,s['e'][m],inherited['scenarios'][label]['e'][m])
    check('scenarios modify declared uncertain effects only',all(set(s['inputs'])==allowed for s in scenarios.values()) and not errors)
    check('website funnel excludes stores and MegaKart',sum(CHANNELS[k][0] for k in ('ads','cr','rf'))==4200 and 4200+2000+1000==7200)
    check('returns expense does not reverse selling price',all(close(r['return_expense'],r['returns']*1800) for r in base['cells']))
    check('warranty common by grade and returns channel-adjusted',all(close(r['claim_rate'],WARRANTY[GR.index(r['grade'])]) and close(r['return_rate'],RETURN[GR.index(r['grade'])]*CHANNELS[r['channel']][5]) for r in base['cells']))
    check('fixed company and channel cost layers distinct',close(sum(v[2] for v in CHANNELS.values()),99) and close(base['cam']-58,-14.13695))
    check('screened compliance remains explicitly conditional',all(p['tests']['t4']==('B1' in p['levers']) for p in ps))
    be_up=root(lambda x:calc(('B1','B2'),True,params={'combined_uplift':x})['cam']-67,0,.3)
    be_g=root(lambda x:calc(('B1','B2'),True,params={'gbat':x})['cam']-67,.4,1)
    be_f=root(lambda x:calc(('B1','B2'),True,params={'fbat':x})['cam']-67,.7,1)
    return_boundary=root(lambda x:calc(('B1','B2'),True,params={'rrB1':1-x,'rrB2':0})['rr']-.06,.56,1)
    check('return boundary is board limit not EBITDA zero',close(calc(('B1','B2'),True,params={'rrB1':1-return_boundary,'rrB2':0})['rr'],.06) and abs(calc(('B1','B2'),True,params={'rrB1':1-return_boundary,'rrB2':0})['cam']-67)>1e-4)
    canon=dict(referral_rupees=base['rows']['rf']['cam']*1e5/base['rows']['rf']['q'],store_rupees=base['rows']['st']['cam']*1e5/base['rows']['st']['q'],next_feasible_gap_lakh=feasible[0]['q1']-feasible[1]['q1'],q1=rec['q1'],nothing_q1=nothing['q1'],delta_q1=rec['q1']-nothing['q1'])
    check('canonical rounding corrected from unrounded values',round(canon['referral_rupees'])==2648 and round(canon['store_rupees'])==1258 and round(canon['next_feasible_gap_lakh'],1)==14.2)
    # Cross-artifact display coverage depends on future report/deck; do not claim it here.
    out=dict(status='PASS' if all(checks.values()) and not errors else 'FAIL',model_version=inherited['meta']['version'],original_output_hash=json.loads((ROOT/'model/model_outputs.json').read_text(encoding='utf8'))['meta']['hash'],
      original_code_sha256=hashlib.sha256((ROOT/'model/dobaara_model.py').read_bytes()).hexdigest(),checks=checks,original_checks=inherited['checks'],max_comparison_error=max_error,discrepancies=errors,
      baseline=base,unit_contribution=unit,return_regimes=regimes,recommendation=rec,canonical=canon,
      plans=ps,feasible=[name(p) for p in feasible],bridge=dict(start=base['cam']-58,steps=steps,shift=-9,end=rec['e']['Mar']),
      scenarios=scenarios,boundaries=dict(combined_order_uplift=be_up,good_swap_share=be_g,fair_swap_share=be_f,returns_remaining_at_board_limit=return_boundary),
      limitations=['B1 is a conditional compliance screening proxy, not demonstrated Exhibit 5 compliance.','April requires new funding and a restarted trade-in ramp assumption.','Cross-artifact JSON/report/deck display agreement must be checked by coordinator after assembly.','Segment scores are inherited team judgement, not measured customer preferences.'])
    (OUT/'independent-audit.json').write_text(json.dumps(out,indent=2,ensure_ascii=False),encoding='utf8')
    print(json.dumps(dict(status=out['status'],checks_passed=sum(checks.values()),checks_total=len(checks),max_error=max_error,canonical=canon,boundaries=out['boundaries']),indent=2))
    if out['status']!='PASS':raise SystemExit(1)
    return out
if __name__=='__main__':main()
