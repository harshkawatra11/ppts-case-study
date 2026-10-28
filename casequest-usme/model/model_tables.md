# CaseQuest model tables (hash 8fe043dc97)

Every value is a team assumption or a model output unless a row says otherwise. Verify inputs through the research lanes before freeze.

### T1. Assumption register
| ID | Input | Bear | Base | Bull | Basis |
|---|---|---|---|---|---|
| A01 | INR per USD | 88 | 88 | 88 | RBI reference rate, verify at freeze (Lane F) |
| A02 | USD retail price abroad | 40 | 45 | 50 | representative handmade decor or textile item; Lane B listings scan |
| A03 | kg packed weight | 0.5 | 0.5 | 0.5 | representative item |
| A04 | INR seller product cost | 900 | 800 | 750 | cluster ex-works cost; Lane B |
| A05 | INR direct parcel freight 0.5 kg | 1100 | 1000 | 900 | India Post ITPS and courier aggregator quotes; Lane F |
| A06 | platform referral share of retail | 0.15 | 0.15 | 0.15 | Amazon and Etsy fee pages; Lane B |
| A07 | minutes of seller paperwork per direct parcel | 60 | 45 | 35 | case: forms, portals, agents; Lane E |
| A08 | INR value of one seller hour | 150 | 150 | 150 | team assumption |
| A09 | INR agent or CHA fee per direct parcel | 150 | 120 | 100 | Lane E |
| A10 | return rate, direct parcel | 0.22 | 0.2 | 0.18 | CBIC cites 20 to 25% for e-commerce exports; Lane D |
| A11 | share of direct returns abandoned abroad | 0.85 | 0.8 | 0.75 | case: sellers absorb the loss; Lane E |
| A12 | INR cost to bring one parcel back and clear it | 1500 | 1300 | 1200 | return freight plus clearance; Lane F |
| A13 | INR bulk air freight per chargeable kg, 100 kg plus | 450 | 380 | 320 | forwarder benchmarks; Lane F |
| A14 | chargeable over packed weight in a carton | 1.3 | 1.25 | 1.2 | volumetric factor |
| A15 | USD destination last-mile per order | 6.0 | 5.5 | 5.0 | USPS Ground Advantage or Royal Mail tables; Lane F |
| A16 | USD warehouse pick, pack and storage per order | 5.0 | 4.5 | 4.0 | 3PL and FBA fee tables; Lane F |
| A17 | EOR or consolidator margin on product cost | 0.1 | 0.08 | 0.07 | Lane B |
| A18 | minutes of seller work per order, consolidated | 10 | 6 | 4 | batch pickup |
| A19 | return rate, warehouse lane | 0.18 | 0.15 | 0.12 | faster delivery, local returns; Lane E |
| A20 | share of warehouse returns resold locally | 0.5 | 0.6 | 0.7 | Lane E |
| A21 | USD to process one local return | 4.0 | 3.5 | 3.0 | 3PL tables |
| A22 | unsold stock written off, share of units shipped | 0.1 | 0.07 | 0.05 | inventory risk |
| A23 | annual working capital cost | 0.12 | 0.11 | 0.1 | MSME lending rates; Lane D |
| A24 | months stock is held | 5 | 4 | 3 | turn assumption |
| A25 | destination duty and VAT difference between lanes | 0.0 | 0.0 | 0.0 | held equal; shown separately in research |
| A27 | minutes of seller paperwork per parcel with the cluster desk and pre-filled declaration | 25 | 15 | 10 | Lane E |
| A28 | pooled rate-card saving on direct parcel freight | 0.05 | 0.12 | 0.18 | cluster tender; Lane F |
| A29 | INR to bring a parcel back under matched duty-free re-import | 1200 | 950 | 800 | CBIC returns module; Lane D |
| A30 | unused (kept for ID stability) | 0.75 | 0.6 | 0.5 |  |
| A31 | share of direct returns routed to a pooled return point abroad | 0.5 | 0.65 | 0.8 | 3PL return networks; Lane F |
| A26 | INR a month fixed per SKU in the warehouse lane | 2500 | 2500 | 2500 | 3PL minimums |

### T2. Today's direct parcel, per order
| Line | bear | base | bull |
|---|---|---|---|
| price | ₹3,520 | ₹3,960 | ₹4,400 |
| fee | ₹528 | ₹594 | ₹660 |
| freight | ₹1,100 | ₹1,000 | ₹900 |
| admin | ₹300 | ₹232 | ₹188 |
| product | ₹900 | ₹800 | ₹750 |
| delivered | ₹692 | ₹1,334 | ₹1,902 |
| ret_loss | ₹2,390 | ₹2,132 | ₹1,950 |
| expected | ₹14 | ₹640 | ₹1,209 |
| cts | ₹1,758 | ₹1,531 | ₹1,337 |

### T3. Reformed parcel lane, per order
| Line | bear | base | bull |
|---|---|---|---|
| price | ₹3,520 | ₹3,960 | ₹4,400 |
| fee | ₹528 | ₹594 | ₹660 |
| freight | ₹1,045 | ₹880 | ₹738 |
| admin | ₹62 | ₹38 | ₹25 |
| product | ₹900 | ₹800 | ₹750 |
| delivered | ₹984 | ₹1,648 | ₹2,227 |
| ret_loss | ₹1,741 | ₹1,404 | ₹1,129 |
| expected | ₹385 | ₹1,038 | ₹1,623 |
| cts | ₹1,148 | ₹959 | ₹802 |

### T4. Consolidated warehouse lane, per order
| Line | bear | base | bull |
|---|---|---|---|
| price | ₹3,520 | ₹3,960 | ₹4,400 |
| fee | ₹528 | ₹594 | ₹660 |
| freight | ₹292 | ₹238 | ₹192 |
| lastmile | ₹528 | ₹484 | ₹440 |
| fulfil | ₹440 | ₹396 | ₹352 |
| eor | ₹90 | ₹64 | ₹53 |
| admin | ₹25 | ₹15 | ₹10 |
| product | ₹900 | ₹800 | ₹750 |
| wc | ₹45 | ₹29 | ₹19 |
| writeoff | ₹132 | ₹78 | ₹50 |
| delivered | ₹539 | ₹1,262 | ₹1,875 |
| ret_loss | ₹1,476 | ₹1,207 | ₹987 |
| expected | ₹176 | ₹892 | ₹1,532 |
| cts | ₹1,711 | ₹1,423 | ₹1,199 |

### T5. Expected contribution per order by lane
| Scenario | Today | Reformed parcel | Warehouse | Reformed minus today |
|---|---|---|---|---|
| bear | ₹14 | ₹385 | ₹176 | ₹371 |
| base | ₹640 | ₹1,038 | ₹892 | ₹398 |
| bull | ₹1,209 | ₹1,623 | ₹1,532 | ₹414 |

### T6. Base waterfall, today to reformed parcel
| Step | INR per order |
|---|---|
| Today, direct parcel | ₹640 |
| Paperwork at the cluster desk | ₹195 |
| Pooled rate card | ₹120 |
| Returns pooled abroad | ₹83 |
| Reformed parcel lane | ₹1,038 |

### T7. Today's contribution by return rate and freight (base)
| Return rate | ₹800 | ₹1,000 | ₹1,200 | ₹1,400 |
|---|---|---|---|---|
| 10% | ₹1,187 | ₹987 | ₹787 | ₹587 |
| 15% | ₹1,014 | ₹814 | ₹614 | ₹414 |
| 20% | ₹840 | ₹640 | ₹440 | ₹240 |
| 25% | ₹667 | ₹467 | ₹267 | ₹67 |
| 30% | ₹494 | ₹294 | ₹94 | −₹106 |

### T8. Tornado on the reformed-minus-today uplift (base ₹398)
| ID | Input | At bear | At bull |
|---|---|---|---|
| A28 | pooled rate-card saving on direct parcel freight | −₹70 | ₹60 |
| A07 | minutes of seller paperwork per direct parcel | ₹38 | −₹25 |
| A09 | INR agent or CHA fee per direct parcel | ₹30 | −₹20 |
| A27 | minutes of seller paperwork per parcel with the cluster desk and pre-filled declaration | −₹25 | ₹12 |
| A31 | share of direct returns routed to a pooled return point abroad | −₹14 | ₹14 |
| A05 | INR direct parcel freight 0.5 kg | ₹12 | −₹12 |
| A04 | INR seller product cost | ₹9 | −₹4 |
| A10 | return rate, direct parcel | ₹8 | −₹8 |
| A21 | USD to process one local return | −₹6 | ₹6 |
| A29 | INR to bring a parcel back under matched duty-free re-import | ₹0 | ₹0 |
| A20 | share of warehouse returns resold locally | ₹0 | ₹0 |
| A02 | USD retail price abroad | ₹0 | ₹0 |

### T9. Customs declarations per 10,000 orders
| Lane | Declarations |
|---|---|
| Direct parcel | 10,000 |
| Consolidated (40 orders a carton, 5 cartons a bill) | 50 |

### T10. Pilot budget
| Line | INR |
|---|---|
| Cluster export desks (6 x 4 staff x 12 months) | ₹1,15,20,000 |
| Seller onboarding, cataloguing, photography | ₹72,00,000 |
| Data link and dashboard (IEC, GSTIN, Udyam, eBRC) | ₹60,00,000 |
| First-shipment freight bridge (capped per seller) | ₹48,00,000 |
| Independent evaluation | ₹30,00,000 |
| Contingency (10%) | ₹32,52,000 |
| Total | ₹3,57,72,000 |

### T11. Pilot outcomes in our model
| Scenario | Active sellers | Orders months 7 to 12 | Seller gain vs today | Budget per active seller |
|---|---|---|---|---|
| bear | 600 | 21,600 | ₹0.80 crore | ₹59,620 |
| base | 960 | 57,600 | ₹2.29 crore | ₹37,262 |
| bull | 1320 | 118,800 | ₹4.92 crore | ₹27,100 |

### T12. Warehouse break-even orders per SKU a month
| Scenario | Against today | Against reformed parcel |
|---|---|---|
| bear | 15 | never at unit level |
| base | 10 | never at unit level |
| bull | 8 | never at unit level |

### T13. Option filter (team judgement)
| Option | Seller cost per order (30%) | Customs and tax integrity (25%) | Fiscal cost (5 = cheapest) (15%) | Time to deliver (15%) | Builds on the 2026 reforms (15%) | Weighted | Equal weights |
|---|---|---|---|---|---|---|---|
| New single-window export portal | 3 | 3 | 2 | 1 | 2 | 2.40 | 2.20 |
| Freight subsidy per parcel | 4 | 2 | 1 | 4 | 1 | 2.60 | 2.40 |
| Exempt low-value parcels from checks | 4 | 1 | 4 | 4 | 1 | 2.80 | 2.80 |
| Government export marketplace | 2 | 3 | 2 | 1 | 2 | 2.10 | 2.00 |
| Overseas warehouses for every cluster | 3 | 4 | 2 | 2 | 3 | 2.95 | 2.80 |
| Cluster desk, seller tiers, pooled rates and returns | 5 | 4 | 4 | 4 | 5 | 4.45 | 4.40 |

