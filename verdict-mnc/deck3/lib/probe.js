await Promise.all([{family:"Poppins",style:"Bold"},{family:"Poppins",style:"ExtraBold"},{family:"Inter",style:"Semi Bold"},{family:"Inter",style:"Bold"}].map(f=>figma.loadFontAsync(f)));
const S=["30.0%","32.2%","−₹4,719","₹17,915","₹8,333","2.70x","MONTH 21","Retention","Overheads","Conversion","Referral","Win-back","Ready to eat","Gross margin","Year-end cash","Month-3 retention, new","Too expensive","Rigid to skip","over 6% for 2 months","DIAGNOSIS","RECOMMENDATION","90 DAYS AND KPIs","Growth (20%)","Ours"];
const F=[["Inter","Semi Bold",22],["Inter","Bold",22],["Poppins","Bold",22],["Poppins","Bold",24],["Poppins","ExtraBold",36]];
const host=await figma.getNodeByIdAsync("__HOST__"); const tmp=figma.createFrame(); host.appendChild(tmp); const out=[];
for(const f of F) for(const s of S){ const t=figma.createText(); tmp.appendChild(t); t.fontName={family:f[0],style:f[1]}; t.fontSize=f[2]; t.characters=s; out.push([f[0]+"|"+f[1],f[2],s,Math.round(t.width*10)/10]); }
tmp.remove(); return out;
