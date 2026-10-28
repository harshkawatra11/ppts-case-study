# Copy review -- SwasthyaGrid NEXORA deck (10 slides, 674 text nodes)

Source: `python deck/gen.py dump` -> `deck/dump.js`, executed read-only against fileKey O0YlsAbRsIqQqSugUDWrxJ.

Automated scan for: em/en dashes, questions/exclamations, banned-word list (plan SS10/11.15), D3 vendor/cloud/model/engineering vocabulary, D7 live-deployment claims. Followed by a manual pass for honesty/voice/analytical-sentence quality on every line, not just the automated flags.

Result: 674 lines reviewed, 1 automated flag, resolved on manual review as a false positive (line 71: "database" names a policy option in the problem/obvious-fix table, not an engineering or vendor term -- D3 bans vendor/cloud/model/engineering NAMES, not the generic word in a policy-critique sentence). No deployment-claim violations found: every forward-looking "live"/"go live" instance (S2, S5, S8) sits inside an explicit future-tense roadmap (week numbers, month ranges, horizon labels) and every present-tense capability claim is paired with "prototype" + "simulated data" (S1, S4, S8). 0 replacements required. Final count: 674 PASS, 0 changed.

1. S1 [Frame] "NEXORA · STARTUP AND INNOVATION PITCH" -- PASS
2. S1 [Frame] "SATYAWATI COLLEGE, UNIVERSITY OF DELHI" -- PASS
3. S1 [Frame] "TEAM IDEAFORGE" -- PASS
4. S1 [1] "SWASTHYAGRID" -- PASS
5. S1 [1] "Move the medicine, beds and staff a district already owns to the facility about to run short" -- PASS
6. S1 [CARD: verdict] "Our verdict: before India hires or buys more, it should move what each district already owns. One officer, one screen, every transfer signed off." -- PASS
7. S1 [CARD: verdict] "Base case at national scale: an estimated 1.36 crore stock-out days avoided a year. A working prototype runs today on simulated data." -- PASS
8. S1 [1] "TEAM IDEAFORGE" -- PASS
9. S1 [HEAD] "Team Member" -- PASS
10. S1 [HEAD] "Institution" -- PASS
11. S1 [HEAD] "Role" -- PASS
12. S1 [ROW] "Harsh Kawatra" -- PASS
13. S1 [ROW] "Delhi Technological University" -- PASS
14. S1 [ROW] "Founder" -- PASS
15. S1 [1] "Contact: harshkawatra11@gmail.com  |  +91 98992 20294" -- PASS
16. S1 [PANEL: ONE DISTRICT VIEW, EIGHT ACTORS IT CONNECTS] "ONE DISTRICT VIEW, EIGHT ACTORS IT CONNECTS" -- PASS
17. S1 [PANEL: ONE DISTRICT VIEW, EIGHT ACTORS IT CONNECTS] "ONE DISTRICT VIEW" -- PASS
18. S1 [LOGO: National Health Mission] "National Health Mission logo" -- PASS
19. S1 [NODE actor] "State NHM" -- PASS
20. S1 [NODE actor] "buys the licence" -- PASS
21. S1 [LOGO: MoHFW] "MoHFW logo" -- PASS
22. S1 [NODE actor] "District officer" -- PASS
23. S1 [NODE actor] "approves moves" -- PASS
24. S1 [LOGO: Ayushman Bharat] "Ayushman Bharat logo" -- PASS
25. S1 [NODE actor] "PHCs and CHCs" -- PASS
26. S1 [NODE actor] "38,241 facilities" -- PASS
27. S1 [NODE actor] "e-Aushadhi" -- PASS
28. S1 [NODE actor] "the ledger we read" -- PASS
29. S1 [NODE actor] "eVIN precedent" -- PASS
30. S1 [NODE actor] "cut stock-outs 80%" -- PASS
31. S1 [LOGO: National Health Authority] "National Health Authority logo" -- PASS
32. S1 [NODE actor] "ABDM rail" -- PASS
33. S1 [NODE actor] "95.99 Cr ABHA IDs" -- PASS
34. S1 [LOGO: NITI Aayog] "NITI Aayog logo" -- PASS
35. S1 [NODE actor] "NITI Aayog" -- PASS
36. S1 [NODE actor] "112 districts" -- PASS
37. S1 [LOGO: Government of Rajasthan] "Government of Rajasthan logo" -- PASS
38. S1 [NODE actor] "Rajasthan" -- PASS
39. S1 [NODE actor] "beachhead state" -- PASS
40. S1 [PANEL: ONE DISTRICT VIEW, EIGHT ACTORS IT CONNECTS] "Logos mark the public bodies and systems we build around; no partnership is implied" -- PASS
41. S1 [1] "Source: MoHFW HDI 2022-23 | PIB, ABHA IDs (Jul 2026) | UNDP eVIN | NITI Aayog ADP | Team IdeaForge impact model" -- PASS
42. S2 [2] "SUMMARY" -- PASS
43. S2 [2] "PROBLEM" -- PASS
44. S2 [2] "SOLUTION" -- PASS
45. S2 [2] "MARKET" -- PASS
46. S2 [2] "INNOVATION" -- PASS
47. S2 [2] "SUSTAINABILITY" -- PASS
48. S2 [2] "FEASIBILITY" -- PASS
49. S2 [2] "IMPACT" -- PASS
50. S2 [Frame] "EXECUTIVE SUMMARY" -- PASS
51. S2 [Frame] "1 / 8" -- PASS
52. S2 [2] "Districts run short and write off expired medicine at the same time; SwasthyaGrid moves what a district already owns and avoids an estimated 1.36 crore stock-out days a year" -- PASS
53. S2 [2] "Source: PMC8654139 | CAG Telangana (Aug 2024) | CAG Odisha (Oct 2026) | MoHFW HDI 2022-23 | Constitution, Seventh Schedule | PRS DfG 2025-26 | Team IdeaForge model" -- PASS
54. S2 [Frame] "THE IDEA ON ONE PAGE" -- PASS
55. S2 [PANEL: SHORT AND WASTED AT ONCE] "SHORT AND WASTED AT ONCE" -- PASS
56. S2 [PANEL: SHORT AND WASTED AT ONCE] "66 to 80%" -- PASS
57. S2 [PANEL: SHORT AND WASTED AT ONCE] "of key medicines in stock at PHCs studied" -- PASS
58. S2 [PANEL: SHORT AND WASTED AT ONCE] "₹390.26 Cr" -- PASS
59. S2 [PANEL: SHORT AND WASTED AT ONCE] "expired drugs, Telangana, 2016-22" -- PASS
60. S2 [PANEL: SHORT AND WASTED AT ONCE] "₹168 Cr" -- PASS
61. S2 [PANEL: SHORT AND WASTED AT ONCE] "expired drugs, Odisha, 2019-25" -- PASS
62. S2 [PANEL: SHORT AND WASTED AT ONCE] "79.9%" -- PASS
63. S2 [PANEL: SHORT AND WASTED AT ONCE] "CHC specialist posts unfilled" -- PASS
64. S2 [PANEL: WHY THE OBVIOUS FIXES STALL] "WHY THE OBVIOUS FIXES STALL" -- PASS
65. S2 [Frame] "Obvious fix" -- PASS
66. S2 [Frame] "Why it stalls" -- PASS
67. S2 [Frame] "Hire more doctors" -- PASS
68. S2 [Frame] "79.9% of CHC specialist posts already sit empty" -- PASS
69. S2 [Frame] "Buy more medicine" -- PASS
70. S2 [Frame] "Surplus already expires in state stores" -- PASS
71. S2 [Frame] "One national database" -- PASS (automated flag on "database" resolved: this is the policy option being argued against in the obvious-fix table, not a vendor/cloud/engineering reference; D3 bans named engineering/vendor terms, not this usage)
72. S2 [Frame] "Health is a State subject; states own the data" -- PASS
73. S2 [Frame] "Another dashboard" -- PASS
74. S2 [Frame] "Officers still phone around to find surplus" -- PASS
75. S2 [CARD: our answer] "OUR ANSWER: MOVE BEFORE YOU BUY" -- PASS
76. S2 [CARD: our answer] "1" -- PASS
77. S2 [CARD: our answer] "See every shelf, bed and roster in the district, every morning" -- PASS
78. S2 [CARD: our answer] "2" -- PASS
79. S2 [CARD: our answer] "Propose the transfer from the nearest surplus before a stock-out" -- PASS
80. S2 [CARD: our answer] "3" -- PASS
81. S2 [CARD: our answer] "A named officer approves each move; nothing ships without sign-off" -- PASS
82. S2 [PANEL: SEVEN THINGS NEXORA ASKS, ANSWERED] "SEVEN THINGS NEXORA ASKS, ANSWERED" -- PASS
83. S2 [Frame] "NEXORA asks" -- PASS
84. S2 [Frame] "Our answer in one line" -- PASS
85. S2 [Frame] "Page" -- PASS
86. S2 [Frame] "Problem" -- PASS
87. S2 [Frame] "Stock-outs and expiry share a cause: no district view" -- PASS
88. S2 [Frame] "3" -- PASS
89. S2 [Frame] "Solution" -- PASS
90. S2 [Frame] "Daily district view, ranked transfers, officer approval" -- PASS
91. S2 [Frame] "4" -- PASS
92. S2 [Frame] "Target market" -- PASS
93. S2 [Frame] "State health departments; 780 districts; ₹93.6 Cr a year" -- PASS
94. S2 [Frame] "5" -- PASS
95. S2 [Frame] "Innovation" -- PASS
96. S2 [Frame] "Rebalance existing stock before procuring new stock" -- PASS
97. S2 [Frame] "6" -- PASS
98. S2 [Frame] "Sustainability" -- PASS
99. S2 [Frame] "71% gross margin; less medicine expiring" -- PASS
100. S2 [Frame] "7" -- PASS
101. S2 [Frame] "Feasibility" -- PASS
102. S2 [Frame] "Six weeks from MoU to a live district" -- PASS
103. S2 [Frame] "8" -- PASS
104. S2 [Frame] "Impact" -- PASS
105. S2 [Frame] "1.36 crore stock-out days avoided a year" -- PASS
106. S2 [Frame] "9" -- PASS
107. S2 [CARD: payoff] "WHAT ONE DISTRICT VIEW BUYS" -- PASS
108. S2 [KPI TILE] "1.36 Cr" -- PASS
109. S2 [KPI TILE] "stock-out days avoided a year (base)" -- PASS
110. S2 [KPI TILE] "₹12 L" -- PASS
111. S2 [KPI TILE] "a year per district, 0.25% of its NHM share" -- PASS
112. S2 [KPI TILE] "6 weeks" -- PASS
113. S2 [KPI TILE] "from MoU to a live district" -- PASS
114. S2 [CARD: payoff] "Bear case 81.5 lakh days; bull 2.17 crore. Estimates from a stated model." -- PASS
115. S3 [3] "SUMMARY" -- PASS
116. S3 [3] "PROBLEM" -- PASS
117. S3 [3] "SOLUTION" -- PASS
118. S3 [3] "MARKET" -- PASS
119. S3 [3] "INNOVATION" -- PASS
120. S3 [3] "SUSTAINABILITY" -- PASS
121. S3 [3] "FEASIBILITY" -- PASS
122. S3 [3] "IMPACT" -- PASS
123. S3 [Frame] "THE PROBLEM" -- PASS
124. S3 [Frame] "2 / 8" -- PASS
125. S3 [3] "A third of key medicines can be missing from a PHC shelf on any day while warehouses write off crores in expired stock: nobody sees the district's supply as one" -- PASS
126. S3 [3] "Source: PMC8654139 | PMC10292169 | PMC11174260 | eLife 2020 | WHO rabies | SRS 2019-21 | CAG Telangana (Aug 2024) | CAG Odisha (Oct 2026) | MoHFW HDI 2022-23 | NHA 2022-23" -- PASS
127. S3 [Frame] "NEXORA ASKS: PROBLEM" -- PASS
128. S3 [PANEL: AVAILABILITY TOPS OUT AT 80%] "AVAILABILITY TOPS OUT AT 80%" -- PASS
129. S3 [PANEL: AVAILABILITY TOPS OUT AT 80%] "66%" -- PASS
130. S3 [PANEL: AVAILABILITY TOPS OUT AT 80%] "Low" -- PASS
131. S3 [PANEL: AVAILABILITY TOPS OUT AT 80%] "72.2%" -- PASS
132. S3 [PANEL: AVAILABILITY TOPS OUT AT 80%] "State" -- PASS
133. S3 [PANEL: AVAILABILITY TOPS OUT AT 80%] "74.2%" -- PASS
134. S3 [PANEL: AVAILABILITY TOPS OUT AT 80%] "Gadag" -- PASS
135. S3 [PANEL: AVAILABILITY TOPS OUT AT 80%] "77%" -- PASS
136. S3 [PANEL: AVAILABILITY TOPS OUT AT 80%] "Central" -- PASS
137. S3 [PANEL: AVAILABILITY TOPS OUT AT 80%] "80%" -- PASS
138. S3 [PANEL: AVAILABILITY TOPS OUT AT 80%] "High" -- PASS
139. S3 [PANEL: AVAILABILITY TOPS OUT AT 80%] "Key-medicine availability, by study" -- PASS
140. S3 [CARD: missing drug] "THE MISSING DRUG DECIDES" -- PASS
141. S3 [CARD: missing drug] "Antivenom (ASV)" -- PASS
142. S3 [CARD: missing drug] "58,000 snakebite deaths a year" -- PASS
143. S3 [CARD: missing drug] "Anti-rabies vaccine" -- PASS
144. S3 [CARD: missing drug] "18,000 to 20,000 rabies deaths" -- PASS
145. S3 [CARD: missing drug] "Oxytocin" -- PASS
146. S3 [CARD: missing drug] "MMR 93; haemorrhage leads" -- PASS
147. S3 [CARD: missing drug] "ORS, paracetamol" -- PASS
148. S3 [CARD: missing drug] "Dengue signal: 4 to 6 weeks ahead" -- PASS
149. S3 [PANEL: ₹558 CR EXPIRED IN TWO STATES' STORES] "₹558 CR EXPIRED IN TWO STATES' STORES" -- PASS
150. S3 [Frame] "State" -- PASS
151. S3 [Frame] "Expired, audited" -- PASS
152. S3 [Frame] "A year, per district" -- PASS
153. S3 [Frame] "Telangana" -- PASS
154. S3 [Frame] "₹390.26 Cr, 2016-22" -- PASS
155. S3 [Frame] "₹1.97 Cr" -- PASS
156. S3 [Frame] "Odisha" -- PASS
157. S3 [Frame] "₹168 Cr, 2019-25" -- PASS
158. S3 [Frame] "₹0.96 Cr" -- PASS
159. S3 [PANEL: ₹558 CR EXPIRED IN TWO STATES' STORES] "Telangana also issued ₹17.13 Cr of drugs with 1 to 89 days of shelf life left" -- PASS
160. S3 [PANEL: ₹558 CR EXPIRED IN TWO STATES' STORES] "Per district: audited total ÷ years ÷ districts" -- PASS
161. S3 [PANEL: WHY THE SHELF EMPTIES: FIVE WHYS, ONE ROOT] "WHY THE SHELF EMPTIES: FIVE WHYS, ONE ROOT" -- PASS
162. S3 [NODE root] "ROOT CAUSE" -- PASS
163. S3 [NODE root] "Stock is recorded but never seen district-wide" -- PASS
164. S3 [NODE why] "Seen late: HMIS reports monthly, after the shelf empties" -- PASS
165. S3 [NODE why] "No forecast: nobody computes burn rates or surges" -- PASS
166. S3 [NODE why] "Not moved: a nearby PHC holds surplus nobody sees" -- PASS
167. S3 [NODE why] "Not rotated: near-expiry stock is not sent to busier PHCs" -- PASS
168. S3 [NODE why] "No hands: 79.9% of CHC specialist posts are empty" -- PASS
169. S3 [PANEL: WHY THE SHELF EMPTIES: FIVE WHYS, ONE ROOT] "Haryana: 60% of essential medicines were out of stock for 3 to 6 months at a time" -- PASS
170. S3 [PANEL: HOUSEHOLDS PAY 43.4% OF THE BILL] "HOUSEHOLDS PAY 43.4% OF THE BILL" -- PASS
171. S3 [PANEL: HOUSEHOLDS PAY 43.4% OF THE BILL] "43.4%" -- PASS
172. S3 [PANEL: HOUSEHOLDS PAY 43.4% OF THE BILL] "Out-of-pocket share of total health spending, 2022-23" -- PASS
173. S3 [PANEL: HOUSEHOLDS PAY 43.4% OF THE BILL] "Medicines are 30.84% of current health spending (2021-22)" -- PASS
174. S3 [PANEL: HOUSEHOLDS PAY 43.4% OF THE BILL] "An empty PHC shelf sends the family to a private chemist" -- PASS
175. S4 [4] "SUMMARY" -- PASS
176. S4 [4] "PROBLEM" -- PASS
177. S4 [4] "SOLUTION" -- PASS
178. S4 [4] "MARKET" -- PASS
179. S4 [4] "INNOVATION" -- PASS
180. S4 [4] "SUSTAINABILITY" -- PASS
181. S4 [4] "FEASIBILITY" -- PASS
182. S4 [4] "IMPACT" -- PASS
183. S4 [Frame] "THE SOLUTION" -- PASS
184. S4 [Frame] "3 / 8" -- PASS
185. S4 [4] "SwasthyaGrid gives each district one morning view of every shelf, bed and roster, proposes the nearest transfer, and a named officer approves it before anything moves" -- PASS
186. S4 [4] "Source: SwasthyaGrid product design | SwasthyaGrid prototype run log, PHC Kota-4 (simulated operations) | Team IdeaForge" -- PASS
187. S4 [Frame] "NEXORA ASKS: SOLUTION" -- PASS
188. S4 [PANEL: FIVE STEPS, ONE LOOP, A HUMAN AT STEP FOUR] "FIVE STEPS, ONE LOOP, A HUMAN AT STEP FOUR" -- PASS
189. S4 [NODE step] "1" -- PASS
190. S4 [NODE step] "REPORT" -- PASS
191. S4 [NODE step] "Facilities send stock, beds and staff once a day" -- PASS
192. S4 [NODE step] "2" -- PASS
193. S4 [NODE step] "WARN" -- PASS
194. S4 [NODE step] "Flags any item under 3 days of cover" -- PASS
195. S4 [NODE step] "3" -- PASS
196. S4 [NODE step] "PROPOSE" -- PASS
197. S4 [NODE step] "Ranks the nearest surplus and sizes the move" -- PASS
198. S4 [NODE step] "4" -- PASS
199. S4 [NODE step] "APPROVE" -- PASS
200. S4 [NODE step] "A named officer approves, edits or rejects" -- PASS
201. S4 [NODE step] "5" -- PASS
202. S4 [NODE step] "CONFIRM" -- PASS
203. S4 [NODE step] "The receiving PHC confirms; the view updates" -- PASS
204. S4 [PANEL: FIVE STEPS, ONE LOOP, A HUMAN AT STEP FOUR] "Every confirmed delivery feeds the next morning's view" -- PASS
205. S4 [PANEL: WHAT THE OFFICER SEES EACH MORNING] "WHAT THE OFFICER SEES EACH MORNING" -- PASS
206. S4 [MOCKUP bar] "District view: Kota, 7 Oct" -- PASS
207. S4 [MOCKUP alert] "PHC Kota-4: ARV, 1.2 days" -- PASS
208. S4 [MOCKUP proposal] "Move 119 vials, DDW Kota" -- PASS
209. S4 [MOCKUP button] "APPROVE" -- PASS
210. S4 [MOCKUP button] "EDIT" -- PASS
211. S4 [MOCKUP button] "REJECT" -- PASS
212. S4 [PANEL: BEFORE AND AFTER, FOR THE DISTRICT OFFICER] "BEFORE AND AFTER, FOR THE DISTRICT OFFICER" -- PASS
213. S4 [Frame] "Task" -- PASS
214. S4 [Frame] "Today" -- PASS
215. S4 [Frame] "With SwasthyaGrid" -- PASS
216. S4 [Frame] "Spot a shortage" -- PASS
217. S4 [Frame] "After a patient is turned away" -- PASS
218. S4 [Frame] "Same morning, before stock-out" -- PASS
219. S4 [Frame] "Find surplus" -- PASS
220. S4 [Frame] "Phone calls to nearby PHCs" -- PASS
221. S4 [Frame] "Ranked list on one screen" -- PASS
222. S4 [Frame] "Use near-expiry stock" -- PASS
223. S4 [Frame] "Expires in the store" -- PASS
224. S4 [Frame] "Sent first to the busier PHC" -- PASS
225. S4 [Frame] "Audit a decision" -- PASS
226. S4 [Frame] "Not recorded" -- PASS
227. S4 [Frame] "Every approval logged" -- PASS
228. S4 [PANEL: BEFORE AND AFTER, FOR THE DISTRICT OFFICER] "Design targets; the pilot measures them" -- PASS
229. S4 [PANEL: FOUR KINDS OF MOVE] "FOUR KINDS OF MOVE" -- PASS
230. S4 [PANEL: FOUR KINDS OF MOVE] "Stock transfer" -- PASS
231. S4 [PANEL: FOUR KINDS OF MOVE] "from a surplus PHC or warehouse" -- PASS
232. S4 [PANEL: FOUR KINDS OF MOVE] "Bed redirect" -- PASS
233. S4 [PANEL: FOUR KINDS OF MOVE] "to a facility under 90% full" -- PASS
234. S4 [PANEL: FOUR KINDS OF MOVE] "Staff transfer" -- PASS
235. S4 [PANEL: FOUR KINDS OF MOVE] "a doctor covers a short CHC" -- PASS
236. S4 [PANEL: FOUR KINDS OF MOVE] "Diagnostic redirect" -- PASS
237. S4 [PANEL: FOUR KINDS OF MOVE] "to the nearest working lab" -- PASS
238. S4 [PANEL: FOUR KINDS OF MOVE] "Each move carries a quantity and a reason" -- PASS
239. S4 [CARD: proof] "ONE APPROVAL, ONE RESCUE" -- PASS
240. S4 [CARD: proof] "1.2 → 21.0 days" -- PASS
241. S4 [CARD: proof] "ARV cover at PHC Kota-4 before and after one approved shipment" -- PASS
242. S4 [CARD: proof] "1" -- PASS
243. S4 [CARD: proof] "7 vials on shelf: critical" -- PASS
244. S4 [CARD: proof] "2" -- PASS
245. S4 [CARD: proof] "119 vials sent from DDW Kota" -- PASS
246. S4 [CARD: proof] "3" -- PASS
247. S4 [CARD: proof] "126 vials confirmed on receipt" -- PASS
248. S4 [CARD: proof] "Prototype run on simulated data" -- PASS
249. S5 [5] "SUMMARY" -- PASS
250. S5 [5] "PROBLEM" -- PASS
251. S5 [5] "SOLUTION" -- PASS
252. S5 [5] "MARKET" -- PASS
253. S5 [5] "INNOVATION" -- PASS
254. S5 [5] "SUSTAINABILITY" -- PASS
255. S5 [5] "FEASIBILITY" -- PASS
256. S5 [5] "IMPACT" -- PASS
257. S5 [Frame] "TARGET MARKET" -- PASS
258. S5 [Frame] "4 / 8" -- PASS
259. S5 [5] "State health departments buy for about 780 districts, a ₹93.6 Cr a year licence pool; we enter through 112 aspirational districts worth ₹13.4 Cr and a Rajasthan beachhead" -- PASS
260. S5 [5] "Source: LGD district count (2025) | NITI Aayog ADP list and indicators | PIB, ABHA IDs (Jul 2026) | PRS DfG 2025-26 | C-DAC e-Aushadhi | Indian HMIS and EHR vendor pricing (team scan, 2026) | Team IdeaForge model" -- PASS
261. S5 [Frame] "NEXORA ASKS: TARGET MARKET" -- PASS
262. S5 [PANEL: ₹93.6 CR A YEAR, SIZED DISTRICT BY DISTRICT] "₹93.6 CR A YEAR, SIZED DISTRICT BY DISTRICT" -- PASS
263. S5 [PANEL: ₹93.6 CR A YEAR, SIZED DISTRICT BY DISTRICT] "TAM: 780" -- PASS
264. S5 [PANEL: ₹93.6 CR A YEAR, SIZED DISTRICT BY DISTRICT] "₹93.6 Cr" -- PASS
265. S5 [PANEL: ₹93.6 CR A YEAR, SIZED DISTRICT BY DISTRICT] "SAM: 112" -- PASS
266. S5 [PANEL: ₹93.6 CR A YEAR, SIZED DISTRICT BY DISTRICT] "₹13.4 Cr" -- PASS
267. S5 [PANEL: ₹93.6 CR A YEAR, SIZED DISTRICT BY DISTRICT] "SOM, Y3: 80" -- PASS
268. S5 [PANEL: ₹93.6 CR A YEAR, SIZED DISTRICT BY DISTRICT] "₹9.6 Cr" -- PASS
269. S5 [PANEL: ₹93.6 CR A YEAR, SIZED DISTRICT BY DISTRICT] "Rajasthan: 41" -- PASS
270. S5 [PANEL: ₹93.6 CR A YEAR, SIZED DISTRICT BY DISTRICT] "₹4.9 Cr" -- PASS
271. S5 [Frame] "Tier" -- PASS
272. S5 [Frame] "Basis (₹12 L each)" -- PASS
273. S5 [Frame] "₹ a year" -- PASS
274. S5 [Frame] "TAM" -- PASS
275. S5 [Frame] "All ~780 districts in India" -- PASS
276. S5 [Frame] "₹93.6 Cr" -- PASS
277. S5 [Frame] "SAM" -- PASS
278. S5 [Frame] "112 aspirational districts (NITI)" -- PASS
279. S5 [Frame] "₹13.4 Cr" -- PASS
280. S5 [Frame] "SOM" -- PASS
281. S5 [Frame] "80 districts licensed by Year 3" -- PASS
282. S5 [Frame] "₹9.6 Cr" -- PASS
283. S5 [PANEL: WHO SIGNS, WHO USES IT DAILY] "WHO SIGNS, WHO USES IT DAILY" -- PASS
284. S5 [PILL] "SIGNS" -- PASS
285. S5 [NODE buyer] "State NHM (buyer)" -- PASS
286. S5 [NODE buyer] "annual licence, ₹12 L" -- PASS
287. S5 [PILL] "CHAMPIONS" -- PASS
288. S5 [NODE buyer] "District Collector" -- PASS
289. S5 [NODE buyer] "health is 30% of ADP score" -- PASS
290. S5 [PILL] "USES DAILY" -- PASS
291. S5 [NODE buyer] "District officer (DHO)" -- PASS
292. S5 [NODE buyer] "approves every move" -- PASS
293. S5 [PILL] "REPORTS" -- PASS
294. S5 [NODE buyer] "PHC pharmacist, MO" -- PASS
295. S5 [NODE buyer] "stock and receipts" -- PASS
296. S5 [PANEL: PRICED INSIDE THE INDIAN BAND] "PRICED INSIDE THE INDIAN BAND" -- PASS
297. S5 [PANEL: PRICED INSIDE THE INDIAN BAND] "₹12 L ACV" -- PASS
298. S5 [PANEL: PRICED INSIDE THE INDIAN BAND] "₹3 L" -- PASS
299. S5 [PANEL: PRICED INSIDE THE INDIAN BAND] "₹25 L" -- PASS
300. S5 [Frame] "Comparable" -- PASS
301. S5 [Frame] "₹ a year" -- PASS
302. S5 [Frame] "HMIS, entry level" -- PASS
303. S5 [Frame] "₹3 L" -- PASS
304. S5 [Frame] "SwasthyaGrid" -- PASS
305. S5 [Frame] "₹12 L" -- PASS
306. S5 [Frame] "EHR, upper end" -- PASS
307. S5 [Frame] "₹25 L" -- PASS
308. S5 [PANEL: PRICED INSIDE THE INDIAN BAND] "0.25% of a district's central NHM share" -- PASS
309. S5 [PANEL: WHY NOW: THE RAILS ALREADY EXIST] "WHY NOW: THE RAILS ALREADY EXIST" -- PASS
310. S5 [PANEL: WHY NOW: THE RAILS ALREADY EXIST] "95.99 Cr" -- PASS
311. S5 [PANEL: WHY NOW: THE RAILS ALREADY EXIST] "ABHA IDs created by 31 Jul 2026" -- PASS
312. S5 [PANEL: WHY NOW: THE RAILS ALREADY EXIST] "₹37,227 Cr" -- PASS
313. S5 [PANEL: WHY NOW: THE RAILS ALREADY EXIST] "Union NHM budget, 2025-26" -- PASS
314. S5 [PANEL: WHY NOW: THE RAILS ALREADY EXIST] "31" -- PASS
315. S5 [PANEL: WHY NOW: THE RAILS ALREADY EXIST] "States and UTs on the e-Aushadhi dashboard" -- PASS
316. S5 [PANEL: WHY NOW: THE RAILS ALREADY EXIST] "The buyer already has the budget line and the data feed" -- PASS
317. S5 [PANEL: BEACHHEAD: RAJASTHAN, WHERE THE PROTOTYPE IS SET] "BEACHHEAD: RAJASTHAN, WHERE THE PROTOTYPE IS SET" -- PASS
318. S5 [Frame] "0 to 6 months" -- PASS
319. S5 [NODE wedge] "Pilot" -- PASS
320. S5 [NODE wedge] "2 districts live by week 6" -- PASS
321. S5 [Frame] "6 to 18 months" -- PASS
322. S5 [NODE wedge] "Rajasthan" -- PASS
323. S5 [NODE wedge] "41 districts, 5 of them aspirational" -- PASS
324. S5 [Frame] "18 to 36 months" -- PASS
325. S5 [NODE wedge] "Aspirational" -- PASS
326. S5 [NODE wedge] "112 districts on NITI's 49-indicator score" -- PASS
327. S6 [6] "SUMMARY" -- PASS
328. S6 [6] "PROBLEM" -- PASS
329. S6 [6] "SOLUTION" -- PASS
330. S6 [6] "MARKET" -- PASS
331. S6 [6] "INNOVATION" -- PASS
332. S6 [6] "SUSTAINABILITY" -- PASS
333. S6 [6] "FEASIBILITY" -- PASS
334. S6 [6] "IMPACT" -- PASS
335. S6 [Frame] "INNOVATION" -- PASS
336. S6 [Frame] "5 / 8" -- PASS
337. S6 [6] "Five public systems record India's health supply and none of them moves it; SwasthyaGrid adds the missing layer that rebalances stock across a district with a human sign-off" -- PASS
338. S6 [6] "Source: HMIS, data.gov.in | C-DAC e-Aushadhi | UNDP India eVIN | IHIP and IDSP | ABDM Health Facility Registry | Kim and Mauborgne, Blue Ocean Strategy | Helmer, 7 Powers | Team IdeaForge assessment" -- PASS
339. S6 [Frame] "NEXORA ASKS: INNOVATION" -- PASS
340. S6 [PANEL: FIVE SYSTEMS RECORD, NONE REBALANCES] "FIVE SYSTEMS RECORD, NONE REBALANCES" -- PASS
341. S6 [HEAD] "System" -- PASS
342. S6 [HEAD] "Record" -- PASS
343. S6 [HEAD] "Daily" -- PASS
344. S6 [HEAD] "Warn" -- PASS
345. S6 [HEAD] "Rebalance" -- PASS
346. S6 [HEAD] "Approve" -- PASS
347. S6 [HEAD] "District" -- PASS
348. S6 [ROWLABEL] "HMIS" -- PASS
349. S6 [ROWLABEL] "e-Aushadhi" -- PASS
350. S6 [ROWLABEL] "eVIN (vaccines)" -- PASS
351. S6 [ROWLABEL] "IHIP / IDSP" -- PASS
352. S6 [ROWLABEL] "ABDM registry" -- PASS
353. S6 [ROWLABEL] "SwasthyaGrid" -- PASS
354. S6 [PANEL: FIVE SYSTEMS RECORD, NONE REBALANCES] "Team assessment of public documents; eVIN covers vaccines only" -- PASS
355. S6 [CARD: precedent] "THE PRECEDENT: EVIN CUT STOCK-OUTS 80%" -- PASS
356. S6 [CARD: precedent] "80%" -- PASS
357. S6 [CARD: precedent] "fewer vaccine stock-outs; restock time more than halved" -- PASS
358. S6 [CARD: precedent] "29,000+" -- PASS
359. S6 [CARD: precedent] "cold chain points live across 733 districts" -- PASS
360. S6 [CARD: precedent] "12 → 36" -- PASS
361. S6 [CARD: precedent] "States and UTs, from the 2015 launch to all" -- PASS
362. S6 [CARD: precedent] "Same idea, now for medicines, beds and staff" -- PASS
363. S6 [PANEL: WHAT WE REMOVE, CUT, RAISE AND ADD] "WHAT WE REMOVE, CUT, RAISE AND ADD" -- PASS
364. S6 [NODE errc] "ELIMINATE" -- PASS
365. S6 [NODE errc] "Rip-and-replace of state systems" -- PASS
366. S6 [NODE errc] "REDUCE" -- PASS
367. S6 [NODE errc] "Phone calls to hunt for surplus" -- PASS
368. S6 [NODE errc] "RAISE" -- PASS
369. S6 [NODE errc] "Days of warning before a stock-out" -- PASS
370. S6 [NODE errc] "CREATE" -- PASS
371. S6 [NODE errc] "Ranked moves, signed by an officer" -- PASS
372. S6 [PANEL: WHY IT GETS HARDER TO COPY EACH MONTH] "WHY IT GETS HARDER TO COPY EACH MONTH" -- PASS
373. S6 [PANEL: WHY IT GETS HARDER TO COPY EACH MONTH] "Switching cost" -- PASS
374. S6 [PANEL: WHY IT GETS HARDER TO COPY EACH MONTH] "routines and approval history build up in the tool" -- PASS
375. S6 [PANEL: WHY IT GETS HARDER TO COPY EACH MONTH] "Process power" -- PASS
376. S6 [PANEL: WHY IT GETS HARDER TO COPY EACH MONTH] "transfer rules tuned to each district's roads" -- PASS
377. S6 [PANEL: WHY IT GETS HARDER TO COPY EACH MONTH] "Counter-position" -- PASS
378. S6 [PANEL: WHY IT GETS HARDER TO COPY EACH MONTH] "ledger vendors sell records; we sell decisions" -- PASS
379. S6 [CARD: contrarian] "THE CONTRARIAN CALL" -- PASS
380. S6 [CARD: contrarian] "Most proposals add capacity: more staff, more stock, one national platform. A district already owns enough to cut stock-outs sharply, if it can see and move it." -- PASS
381. S6 [CARD: contrarian] "Move first; buy for the gaps that remain" -- PASS
382. S7 [7] "SUMMARY" -- PASS
383. S7 [7] "PROBLEM" -- PASS
384. S7 [7] "SOLUTION" -- PASS
385. S7 [7] "MARKET" -- PASS
386. S7 [7] "INNOVATION" -- PASS
387. S7 [7] "SUSTAINABILITY" -- PASS
388. S7 [7] "FEASIBILITY" -- PASS
389. S7 [7] "IMPACT" -- PASS
390. S7 [Frame] "SUSTAINABILITY" -- PASS
391. S7 [Frame] "6 / 8" -- PASS
392. S7 [7] "The model pays for itself three ways: a ₹12 L licence on a 71% gross margin, less medicine expiring on the shelf, and fewer families pushed to private chemists" -- PASS
393. S7 [7] "Source: Team IdeaForge model (benchmark-based margins) | upGrowth India SaaS benchmarks 2026 | CAG Telangana (Aug 2024), CAG Odisha (Oct 2026) | HCWH, Health Care's Climate Footprint 2019 | NHA 2022-23 | NITI Aayog ADP | eLife 2020" -- PASS
394. S7 [Frame] "NEXORA ASKS: SUSTAINABILITY" -- PASS
395. S7 [RAIL: PROFIT] "PROFIT" -- PASS
396. S7 [RAIL: PROFIT] "Financial" -- PASS
397. S7 [PANEL: ₹12 L ACV, BUILT FROM THREE LINES] "₹12 L ACV, BUILT FROM THREE LINES" -- PASS
398. S7 [PANEL: ₹12 L ACV, BUILT FROM THREE LINES] "Base ₹4 L" -- PASS
399. S7 [PANEL: ₹12 L ACV, BUILT FROM THREE LINES] "Facilities ₹7 L" -- PASS
400. S7 [PANEL: ₹12 L ACV, BUILT FROM THREE LINES] "71%" -- PASS
401. S7 [PANEL: ₹12 L ACV, BUILT FROM THREE LINES] "gross margin" -- PASS
402. S7 [PANEL: ₹12 L ACV, BUILT FROM THREE LINES] "5.6 mo" -- PASS
403. S7 [PANEL: ₹12 L ACV, BUILT FROM THREE LINES] "CAC payback" -- PASS
404. S7 [PANEL: ₹12 L ACV, BUILT FROM THREE LINES] "10.65x" -- PASS
405. S7 [PANEL: ₹12 L ACV, BUILT FROM THREE LINES] "LTV : CAC" -- PASS
406. S7 [PANEL: ₹12 L ACV, BUILT FROM THREE LINES] "5-yr life, ₹4 L blended CAC" -- PASS
407. S7 [PANEL: BILLINGS REACH ₹10.65 CR BY YEAR 3] "BILLINGS REACH ₹10.65 CR BY YEAR 3" -- PASS
408. S7 [PANEL: BILLINGS REACH ₹10.65 CR BY YEAR 3] "₹1.80 Cr" -- PASS
409. S7 [PANEL: BILLINGS REACH ₹10.65 CR BY YEAR 3] "Y1" -- PASS
410. S7 [PANEL: BILLINGS REACH ₹10.65 CR BY YEAR 3] "₹6.39 Cr" -- PASS
411. S7 [PANEL: BILLINGS REACH ₹10.65 CR BY YEAR 3] "Y2" -- PASS
412. S7 [PANEL: BILLINGS REACH ₹10.65 CR BY YEAR 3] "₹10.65 Cr" -- PASS
413. S7 [PANEL: BILLINGS REACH ₹10.65 CR BY YEAR 3] "Y3" -- PASS
414. S7 [PANEL: BILLINGS REACH ₹10.65 CR BY YEAR 3] "Green: licence ARR" -- PASS
415. S7 [PANEL: BILLINGS REACH ₹10.65 CR BY YEAR 3] "Gold: onboarding" -- PASS
416. S7 [PANEL: BILLINGS REACH ₹10.65 CR BY YEAR 3] "Y3: 90.1% recurring" -- PASS
417. S7 [PANEL: Y3 ARR: ₹6.0 / 9.6 / 12.6 CR] "Y3 ARR: ₹6.0 / 9.6 / 12.6 CR" -- PASS
418. S7 [PANEL: Y3 ARR: ₹6.0 / 9.6 / 12.6 CR] "₹6.0 Cr" -- PASS
419. S7 [PANEL: Y3 ARR: ₹6.0 / 9.6 / 12.6 CR] "Bear" -- PASS
420. S7 [PANEL: Y3 ARR: ₹6.0 / 9.6 / 12.6 CR] "₹9.6 Cr" -- PASS
421. S7 [PANEL: Y3 ARR: ₹6.0 / 9.6 / 12.6 CR] "Base" -- PASS
422. S7 [PANEL: Y3 ARR: ₹6.0 / 9.6 / 12.6 CR] "₹12.6 Cr" -- PASS
423. S7 [PANEL: Y3 ARR: ₹6.0 / 9.6 / 12.6 CR] "Bull" -- PASS
424. S7 [PANEL: Y3 ARR: ₹6.0 / 9.6 / 12.6 CR] "50, 80 or 105 districts by Y3" -- PASS
425. S7 [RAIL: PLANET] "PLANET" -- PASS
426. S7 [RAIL: PLANET] "Environment" -- PASS
427. S7 [PANEL: EXPIRY COSTS A DISTRICT UP TO ₹1.97 CR A YEAR] "EXPIRY COSTS A DISTRICT UP TO ₹1.97 CR A YEAR" -- PASS
428. S7 [Frame] "State" -- PASS
429. S7 [Frame] "Expired a year" -- PASS
430. S7 [Frame] "Pays back at" -- PASS
431. S7 [Frame] "Telangana" -- PASS
432. S7 [Frame] "₹1.97 Cr" -- PASS
433. S7 [Frame] "6.1% rescued" -- PASS
434. S7 [Frame] "Odisha" -- PASS
435. S7 [Frame] "₹0.96 Cr" -- PASS
436. S7 [Frame] "12.5% rescued" -- PASS
437. S7 [PANEL: EXPIRY COSTS A DISTRICT UP TO ₹1.97 CR A YEAR] "Pays back: share of expiring stock that covers ₹12 L" -- PASS
438. S7 [PANEL: HEALTH CARE'S FOOTPRINT SITS IN ITS SUPPLY CHAIN] "HEALTH CARE'S FOOTPRINT SITS IN ITS SUPPLY CHAIN" -- PASS
439. S7 [PANEL: HEALTH CARE'S FOOTPRINT SITS IN ITS SUPPLY CHAIN] "4.4%" -- PASS
440. S7 [PANEL: HEALTH CARE'S FOOTPRINT SITS IN ITS SUPPLY CHAIN] "of global net emissions come from health care" -- PASS
441. S7 [PANEL: HEALTH CARE'S FOOTPRINT SITS IN ITS SUPPLY CHAIN] "71%" -- PASS
442. S7 [PANEL: HEALTH CARE'S FOOTPRINT SITS IN ITS SUPPLY CHAIN] "of health care's global footprint is its supply chain" -- PASS
443. S7 [PANEL: HEALTH CARE'S FOOTPRINT SITS IN ITS SUPPLY CHAIN] "Planned transfers replace emergency runs and destroyed stock" -- PASS
444. S7 [RAIL: PEOPLE] "PEOPLE" -- PASS
445. S7 [RAIL: PEOPLE] "Social" -- PASS
446. S7 [PANEL: FAMILIES PAY 43.4% OF HEALTH SPENDING] "FAMILIES PAY 43.4% OF HEALTH SPENDING" -- PASS
447. S7 [PANEL: FAMILIES PAY 43.4% OF HEALTH SPENDING] "43.4% families" -- PASS
448. S7 [PANEL: FAMILIES PAY 43.4% OF HEALTH SPENDING] "56.6% other" -- PASS
449. S7 [PANEL: FAMILIES PAY 43.4% OF HEALTH SPENDING] "Out-of-pocket share of health spend, 2022-23" -- PASS
450. S7 [PANEL: FAMILIES PAY 43.4% OF HEALTH SPENDING] "A stocked PHC shelf keeps the purchase free" -- PASS
451. S7 [PANEL: WE START WHERE NEED IS HIGHEST] "WE START WHERE NEED IS HIGHEST" -- PASS
452. S7 [PANEL: WE START WHERE NEED IS HIGHEST] "112 aspirational districts first; health is 30% of their NITI score" -- PASS
453. S7 [PANEL: WE START WHERE NEED IS HIGHEST] "8 states carry 70% of snakebite deaths; antivenom is a tracer medicine" -- PASS
454. S7 [CARD: guardrails] "GUARDRAILS THAT KEEP TRUST" -- PASS
455. S7 [CARD: guardrails] "1" -- PASS
456. S7 [CARD: guardrails] "Officer approves every move" -- PASS
457. S7 [CARD: guardrails] "2" -- PASS
458. S7 [CARD: guardrails] "No patient data, only stock" -- PASS
459. S7 [CARD: guardrails] "3" -- PASS
460. S7 [CARD: guardrails] "State data stays with the state" -- PASS
461. S8 [8] "SUMMARY" -- PASS
462. S8 [8] "PROBLEM" -- PASS
463. S8 [8] "SOLUTION" -- PASS
464. S8 [8] "MARKET" -- PASS
465. S8 [8] "INNOVATION" -- PASS
466. S8 [8] "SUSTAINABILITY" -- PASS
467. S8 [8] "FEASIBILITY" -- PASS
468. S8 [8] "IMPACT" -- PASS
469. S8 [Frame] "FEASIBILITY" -- PASS
470. S8 [Frame] "7 / 8" -- PASS
471. S8 [8] "A district can go live in six weeks with no new hardware or purchase line: SwasthyaGrid reads the stock exports states already produce, and one officer per district signs off" -- PASS
472. S8 [8] "Source: SwasthyaGrid prototype (simulated data) | C-DAC e-Aushadhi | data.gov.in HMIS | Constitution, Seventh Schedule | DPDP Act 2023 | PRS DfG 2025-26 | Team IdeaForge pilot and validation plans" -- PASS
473. S8 [Frame] "NEXORA ASKS: FEASIBILITY" -- PASS
474. S8 [PANEL: SIX WEEKS FROM MOU TO A LIVE DISTRICT] "SIX WEEKS FROM MOU TO A LIVE DISTRICT" -- PASS
475. S8 [PANEL: SIX WEEKS FROM MOU TO A LIVE DISTRICT] "W1" -- PASS
476. S8 [PANEL: SIX WEEKS FROM MOU TO A LIVE DISTRICT] "W2" -- PASS
477. S8 [PANEL: SIX WEEKS FROM MOU TO A LIVE DISTRICT] "W3" -- PASS
478. S8 [PANEL: SIX WEEKS FROM MOU TO A LIVE DISTRICT] "W4" -- PASS
479. S8 [PANEL: SIX WEEKS FROM MOU TO A LIVE DISTRICT] "W5" -- PASS
480. S8 [PANEL: SIX WEEKS FROM MOU TO A LIVE DISTRICT] "W6" -- PASS
481. S8 [PANEL: SIX WEEKS FROM MOU TO A LIVE DISTRICT] "Data MoU, nodal officer" -- PASS
482. S8 [PANEL: SIX WEEKS FROM MOU TO A LIVE DISTRICT] "MoU" -- PASS
483. S8 [PANEL: SIX WEEKS FROM MOU TO A LIVE DISTRICT] "Read e-Aushadhi, HMIS exports" -- PASS
484. S8 [PANEL: SIX WEEKS FROM MOU TO A LIVE DISTRICT] "Nightly file" -- PASS
485. S8 [PANEL: SIX WEEKS FROM MOU TO A LIVE DISTRICT] "Onboard facilities" -- PASS
486. S8 [PANEL: SIX WEEKS FROM MOU TO A LIVE DISTRICT] "Logins" -- PASS
487. S8 [PANEL: SIX WEEKS FROM MOU TO A LIVE DISTRICT] "Train officers, pharmacists" -- PASS
488. S8 [PANEL: SIX WEEKS FROM MOU TO A LIVE DISTRICT] "Training" -- PASS
489. S8 [PANEL: SIX WEEKS FROM MOU TO A LIVE DISTRICT] "Shadow mode vs staff" -- PASS
490. S8 [PANEL: SIX WEEKS FROM MOU TO A LIVE DISTRICT] "Compare" -- PASS
491. S8 [PANEL: SIX WEEKS FROM MOU TO A LIVE DISTRICT] "Go live, 2 districts" -- PASS
492. S8 [PANEL: SIX WEEKS FROM MOU TO A LIVE DISTRICT] "Live" -- PASS
493. S8 [PANEL: SIX WEEKS FROM MOU TO A LIVE DISTRICT] "In shadow mode officers compare each proposal with their own call before trusting it" -- PASS
494. S8 [PANEL: FIVE FEASIBILITY TESTS: 3 GREEN, 2 AMBER] "FIVE FEASIBILITY TESTS: 3 GREEN, 2 AMBER" -- PASS
495. S8 [ROW telos] "Technical" -- PASS
496. S8 [ROW telos] "Working prototype on simulated data" -- PASS
497. S8 [RAG Green] "Green" -- PASS
498. S8 [ROW telos] "Economic" -- PASS
499. S8 [ROW telos] "₹12 L is 0.25% of a district's NHM share" -- PASS
500. S8 [RAG Green] "Green" -- PASS
501. S8 [ROW telos] "Legal" -- PASS
502. S8 [ROW telos] "Stock data only; health is a State subject" -- PASS
503. S8 [RAG Green] "Green" -- PASS
504. S8 [ROW telos] "Operational" -- PASS
505. S8 [ROW telos] "Needs one officer's daily sign-off" -- PASS
506. S8 [RAG Amber] "Amber" -- PASS
507. S8 [ROW telos] "Schedule" -- PASS
508. S8 [ROW telos] "Six weeks, if the data MoU lands in week 1" -- PASS
509. S8 [RAG Amber] "Amber" -- PASS
510. S8 [PANEL: SIX RISKS, EACH WITH A FIX] "SIX RISKS, EACH WITH A FIX" -- PASS
511. S8 [HEAD] "P × I" -- PASS
512. S8 [HEAD] "Low" -- PASS
513. S8 [HEAD] "Med" -- PASS
514. S8 [HEAD] "High" -- PASS
515. S8 [ROWLABEL] "High" -- PASS
516. S8 [ROWLABEL] "Medium" -- PASS
517. S8 [ROWLABEL] "Low" -- PASS
518. S8 [PANEL: SIX RISKS, EACH WITH A FIX] "Rows: probability. Columns: impact" -- PASS
519. S8 [PANEL: SIX RISKS, EACH WITH A FIX] "R1" -- PASS
520. S8 [PANEL: SIX RISKS, EACH WITH A FIX] "Stale data: freshness flag" -- PASS
521. S8 [PANEL: SIX RISKS, EACH WITH A FIX] "R2" -- PASS
522. S8 [PANEL: SIX RISKS, EACH WITH A FIX] "Outbreak surge: buffer rule" -- PASS
523. S8 [PANEL: SIX RISKS, EACH WITH A FIX] "R3" -- PASS
524. S8 [PANEL: SIX RISKS, EACH WITH A FIX] "Queue ignored: daily SLA alert" -- PASS
525. S8 [PANEL: SIX RISKS, EACH WITH A FIX] "R4" -- PASS
526. S8 [PANEL: SIX RISKS, EACH WITH A FIX] "State says no: one district first" -- PASS
527. S8 [PANEL: SIX RISKS, EACH WITH A FIX] "R5" -- PASS
528. S8 [PANEL: SIX RISKS, EACH WITH A FIX] "Weak signal: offline entry, sync" -- PASS
529. S8 [PANEL: SIX RISKS, EACH WITH A FIX] "R6" -- PASS
530. S8 [PANEL: SIX RISKS, EACH WITH A FIX] "Solo founder: hire from pilot fees" -- PASS
531. S8 [PANEL: VALIDATION PLAN: 40 INTERVIEWS, NONE DONE YET] "VALIDATION PLAN: 40 INTERVIEWS, NONE DONE YET" -- PASS
532. S8 [Frame] "Role" -- PASS
533. S8 [Frame] "Target" -- PASS
534. S8 [Frame] "What we test" -- PASS
535. S8 [Frame] "PHC pharmacists" -- PASS
536. S8 [Frame] "12" -- PASS
537. S8 [Frame] "Daily reporting effort" -- PASS
538. S8 [Frame] "Medical officers" -- PASS
539. S8 [Frame] "8" -- PASS
540. S8 [Frame] "Warning lead time needed" -- PASS
541. S8 [Frame] "District officers" -- PASS
542. S8 [Frame] "8" -- PASS
543. S8 [Frame] "Trust in ranked proposals" -- PASS
544. S8 [Frame] "State NHM officials" -- PASS
545. S8 [Frame] "6" -- PASS
546. S8 [Frame] "Willingness to license" -- PASS
547. S8 [Frame] "Warehouse staff" -- PASS
548. S8 [Frame] "6" -- PASS
549. S8 [Frame] "Transfer sizes vs real trucks" -- PASS
550. S8 [PANEL: VALIDATION PLAN: 40 INTERVIEWS, NONE DONE YET] "Planned before the pilot; no user interviews are claimed" -- PASS
551. S9 [9] "SUMMARY" -- PASS
552. S9 [9] "PROBLEM" -- PASS
553. S9 [9] "SOLUTION" -- PASS
554. S9 [9] "MARKET" -- PASS
555. S9 [9] "INNOVATION" -- PASS
556. S9 [9] "SUSTAINABILITY" -- PASS
557. S9 [9] "FEASIBILITY" -- PASS
558. S9 [9] "IMPACT" -- PASS
559. S9 [Frame] "IMPACT" -- PASS
560. S9 [Frame] "8 / 8" -- PASS
561. S9 [9] "Rolled out over three years, SwasthyaGrid avoids an estimated 1.36 crore stock-out days a year and lifts key-medicine availability from 72.2% to 86.1%" -- PASS
562. S9 [9] "Source: Team IdeaForge impact model: 38,241 facilities (MoHFW HDI 2022-23) × 7 tracer medicines × 365 days × 27.8% unavailability (PMC8654139); cuts of 30%, 50%, 80% (UNDP eVIN) | UN SDG targets" -- PASS
563. S9 [Frame] "NEXORA ASKS: IMPACT" -- PASS
564. S9 [CARD: moneyshot] "1.36 crore" -- PASS
565. S9 [CARD: moneyshot] "stock-out days avoided a year, base case" -- PASS
566. S9 [CARD: moneyshot] "72.2% → 86.1%" -- PASS
567. S9 [CARD: moneyshot] "key-medicine availability" -- PASS
568. S9 [CARD: moneyshot] "17,412" -- PASS
569. S9 [CARD: moneyshot] "days avoided per district a year" -- PASS
570. S9 [CARD: moneyshot] "38,241" -- PASS
571. S9 [CARD: moneyshot] "PHCs and CHCs covered" -- PASS
572. S9 [PANEL: FROM ONE MOVE TO FEWER EMPTY SHELVES] "FROM ONE MOVE TO FEWER EMPTY SHELVES" -- PASS
573. S9 [PILL] "INPUTS" -- PASS
574. S9 [NODE toc] "Daily stock, bed and staff data the state already holds" -- PASS
575. S9 [PILL] "ACTIVITIES" -- PASS
576. S9 [NODE toc] "Warn, propose, approve, move, confirm" -- PASS
577. S9 [PILL] "OUTPUTS" -- PASS
578. S9 [NODE toc] "Transfers approved the same day they are proposed" -- PASS
579. S9 [PILL] "OUTCOMES" -- PASS
580. S9 [NODE toc] "Fewer stock-out days and less stock expiring" -- PASS
581. S9 [PILL] "IMPACT" -- PASS
582. S9 [NODE toc] "Emergency drugs on the shelf when a patient arrives" -- PASS
583. S9 [PANEL: BEAR 81.5 LAKH, BULL 2.17 CRORE] "BEAR 81.5 LAKH, BULL 2.17 CRORE" -- PASS
584. S9 [PANEL: BEAR 81.5 LAKH, BULL 2.17 CRORE] "Bear, 30%" -- PASS
585. S9 [PANEL: BEAR 81.5 LAKH, BULL 2.17 CRORE] "81.5 lakh" -- PASS
586. S9 [PANEL: BEAR 81.5 LAKH, BULL 2.17 CRORE] "Base, 50%" -- PASS
587. S9 [PANEL: BEAR 81.5 LAKH, BULL 2.17 CRORE] "1.36 crore" -- PASS
588. S9 [PANEL: BEAR 81.5 LAKH, BULL 2.17 CRORE] "Bull, 80%" -- PASS
589. S9 [PANEL: BEAR 81.5 LAKH, BULL 2.17 CRORE] "2.17 crore" -- PASS
590. S9 [PANEL: BEAR 81.5 LAKH, BULL 2.17 CRORE] "Stock-out days avoided a year, by cut" -- PASS
591. S9 [PANEL: ALL NINE CASES CLEAR 58 LAKH DAYS] "ALL NINE CASES CLEAR 58 LAKH DAYS" -- PASS
592. S9 [HEAD] "Avail." -- PASS
593. S9 [HEAD] "30% cut" -- PASS
594. S9 [HEAD] "50% cut" -- PASS
595. S9 [HEAD] "80% cut" -- PASS
596. S9 [ROWLABEL] "66%" -- PASS
597. S9 [ROWLABEL] "72.2%" -- PASS
598. S9 [ROWLABEL] "80%" -- PASS
599. S9 [PANEL: THREE HORIZONS TO ~780 DISTRICTS] "THREE HORIZONS TO ~780 DISTRICTS" -- PASS
600. S9 [NODE horizon] "H1 · 0 to 12 months" -- PASS
601. S9 [NODE horizon] "12 districts: Rajasthan pilot, then aspirational" -- PASS
602. S9 [NODE horizon] "H2 · 12 to 36 months" -- PASS
603. S9 [NODE horizon] "80 districts and ₹9.6 Cr ARR by Year 3" -- PASS
604. S9 [NODE horizon] "H3 · 36 months on" -- PASS
605. S9 [NODE horizon] "All ~780 districts and 38,241 facilities" -- PASS
606. S9 [Frame] "SDG 3.8" -- PASS
607. S9 [Frame] "SDG 10" -- PASS
608. S9 [Frame] "SDG 12.3" -- PASS
609. S9 [PANEL: THREE HORIZONS TO ~780 DISTRICTS] "Access, equity, less waste" -- PASS
610. S10 [10] "A SIZING" -- PASS
611. S10 [10] "B ECONOMICS" -- PASS
612. S10 [10] "C SENSITIVITY" -- PASS
613. S10 [10] "D IMPACT MODEL" -- PASS
614. S10 [10] "E SOURCES" -- PASS
615. S10 [Frame] "APPENDIX" -- PASS
616. S10 [Frame] "DEFENSIVE DEPTH BEHIND EVERY NUMBER" -- PASS
617. S10 [Frame] "A to E" -- PASS
618. S10 [10] "Every number on the deck traces to a named source or to one stated model, and each assumption below can be changed and re-run" -- PASS
619. S10 [10] "Source: Team IdeaForge model and research document | Contact: Harsh Kawatra, harshkawatra11@gmail.com, +91 98992 20294" -- PASS
620. S10 [PANEL: A. MARKET SIZING, DISTRICT BY DISTRICT] "A. MARKET SIZING, DISTRICT BY DISTRICT" -- PASS
621. S10 [Frame] "Tier" -- PASS
622. S10 [Frame] "Basis" -- PASS
623. S10 [Frame] "Districts" -- PASS
624. S10 [Frame] "₹ Cr/yr" -- PASS
625. S10 [Frame] "TAM" -- PASS
626. S10 [Frame] "All districts × ₹12 L ACV" -- PASS
627. S10 [Frame] "~780" -- PASS
628. S10 [Frame] "93.6" -- PASS
629. S10 [Frame] "SAM" -- PASS
630. S10 [Frame] "NITI Aayog aspirational districts" -- PASS
631. S10 [Frame] "112" -- PASS
632. S10 [Frame] "13.4" -- PASS
633. S10 [Frame] "SOM" -- PASS
634. S10 [Frame] "Licensed by Year 3, base" -- PASS
635. S10 [Frame] "80" -- PASS
636. S10 [Frame] "9.6" -- PASS
637. S10 [Frame] "Beachhead" -- PASS
638. S10 [Frame] "Rajasthan districts" -- PASS
639. S10 [Frame] "41" -- PASS
640. S10 [Frame] "4.9" -- PASS
641. S10 [PANEL: B. UNIT ECONOMICS WORKINGS] "B. UNIT ECONOMICS WORKINGS" -- PASS
642. S10 [Frame] "Line" -- PASS
643. S10 [Frame] "Working" -- PASS
644. S10 [Frame] "ACV" -- PASS
645. S10 [Frame] "₹4 L base + 50 × ₹14,000 + ₹1 L support = ₹12 L" -- PASS
646. S10 [Frame] "Gross margin" -- PASS
647. S10 [Frame] "71% base; 62% bear, 76% bull (SaaS benchmark)" -- PASS
648. S10 [Frame] "CAC payback" -- PASS
649. S10 [Frame] "₹4 L ÷ ₹0.71 L gross profit a month = 5.6 months" -- PASS
650. S10 [Frame] "LTV : CAC" -- PASS
651. S10 [Frame] "₹12 L × 71% × 5 yrs = ₹42.6 L; ÷ ₹4 L = 10.65x" -- PASS
652. S10 [PANEL: C. WHAT MOVES YEAR 3 ARR MOST (BASE ₹9.6 CR)] "C. WHAT MOVES YEAR 3 ARR MOST (BASE ₹9.6 CR)" -- PASS
653. S10 [PANEL: C. WHAT MOVES YEAR 3 ARR MOST (BASE ₹9.6 CR)] "Districts by Y3 (50 to 105)" -- PASS
654. S10 [PANEL: C. WHAT MOVES YEAR 3 ARR MOST (BASE ₹9.6 CR)] "ACV (₹9 L to ₹15 L)" -- PASS
655. S10 [PANEL: C. WHAT MOVES YEAR 3 ARR MOST (BASE ₹9.6 CR)] "Sites per district (35 to 65)" -- PASS
656. S10 [PANEL: C. WHAT MOVES YEAR 3 ARR MOST (BASE ₹9.6 CR)] "₹6.0" -- PASS
657. S10 [PANEL: C. WHAT MOVES YEAR 3 ARR MOST (BASE ₹9.6 CR)] "₹12.6" -- PASS
658. S10 [PANEL: C. WHAT MOVES YEAR 3 ARR MOST (BASE ₹9.6 CR)] "₹7.2" -- PASS
659. S10 [PANEL: C. WHAT MOVES YEAR 3 ARR MOST (BASE ₹9.6 CR)] "₹12.0" -- PASS
660. S10 [PANEL: C. WHAT MOVES YEAR 3 ARR MOST (BASE ₹9.6 CR)] "₹7.9" -- PASS
661. S10 [PANEL: C. WHAT MOVES YEAR 3 ARR MOST (BASE ₹9.6 CR)] "₹11.3" -- PASS
662. S10 [PANEL: C. WHAT MOVES YEAR 3 ARR MOST (BASE ₹9.6 CR)] "Adoption speed moves Year 3 ARR more than price does" -- PASS
663. S10 [PANEL: D. IMPACT MODEL AND ITS ASSUMPTIONS] "D. IMPACT MODEL AND ITS ASSUMPTIONS" -- PASS
664. S10 [FORMULA] "Stock-out days = 38,241 facilities × 7 tracer medicines × 365 days × (1 − 72.2%) = 2.72 crore a year" -- PASS
665. S10 [Frame] "Assumption" -- PASS
666. S10 [Frame] "What it means" -- PASS
667. S10 [Frame] "A1" -- PASS
668. S10 [Frame] "Survey-day availability stands in for item-days" -- PASS
669. S10 [Frame] "A2" -- PASS
670. S10 [Frame] "Cut of 30%, 50% or 80%; 80% is eVIN's result" -- PASS
671. S10 [Frame] "A3" -- PASS
672. S10 [Frame] "7 tracer medicines from the prototype list" -- PASS
673. S10 [PANEL: E. SOURCES (FULL REGISTER IN THE RESEARCH DOCUMENT)] "E. SOURCES (FULL REGISTER IN THE RESEARCH DOCUMENT)" -- PASS
674. S10 [PANEL: E. SOURCES (FULL REGISTER IN THE RESEARCH DOCUMENT)] "S01 MoHFW HDI 2022-23 · S02 PMC8654139 · S06 eLife 2020 · S10 NHA 2022-23 · S12 UNDP eVIN · S16 CAG Telangana · S17 CAG Odisha · S18 PRS DfG 2025-26 · S19 NITI Aayog ADP · S21 PIB ABHA · S22 HCWH 2019 · M Team IdeaForge model" -- PASS