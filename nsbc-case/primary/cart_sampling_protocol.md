# Cart-sampling protocol (never place an order)


| When (IST) | Who | What |
|---|---|---|
| 28 Sep, by 11 PM | User | Create the Google Form from §6.2 and post the link in the first groups |
| 29 Sep, 9 AM | User | Post in the remaining groups (at least 8 in total plus 2 alumni groups) |
| 29 Sep, 12:30 to 2 PM | Two team members | Cart sampling, lunch slot, all four addresses |
| 29 Sep, 8 to 10 PM | Two team members | Cart sampling, dinner slot; one survey reminder at 9 PM |
| 29 Sep, 10:30 PM | User | Save `cart_log.csv`, `toing_menu_scan.csv` and the screenshots into `nsbc-case/primary/`; tell the agent "carts in" |
| 30 Sep, 1:00 PM | User | Close the form, download the CSV to `nsbc-case/primary/survey_responses.csv`, tell the agent "survey in" |
| 30 Sep, 1 to 6 PM | Agent | §6.6 update, model re-run, rebuild the affected slides, all validators |
| 30 Sep, by 9 PM | User | Figma → File → Export → PDF; review; submit well before 11:59 PM |



**Protocol (write verbatim into the .md file):**

1. **Never place an order.** Build the cart, open the checkout or bill summary, record, screenshot,
   then empty the cart.
2. **Apps:** Toing (Play Store or App Store), Swiggy, Zomato. Log in with a team member's own
   account. If Toing is not installable or not serviceable at the addresses, log one row per
   address with `note = "Toing unavailable"` and continue with the other two apps.
3. **Addresses** (set the delivery location by searching the landmark; do not save a home
   address):

   | Code | Landmark to search | Why |
   |---|---|---|
   | P1 | Symbiosis Law School, Senapati Bapat Road, Pune | Dense college cluster, Toing's launch city |
   | P2 | Viman Nagar, Pune (Symbiosis International University, Viman Nagar campus) | Students plus young earners |
   | P3 | MIT World Peace University, Kothrud, Pune | Large single campus with hostels |
   | P4 | Rajiv Gandhi Infotech Park Phase 1, Hinjewadi, Pune | Young-earner office cluster |

4. **Slots:** lunch 12:30 PM to 2:00 PM and dinner 8:00 PM to 10:00 PM, both on 29 Sep 2026. If
   a slot is missed, 30 Sep lunch is the fallback (note it in the `date` column).
5. **Baskets per address and slot:**
   - Toing: B1 = the cheapest filling meal (a thali, rice bowl or combo, not a drink or dessert);
     B2 = an item total as close to ₹149 as possible.
   - Swiggy: B1 = a single meal as close to ₹99 as possible (use the app's "99 Store" or
     "Under ₹150" filter if shown); B3 = item total ₹280 to ₹320; B4 = item total ₹650 to ₹750.
   - Zomato (addresses P1 and P4 only): B1, B3 and B4 as for Swiggy.
   - Target: Toing 16 carts, Swiggy 24, Zomato 12, a total of 52. Minimum for use in the model:
     8 Toing carts (§6.6).
6. **Record every fee line exactly as the bill shows it**, one row per cart, in
   `cart_log.csv`. If a fee is struck through and shown as ₹0, record 0 in the fee column and the
   struck value in `struck_fees`. Record any auto-applied discount in `discount`. If the app shows
   a membership offer (Swiggy One, Zomato Gold), record its text in `note`.
7. **Also record per Toing address, once per slot:** the number of restaurants listed on the home
   screen (scroll to the end), and the prices of the first 20 meals shown. Put these in the
   separate file `primary/toing_menu_scan.csv`.
8. **Screenshot every checkout** to `primary/screens/<app>_<addr>_<slot>_<basket>.png`. The
   screenshots are evidence; they are not placed in the deck.

**`cart_log.csv` header (write exactly this single line; the team fills the rows):**
```text
cart_id,app,addr,date,time,slot,basket,restaurant,items,item_total,delivery_fee,platform_fee,packaging_fee,small_cart_fee,other_fees,taxes_shown,discount,grand_total,eta_min,distance_km,struck_fees,note
```
Conventions: `app` ∈ {Toing, Swiggy, Zomato}; `slot` ∈ {L, D}; `basket` ∈ {B1, B2, B3, B4}; money in
plain rupees without the ₹ sign (e.g. `99`, `12.5`); blank if not shown; `taxes_shown` is the
total of any GST or "taxes and charges" line the app shows separately.

**`toing_menu_scan.csv` header:**
```text
addr,date,slot,restaurants_listed,p1,p2,p3,p4,p5,p6,p7,p8,p9,p10,p11,p12,p13,p14,p15,p16,p17,p18,p19,p20
```

