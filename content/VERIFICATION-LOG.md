# Verification Log — Phase 1 expansion

Every recipe was written by an authoring agent, then handed to an **adversarial
verification agent** instructed to assume the writer was wrong until the evidence said
otherwise. The verifier audited seven axes and returned the corrected set with defects
fixed in place. This log is the audit trail.

**43 defects found and corrected** across 32 recipes: 3 P0, 28 P1, 12 P2.

| Axis | Severity band |
|---|---|
| Regional attribution — dish genuinely belongs to the region | P0 |
| Ingredient authenticity — traditional ingredients, no modernisations as canon | P0 |
| Quantity realism — weights and ratios that actually work | P0 |
| Timing arithmetic — prep/cook honest for the method written | P1 |
| Method completeness — temperatures, rests, sensory cues | P1 |
| Voice — banned-word list, British spelling, falsifiable sentences | P1 |
| Schema — field conformance and ranges | P1 |

---

## Corrections by severity

### P0 — would have shipped a wrong recipe (3)

**`anglesey-eggs`** · Wales  
*Issue:* The dish specified cannot hold the recipe. 900g potatoes plus ~400g leeks mash out to roughly 1.3kg (~1,240ml); add 8 egg halves (~200g), the cheese sauce (400ml milk + 80g roux + 125g Caerphilly = ~605g) and 40g crumbs, and the filling comes to ~2,145g, about 2,080ml. The method sends that into a '1.5-litre baking dish' — a 39% overfill that boils cheese sauce onto the oven floor. The quantities themselves match the canonical scale for this dish (8 eggs, 900g potatoes, serves 4), so the vessel is the error, not the ratios.  
*Fix:* Method step 5 now calls for a shallow 2.5-litre (4½ pint) dish and states the ~2-litre filling volume as the reason, leaving ~400ml of bubbling headroom. Ingredients and ratios untouched — the milk split (100ml to mash + 400ml to sauce = 500ml listed), the cheese split (125g + 50g = 175g listed) and the 40g:40g:400ml coating roux all reconcile correctly and were kept.

**`boxty`** · Northern Ireland  
*Issue:* Raising agent is roughly double the acid available to spend it. 1 tsp bicarbonate of soda against only 200 ml buttermilk leaves about 0.6 tsp unreacted — the house soda-bread working ratio is 1 tsp per 400 ml buttermilk, so this batter carries 2x the soda per unit of acid. Unreacted bicarb tastes soapy and metallic and casts the crumb grey, which is precisely the failure the cook's note warns against. There is no other acid in the batter; potato is near-neutral.  
*Fix:* Cut bicarbonate of soda from 1 tsp to 0.5 tsp, the correct dose for 200 ml of buttermilk. Buttermilk left at 200 ml because the batter needs that hydration and no more.

**`pea-and-ham-soup`** · Northern Ireland  
*Issue:* Broken pea-to-liquid ratio — the recipe does not produce soup. 500 g of dry split peas absorb roughly 1.3 litres as they collapse; against 2 litres of stock, minus ~300 ml lost over a 60-75 minute simmer with the lid ajar, only about 400 ml of free liquid survives. That is a stiff paste that will catch and scorch on the base long before the peas lose their chalky centres — exactly the failure the method's 'stir every 15 minutes' is trying and failing to hold off. At 4:1 stock-to-peas the recipe sits well below the 5:1-6:1 that this dish actually needs. Serves 6 was also overstated for the yield: the finished pan works out at about 570 g a bowl.  
*Fix:* Raised the ham stock from 2 litres to 2.5 litres, giving a 5:1 ratio and ~900 ml of free liquid — still thick enough to stand a spoon in, as the story promises, but a soup rather than a dhal. Raised serves from 6 to 8, which brings each bowl to about 425 g, a proper main-course portion. Method, timings and the cook's note needed no change; 'loosen with more stock if it has gone claggy' now reads as a fine adjustment instead of a rescue.

### P1 — craft and accuracy defects (28)

**`haggis-neeps-and-tatties`** · Scotland  
*Issue:* Fabricated historical continuity in the story: "Burns gave the haggis its address in 1786 and Scotland has eaten it on 25 January ever since." Burns was alive in 1786 and died in 1796; there was no Burns supper to attend. The first was held by nine of his friends in 1801, and the 25 January birthday date settled from there. The authenticityNote repeated the same compression with "fixed in the calendar by Burns's Address to a Haggis of 1786". A heritage cookbook cannot invent a 15-year tradition it never had.  
*Fix:* Rewrote the opening clause to "Burns gave the haggis its address in 1786, and since his friends held the first Burns supper in 1801 Scotland has kept it to 25 January". Rewrote the authenticityNote's first sentence to separate the 1786 poem from the 1801 suppers and to say explicitly that the calendar date settled from the suppers. Story remains 79 words, inside the 45-80 band.

**`haggis-neeps-and-tatties`** · Scotland  
*Issue:* Under-cooked haggis. The method specified "1 hour 15 minutes for a 1kg haggis, roughly 75 minutes per kilo" at 180C. That rate sits below every butcher's and producer's published reheating guidance for a foil-wrapped haggis, which runs around an hour per 500g. A 1kg haggis is a dense, fridge-cold cylinder; 75 minutes leaves a real risk of a centre that is not piping hot, and the recipe's only doneness cue was a subjective "too hot to hold" skewer test. cookMinutes 80 was arithmetically honest against the wrong number.  
*Fix:* Raised the bake to 1 hour 30 minutes for a 1kg haggis with the rate restated as a full 1 hour 30 minutes per kilogram, so it scales correctly. Added an objective 75C core-probe check to step 5 alongside the retained skewer test. Raised cookMinutes 80 to 95 to match (90 in the oven plus assembly).

**`haggis-neeps-and-tatties`** · Scotland  
*Issue:* Schema: two tags breach the lowercase rule — "Burns Night" and "St Andrew's Day". The site's tag matching is exact-string, so title-case tags silently fail to join the tag cluster the Phase 2 occasion collections are built on.  
*Fix:* Lowercased both to "burns night" and "st andrew's day"; the other two tags were already compliant. Verified against content/validate.js.

**`forfar-bridie`** · Scotland  
*Issue:* Unfollowable instruction in method step 4: "Cut a small hole in the top of each bridie made with onion in it, the way the Forfar bakers marked theirs." The recipe puts one chopped onion into the single batch of filling in step 2, so all four bridies contain onion. The conditional refers to a plain/onion distinction the recipe never makes, leaving the cook unable to decide which bridies get a vent — and step 5 then relies on that vent for the skewer and steam doneness tests, so a cook who reads the conditional literally and cuts no hole has no way to judge when they are done.  
*Fix:* Rewrote step 4 to state that every bridie in this recipe carries onion and therefore every one gets a steam hole, while keeping the Forfar bakers' marking convention as the stated reason. The authenticityNote already flags that convention as locally attested but undatable, so the provenance hedge is preserved.

**`forfar-bridie`** · Scotland  
*Issue:* Quantity realism on a ratio-bearing pastry: 100ml of water to 400g flour is 25% hydration. The fat is already at the classic half-fat-to-flour 50% (100g butter plus 100g lard), which wets the dough further, and standard shortcrust runs 13-20% water — 53-80ml at this flour weight. The listed 100ml is roughly 50% over. This matters more than usual here because the site ships a serves adjuster that rescales listed ingredient quantities live, so the inflated figure propagates to every portion size; a cook who trusts the ingredient list over the method gets a slack, sticky dough that toughens when worked and shrinks off the crimp in the oven.  
*Fix:* Cut the ice-cold water from 100ml to 60ml (15% of flour, mid-band). Reinforced step 1 to stop adding the moment the dough coheres and to expect not to need all of it, given the fat load. Fat, flour, suet and filling quantities were checked and left unchanged — they are correct.

**`forfar-bridie`** · Scotland  
*Issue:* Schema: tag "Angus" breaches the lowercase rule.  
*Fix:* Lowercased to "angus".

**`scotch-broth`** · Scotland  
*Issue:* Timing arithmetic does not reconcile, and the meat is short-cooked. The method totals 12-15 minutes to the boil plus 60 minutes with barley and peas plus 45 minutes with the roots — 120 minutes against a declared cookMinutes of 145, a 25-minute overstatement. Underneath that, 1kg of mutton scrag end on the bone gets only about 105 minutes at a simmer, which will not reliably strip clean from the bone; the recipe's own step 5 depends on it doing exactly that.  
*Fix:* Extended the barley-and-peas simmer from 1 hour to 1 hour 15 minutes and added the reason ("Scrag end needs that long before it will give up the bone"). The method now totals 135 minutes of heat plus roughly 10 to lift, strip, skim and season, landing exactly on the declared 145, and the mutton gets a little over two hours.

**`roast-leg-of-lamb-with-rowan-jelly`** · Scotland  
*Issue:* Doneness temperatures are contradicted by the recipe's own carryover figure. Step 3 states the joint climbs 4 to 6C during the 25-minute rest, so pulling at the stated 56 to 58C lands at 60 to 64C, which is medium rather than the "pink meat" the step promises; and the stated "medium" target of 63 to 65C lands at 67 to 71C, which is well done. A cook following the numbers overshoots by a full doneness grade in both cases, and the pink slices in the imagePrompt would never appear.  
*Fix:* Reset the probe targets to work backwards from the recipe's own carryover: pink now pulls at 54 to 56C, and step 3 names the rested result (58 to 62C) so the cook can check the arithmetic. Medium now pulls at 58 to 60C with an extra 10 to 15 minutes rather than 15 to 20. Roast times, prepMinutes and cookMinutes left alone, since 20 min blast + 1 hr 10 + 25 min rest = 115 and is honest.

**`tattie-scones`** · Scotland  
*Issue:* Method step 5 contradicts the story and the tradition. The story says the farls are "cooked dry on a girdle until the surface blisters"; step 5 then instructs the cook to "grease it lightly with the dripping". Tattie scones go on a dry girdle. Fat in the pan shallow-fries the surface, which suppresses the blistering and the dry-to-the-touch cue that the same step tells the cook to look for. The ingredient list compounded it by earmarking the dripping "for the girdle".  
*Fix:* Step 5 now cooks the farls dry, with one line on why greasing defeats the blister, and the dripping is re-pointed at the next-morning reheat the story and step already describe. Ingredient 7 relabelled "for frying the scones at breakfast". Ingredient count and step count unchanged.

**`roast-welsh-lamb-with-honey-and-rosemary`** · Wales  
*Issue:* Doneness temperatures were wrong on both counts. 65°C was labelled "well done" — that is medium-well at best; lamb is well done at 70-75°C, so a cook feeding someone who wanted no pink would have served them pink meat. Worse, the step gave 58°C as a pull temperature for "pink" and then immediately mandated a 20-minute rest on a 2.2kg joint, with no mention of carryover. A leg that size climbs 4-6°C off the heat, so pulling at 58°C lands at roughly 63°C — medium, not the pink the method explicitly promises in the previous step. The recipe contradicted itself.  
*Fix:* Rewrote method step 4 as a pull-temperature ladder that accounts for the rest: 54°C for pink, 60°C for medium, 68°C for well done, with the explicit note that the joint climbs a further 4 to 6°C once it leaves the oven. The 90-minute cook time was checked against UK roasting rates (2.2kg leg: 81 min rare, 108 min medium) and is honest for pink, so the times were left alone — only the thermometer targets were wrong.

**`cawl`** · Wales  
*Issue:* Quantity realism: 1.5 tsp sea salt (~9g) for a finished dish of roughly 4.3kg is 0.21% salinity, against 0.8-1.0% for a properly seasoned broth. This is not a matter of taste — it is confirmed as an error by the batch's own internal controls, since the sibling recipes are all correctly salted (oggie filling 0.57%, Glamorgan mixture 0.62%). Cawl sat at roughly a third of the house norm, and the 200g of Caerphilly served alongside contributes only ~3.6g, nowhere near closing the gap. The ingredient list also gave a fixed figure with no latitude, on a water-based broth carrying no other source of salt.  
*Fix:* Raised sea salt from 1.5 tsp to 4 tsp (0.56% — matching the batch's own norm) and changed the item to "sea salt, plus more to taste". Added a taste cue to method step 5: season "tasting until the broth reads properly seasoned rather than merely savoury", because a broth is the one dish where the cook must calibrate at the end rather than trust a number.

**`glamorgan-sausages`** · Wales  
*Issue:* The story asserted as settled fact something the recipe's own authenticityNote admits cannot be verified. The story stated the sausages were "originally made with cheese from the Glamorgan cattle, a breed that has since all but vanished", while the authenticityNote for the same recipe says the claim "is widely repeated in Welsh food writing but I could not verify it against a primary source." Under the house 100% accuracy rule, fabricated certainty in reader-facing prose is the defect — the note did its job, the story did not. Note the Welsh Oggie in this same batch handles an equivalent legend correctly by hedging in the body copy ("said to serve as a handle"), so the standard was available and simply not applied here.  
*Fix:* Rewrote the story's final clause to attribute rather than assert: "Welsh food writers often trace them to cheese from the near-extinct Glamorgan cattle, though the link is undocumented." Story remains in band at 65 words. The Borrow/Wild Wales 1862 citation was checked and left as-is — it is sound and already appropriately hedged in the note.

**`faggots-with-peas-and-onion-gravy`** · Wales  
*Issue:* Portioning arithmetic wrong. The forcemeat weighs about 1,042g (450g liver + 300g belly + ~180g large onion + 100g breadcrumbs + 12g salt), so eight balls are ~130g each, not the 'about 100g each' the method states — a 30% understatement. The count is fixed by step 6 ('Serve two faggots a head' × serves 4), so the weight is what is wrong. A cook rolling to 100g gets ten faggots and the serving instruction breaks.  
*Fix:* Step 3 now reads 'balls of about 130g each'. The count of eight is retained so the serving instruction holds.

**`faggots-with-peas-and-onion-gravy`** · Wales  
*Issue:* cookMinutes 90 is the stages added up as though sequential, but the method itself runs them in parallel — step 4 opens 'Meanwhile' and step 5 puts the peas on during the oven time. The real critical path is the peas at 45–60 minutes against 55 minutes of oven (30 + 25), so the dish is on the table in about 65 minutes. Overstating by 25 minutes on a site whose filters sort by time is a dishonest user-facing number.  
*Fix:* cookMinutes 90 → 65. The method is left as written, since the concurrency it describes is correct.

**`faggots-with-peas-and-onion-gravy`** · Wales  
*Issue:* A mandatory 12-hour overnight pea soak is the first line of the method but appears nowhere a reader looks before committing: not in the story, not in the tags, and not reflected in prep or cook time. On a site whose stated job is 'a recipe they can cook tonight', a reader picks this at 6pm and discovers at step 1 that they needed to start yesterday. The sibling recipe bara-brith handles the identical problem correctly with an 'overnight soak' tag, so the batch is internally inconsistent about it.  
*Fix:* Added 'overnight soak' to tags (now 5, still inside the 3–5 range and all lowercase), matching the convention bara-brith already uses.

**`monmouth-pudding`** · Wales  
*Issue:* The story describes a different pudding from the one the method builds. Story: meringue 'piled on top so it bakes to a brittle shell' — the Queen of Puddings form. Method step 5: meringue layered through in strata, half in the middle and half on top. The authenticityNote itself says 'I have layered it', so the story is the outlier and contradicts both the method and the provenance note on this dish's single defining structural question.  
*Fix:* Story rewritten to describe the layered build the method actually performs ('a soft meringue built through the pudding in strata rather than piled on one deep dish'), keeping the Queen of Puddings comparison and the jam and lemon detail. Recounted at 59 words, inside the 45–80 band.

**`monmouth-pudding`** · Wales  
*Issue:* The bread age is specified three different ways in one recipe: the story says 'four-day-old bread', the ingredient line says 'from day-old bread', and the cook's note says 'one to three days old' and warns that anything outside that window fails. The story's four-day-old bread is explicitly excluded by the cook's note, and the ingredient's day-old bread sits at the edge the note calls too fresh to crumb.  
*Fix:* Aligned all three on two- or three-day-old bread: story 'turns three-day-old bread into pudding for six', ingredient 'fresh white breadcrumbs, from two- or three-day-old bread', cook's note 'bread that is two or three days old'.

**`bara-brith`** · Wales  
*Issue:* Flour too high for the liquid. At 350g fruit to 350g self-raising flour the fruit:flour ratio is 1.00, against roughly 1.2–1.3 in the standard tea-loaf formulas, and it carries only 250ml tea and a single egg. Most of that tea is locked inside the swollen fruit after the overnight soak, so very little free liquid is left to hydrate 350g of flour — the mixture goes past the 'stiff and sticky' the method describes and bakes dry and crumbly. It also totals ~1,215g into a 900g (2lb) tin, which holds about 1.0–1.1kg.  
*Fix:* Self-raising flour 350g → 275g. Fruit:flour becomes 1.27, matching the canon; total mixture drops to ~1,140g, which the 2lb tin takes with the parchment collar the method already specifies. Tea, egg, sugar, spice and the 75-minute bake left alone — a dense fruit loaf of this weight genuinely needs that time at 160°C fan, and the skewer test governs.

**`boxty`** · Northern Ireland  
*Issue:* Portion arithmetic is broken and drags the timing with it. The batter weighs about 1,075 g; at the stated 'mounds of about 2 tablespoons' (~30 g) that is roughly 36 pancakes, or nine each for four people. It also contradicts the recipe's own image prompt, which shows a stack of three. At 4 per pan and 4-5 minutes a side, 36 cakes is nine batches and about 81 minutes of frying against a stated cookMinutes of 28.  
*Fix:* Changed the mound size to about 90 g, three to a pan, and stated the yield explicitly (twelve pancakes, three a head) so it matches the serves count and the image. Raised cookMinutes from 28 to 36 to cover four honest batches with the pan wiped and re-fatted between, as step 5 requires.

**`boxty`** · Northern Ireland  
*Issue:* The raw potato weight does not survive the wring the method demands. A hard wring costs about a third of the mass, so 450 g of grated raw potato lands near 300 g, not the 'about 350 g' the method claims. That shortfall also breaks the story's promise of half raw and half mashed, since the mash is fixed at 350 g.  
*Fix:* Raised the grating potatoes from 450 g to 500 g, which wrings down to roughly 350 g, and added the loss figure to step 1 so the cook can check their own yield against it.

**`champ`** · Northern Ireland  
*Issue:* The cook's note ends 'The milk must go in scalding hot, too', but the method never reheats it. The infusion is taken off the heat, covered and steeped 10 minutes, and only then does the cook drain, steam off, peel 1.2 kg of scalding potatoes by hand and rice them — several more minutes. The milk is lukewarm by the time it is used, so the recipe as written cannot deliver the one thing its own note insists on.  
*Fix:* Rewrote method step 4 to open with 'Bring the infused milk back to just under a simmer' before it is beaten in, making the method deliver what the cook's note promises.

**`champ`** · Northern Ireland  
*Issue:* cookMinutes 30 counts the simmer only. Bringing 1.2 kg of potatoes to the boil from cold covered by 3 cm of water takes 10-12 minutes before the 25-30 minute simmer starts, and the method then adds a steam-off, hand-peeling and ricing 1.2 kg, and 30 seconds of hard beating. The honest range for the method as written is 44-53 minutes.  
*Fix:* Raised cookMinutes from 30 to 45, giving an honest 60 minutes total against the 15 minutes prep.

**`steak-and-guinness-pie`** · Northern Ireland  
*Issue:* The bake gives doneness cues for the pastry only, and 30-35 minutes at 200°C will not heat roughly 1.5 litres of fridge-cold filling through in a ceramic dish. The cook's note correctly insists the filling be fridge-cold for the puff to laminate, but the bake was never lengthened to pay for it, so the lid is ready while the centre is lukewarm. Nothing tells the cook the filling is hot.  
*Fix:* Step 5 now slides the dish onto a heavy baking tray already hot in the oven so heat conducts into the base, extends the bake to 40-45 minutes, tents the lid with foil if it darkens early, and adds the missing filling cue — the gravy bubbling up through the vent. cookMinutes raised 213 to 223 to match.

**`roast-ham-with-cider-glaze`** · Northern Ireland  
*Issue:* Clove arithmetic that cannot be executed. The method scores the fat into 2 cm diamonds and instructs the cook to 'press a clove into each crossing point', but supplies only 30 cloves. The fat surface of a tied 2.5 kg boneless joint is roughly 1,000 cm2, and a 2 cm lattice puts a crossing point about every 4 cm2 — on the order of 250 junctions. A cook following this literally runs out of cloves before finishing the first third of the joint, and is left with a visibly half-studded ham.  
*Fix:* Changed the instruction to press a clove into every second crossing point, 'spacing the thirty evenly over the joint rather than trying to fill every junction'. The 30-clove quantity is right for the dish, so I corrected the instruction to match the ingredient rather than inflating the clove count. Also corrected the imagePrompt, which specified 'a clove pressed at every crossing' and would have generated a hero shot the recipe cannot reproduce.

**`roast-ham-with-cider-glaze`** · Northern Ireland  
*Issue:* No doneness test on a 2.5 kg cured joint — the poach is governed by the clock alone. The '20 minutes per 500 g plus 20 minutes' arithmetic is correct (120 minutes, matching the stated 2 hours and the 150-minute cookMinutes), but pot size, starting temperature and how hard the surface trembles all move the real endpoint, and the cook is given no way to check. Compounding it, the story described the joint as poached 'until it gives to a fork', which implies pull-apart tenderness and contradicts the method's instruction to carve it in thin slices across the grain.  
*Fix:* Added a sensory and temperature check to the end of the poaching step: a skewer into the thickest part should meet no resistance, and a probe should read 70C. Reworded the story to 'until a skewer slides clean through', which describes a firm, sliceable joint and now agrees with the carving instruction.

**`buttermilk-and-apple-tart`** · Northern Ireland  
*Issue:* A required stage is missing for a wet custard tart. Around 420 ml of thin, acidic buttermilk custard is poured into a blind-baked case and sits there for 35-40 minutes, but the shell is never sealed — the base goes to paste. Sealing is not a refinement on a custard tart of this hydration, it is the step that makes the pastry survive. Separately, a loose-bottomed 23 cm tin is filled with thin liquid with no baking sheet under it, so the cook has to carry an unsupported false base to the oven and the tart leaks through the seam.  
*Fix:* Put the tin on a baking sheet from the blind bake onward, and added an egg-white seal — brush the hot base and sides, 2 minutes back in the oven — folded into the existing step 2 so the method stays within the 4-6 step limit. This needed no new ingredient: the pastry uses only a yolk, so I changed that entry to '1 large egg, separated: yolk for the pastry, white to seal the case', which uses up a component the recipe was already wasting. Step 5 now slides the tart out on its sheet to fill.

**`buttermilk-and-apple-tart`** · Northern Ireland  
*Issue:* cookMinutes understated the method as written. The steps total 23 minutes of blind baking (15 with beans, 8 without), 6-8 minutes for the apples and 35-40 minutes for the custard — a 64-71 minute range against a stated 65, sitting at the extreme fast end rather than reflecting the method honestly. Adding the required 2-minute seal pushed the true range to 66-73.  
*Fix:* Raised cookMinutes from 65 to 70, which sits inside the corrected 66-73 minute range and matches the midpoint of the method as written. prepMinutes 35 and Intermediate difficulty check out for the real workload and were left alone.

**`wheaten-bread`** · Northern Ireland  
*Issue:* The authenticityNote made a claim the ingredient list contradicted. It stated that families differ on sugar and butter and that this 'is why both are marked optional here' — but only the sugar carried an optional marker; the 40 g of butter was listed flat, and the method instructed the cook to rub it in unconditionally. A reader following the note to make the plainer traditional loaf gets no guidance. The note also used the phrase 'a plain flour, soda and buttermilk wheaten', which collides with the 'plain flour' already in the ingredient list and reads as a specific flour rather than an unadorned loaf.  
*Fix:* Marked the butter optional in the ingredient list, matching the sugar, and split off the greasing butter so that portion stays non-optional. Added 'if you are using it' to the rub-in instruction in method step 2. Reworded the note to 'a wheaten of nothing but wholemeal, soda, salt and buttermilk', removing the plain-flour ambiguity, and pointed it at the list above. The note's claim is now true of the recipe it sits on. The soda ratio (1 tsp to 450 g flour), 89% hydration, 1.3% salt and 890 g dough into a 900 g tin all check out and were left untouched.

### P2 — polish (12)

**`scotch-pie`** · Scotland  
*Issue:* Missing temperature and missing preheat. Step 2 told the cook to warm the flour "in the low oven" without ever specifying a temperature or instructing that the oven be heated; the only oven temperature in the recipe appeared at step 5, so a cook working linearly reaches the bake with a cold oven while six raised hot water crust cases stand waiting — the one thing the cook's note warns against.  
*Fix:* Gave the flour-warming a bounded instruction (ten minutes at the oven's lowest setting, no hotter than 50C, or over a pan of hot water, until barely blood-warm). Moved the 190C (170C fan, gas 5) preheat to the head of step 4 so the oven comes up during filling and lidding, and shortened step 5 to "Bake for 45-50 minutes". No change to quantities or cookMinutes.

**`stovies`** · Scotland  
*Issue:* Ungrammatical, unfollowable sentence in method step 1: "so do not rush it back off the heat while they are still pale." The clause mixes a singular "it" with a plural "they" and "rush it back off the heat" does not parse as any instruction — the cook cannot tell whether they are being told to hurry or to wait. It falls below the house standard for a magazine-grade recipe body.  
*Fix:* Rewrote to "so give it the full time and never take the onions off the heat while they are still pale", which keeps the browning emphasis and states the actual instruction.

**`tattie-scones`** · Scotland  
*Issue:* The authenticityNote states "the 4:1 used here", but the recipe is 500g potatoes to 100g flour, which is 5:1. The note gives a 3:1 to 5:1 household range, so the recipe actually sits at the top of its own band while claiming the middle of it. A reader scaling from the note rather than the ingredient list adds 25 per cent too much flour, which is precisely the failure the cook's note warns against.  
*Fix:* Corrected the note to "the 5:1 used here". Quantities untouched: 5:1 is inside the stated range and rolls to 5mm without toughening.

**`clootie-dumpling`** · Scotland  
*Issue:* Tag "steamed pudding" misdescribes the defining technique. A clootie is boiled fully submerged in a cloth: the story says "the square of cotton it boils in" and step 4 covers the dumpling by 5cm of water and simmers it for three and a half hours. Nothing here is steamed. On a site whose tags drive filtering, this files the dish under the wrong method and shelves it beside basin puddings it does not behave like.  
*Fix:* Tag changed to "boiled pudding". Other three tags unchanged, count still 4 and all lowercase.

**`clootie-dumpling`** · Scotland  
*Issue:* The imagePrompt calls for a "damp muslin cloot" while the ingredients and step 2 specify "clean cotton or linen". Muslin is far too open a weave to hold a soft dropping mixture, and a shot styled to that brief would put the wrong cloth beside a dish whose entire identity is the cloth. The image brief must not disagree with the method about a named prop.  
*Fix:* imagePrompt now reads "damp cotton cloot". Word count unchanged at 104, still inside the 60-110 band.

**`roast-leg-of-lamb-with-rowan-jelly`** · Scotland  
*Issue:* Voice: "cook for 1 minute until it smells biscuity" is the fourth use of biscuit or biscuity as a sensory tell in a six-recipe batch (cranachan story, cranachan method step 1, shortbread story). A house cue used four times in six recipes stops being a cue and becomes a tic, and a flour paste cooked in lamb fat does not smell like a biscuit. The same step also read "Set it over a medium hob", which is not something you can set a roasting tin over.  
*Fix:* Replaced the cue with one that belongs to this pan: "until the raw floury smell has gone and the paste clinging to the carrots has darkened a shade". Also corrected "over a medium hob" to "over a medium heat on the hob". The biscuit references in cranachan and shortbread are load-bearing and were left alone.

**`cawl`** · Wales  
*Issue:* Method step 5 instructs the cook to "Season with the salt and plenty of black pepper", but black pepper appears nowhere in the ingredient list. The site's stated core job is to deliver a full ingredient list with quantities, and this batch is internally inconsistent about it: the rarebit, oggie and roast lamb all list black pepper explicitly with a quantity, while cawl calls for it only in the method.  
*Fix:* Added "1 tsp black pepper, coarsely ground" to the ingredient list and changed the method to reference "the salt and black pepper". Ingredient count goes 13 to 14, which is exactly at the schema ceiling and still valid. Left the accompanying bread as a serving suggestion rather than a listed ingredient, since adding it would push the recipe to 15 and break the 7-14 rule.

**`glamorgan-sausages`** · Wales  
*Issue:* Same class of defect as cawl: method step 2 calls for "a good grind of pepper" but no pepper appears in the ingredient list, so a cook shopping from the list is working from an incomplete spec.  
*Fix:* Added "0.5 tsp black pepper, freshly ground" to the ingredient list, sized to match the 0.5 tsp salt already in the mixture, and changed the method to "salt and black pepper". Ingredient count goes 12 to 13, within band.

**`monmouth-pudding`** · Wales  
*Issue:* The authenticityNote claims Wales for the dish on the strength of the Monmouthshire name without disclosing the one fact that actually complicates the claim: Monmouthshire's status was legally ambiguous, administered under the 'Wales and Monmouthshire' formula and not unambiguously part of Wales until 1974. On a site built around a four-region filter, that is precisely the caveat the note exists to carry, and its absence lets a borderland dish be filed as settled Welsh canon.  
*Fix:* authenticityNote now states the Monmouthshire jurisdictional history and characterises the attribution as territorial rather than uncontested, while retaining the existing and correct hedge about layered versus top-only meringue.

**`welsh-cakes`** · Wales  
*Issue:* The method and the cook's note give conflicting instruction on the same variable. Method step 5 sanctions '2½–3 minutes a side'; the cook's note then declares it 'should take a full three minutes a side' and that 'anything faster and the bakestone is too hot'. A cook whose test cake colours in 2½ minutes is simultaneously told that is correct and that it is proof of a fault, and the note's remedy is to drop the heat on a pan that is in fact right.  
*Fix:* Cook's note now reads 'at least two and a half minutes a side', so it polices the same range the method sets. The underlying advice — that too-fast colouring scorches currants over a raw centre, and that cast iron is slow to come back down — is correct and kept.

**`steak-and-guinness-pie`** · Northern Ireland  
*Issue:* False mechanism in method step 2: 'boil hard for 5 minutes to drive off the raw bitterness'. Stout bitterness comes from iso-alpha acids, which are not volatile — boiling concentrates them as the liquid reduces. What five minutes of hard boiling actually removes is alcohol and raw fermentation aromatics. Under the 100% accuracy rule a stated mechanism has to be true.  
*Fix:* Rewrote to what boiling does do: 'boil hard for 5 minutes to drive off the alcohol and reduce it by about a third', which also gives the cook a measurable cue where there was none.

**`irish-stew`** · Northern Ireland  
*Issue:* The authenticityNote litigates carrot at length as 'the oldest argument in the Irish kitchen' while saying nothing about the thyme, bay leaf, finishing butter and parsley the recipe also adds — all equally outside the mutton, potato, onion, water core the same note names as canon. Flagging one departure and staying silent on four reads as selective provenance.  
*Fix:* Extended the authenticityNote to declare the thyme, bay, butter and parsley as the writer's kitchen additions rather than farmhouse canon, and to state where canon actually stops.

---

## Batch verdicts

1. This is a strong batch and I could not break it on the P0 axes: all six dishes are genuinely and specifically Scottish rather than pan-British imports, the defining-ingredient traps are handled correctly (no potato in the bridie and the story argues the point, no cream in the Cullen skink with the omission defended, both barley and dried peas in the broth, mutton and rusk in the Scotch pie), and the authenticityNotes do real evidential work rather than restating the claim — several volunteer their own uncertainty, which is what the standard asks for. The one ratio-bearing pastry I expected to fail, the hot water crust at 450g flour to 180g lard to 180ml water, is textbook; the shortcrust was not, at 25% hydration against a 13-20% norm, and I cut it to 60ml. The nine defects I fixed cluster in the second tier: a fabricated 15-year gap between Burns's 1786 poem and the first Burns supper of 1801, a haggis under-cooked at 75 minutes per kilo against a real rate nearer 90, a bridie step conditional on a plain-versus-onion distinction the recipe never makes, a Scotch broth whose method totalled 120 minutes against a declared 145 while short-cooking the mutton, a missing preheat and an unnumbered "low oven" in the Scotch pie, an unparseable sentence in the stovies, and three title-case tags that would have failed the house validator. Cullen Skink came through unchanged and is the strongest thing here.

2. This batch is genuinely strong and it survived the traps set for it: the shortbread really is 3:2:1 (250g flour plus 50g ground rice against 200g butter and 100g sugar, and 600g of dough does press to the stated 1.7cm in a 20cm tin), the Dundee cake carries no glace cherries and its three almond rings total exactly the 50 the ingredient line buys, the cranachan specifies medium oatmeal rather than rolled oats, and the clootie's 230 cookMinutes is honestly 3hr30 in the pot plus 20 minutes drying out. Every dish is properly Scottish, every authenticityNote does real work rather than restating the claim, all seven schema checks pass mechanically, and no banned phrase or American spelling appears anywhere. The six defects I fixed were one real cooking error (lamb doneness temperatures that, on the recipe's own stated carryover, deliver medium and well done where they promise pink and medium), one internal contradiction that would cost the cook the dish (tattie scones cooked dry in the story, greased in the method), and four smaller accuracy and voice failures; one batch-wide note for the editor rather than a defect is that the house spec's "imperial in brackets" is unmet throughout, but quantity is a numeric field feeding the live serves adjuster, so imperial belongs in the UI rather than forced into these strings.

3. This is a strong batch and I am not going to pretend otherwise: there are no P0s. Regional attribution holds on all five, the ingredient sets are canonical where it counts (Caerphilly and leek in the Glamorgan sausages, lamb-and-leek rather than Cornish beef-and-onion in the oggie), and I verified the ratio dishes arithmetically — the oggie pastry is textbook 2:1 flour to fat at 26% hydration, the rarebit roux is correctly panada-stiff at 167g flour per litre, and the Glamorgan yield geometry matches its stated dimensions to within 4g. Every prep and cook figure reconciles exactly against the method as written, and the house validator returned clean on schema and voice with no banned words and no American spellings. Welsh Rarebit and Welsh Oggie I return unchanged. The five defects I did fix are real but second-order: the roast lamb mislabelled 65°C as well done and contradicted its own promise of pink meat by ignoring carryover across a mandated 20-minute rest; cawl was salted at roughly a third of the norm set by its own sibling recipes; the Glamorgan story asserted a cattle-breed origin its own authenticityNote confesses it cannot source; and two recipes seasoned with a pepper they never listed. The provenance discipline here is the batch's real strength — the rarebit note conceding that the Welsh attribution rests on naming convention, and the oggie note flagging the crimp-as-handle legend, are exactly right, which is precisely why the Glamorgan story lapsing into unhedged certainty stood out as a defect rather than a house habit.

4. A strong batch on the axes that usually break, and I could not manufacture a regional-attribution failure: all five dishes are genuinely Welsh, the ratios carrying real chemistry are right (Welsh cakes at 225:110:85 flour:fat:sugar, the Monmouth meringue at the standard 50g sugar per white, the 40g:40g:400ml Anglesey coating roux), every gas-mark conversion checks against the standard table, and the schema and voice passes were mechanically clean — no banned phrases, no American spellings, no field out of range. The authenticity notes are the batch's real strength: the faggots note volunteers the Black Country's equal claim rather than burying it, and the Anglesey note admits it cannot trace a pre-twentieth-century source. What the writer missed was physical arithmetic and internal consistency: nine defects fixed, headed by a P0 in Anglesey Eggs where roughly two litres of mash, eggs and sauce were sent into a 1.5-litre dish, plus a bara brith flour ratio that bakes dry, faggots portioned at 100g when the mix weighs 130g a ball with a cook time overstated by 25 minutes and an unflagged overnight soak, and a Monmouth pudding whose story described a different pudding from the one its own method builds.

5. A strong batch that clears the two axes most likely to sink a regional set: attribution is honest throughout — Ulster Fry and Champ are genuinely Ulster, while Irish Stew, Boxty and Steak and Guinness Pie are non-exclusive dishes whose authenticityNotes disclaim the claim rather than restating it, which is the professional answer. Ulster Fry passed unchanged; the real damage was concentrated in Boxty, which carried a P0 raising-agent error (1 tsp bicarbonate against 200 ml buttermilk, double the acid available, leaving unreacted soda that tastes soapy and greys the crumb) plus portion arithmetic yielding 36 pancakes and 81 minutes of frying against a claimed 28. The remaining five fixes were honesty repairs — two recipes whose stated times ignored whole stages of their own method, a cook's note demanding scalding milk the method never reheated, a pie bake too short to warm the fridge-cold filling its note requires, a false claim about what boiling does to stout, and a provenance note that flagged carrot while quietly smuggling in four other non-canonical additions.

6. A genuinely strong batch that survived most of what I threw at it — the wheaten's soda and hydration ratios, the ham's 20-min-per-500g arithmetic and its 2.5 kg to 5½ lb conversion, the tart's 2:1 shortcrust and 1-egg-per-120ml custard set, and the Fifteens log geometry (613 g of mixture, a 24 cm log, 16 slices against a stated 15) all held up under calculation, and Fifteens goes back unchanged. Schema and voice were clean on all five against the house validator: no banned phrases, no American spellings, every story, imagePrompt, tag count and slug in range. The one ship-blocker was the pea soup, where 500 g of dry peas against 2 litres of stock leaves roughly 400 ml of free liquid after absorption and evaporation — a pan that scorches rather than a soup — fixed to 2.5 litres and 8 servings; the five P1s were an unexecutable 30-cloves-for-250-junctions instruction, a time-only poach with no doneness check, a missing pastry seal under 420 ml of acidic custard, an understated cookMinutes, and an authenticityNote claiming an optional marker the ingredient list never carried.
