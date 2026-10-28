export async function run(page,q) {
  if(q.kind==='ready'){await page.locator('#breadboardTab .cgfx__terminal').first().waitFor({state:'attached'});return {ready:true};}
  if(q.kind==='watchSaves'){globalThis.amSaveResponses=[];page.on('response',response=>{const request=response.request();if(['POST','PUT','PATCH'].includes(request.method())&&/tinkercad/.test(response.url())){const u=new URL(response.url());globalThis.amSaveResponses.push({method:request.method(),path:u.pathname,status:response.status()});}});return {watching:true};}
  if(q.kind==='saveResponses')return globalThis.amSaveResponses;
  if(q.kind==='instrumentState')return await page.locator('#breadboardTab svg').evaluateAll(nodes=>nodes.filter(n=>/oscilloscope|function-generator/.test(n.getAttribute('class')??'')).map(n=>({cls:n.getAttribute('class'),id:n.closest('[id]')?.id,box:n.getBoundingClientRect().toJSON(),on:n.querySelector('.cgfx__powerbtn .cgfx__toggle-on')?.getAttribute('display')})));
  if(q.kind==='restoreUI'){await page.evaluate(()=>document.querySelectorAll('#breadboardTab .wire-segment').forEach(n=>n.style.removeProperty('pointer-events')));await page.mouse.click(1580,950);return {restored:true};}
  if(q.kind==='genControls')return await page.locator('svg.cgfx__function-generator [class]').evaluateAll(nodes=>nodes.map(n=>({cls:n.getAttribute('class'),tag:n.tagName,html:n.outerHTML.slice(0,2000)})).filter(x=>/switch|power|onoff|button/i.test(x.cls)));
  if(q.kind==='scopeShot') {
    const fs=await import('node:fs/promises');await fs.mkdir('../am-receiver',{recursive:true});
    const id=globalThis.amRefs[q.ref];const b=await page.evaluate(id=>document.getElementById(id).getBoundingClientRect().toJSON(),id);
    const clip={x:Math.max(0,b.x-4),y:Math.max(0,b.y-4),width:b.width+8,height:b.height+8};
    const file='../am-receiver/'+q.ref+'-simulation.png';await page.screenshot({path:file,clip});return {file,clock:(await page.locator('body').innerText()).match(/Simulator time: [^\n]+/)?.[0]};
  }
  if(q.kind==='viewport'){await page.setViewportSize({width:q.width??1920,height:q.height??1080});return {viewport:page.viewportSize()};}
  if(q.kind==='zoom'){await page.mouse.move(q.x,q.y);for(let i=0;i<(q.steps??1);i++){await page.mouse.wheel(0,q.delta);await page.waitForTimeout(100);}await page.waitForTimeout(800);return {zoomed:q.delta,steps:q.steps??1};}
  if(q.kind==='save') {
    const fs=await import('node:fs/promises');await fs.mkdir('../am-receiver',{recursive:true});
    const graph=await run(page,{kind:'graph'});
    await fs.writeFile('../am-receiver/build-state.json',JSON.stringify({url:page.url(),refs:globalThis.amRefs,graph},null,2));return {saved:'am-receiver/build-state.json',wires:graph.length};
  }
  if(q.kind==='downloadSchematic') {
    const fs=await import('node:fs/promises');await fs.mkdir('../am-receiver',{recursive:true});
    const pending=page.waitForEvent('download');await page.getByText('Download .PDF',{exact:true}).click();const d=await pending;await d.saveAs('../am-receiver/am-receiver-tinkercad-schematic.pdf');return {file:'am-receiver/am-receiver-tinkercad-schematic.pdf'};
  }
  if(q.kind==='focus'){await page.bringToFront();return await page.evaluate(()=>({visibility:document.visibilityState,focus:document.hasFocus(),text:document.body.innerText.slice(0,300)}));}
  if(q.kind==='captured') {const {getLastCircuitJson}=await import('../dist/services/browser.js');const obj=getLastCircuitJson();return obj?{keys:Object.keys(obj),sample:JSON.stringify(obj).slice(0,10000)}:null;}
  globalThis.amRefs ??= {};
  if(q.kind==='presentRefs')return await page.evaluate(refs=>Object.fromEntries(Object.entries(refs).map(([r,id])=>[r,!!document.getElementById(id)])),globalThis.amRefs);
  if(q.kind==='genPower')return await page.evaluate(refs=>Object.fromEntries(['carrier','message'].map(r=>{const svg=document.getElementById(refs[r]).querySelector('svg.cgfx__function-generator');return [r,{on:svg.querySelector('.cgfx__powerbtn .cgfx__toggle-on')?.getAttribute('display'),off:svg.querySelector('.cgfx__powerbtn .cgfx__toggle-off')?.getAttribute('display')}];})),globalThis.amRefs);
  if(q.kind==='clearWires') {
    let removed=0;
    for(let i=0;i<40;i++){
      const target=await page.evaluate(ratio=>{const paths=[...document.querySelectorAll('#breadboardTab path')].filter(n=>getComputedStyle(n).stroke==='rgb(64, 185, 66)');const n=paths[0];if(!n)return null;const p=n.getPointAtLength(n.getTotalLength()*ratio).matrixTransform(n.getScreenCTM());return {x:p.x,y:p.y,count:paths.length};},q.ratio??.5);
      if(!target)return {removed};
      await page.mouse.move(target.x,target.y);await page.waitForTimeout(120);await page.mouse.click(target.x,target.y);await page.keyboard.press('Delete');await page.waitForTimeout(100);
      const after=await page.evaluate(()=>[...document.querySelectorAll('#breadboardTab path')].filter(n=>getComputedStyle(n).stroke==='rgb(64, 185, 66)').length);
      if(after>=target.count)return {removed,stoppedAt:target,after};removed++;
    }return {removed};
  }
  if(q.kind==='strokes')return await page.locator('#breadboardTab path, #breadboardTab polyline, #breadboardTab line').evaluateAll(nodes=>{const out={};for(const n of nodes){const c=getComputedStyle(n).stroke;out[c]=(out[c]??0)+1;}return out;});
  if(q.kind==='wireDom')return await page.locator('#breadboardTab [class*="wire"],#breadboardTab [class*="Wire"]').evaluateAll(nodes=>nodes.slice(0,8).map(n=>n.outerHTML.slice(0,12000)));
  const pins = async () => await page.locator('#breadboardTab .cgfx__terminal').evaluateAll(nodes=>nodes.map(n=>{const l=n.querySelector('.cgfx__origin'),m=n.getScreenCTM();if(!l||!m)return null;const p=new DOMPoint(+l.getAttribute('x1'),+l.getAttribute('y1')).matrixTransform(m);return {id:n.closest('[id]')?.id,name:n.querySelector('desc')?.textContent,x:p.x,y:p.y};}).filter(Boolean));
  if(q.kind==='readRefFields'){const id=globalThis.amRefs[q.ref];const b=await page.evaluate(id=>document.getElementById(id).getBoundingClientRect().toJSON(),id);await page.mouse.click(b.x+b.width/2,b.y+b.height/2);return {ref:q.ref,values:await page.locator('.inspector input,.inspector select').evaluateAll(nodes=>nodes.map(n=>({id:n.id,value:n.value}))),title:await page.locator('.inspector__title__text').innerText()};}
  if(q.kind==='removePinWire') {await page.evaluate(()=>document.querySelectorAll('#breadboardTab .wire-segment').forEach(n=>n.style.pointerEvents='auto'));const [r,name]=q.pin.split('.');const p=(await pins()).find(p=>p.id===globalThis.amRefs[r]&&p.name===name);const w=await page.evaluate(p=>{for(const n of document.querySelectorAll('#breadboardTab path')){if(getComputedStyle(n).stroke!=='rgb(64, 185, 66)')continue;const m=n.getScreenCTM(),len=n.getTotalLength(),a=n.getPointAtLength(0).matrixTransform(m),b=n.getPointAtLength(len).matrixTransform(m);if(Math.min(Math.hypot(a.x-p.x,a.y-p.y),Math.hypot(b.x-p.x,b.y-p.y))<1){const pt=n.getPointAtLength(len*(p.ratio??.4)).matrixTransform(m);return {x:pt.x,y:pt.y};}}return null;},{...p,ratio:q.ratio});if(!w)throw Error('No wire '+q.pin);await page.mouse.move(w.x,w.y);await page.waitForTimeout(150);await page.mouse.click(w.x,w.y);await page.keyboard.press('Delete');return {removedWire:q.pin,total:await page.evaluate(()=>[...document.querySelectorAll('#breadboardTab path')].filter(n=>getComputedStyle(n).stroke==='rgb(64, 185, 66)').length)};}
  if(q.kind==='remove') {const id=globalThis.amRefs[q.ref];const b=await page.evaluate(id=>document.getElementById(id).getBoundingClientRect().toJSON(),id);await page.mouse.move(b.x+b.width/2,b.y+b.height/2);await page.mouse.click(b.x+b.width/2,b.y+b.height/2);await page.keyboard.press('Delete');delete globalThis.amRefs[q.ref];return {removed:q.ref};}
  if(q.kind==='inspectRef'){const id=globalThis.amRefs[q.ref];const b=await page.evaluate(id=>document.getElementById(id).getBoundingClientRect().toJSON(),id);return {ref:q.ref,box:b,pins:(await pins()).filter(p=>p.id===id).slice(0,5)};}
  if(q.kind==='graph') {
    const pp=await pins();const refs=globalThis.amRefs;
    const edges=await page.evaluate(()=>[...document.querySelectorAll('#breadboardTab path')].filter(n=>getComputedStyle(n).stroke==='rgb(64, 185, 66)').map(n=>{const m=n.getScreenCTM();const a=n.getPointAtLength(0).matrixTransform(m),b=n.getPointAtLength(n.getTotalLength()).matrixTransform(m);return [[a.x,a.y],[b.x,b.y]];}));
    const match=([x,y])=>{const p=pp.reduce((best,p)=>Math.hypot(p.x-x,p.y-y)<Math.hypot(best.x-x,best.y-y)?p:best,pp[0]);return {pin:(Object.entries(refs).find(([r,id])=>id===p.id)?.[0]??p.id)+'.'+p.name,error:Math.round(Math.hypot(p.x-x,p.y-y)*100)/100};};return edges.map(e=>e.map(match));
  }
  if(q.kind==='register'){globalThis.amRefs[q.ref]=q.id;return globalThis.amRefs;}
  if(q.kind==='moveTo'){const id=globalThis.amRefs[q.ref];const pp=(await pins()).filter(p=>p.id===id);const px=pp.reduce((s,p)=>s+p.x,0)/pp.length,py=pp.reduce((s,p)=>s+p.y,0)/pp.length;const b=await page.evaluate(id=>document.getElementById(id).getBoundingClientRect().toJSON(),id);await page.mouse.move(b.x+b.width/2,b.y+b.height/2);await page.mouse.down();await page.mouse.move(b.x+b.width/2+q.x-px,b.y+b.height/2+q.y-py,{steps:20});await page.mouse.up();return {moved:q.ref,to:[q.x,q.y]};}
  if(q.kind==='moveBy'){const id=globalThis.amRefs[q.ref];const b=await page.evaluate(id=>document.getElementById(id).getBoundingClientRect().toJSON(),id);await page.mouse.move(b.x+b.width/2,b.y+b.height/2);await page.mouse.down();await page.mouse.move(b.x+b.width/2+q.dx,b.y+b.height/2+q.dy,{steps:20});await page.mouse.up();return {ref:q.ref,moved:[q.dx,q.dy]};}
  if(q.kind==='refs'){return {refs:globalThis.amRefs,pins:await pins()};}
  if(q.kind==='hoverPin'){const [r,name]=q.pin.split('.');const p=(await pins()).find(p=>p.id===globalThis.amRefs[r]&&p.name===name);await page.mouse.move(p.x,p.y);await page.waitForTimeout(300);return {p,text:(await page.locator('body').innerText()).slice(-400),hit:await page.evaluate(({x,y})=>document.elementFromPoint(x,y)?.outerHTML.slice(0,1500),p)};}
  if(q.kind==='wire') {
    await page.evaluate(()=>{document.querySelectorAll('#breadboardTab .wire-segment').forEach(n=>{n.style.pointerEvents='none';});});
    const wireCount=()=>page.evaluate(()=>[...document.querySelectorAll('#breadboardTab path')].filter(n=>getComputedStyle(n).stroke==='rgb(64, 185, 66)').length);
    const beforeCount=await wireCount();
    const pp=await pins();
    const resolve=(r)=>{const [ref,name]=r.split('.');const p=pp.find(p=>p.id===globalThis.amRefs[ref]&&p.name===name);if(!p)throw new Error('Missing pin '+r);return p;};
    const a=resolve(q.from),b=resolve(q.to);
    await page.mouse.move(a.x,a.y);await page.waitForTimeout(150);await page.mouse.click(a.x,a.y);await page.waitForTimeout(100);
    for(const pt of q.via??[]){await page.mouse.move(pt[0],pt[1]);await page.waitForTimeout(50);await page.mouse.click(pt[0],pt[1]);}
    await page.mouse.move(b.x,b.y);await page.waitForTimeout(150);await page.mouse.click(b.x,b.y);await page.waitForTimeout(100); await page.keyboard.press('Escape');
    const afterCount=await wireCount();return {wire:[q.from,q.to],attached:afterCount>beforeCount,totalWires:afterCount};
  }
  if(q.kind==='configure') {
    const id=globalThis.amRefs[q.ref];const box=await page.evaluate(id=>document.getElementById(id).getBoundingClientRect().toJSON(),id);if(q.ref==='carrier'||q.ref==='message'){const p=await page.evaluate(id=>{const svg=document.getElementById(id).querySelector('svg.cgfx__function-generator');const p=new DOMPoint(80,-20).matrixTransform(svg.getScreenCTM());return {x:p.x,y:p.y};},id);await page.mouse.click(p.x,p.y);}else{await page.mouse.click(box.x+box.width/2,box.y+box.height/2);}
    const groups=page.locator('.inspector .inspector__group');
    for(const [name,value] of Object.entries(q.values)) {
      const g=groups.filter({has:page.locator('.dual_inspector__label').filter({hasText:new RegExp('^'+name+'$')})});
      const input=g.locator('input').first();await input.fill(String(value));await input.press('Enter');
    }
    if(q.function)await page.locator('.inspector select').selectOption(q.function);
    if(q.unit)await page.locator('.inspector select').first().selectOption(q.unit);
    return await page.locator('.inspector input,.inspector select').evaluateAll(nodes=>nodes.map(n=>({value:n.value,html:n.outerHTML.slice(0,250)})));
  }
  if(q.kind==='terminals') {
    return await page.locator('#breadboardTab .cgfx__terminal').evaluateAll(nodes=>nodes.map(n=>{ const l=n.querySelector('.cgfx__origin'); const m=n.getScreenCTM(); if(!l||!m)return null; const p=new DOMPoint(+l.getAttribute('x1'),+l.getAttribute('y1')).matrixTransform(m);let a=n;const ancestors=[];while(a&&a.tagName!=='DIV'){if(a.id||a.getAttribute('class'))ancestors.push({id:a.id,cls:a.getAttribute('class')});a=a.parentElement;}return {name:n.querySelector('desc')?.textContent,x:p.x,y:p.y,ancestors:ancestors.slice(0,5)};}));
  } else if(q.kind==='search') {
    await page.getByPlaceholder('Search',{exact:true}).fill(q.query??q.text);
    await page.getByPlaceholder('Search',{exact:true}).press('Enter');
  } else if(q.kind==='domText') {
    return await page.getByText(q.text,{exact:true}).evaluateAll(nodes=>nodes.map(n=>({box:n.getBoundingClientRect().toJSON(),html:n.parentElement.parentElement.outerHTML.slice(0,10000)})));
  } else if(q.kind==='add') {
    const before=new Set((await pins()).map(p=>p.id));
    await page.getByPlaceholder('Search',{exact:true}).fill(q.query??q.text);
    await page.getByPlaceholder('Search',{exact:true}).press('Enter');
    const item = page.locator('.editor__component_picker__groups__item__grid__title:visible').filter({hasText:q.text}).first();
    await item.waitFor({state:'visible',timeout:10000});
    const box=await item.boundingBox();
    await page.mouse.move(box.x+box.width/2,box.y-35); await page.mouse.down(); await page.mouse.move(q.x,q.y,{steps:20}); await page.mouse.up();
    const added=(await pins()).filter(p=>!before.has(p.id));
    if(q.ref&&added.length)globalThis.amRefs[q.ref]=added[0].id;
    return {ref:q.ref,id:globalThis.amRefs[q.ref],pins:added.slice(0,8),pinCount:added.length};
  } else if(q.kind==='dom') {
    return await page.locator(q.selector).evaluateAll(nodes=>nodes.map(n=>n.outerHTML.slice(0,8000)));
  } else if(q.kind==='click') { await page.locator(q.selector).first().click();
  } else if(q.kind==='fill') { await page.locator(q.selector).first().fill(q.value); await page.locator(q.selector).first().press('Enter');
  } else if(q.kind==='select') { await page.locator(q.selector).first().selectOption(q.value);
  } else if(q.kind==='point') { await page.mouse.click(q.x,q.y);
  } else if(q.kind==='drag') { await page.mouse.move(q.x,q.y); await page.mouse.down(); await page.mouse.move(q.toX,q.toY,{steps:20}); await page.mouse.up();
  }
  return {url:page.url(),text:(await page.locator('body').innerText()).slice(0,1600)};
}
