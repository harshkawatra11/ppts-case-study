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
const ADV = {"Poppins|Bold":{" ":0.212,"!":0.392,"\"":0.411,"#":0.904,"$":0.658,"%":0.87,"&":0.798,"'":0.221,"(":0.477,")":0.477,"*":0.534,"+":0.628,",":0.287,"-":0.58,".":0.282,"/":0.453,"0":0.652,"1":0.376,"2":0.571,"3":0.605,"4":0.677,"5":0.65,"6":0.637,"7":0.535,"8":0.648,"9":0.615,":":0.284,";":0.347,"<":0.551,"=":0.696,">":0.541,"?":0.538,"@":1.08,"A":0.737,"B":0.659,"C":0.762,"D":0.727,"E":0.541,"F":0.547,"G":0.762,"H":0.731,"I":0.295,"J":0.578,"K":0.697,"L":0.477,"M":0.918,"N":0.752,"O":0.786,"P":0.624,"Q":0.788,"R":0.652,"S":0.615,"T":0.591,"U":0.705,"V":0.73,"W":1.052,"X":0.715,"Y":0.671,"Z":0.596,"[":0.51,"\\":0.802,"]":0.51,"^":0.709,"_":0.78,"`":0.291,"a":0.679,"b":0.679,"c":0.605,"d":0.679,"e":0.616,"f":0.36,"g":0.679,"h":0.674,"i":0.295,"j":0.294,"k":0.618,"l":0.295,"m":1.059,"n":0.674,"o":0.637,"p":0.679,"q":0.679,"r":0.428,"s":0.558,"t":0.406,"u":0.674,"v":0.626,"w":0.866,"x":0.588,"y":0.632,"z":0.496,"{":0.499,"|":0.291,"}":0.499,"~":0.636,"₹":0.598,"−":0.543,"÷":0.611,"×":0.637,"“":0.541,"”":0.541,"‘":0.314,"’":0.314,"·":0.299,"•":0.501,"…":0.76},"Poppins|ExtraBold":{" ":0.191,"!":0.423,"\"":0.451,"#":0.919,"$":0.661,"%":0.904,"&":0.814,"'":0.243,"(":0.47,")":0.47,"*":0.548,"+":0.589,",":0.314,"-":0.578,".":0.301,"/":0.426,"0":0.657,"1":0.387,"2":0.569,"3":0.61,"4":0.691,"5":0.655,"6":0.635,"7":0.523,"8":0.653,"9":0.606,":":0.302,";":0.366,"<":0.524,"=":0.661,">":0.519,"?":0.538,"@":1.104,"A":0.755,"B":0.671,"C":0.758,"D":0.735,"E":0.548,"F":0.561,"G":0.757,"H":0.743,"I":0.308,"J":0.584,"K":0.726,"L":0.491,"M":0.935,"N":0.765,"O":0.787,"P":0.636,"Q":0.788,"R":0.661,"S":0.62,"T":0.604,"U":0.712,"V":0.747,"W":1.076,"X":0.739,"Y":0.701,"Z":0.613,"[":0.522,"\\":0.84,"]":0.521,"^":0.733,"_":0.772,"`":0.307,"a":0.68,"b":0.68,"c":0.607,"d":0.68,"e":0.616,"f":0.373,"g":0.68,"h":0.686,"i":0.308,"j":0.307,"k":0.647,"l":0.308,"m":1.067,"n":0.686,"o":0.636,"p":0.68,"q":0.68,"r":0.447,"s":0.568,"t":0.421,"u":0.686,"v":0.649,"w":0.885,"x":0.628,"y":0.655,"z":0.507,"{":0.492,"|":0.277,"}":0.492,"~":0.674,"₹":0.588,"−":0.525,"÷":0.581,"×":0.609,"“":0.595,"”":0.595,"‘":0.346,"’":0.346,"·":0.324,"•":0.519,"…":0.815},"Inter|Semi Bold":{" ":0.252,"!":0.321,"\"":0.523,"#":0.644,"$":0.65,"%":1.004,"&":0.663,"'":0.326,"(":0.373,")":0.373,"*":0.54,"+":0.673,",":0.319,"-":0.465,".":0.319,"/":0.379,"0":0.66,"1":0.423,"2":0.623,"3":0.636,"4":0.666,"5":0.612,"6":0.64,"7":0.576,"8":0.64,"9":0.64,":":0.319,";":0.329,"<":0.673,"=":0.673,">":0.673,"?":0.543,"@":0.999,"A":0.728,"B":0.659,"C":0.737,"D":0.722,"E":0.605,"F":0.588,"G":0.749,"H":0.746,"I":0.277,"J":0.58,"K":0.703,"L":0.565,"M":0.922,"N":0.759,"O":0.769,"P":0.645,"Q":0.773,"R":0.652,"S":0.65,"T":0.66,"U":0.736,"V":0.728,"W":1.02,"X":0.72,"Y":0.713,"Z":0.652,"[":0.373,"\\":0.379,"]":0.373,"^":0.481,"_":0.469,"`":0.351,"a":0.574,"b":0.624,"c":0.583,"d":0.624,"e":0.591,"f":0.389,"g":0.625,"h":0.612,"i":0.262,"j":0.262,"k":0.569,"l":0.262,"m":0.9,"n":0.612,"o":0.609,"p":0.624,"q":0.624,"r":0.397,"s":0.549,"t":0.353,"u":0.612,"v":0.587,"w":0.839,"x":0.569,"y":0.588,"z":0.566,"{":0.455,"|":0.359,"}":0.455,"~":0.673,"−":0.673,"÷":0.673,"×":0.673,"“":0.507,"”":0.501,"‘":0.294,"’":0.294,"·":0.319,"•":0.503,"…":0.956,"₹":0.562},"Inter|Bold":{" ":0.237,"!":0.338,"\"":0.551,"#":0.649,"$":0.655,"%":1.016,"&":0.672,"'":0.339,"(":0.377,")":0.377,"*":0.559,"+":0.679,",":0.334,"-":0.468,".":0.334,"/":0.388,"0":0.674,"1":0.431,"2":0.629,"3":0.646,"4":0.676,"5":0.622,"6":0.649,"7":0.582,"8":0.651,"9":0.649,":":0.334,";":0.343,"<":0.679,"=":0.679,">":0.679,"?":0.56,"@":1.016,"A":0.747,"B":0.662,"C":0.74,"D":0.722,"E":0.607,"F":0.587,"G":0.75,"H":0.747,"I":0.281,"J":0.584,"K":0.719,"L":0.565,"M":0.932,"N":0.762,"O":0.771,"P":0.648,"Q":0.777,"R":0.657,"S":0.655,"T":0.667,"U":0.732,"V":0.747,"W":1.038,"X":0.738,"Y":0.731,"Z":0.664,"[":0.377,"\\":0.388,"]":0.377,"^":0.487,"_":0.476,"`":0.365,"a":0.581,"b":0.63,"c":0.588,"d":0.63,"e":0.596,"f":0.398,"g":0.632,"h":0.623,"i":0.271,"j":0.271,"k":0.58,"l":0.271,"m":0.913,"n":0.623,"o":0.613,"p":0.63,"q":0.63,"r":0.407,"s":0.56,"t":0.366,"u":0.623,"v":0.6,"w":0.85,"x":0.58,"y":0.602,"z":0.573,"{":0.469,"|":0.372,"}":0.469,"~":0.679,"−":0.679,"÷":0.679,"×":0.679,"“":0.54,"”":0.532,"‘":0.311,"’":0.311,"·":0.334,"•":0.474,"…":1.002,"₹":0.571}};
function cw(ch, fam) { const a = EXACT_FLAG ? ADV[fam] : null; if (a && a[ch] !== undefined) return a[ch] * 1.02; const t = CW[fam] || CW["Inter|Semi Bold"];
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
Object.defineProperty(Node.prototype, "relativeTransform", { set(m) { this._rt = m; if (this.type === "TEXT" && Math.abs(m[0][0]) < 1e-6) { const w = this.width, h = this.height; this.x = m[0][2]; this.y = m[1][2] - w; this.width = h; this.height = w; } }, get() { return this._rt; } });
let warnings_global = [];
const slides = {};
for (let i = 1; i <= 11; i++) { const s = new Node("SLIDE"); s.id = "S" + i; s.name = "S" + i; s.width = 1920; s.height = 1080; slides["S" + i] = s; }
global.figma = {
  createFrame: () => new Node("FRAME"), createRectangle: () => new Node("RECTANGLE"), createEllipse: () => new Node("ELLIPSE"),
  createVector: () => new Node("VECTOR"), createText: () => new TextNode(),
  loadFontAsync: async () => {}, getNodeByIdAsync: async id => slides[id], mixed: Symbol("mixed"),
  listAvailableFontsAsync: async () => [],
};
const code = CODE_JSON;
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
      const exempt = t.characters.startsWith("Source:") || /BIBLIO|FINEPRINT/.test(t.name || "") || /LOGO:|IMG:/.test((t.parent && t.parent.name) || "");
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
