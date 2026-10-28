// Offline pre-flight for Figma Slides build scripts. Usage:
//   node mock_figma.js <preamble.js> <values.js> <slide.js> [slideNumber]
// Runs the script against a mock `figma` API with approximate text metrics, then prints
// errors, overflow, collisions, font-floor breaches, node counts and dead space.
// Metrics are approximate (Poppins ~0.62em, Inter ~0.55em); the real V1 validator in Figma is final.
const fs = require("fs");
let idc = 0;
const CW = { // average advance per char class, in em
  "Poppins|Bold": { up: 0.70, lo: 0.58, dg: 0.62, sp: 0.27, pu: 0.30 },
  "Poppins|ExtraBold": { up: 0.73, lo: 0.60, dg: 0.64, sp: 0.27, pu: 0.31 },
  "Inter|Semi Bold": { up: 0.68, lo: 0.55, dg: 0.60, sp: 0.26, pu: 0.30 },
  "Inter|Bold": { up: 0.70, lo: 0.57, dg: 0.62, sp: 0.26, pu: 0.31 },
};
function cw(ch, fam) { const t = CW[fam] || CW["Inter|Semi Bold"];
  if (ch === " ") return t.sp; if (/[0-9]/.test(ch)) return t.dg; if (/[A-Z₹]/.test(ch)) return t.up;
  if (/[a-z]/.test(ch)) return t.lo; if (/[MW@%]/.test(ch)) return t.up * 1.2; return t.pu; }
function measure(s, fam, size) { let w = 0; for (const ch of s) w += cw(ch, fam) * size; return w; }
function lineH(fam, size) { return (fam.startsWith("Poppins") ? 1.5 : 1.21) * size; }
function wrap(s, fam, size, width) { const out = [];
  for (const para of String(s).split("\n")) { const words = para.split(" "); let line = "";
    for (const wd of words) { const cand = line ? line + " " + wd : wd;
      if (measure(cand, fam, size) <= width || !line) line = cand; else { out.push(line); line = wd; } }
    out.push(line); } return out; }
class Node {
  constructor(type) { this.id = "m" + (++idc); this.type = type; this.x = 0; this.y = 0; this.width = 100; this.height = 100;
    this.children = []; this.parent = null; this.name = type; this.fills = []; this.strokes = []; }
  appendChild(n) { if (n.parent) n.parent.children.splice(n.parent.children.indexOf(n), 1); n.parent = this; this.children.push(n); }
  resize(w, h) { if (!(w > 0) || !(h > 0)) throw new Error(`resize(${w},${h}) invalid on ${this.name}`); this.width = w; this.height = h; this._fixedH = h; if (this.type === "TEXT") this._fixedW = w; }
  remove() { if (this.parent) this.parent.children.splice(this.parent.children.indexOf(this), 1); this.parent = null; }
  findAll(fn) { const r = []; const walk = n => { for (const c of n.children) { if (!fn || fn(c)) r.push(c); walk(c); } }; walk(this); return r; }
  findAllWithCriteria(q) { return this.findAll(n => q.types.includes(n.type)); }
  get absoluteBoundingBox() { let x = this.x, y = this.y, p = this.parent; while (p && p.type !== "SLIDE") { x += p.x; y += p.y; p = p.parent; }
    return { x, y, width: this.width, height: this.height }; }
  clone() { const c = Object.assign(Object.create(Object.getPrototypeOf(this)), this); c.id = "m" + (++idc); c.children = []; c.parent = null; return c; }
}
class TextNode extends Node {
  constructor() { super("TEXT"); this.fontName = { family: "Inter", style: "Semi Bold" }; this._auto = "WIDTH_AND_HEIGHT"; this._chars = ""; this._fs = 12; }
  set characters(s) { if (typeof s !== "string") throw new Error("characters must be string, got " + typeof s + " (" + s + ")");
    if (s.includes("undefined") || s.includes("NaN") || s.includes("null")) warnings_global.push("suspicious text: " + s.slice(0, 60)); this._chars = s; this._reflow(); }
  get characters() { return this._chars; }
  set textAutoResize(v) { this._auto = v; this._reflow(); } get textAutoResize() { return this._auto; }
  set fontSize(v) { this._fs = v; if (this._chars !== undefined) this._reflow(); } get fontSize() { return this._fs; }
  setRangeFontName() {} setRangeFills() {}
  _fam() { return this.fontName.family + "|" + this.fontName.style; }
  _reflow() { if (this._fs === undefined || this._chars === undefined || !this.fontName) return; const fam = this._fam();
    if (this._auto === "WIDTH_AND_HEIGHT") { const lines = String(this._chars).split("\n");
      this.width = Math.max(...lines.map(l => measure(l, fam, this._fs))); this.height = lines.length * lineH(fam, this._fs); }
    else if (this._auto === "HEIGHT") { const lines = wrap(this._chars, fam, this._fs, this.width); this.height = lines.length * lineH(fam, this._fs); }
    else { this._wrapH = wrap(this._chars, fam, this._fs, this.width).length * lineH(fam, this._fs); } }
  resize(w, h) { this.width = w; this.height = h; this._auto = "NONE"; this._reflow(); }
}
let warnings_global = [];
const slides = {};
for (let i = 1; i <= 11; i++) { const s = new Node("SLIDE"); s.id = "S" + i; s.name = "S" + i; s.width = 1920; s.height = 1080; slides["S" + i] = s; }
global.figma = {
  createFrame: () => new Node("FRAME"), createRectangle: () => new Node("RECTANGLE"), createEllipse: () => new Node("ELLIPSE"),
  createVector: () => new Node("VECTOR"), createText: () => new TextNode(),
  loadFontAsync: async () => {}, getNodeByIdAsync: async id => slides[id], mixed: Symbol("mixed"),
  listAvailableFontsAsync: async () => [],
};
const [pre, vals, slide, num] = process.argv.slice(2);
const code = fs.readFileSync(pre, "utf8") + "\n" + fs.readFileSync(vals, "utf8") + "\nconst results=[];\n" + fs.readFileSync(slide, "utf8") + "\nreturn {results,warnings};";
const AsyncFunction = Object.getPrototypeOf(async function () {}).constructor;
(async () => {
  let res;
  try { res = await new AsyncFunction(code)(); } catch (e) { console.log("RUNTIME ERROR:", e.message); console.log(e.stack.split("\n").slice(0, 4).join("\n")); process.exit(1); }
  const issues = [];
  for (const [sid, s] of Object.entries(slides)) {
    if (!s.children.length) continue;
    const all = s.findAll(() => true);
    const texts = all.filter(n => n.type === "TEXT");
    const KEY = /^(PANEL|CARD|KPI|TABLE):/;
    const top = s.children.filter(c => KEY.test(c.name));
    for (let i = 0; i < top.length; i++) for (let j = i + 1; j < top.length; j++) { const a = top[i], b = top[j];
      const ox = Math.min(a.x + a.width, b.x + b.width) - Math.max(a.x, b.x), oy = Math.min(a.y + a.height, b.y + b.height) - Math.max(a.y, b.y);
      if (ox >= 4 && oy >= 4) issues.push(`[${sid}] overlap: ${a.name} x ${b.name}`); }
    for (const c of s.children) { if (c.x < -1 || c.y < -1 || c.x + c.width > 1921 || c.y + c.height > 1081) issues.push(`[${sid}] bounds: ${c.name} (${Math.round(c.x)},${Math.round(c.y)},${Math.round(c.width)}x${Math.round(c.height)})`);
      if (KEY.test(c.name) && c.y + c.height > 1036) issues.push(`[${sid}] belowContent: ${c.name} bottom ${Math.round(c.y + c.height)}`); }
    for (const t of texts) { const tb = t.absoluteBoundingBox;
      if (tb.x < -1 || tb.y < -1 || tb.x + tb.width > 1921 || tb.y + tb.height > 1081) issues.push(`[${sid}] textOffSlide: "${t.characters.slice(0, 40)}"`);
      const p = t.parent; if (p && p.type !== "SLIDE") { const pb = p.absoluteBoundingBox;
        if (tb.x + tb.width > pb.x + pb.width + 1 || tb.y + tb.height > pb.y + pb.height + 1 || tb.x < pb.x - 1) issues.push(`[${sid}] textOut: "${t.characters.slice(0, 40)}" in ${p.name} (text ${Math.round(tb.width)}x${Math.round(tb.height)} vs frame ${Math.round(pb.width)}x${Math.round(pb.height)}, dy ${Math.round(tb.y + tb.height - pb.y - pb.height)})`); }
      if (t.textAutoResize === "NONE" && t._wrapH > t.height + 2) issues.push(`[${sid}] cellWrap: "${t.characters.slice(0, 40)}" needs ${Math.round(t._wrapH)} has ${Math.round(t.height)}`);
      const exempt = t.characters.startsWith("Source:") || /BIBLIO|FINEPRINT/.test(t.name || "") || /LOGO:/.test((t.parent && t.parent.name) || "");
      if (t.fontSize < 22 && !exempt) issues.push(`[${sid}] fontFloor: ${t.fontSize}pt "${t.characters.slice(0, 30)}"`); }
    // text-on-text collisions (absolute)
    for (let i = 0; i < texts.length; i++) for (let j = i + 1; j < texts.length; j++) { const a = texts[i].absoluteBoundingBox, b = texts[j].absoluteBoundingBox;
      if (!texts[i].characters.trim() || !texts[j].characters.trim()) continue;
      const ha = texts[i].textAutoResize === "NONE" ? Math.min(a.height, texts[i]._wrapH || a.height) : a.height;
      const hb = texts[j].textAutoResize === "NONE" ? Math.min(b.height, texts[j]._wrapH || b.height) : b.height;
      // for fixed boxes use the vertically centred text band, not the whole cell
      const ay = texts[i].textAutoResize === "NONE" ? a.y + (a.height - ha) / 2 : a.y, by = texts[j].textAutoResize === "NONE" ? b.y + (b.height - hb) / 2 : b.y;
      const aw = texts[i].textAutoResize === "NONE" ? Math.min(a.width, measure(texts[i].characters, texts[i]._fam(), texts[i].fontSize)) : a.width;
      const bw = texts[j].textAutoResize === "NONE" ? Math.min(b.width, measure(texts[j].characters, texts[j]._fam(), texts[j].fontSize)) : b.width;
      const ax = texts[i].textAutoResize === "NONE" && texts[i].textAlignHorizontal === "CENTER" ? a.x + (a.width - aw) / 2 : (texts[i].textAlignHorizontal === "RIGHT" && texts[i].textAutoResize === "NONE" ? a.x + a.width - aw : a.x);
      const bx = texts[j].textAutoResize === "NONE" && texts[j].textAlignHorizontal === "CENTER" ? b.x + (b.width - bw) / 2 : (texts[j].textAlignHorizontal === "RIGHT" && texts[j].textAutoResize === "NONE" ? b.x + b.width - bw : b.x);
      const ox = Math.min(ax + aw, bx + bw) - Math.max(ax, bx), oy = Math.min(ay + ha, by + hb) - Math.max(ay, by);
      if (ox > 3 && oy > 3) issues.push(`[${sid}] textCollision: "${texts[i].characters.slice(0, 28)}" x "${texts[j].characters.slice(0, 28)}"`); }
    const hl = s.children.find(c => c.name === "HEADLINE"); if (hl && hl.height > 113) issues.push(`[${sid}] headline3lines (${Math.round(hl.height)}px at ${hl.fontSize}pt)`);
    const bottoms = s.children.filter(c => c.name !== "SOURCE").map(c => c.y + c.height); const low = Math.max(...bottoms);
    const nm = { total: all.length, top: s.children.length, texts: texts.length, lowest: Math.round(low) };
    console.log(`[${sid}] nodes`, JSON.stringify(nm));
  }
  const w = (res && res.warnings) || [];
  console.log("warnings:", JSON.stringify(w.concat(warnings_global)));
  console.log("ISSUES", issues.length); issues.slice(0, 120).forEach(i => console.log("  " + i));
})();
