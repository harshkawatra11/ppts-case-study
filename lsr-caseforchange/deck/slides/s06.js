{ const s = await figma.getNodeByIdAsync("S6"); const D = V.s6;
hdr(s, 6, D.finding, D.source);
const a1 = panel(s, 64, 224, 660, 350, D.t1);
const FC = [C.primary, C.rival, C.good, C.alert, C.accent, C.primaryDeep];
waterfall(a1, 16, 56, 628, 262, D.flow.map((f, i) => Object.assign({}, f, { color: FC[i] })), { max: 2750, min: 0, labelH: 60, barW: 72 });
const a2 = panel(s, 740, 224, 600, 350, "THE ROLE MIX AT MONTH 12");
const RC = [C.tint, C.rival, C.good, C.orange, C.primaryDeep, C.primary, C.surface];
hBars(a2, 16, 58, 568, D.roles.map((r, i) => ({ label: r.label, value: r.value, text: String(r.value), color: RC[i] })), { labelW: 300, rowH: 40, barH: 26, valueW: 80, max: 520 });
const a3 = panel(s, 1356, 224, 500, 350, "THE PEOPLE PROMISE, IN ₹ CR");
addTable(a3, 16, 60, [372, 96], ["Commitment", "₹ Cr"], D.promise, { headerH: 38, rowH: 40, name: "TABLE: promise", rowFills: [null, null, null, null, C.amberTint, C.goodTint] });
const b1 = panel(s, 64, 588, 900, 366, "SIX RISKS, EACH WITH ONE MITIGATION");
addTable(b1, 16, 62, [330, 50, 50, 438], ["Risk", "P", "I", "Mitigation"], D.risks, { headerH: 38, rowH: 38, name: "TABLE: risks", align: ["LEFT", "CENTER", "CENTER", "LEFT"], boldCols: [1, 2],
  cellColor: (r, c) => (c === 1 || c === 2) ? (D.risks[r][c] === "H" ? C.alert : (D.risks[r][c] === "M" ? C.orange : C.good)) : C.ink });
fine(b1, 16, 336, 868, "P: probability. I: impact. H: high. M: medium. L: low.");
const b2 = panel(s, 980, 588, 876, 366, "LOWEST CASH IF TWO ASSUMPTIONS MOVE TOGETHER (₹ CR)");
heatmap(b2, 16, 60, D.grid_rows, D.grid_cols, D.grid, { labelW: 250, colW: 118, rowH: 42, headH: 44, scale: HR, levels: v => v < 15 ? 4 : (v < 17 ? 3 : (v < 19 ? 2 : (v < 21 ? 1 : 0))), corner: "Price, volume", fmt: v => v.toFixed(1), name: "TABLE: grid" });
fine(b2, 16, 322, 844, "Rows: price of a hard file. Columns: monthly change in clean-file volume. Under ₹15 Cr breaches the loan covenant.");
soWhat(s, 966, 64, [[D.sowhat, "W"]]);
results.push({ slide: s.id, total: s.findAll(() => true).length, top: s.children.length }); }
