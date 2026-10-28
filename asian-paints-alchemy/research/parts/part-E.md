## 20. Cost: material cost falls from ₹18.4 to ₹12.0 per m² and footprint by 28%

**Answer.** In our model, the materials cost of hiding one square metre of wall with two coats falls from ₹18.4 to ₹12.0, a cut of 34 percent [T12], because the air-network base coat needs 16.1 grams less titanium dioxide [T12] and 17.5 grams less binder per square metre than the premium baseline [M], even after paying more for the finer chalk the base coat uses. The carbon footprint of that same square metre falls by 28 percent in the model's own reported figure, from 0.23 to 0.16 kilograms of carbon dioxide equivalent, with the rounded table values giving a slightly larger 30 percent when recomputed from their two-decimal display [T12]. Converted to a litre basis using Asian Paints' own published coverage rate for a comparable premium emulsion, the same cut appears as roughly ₹43 saved on the materials embedded in every litre applied over two coats [F07, T12]. The saving is not free: it depends on a titanium dioxide price that itself moves, so this section also tests what happens to the rupee figure if that price sits at the bear or bull end of its own range [A13].

### 20.1 The per-square-metre cost bridge, by scenario

Table 20.1 reproduces the model's own cost-and-footprint table for two coats of wall, at bear, base and bull settings of the surrounding-medium assumption that drives the whole proposal [T9, T12].

| Scenario | TiO2, reference | TiO2, proposal | Materials cost, reference | Materials cost, proposal | Cost cut | CO2e, reference | CO2e, proposal |
|---|---|---|---|---|---|---|---|
| Bear | 40.8 g | 34.5 g | ₹16.3 | ₹13.7 | 16% | 0.21 kg | 0.19 kg |
| Base | 40.8 g | 24.8 g | ₹18.4 | ₹12.0 | 34% | 0.23 kg | 0.16 kg |
| Bull | 40.8 g | 14.3 g | ₹20.4 | ₹10.0 | 51% | 0.25 kg | 0.13 kg |

*TiO2 = titanium dioxide. CO2e = carbon dioxide equivalent.*

Working through the base case in full: ₹18.4 minus ₹12.0 is ₹6.4 saved on every square metre, and ₹6.4 divided by ₹18.4 is 0.3478, which rounds to the 34 percent the model prints [T12]. The footprint row for the same case subtracts to 0.07 kilograms (0.23 minus 0.16), and 0.07 divided by 0.23 is 0.3043, a 30 percent cut on the rounded display values. The model's own headline figure is 28 percent, computed internally on unrounded inputs before the table rounds each cell to two decimal places. The one-to-three-point gap between the two numbers is a rounding artefact of the table's display precision, not a second, inconsistent model output, so this document follows the model's own stated figure (28 percent) wherever the footprint cut is quoted as a single number, and shows the rounded-table arithmetic (30 percent) alongside it so the gap stays visible. The reference materials cost is not fixed either: it rises from ₹16.3 at bear to ₹20.4 at bull, because the bear and bull scenarios also change the host-index assumption the reference film is implicitly compared against inside the same model run. The saving, in every scenario, is a difference between two moving numbers, not a fixed baseline against a moving proposal.

### 20.2 Where the saving comes from: a per-ingredient arithmetic check

The model's materials cost line bundles titanium dioxide, binder and extender into one rupee figure per square metre. The two headline ingredients can be pulled apart, though, using the assumption register's own prices and the physical masses the model reports (TiO2 mass is a column of table T12; binder mass is a direct model output, `[M]`, not printed in T12). Checking how close that partial sum comes to the full figure is a useful check on the arithmetic, not a new model output.

| Ingredient | Reference mass | Proposal mass | Price | Reference cost | Proposal cost | Saved |
|---|---|---|---|---|---|---|
| Titanium dioxide | 40.8 g | 24.8 g | ₹250 per kg | ₹10.20 | ₹6.20 | ₹4.00 |
| Acrylic binder | 41.6 g | 24.1 g | ₹190 per kg | ₹7.90 | ₹4.58 | ₹3.32 |
| Sum of these two | | | | ₹18.10 | ₹10.78 | ₹7.32 |
| Full model figure | | | | ₹18.4 | ₹12.0 | ₹6.4 |
| Gap (extenders) | | | | ₹0.30 | ₹1.22 | minus ₹0.92 |

*TiO2 = titanium dioxide.*

The arithmetic behind the table: titanium dioxide reference cost is 40.8 grams converted to kilograms (0.0408 kg) multiplied by ₹250, which is ₹10.20; the proposal figure is 0.0248 kilograms multiplied by ₹250, which is ₹6.20; the difference is ₹4.00 saved on pigment alone [A13, T12]. Binder reference cost is 0.0416 kilograms multiplied by ₹190, which is ₹7.904, rounded to ₹7.90; the proposal figure is 0.0241 kilograms multiplied by ₹190, which is ₹4.579, rounded to ₹4.58; the difference is ₹3.32 saved on binder alone [A17, M]. Adding the two reference costs gives ₹18.10, close to but 30 paise under the model's stated ₹18.4 reference figure; adding the two proposal costs gives ₹10.78, a full ₹1.22 under the model's stated ₹12.0 proposal figure. Both gaps point the same way and both are consistent with the formulation itself: the air-network base coat is built above its critical pigment volume concentration with a fine, 0.6 micron precipitated calcium carbonate extender priced at roughly ₹25 per kilogram [A15], in place of some of the coarse, 3 micron ground calcium carbonate the reference film uses at roughly ₹8 per kilogram [A16]. The fine extender does more optical work (it becomes part of the air-network scattering, not just a filler) but it costs three times as much per kilogram as the coarse chalk it displaces, so it eats into the pigment-and-binder saving. Summing the titanium-dioxide-and-binder saving (₹7.32) against the model's full net saving (₹6.4) implies an extender cost increase of ₹0.92 per square metre, which is the price paid for the fine chalk that makes the whole architecture work. Section 14 of this document gives the formulation rules behind that choice in full; this section only reconciles the rupees.

### 20.3 A per-litre view, for a reader who thinks in cans, not square metres

The model works entirely in grams and square metres of dry film, because that is the unit the optics run in. Asian Paints' own technical data sheet for a comparable premium interior emulsion gives a real, published coverage rate that lets the cost figures above be re-expressed per litre of paint applied, as an illustration rather than a model output. Apcolite Premium Emulsion's theoretical coverage is 13.42 square metres per litre at a 30 micron dry film, for a single coat [F07]. The model's own two-coat system runs at 30 microns per coat, 60 microns total [A01], so halving the one-coat coverage gives a two-coat coverage of 13.42 divided by 2, which is 6.71 square metres per litre.

| Basis | Materials cost per m² | Coverage (two coats) | Materials cost per litre |
|---|---|---|---|
| Reference | ₹18.4 | 6.71 m²/l | ₹123.46 |
| Proposal | ₹12.0 | 6.71 m²/l | ₹80.52 |
| Saved | ₹6.4 | | ₹42.94 |

*m² = square metres. l = litres.*

The arithmetic: ₹18.4 per square metre multiplied by 6.71 square metres per litre gives ₹123.46 of materials cost embedded in every litre applied over two coats; the same multiplication on ₹12.0 gives ₹80.52; the difference, ₹42.94, divided by ₹123.46, is 34.8 percent, matching the per-square-metre cut to within rounding, exactly as it should, since a constant coverage factor cannot change a percentage cut, only its rupee scale. This per-litre figure covers only the titanium dioxide, binder and extender cost the model tracks; it is not a retail price, does not include packaging, other additives, labour, margin or distribution, and should never be read as "Asian Paints would sell this paint ₹43 cheaper a litre." It is offered only so a reader who thinks in cans of paint, rather than square metres of wall, has a bridge between the two.

### 20.4 Price sensitivity: what happens if titanium dioxide gets cheaper or dearer

The rupee saving is a product of a fixed physical quantity (the titanium dioxide mass avoided) and a price that itself has a bear-to-bull range in the assumption register [A13]. Section 4's locked numbers give the mass saved as 16.1 grams per square metre at the base case; multiplying that fixed mass by each of the three prices isolates how much of the saving is price risk, holding every physical assumption at its base setting.

| TiO2 price scenario | Price | TiO2-only saving per m² | Arithmetic |
|---|---|---|---|
| Bear | ₹200 per kg | ₹3.22 | 0.0161 kg × ₹200 |
| Base | ₹250 per kg | ₹4.03 | 0.0161 kg × ₹250 |
| Bull | ₹300 per kg | ₹4.83 | 0.0161 kg × ₹300 |

*TiO2 = titanium dioxide. m² = square metres.*

At the model's base price of ₹250 per kilogram [A13], the titanium-dioxide-only slice of the saving is ₹4.03 per square metre; scaled by the base-case area of 470 million square metres from section 21's scale table [T13], that alone is 4.03 multiplied by 470,000,000, which is ₹1,894,100,000, or ₹189.4 crore, a figure that lands within a rounding width of the model's own stated base-case "TiO2 saving" of ₹189 crore [T13] and serves as an internal consistency check on both tables rather than a new, independent finding. Holding the same area fixed but swinging only the titanium dioxide price to its bear and bull settings moves this one component of the saving to ₹151.3 crore and ₹227.0 crore respectively (3.22 and 4.83 multiplied by 470,000,000). This price-only band is narrower than the full bear-to-bull range the research document quotes elsewhere (₹38 crore to ₹1,021 crore, section 21 and section 4), because that wider range also moves the porosity, adoption and area assumptions at the same time; the price-only exercise here isolates a single lever, consistent with the tornado-sensitivity method applied to the physical assumptions in table T14 and carried into section 21. Titanium dioxide price risk cuts both ways: if the price rises, as it has in past years on the company's own historical statements [A53, A55], the rupee case for cutting its use only gets stronger; if the price falls, the physical saving (the 16.1 grams avoided, the 39 percent cut in our model) is unchanged, and only its rupee value shrinks. No published rupee-denominated Indian landed price for titanium dioxide in 2025 or 2026 could be confirmed by the research lane that tried to find one [B37]. The model's ₹250-per-kilogram base case and its ₹200-to-₹300 range therefore remain an assumption, not a measured 2025-to-2026 market quote, and that limit is stated here rather than glossed over.

### 20.5 The cost bridge as a waterfall

Sections 20.1 and 20.2 already give every number this waterfall needs; table 20.5 only re-orders them so the base-case cost bridge reads as a single sequence of additions and subtractions, starting from the premium baseline and ending at the proposal.

| Step | Cost per m² | Running total |
|---|---|---|
| Start: premium baseline materials cost | ₹18.4 | ₹18.4 |
| Minus titanium dioxide saved (0.0161 kg × ₹250 per kg) | minus ₹4.00 | ₹14.4 |
| Minus binder saved (0.0175 kg × ₹190 per kg) | minus ₹3.32 | ₹11.08 |
| Plus the extender cost increase (fine chalk replacing coarse chalk) | plus ₹0.92 | ₹12.0 |
| End: air-network proposal materials cost | | ₹12.0 |

*m² = square metres. kg = kilograms.*

Reading the waterfall this way makes a point the scenario table in section 20.1 states only as a single net number: two of the three moves (the titanium dioxide saving and the binder saving) pull the cost down, and one move (the extender cost increase) pushes it back up, and the three together land at exactly the ₹12.0 the model's own run reports, which is itself the same consistency check performed in section 20.2, presented here as a sequence rather than a reconciliation table.

---

## 21. Scale: about ₹298 Cr a year and 7,551 t of TiO2 at 40% adoption, with a range of ₹38 Cr to ₹1,021 Cr

**Answer.** In our model, if the air-network system reached 40 percent of the titanium dioxide that currently goes into Asian Paints' interior emulsions and their primers, the company would avoid buying about 7,551 tonnes of titanium dioxide a year, worth ₹189 crore, and save ₹298 crore a year net of the extra chalk the system needs, with the bear-to-bull range running from ₹38 crore to ₹1,021 crore depending on how the underlying physics and the pace of adoption actually land [T13]. That scale case is built entirely from Asian Paints' own disclosed revenue and gross margin [A21, A22] combined with three further assumptions the research lanes could not independently verify against a published company figure: titanium dioxide's 15 percent share of the raw material bill [A23], the 40 percent of that spend sitting in interior emulsions and primers [A24], and 40 percent adoption of the new system across that addressable volume within five years [A25]. The same scale sits inside a titanium dioxide supply chain that is import-dependent, duty-contested and, as of the access date, carries a recommended but not yet confirmed-notified anti-dumping duty on Chinese imports [B02, B03, B17], a fact this section states plainly rather than assuming the duty is already in force.

### 21.1 Rebuilding the TiO2 bill from the company's own disclosed numbers

Table 21.1 reproduces the model's scale table in full, across the three scenarios [T13].

| Scenario | TiO2 bill | TiO2 tonnes | Area on the new system | TiO2 avoided | TiO2 saving | Net materials saving | CO2e avoided |
|---|---|---|---|---|---|---|---|
| Bear | ₹1,999 Cr | 99,932 t | 147 mn m² | 928 t | ₹19 Cr | ₹38 Cr | 1.8 kt |
| Base | ₹2,998 Cr | 1,19,919 t | 470 mn m² | 7,551 t | ₹189 Cr | ₹298 Cr | 29.7 kt |
| Bull | ₹3,997 Cr | 1,33,243 t | 979 mn m² | 25,934 t | ₹778 Cr | ₹1,021 Cr | 113.1 kt |

*TiO2 = titanium dioxide. mn = million. CO2e = carbon dioxide equivalent. kt = kilotonnes.*

The base-case titanium dioxide bill is not an invented number; it is a direct product of three disclosed-or-assumed figures, worked out here in full so the arithmetic is checkable rather than asserted. Asian Paints' FY26 consolidated revenue is ₹35,500 crore [A21]. Raw material and packaging cost is 56.3 percent of revenue, the complement of the company's 43.7 percent FY26 gross margin [A22]; ₹35,500 crore multiplied by 0.563 is ₹19,986.5 crore of raw material cost. Titanium dioxide's assumed share of that raw material bill is 15 percent [A23]; ₹19,986.5 crore multiplied by 0.15 is ₹2,997.975 crore, which rounds to the ₹2,998 crore the model prints exactly [T13]. Converting that rupee bill into tonnes uses the same ₹250-per-kilogram price used throughout section 20 [A13]: ₹2,998 crore is ₹29,980,000,000, divided by ₹250 per kilogram is 119,920,000 kilograms, which is 1,19,920 tonnes, a one-tonne rounding width from the model's stated 1,19,919 tonnes [T13]. Every step of that chain is a verified or assumed number multiplied against another; none of it is a new, independently sourced fact, and the research lane assigned to check the inputs could not find a single, dated, company-stated figure for titanium dioxide's specific share of the raw material bill in FY24 to FY26, only older and differently-scoped estimates ranging from about 20 percent to about 40 percent of crude-linked materials generally [A55, A56]. The model's 15 percent base case sits inside that broader range but below its upper estimates, and the bear-to-bull band (10 percent to 20 percent) is deliberately wide to reflect that this is the single most consequential unverified input in the whole scale case.

### 21.2 From tonnage to area: the addressable-and-adoption chain, worked in full

The jump from a titanium dioxide bill to an area of wall covered by the new system runs through two further assumptions: the addressable share of titanium dioxide use that sits in interior emulsions and primers, 40 percent at the base case [A24], and the adoption rate across that addressable volume by year five, also 40 percent at the base case [A25]. Multiplying the two gives the overall penetration of the new system into Asian Paints' total titanium dioxide use: 0.40 multiplied by 0.40 is 0.16, or 16 percent of the company's total titanium dioxide tonnage. Applying that 16 percent to the base-case tonnage of 1,19,919 tonnes gives 19,187 tonnes of titanium dioxide use that the new system would actually touch. Converting that touched tonnage into an area of wall uses the premium baseline's own titanium dioxide intensity, 40.8 grams per square metre [T7]: 19,187,000 kilograms divided by 0.0408 kilograms per square metre is 470,269,608 square metres, which rounds to the model's stated 470 million square metres [T13], a match close enough to confirm the chain of reasoning behind the headline area figure rather than merely assert it.

| Step | Value | Arithmetic | Tag |
|---|---|---|---|
| Addressable share | 40% | n/a | [A24] |
| Adoption by year 5 | 40% | n/a | [A25] |
| Combined penetration of total TiO2 use | 16% | 0.40 × 0.40 | derived |
| Total TiO2 tonnage touched | 19,187 t | 1,19,919 t × 0.16 | derived |
| Area on the new system | 470 mn m² | 19,187,000 kg ÷ 0.0408 kg/m² | derived |

*TiO2 = titanium dioxide. mn = million. m² = square metres.*

Carrying the area figure forward to the avoided tonnage and the saving gives a second, independent consistency check on the scale table. The titanium dioxide saved per square metre is the reference-minus-proposal mass, 40.8 grams minus 24.8 grams, which is 16.0 grams per the rounded table figures, or 16.1 grams per the model's own unrounded figure quoted in section 4; multiplying 470,000,000 square metres by 16.1 grams per square metre gives 7,567,000,000 grams, which is 7,567 tonnes, a 16-tonne width (0.2 percent) from the model's stated 7,551 tonnes [T13], the gap again attributable to the area figure's own rounding from its unrounded 470.27 million to a flat 470 million before the multiplication. The titanium dioxide saving in rupees, 7,551 tonnes multiplied by ₹250 per kilogram, is ₹1,887,750,000, or ₹188.8 crore, matching the model's stated ₹189 crore [T13]. The net materials saving, which also folds in the binder saving and the extender cost increase worked out in section 20.2, is ₹298 crore against a titanium-dioxide-only saving of ₹189 crore; the difference, ₹109 crore, is the net contribution of the binder-and-extender side of the formulation at full scale, consistent with the per-square-metre reconciliation in section 20.2 where the net saving (₹6.4) sat below the sum of the titanium-dioxide-only and binder-only savings (₹7.32) because of the extender cost increase. Scaling the per-square-metre net saving directly, ₹6.4 multiplied by 470,000,000 square metres, gives ₹3,008,000,000, or ₹300.8 crore, within a one-percent width of the model's stated ₹298 crore, again confirming the chain rather than contradicting it.

### 21.3 The three-scenario story, named

Each of the three scenarios in table 21.1 differs on every assumption at once, not one at a time, following the scenario-analysis convention used throughout this document [A05 through A25, model dictionary]. Table 21.3 names what moves between the scenarios, so the ₹38-crore-to-₹1,021-crore range is read as a story, not three disconnected numbers.

| Scenario | Porosity | Host index | Addressable share | Adoption | TiO2 price | What this combination represents |
|---|---|---|---|---|---|---|
| Bear | 25% | 1.38 (mostly binder-wetted) | 30% | 20% | ₹200/kg | The physics underdelivers and the business is cautious: binder preferentially wets the pores, few product lines convert, and TiO2 happens to be cheap when it matters least |
| Base | 35% | 1.18 | 40% | 40% | ₹250/kg | The model's central, most-likely combination across every assumption |
| Bull | 45% | 1.00 (pure air) | 50% | 60% | ₹300/kg | The physics performs at its theoretical best, the business commits broadly, and TiO2 happens to be expensive when it matters most |

*TiO2 = titanium dioxide.*

The width of the range, ₹38 crore to ₹1,021 crore, a 27-fold spread, comes from multiplying five uncertain inputs together, each with its own bear-to-bull range, rather than from a sloppy model or a single point estimate dressed up as a forecast. Section 4's caveat applies here without qualification: nothing in this range has been measured on a panel, and the single biggest driver of where the business actually lands inside it is the physical surroundings assumption (table T14, discussed further in section 24), not the business assumptions, since the physical assumption alone swings the TiO2 saving from 21 percent to 65 percent before a single rupee or tonne of area is even considered.

### 21.4 Supply resilience: a duty-contested, import-dependent raw material

The scale case sits inside a titanium dioxide supply chain that is unusually exposed to trade policy, a fact the research lanes confirmed in detail. Chinese imports supplied 226,869 tonnes during the Directorate General of Trade Remedies' period of investigation, equal to 57 percent of Indian demand [B07]. Domestic capacity for the specific rutile-sulphate grade used in architectural coatings is negligible, roughly 3,500 to 4,000 tonnes against demand near 300,000 tonnes for that grade [B08], a shortfall of roughly 296,000 to 296,500 tonnes that domestic producers cannot presently fill. The Directorate's original final findings, issued 12 February 2025, led to a Customs notification on 10 May 2025 imposing anti-dumping duty [B01, B12]; the Calcutta High Court quashed that notification on 22 September 2025 for a failure of natural justice in how the investigation disclosed non-confidential information to interested parties [B18, B19, B20], and the matter was remanded to the Directorate [B21]. A new, remand final finding was issued 3 August 2026, recommending a duty of USD 460 to USD 681 per tonne depending on the named Chinese producer [B02, B03]. As of the access date for this research, no primary source could confirm that the Ministry of Finance has notified this remand recommendation into legal force [B17]; the duty therefore sits at the recommended stage, not the in-force stage, and this document follows that distinction throughout rather than stating the duty as currently collected.

| Supply-chain fact | Figure | Tag |
|---|---|---|
| Chinese import share of Indian demand (DGTR period of investigation) | 57% | [B07] |
| Domestic rutile-sulphate capacity vs demand for that grade | 3,500 to 4,000 t vs ~300,000 t | [B08] |
| Recommended anti-dumping duty range (3 Aug 2026 remand findings) | USD 460 to USD 681 per tonne | [B03] |
| Status of that duty as of the access date | Recommended, not confirmed notified into force | [B17] |
| TiO2 avoided at base case, as a share of the Chinese import volume | 3.3% (7,551 ÷ 226,869) | derived |
| TiO2 avoided at bull case, as a share of the Chinese import volume | 11.4% (25,934 ÷ 226,869) | derived |
| TiO2 avoided at bull case, as a share of the domestic capacity shortfall | 8.7% (25,934 ÷ 296,500) | derived |

The resilience argument does not depend on the duty ever being notified. At the base case, the 7,551 tonnes avoided is a modest 3.3 percent of the Chinese import volume that feeds the whole Indian market (7,551 divided by 226,869); at the bull case, the 25,934 tonnes avoided reaches 11.4 percent of that same import volume, and 8.7 percent of the entire domestic capacity shortfall (25,934 divided by 296,500). Neither figure makes Asian Paints independent of imported titanium dioxide, and this section does not claim it does. What the figures show is a direction: every tonne the air-network system avoids buying is a tonne the company does not have to source through a supply chain that has already been reshaped once by a quashed duty and once by a remand finding inside eighteen months, and would not have to source again if a future duty, tariff or supply disruption raised the landed price further. The case for the architecture therefore strengthens, rather than weakens, under supply-chain stress, which is the opposite of how a cost-reduction idea that depended on buying more of a volatile import would behave.

### 21.5 Why the scale case rests on assumption, not a verified company figure, and what moves it besides the physics

Section 21.3's three-scenario story already names the physical assumptions that move the scale case. Two further, purely business assumptions move it just as much, and holding every physical assumption at its base setting while varying only the adoption pace shows how much of the range in table 21.1 is a business choice rather than a physics result.

| Adoption by year 5 | Net materials saving (base physics held fixed) | Arithmetic |
|---|---|---|
| 20% (half of base) | ₹149 Cr | ₹298 Cr × (20 ÷ 40) |
| 40% (base case) | ₹298 Cr | n/a, this is the base case |
| 60% (1.5 times base) | ₹447 Cr | ₹298 Cr × (60 ÷ 40) |

The saving scales linearly with the adoption share, because adoption multiplies the addressable tonnage directly, with no interaction against the physical assumptions in this particular cut; a reader can therefore read any adoption figure between the bear and bull settings directly off this line, without rerunning the full model. This matters because no research lane could find a single, dated, company-stated figure for Asian Paints' own decorative or interior-emulsion-specific market share, let alone an addressable-share or adoption-rate figure for a product that does not yet exist: the clearest statement from this project's own research is that "no clean, single, dated raw-material (or TiO2-specific) cost line as a percentage of sales was found for FY24, FY25 or FY26 in any source opened" [A10, A57 gap], and that decorative market-share percentages for every named competitor "are inconsistent across secondary sources and none trace to an audited company disclosure or an independent syndicated market-share report" [A61 to A67 gap]. The 40 percent base-case adoption figure in this document is therefore the team's own judgement, stated as such, not a verified projection, and table 21.5 exists so a reader who disagrees with that judgement can rescale the headline ₹298 crore figure to whatever adoption pace they find more credible, without needing to rerun the underlying model.

---

## 22. The lab programme that would prove it, with pass marks (not yet run)

**Answer.** None of what follows in this section has been measured: no panel has been cast, no instrument has been read, and no laboratory has touched this formulation. What follows is a plan, with the pass marks the plan would be judged against, built from the same assumptions and uncertainty ranges the model already carries, most importantly the five inputs the model's own sensitivity table flags as the biggest drivers of the result [T14]. The plan uses named, real standards wherever the research lanes could confirm one applies (ISO 6504-3, ISO 7724, ASTM D2486, porosimetry, focused-ion-beam scanning electron microscopy, QUV accelerated weathering), and it states honestly where a standard's own text is contested or where a figure the model needs has no published source, because a plan that hides its own gaps is not a credible plan.

### 22.1 What the five challenges in the brief require the lab to answer

The brief asks for whiteness enhancement that survives five named challenges [W-K1 to W-K5]. Table 22.1 maps each challenge to the specific test the lab programme would run and the pass mark that test would be judged against, drawn from the model's own targets wherever one exists.

| Brief challenge | What must be demonstrated | Test | Pass mark |
|---|---|---|---|
| Opacity (W-K1) | The air-network system matches or exceeds the premium baseline's hiding | Hiding power, contrast ratio | Luminous reflectance Y at least 90.7, two-coat contrast ratio at least 0.998 [A11, A12] |
| Durability and yellowing resistance (W-K2) | The system does not develop a visible yellow cast faster than the baseline | Accelerated weathering, colour measurement before and after | b* (yellowness) after exposure within the same band the baseline shows unexposed, about 1.4 [T7], and markedly below the proposal's as-made 1.5 [T9] |
| Dispersion (W-K3) | The fine extender and the seal latex disperse and remain stable, no settling or flocculation that changes porosity | Particle-size distribution, viscosity stability, storage stability | Porosity after storage within the bear-to-bull band already used in the model, 25 to 45 percent [A05] |
| Supply and economics (W-K4) | The cost case in section 20 holds in a real batch, not only on paper | Batch costing against the model's per-kilogram inputs | Materials cost within a stated tolerance of the model's ₹12.0 per square metre base case [T12] |
| Manufacturing complexity (W-K5) | The system can be made on Asian Paints' existing equipment, no new plant | Pilot batch on existing mixing and filling lines | Pass if no new unit operation or equipment class is required beyond what section 18 already names |

Every pass mark in the right-hand column traces back to a number already in this document rather than a figure invented for this section alone: the test criteria are the model's own targets, restated as what a physical measurement would need to show to confirm the model, not as results that already exist.

### 22.2 The design of experiments: the five inputs the physics itself says matter most

Table T14, already introduced in section 4's locked numbers, ranks what moves the titanium dioxide saving most when every other input is held at its base case. That table is also the design of experiments the lab programme would run, because the inputs it names are exactly the inputs a physical test needs to pin down before the model's base case can be called confirmed rather than merely plausible.

| Factor | Low setting to test | High setting to test | Saving at low (model) | Saving at high (model) | What the physical measurement would be |
|---|---|---|---|---|---|
| What surrounds base-coat particles | Binder-wetted | Pure air | 21% | 65% | FIB-SEM cross-sections at the particle scale, to see directly whether binder films the pigment or leaves it in open air |
| Base-coat porosity | 25% | 45% | 33% | 45% | Mercury or gas-adsorption porosimetry on cured base-coat films |
| Seal-coat infiltration into pores | 25% | 0% | 34% | 43% | FIB-SEM cross-sections at the base-coat-to-seal-coat interface, measuring how deep the seal latex actually penetrates |
| Minimum seal-coat film | 20 µm | 12 µm | 37% | 39% | Dry film thickness gauge on cured panels, cross-checked against hiding and scrub performance |
| Base-coat extender size | 0.8 µm | 0.4 µm | 37% | 38% | Particle-size distribution of the fine extender as milled and as dispersed in the wet base coat |

*FIB-SEM = focused-ion-beam scanning electron microscopy. µm = micron.*

The design of experiments this table implies is not a simple one-factor-at-a-time sweep; because the model's own tornado analysis already shows that the surroundings assumption and the porosity assumption interact (both describe the same physical pore network from different angles), the actual test plan would build a small factorial across porosity (three levels, bear-base-bull) and infiltration (three levels), with the surroundings question answered directly by FIB-SEM imaging on whichever porosity-and-infiltration combination the factorial points to as most representative, rather than inferred indirectly from an optical measurement alone. A minimum of three independently prepared panels per cell of the factorial, cast on separate days, would be needed before any cell's result could be treated as repeatable rather than a single data point; this is a planned specimen count, not a reported outcome, and nothing about naming it in advance commits the team to a result it has not yet produced.

### 22.3 Standards and methods, and where their own text is contested

Not every standard named in the plan is as settled as it first appears, and the research lanes found real disagreement inside the standards literature itself that the lab programme has to navigate rather than assume away.

| Standard or method | What it measures | Status found by the research lanes |
|---|---|---|
| ISO 6504-3 | Hiding power or opacity of white and light-coloured paints | Two incompatible editions exist: the current 2019 edition measures hiding power by a tristimulus Y and Y10 method for films above Y 25 [C38]; the withdrawn 2006 edition measured opacity by contrast ratio at a fixed 20 square-metres-per-litre spreading rate [C39]. This document's own working language, "contrast ratio," matches the withdrawn 2006 method's concept, not the current 2019 method's, a terminology gap the lab programme would need to resolve by stating explicitly which edition's protocol a reported contrast ratio actually followed |
| ISO 7724 | Colorimetry for paints: principles, measurement by spectrophotometer, and small colour-difference calculation | All three parts are withdrawn, the 1984 edition, with Parts 2 and 3 withdrawn specifically on 18 November 2013 [C40]; a current replacement standard was not identified in this lane's search, so any colour-difference reporting would need to name whichever current standard a chosen instrument vendor actually certifies against |
| ASTM D2486 | Scrub resistance and washability of paint films | Named directly in the brief's own list of possible test protocols for Case Study 2 and carried here by analogy for washability testing; this verifier's lanes did not independently retrieve or confirm the standard's own numeric pass criteria, so the plan names the method but does not assert a specific cycle count as a pass mark until the standard itself is read in full |
| Mercury or gas-adsorption porosimetry | Pore-size distribution and total porosity of a cured film | A generic, well-established laboratory technique; no India-specific or paint-specific porosity figure for a paper-coating-style layer could be independently confirmed by the research lanes beyond the general critical-pigment-volume-concentration literature [C28 to C31], which is exactly why the plan treats porosity as something to measure, not assume |
| FIB-SEM | Cross-sectional imaging of the pore network and the seal-coat-to-base-coat interface at nanometre resolution | Standard materials-characterisation instrumentation, not paint-specific; availability depends on access to a shared characterisation facility, a constraint named honestly rather than assumed solved |
| QUV accelerated weathering | Simulated ultraviolet exposure and condensation cycling, for yellowing and durability | Standard accelerated-weathering equipment; the exposure duration needed to represent a stated number of years of real exterior service was not independently sourced in this project's research lanes and would need to follow the chamber manufacturer's own correlation tables or an ASTM G154-class cycle, named here as the intended method rather than a confirmed duration |

A plan that simply listed test names without checking them would have missed the ISO 6504-3 edition conflict entirely, and would have reported a "contrast ratio" result against a standard that, in its current 2019 form, no longer uses that term the same way the withdrawn 2006 edition did. The lab programme, when it runs, states on its first page which edition of each standard its own measurements actually followed.

### 22.4 BIS standards and the Indian practice context the lab must respect

India's own standards for emulsion paints provide a separate, independent check on what a real pass mark should look like, and the research lanes found a gap worth stating plainly. The current plastic-emulsion-paint standard is IS 15489:2024, which merged the older interior and exterior emulsion standards into one document [F14]; its 2024 revision removed the optional requirements for spreading capacity, hiding power and spreading time that an earlier edition carried [F16]. Neither this standard nor the washable-distemper standard IS 428, nor the cement-paint standard IS 5410 that was read in full for this project, carries a clause-level contrast-ratio or hiding-power numeric requirement of its own [F25, F29]; Indian practice evidently leaves hiding-power verification to the product's own technical data sheet and to the international standards (ISO 6504-3 in whichever edition) rather than to a BIS numeric clause. The lab programme's pass marks in table 22.1 therefore rest on the model's own targets and on the international standard, not on a BIS numeric threshold, because no such threshold could be found to exist for this specific property in the Indian standards actually read.

### 22.5 Decision rules: what a failed cell does to the plan

A design of experiments is only useful if it is paired with a stated rule for what happens when a cell fails, so the pass marks of table 22.1 are not read for the first time after the panels are already cast.

| If the measurement shows | The decision is | Why |
|---|---|---|
| Measured Y below 90.5 (90.7 minus the stated 0.2 tolerance [A11]) at the base-case porosity and infiltration setting | Move the porosity and infiltration settings toward the bull direction and retest, before concluding the architecture itself has failed | The tornado table shows porosity and infiltration are the two inputs most under the formulator's own control, so a shortfall there is a formulation fix, not evidence against the underlying optics |
| Measured contrast ratio below 0.998 [A12] after a porosity-and-infiltration retest | Increase the seal-coat thickness toward its bear-case setting (20 micron, [A28]) and retest once more | A thicker seal coat trades a small amount of the air-network's porosity advantage for hiding margin, a known, bounded cost already quantified in table T14 |
| b* after accelerated weathering exceeds the unexposed baseline's 1.4 by more than a stated margin | Hold the proposal at the Gate 1 stage (section 23) until the seal-latex chemistry is adjusted | Durability and yellowing resistance (W-K2) is a named brief challenge, not a secondary concern, and a formulation that trades whiteness for durability has not actually solved the brief |
| Batch cost exceeds the model's ₹12.0 per square metre base case by more than a stated tolerance | Re-cost against the actual batch's extender and latex grades before concluding the economics have failed | Section 20.2 already shows the model's own cost bridge leaves a reconciliation gap attributable to extender choice; a real batch's specific supplier prices would move the figure in ways the model, built on assumption-register prices, cannot anticipate exactly |
| Any unit operation beyond mixing, milling and filling is required at pilot scale | Treat W-K5 (manufacturing complexity) as unresolved and escalate to process engineering before any Gate 1 decision | The entire premise of the proposal, stated throughout this document, is that nothing changes for the painter and nothing new is required of the plant; a pilot that needs new equipment has quietly broken that premise |

These rules are themselves a plan, stated now so the eventual lab programme has a decision structure to run against rather than discovering, panel by panel, what a given result should mean. Section 23 picks up from here and places these decision points onto a calendar.

### 22.6 Handling the raw materials safely while the lab programme runs

The brief itself asks for a perspective on raw-material handling [W-Q7], and the fine titanium dioxide and fine precipitated calcium carbonate powders this architecture depends on both carry published exposure limits the lab programme has to respect, independently confirmed by the research lanes rather than assumed.

| Material | Exposure limit | Source | Status |
|---|---|---|---|
| Titanium dioxide, total dust | 15 mg/m³, 8-hour time-weighted average | OSHA permissible exposure limit | Enforceable in the United States; used here as the most conservative widely cited figure [R-E34] |
| Titanium dioxide, respirable, nanoscale particles | 0.2 mg/m³, 8-hour time-weighted average | ACGIH, 2021 | Recommended, not a US enforceable limit [R-E35] |
| Titanium dioxide, fine (2011 recommendation) | 2.4 mg/m³, time-weighted average | NIOSH Current Intelligence Bulletin 63 | Recommended [R-E36] |
| Titanium dioxide, ultrafine (2011 recommendation) | 0.3 mg/m³, time-weighted average | NIOSH Current Intelligence Bulletin 63 | Recommended [R-E36] |
| Titanium dioxide carcinogenicity | Group 2B, possibly carcinogenic to humans | IARC Monograph Volume 93 | Based on animal inhalation studies; ACGIH separately classifies the same material A4, not classifiable as a human carcinogen [R-E38, R-E40] |
| Precipitated calcium carbonate | Not classified under GHS | Two independent safety data sheets (Univar, Mississippi Lime) | Both note mechanical irritation of eyes, skin and the upper respiratory tract from dust, short of a formal hazard classification [R-E43 to R-E46] |

This table makes the same point section 22.3 makes about the optical standards: the exposure-limit literature does not speak with one voice. OSHA's enforceable figure and NIOSH's recommended figures differ by an order of magnitude because they are scoped differently (total dust against respirable fraction, enforceable against recommended), and the lab programme's own handling protocol states which figure it is working to rather than quoting the most convenient one. None of this changes the chemistry of the proposal; the fine extender and fine pigment this architecture needs are the same materials conventional premium emulsions already use, at a different particle size and a different film architecture, not a new category of hazard.

### 22.7 The specimen plan, stated as a plan

Table 22.7 states, in advance of any work starting, how many panels the design of experiments in section 22.2 would need and how long each measurement would take, so the lab programme has a sized plan to run against rather than an open-ended list of tests. These are planned counts, not a report of specimens already made.

| Test | Planned specimen count | Planned duration | Feeds which Gate |
|---|---|---|---|
| Porosity-and-infiltration factorial (3 × 3 cells) | 3 panels per cell, 27 panels in total | 4 to 6 weeks, including cure time | Gate 0 |
| FIB-SEM cross-sections, at the factorial cell closest to the base case | 3 cross-sections | 2 to 3 weeks, subject to shared-facility access | Gate 0 |
| Hiding and contrast ratio (ISO 6504-3, stating which edition) | 3 panels per factorial cell, drawn from the same panels above | Concurrent with the factorial | Gate 0 |
| QUV accelerated weathering | 6 panels (3 baseline, 3 proposal), run continuously from month zero | Several months, running in parallel with every other phase | Gate 1 |
| Pilot-batch costing | 1 full production-scale batch | Within phase 2 of the roadmap (section 23.1) | Gate 1 |

---

## 23. Roadmap: lab in six months, interior pilot in twelve, three horizons with gates

**Answer.** The roadmap runs lab validation first, at six months, an interior-emulsion pilot at twelve to eighteen months, and a staged scale decision after that, following the stage-gate discipline of naming a kill or proceed decision at each boundary rather than assuming continuation [Cooper, stage-gate]. The three McKinsey time horizons frame what the company is doing at each stage: horizon one defends the current premium-emulsion business unchanged; horizon two is the air-network base-coat system itself, the base case of this whole document; horizon three is the organic-crystal variant that the twelve-design screen already flagged as reaching an 81 percent saving under the same test [T8, S12]. A VRIO read of the proposal shows it is valuable and, on the prior-art search conducted for this project, rare, but only moderately inimitable on its own, which is exactly why the roadmap pairs a patent-filing step with the pilot stage rather than leaving the idea undefended once it becomes visible outside the company.

### 23.1 The roadmap as a Gantt, in table form

| Phase | Months | What happens | Gate at the end |
|---|---|---|---|
| Phase 1: Lab validation | 0 to 6 | Bench-scale base-coat and seal-coat panels built per the design of experiments in section 22.2; hiding, contrast ratio, porosimetry and FIB-SEM measurements run; accelerated weathering (QUV) begun in parallel, running through later phases since it needs months of exposure regardless of when it starts | Gate 0: does the base case reproduce the model's pass marks (table 22.1) in a real panel |
| Phase 2: Interior pilot | 6 to 18 | A limited pilot production run on existing mixing, milling and filling lines, in one interior-emulsion product line and one or two cities, with the batch costing check from section 22.5 run against the actual pilot batch; QUV exposure results from phase 1 become available partway through this phase | Gate 1: does the pilot batch meet the pass marks at pilot scale, hold its cost within tolerance, and show no new equipment requirement |
| Phase 3: Horizon 2 scale-up | 18 to 36 | Roll-out across the interior-emulsion portfolio named in section 19 (Apcolite, Tractor, Royale tiers); exterior-formulation adaptation work (hydrophobic pore treatment, section 15) begins in parallel; patent filing on the specific combination (section 23.3) completed before this phase opens, not after | Gate 2: does the adoption curve and the realised cost saving track the model's base case within the stated tolerance of sections 20 and 21 |
| Phase 4: Horizon 3 research | 36 and onward | Organic-crystal substitution research toward the 81 percent screen result [S12]; industrial and automotive coating adaptation begins, drawing on the water-and-solvent-borne scope the brief itself asks for [W-S1] | No gate yet defined; horizon 3 is deliberately run as an option, not a committed programme, per the three-horizons discipline below |

The staging deliberately keeps the accelerated weathering test running continuously from month zero, because it is the one test in the whole plan whose duration cannot be compressed by adding resources; every other phase's timeline is sized around waiting for that one clock rather than the other way round.

### 23.2 Three horizons, mapped onto what already exists and what the roadmap adds

| Horizon | Timeframe | What it is here | Status |
|---|---|---|---|
| Horizon 1: core | 0 to 2 years | The current premium-emulsion business, built on the conventional rutile-in-binder film the model calls the reference case throughout [T7] | Already exists, unchanged, and continues generating the cash the rest of the roadmap is funded from |
| Horizon 2: emerging | 2 to 5 years | The air-network base coat under a seal coat, this document's base case, a 39 percent titanium dioxide saving at base settings [T9] | The subject of phases 1 to 3 above; not yet built, but built on existing equipment and existing raw-material categories |
| Horizon 3: future | 5 years and beyond | The organic-crystal-in-air-network variant, reaching 81 percent saving in the twelve-design screen under the same test as every other design [S12, T8] | An option being kept open, not a committed investment; organic crystal whiteners are themselves a known but weak-in-binder material (table T8, row 9, at 84.1 brightness), and their 81 percent figure only works because they ride on the same air-network architecture horizon 2 would already have proven out |

The point of naming all three horizons explicitly, rather than only describing horizon 2, is the discipline the framework itself insists on: a company that only ever funds its horizon-one core starves its own future, and a company that chases horizon three before horizon two is proven has skipped the step that would actually de-risk it. Horizon 3's organic-crystal variant is not evaluated on its own merits here; it inherits whatever confidence horizon 2's lab and pilot results eventually earn.

### 23.3 VRIO: is the advantage sustainable, stated honestly

| VRIO test | Verdict | Reasoning |
|---|---|---|
| Valuable | Yes | ₹298 crore a year net materials saving at the base case [T13], a 39 percent titanium dioxide cut at base settings [T9], and a near-infrared reflectance gain with a link to Case Study 2 [T15] |
| Rare | Yes, on the evidence this project could find | The prior-art lane searched ten named precedents, from hollow polymer opacifiers to yolk-shell titanium dioxide to porous radiative-cooling paints to self-stratifying coatings, and found no single patent or paper claiming the specific combination of an above-critical-pigment-volume-concentration, air-continuous base coat sealed by a size-excluding topcoat, calibrated to titanium dioxide reduction at fixed whiteness, in the way this document proposes. Every individual piece of the idea is independently known; the combination, as searched, is not |
| Inimitable | Only moderately | The barrier is tacit process know-how in porosity control and seal-latex particle-size-to-pore-throat matching, not a hard-to-source input or a patent on any individual mechanism, since the individual mechanisms (hollow latex opacifiers, pigment spacing, size-exclusion sealing) are themselves already patented by others [D01 to D56]. A competitor with comparable formulation talent could in principle reproduce the specific combination once it is public, which is the honest reason the roadmap pairs this stage with a patent-filing step rather than relying on tacit knowledge alone |
| Organized | Yes | Asian Paints already runs in-house vinyl acetate monomer and vinyl acetate-ethylene manufacturing at Dahej, commissioned in 2026, which gives the company direct control over the latex particle-size tuning the seal coat depends on [A39, A41]; eight manufacturing facilities already exist to roll the system out on [A24]; a Research and Technology Centre described as the largest dedicated paint-company research and development facility in India [A23] and 250-plus scientists on a ₹124.9 crore annual research and development budget [A17] give the company the formulation capacity the lab programme in section 22 would need |

What this table shows is that the sustainable-competitive-advantage verdict depends on moving quickly on the "Inimitable" row's weak point, not on assuming the other three rows carry the advantage by themselves. A company with the resources to run the lab programme in section 22 and the manufacturing scale to roll it out, but without a filed patent, is one published research paper or one careful reverse-engineering effort away from losing the "Rare" row's advantage as well.

### 23.4 IP strategy, scoped honestly

Because the prior-art search in section 23.3 found every individual mechanism already claimed by someone else, a patent filing on this proposal has to be scoped narrowly to the specific combination and design rule, not to any individual component. The claim this roadmap anticipates filing covers the specific pairing of an above-critical-pigment-volume-concentration base coat, formulated with a defined porosity range and a fine-chalk extender that itself participates in scattering, sealed within the same two-coat system by a topcoat whose latex particle size is deliberately sized larger than the base coat's pore throats, with the combination calibrated against a stated titanium dioxide reduction at a stated brightness target. This document does not claim that search constitutes a professional patentability or freedom-to-operate opinion; the research lane's search covered ten named categories of prior art and a set of patent-database keyword searches, which is the right first screen for a student team but not a substitute for patent counsel before any filing, a limit this section states rather than skips past. The filing, if pursued, happens before phase 3 of the roadmap opens, per table 23.1, on the reasoning that the idea becomes substantially more visible once it is rolled out across a product portfolio than while it sits inside a pilot in one or two cities.

### 23.5 Capability already in place against capability still needed

The "Organized" row of the VRIO test in section 23.3 claims Asian Paints already has much of what the roadmap needs; table 23.5 separates what is already true from what the roadmap still has to add, so that claim is checkable rather than asserted once and left alone.

| Capability | Already in place | Still needed |
|---|---|---|
| In-house latex manufacturing, for seal-coat particle-size control | Yes: vinyl acetate-ethylene capacity at Dahej, 150,000 tonnes per annum, commercial production commenced 17 September 2026 [A39, A41] | Qualifying a specific particle-size grade against the pore-throat target in section 22.2 |
| Manufacturing scale to roll the system out | Yes: eight manufacturing facilities across the decorative portfolio [A24] | Confirming no new unit operation is required at each site (the Gate-1 test in table 22.5) |
| Formulation and research capacity | Yes: a Research and Technology Centre described as the largest dedicated paint-company facility in India [A23], 250-plus scientists and a ₹124.9 crore annual research and development budget [A17] | Allocating that capacity specifically to the design of experiments in section 22.2, which has not yet been done |
| Characterisation instrumentation (FIB-SEM, porosimetry) | Not confirmed by this project's research; likely available through a shared or university facility, not confirmed as in-house | Securing access, and the lead time that access takes, before Gate 0 can begin |
| Patent filing capacity | Not assessed in this project's research | Engaging patent counsel for a freedom-to-operate opinion beyond the research lane's own keyword search, per section 23.4 |

### 23.6 The gates, at a glance

Table 23.6 pulls the decision rules already stated in section 22.5 together with the calendar in section 23.1, so a reader can see, in one place, which specific pass mark opens which specific gate.

| Gate | Opens after | Closes on | Pass marks that must hold (section 22.1 and 22.5) |
|---|---|---|---|
| Gate 0 | Phase 1 (lab validation) | Month 6 | Y at least 90.7, contrast ratio at least 0.998, porosity and infiltration within the tested factorial's base cell |
| Gate 1 | Phase 2 (interior pilot) | Month 18 | Field-applied seal-coat thickness within tolerance, batch cost within tolerance of ₹12.0 per square metre, no new equipment required, QUV results available and within the stated b* tolerance |
| Gate 2 | Phase 3 (horizon 2 scale-up) | Month 36 | Realised adoption and realised cost saving tracking the base case within the stated tolerance of sections 20 and 21, patent filing complete |

---

## 24. Risks: what surrounds the rutile decides most of the answer

**Answer.** The single largest risk to this whole proposal is physical, not commercial: whether binder actually wets and films the rutile pigment inside the base coat, or whether the pigment genuinely sits in open air, moves the titanium dioxide saving from 21 percent to 65 percent in the model's own tornado analysis, a wider swing than every other risk in this section combined [T14]. Around that central risk sit eleven further risks this section registers with a probability, an impact, an early-warning signal and a named response, plus a pre-mortem exercise that asks what a failure eighteen months from now would actually look like, and a short account of which risks the roadmap's gates (section 23) already defuse before they can compound.

### 24.1 The risk register

| # | Risk | Probability | Impact | Early signal | Response | Owner |
|---|---|---|---|---|---|---|
| 1 | Binder preferentially wets the rutile, collapsing the surroundings advantage toward the bear case | Medium | High | FIB-SEM cross-sections show binder films penetrating the pore walls beyond the model's bear-case assumption | Adjust seal-coat chemistry or reduce base-coat binder share before Gate 1 | Formulation R&D |
| 2 | Base-coat porosity falls short of the 25 to 45 percent target range | Medium | High | Porosimetry on pilot panels reads below 25 percent | Adjust extender particle-size distribution and packing | Process engineering |
| 3 | Seal-coat infiltration into the base coat exceeds the 25 percent bear-case setting under real painter application technique | Medium to high | Medium | FIB-SEM shows deeper-than-planned seal-latex penetration at the interface | Increase seal-latex particle size relative to the pore throat | Formulation R&D |
| 4 | Painters apply a thinner seal coat than the 12 to 20 micron plan to save material or time | Medium | High | Field dry-film-thickness checks during the pilot show under-thickness coats | Enforce technical-data-sheet minimums through the painting-services channel and installer training | Technical services, painting services division |
| 5 | The proposal's b* (1.5) drifts further from the baseline (1.4) under exterior ultraviolet exposure, a visible yellow cast | Medium | Medium | QUV accelerated weathering shows b* rising faster than the baseline's own weathering curve | Hold at Gate 1 until seal-latex chemistry is adjusted for ultraviolet stability | R&D |
| 6 | Fine precipitated calcium carbonate at the specific paint grade needed (0.6 micron) cannot be sourced at a confirmed, dated Indian price | Medium | Medium | Supplier qualification trials come back above the model's ₹25-per-kilogram assumption | Direct qualification with named Indian producers (Gulshan Polyols and others) ahead of Gate 1 | Procurement |
| 7 | The model's acrylic-binder footprint assumption (2.5 kilograms of carbon dioxide equivalent per kilogram) sits roughly half of the one directly sourced figure found in this project's own research, 5.2 kilograms per kilogram on a solids basis, with the two figures on different system boundaries | Low to medium | Medium | A boundary-matched life-cycle assessment, commissioned before the footprint claim is used in any external communication, confirms a figure closer to the higher estimate | Commission a properly scoped life-cycle assessment before quoting the footprint externally | Sustainability team |
| 8 | Titanium dioxide price moves against the ₹250-per-kilogram base case | Medium | Medium | Market price data moves outside the ₹200-to-₹300 bear-to-bull band | Index-linked procurement contracts; the physical saving (grams avoided) is unaffected either way, only its rupee value | Finance, procurement |
| 9 | The anti-dumping duty on Chinese titanium dioxide is never notified, or is notified at a different rate than recommended | Medium | Low to medium | CBIC notification tracker shows no action, or a different duty figure, within the expected window | Track CBIC notifications; the direction of the cost case does not depend on the duty, only its baseline magnitude | Regulatory affairs |
| 10 | The addressable-share (40 percent) and adoption-rate (40 percent) assumptions, both team judgement rather than externally verified figures, prove too optimistic | Medium | High | Pilot-phase uptake (section 23, phase 2) tracks below the bear-case 20 percent adoption pace | Phase capital commitment through Gate 1 and Gate 2 rather than committing to full scale-up before pilot data exists | Business unit lead |
| 11 | A competitor files on, or publishes, a similar architecture before this project's own patent filing (section 23.4) | Low to medium | Medium | A competing patent application or peer-reviewed paper surfaces describing a comparable combination | Expedite the narrowly scoped patent filing ahead of the horizon-2 roll-out, per section 23.4 | Legal, intellectual property |
| 12 | Titanium dioxide's own carcinogenicity classification shifts (it already carries a contested status, Group 2B under IARC against A4 under ACGIH) | Low | Low | A regulator reclassifies titanium dioxide, as the European Union has already done for its powder form on procedural grounds [B50 to B54] | Treat as upside optionality: a solution that reduces titanium dioxide mass is reputationally positive under either classification outcome | Regulatory affairs |

### 24.2 A 5-by-5 heat map, as a table

| Impact \ Probability | Low | Low-medium | Medium | Medium-high | High |
|---|---|---|---|---|---|
| High | | | 1, 2, 4, 10 | | |
| Medium-high | | | | | |
| Medium | | 7, 11 | 5, 6, 8 | 3 | |
| Low-medium | | | 9 | | |
| Low | 12 | | | | |

Each risk sits in the cell its own register row gives it. The highest-scoring cell, high impact at medium probability, holds four risks together: risk 1 (binder wets the rutile), risk 2 (porosity falls short), risk 4 (painters thin the seal coat) and risk 10 (adoption proves optimistic). Risk 3 (seal-coat infiltration) carries the register's highest probability, medium to high, at medium impact. Risk 1 is also the single biggest swing in the model's own tornado table `[T14]`, so the physics-based sensitivity sweep and the qualitative register agree on where the first panels should look, and the deck's 5 by 5 heat map on slide 7 draws exactly these placements.

### 24.3 Pre-mortem: imagining the failure before it happens

Following Gary Klein's pre-mortem method, the team imagined, before any lab work begins, that eighteen months from now the programme has failed, and asked why.

- **Story one: the panels never matched the model.** The lab ran the design of experiments in section 22.2, and every cell came back closer to the bear case than the base case; binder wetted the pigment more thoroughly than assumed, porosity settled lower than planned, and the realised saving landed near 20 percent rather than 39 percent. This maps directly to risk 1 and risk 2, and is the single most consequential failure mode this document can imagine, because it would mean the core physical premise, not merely an execution detail, was optimistic.
- **Story two: it worked in the lab and failed in the field.** The pilot's panels passed every pass mark in table 22.1, but once painters applied the seal coat with their own technique rather than a lab's controlled application, the real seal-coat thickness and infiltration drifted outside the tested range, and field complaints about durability or appearance surfaced within a year. This maps to risk 3 and risk 4, and is the reason the roadmap's Gate 1 specifically tests a pilot batch under field application conditions, not only a lab-cast panel.
- **Story three: the economics never held at scale.** The lab and pilot both passed, but when procurement went to source the fine precipitated calcium carbonate and the specialised seal latex at the volumes horizon 2 would need, prices came in well above the assumption register, and the ₹298 crore base-case saving shrank to something closer to the bear case's ₹38 crore once real supplier quotes replaced assumed prices. This maps to risk 6 and risk 8, and is why Gate 2 in section 23.1 specifically re-tests the realised cost saving against the model's tolerance before full roll-out.
- **Story four: someone else got there first.** A competitor or an academic group published a closely related combination before this project's patent filing was complete, and the narrow but real novelty this document claims in section 23.3 evaporated. This maps to risk 11, and is the reason the roadmap places the filing before phase 3's wider visibility, not after.

Each of these four stories traces back to a risk already named in table 24.1, which is the point of running the exercise after building the register rather than instead of it: the pre-mortem did not surface a new category of failure the register had missed, but it did make the two highest-stakes stories (one and three) feel concrete enough that the roadmap's gates were built specifically to catch them early rather than at the end of a capital commitment.

### 24.4 Residual risk after the roadmap's gates

| Risk | Rating before mitigation | Mitigation (from section 23) | Rating after mitigation |
|---|---|---|---|
| 1. Surroundings assumption | High impact, medium probability | Gate 0 lab validation specifically targets this via FIB-SEM before any pilot capital is spent | High impact, lower probability once Gate 0 passes |
| 3. Seal-coat infiltration | High impact, medium-high probability | Gate 1 pilot specifically tests field application, not only lab panels | High impact, lower probability once Gate 1 passes |
| 10. Adoption assumption | High impact, medium probability | Capital phased through Gate 1 and Gate 2 rather than committed up front | Lower impact, since a shortfall is caught before full-scale capital is spent, not after |
| 11. Competitive filing | Medium impact, low-medium probability | Patent filing scheduled before phase 3's wider visibility | Lower probability once filed |

No gate removes risk 1 entirely; it can only be tested earlier and more cheaply than it would otherwise be discovered, which is the actual purpose of a stage-gate roadmap under uncertainty, not a guarantee that the physics will cooperate.

### 24.5 Quantified trigger thresholds for the top four risks

Where the model's own tornado table already gives a numeric range, the trigger for a risk response can be stated as a number rather than only as a qualitative early signal, tightening the register in table 24.1 for the risks that matter most.

| Risk | Quantified trigger | Tag |
|---|---|---|
| 1. Surroundings assumption | Measured titanium dioxide saving at Gate 0 falls below 25% (closer to the bear-case 21% than the base-case 39%) | [T14] |
| 2. Base-coat porosity | Porosimetry reads below 30% (below the midpoint of the 25% to 45% range) | [A05] |
| 3. Seal-coat infiltration | FIB-SEM shows infiltration above 15% of pore volume (above the base-case 10%, approaching the bear-case 25%) | [A07] |
| 4. Seal-coat thickness under-application | Field dry-film-thickness readings average below 15 microns (below the base-case 16.4 micron target) | [T9] |

### 24.6 Ownership and reporting cadence

A risk register that is never reopened is only a document; table 24.6 states how often each risk category is reviewed and against what, so the register in table 24.1 is a living input to the roadmap's gates rather than a one-time exercise.

| Risk category | Review cadence | Reviewed against |
|---|---|---|
| Physical and formulation risks (1, 2, 3, 5) | At every gate (section 23.6), and monthly during Phase 1 | The quantified triggers in table 24.5 |
| Supply and sourcing risks (6, 8, 9) | Quarterly | Supplier quotes and the CBIC notification tracker |
| Business and adoption risk (10) | At Gate 1 and Gate 2 | Realised pilot uptake against the bear-case adoption floor |
| Intellectual property risk (11) | Continuous, via a standing patent and literature watch | New filings or publications matching the combination in section 23.4 |
| Regulatory and reputational risk (7, 12) | Annually, or on any external reclassification event | Published regulator or standards-body text, not secondary commentary |

### 24.7 A tally of the register, by category

Table 24.7 counts the twelve risks in table 24.1 by the category each one belongs to, so the shape of the register is visible at a glance: this proposal's risk is weighted toward the physics itself, not toward commercial or regulatory exposure, which is consistent with section 24's own opening finding that the surroundings assumption alone outweighs every other risk in the register.

| Category | Risks (by number) | Count |
|---|---|---|
| Physical and formulation | 1, 2, 3, 4, 5 | 5 |
| Supply and sourcing | 6, 8, 9 | 3 |
| Business and adoption | 10 | 1 |
| Intellectual property and competitive | 11 | 1 |
| Regulatory and reputational | 7, 12 | 2 |
| Total | | 12 |

Five of the twelve risks, nearly half the register, sit in the physical-and-formulation category, and two of those five (risks 1 and 3) are also the two cells the heat map in table 24.2 places closest to its highest-priority corner. A reader auditing where this programme's effort should go first can read that answer directly off tables 24.2 and 24.7 together, without needing to re-derive it from the model.

---

## 25. A bonus for Case Study 2: the air network sends back more near-infrared

**Answer.** In our model, the same air-network architecture that cuts titanium dioxide for whiteness also reflects more near-infrared light than the premium baseline, 71.1 percent against 63.7 percent at 1,500 nanometres over a 25 percent grey substrate [T15], a link worth stating because Case Study 2 (thermal management) asks for exactly this kind of solar-heat-reflection effect. The figure is an indicator computed on four discrete wavelengths over one substrate inside the same optical model built for Case Study 1, not a measured solar reflectance index, not an emissivity measurement in the atmospheric window that actually drives radiative cooling, and not a claim that this architecture would perform as a cool-roof coating in India's humid climate, where the research lane for Case Study 2 found that high humidity specifically undermines radiative cooling's physical mechanism [G22].

### 25.1 What the model actually shows

| Wavelength | Reference reflectance | Proposal reflectance | Gain |
|---|---|---|---|
| 800 nm | 87.0% | 87.9% | 0.9 points |
| 1000 nm | 82.8% | 86.3% | 3.5 points |
| 1200 nm | 73.3% | 79.4% | 6.1 points |
| 1500 nm | 63.7% | 71.1% | 7.4 points |

*nm = nanometres.*

The gain grows with wavelength, from under one point at 800 nanometres to 7.4 points at 1,500 nanometres, consistent with the same mechanism driving the whiteness result: an air-continuous medium scatters more efficiently than a binder-continuous one across the spectrum, and the effect compounds as the wavelength grows relative to the particle and pore scale, because that is the same reasoning that drives table T4's finding that rutile scatters 1.52 times more per unit volume in air than in binder, carried here into a part of the spectrum visible-light optics does not normally cover. That is the full extent of the finding: a reflectance table at four points, over one grey substrate, inside the same model built and checked for Case Study 1. It is not a solar reflectance index, which is a standardised, solar-spectrum-weighted average across the full 300 to 2,500 nanometre range under a defined test method [S91, S92, model_tables T2]; it is not a thermal emittance figure, which is the second, equally important half of any cool-roof or cool-wall claim; and it was not measured outdoors, on a roof, under India's own climate.

### 25.2 Why this cannot be read as a cool-roof claim

The research lane dedicated to Case Study 2's landscape found the strongest, most India-relevant evidence available on this exact question, and it cuts directly against over-reading the figures in table 25.1. A peer-reviewed study tested a titanium-dioxide-based radiative-cooling coating on rooftops in Mumbai, Nagpur and Prayagraj, and found that high relative humidity specifically reduces atmospheric transmittance in the 8-to-13-micron thermal window that radiative cooling depends on, so the Mumbai site, at 83.77 percent average relative humidity on the test day, achieved subambient cooling only before 9 a.m., after 4 p.m., and at night, not during the hours when a cool-roof claim would matter most [G17 to G22]. The same paper's own abstract states there is "a dearth of comprehensive studies examining their performance under tropical conditions" [G23], a finding this document takes as a caution against assuming any reflectance gain translates cleanly into a cooling benefit in India's climate. A separate, unrelated 2022 paper found that a conventional commercial white paint's solar reflectance can fall from 0.866 to 0.788, a 9.0 percent drop, under accelerated soiling that simulates about three years of real exposure, while a purpose-built anti-aging cooling paint held almost steady, from 0.930 to 0.926 [G27, G28]; nothing in this project's own model accounts for soiling, ageing, or any time-dependent loss of the near-infrared gain shown in table 25.1, which is itself computed only for a fresh, as-made film.

Table 25.2 sets the model's own four-point indicator beside the specific humidity and cooling-differential figures the Mumbai, Nagpur and Prayagraj study actually measured, so the gap between an indoor spectral number and an outdoor field result is visible rather than asserted.

| City (ACS Omega study) | Average relative humidity on the test day | Measured maximum cooling differential | What table 25.1 alone cannot show |
|---|---|---|---|
| Mumbai | 83.77% | Up to 7.9 degrees C cooler than a bare box, but only outside peak sun hours | Whether this architecture's near-infrared gain would survive Mumbai's humidity at all, since the limiting factor there is atmospheric-window emissivity, which this model does not compute |
| Nagpur | 42% | Up to 9.2 degrees C cooler than a bare box | A drier site where radiative cooling performs better in the cited study; this model has no location-specific humidity term to say whether the same would hold here |
| Prayagraj | 45% | Up to 8.1 degrees C cooler than a bare box | Same limitation as Nagpur |

*Source: [G19, G20, G21].*

India's own standard for this product category, IS 17218:2019, "Solar Thermo-Reflective Exterior Coating for Cooling of Roof Top," exists and is currently under a Bureau of Indian Standards working-group revision whose industry members include Asian Paints itself [G39, G40], which is the strongest direct evidence this project's research found that the company is already active in this specific standards conversation, separate from and prior to anything in this document. No named Asian Paints cool-roof product could be confirmed in the research lanes [G49]; the company's own public material describes a generic "cool roof coating" formulated for high solar reflectivity and infrared emissivity without naming a specific stock-keeping unit [G50]. The near-infrared figures in table 25.1 are offered to that existing conversation as one data point from a model built for a different case, not as a submission to Case Study 2 and not as evidence that Asian Paints' committee work should change direction.

### 25.3 What a full solar test would actually need

| Requirement | What it adds beyond this document's T15 | Reference |
|---|---|---|
| Solar-weighted reflectance across the full solar spectrum (roughly 300 to 2,500 nanometres), not four discrete points | A single, standardised number (solar reflectance) comparable across products and climates, following ASTM E903 or ASTM C1549-style integration against a standard solar spectrum | [G35, G36, G41] |
| Thermal emittance in the 8-to-13-micron atmospheric window | The second half of any cooling claim; a high-reflectance, low-emittance surface still heats under some conditions, and this project's model computes neither emittance nor the atmospheric window at all | [G22, S91/S92 model optics] |
| Accelerated soiling (for example, ASTM D7897-style cycling) | A check on whether the near-infrared gain survives realistic dust and dirt accumulation over roughly three years of simulated exposure, which the Nature Communications anti-aging study found can erase most of a conventional white paint's advantage [G27 to G30] | [G27 to G32] |
| Outdoor field testing across humidity regimes, following the ACS Omega Mumbai, Nagpur and Prayagraj protocol | A direct measurement of subambient cooling (or its absence) under India's own range of humid and dry climates, rather than an indoor spectral reflectance number alone | [G17 to G26] |
| Comparison against IS 17218:2019's own numeric thresholds, once read in full | A check against the specific Indian standard Asian Paints already participates in revising, rather than against the differently-scoped and internally conflicting ECBC thresholds (0.70/0.75 in one cited edition, 0.60/0.90 in another) or the higher American ASTM C1483 threshold (reflectance and emittance both at least 0.8) | [G35 to G41] |

None of these five tests has been run, and this section does not claim otherwise; it names them so that if this architecture's near-infrared behaviour is ever pursued further, it is pursued through the same stated-in-advance test plan this document applies to Case Study 1's own lab programme in section 22, rather than through an unverified extrapolation from a four-point indoor spectral table built for a different case.

The purpose of including this bonus section at all is narrower than it might first appear. This document does not submit a Case Study 2 solution; sections 5 and 6 of this research already give Case Study 2 its own full landscape treatment and its own eight-idea screen, with a different recommendation (a humidity-recharged evaporative and radiative layer) named as the best idea if that case were the one chosen. What this section adds is a single, carefully caveated observation that falls directly out of the Case Study 1 optical model without any extra work: an architecture built to save titanium dioxide for whiteness happens, as a side effect of the same physics, to reflect more of the near-infrared spectrum too. A judge reading both case treatments in this document can see that the two are connected by one underlying mechanism, reducing how much of the film's optical budget goes into the pigment and how much goes into air, rather than treating whiteness and thermal management as two unrelated problems that happened to be solved by the same team.
