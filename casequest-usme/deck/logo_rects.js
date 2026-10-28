// Replace MAP with {"<slot id>": [pngWidth, pngHeight], ...} (at most 8 slots a call). Creates an IMG rectangle fitted to the
// PNG's aspect inside each LOGO or IMG slot, removes the slot's caption and dash pattern, and returns the rectangle ids for upload_assets.
await figma.loadFontAsync({family:"Inter",style:"Semi Bold"});
const MAP = {}; const out = [];
for (const [id, wh] of Object.entries(MAP)) { const slot = await figma.getNodeByIdAsync(id); if (!slot) { out.push({id, error: "missing"}); continue; }
  slot.children.filter(c => c.type === "TEXT").forEach(c => c.remove()); try { slot.dashPattern = []; } catch (e) {}
  const W = slot.width - 6, H = slot.height - 6, k = Math.min(W / wh[0], H / wh[1]), w = Math.max(4, wh[0] * k), h = Math.max(4, wh[1] * k);
  const r = figma.createRectangle(); slot.appendChild(r); r.resize(w, h); r.x = (slot.width - w) / 2; r.y = (slot.height - h) / 2;
  r.fills = []; r.strokes = []; r.name = "IMG"; out.push({slot: slot.name, rect: r.id, w: Math.round(w), h: Math.round(h)}); }
return out;
