// Read-only. Run on the NEXORA file O0YlsAbRsIqQqSugUDWrxJ. Lists every image node on its cover with its parent node's text.
const s = await figma.getNodeByIdAsync("2:2"); const out = [];
for (const n of s.findAll(q => "fills" in q && Array.isArray(q.fills) && q.fills.some(f => f.type === "IMAGE"))) {
  const p = n.parent; const txt = p && p.findAll ? p.findAll(q => q.type === "TEXT").map(t => t.characters).join(" ") : "";
  out.push([n.id, txt.slice(0, 80), Math.round(n.width), Math.round(n.height)]); }
return out;
