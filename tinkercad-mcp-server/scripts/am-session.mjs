import readline from 'node:readline';
import * as bridge from '../dist/services/editor-bridge.js';
import {getPage, closeBrowser} from '../dist/services/browser.js';
const input = readline.createInterface({input:process.stdin});
for await (const line of input) {
  try {
    const q = JSON.parse(line);
    const page = await getPage();
    let result;
    if (q.op === 'action') {
      result = await (await import('./am-actions.mjs?v='+Date.now())).run(page,q);
    } else if (q.op === 'pages') {
      result = page.context().pages().map(p=>({url:p.url()}));
    } else if (q.op === 'links') {
      result = await page.locator('a').evaluateAll(nodes=>nodes.map(n=>({text:n.textContent,href:n.getAttribute('href'),target:n.getAttribute('target')})));
    } else if (q.op === 'goto') {
      await page.goto(q.url); result = await page.locator('body').innerText();
    } else if (q.op === 'inspect') {
      result = await page.locator('body').innerText();
    } else if (q.op === 'screenshot') {
      const shot = await bridge.takeScreenshot(); result = {path:shot.path};
    } else if (q.op === 'click') {
      await page.getByRole(q.role, {name:q.name,exact:q.exact??true}).first().click();
      result = await page.locator('body').innerText();
    } else if (q.op === 'controls') {
      result = await page.locator('input,select,button,[role="button"]').evaluateAll(nodes=>nodes.map(n=>({tag:n.tagName,text:n.textContent?.slice(0,150),aria:n.getAttribute('aria-label'),placeholder:n.getAttribute('placeholder'),type:n.getAttribute('type')})));
    } else if (q.op === 'call') {
      result = await bridge[q.method](...(q.args??[]));
    } else if (q.op === 'close') { await closeBrowser(); break; }
    console.log(JSON.stringify({ok:true,result}));
  } catch (e) { console.log(JSON.stringify({ok:false,error:String(e)})); }
}
