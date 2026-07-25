/**
 * Phase 1 regional expansion — English Heritage Cookbook
 *
 * 32 recipes across Scotland, Wales and Northern Ireland, taking the library
 * from 23 to 55 and filling every one of the 28 region x category filter cells.
 *
 * Authored by six parallel writing agents against the house voice spec, then put
 * through an adversarial verification pass that audited regional attribution,
 * ingredient authenticity, quantity realism, timing arithmetic, method
 * completeness, voice and schema. 43 defects were found and corrected in place —
 * see VERIFICATION-LOG.md.
 *
 * !! THE SCHEMA HERE IS INFERRED. mockData.js was never readable from the
 * !! authoring environment. Read INTEGRATION.md section 1 and run toSiteShape()
 * !! with the real key names before merging. Do not hand-edit 32 recipes.
 *
 * Deliberate departure from the existing schema: these carry `editorialRating`
 * (an editors' score, which a curated cookbook can honestly publish) and NO
 * `ratingCount`. The existing 23 recipes present authored constants as crowd
 * ratings on a site with no backend. See CONTENT_ADDITION_PLAN.md section 4.
 */

export const EXPANSION_RECIPES = [
  {
    slug: "tattie-scones",
    title: "Tattie Scones",
    region: "Scotland",
    category: "Breakfast",
    difficulty: "Easy",
    prepMinutes: 20,
    cookMinutes: 30,
    serves: 4,
    editorialRating: 4.7,
    mostLoved: false,
    tags: [
      "griddle",
      "scottish fry",
      "leftovers",
      "quick"
    ],
    story: "Every Scottish fry-up has one sitting under the egg. Tattie scones are what becomes of floury mashed potato, worked with just enough flour to hold together, rolled thin, cut into farls and cooked dry on a girdle until the surface blisters. Plain and faintly sweet eaten warm from the pan, they are better still reheated in bacon fat the next morning, when the outside crisps and the middle stays as soft as the potato it started as.",
    ingredients: [
      {
        quantity: "500",
        unit: "g",
        item: "floury potatoes (Golden Wonder, Maris Piper or King Edward), peeled and cut into even chunks"
      },
      {
        quantity: "1",
        unit: "tsp",
        item: "table salt, for the potato water"
      },
      {
        quantity: "25",
        unit: "g",
        item: "salted butter"
      },
      {
        quantity: "0.5",
        unit: "tsp",
        item: "fine sea salt"
      },
      {
        quantity: "a pinch",
        unit: "",
        item: "white pepper, finely ground"
      },
      {
        quantity: "100",
        unit: "g",
        item: "plain flour, plus 2 tbsp for rolling"
      },
      {
        quantity: "15",
        unit: "g",
        item: "bacon dripping or butter, for frying the scones at breakfast"
      }
    ],
    method: [
      "Boil the potatoes in well-salted water for 15 to 18 minutes, until the point of a knife slides in with no resistance at all. Drain thoroughly, return them to the dry hot pan and set over a low heat for 1 minute, shaking, until the surface goes chalky and the last of the steam has gone. Wet potato makes a heavy scone.",
      "Mash or rice them while hot, then beat in the butter, sea salt and white pepper until completely smooth. Leave for 5 minutes, until cool enough to handle but still clearly warm.",
      "Work in the 100g flour with a light hand, cutting it through with a knife first and then bringing it together in about 30 seconds. Stop as soon as it holds. The more you work it the tougher it sets.",
      "Divide in two. On a floured surface, roll each half into a round about 20cm across and 5mm thick, then cut each round into 4 farls and prick all over with a fork.",
      "Heat a girdle or heavy frying pan over a medium heat and cook the farls dry, in batches, for about 3 minutes a side, until dark blistered spots appear and the surface is dry to the touch. Grease the pan and you fry the outside before it can blister. Eat them warm, or cool on a rack and fry in the bacon dripping for 1 to 2 minutes a side at breakfast, until the edges crisp."
    ],
    cooksNote: "Leftover mash is the traditional starting point and works perfectly well, but warm it through in the pan before the flour goes anywhere near it. Cold potato needs half as much flour again to come together, and every extra gram takes the scone further from potato and closer to pastry. That, rather than the rolling or the girdle, is where heavy tattie scones come from.",
    image: "/generated/tattie-scones.jpg",
    imagePrompt: "Warm, moody magazine-style food photography of four triangular tattie scones overlapping in a loose stack on a black cast-iron girdle still on the hob, their surfaces blistered with dark scorch marks and marked with fork pricks. A knob of butter melts across the top farl. Just behind and softly out of focus sit a plate with a fried egg and rashers of streaky bacon, and a floured wooden board with the trimmed dough. Parchment cloth, dark oak, burgundy background dropping into shadow. Warm low morning light from the left. Shallow depth of field on the top scone. No text, no hands, no branding.",
    authenticityNote: "Potato scones cooked on a girdle are standard across Scotland and a fixed component of the Scottish cooked breakfast, served alongside lorne sausage, black pudding and bacon. Ratios of potato to flour vary between roughly 3:1 and 5:1 by household; the 5:1 used here rolls thin without toughening. A cast-iron girdle is the traditional pan, though a heavy dry frying pan behaves the same way."
  },
  {
    slug: "forfar-bridie",
    title: "Forfar Bridie",
    region: "Scotland",
    category: "Pies & Pastries",
    difficulty: "Intermediate",
    prepMinutes: 70,
    cookMinutes: 60,
    serves: 4,
    editorialRating: 4.6,
    mostLoved: false,
    tags: [
      "hand pie",
      "shortcrust",
      "angus",
      "picnic"
    ],
    story: "Forfar in Angus makes this and defends it: shortcrust folded over hand-chopped beef, shredded suet and onion, crimped into a horseshoe and baked until the juices run clear at the vent. There is no potato in a bridie. That single absence is what separates it from a Cornish pasty, and it is the reason the meat inside tastes of nothing but beef, onion and pepper.",
    ingredients: [
      {
        quantity: "400",
        unit: "g",
        item: "plain flour, plus extra for dusting"
      },
      {
        quantity: "100",
        unit: "g",
        item: "cold butter, diced"
      },
      {
        quantity: "100",
        unit: "g",
        item: "lard, diced"
      },
      {
        quantity: "1",
        unit: "tsp",
        item: "fine salt, for the pastry"
      },
      {
        quantity: "60",
        unit: "ml",
        item: "ice-cold water"
      },
      {
        quantity: "500",
        unit: "g",
        item: "beef skirt or rump, trimmed and chopped by hand into 5mm pieces"
      },
      {
        quantity: "60",
        unit: "g",
        item: "shredded beef suet"
      },
      {
        quantity: "1",
        unit: "medium",
        item: "onion, finely chopped"
      },
      {
        quantity: "1",
        unit: "tsp",
        item: "sea salt, for the filling"
      },
      {
        quantity: "1.5",
        unit: "tsp",
        item: "coarsely ground black pepper"
      },
      {
        quantity: "3",
        unit: "tbsp",
        item: "cold beef stock"
      },
      {
        quantity: "2",
        unit: "tbsp",
        item: "milk, to glaze"
      }
    ],
    method: [
      "Rub the butter and lard into the flour and salt until the mixture looks like coarse breadcrumbs with a few pea-sized flakes of fat still visible. Add the cold water a spoonful at a time, drawing it together with a round-bladed knife, and stop the moment it coheres: with this much fat in the flour you may not need all of it. Knead only twice to bring it into a ball, then wrap and chill for 30 minutes.",
      "Meanwhile, chop the beef by hand into rough 5mm pieces. A mincer turns skirt to paste and the bridie then eats like a sausage roll, where it should be threads of meat in their own gravy. Mix the beef with the suet, onion, salt, pepper and stock and keep it cold. Add no potato: that is a pasty, not a bridie.",
      "Divide the pastry into four and roll each piece into a 20cm oval about 4mm thick. Pile a quarter of the filling over one half, leaving a 2cm border, then dampen that border very lightly, fold the pastry over and press to seal. Crimp the curved edge into a rope with your knuckle and thumb, then bend the whole thing gently into a horseshoe.",
      "Every bridie here carries onion, so cut a small steam hole in the top of each one, the way the Forfar bakers marked the onion version to tell it from the plain. Brush the tops with milk and lift onto a lined baking tray.",
      "Bake at 220C (200C fan, gas 7) for 15 minutes to set and colour the crust, then drop the heat to 180C (160C fan, gas 4) and give them a further 40-45 minutes. They are done when the pastry is deep gold, a skewer pushed through the vent meets no resistance in the meat, and the steam coming out smells beefy rather than floury.",
      "Rest for 10 minutes on the tray. The juices inside are molten straight from the oven and need that time to settle back into the meat, or they will run out down your wrist at the first bite."
    ],
    cooksNote: "With no potato in the filling there is nothing to soak up the juices, so the seal is doing real structural work. Dampen only the outermost centimetre of the pastry: water any further in makes the fold slippery and the bridie springs open in the oven. Crimp with your knuckle rather than a fork, which cuts through the layers you have just rested. And do not skip the suet. It melts into the beef and makes its own gravy inside the crust, which is the whole texture of the thing.",
    image: "/generated/forfar-bridie.jpg",
    imagePrompt: "Two Forfar bridies on a dark oak board, warm moody magazine lighting from a low window. Deep-gold shortcrust curved into horseshoes with a rope-crimped edge, a small hole punched in the lid of the whole one, the other cut across to show hand-chopped beef and onion sitting in its own glossy gravy with no potato anywhere. Props: a crumpled parchment wrapper beneath, a burgundy linen napkin, a chipped enamel mug of tea out of focus behind. Burgundy and parchment palette, shallow depth of field, background falling away dark. No text, no hands, no branding.",
    authenticityNote: "The bridie belongs to Forfar in Angus and is defined against the Cornish pasty by the absence of potato: the filling is beef, suet, seasoning and, in the onion version, onion. Two commonly repeated details I would flag rather than assert as fact are the attribution of the pie to a Margaret Bridie of Glamis, which is not firmly documented, and the bakers' convention of marking onion bridies with a hole in the lid, which is well attested locally but which I cannot date with confidence."
  },
  {
    slug: "scotch-pie",
    title: "Scotch Pie",
    region: "Scotland",
    category: "Pies & Pastries",
    difficulty: "Intermediate",
    prepMinutes: 80,
    cookMinutes: 50,
    serves: 6,
    editorialRating: 4.5,
    mostLoved: false,
    tags: [
      "hot water crust",
      "mutton",
      "hand pie",
      "match day"
    ],
    story: "The Scotch pie is a piece of engineering. Hot water crust raised into straight walls that stand a finger's width above the mutton, so the well on top can take beans, mash or a slick of brown sauce. Scottish bakers have turned them out by the hundred for a century and more, and half of Scotland eats them standing up at a football ground.",
    ingredients: [
      {
        quantity: "450",
        unit: "g",
        item: "plain flour, plus extra for dusting"
      },
      {
        quantity: "180",
        unit: "g",
        item: "lard"
      },
      {
        quantity: "180",
        unit: "ml",
        item: "water"
      },
      {
        quantity: "1",
        unit: "tsp",
        item: "fine salt, for the pastry"
      },
      {
        quantity: "500",
        unit: "g",
        item: "coarsely minced mutton, or lamb shoulder minced with its fat"
      },
      {
        quantity: "50",
        unit: "g",
        item: "fine dried breadcrumbs or rusk"
      },
      {
        quantity: "1",
        unit: "tsp",
        item: "ground white pepper"
      },
      {
        quantity: "0.5",
        unit: "tsp",
        item: "ground mace"
      },
      {
        quantity: "1",
        unit: "tsp",
        item: "fine salt, for the filling"
      },
      {
        quantity: "100",
        unit: "ml",
        item: "cold lamb or beef stock"
      }
    ],
    method: [
      "Mix the mutton with the breadcrumbs, white pepper, mace, salt and stock, working it with your fingers until it is a soft, sticky paste rather than loose crumbs. Cover and chill while you make the pastry: half an hour lets the mace and pepper bloom through the meat.",
      "Sift the flour and salt into a large bowl and warm it through, either ten minutes in an oven at its lowest setting, no hotter than 50C, or over a pan of hot water, until it is barely blood-warm. Bring the lard and water to a rolling boil in a small pan, pour it into the flour all at once and beat hard with a wooden spoon until it comes together, then turn out and knead for a minute until smooth and satiny. Cover with a cloth and keep it warm.",
      "Cut off a third for the lids and keep it covered. Divide the rest into six. Roll each piece into a disc and mould it around a floured jam jar about 8cm across, working the pastry up the sides to a height of 4.5cm and an even thickness of 4-5mm. The walls must be straight, not sloping. Twist the jar out, wrap each case in a band of baking parchment tied with string, and chill for 30 minutes to set the shape.",
      "Heat the oven to 190C (170C fan, gas 5). Divide the filling between the cases and press it level. Do not overfill: the meat should sit a clear 1cm below the rim, because that standing wall is the entire point of the pie. Roll the reserved pastry and cut six lids to sit inside the walls, press them onto the meat, pinch them to the sides and pierce a steam hole in the centre of each with a skewer.",
      "Bake for 45-50 minutes. The walls should be firm and dry to the tap and no more than pale gold: a Scotch pie is not a deeply browned pie. Juices bubbling gently up through the steam hole in the last ten minutes mean the filling is at temperature.",
      "Rest for 10 minutes before cutting the string and peeling off the parchment collars. Eat them warm, with the well on top filled with baked beans, a spoon of mash or brown sauce."
    ],
    cooksNote: "Work hot, and work fast. Hot water crust is only elastic while it is above blood heat, and ten minutes on a cold worktop will have it cracking the moment you try to raise a wall. Keep the reserved dough in its bowl under a cloth, sitting over a pan of warm water, and mould one case at a time rather than rolling all six out first. If a wall does crack, patch it with a warm scrap and smooth the join with a wet thumb; a split case leaks its juices and slumps in the oven.",
    image: "/generated/scotch-pie.jpg",
    imagePrompt: "Three Scotch pies on a parchment-lined baking tray, warm moody magazine lighting raking in from the left. Straight, pale-gold hot water crust walls standing a clear centimetre above the mutton filling, one pie broken open to show the dense, spiced meat and the steam hole in its lid. Props: a burgundy enamel jug of gravy, a small dish of baked beans, a bone-handled knife, a dusting of flour on the dark oak table beneath. Burgundy and parchment palette, shallow depth of field, deep shadow behind. No text, no hands, no branding.",
    authenticityNote: "The Scotch pie, also called the mutton pie or shell pie, is a Scottish bakers' staple defined by its straight raised hot water crust walls standing proud of the filling to hold an accompaniment, and its association with Scottish football grounds is well documented. Mutton is the traditional meat, and white pepper is near-universal in the spicing, but the precise blend was each baker's own closely held secret, so treat our mace-and-white-pepper filling as representative rather than canonical."
  },
  {
    slug: "clootie-dumpling",
    title: "Clootie Dumpling",
    region: "Scotland",
    category: "Puddings & Desserts",
    difficulty: "Advanced",
    prepMinutes: 40,
    cookMinutes: 230,
    serves: 8,
    editorialRating: 4.7,
    mostLoved: false,
    tags: [
      "hogmanay",
      "boiled pudding",
      "make-ahead",
      "freezer-friendly"
    ],
    story: "A clootie dumpling takes its name from the cloot, the square of cotton it boils in. Flour and sugar dusted onto the scalded wet cloth set into the dark, faintly leathery skin that is the whole point of the thing. Scottish households made one for Hogmanay and for birthdays, hiding a wrapped sixpence, a ring and a button in the mix for whoever was lucky. Three and a half hours in the pot, and it feeds a table of eight.",
    ingredients: [
      {
        quantity: "225",
        unit: "g",
        item: "plain flour, plus 3 tbsp for dusting the cloot"
      },
      {
        quantity: "110",
        unit: "g",
        item: "fresh white breadcrumbs"
      },
      {
        quantity: "110",
        unit: "g",
        item: "shredded beef suet"
      },
      {
        quantity: "110",
        unit: "g",
        item: "caster sugar, plus 1 tbsp for dusting the cloot"
      },
      {
        quantity: "175",
        unit: "g",
        item: "sultanas"
      },
      {
        quantity: "175",
        unit: "g",
        item: "currants"
      },
      {
        quantity: "1",
        unit: "tsp",
        item: "bicarbonate of soda"
      },
      {
        quantity: "1.5",
        unit: "tsp",
        item: "ground cinnamon"
      },
      {
        quantity: "1",
        unit: "tsp",
        item: "ground ginger"
      },
      {
        quantity: "0.5",
        unit: "tsp",
        item: "nutmeg, freshly grated"
      },
      {
        quantity: "2",
        unit: "tbsp",
        item: "black treacle"
      },
      {
        quantity: "1",
        unit: "tbsp",
        item: "golden syrup"
      },
      {
        quantity: "1",
        unit: "large",
        item: "egg, beaten"
      },
      {
        quantity: "250",
        unit: "ml",
        item: "buttermilk"
      }
    ],
    method: [
      "Mix the flour, breadcrumbs, suet, sugar, sultanas, currants, bicarbonate of soda and all three spices in a large bowl until the fruit is evenly coated. Warm the treacle and syrup in a small pan for 30 seconds to loosen them, then stir them into the beaten egg with most of the buttermilk. Pour into the dry mix and stir to a soft dropping consistency, adding the rest of the buttermilk if needed. It should fall from the spoon in about three seconds. Do not beat it.",
      "Drop a 60cm square of clean cotton or linen into a pan of boiling water for 1 minute, lift it out with tongs and wring it out while still hot. Spread it flat, still damp, and dust the centre 35cm evenly with the 3 tbsp flour and then the tablespoon of sugar. Every bare patch is a hole the mixture will leak through, so cover it properly.",
      "Pile the mixture into the centre of the cloth. Gather the corners and edges up, shake gently so it settles into a dome, and tie tightly with string just above the mixture, leaving about 5cm of slack for swelling. Knot the loose cloth into a handle.",
      "Sit an upturned saucer or a small heatproof plate in the base of your largest pan, lower the dumpling onto it and pour in boiling water to cover by 5cm. Lid on, and simmer gently for 3 hours 30 minutes, topping up with boiling water from the kettle whenever the top of the dumpling shows. Never top up with cold: it stalls the boil and the pudding goes heavy.",
      "Lift the dumpling out, lower it into a bowl of cold water for 10 seconds only, then sit it in a colander. Untie the string and peel the cloth back slowly from the top, easing rather than pulling. Invert onto an ovenproof plate.",
      "Dry it out in an oven at 180C/160C fan/gas 4 for 15 to 20 minutes, turning once, until the skin is dark, matt and dry to the touch. Serve warm with pouring cream or custard."
    ],
    cooksNote: "A clootie is judged on its skin, and the skin improves overnight. Left uncovered somewhere cool it darkens and tightens further, which is why the dumpling most Scottish households actually remember is the next morning's: cut thick and fried in bacon dripping until the sugar in the skin caramelises at the edges, and served alongside the rest of the breakfast. If you are hiding charms, wrap each one in greaseproof and press them in after the mixture is in the cloth, not before.",
    image: "/generated/clootie-dumpling.jpg",
    imagePrompt: "Warm, moody magazine-style food photography of a whole clootie dumpling on a chipped cream enamel plate, its dark leathery skin taut and faintly wrinkled, with one thick wedge cut away to show the dense fruited crumb studded with currants and sultanas. The damp cotton cloot lies loosely to one side, still dusted with flour and creased from the string. A small white jug of pouring cream sits behind, out of focus. Dark oak table, parchment cloth, burgundy background falling into shadow. Warm single-source light from behind left, faint steam rising. Shallow depth of field on the cut face. No text, no hands, no branding.",
    authenticityNote: "The cloth-boiled dumpling with a flour-and-sugar skin is documented across Scotland, particularly for Hogmanay and for birthdays, complete with wrapped charms hidden in the mix. Proportions vary widely between households: the flour, breadcrumb and suet balance given here is a common one rather than a single authoritative version, and buttermilk against plain milk is a family and regional preference."
  },
  {
    slug: "cranachan",
    title: "Cranachan",
    region: "Scotland",
    category: "Puddings & Desserts",
    difficulty: "Easy",
    prepMinutes: 20,
    cookMinutes: 6,
    serves: 4,
    editorialRating: 4.8,
    mostLoved: true,
    tags: [
      "no-bake",
      "burns night",
      "raspberries",
      "whisky"
    ],
    story: "Cranachan began as a Highland harvest dish of crowdie, toasted oatmeal and cream, carried to the table in separate bowls so that each person built their own. Raspberries and whisky came later, once Perthshire and Angus were growing the best soft fruit in Britain. It is still assembled rather than cooked, and it still turns on one thing: oatmeal toasted until it smells of biscuit and folded in at the last moment so it keeps its bite.",
    ingredients: [
      {
        quantity: "60",
        unit: "g",
        item: "medium oatmeal"
      },
      {
        quantity: "a pinch",
        unit: "",
        item: "fine sea salt"
      },
      {
        quantity: "500",
        unit: "g",
        item: "raspberries"
      },
      {
        quantity: "1",
        unit: "tbsp",
        item: "caster sugar"
      },
      {
        quantity: "400",
        unit: "ml",
        item: "double cream, well chilled"
      },
      {
        quantity: "3",
        unit: "tbsp",
        item: "heather honey, plus a little to finish"
      },
      {
        quantity: "3",
        unit: "tbsp",
        item: "Scotch malt whisky"
      }
    ],
    method: [
      "Put the oatmeal and salt in a dry heavy frying pan over a medium heat. Toast for 4 to 6 minutes, shaking and stirring almost constantly, until it turns the colour of pale straw and smells nutty and biscuity. Tip it straight onto a cold plate and spread it out to cool completely, about 10 minutes.",
      "Crush 150g of the raspberries with the caster sugar using a fork, leaving some texture, and set aside for 10 minutes to slacken into a loose sauce. Keep the remaining berries whole.",
      "Whip the cream with the honey and whisky until it holds soft peaks and falls from the whisk in a lazy ribbon, about 90 seconds with an electric whisk. Stop there. It stiffens again as the oatmeal goes in, and cream taken too far turns grainy against the fruit.",
      "Fold in three-quarters of the cooled oatmeal with a few light turns of a spatula, keeping the streaks visible rather than beating them through.",
      "Layer into four glasses: whole raspberries, then cream, then a spoonful of the crushed berry sauce, and repeat. Finish with the reserved oatmeal and a thread of honey. Serve within half an hour."
    ],
    cooksNote: "Toast the oatmeal in a dry pan rather than under the grill, and get it out of that pan the second it colours. Left in the residual heat it carries on cooking and turns bitter inside a minute. It keeps crisp in a sealed jar for a fortnight, so toast double and have it ready. What cannot be done ahead is the assembly: built more than about thirty minutes before the table, the oatmeal draws moisture out of the cream and the whole thing slumps towards porridge.",
    image: "/generated/cranachan.jpg",
    imagePrompt: "Warm, moody magazine-style food photography of cranachan in two footed crystal glasses, the layers clearly readable through the glass: whipped cream, crushed raspberry sauce and toasted oatmeal, topped with whole raspberries and a thread of honey caught mid-drizzle. A small wooden bowl of toasted medium oatmeal and a squat whisky glass sit just behind, softly out of focus. Parchment linen runner over dark oak, a few loose raspberries fallen to the table. Warm low side light, burgundy and parchment palette, deep shadow at the frame edges. Shallow depth of field on the front glass. No text, no hands, no branding.",
    authenticityNote: "Cranachan descends from the Highland harvest dish recorded variously as cream-crowdie or crowdie-cream, in which toasted oatmeal was folded through cream. The raspberry-and-whisky version now treated as standard is a twentieth-century settling of the dish; earlier versions used crowdie cheese and often no fruit at all, which I have flagged rather than smoothed over. Medium oatmeal, not rolled oats, is the traditional grain."
  },
  {
    slug: "haggis-neeps-and-tatties",
    title: "Haggis, Neeps & Tatties",
    region: "Scotland",
    category: "Regional Classics",
    difficulty: "Intermediate",
    prepMinutes: 20,
    cookMinutes: 95,
    serves: 4,
    editorialRating: 4.7,
    mostLoved: true,
    tags: [
      "burns night",
      "st andrew's day",
      "offal",
      "winter"
    ],
    story: "Burns gave the haggis its address in 1786, and since his friends held the first Burns supper in 1801 Scotland has kept it to 25 January: sheep's pluck, oatmeal, suet and pepper, bound in its casing until the filling is loose, peppery and faintly nutty from the oats. Buy a good one from a butcher who makes his own. The cooking that decides the plate is the neeps and tatties beside it, and those you must get right yourself.",
    ingredients: [
      {
        quantity: "1",
        unit: "",
        item: "good butcher's haggis, about 1kg"
      },
      {
        quantity: "800",
        unit: "g",
        item: "swede (neeps), peeled and cut into 3cm chunks"
      },
      {
        quantity: "900",
        unit: "g",
        item: "floury potatoes such as Golden Wonder or Maris Piper, peeled and halved"
      },
      {
        quantity: "50",
        unit: "g",
        item: "salted butter, for the neeps"
      },
      {
        quantity: "60",
        unit: "g",
        item: "salted butter, for the tatties"
      },
      {
        quantity: "100",
        unit: "ml",
        item: "whole milk, warmed"
      },
      {
        quantity: "1",
        unit: "tsp",
        item: "coarsely ground black pepper, plus more to serve"
      },
      {
        quantity: "2",
        unit: "tbsp",
        item: "sea salt, for the vegetable water"
      }
    ],
    method: [
      "Heat the oven to 180C (160C fan, gas 4). Sit the haggis, still in its casing, on a large sheet of foil and fold it into a loose parcel with the seam uppermost. Set it in a roasting tin with 1cm of just-boiled water and cook for 1 hour 30 minutes for a 1kg haggis, allowing a full 1 hour 30 minutes per kilogram. Never prick the casing: it is what holds the oatmeal and melted fat together, and a pierced haggis weeps its fat into the tin and bakes dry.",
      "Forty-five minutes before you want to eat, put the swede into a pan of well-salted water, cover, and boil for 25-30 minutes until a knife slides through with no resistance at all. Underdone neeps stay fibrous and no amount of mashing will fix it.",
      "Drain the swede thoroughly, tip it back into the dry pan and set it over a low flame for 2-3 minutes, shaking often, until the surface goes matt and it begins to squeak against the base. Only then mash it with the 50g of butter and the black pepper. Keep it deliberately coarse and ragged. Cover and set aside somewhere warm.",
      "Thirty minutes before serving, start the potatoes in cold salted water, bring to a boil and simmer for 18-20 minutes until a skewer meets no resistance. Drain and let them steam dry in the colander for 3 minutes, then rice or mash them, beat in the 60g of butter, and work in the warm milk a splash at a time until smooth and slack.",
      "Unwrap the haggis and check it is piping hot right through: a probe pushed into the thickest part should read 75C, or a skewer held there for five seconds should come out too hot to hold comfortably. Score the casing along its length with the point of a knife and let the filling tumble out onto the plate beside the two mashes. Grind more pepper over everything."
    ],
    cooksNote: "Never boil a haggis hard. If you are simmering rather than roasting, keep the water at a bare shiver with the surface barely moving, because a rolling boil swells the casing until it splits and leaves you with a pan of oatmeal soup. The oven-in-foil method exists precisely to remove that risk, and it also keeps the outside of the casing from going leathery, which simmering will do if the haggis sits in the pot too long.",
    image: "/generated/haggis-neeps-and-tatties.jpg",
    imagePrompt: "A warm, moody magazine-style plate shot: a split haggis on a cream ironstone plate, its casing scored open so the loose, oatmeal-flecked filling spills out, with a mound of coarse orange neep mash and a mound of pale buttered tatties beside it, butter melting into a small pool. Props: an antique bone-handled knife, a cut-glass dram of whisky out of focus behind, a burgundy wool runner on a dark oak table, a pepper mill at the frame's edge. Burgundy and parchment palette, shallow depth of field, single low side light. No text, no hands, no branding.",
    authenticityNote: "Haggis is Scotland's national dish, given its Address by Burns in 1786 and fixed in the calendar by the Burns suppers his friends began holding in 1801, from which the 25 January birthday date settled; it is also eaten on St Andrew's Day. Two points of accuracy matter here: neeps in Scotland means swede, the large yellow-fleshed root, not the small white summer turnip; and a home-made haggis needs a sheep's pluck and stomach that most butchers now supply only to order, which is why we treat a bought haggis as the honest starting point. Whisky sauce is a late-twentieth-century restaurant flourish, not part of the tradition, and clapshot, in which the neeps and tatties are mashed together, is specifically Orcadian rather than general Scottish practice."
  },
  {
    slug: "stovies",
    title: "Stovies",
    region: "Scotland",
    category: "Regional Classics",
    difficulty: "Easy",
    prepMinutes: 20,
    cookMinutes: 70,
    serves: 4,
    editorialRating: 4.4,
    mostLoved: false,
    tags: [
      "one-pot",
      "leftovers",
      "budget",
      "make-ahead"
    ],
    story: "Stovies are what Monday did with Sunday. Dripping from the roasting tin, onions cooked down until they colour, potatoes left to collapse into the juices, and whatever beef or lamb came off the joint folded through at the end. Scots have eaten them after funerals and at ceilidhs for generations, out of a bowl, with oatcakes and a fork of pickled beetroot alongside.",
    ingredients: [
      {
        quantity: "50",
        unit: "g",
        item: "beef dripping, ideally skimmed from the roasting tin"
      },
      {
        quantity: "2",
        unit: "large",
        item: "onions, halved and thinly sliced"
      },
      {
        quantity: "1.2",
        unit: "kg",
        item: "floury potatoes such as King Edward, peeled"
      },
      {
        quantity: "300",
        unit: "g",
        item: "cold leftover roast beef or lamb, torn into rough chunks"
      },
      {
        quantity: "250",
        unit: "ml",
        item: "leftover gravy or beef stock"
      },
      {
        quantity: "1",
        unit: "tsp",
        item: "sea salt"
      },
      {
        quantity: "1",
        unit: "tsp",
        item: "coarsely ground black pepper"
      },
      {
        quantity: "8",
        unit: "",
        item: "oatcakes, to serve"
      },
      {
        quantity: "1",
        unit: "",
        item: "small jar of pickled beetroot, sliced, to serve"
      }
    ],
    method: [
      "Melt the dripping in a heavy cast-iron casserole over a medium heat. Add the onions and cook for 12-15 minutes, stirring every few minutes, until they are slack and properly golden and the edges catch and colour. This browning is where the whole flavour of the dish comes from, so give it the full time and never take the onions off the heat while they are still pale.",
      "Cut two-thirds of the potatoes into 4cm chunks and slice the remaining third thinly, about 5mm. The thin slices dissolve and thicken the pan while the chunks hold their shape. Add both to the onions, turn them through the fat until glossy, and season with the salt and pepper.",
      "Pour in the gravy or stock. It should come no more than a third of the way up the potatoes, because stovies steam far more than they boil. Bring to a simmer, press a disc of greaseproof paper onto the surface, clamp on the lid and turn the heat as low as it will go.",
      "Cook for 45-55 minutes, shaking the pan and turning everything over gently with a spoon every 15 minutes. Never stir hard: you want ragged edges melting into the juices, not mash. Add a splash of water only if the pan starts to sound dry and creak rather than sigh.",
      "Fold the meat through for the final 10 minutes, just long enough to heat it. It is already cooked and will go stringy if it simmers. The finished pan should be soft, faintly browned at the edges and only just holding its shape on a spoon. Check the seasoning and serve in bowls with oatcakes and sliced pickled beetroot."
    ],
    cooksNote: "Stovies are made by the fat, not the meat. Beef dripping skimmed from the Sunday roasting tin carries the browned sediment with it, and that is what makes a pan of potatoes taste of the joint that came before. If you have none, the set layer lifted off cold gravy does nearly as well. Vegetable oil will cook them through well enough and leave them tasting of nothing but potato.",
    image: "/generated/stovies.jpg",
    imagePrompt: "A shallow cast-iron pan of stovies on dark scrubbed oak, lit warm and moody from a low side window in magazine style. Potatoes half collapsed into glossy brown onion juices, browned edges catching the light, shreds of roast beef folded through, black pepper ground over the top. Props: oatcakes stacked on a small parchment-coloured plate, a bowl of sliced pickled beetroot glowing deep burgundy, a worn wooden spoon resting against the pan, a rumpled linen cloth. Burgundy and parchment palette, shallow depth of field, background dropping into shadow. No text, no hands, no branding.",
    authenticityNote: "Stovies are a Scottish leftovers dish whose name comes from the Scots verb to stove, meaning to stew slowly in a closed pot; the further derivation from the French etouffer is widely repeated but I would flag it as unverified folk etymology. Regional practice varies considerably: north-east and Aberdeenshire versions run drier and browner and may use mince or sliced sausage, west-coast ones are wetter, and a meatless pan of nothing but potatoes, onion and dripping is every bit as traditional as one with roast beef in it."
  },
  {
    slug: "cullen-skink",
    title: "Cullen Skink",
    region: "Scotland",
    category: "Soups & Stews",
    difficulty: "Easy",
    prepMinutes: 15,
    cookMinutes: 40,
    serves: 4,
    editorialRating: 4.8,
    mostLoved: true,
    tags: [
      "one-pot",
      "smoked haddock",
      "coastal",
      "winter"
    ],
    story: "Cullen sits on the Moray Firth, and its soup was built from what the harbour cured: Finnan haddock, cold-smoked over oak until the flesh turns amber and firm. Poach it in milk, thicken with the potato it was cooked beside, and you have a broth that tastes of smoke and sea without ever tipping into a chowder. Fishermen's food that outgrew the village.",
    ingredients: [
      {
        quantity: "450",
        unit: "g",
        item: "undyed smoked haddock, on the bone if you can get it"
      },
      {
        quantity: "600",
        unit: "ml",
        item: "whole milk"
      },
      {
        quantity: "400",
        unit: "ml",
        item: "cold water"
      },
      {
        quantity: "1",
        unit: "",
        item: "bay leaf"
      },
      {
        quantity: "40",
        unit: "g",
        item: "butter"
      },
      {
        quantity: "1",
        unit: "large",
        item: "onion, finely chopped"
      },
      {
        quantity: "500",
        unit: "g",
        item: "floury potatoes such as Maris Piper, peeled and cut into 2cm chunks"
      },
      {
        quantity: "2",
        unit: "tbsp",
        item: "flat-leaf parsley, chopped"
      },
      {
        quantity: "0.5",
        unit: "tsp",
        item: "ground white pepper"
      },
      {
        quantity: "a pinch",
        unit: "",
        item: "sea salt, to finish"
      }
    ],
    method: [
      "Lay the haddock in a wide pan with the milk, water and bay leaf. Bring to the barest tremble over a medium-low heat, then poach for 4-5 minutes, until the flesh parts into thick flakes at the touch of a knife. Lift the fish out onto a plate and keep every drop of the liquor.",
      "Skin and bone the haddock while it is warm, breaking it into large flakes. Strain the poaching liquor through a sieve to catch any stray bones, and set it aside.",
      "Melt the butter in a heavy pan over a low heat, add the onion and sweat gently for 8-10 minutes, stirring now and then, until it is translucent and slack. Do not let it take any colour: this soup should be ivory, not golden.",
      "Tip in the potatoes and pour over the strained liquor. Simmer, uncovered, for 16-18 minutes, until the chunks are soft enough to give at the edges. Crush about a third of the potato against the side of the pan with the back of a spoon and stir it through. That is all the thickening it needs.",
      "Return the flaked haddock, take the pan off the direct heat and let it warm through for 2-3 minutes. Do not let it boil, which turns cured fish squeaky. Add the white pepper and parsley, taste, and salt cautiously if at all. Smoked haddock has already done most of the seasoning."
    ],
    cooksNote: "Sourcing is most of this dish. Look for pale, straw-coloured fish sold on the bone, cold-smoked over oak so the flesh stays translucent and firm. The bright canary fillets on most counters are dyed and often only lightly smoked. They turn the milk an alarming yellow and give a flat, one-note smokiness where you want depth. The frame is worth having too: it throws enough gelatine into the milk to give the finished skink a faint silkiness that fillets alone never manage.",
    image: "/generated/cullen-skink.jpg",
    imagePrompt: "A wide, shallow cream stoneware bowl of Cullen skink on a scrubbed dark oak table, shot in warm, moody magazine lighting from a low side window. Pale flakes of smoked haddock and soft chunks of potato break the milky surface, scattered with chopped flat-leaf parsley and cracked white pepper. Props: a worn pewter soup spoon, two oatcakes, a burgundy linen napkin gathered at the edge, a small milk jug half in shadow. Burgundy and parchment palette, shallow depth of field, background falling to darkness. No text, no hands, no branding.",
    authenticityNote: "Named for the Banffshire fishing town of Cullen on the Moray Firth, where it was built on locally cured Finnan haddock; skink is the older Scots word for a shin-of-beef broth, later transferred to the fish version. Recipes genuinely differ on whether the potato is mashed in or left in chunks, and cream is a modern restaurant addition rather than a fixed part of the tradition, so we have left it out."
  },
  {
    slug: "scotch-broth",
    title: "Scotch Broth",
    region: "Scotland",
    category: "Soups & Stews",
    difficulty: "Easy",
    prepMinutes: 25,
    cookMinutes: 145,
    serves: 6,
    editorialRating: 4.6,
    mostLoved: false,
    tags: [
      "one-pot",
      "make-ahead",
      "mutton",
      "freezer-friendly"
    ],
    story: "Every Scottish kitchen once kept a pot of this going: a neck of mutton, a fistful of barley, dried peas set to soak the night before, and whatever roots the garden gave up. It was two meals in one, broth to start and the boiled meat to follow. What makes it itself is the barley, which swells until the spoon very nearly stands up in it.",
    ingredients: [
      {
        quantity: "1",
        unit: "kg",
        item: "mutton or lamb neck (scrag end), on the bone"
      },
      {
        quantity: "2.5",
        unit: "litres",
        item: "cold water"
      },
      {
        quantity: "100",
        unit: "g",
        item: "pearl barley, rinsed"
      },
      {
        quantity: "100",
        unit: "g",
        item: "dried yellow split peas, soaked overnight and drained"
      },
      {
        quantity: "2",
        unit: "",
        item: "carrots, cut into 1cm dice"
      },
      {
        quantity: "250",
        unit: "g",
        item: "swede, cut into 1cm dice"
      },
      {
        quantity: "1",
        unit: "large",
        item: "onion, finely chopped"
      },
      {
        quantity: "2",
        unit: "",
        item: "leeks, white and pale green only, sliced"
      },
      {
        quantity: "200",
        unit: "g",
        item: "green cabbage or curly kale, shredded"
      },
      {
        quantity: "3",
        unit: "tbsp",
        item: "flat-leaf parsley, chopped"
      },
      {
        quantity: "1.5",
        unit: "tsp",
        item: "sea salt, plus more to taste"
      },
      {
        quantity: "1",
        unit: "tsp",
        item: "coarsely ground black pepper"
      }
    ],
    method: [
      "The night before, cover the split peas generously with cold water and leave to soak. They will roughly double, and unsoaked they never collapse properly into the broth.",
      "Put the mutton in a large pot, pour over the cold water and bring it very slowly to a boil, which takes 12-15 minutes. Skim the grey foam from the surface for the first five minutes, until only clear bubbles rise. Starting from cold and going slowly is what keeps the finished broth clear rather than cloudy.",
      "Add the barley and the drained peas. Half-cover and simmer gently for 1 hour 15 minutes, stirring the base once or twice: barley sinks and catches. Scrag end needs that long before it will give up the bone.",
      "Stir in the carrot, swede and onion and simmer for a further 45 minutes, until the peas have broken down and the broth has thickened enough to coat the back of a spoon. Add the leeks for the last 15 minutes and the cabbage or kale for the last 8, so it keeps its bite and its colour.",
      "Lift out the mutton, strip the meat from the bones and shred it, discarding gristle and the bones themselves. Skim the fat from the surface with a ladle, return the meat, then season with the salt, pepper and parsley. Taste again once it is off the heat."
    ],
    cooksNote: "Barley keeps drinking. A broth judged exactly right on the night will set almost to a porridge in the fridge, which is no bad thing, because the flavour is squarely better on the second day. Loosen it as you reheat with a ladle of plain water rather than more stock. The pot is already well seasoned, and stock will only push it salty and heavy.",
    image: "/generated/scotch-broth.jpg",
    imagePrompt: "A deep cream enamel bowl of Scotch broth on a parchment-coloured cloth over dark wood, lit warm and low from one side in moody magazine style. The broth is thick with pearl barley, diced carrot and swede, shreds of mutton and ribbons of green kale, with steam catching the light. Props: a battered cast-iron pot behind and out of focus, a bone-handled spoon, a torn piece of bread on a small plate, a burgundy tea towel. Burgundy and parchment palette, shallow depth of field, deep shadow in the corners. No text, no hands, no branding.",
    authenticityNote: "A long-standing Scottish household soup built on mutton, barley and dried peas, traditionally served as two courses with the boiled meat carried to the table separately after the broth. Vegetable proportions were always a matter of what the garden held, so treat ours as representative; the inclusion of dried peas alongside barley is standard in older Scottish recipes but not universal in every household version."
  },
  {
    slug: "roast-leg-of-lamb-with-rowan-jelly",
    title: "Roast Leg of Lamb with Rowan Jelly",
    region: "Scotland",
    category: "Sunday Roasts",
    difficulty: "Intermediate",
    prepMinutes: 25,
    cookMinutes: 115,
    serves: 6,
    editorialRating: 4.6,
    mostLoved: false,
    tags: [
      "sunday lunch",
      "scotch lamb",
      "rowan jelly",
      "roasting"
    ],
    story: "Blackface and Cheviot sheep graze the Scottish hills on heather and rough grass, and the meat comes off them leaner and more savoury than lowland lamb. Rowan jelly is the Highland answer to it: a clear, bitter-sweet preserve made from the berries of the mountain ash, gathered after the first frost has taken the worst of their sharpness. Spooned into the pan juices, it cuts the fat without sweetening the gravy into a sauce.",
    ingredients: [
      {
        quantity: "2.2",
        unit: "kg",
        item: "bone-in leg of Scotch lamb, out of the fridge for 1 hour"
      },
      {
        quantity: "4",
        unit: "",
        item: "garlic cloves, cut lengthways into thin slivers"
      },
      {
        quantity: "3",
        unit: "",
        item: "rosemary sprigs, broken into short spikes"
      },
      {
        quantity: "2",
        unit: "tbsp",
        item: "cold-pressed rapeseed oil"
      },
      {
        quantity: "2",
        unit: "tsp",
        item: "flaky sea salt"
      },
      {
        quantity: "1",
        unit: "tsp",
        item: "black pepper, coarsely ground"
      },
      {
        quantity: "2",
        unit: "",
        item: "onions, thickly sliced"
      },
      {
        quantity: "3",
        unit: "",
        item: "carrots, halved lengthways"
      },
      {
        quantity: "1",
        unit: "tbsp",
        item: "plain flour"
      },
      {
        quantity: "150",
        unit: "ml",
        item: "dry red wine"
      },
      {
        quantity: "400",
        unit: "ml",
        item: "lamb or beef stock"
      },
      {
        quantity: "5",
        unit: "tbsp",
        item: "rowan jelly"
      }
    ],
    method: [
      "Heat the oven to 220C/200C fan/gas 7. Make about twenty deep slits in the lamb with the point of a small knife, angling into the meat rather than straight down, and push a sliver of garlic and a spike of rosemary into each. Rub all over with the rapeseed oil, then the salt and pepper, working it into the scored fat.",
      "Lay the onions and carrots in a roasting tin as a trivet and sit the lamb on top. Roast for 20 minutes, until the fat has blistered and taken colour at the edges. Drop the oven to 180C/160C fan/gas 4 and roast for a further 1 hour 10 minutes for pink meat: a probe into the thickest part, clear of the bone, should read 54 to 56C. For medium, give it another 10 to 15 minutes and look for 58 to 60C.",
      "Lift the lamb onto a warmed platter, tent loosely with foil and rest for 25 minutes. It will climb another 4 to 6C as it sits, settling at 58 to 62C for pink, and the juices will stop running the moment you carve.",
      "Pour off all but about 2 tablespoons of fat from the tin. Set it over a medium heat on the hob, stir the flour through the vegetables and cook for 1 minute, until the raw floury smell has gone and the paste clinging to the carrots has darkened a shade. Pour in the wine, scrape up everything stuck to the base and let it bubble for 2 to 3 minutes until syrupy. Add the stock, simmer for 6 to 8 minutes, then strain into a pan, pressing the vegetables to get the last of it.",
      "Take the gravy off the heat and whisk in 2 tablespoons of the rowan jelly until it dissolves and the surface turns glossy. Taste for salt. Carve the lamb and serve with the remaining rowan jelly in a small dish at the table."
    ],
    cooksNote: "The knuckle end of a leg always runs ahead of the fillet end, and that is worth using rather than fighting: carve from the shank for anyone who likes their lamb properly done and work back towards the wide end for pink. When you probe, keep the tip clear of the bone. The meat immediately around it lags several degrees behind the rest and a reading taken there will have you pulling the joint far too early.",
    image: "/generated/roast-leg-of-lamb-with-rowan-jelly.jpg",
    imagePrompt: "Warm, moody magazine-style food photography of a carved bone-in roast leg of lamb on a scratched pewter platter, three thick pink slices fanned back from the bone, rosemary spikes and garlic slivers still visible in the salted crust. Alongside sits a small footed glass dish of clear amber rowan jelly, and behind it a burgundy enamel jug of dark gravy. Parchment linen cloth, dark oak table, a few rowan berries on the stem scattered near the platter edge. Low raking window light from the left, deep falling shadows, burgundy and parchment palette. Shallow depth of field on the front slice. No text, no hands, no branding.",
    authenticityNote: "Hill lamb from Blackface and Cheviot flocks and rowan jelly are both firmly Scottish, and rowan jelly is served with lamb and mutton across the Highlands. Its oldest and best-documented partner is venison and other game, so the lamb pairing should be read as established Scottish practice rather than a single fixed classic."
  },
  {
    slug: "dundee-cake",
    title: "Dundee Cake",
    region: "Scotland",
    category: "Teatime",
    difficulty: "Intermediate",
    prepMinutes: 35,
    cookMinutes: 115,
    serves: 12,
    editorialRating: 4.5,
    mostLoved: false,
    tags: [
      "fruit cake",
      "afternoon tea",
      "keeps well",
      "baking"
    ],
    story: "Dundee cake is defined as much by what it leaves out as by what it holds. No glace cherries, no dark treacle heaviness, just currants, sultanas, candied orange peel and a spoonful of Seville marmalade in a batter lightened with ground almonds. The city's nineteenth-century marmalade makers are credited with it, and the concentric rings of blanched almonds across the top are not decoration but the mark that tells you which cake you are looking at.",
    ingredients: [
      {
        quantity: "175",
        unit: "g",
        item: "unsalted butter, softened"
      },
      {
        quantity: "175",
        unit: "g",
        item: "light muscovado sugar"
      },
      {
        quantity: "3",
        unit: "large",
        item: "eggs, beaten"
      },
      {
        quantity: "225",
        unit: "g",
        item: "plain flour"
      },
      {
        quantity: "1",
        unit: "tsp",
        item: "baking powder"
      },
      {
        quantity: "50",
        unit: "g",
        item: "ground almonds"
      },
      {
        quantity: "175",
        unit: "g",
        item: "sultanas"
      },
      {
        quantity: "175",
        unit: "g",
        item: "currants"
      },
      {
        quantity: "75",
        unit: "g",
        item: "candied orange peel, finely chopped"
      },
      {
        quantity: "1",
        unit: "",
        item: "orange, zest finely grated"
      },
      {
        quantity: "2",
        unit: "tbsp",
        item: "Seville orange marmalade"
      },
      {
        quantity: "2",
        unit: "tbsp",
        item: "Scotch whisky"
      },
      {
        quantity: "60",
        unit: "g",
        item: "whole blanched almonds (about 50)"
      },
      {
        quantity: "1",
        unit: "tbsp",
        item: "whole milk, for glazing"
      }
    ],
    method: [
      "Heat the oven to 150C/130C fan/gas 2. Grease a 20cm deep round tin and double-line it with baking parchment, letting the collar stand 5cm above the rim. Toss the sultanas, currants and candied peel with 1 tablespoon of the flour so they hold their place in the batter.",
      "Beat the butter and muscovado sugar for 4 to 5 minutes until pale and noticeably lighter in texture. Add the eggs a tablespoon at a time, beating well between additions, and drop in a spoonful of the flour with each of the last two additions to stop the mixture splitting.",
      "Sift in the remaining flour with the baking powder, add the ground almonds and fold through with a large metal spoon. Fold in the floured fruit and peel, the orange zest, marmalade and whisky. The batter should drop reluctantly from the spoon.",
      "Spoon into the tin, level the surface and press a shallow hollow into the centre with the back of the spoon so the cake bakes flat rather than domed. Lay the blanched almonds on top in three rings, pointed ends outwards: about 26 around the edge, 16 in the middle ring and 8 in the centre. Set each one on the surface without pressing it in. Brush the almonds lightly with the milk.",
      "Bake for 1 hour 45 minutes to 2 hours. Once the almonds have taken a hazel colour, at about 1 hour 15 minutes, lay a sheet of foil loosely over the top. It is ready when a skewer into the centre comes out clean and the cake has just begun to shrink from the sides of the tin.",
      "Cool in the tin for 40 minutes, then turn out onto a rack. Wrap in greaseproof and then foil and leave for three days before cutting: the crumb tightens and the orange comes forward."
    ],
    cooksNote: "Lay the almonds out in their three rings on a plate and count them before you go anywhere near the cake. Once your fingers are buttery and the surface has started to skin over you get one attempt at the geometry, and an almond pressed down to correct a gap will sink and vanish during the long bake. Set each one on top of the batter, pointed end facing outwards, with no pressure at all.",
    image: "/generated/dundee-cake.jpg",
    imagePrompt: "Warm, moody magazine-style food photography of a whole Dundee cake on a footed cream cake stand, its flat top completely covered by three concentric rings of whole blanched almonds glazed to a soft hazel sheen. One slice has been cut and laid on a small plate in front, showing the pale golden crumb dense with currants, sultanas and flecks of candied orange peel. Dark oak table, parchment cloth, a squat jar of Seville marmalade behind and out of focus. Warm raking light from the right, burgundy and parchment palette, shadows pooling at the edges. Shallow depth of field on the cut slice. No text, no hands, no branding.",
    authenticityNote: "The cake is named for and associated with Dundee, and the standard account links it to the city's nineteenth-century marmalade trade and the Keiller firm in particular, though the documentary chain is thinner than the story implies and I flag it as attribution rather than fact. The absence of glace cherries and the concentric blanched-almond top are the reliably attested markers. Whisky in the batter is usual in modern Scottish versions and is kept small here."
  },
  {
    slug: "scottish-shortbread",
    title: "Scottish Shortbread",
    region: "Scotland",
    category: "Teatime",
    difficulty: "Easy",
    prepMinutes: 50,
    cookMinutes: 55,
    serves: 8,
    editorialRating: 4.9,
    mostLoved: true,
    tags: [
      "baking",
      "petticoat tails",
      "hogmanay",
      "make-ahead"
    ],
    story: "Three parts flour, two parts butter, one part sugar. Scottish shortbread holds to that ratio because anything richer slumps in the tin and anything leaner bakes into an ordinary biscuit. Petticoat tails are the oldest shape: a single round pressed into a tin, crimped at the edge, pricked and scored into wedges before it goes near the oven. Ground rice gives the sandy break that separates a proper shortbread from sweet pastry. It should never colour past straw.",
    ingredients: [
      {
        quantity: "200",
        unit: "g",
        item: "unsalted butter, softened but still cool"
      },
      {
        quantity: "100",
        unit: "g",
        item: "caster sugar"
      },
      {
        quantity: "250",
        unit: "g",
        item: "plain flour"
      },
      {
        quantity: "50",
        unit: "g",
        item: "ground rice"
      },
      {
        quantity: "0.5",
        unit: "tsp",
        item: "fine sea salt"
      },
      {
        quantity: "15",
        unit: "g",
        item: "unsalted butter, for the tin"
      },
      {
        quantity: "2",
        unit: "tbsp",
        item: "caster sugar, for dusting"
      }
    ],
    method: [
      "Butter a 20cm round loose-bottomed sandwich tin. Heat the oven to 150C/130C fan/gas 2.",
      "Beat the 200g butter with the caster sugar using a wooden spoon for 1 to 2 minutes, only until they come together and lighten slightly. Do not cream them to a fluff. Air beaten in now makes the shortbread rise in the tin and bake cakey rather than short.",
      "Sift the flour, ground rice and salt over the top. Cut through with a palette knife, then rub with your fingertips until the mixture looks like coarse damp crumbs. Press it together with the heel of your hand two or three times, no more, until it just holds as a rough dough.",
      "Press the dough evenly into the tin to a depth of about 1.7cm, levelling it with the back of a spoon. Crimp the edge between finger and thumb, prick right through to the base with a fork in two concentric rings, then score into 8 wedges, cutting two-thirds of the way down. Chill for 30 minutes.",
      "Bake for 50 to 55 minutes, until an even pale straw colour with only the crimped edge a shade darker, and the centre firm with the very slightest give under a fingertip. Dust with the 2 tbsp caster sugar while hot, re-cut the wedges straight away, then leave in the tin for 20 minutes before lifting onto a rack."
    ],
    cooksNote: "Cut the wedges through the moment the tin leaves the oven, while the shortbread is still hot and faintly yielding. Ten minutes later the sugars have set and a knife shatters it rather than parting it. And take it out while the centre still gives slightly: it firms considerably as it cools in the tin, and shortbread baked to the point where it feels finished in the oven will be dry and chalky by teatime.",
    image: "/generated/scottish-shortbread.jpg",
    imagePrompt: "Warm, moody magazine-style food photography of a round of Scottish shortbread petticoat tails, pale straw-coloured, crimped around the edge and cut into eight wedges, with one wedge lifted slightly clear to show the sandy break along the crumb. Scattered caster sugar catches the light on the surface and the fork-prick rings are clearly visible. Shown in a parchment-lined shallow tin on a dark oak table, with a bone-handled knife and a burgundy-glazed teacup behind, out of focus. Warm low side light, burgundy and parchment palette, soft deep shadow. Shallow depth of field on the lifted wedge. No text, no hands, no branding.",
    authenticityNote: "The 3:2:1 flour, butter and sugar ratio and the crimped, wedge-scored petticoat-tail round are both long-standing Scottish practice, and ground rice or fine semolina is a traditional though not universal addition for texture. The popular story linking petticoat tails to Mary, Queen of Scots is folklore: the derivation of the name is genuinely uncertain and I make no claim for it."
  },
  {
    slug: "glamorgan-sausages",
    title: "Glamorgan Sausages",
    region: "Wales",
    category: "Breakfast",
    difficulty: "Easy",
    prepMinutes: 30,
    cookMinutes: 16,
    serves: 4,
    editorialRating: 4.5,
    mostLoved: false,
    tags: [
      "meatless",
      "make-ahead",
      "st david's day",
      "brunch"
    ],
    story: "Selsig Morgannwg carry no meat at all. Caerphilly, leek and breadcrumbs are bound with egg into short fat sausages, crumbed and fried until the crust cracks and the middle runs soft. George Borrow praised them in Wild Wales in 1862, when they were already a Glamorgan fixture. Welsh food writers often trace them to cheese from the near-extinct Glamorgan cattle, though the link is undocumented.",
    ingredients: [
      {
        quantity: "25",
        unit: "g",
        item: "butter"
      },
      {
        quantity: "1",
        unit: "large",
        item: "leek, white and pale green only, finely chopped"
      },
      {
        quantity: "175",
        unit: "g",
        item: "Caerphilly cheese, coarsely grated"
      },
      {
        quantity: "150",
        unit: "g",
        item: "fresh white breadcrumbs"
      },
      {
        quantity: "2",
        unit: "",
        item: "eggs, separated"
      },
      {
        quantity: "1",
        unit: "tsp",
        item: "English mustard powder"
      },
      {
        quantity: "2",
        unit: "tbsp",
        item: "flat-leaf parsley, finely chopped"
      },
      {
        quantity: "1",
        unit: "tsp",
        item: "thyme leaves"
      },
      {
        quantity: "0.5",
        unit: "tsp",
        item: "sea salt"
      },
      {
        quantity: "0.5",
        unit: "tsp",
        item: "black pepper, freshly ground"
      },
      {
        quantity: "75",
        unit: "g",
        item: "dried white breadcrumbs, for coating"
      },
      {
        quantity: "2",
        unit: "tbsp",
        item: "plain flour, for dusting"
      },
      {
        quantity: "4",
        unit: "tbsp",
        item: "sunflower oil, for frying"
      }
    ],
    method: [
      "Melt the butter in a frying pan over a low heat and sweat the leek with a pinch of salt for 8 minutes, stirring, until completely soft and sweet with no raw bite left. Tip into a large bowl and leave to cool.",
      "Add the Caerphilly, fresh breadcrumbs, mustard powder, parsley, thyme, salt and black pepper. Stir in the egg yolks and work the mixture with your hands until it holds together firmly when squeezed.",
      "Divide into eight and roll each portion into a sausage about 8cm long and 3cm thick. Chill on a tray for 30 minutes; they stay fragile until the crumbs have swollen and the cheese has firmed up.",
      "Beat the egg whites in a shallow dish. Roll each sausage in flour, then the whites, then the dried breadcrumbs, pressing gently so the coating sticks all the way round including the ends.",
      "Heat the oil in a frying pan over a medium heat. Fry the sausages for 6 to 8 minutes, turning every couple of minutes, until deep golden all over and hot through. Drain briefly on kitchen paper and serve at once."
    ],
    cooksNote: "Caerphilly is the point, and it behaves quite differently from Cheddar: drier and more acidic, it crumbles through the breadcrumbs instead of melting into a puddle. Use a genuinely young, moist Caerphilly if you can find one, because an aged wedge dries the middle out.",
    image: "/generated/glamorgan-sausages.jpg",
    imagePrompt: "Eight golden crumbed Glamorgan sausages on a warm cream ceramic plate, one broken open to show the pale interior of melted Caerphilly, soft leek and breadcrumb. Warm moody light raking from the left, deep burgundy shadows, parchment linen over a scrubbed dark wood board. A small dish of chutney, a few raw leek rings and a wedge of crumbly white Caerphilly sit behind, softly out of focus. Shallow depth of field with the split sausage sharp. Editorial British food photography. No text, no hands, no branding.",
    authenticityNote: "Glamorgan sausages are securely Welsh, named for the historic county and built on Caerphilly, leek and breadcrumb in every published version. George Borrow's Wild Wales (1862) is the reference usually cited for their antiquity; the claim that they were originally made with cheese from the extinct Glamorgan cattle breed is widely repeated in Welsh food writing but I could not verify it against a primary source."
  },
  {
    slug: "welsh-oggie",
    title: "Welsh Oggie",
    region: "Wales",
    category: "Pies & Pastries",
    difficulty: "Intermediate",
    prepMinutes: 45,
    cookMinutes: 60,
    serves: 4,
    editorialRating: 4.7,
    mostLoved: false,
    tags: [
      "picnic",
      "make-ahead",
      "freezer-friendly",
      "hand-held"
    ],
    story: "The oggie is the Welsh pasty: lamb, leek, potato and swede sealed raw in shortcrust so the meat steams in its own juices. It belongs to the south Wales coalfield, carried underground and eaten cold, its thick crimped edge said to serve as a handle for coal-black hands. Made large, one oggie is a full meal, and the crimp should run the length of the top.",
    ingredients: [
      {
        quantity: "500",
        unit: "g",
        item: "plain flour, plus extra for dusting"
      },
      {
        quantity: "125",
        unit: "g",
        item: "cold lard, diced"
      },
      {
        quantity: "125",
        unit: "g",
        item: "cold butter, diced"
      },
      {
        quantity: "1",
        unit: "tsp",
        item: "fine salt"
      },
      {
        quantity: "130",
        unit: "ml",
        item: "ice-cold water"
      },
      {
        quantity: "450",
        unit: "g",
        item: "lamb shoulder, trimmed and cut into 1cm dice"
      },
      {
        quantity: "2",
        unit: "",
        item: "leeks, split, washed and finely sliced"
      },
      {
        quantity: "250",
        unit: "g",
        item: "waxy potatoes, peeled and cut into 5mm dice"
      },
      {
        quantity: "150",
        unit: "g",
        item: "swede, peeled and cut into 5mm dice"
      },
      {
        quantity: "1",
        unit: "tsp",
        item: "thyme leaves"
      },
      {
        quantity: "1",
        unit: "tsp",
        item: "sea salt"
      },
      {
        quantity: "1",
        unit: "tsp",
        item: "coarsely ground black pepper"
      },
      {
        quantity: "25",
        unit: "g",
        item: "butter, diced"
      },
      {
        quantity: "1",
        unit: "",
        item: "egg, beaten, to glaze"
      }
    ],
    method: [
      "Rub the lard and butter into the flour and fine salt until it looks like coarse breadcrumbs with some larger flakes still visible. Add the water and bring together quickly into a firm dough. Wrap and chill for 30 minutes.",
      "Mix the lamb, leek, potato, swede, thyme, sea salt and pepper in a bowl. Do not cook any of it: everything goes in raw, and the vegetables release the liquid that stews the lamb inside the crust.",
      "Divide the pastry into four and roll each piece to a 22cm round, about 4mm thick. Pile a quarter of the filling down the centre of each, leaving a clear 2cm border, and dot with the diced butter.",
      "Brush the border with water, bring the two sides up to meet over the filling and press together. Crimp the seam over on itself in overlapping folds along its whole length, then cut a small steam vent in the top.",
      "Chill the oggies for 20 minutes, then glaze with beaten egg. Bake at 200°C (180°C fan, gas 6) for 15 minutes, drop to 170°C (150°C fan, gas 3) and bake for a further 45 minutes, until deep golden and firm underneath.",
      "Rest on a wire rack for 15 minutes before eating. The filling is molten straight from the oven, and the pastry needs that time to reabsorb steam so the base stops being soggy."
    ],
    cooksNote: "Dice the swede and potato smaller than feels necessary, 5mm rather than chunks. They get exactly the same hour in the oven as the lamb, and anything larger comes out chalky in the middle of an otherwise finished pasty.",
    image: "/generated/welsh-oggie.jpg",
    imagePrompt: "Four large Welsh oggies on a blackened baking tray, deep burnished gold with a thick rope crimp running the length of each top and a dark steam vent. One broken open to show diced lamb, leek, potato and swede in a glossy amber gravy. Warm moody light from a single low window, deep burgundy shadows, parchment cloth and a scrubbed oak board. A knife, scattered flour and raw leek tops behind, softly blurred. Shallow depth of field with the crimp sharp. Editorial British food photography. No text, no hands, no branding.",
    authenticityNote: "The oggie is the recognised Welsh pasty, strongly associated with the south Wales mining valleys, and the lamb-and-leek filling is its standard modern form. Two details deserve care: the crimp-as-handle story is a widely told miners' tradition rather than a documented practice, and the degree of historical continuity between the modern oggie and older Welsh 'hoggan' baking is genuinely disputed."
  },
  {
    slug: "monmouth-pudding",
    title: "Monmouth Pudding",
    region: "Wales",
    category: "Puddings & Desserts",
    difficulty: "Easy",
    prepMinutes: 25,
    cookMinutes: 30,
    serves: 6,
    editorialRating: 4.4,
    mostLoved: false,
    tags: [
      "nursery pudding",
      "meringue",
      "store-cupboard",
      "welsh borders"
    ],
    story: "A Monmouthshire way with stale bread: warm milk poured over crumbs, raspberry jam spread between them, and a soft meringue built through the pudding in strata rather than piled on one deep dish. Crisp and faintly bronze on top, lemon-scented underneath, it is the frugal cousin of Queen of Puddings, and it turns three-day-old bread into pudding for six.",
    ingredients: [
      {
        quantity: "300",
        unit: "ml",
        item: "whole milk"
      },
      {
        quantity: "25",
        unit: "g",
        item: "butter"
      },
      {
        quantity: "50",
        unit: "g",
        item: "caster sugar, for the base"
      },
      {
        quantity: "1",
        unit: "",
        item: "lemon, zest finely grated"
      },
      {
        quantity: "110",
        unit: "g",
        item: "fresh white breadcrumbs, from two- or three-day-old bread"
      },
      {
        quantity: "2",
        unit: "large",
        item: "eggs, separated"
      },
      {
        quantity: "a pinch",
        unit: "",
        item: "fine sea salt"
      },
      {
        quantity: "150",
        unit: "g",
        item: "raspberry jam"
      },
      {
        quantity: "100",
        unit: "g",
        item: "caster sugar, for the meringue"
      },
      {
        quantity: "10",
        unit: "g",
        item: "butter, for the dish"
      }
    ],
    method: [
      "Warm the milk with the 25g butter, the 50g caster sugar and the lemon zest until it steams and the butter has melted, stirring to dissolve the sugar. Do not let it come to the boil.",
      "Pour it over the breadcrumbs, stir once and leave for 15 minutes to swell, then beat in the egg yolks and the pinch of salt. Heat the oven to 150°C fan (170°C/gas 3) and butter a 1.2-litre pie dish.",
      "Warm the jam in a small pan with a teaspoon of water until it is loose enough to spread without dragging the softened crumbs out of place. Take it off the heat before it bubbles.",
      "Whisk the egg whites to stiff peaks in a spotlessly clean bowl, then add the 100g caster sugar a spoonful at a time, whisking to a thick, glossy meringue that holds a firm peak on the whisk.",
      "Spread half the crumb mixture into the dish, spread half the warmed jam over it, then half the meringue. Repeat the three layers, finishing with meringue swirled into peaks and taken right to the rim.",
      "Bake for 25 to 30 minutes, until the peaks are crisp and faintly bronze at the tips and the base has set enough to hold a spoon mark. Rest for 10 minutes and serve warm."
    ],
    cooksNote: "Use fresh crumbs, never dried ones from a packet. Dried crumbs drink the milk without ever softening and leave a gritty, sandy base under all that meringue. Take crusts off bread that is two or three days old and grate it on the coarse side of a box grater, or blitz it in short bursts and stop while there is still some texture in it. Bread any fresher than that pastes rather than crumbs.",
    image: "/generated/monmouth-pudding.jpg",
    imagePrompt: "A shallow cream enamel pie dish of Monmouth pudding, the meringue peaked and tipped bronze at the edges, one serving lifted out with a worn silver spoon to reveal the strata beneath: pale lemon-scented crumb, a seam of dark raspberry jam, another band of meringue. Props: an open jar of raspberry jam with a spoon standing in it, a cut lemon half, a burgundy linen napkin, a stack of parchment-coloured pudding bowls. Warm, moody, magazine-style light raking from the left; shallow depth of field; slightly overhead three-quarter angle. No text, no hands, no branding.",
    authenticityNote: "Monmouth pudding takes its name from Monmouthshire and appears in Welsh and Border collections, its defining marks being the milk-soaked breadcrumb base, raspberry jam and meringue. Monmouthshire's own status was contested: it was administered under the 'Wales and Monmouthshire' formula and not unambiguously part of Wales until 1974, so this is a borderland dish and the Welsh claim is territorial rather than uncontested. Sources also differ on whether the meringue is layered through the pudding or spread only over the top; I have layered it, which is the form more commonly given."
  },
  {
    slug: "anglesey-eggs",
    title: "Anglesey Eggs",
    region: "Wales",
    category: "Regional Classics",
    difficulty: "Easy",
    prepMinutes: 25,
    cookMinutes: 50,
    serves: 4,
    editorialRating: 4.5,
    mostLoved: false,
    tags: [
      "meat-free",
      "leeks",
      "one-dish",
      "family supper"
    ],
    story: "Wyau Ynys Môn belongs to Anglesey, where leeks and potatoes were mashed together, halved boiled eggs set among them and Caerphilly sauce poured over before the dish went under the heat to brown. It is a Friday sort of supper, meatless without announcing it, and the leek must be softened until sweet or the mash tastes raw and grassy.",
    ingredients: [
      {
        quantity: "900",
        unit: "g",
        item: "floury potatoes such as Maris Piper, peeled and quartered"
      },
      {
        quantity: "3",
        unit: "medium",
        item: "leeks, trimmed, split lengthways and finely sliced (about 400g)"
      },
      {
        quantity: "50",
        unit: "g",
        item: "salted butter, for the leeks and mash"
      },
      {
        quantity: "8",
        unit: "large",
        item: "eggs"
      },
      {
        quantity: "40",
        unit: "g",
        item: "butter, for the sauce"
      },
      {
        quantity: "40",
        unit: "g",
        item: "plain flour"
      },
      {
        quantity: "500",
        unit: "ml",
        item: "whole milk"
      },
      {
        quantity: "175",
        unit: "g",
        item: "Caerphilly, crumbled"
      },
      {
        quantity: "40",
        unit: "g",
        item: "fresh white breadcrumbs"
      },
      {
        quantity: "a pinch",
        unit: "",
        item: "nutmeg, freshly grated"
      },
      {
        quantity: "1",
        unit: "tsp",
        item: "fine sea salt, plus white pepper"
      }
    ],
    method: [
      "Boil the potatoes in well-salted water for 18 to 20 minutes, until a knife slides in without resistance, then drain and leave them to steam dry in the colander for 5 minutes.",
      "Meanwhile lower the eggs into simmering water and cook for 8 minutes for a just-firm yolk, then cool them under cold running water, peel and halve lengthways.",
      "Melt the 50g butter in a wide pan and sweat the leeks with a pinch of salt over a low heat for 10 to 12 minutes, until collapsed and sweet but not coloured. Mash the potatoes, beat in the leeks with 100ml of the milk and season with salt and white pepper.",
      "For the sauce, melt the 40g butter, stir in the flour and cook for 2 minutes without letting it colour, then whisk in the remaining 400ml milk a little at a time. Simmer for 5 minutes, take off the heat and stir in 125g of the Caerphilly and the nutmeg.",
      "Butter a shallow 2.5-litre (4½ pint) baking dish; the mash, eggs and sauce together come to a little over two litres, so anything smaller boils over as it heats. Spoon the leek mash around the sides in a thick collar, set the egg halves cut-side up in the well and pour the cheese sauce over them.",
      "Scatter over the breadcrumbs and the last of the Caerphilly and bake at 180°C fan (200°C/gas 6) for 20 to 25 minutes, until bubbling at the edges and browned on top. Give it 2 minutes under a hot grill if it needs more colour."
    ],
    cooksNote: "Keep the mash stiffer than you would serve it on its own. It has to stand as a wall around the eggs and hold the sauce off the base of the dish, so hold back milk rather than adding it, and stop while the mash still takes a ridge from the spoon. Loosen it fully and it slumps into the sauce as the dish heats, and everything bakes down into one grey layer.",
    image: "/generated/anglesey-eggs.jpg",
    imagePrompt: "An oval earthenware baking dish of Anglesey eggs straight from the oven, a thick collar of leek-flecked mash browned along its ridges around a centre of halved boiled eggs under bubbling Caerphilly sauce, breadcrumbs crisped to gold on top. A spoonful has been served onto a parchment-coloured plate, a bright yolk half showing. Props: a bundle of trimmed leeks, a wedge of crumbly white Caerphilly, a burgundy tea towel draped over the dish handle. Warm, moody, low window light; steam rising; shallow depth of field; close three-quarter angle. No text, no hands, no branding.",
    authenticityNote: "Wyau Ynys Môn is attributed to Anglesey and appears in Welsh regional collections as a leek, potato, egg and cheese-sauce bake, with Caerphilly the cheese usually named. I have not been able to trace a printed source earlier than the twentieth century, and North Walian cooks would as readily have used a hard local cheese in its place."
  },
  {
    slug: "faggots-with-peas-and-onion-gravy",
    title: "Faggots with Peas and Onion Gravy",
    region: "Wales",
    category: "Regional Classics",
    difficulty: "Intermediate",
    prepMinutes: 30,
    cookMinutes: 65,
    serves: 4,
    editorialRating: 4.7,
    mostLoved: false,
    tags: [
      "offal",
      "caul fat",
      "overnight soak",
      "freezer-friendly",
      "make-ahead"
    ],
    story: "Faggots are the butcher's answer to the pig's offal: liver and belly minced with onion, sage and breadcrumbs, rolled into balls, wrapped in a lacy sheet of caul fat and baked until the caul melts and glazes them. In the valleys of south Wales they come with mushy marrowfat peas and a jug of dark onion gravy, and the plate is not right without all three.",
    ingredients: [
      {
        quantity: "450",
        unit: "g",
        item: "pig's liver, trimmed of any tubes and roughly chopped"
      },
      {
        quantity: "300",
        unit: "g",
        item: "pork belly, skinned, boned and diced"
      },
      {
        quantity: "1",
        unit: "large",
        item: "onion, peeled and quartered"
      },
      {
        quantity: "100",
        unit: "g",
        item: "fresh white breadcrumbs"
      },
      {
        quantity: "2",
        unit: "tbsp",
        item: "sage leaves, finely chopped"
      },
      {
        quantity: "0.5",
        unit: "tsp",
        item: "ground mace"
      },
      {
        quantity: "2",
        unit: "tsp",
        item: "fine sea salt, plus plenty of coarsely ground black pepper"
      },
      {
        quantity: "150",
        unit: "g",
        item: "caul fat, soaked and drained"
      },
      {
        quantity: "250",
        unit: "g",
        item: "dried marrowfat peas, with their soaking tablet or 1 tsp bicarbonate of soda"
      },
      {
        quantity: "25",
        unit: "g",
        item: "butter, for the peas"
      },
      {
        quantity: "2",
        unit: "large",
        item: "onions, halved and thinly sliced"
      },
      {
        quantity: "30",
        unit: "g",
        item: "beef dripping"
      },
      {
        quantity: "1",
        unit: "tbsp",
        item: "plain flour"
      },
      {
        quantity: "600",
        unit: "ml",
        item: "beef stock"
      }
    ],
    method: [
      "The night before, cover the marrowfat peas with 1 litre of cold water, stir in the soaking tablet or bicarbonate of soda and leave for 12 hours. Next day drain them, rinse thoroughly and set aside.",
      "Mince the liver, pork belly and quartered onion through the coarse plate of a mincer, or pulse in short bursts in a food processor until coarse but well short of a paste. Mix in the breadcrumbs, sage, mace, salt and a heavy grinding of pepper.",
      "Divide into eight and roll into balls of about 130g each, then wrap each one in a stretched square of caul fat, pressing the join underneath. Pack them join-down into a buttered roasting tin so they hold one another upright, and bake at 180°C fan (200°C/gas 6) for 30 minutes, until browned and the caul has melted to a shine.",
      "Meanwhile melt the dripping in a heavy pan and cook the sliced onions over a medium heat for 20 to 25 minutes, stirring often, until deep brown and jammy at the edges. Scatter over the flour, cook for a minute, then pour in the stock and simmer for 10 minutes.",
      "Pour the gravy around the faggots and return the tin to the oven for 25 minutes, until the sauce is thick and the tops are dark. Simmer the drained peas in fresh unsalted water for 45 to 60 minutes, until they collapse when pressed.",
      "Drain the peas, beat in the butter and season well, keeping them coarse rather than smooth. Serve two faggots a head with a spoonful of gravy from the tin and the peas alongside."
    ],
    cooksNote: "Caul comes tightly folded and will tear if you fight it. Soak it for 20 minutes in cold water with a splash of vinegar, then float the sheet out flat in the bowl and lift it onto the board whole, rather than pulling at a corner. Wrapped join-down and packed shoulder to shoulder in a tin only just big enough, the faggots hold their shape without string, and the caul bastes them as it renders.",
    image: "/generated/faggots-with-peas-and-onion-gravy.jpg",
    imagePrompt: "Four faggots in a battered enamel roasting tin, burnished dark brown where the caul fat has melted and set to a glaze, sitting in a pool of glossy onion gravy thick with softened onion. Beside the tin, a warmed plate holds a mound of mushy marrowfat peas, green and coarse-textured, with a jug of extra gravy behind. Props: a few fresh sage leaves, a well-used serving spoon, a burgundy cloth, a parchment-coloured enamel plate. Warm, moody, low-key lighting from one side; steam catching the light; shallow depth of field; close three-quarter angle. No text, no hands, no branding.",
    authenticityNote: "Faggots (ffagots) are claimed by both south Wales and the English Black Country and the recipe is essentially shared between them; the Welsh basis here is their standing as a valleys and market-town staple served specifically with mushy marrowfat peas and onion gravy. The liver-to-belly ratio varies from butcher to butcher, and older recipes also worked in heart and lights, which are difficult to buy now."
  },
  {
    slug: "welsh-rarebit",
    title: "Welsh Rarebit",
    region: "Wales",
    category: "Regional Classics",
    difficulty: "Easy",
    prepMinutes: 10,
    cookMinutes: 16,
    serves: 4,
    editorialRating: 4.6,
    mostLoved: false,
    tags: [
      "supper",
      "cheese",
      "quick",
      "st david's day"
    ],
    story: "Rarebit is not cheese on toast, and the difference is a roux. Butter and flour are cooked out, slackened with dark ale, then loaded with so much mature cheese that the sauce turns glossy and elastic. Mustard and Worcestershire sharpen it; the grill blisters the top. It sets firm enough to cut, which is why it was a supper dish rather than a snack.",
    ingredients: [
      {
        quantity: "25",
        unit: "g",
        item: "butter"
      },
      {
        quantity: "25",
        unit: "g",
        item: "plain flour"
      },
      {
        quantity: "150",
        unit: "ml",
        item: "dark ale or stout"
      },
      {
        quantity: "250",
        unit: "g",
        item: "mature Cheddar, coarsely grated"
      },
      {
        quantity: "1",
        unit: "tsp",
        item: "English mustard powder"
      },
      {
        quantity: "2",
        unit: "tsp",
        item: "Worcestershire sauce"
      },
      {
        quantity: "1",
        unit: "",
        item: "egg yolk"
      },
      {
        quantity: "a pinch",
        unit: "",
        item: "cayenne pepper"
      },
      {
        quantity: "0.5",
        unit: "tsp",
        item: "freshly ground black pepper"
      },
      {
        quantity: "4",
        unit: "thick slices",
        item: "white bloomer or sourdough"
      }
    ],
    method: [
      "Melt the butter in a small heavy pan over a low heat, stir in the flour and cook for 2 minutes, stirring constantly, until the paste smells biscuity but has taken on no colour at all.",
      "Pour in the ale a splash at a time, beating hard after each addition so the roux stays smooth. Simmer for 3 minutes, until it is thick enough to hold a channel when you draw the spoon across the base of the pan.",
      "Take the pan off the heat and add the cheese in three handfuls, stirring until each has melted before the next goes in. Residual heat is enough; direct heat will split the sauce into oil and strings.",
      "Beat in the mustard powder, Worcestershire, cayenne, black pepper and finally the egg yolk. Scrape into a bowl and leave for 10 minutes to firm up to a thickly spreadable paste.",
      "Toast the bread on both sides, then spread the mixture right to the edges, at least 5mm thick. Grill 10cm from a hot element for 3 to 4 minutes, until blistered, bubbling and freckled dark brown at the peaks."
    ],
    cooksNote: "Make the paste a day ahead and keep it covered in the fridge. It spreads more cleanly when cold, browns more evenly under the grill, and keeps for four days, which is the classic way to use up a hardening end of Cheddar rather than a reason to buy new.",
    image: "/generated/welsh-rarebit.jpg",
    imagePrompt: "Two thick slices of grilled Welsh rarebit on a chipped enamel plate, the cheese surface blistered dark amber with molten channels between the peaks. One slice cut through to show the sauce set firm right to the crust. Warm low side light, deep burgundy shadows, parchment linen beneath. A half-glass of dark ale, a wooden-handled grater with cheese shreds and a small pot of English mustard sit behind, out of focus. Shallow depth of field, the blistered crust sharp. Moody magazine food photography. No text, no hands, no branding.",
    authenticityNote: "The dish appears in English sources from 1725 as 'Welsh rabbit', where the 'Welsh' was a slight rather than a claim of origin, and 'rarebit' is a later genteel correction. The roux-and-ale method with mustard is the standard set out in nineteenth- and twentieth-century British cookery writing, but readers should know the Welsh attribution rests on naming convention as much as on documented provenance."
  },
  {
    slug: "cawl",
    title: "Cawl",
    region: "Wales",
    category: "Soups & Stews",
    difficulty: "Easy",
    prepMinutes: 30,
    cookMinutes: 135,
    serves: 6,
    editorialRating: 4.8,
    mostLoved: true,
    tags: [
      "make-ahead",
      "one-pot",
      "st david's day",
      "two-day"
    ],
    story: "Cawl is the Welsh word for broth, and the dish is old enough that every valley claims its own version. What unites them is a bone-in cut of lamb simmered slowly with swede, leek and potato until the broth turns sweet and the meat gives way. It is deliberately made a day ahead: the fat sets, is lifted off, and the second-day bowl is the one worth waiting for.",
    ingredients: [
      {
        quantity: "1.2",
        unit: "kg",
        item: "lamb neck on the bone, cut into thick chops"
      },
      {
        quantity: "2",
        unit: "",
        item: "onions, peeled and quartered"
      },
      {
        quantity: "2",
        unit: "",
        item: "bay leaves"
      },
      {
        quantity: "3",
        unit: "sprigs",
        item: "thyme"
      },
      {
        quantity: "2",
        unit: "litres",
        item: "cold water"
      },
      {
        quantity: "300",
        unit: "g",
        item: "swede, peeled and cut into 3cm chunks"
      },
      {
        quantity: "3",
        unit: "",
        item: "carrots, peeled and cut into thick rounds"
      },
      {
        quantity: "1",
        unit: "",
        item: "parsnip, peeled and cut into thick rounds"
      },
      {
        quantity: "600",
        unit: "g",
        item: "floury potatoes, peeled and quartered"
      },
      {
        quantity: "3",
        unit: "",
        item: "leeks, split, washed and cut into 2cm slices"
      },
      {
        quantity: "4",
        unit: "tsp",
        item: "sea salt, plus more to taste"
      },
      {
        quantity: "1",
        unit: "tsp",
        item: "black pepper, coarsely ground"
      },
      {
        quantity: "3",
        unit: "tbsp",
        item: "flat-leaf parsley, chopped"
      },
      {
        quantity: "200",
        unit: "g",
        item: "Caerphilly cheese, to serve"
      }
    ],
    method: [
      "Put the lamb chops, onions, bay and thyme in a large heavy pan, pour over the cold water and bring slowly to a bare simmer. Skim the grey foam from the surface for the first ten minutes, then leave it to tick over, barely bubbling, for 1½ hours until the meat pulls easily from the bone.",
      "Lift out the lamb, stand the pan in a sink of cold water to cool it quickly, then refrigerate the broth overnight. This is the point of the dish, not an inconvenience. Pull the meat into large pieces, discard bone and gristle, and chill it separately.",
      "Next day, lift the set fat off the broth in sheets, keeping a spoonful back if you want it for frying. Bring the broth back to a simmer, add the swede and carrot, and cook for 12 minutes.",
      "Add the potato and parsnip and simmer for 15 minutes, until a knife slides into the potato with only slight resistance and the broth has thickened faintly from the released starch.",
      "Return the lamb, add the leeks and cook for a final 6 to 8 minutes, until the leeks are tender but still green. Season with the salt and black pepper, tasting until the broth reads properly seasoned rather than merely savoury, then scatter over the parsley and serve with crumbled Caerphilly and bread."
    ],
    cooksNote: "Break the potatoes deliberately. Crush two or three of the cooked pieces against the side of the pan before the leeks go in; the released starch gives cawl its characteristic cloudy body without flour, which is how it thickened before anyone thought to add any.",
    image: "/generated/cawl.jpg",
    imagePrompt: "A deep bowl of Welsh cawl on a scrubbed oak table, warm moody side light from a low window. Chunks of lamb, thick rounds of carrot, quartered floury potato and green leek sit in a cloudy amber broth flecked with parsley. A wedge of crumbly white Caerphilly and a torn slice of buttered bread rest on a parchment cloth beside it, with a pewter spoon. Burgundy and parchment palette, deep shadows, shallow depth of field with the broth surface sharp. Magazine food photography. No text, no hands, no branding.",
    authenticityNote: "Cawl is Wales's national dish, documented across the country with regional variation in the cut of meat — lamb or salt bacon inland, beef in parts of the south. The two-day method and the Caerphilly-and-bread accompaniment are widely attested; the exact vegetable proportions vary household to household and should be read as one good version rather than fixed canon."
  },
  {
    slug: "roast-welsh-lamb-with-honey-and-rosemary",
    title: "Roast Welsh Lamb with Honey and Rosemary",
    region: "Wales",
    category: "Sunday Roasts",
    difficulty: "Intermediate",
    prepMinutes: 25,
    cookMinutes: 90,
    serves: 6,
    editorialRating: 4.9,
    mostLoved: true,
    tags: [
      "sunday lunch",
      "st david's day",
      "easter",
      "roasting tin"
    ],
    story: "Welsh lamb has protected status, and the best of it grazes the salt marshes of the Gower, Carmarthen Bay and the Dee estuary, where samphire and sea thrift season the meat from the inside. A leg needs little: garlic and rosemary pushed into the flesh, and honey brushed on only at the end, once the fat has rendered and there is a crust for it to lacquer.",
    ingredients: [
      {
        quantity: "2.2",
        unit: "kg",
        item: "leg of Welsh lamb, salt marsh if you can get it, at room temperature"
      },
      {
        quantity: "4",
        unit: "",
        item: "garlic cloves, cut into slivers"
      },
      {
        quantity: "6",
        unit: "sprigs",
        item: "rosemary"
      },
      {
        quantity: "1",
        unit: "tbsp",
        item: "rapeseed oil"
      },
      {
        quantity: "2",
        unit: "tsp",
        item: "flaky sea salt"
      },
      {
        quantity: "1",
        unit: "tsp",
        item: "coarsely ground black pepper"
      },
      {
        quantity: "2",
        unit: "",
        item: "onions, thickly sliced"
      },
      {
        quantity: "3",
        unit: "tbsp",
        item: "Welsh honey"
      },
      {
        quantity: "1",
        unit: "tbsp",
        item: "plain flour"
      },
      {
        quantity: "150",
        unit: "ml",
        item: "dry cider"
      },
      {
        quantity: "400",
        unit: "ml",
        item: "lamb stock"
      },
      {
        quantity: "1",
        unit: "tsp",
        item: "redcurrant jelly"
      }
    ],
    method: [
      "Heat the oven to 220°C (200°C fan, gas 7). Pierce the lamb all over with a small sharp knife, angling the blade well into the muscle, and push a sliver of garlic and a small tuft of rosemary into each cut.",
      "Rub the leg with the oil, salt and pepper. Scatter the onions and remaining rosemary across a roasting tin, sit the lamb on top and roast for 20 minutes, until the fat has begun to render and colour.",
      "Drop the oven to 180°C (160°C fan, gas 4) and roast for a further 70 minutes for pink meat, basting twice with the tin juices. Brush the honey over the leg for the last 20 minutes only, or it will scorch.",
      "A thermometer pushed into the thickest part, clear of the bone, should read 54°C for pink, 60°C for medium or 68°C for well done; the joint climbs a further 4 to 6°C once it leaves the oven. Lift the lamb onto a warm board, tent loosely with foil and rest for 20 minutes.",
      "Pour off all but 2 tablespoons of fat from the tin, set it over a medium heat and stir the flour into the onions. Add the cider, scrape the base clean, then the stock and redcurrant jelly. Simmer for 6 minutes, strain and season."
    ],
    cooksNote: "Salt marsh lamb is leaner and more strongly flavoured than lowland lamb, and it overcooks faster. If you have it, take 10 minutes off the roasting time and trust the thermometer over the clock; the character sits in the fat cap, which wants to render fully without drying the meat beneath.",
    image: "/generated/roast-welsh-lamb-with-honey-and-rosemary.jpg",
    imagePrompt: "A bronzed leg of Welsh lamb resting on a scarred oak carving board, the honey glaze catching the light in dark amber patches, rosemary sprigs and slivered garlic pushed into the fat. Two thick slices cut and fanned to show a rosy centre beneath a rendered crust. Warm moody light from a low window, deep burgundy shadows, parchment linen. A blackened roasting tin of onions and a jug of glossy gravy sit behind, softly out of focus. Shallow depth of field. Editorial British food photography. No text, no hands, no branding.",
    authenticityNote: "Welsh Lamb holds PGI status, and salt marsh flocks on the Gower, Carmarthen Bay and the Dee estuary are its recognised premium source. The honey-and-rosemary treatment is the standard modern Welsh presentation using Welsh honey rather than a documented historical formula; the older Welsh habit was to roast the leg plainly and serve it with a sharp fruit jelly, which the gravy here nods to."
  },
  {
    slug: "bara-brith",
    title: "Bara Brith",
    region: "Wales",
    category: "Teatime",
    difficulty: "Easy",
    prepMinutes: 20,
    cookMinutes: 75,
    serves: 12,
    editorialRating: 4.6,
    mostLoved: false,
    tags: [
      "st david's day",
      "teabread",
      "overnight soak",
      "make-ahead"
    ],
    story: "Bara brith means speckled bread, and the speckling is the fruit: sultanas, raisins and currants left overnight in strong tea until they are plump and dark. The tea does the work an enriched dough would otherwise need, giving a close, moist crumb that keeps for a week wrapped in greaseproof. Cut it thick and spread it with salted Welsh butter.",
    ingredients: [
      {
        quantity: "350",
        unit: "g",
        item: "mixed dried fruit (sultanas, raisins and currants)"
      },
      {
        quantity: "250",
        unit: "ml",
        item: "hot strong black tea, freshly brewed"
      },
      {
        quantity: "175",
        unit: "g",
        item: "dark muscovado sugar"
      },
      {
        quantity: "2",
        unit: "tbsp",
        item: "orange marmalade"
      },
      {
        quantity: "275",
        unit: "g",
        item: "self-raising flour"
      },
      {
        quantity: "2",
        unit: "tsp",
        item: "mixed spice"
      },
      {
        quantity: "0.5",
        unit: "tsp",
        item: "fine sea salt"
      },
      {
        quantity: "1",
        unit: "large",
        item: "egg, beaten"
      },
      {
        quantity: "15",
        unit: "g",
        item: "butter, for greasing"
      },
      {
        quantity: "1",
        unit: "tbsp",
        item: "clear honey, to glaze"
      }
    ],
    method: [
      "Tip the dried fruit into a large bowl, pour over the hot tea and stir in the muscovado sugar and marmalade until the sugar dissolves. Cover and leave overnight, or at least eight hours, until the fruit is swollen and the liquid syrupy.",
      "Heat the oven to 160°C fan (180°C/gas 4). Butter a 900g (2lb) loaf tin and line it with baking parchment, leaving a collar standing proud of the rim to protect the crust.",
      "Beat the egg into the soaked fruit, then sift in the flour, mixed spice and salt and fold until no dry flour remains. The mixture will be stiff and sticky, closer to a fruit dough than a cake batter.",
      "Scrape into the tin, level the top and bake for 1 hour 15 minutes, laying foil loosely over after 45 minutes if the crust is darkening fast. A skewer pushed into the centre should come out clean with no wet crumb.",
      "Brush the hot loaf with warmed honey, cool in the tin for 20 minutes, then turn out onto a rack. Wrap in greaseproof once cold and leave a day before cutting; it slices cleanly and eats better for the wait."
    ],
    cooksNote: "Brew the tea at double strength and use it properly hot rather than warm. Hot tea swells the fruit faster and far more evenly, and the tannin stops the loaf tasting cloying against all that muscovado. Check the bowl after an hour: any fruit still riding dry on the surface has not soaked at all, so press it under with a spoon and re-cover, or it bakes into hard, bitter specks.",
    image: "/generated/bara-brith.jpg",
    imagePrompt: "A dark, close-crumbed bara brith on a scarred wooden board, two thick slices cut and fanned so the sultanas, raisins and currants show through, one slice spread with pale salted butter. The loaf's top is glossy with honey glaze and split along its spine. Props: a butter dish with a bone-handled knife, a bone-china teacup of strong tea, a crumpled parchment-coloured cloth, the greaseproof paper the loaf was wrapped in. Warm, moody, low side light against a burgundy background; shallow depth of field; three-quarter view at table height. No text, no hands, no branding.",
    authenticityNote: "Bara brith is Welsh and the name translates as speckled bread; this is the tea-loaf form, raised with self-raising flour and built on fruit soaked overnight in tea, which is the version standard in Welsh homes today. An older yeasted, enriched-dough bara brith also exists, and which of the two has the better claim to precedence is genuinely disputed."
  },
  {
    slug: "welsh-cakes",
    title: "Welsh Cakes",
    region: "Wales",
    category: "Teatime",
    difficulty: "Easy",
    prepMinutes: 20,
    cookMinutes: 24,
    serves: 16,
    editorialRating: 4.8,
    mostLoved: true,
    tags: [
      "st david's day",
      "bakestone",
      "teatime",
      "batch baking"
    ],
    story: "Picau ar y maen (cakes on the stone) were baked on a cast-iron bakestone hung over the fire, which is why they are griddled rather than baked and why they stay slightly soft in the middle. The currants, the whisper of mixed spice and the caster sugar thrown over them while they are still hot are the whole of it. Welsh kitchens still turn out a batch on a Saturday morning.",
    ingredients: [
      {
        quantity: "225",
        unit: "g",
        item: "plain flour"
      },
      {
        quantity: "1",
        unit: "tsp",
        item: "baking powder"
      },
      {
        quantity: "1",
        unit: "tsp",
        item: "mixed spice"
      },
      {
        quantity: "a pinch",
        unit: "",
        item: "fine sea salt"
      },
      {
        quantity: "55",
        unit: "g",
        item: "cold butter, diced"
      },
      {
        quantity: "55",
        unit: "g",
        item: "cold lard, diced"
      },
      {
        quantity: "85",
        unit: "g",
        item: "caster sugar"
      },
      {
        quantity: "75",
        unit: "g",
        item: "currants"
      },
      {
        quantity: "1",
        unit: "large",
        item: "egg, beaten"
      },
      {
        quantity: "2",
        unit: "tbsp",
        item: "whole milk"
      },
      {
        quantity: "3",
        unit: "tbsp",
        item: "caster sugar, for dusting"
      },
      {
        quantity: "a little",
        unit: "",
        item: "butter, for greasing the bakestone"
      }
    ],
    method: [
      "Rub the butter and lard into the flour, baking powder, mixed spice and salt with your fingertips until the mixture looks like fine breadcrumbs, lifting it high to keep it cool, then stir through the sugar and currants.",
      "Add the beaten egg and one tablespoon of the milk and bring the dough together with a round-bladed knife, adding the second spoonful only if it stays crumbly. Stop the moment it holds; kneading toughens them.",
      "Roll out on a lightly floured surface to a scant 1cm (⅜in) thick and stamp out 6cm (2½in) rounds. Press the trimmings together gently and re-roll once only.",
      "Set a bakestone, flat griddle or heavy frying pan over a medium-low heat and grease it with butter on kitchen paper, wiped almost dry. Let the iron come up to an even heat for a few minutes before the first batch.",
      "Cook in batches for 2½–3 minutes a side, until deep gold with a paler band around the middle and the centres feel just set rather than doughy. Too fierce a heat browns the outsides before the middle cooks.",
      "Lift onto a wire rack and dredge both sides with caster sugar while they are still hot, so it clings rather than sits. Eat warm, or within a day of baking."
    ],
    cooksNote: "Cook one cake before committing the batch. It should take at least two and a half minutes a side to reach deep gold; anything faster and the bakestone is too hot, so the currants will scorch while the centre stays raw, and cast iron takes several minutes to come back down once you drop the heat. Grease sparingly too, because a wet pan fries them and they lose the matte, floury finish that marks a proper Welsh cake.",
    image: "/generated/welsh-cakes.jpg",
    imagePrompt: "A blackened cast-iron bakestone just off the heat, eight Welsh cakes cooling on it, deep gold with a pale band around their middles and currants showing dark at the surface, thickly dredged in caster sugar. One is broken open on a chipped enamel plate beside it. Props: a parchment-coloured linen cloth, a bowl of caster sugar with a small sieve, a jar of currants, an earthenware teapot slightly out of focus. Burgundy and parchment palette, warm moody side light from a low window, shallow depth of field, close three-quarter angle. No text, no hands, no branding.",
    authenticityNote: "Picau ar y maen are Welsh and are cooked on a bakestone (maen or planc) rather than baked, with currants, mixed spice and a butter-and-lard fat mix as the standard domestic formula. Some families use all butter and grate nutmeg instead of mixed spice; both are ordinary household variations rather than departures from the dish."
  },
  {
    slug: "ulster-fry",
    title: "Ulster Fry",
    region: "Northern Ireland",
    category: "Breakfast",
    difficulty: "Easy",
    prepMinutes: 10,
    cookMinutes: 38,
    serves: 2,
    editorialRating: 4.7,
    mostLoved: true,
    tags: [
      "one-pan",
      "weekend breakfast",
      "griddle bread",
      "traditional"
    ],
    story: "What separates an Ulster fry from any other British breakfast is the bread: soda farls and potato bread, split and laid straight into the bacon fat until their cut faces go dark and crisp. Around them go bacon, sausage, black and white pudding, egg and a blistered tomato. It is a griddle cook's plate, built from what the Ulster kitchen already had on the pan every morning.",
    ingredients: [
      {
        quantity: "1",
        unit: "tbsp",
        item: "beef dripping or bacon fat"
      },
      {
        quantity: "4",
        unit: "",
        item: "pork sausages"
      },
      {
        quantity: "4",
        unit: "",
        item: "rashers dry-cured back bacon"
      },
      {
        quantity: "4",
        unit: "",
        item: "slices black pudding, cut 1 cm thick"
      },
      {
        quantity: "4",
        unit: "",
        item: "slices white pudding, cut 1 cm thick"
      },
      {
        quantity: "2",
        unit: "",
        item: "soda farls, split through their thickness"
      },
      {
        quantity: "2",
        unit: "",
        item: "potato breads (fadge), about 90 g each"
      },
      {
        quantity: "1",
        unit: "",
        item: "tomato, halved across the middle"
      },
      {
        quantity: "2",
        unit: "large",
        item: "eggs"
      },
      {
        quantity: "25",
        unit: "g",
        item: "salted butter"
      },
      {
        quantity: "a pinch",
        unit: "",
        item: "sea salt and coarsely ground black pepper"
      }
    ],
    method: [
      "Melt the dripping in a large heavy frying pan over medium-low heat and lay in the sausages. Cook 12 to 14 minutes, turning every few minutes, until browned all over and firm to a press. Move to a plate in a low oven at 100°C.",
      "Raise the heat a little and fry the bacon 2 to 3 minutes a side, until the fat turns gold and the edges frill. Add the black and white pudding, 2 minutes a side, until a crust forms and the crumb softens. Keep warm with the sausages.",
      "Lay the potato bread into the rendered fat, 2 to 3 minutes each side, until spotted deep brown and hot to the centre. Put the farls in cut-side down for 2 minutes, then turn and give the floury side 1 minute, no more.",
      "Add the tomato halves cut-side down and cook 3 to 4 minutes until slackened and browned. Push to one side, drop in the butter, and fry the eggs 2 to 3 minutes, spooning hot butter over the whites until set and the yolks still loose.",
      "Plate everything at once, farl and potato bread underneath the bacon so they take up the fat. Season the egg and tomato with salt and coarse pepper, and eat immediately, while the griddle breads still have their crust."
    ],
    cooksNote: "A farl is split through its thickness, not sliced across, so each half keeps one floury griddled face and one open crumb face. Put the open face down first: it drinks the bacon fat and crisps, while the dry floury side stays firm enough to hold a burst yolk without going to paste.",
    image: "/generated/ulster-fry.jpg",
    imagePrompt: "A full Ulster fry on a wide cream ironstone plate set on a scrubbed oak table: two rashers of back bacon, two browned pork sausages, dark discs of black pudding beside pale white pudding, a golden potato bread, a soda farl split and fried cut-side up, one fried egg with a glossy yolk, a blistered tomato half. Warm low side light from a window, deep shadows, a burgundy linen napkin and a parchment-toned enamel teapot soft in the background. Shallow depth of field, faint steam catching the light. No text, no hands, no branding.",
    authenticityNote: "The fry is the one breakfast that is specifically Ulster rather than pan-British, and the soda farl and potato bread are what mark it; both are griddle breads of the Northern Irish kitchen. Whether both black and white pudding appear varies by household and county, and beans, mushrooms and hash browns are later additions I have left out."
  },
  {
    slug: "steak-and-guinness-pie",
    title: "Steak and Guinness Pie",
    region: "Northern Ireland",
    category: "Pies & Pastries",
    difficulty: "Intermediate",
    prepMinutes: 30,
    cookMinutes: 223,
    serves: 6,
    editorialRating: 4.8,
    mostLoved: false,
    tags: [
      "make-ahead",
      "stout",
      "puff pastry",
      "pub classic"
    ],
    story: "Stout does two things in this pie: its roast-barley bitterness cuts the fat of a long braise, and its sugars set into a gravy dark enough to stain the pastry. Shin is the cut, carrying enough collagen to turn silky over two and a half hours where chuck only goes soft. The filling is braised a day ahead, chilled, then sealed under all-butter puff.",
    ingredients: [
      {
        quantity: "1.2",
        unit: "kg",
        item: "beef shin, trimmed and cut into 4 cm pieces"
      },
      {
        quantity: "3",
        unit: "tbsp",
        item: "plain flour, seasoned with 1 tsp fine sea salt and plenty of black pepper"
      },
      {
        quantity: "40",
        unit: "g",
        item: "beef dripping"
      },
      {
        quantity: "2",
        unit: "large",
        item: "onions, halved and thickly sliced"
      },
      {
        quantity: "2",
        unit: "",
        item: "carrots, cut into 2 cm chunks"
      },
      {
        quantity: "500",
        unit: "ml",
        item: "Guinness Extra Stout"
      },
      {
        quantity: "300",
        unit: "ml",
        item: "beef stock"
      },
      {
        quantity: "1",
        unit: "tbsp",
        item: "dark brown soft sugar"
      },
      {
        quantity: "1",
        unit: "tbsp",
        item: "Worcestershire sauce"
      },
      {
        quantity: "4",
        unit: "",
        item: "thyme sprigs"
      },
      {
        quantity: "2",
        unit: "",
        item: "bay leaves"
      },
      {
        quantity: "375",
        unit: "g",
        item: "all-butter puff pastry, chilled"
      },
      {
        quantity: "1",
        unit: "",
        item: "egg, beaten with a pinch of salt, to glaze"
      }
    ],
    method: [
      "Toss the beef in the seasoned flour. Melt the dripping in a heavy casserole over high heat and brown the meat in three batches, about 5 minutes each, turning only once a side so a dark crust forms. Crowd the pan and it will steam grey instead. Set the meat aside.",
      "Drop the heat to medium and cook the onions and carrots in the same pot for 8 to 10 minutes, until the onion is soft and its edges catch and colour. Pour in the stout, scraping the base clean, and boil hard for 5 minutes to drive off the alcohol and reduce it by about a third.",
      "Return the beef with the stock, sugar, Worcestershire sauce, thyme and bay. Cover and cook at 150°C (fan 130°C, gas 2) for 2 hours 30 minutes, until the shin falls apart under a fork. Uncover for the last 30 minutes if the gravy does not yet coat a spoon, then cool completely, ideally overnight.",
      "Spoon the cold filling into a 1.5 litre pie dish, mounded slightly proud of the rim so the lid is supported. Roll the pastry to 5 mm, cut a 2 cm collar for the rim, brush it with egg, then lay the lid on, press the edges together, trim and crimp.",
      "Cut a steam vent in the centre, brush the whole lid with egg and chill 20 minutes so the butter firms. Slide the dish onto a heavy baking tray already hot in a 200°C oven (fan 180°C, gas 6) and bake 40 to 45 minutes, tenting the lid with foil if it darkens early, until the pastry is risen and mahogany and the gravy bubbles up through the vent. Rest 10 minutes before cutting."
    ],
    cooksNote: "The filling has to be fridge-cold when the pastry goes on. Warm filling melts the butter layers in the puff from below before the oven can turn their water to steam, so the lid rises unevenly and the underside goes greasy and sodden. Braising a day ahead also sets the gravy, which then stays in the pie rather than boiling out of the vent.",
    image: "/generated/steak-and-guinness-pie.jpg",
    imagePrompt: "A deep oval pie dish of steak and stout pie on a burgundy cloth, the all-butter puff lid risen high and burnished mahogany, one wedge lifted away to show dark glossy gravy and chunks of shin beef falling apart. Crimped edge, a steam vent still releasing a thread of steam. A parchment-coloured napkin, an antique steel pie server and a plain unlabelled glass of dark stout with a settled cream head sit just behind and out of focus. Warm moody light raking from the left, deep shadow, shallow depth of field. No text, no hands, no branding.",
    authenticityNote: "Steak and stout pie is pub cooking across the whole island and much of Britain rather than a dish unique to Northern Ireland, and Guinness itself is brewed at St James's Gate in Dublin, so it earns its place here as a fixture of the Northern Irish pub kitchen rather than a native Ulster invention. Any dry Irish stout behaves the same way."
  },
  {
    slug: "buttermilk-and-apple-tart",
    title: "Buttermilk and Apple Tart",
    region: "Northern Ireland",
    category: "Puddings & Desserts",
    difficulty: "Intermediate",
    prepMinutes: 35,
    cookMinutes: 70,
    serves: 8,
    editorialRating: 4.5,
    mostLoved: false,
    tags: [
      "bramley apples",
      "buttermilk",
      "harvest",
      "make-ahead",
      "autumn"
    ],
    story: "Two Armagh staples in one tin: Bramley apples from the orchards around Loughgall, and the buttermilk that Ulster baking runs on. The buttermilk sets into a custard looser and sharper than a cream one, tasting faintly of the churn, and it holds the collapsing sweetness of the stewed Bramleys in check. Serve it at room temperature, in wedges, with nothing but a spoon of thick cream.",
    ingredients: [
      {
        quantity: "200",
        unit: "g",
        item: "plain flour, plus extra for dusting"
      },
      {
        quantity: "100",
        unit: "g",
        item: "cold unsalted butter, cubed"
      },
      {
        quantity: "30",
        unit: "g",
        item: "icing sugar"
      },
      {
        quantity: "1",
        unit: "large",
        item: "egg, separated: yolk for the pastry, white to seal the case"
      },
      {
        quantity: "2",
        unit: "tbsp",
        item: "cold water"
      },
      {
        quantity: "550",
        unit: "g",
        item: "Bramley apples (about 2 large), peeled, cored and cut into 1 cm slices"
      },
      {
        quantity: "25",
        unit: "g",
        item: "butter, for the apples"
      },
      {
        quantity: "40",
        unit: "g",
        item: "caster sugar, for the apples"
      },
      {
        quantity: "90",
        unit: "g",
        item: "caster sugar, for the custard"
      },
      {
        quantity: "300",
        unit: "ml",
        item: "buttermilk, well shaken"
      },
      {
        quantity: "2",
        unit: "large",
        item: "eggs, plus 1 extra yolk"
      },
      {
        quantity: "1",
        unit: "tbsp",
        item: "plain flour, for the custard"
      },
      {
        quantity: "0.5",
        unit: "tsp",
        item: "nutmeg, freshly grated, half for the custard and half for the top"
      }
    ],
    method: [
      "Rub the cold butter into the 200 g of flour and the icing sugar until the bowl looks like coarse sand, then bind with the egg yolk and cold water into a dough that only just holds. Flatten to a disc, wrap and chill 30 minutes.",
      "Roll to 3 mm and line a 23 cm (9 in) loose-bottomed tart tin, leaving the overhang in place. Chill 15 minutes, then sit the tin on a baking sheet and blind bake at 180C (fan 160C, gas 4) for 15 minutes with beans and 8 minutes without, until sandy and pale gold. Brush the hot base and sides with the reserved egg white and give it 2 minutes back in the oven to set to a seal, or the buttermilk will soak the base to paste. Trim the overhang.",
      "Melt the 25 g of butter in a wide pan, add the Bramley slices and the 40 g of caster sugar and cook over medium heat 6 to 8 minutes, turning once, until the edges soften but the slices still hold a defined shape. Cool, then arrange over the pastry base.",
      "Whisk the eggs, extra yolk, 90 g of caster sugar and the tablespoon of flour to a smooth paste, then whisk in the buttermilk and half the nutmeg. It will look thin and faintly grainy at this stage; the flour pulls it together in the oven.",
      "Drop the oven to 170C (fan 150C, gas 3) and slide the tart out on its baking sheet. Pour the custard over the apples, grate the remaining nutmeg on top and bake 35 to 40 minutes, until set to the edge with a 5 cm wobble at the centre. Cool in the tin at least an hour before unmoulding."
    ],
    cooksNote: "Buttermilk custard is acidic, and acid sets protein at a lower temperature than cream does. Push the oven past 170C and it curdles, weeps and pulls away from the pastry in a grey ring. Bake it low, take it out while the centre is still visibly loose, and let the residual heat finish the set as it cools. A tart already firm in the middle when it leaves the oven has gone too far.",
    image: "/generated/buttermilk-and-apple-tart.jpg",
    imagePrompt: "A buttermilk and apple tart in a fluted 23 cm case on a parchment-coloured ceramic stand, one wedge lifted out to reveal the pale set custard and the seam of Bramley slices beneath it. Freshly grated nutmeg dusts the surface and the pastry edge is deep gold. Beside it, a burgundy linen cloth, a bone-handled cake slice, a small jug of thick cream and two whole Bramley apples with their green-flushed skins. Warm, moody light raking from the left, shallow depth of field, deep red and parchment palette. No text, no hands, no branding.",
    authenticityNote: "Both components are securely Northern Irish: the Armagh Bramley Apple holds PGI status and buttermilk is the backbone of Ulster baking. I am less certain that a buttermilk and apple tart exists as a single fixed, named heritage dish rather than as a natural pairing of two Armagh larder staples, so treat it as regionally grounded rather than codified in the way wheaten bread is."
  },
  {
    slug: "boxty",
    title: "Boxty",
    region: "Northern Ireland",
    category: "Regional Classics",
    difficulty: "Easy",
    prepMinutes: 25,
    cookMinutes: 36,
    serves: 4,
    editorialRating: 4.5,
    mostLoved: false,
    tags: [
      "potato",
      "griddle",
      "buttermilk",
      "st patrick's day"
    ],
    story: "Two potatoes in one batter: half raw and grated, wrung out hard, half cooked and mashed. The raw potato gives boxty its dense, faintly waxy chew and its grey-gold fried crust; the mash and buttermilk keep it tender. Cooked on a griddle in bacon fat, it comes off lacy at the edges. The rhyme from the border counties still runs: boxty on the griddle, boxty on the pan.",
    ingredients: [
      {
        quantity: "500",
        unit: "g",
        item: "floury potatoes (Maris Piper or Kerr's Pink), peeled, for grating"
      },
      {
        quantity: "350",
        unit: "g",
        item: "cold mashed potato, unseasoned and free of lumps"
      },
      {
        quantity: "175",
        unit: "g",
        item: "plain flour"
      },
      {
        quantity: "0.5",
        unit: "tsp",
        item: "bicarbonate of soda"
      },
      {
        quantity: "1",
        unit: "tsp",
        item: "fine sea salt"
      },
      {
        quantity: "0.5",
        unit: "tsp",
        item: "ground black pepper"
      },
      {
        quantity: "200",
        unit: "ml",
        item: "buttermilk"
      },
      {
        quantity: "2",
        unit: "tbsp",
        item: "bacon dripping, for frying"
      },
      {
        quantity: "30",
        unit: "g",
        item: "salted butter, for frying"
      }
    ],
    method: [
      "Grate the raw potatoes on the coarse side of a box grater into the centre of a clean tea towel. Gather it up and wring hard over a bowl until no more liquid comes; a hard wring costs about a third of the weight, so you should end with about 350 g of dry, loose shreds.",
      "Leave the wrung-out liquid to stand for 5 minutes. Pour off the grey water and you will find a layer of chalky white starch stuck to the bottom of the bowl. Scrape all of it back into the grated potato, because that starch is what binds the batter.",
      "Mix the grated potato, recovered starch, mashed potato, flour, bicarbonate of soda, salt and pepper with your hands until no dry flour is left. Work in the buttermilk a little at a time to a thick batter that holds the ridge left by a spoon.",
      "Heat a heavy frying pan or griddle over medium heat with half the dripping and butter. Drop in mounds of about 90 g, three to a pan, and flatten each to 1 cm. Fry 4 to 5 minutes a side, until the edges go lacy and the crust is deep gold. The batter makes twelve, three a head.",
      "Keep the cooked boxty warm at 120°C on a rack, not a plate, so the undersides stay crisp. Wipe the pan and add fresh fat for each batch. Serve hot with more butter, or under bacon and a fried egg."
    ],
    cooksNote: "Grate the potato last and cook the batter within ten minutes of the buttermilk going in. Raw grated potato greys within minutes of meeting the air, and the bicarbonate of soda spends its lift the moment it hits the acid in the buttermilk, so a batter left standing half an hour fries flat, dense and dull grey instead of light and lacy.",
    image: "/generated/boxty.jpg",
    imagePrompt: "A stack of three boxty pancakes on a chipped cream enamel plate, edges lacy and irregular, crust deep gold with darker blistered patches, the top one torn open to show a dense pale potato crumb with a pat of butter sinking into it. Set on a dark oak board with a burgundy tea towel folded behind and a parchment-toned buttermilk jug and an old box grater soft in the background. Warm low side light, moody shadow, shallow depth of field with focus on the torn edge. No text, no hands, no branding.",
    authenticityNote: "Boxty belongs to a belt of counties either side of the border, Fermanagh, Tyrone and Donegal alongside Leitrim, Cavan and Longford, so it is genuinely Ulster but not exclusively Northern Irish. The pancake, the boxty loaf and the boiled dumpling are all attested forms; an egg is a common household addition I have left out, and raw-to-mashed ratios vary by family."
  },
  {
    slug: "champ",
    title: "Champ",
    region: "Northern Ireland",
    category: "Regional Classics",
    difficulty: "Easy",
    prepMinutes: 15,
    cookMinutes: 45,
    serves: 4,
    editorialRating: 4.6,
    mostLoved: false,
    tags: [
      "potato",
      "side dish",
      "vegetarian",
      "halloween"
    ],
    story: "Ulster's answer to mash, and a better one. Floury potatoes boiled in their skins, then beaten with milk that has had sliced spring onions steeped in it until the milk turns faintly green and sweet. It goes into the bowl with a well pressed into the middle and cold butter dropped in to melt. You eat from the outside in, dipping each forkful through the pool.",
    ingredients: [
      {
        quantity: "1.2",
        unit: "kg",
        item: "floury potatoes (Kerr's Pink, Golden Wonder or Maris Piper), scrubbed, skins left on"
      },
      {
        quantity: "1",
        unit: "tbsp",
        item: "coarse sea salt, for the potato water"
      },
      {
        quantity: "10",
        unit: "",
        item: "spring onions (scallions in Ulster), trimmed and finely sliced, white and green parts kept separate"
      },
      {
        quantity: "300",
        unit: "ml",
        item: "whole milk"
      },
      {
        quantity: "75",
        unit: "g",
        item: "salted butter, diced, at room temperature"
      },
      {
        quantity: "50",
        unit: "g",
        item: "cold salted butter, for the wells"
      },
      {
        quantity: "1",
        unit: "tsp",
        item: "fine sea salt"
      },
      {
        quantity: "0.5",
        unit: "tsp",
        item: "ground white pepper"
      }
    ],
    method: [
      "Put the potatoes in a large pan whole and unpeeled, cover with cold water by 3 cm, add the coarse salt and bring to the boil. Simmer 25 to 30 minutes, until a skewer meets no resistance at the centre of the largest one.",
      "Meanwhile put the milk and the white parts of the spring onion in a small pan and bring to just under a simmer. Take off the heat, add the green parts, cover and leave to steep for 10 minutes; the milk will turn pale green and smell sweet.",
      "Drain the potatoes and return them to the dry pan over low heat for 1 minute to steam off. Holding each in a folded cloth, pull the skins away while they are too hot to be comfortable, then pass them through a ricer or mash at once.",
      "Bring the infused milk back to just under a simmer. Beat the diced butter into the potatoes, then add the hot milk a ladleful at a time, working it in until the mash is loose enough to slump slowly from a lifted spoon. Season with the fine salt and white pepper and beat hard for 30 seconds.",
      "Spoon into warmed wide bowls. Press a deep well into the centre of each with the back of a spoon, drop in the cold butter, and take it to the table before the butter has fully melted. Eat from the outside in, through the pool."
    ],
    cooksNote: "Boil the potatoes in their skins. Peeled and quartered they take on water through every cut face and the mash goes slack and gluey no matter how well you drain it; in their jackets they steam dry from the inside, and that is most of the difference between champ and ordinary wet mash. The milk must go in scalding hot, too.",
    image: "/generated/champ.jpg",
    imagePrompt: "A wide shallow earthenware bowl of champ on a parchment linen cloth, a burgundy runner falling into shadow behind. Soft ivory mash flecked green with spring onion, swirled with the back of a spoon into a deep central well holding a knob of butter that has begun to run in a golden channel down one side. A worn wooden spoon rests alongside, with a small enamel jug of hot milk and a few trimmed spring onions out of focus behind. Warm moody window light, shallow depth of field, gentle steam. No text, no hands, no branding.",
    authenticityNote: "Champ is specifically an Ulster dish; scallion is the local word for spring onion, and the butter well is the defining service rather than a garnish. The Halloween custom of hiding a ring in the champ is widely reported, though I am less certain how far it is still practised, and the related names poundies and cally shift from district to district."
  },
  {
    slug: "irish-stew",
    title: "Irish Stew",
    region: "Northern Ireland",
    category: "Soups & Stews",
    difficulty: "Easy",
    prepMinutes: 25,
    cookMinutes: 165,
    serves: 4,
    editorialRating: 4.8,
    mostLoved: false,
    tags: [
      "one-pot",
      "make-ahead",
      "mutton",
      "slow-cooked"
    ],
    story: "Mutton, potato and onion, cooked slowly in water until the meat lets go of the bone and half the potato dissolves into the liquor. Nothing is browned; the stew is pale by design. Whether carrot belongs is the oldest argument in the Irish kitchen: purists say never, farmhouse pots have held it for two centuries. This version leaves it out and lets you decide.",
    ingredients: [
      {
        quantity: "1.2",
        unit: "kg",
        item: "mutton or lamb neck on the bone, cut into 4 cm pieces"
      },
      {
        quantity: "500",
        unit: "g",
        item: "onions, peeled and thickly sliced"
      },
      {
        quantity: "500",
        unit: "g",
        item: "floury potatoes (Kerr's Pink or Maris Piper), peeled and sliced 5 mm thick"
      },
      {
        quantity: "600",
        unit: "g",
        item: "floury potatoes, peeled and halved"
      },
      {
        quantity: "900",
        unit: "ml",
        item: "cold water or light lamb stock"
      },
      {
        quantity: "2",
        unit: "tsp",
        item: "fine sea salt"
      },
      {
        quantity: "1",
        unit: "tsp",
        item: "black peppercorns, coarsely crushed"
      },
      {
        quantity: "3",
        unit: "",
        item: "thyme sprigs"
      },
      {
        quantity: "1",
        unit: "",
        item: "bay leaf"
      },
      {
        quantity: "25",
        unit: "g",
        item: "salted butter"
      },
      {
        quantity: "20",
        unit: "g",
        item: "flat-leaf parsley, finely chopped"
      }
    ],
    method: [
      "Layer half the onions over the base of a heavy casserole, then the mutton, seasoning with the salt and crushed pepper as you go, then the rest of the onions and the sliced potatoes on top. Do not brown the meat; this stew is pale, and searing turns it into a different dish.",
      "Pour in the water so it just reaches the top layer. Bring very slowly to a bare simmer over low heat, which takes about 20 minutes, and skim off the grey foam that rises. Rushing this stage clouds the liquor for good.",
      "Lid on, into the oven at 150°C (fan 130°C, gas 2) for 1 hour 30 minutes. The sliced potatoes should have collapsed entirely and the liquid should be thickened and cloudy rather than clear.",
      "Tuck in the halved potatoes with the thyme and bay, pushing them under the liquid, and return to the oven for 50 to 60 minutes, until a skewer slides through the potato without it breaking apart and the mutton slips from the bone.",
      "Skim the fat from the surface with a wide spoon. If the liquor is still thin, crush a few collapsed potato slices against the side of the pot. Rest off the heat 10 minutes, then stir the butter and parsley through and check the salt."
    ],
    cooksNote: "Cook it a day ahead. Overnight in the cold the fat sets into a sheet you can lift off whole rather than chasing it round the pot with a spoon, and the collapsed potato goes on absorbing, tightening the liquor to the consistency of thin cream. Reheat gently; a hard boil breaks the potato chunks up.",
    image: "/generated/irish-stew.jpg",
    imagePrompt: "A cast-iron casserole of Irish stew, its lid propped against the side, on a deep burgundy cloth over an aged parchment-coloured board. Pale broth clouded and thickened by collapsed potato, pieces of mutton on the bone, halved potatoes still holding their shape, translucent onion, a bay leaf and thyme sprig surfacing. A worn pewter ladle rests inside and a chipped enamel bowl sits part-filled alongside, scattered with chopped parsley. Warm low raking light from the left, deep shadow at the rim, steam rising. Shallow depth of field. No text, no hands, no branding.",
    authenticityNote: "Irish stew is common to the whole island including the six counties rather than exclusive to Northern Ireland, and sits here as part of the Ulster repertoire, not as a Northern Irish invention. Mutton, potato and onion are the agreed core; the no-carrot rule is a twentieth-century codification of a much looser farmhouse dish, which I have flagged rather than resolved. The thyme, bay, finishing butter and parsley are my kitchen additions too, not farmhouse canon, which stops at meat, potato, onion, water, salt and pepper."
  },
  {
    slug: "pea-and-ham-soup",
    title: "Pea and Ham Soup",
    region: "Northern Ireland",
    category: "Soups & Stews",
    difficulty: "Easy",
    prepMinutes: 15,
    cookMinutes: 90,
    serves: 8,
    editorialRating: 4.6,
    mostLoved: false,
    tags: [
      "leftovers",
      "one-pot",
      "freezer-friendly",
      "storecupboard",
      "batch cooking"
    ],
    story: "This is what the ham liquor is for. Yellow split peas go in dry, take up the salt and sweetness of the poaching stock and collapse over an hour into something between a soup and a purée, thick enough to stand a spoon in. Shredded ham goes back at the very end so it stays in pieces. Wheaten bread and butter alongside, and nothing else is needed.",
    ingredients: [
      {
        quantity: "500",
        unit: "g",
        item: "yellow split peas (about 1 lb 2 oz), rinsed"
      },
      {
        quantity: "2.5",
        unit: "litres",
        item: "ham stock from the cider-glazed ham, skimmed of its fat"
      },
      {
        quantity: "50",
        unit: "g",
        item: "butter"
      },
      {
        quantity: "1",
        unit: "large",
        item: "onion, finely chopped"
      },
      {
        quantity: "2",
        unit: "",
        item: "carrots, diced"
      },
      {
        quantity: "2",
        unit: "",
        item: "celery sticks, diced"
      },
      {
        quantity: "2",
        unit: "",
        item: "bay leaves"
      },
      {
        quantity: "300",
        unit: "g",
        item: "cooked ham, shredded into rough pieces"
      },
      {
        quantity: "0.5",
        unit: "tsp",
        item: "black pepper, freshly ground"
      },
      {
        quantity: "2",
        unit: "tbsp",
        item: "flat-leaf parsley, chopped"
      }
    ],
    method: [
      "Rinse the split peas in a sieve under cold running water until it runs clear, picking out any grit or shrivelled peas. They need no overnight soak: peas sold split have already had their husks removed.",
      "Melt the butter in a large heavy pan and sweat the onion, carrot and celery over low heat for 10 to 12 minutes, stirring now and then, until they are soft and translucent with no browning on them at all.",
      "Add the peas, bay leaves and stock. Bring to the boil, skim off the grey foam that rises, then drop to a gentle simmer with the lid ajar for 60 to 75 minutes, stirring every 15 minutes so the peas do not catch on the base.",
      "It is ready when the peas have gone entirely, with no chalky centres left in them. Fish out the bay leaves, then mash about a third of the pan against the side with a wooden spoon so some texture survives the smoothness.",
      "Stir in the shredded ham and warm it through 5 minutes. Only now taste for salt, add the pepper, loosen with more stock if it has gone claggy, and scatter the parsley over just before it goes to the table."
    ],
    cooksNote: "Do not salt at the start, and taste the ham stock before it goes anywhere near the peas. Salt slows pulses from softening, so a heavily cured stock can leave you simmering chalky peas for two hours and blaming the peas. If the liquor tastes sharp on its own, cut it half and half with water and season at the end instead. The soup also sets almost solid overnight, so reheat it with stock rather than water or you wash the flavour straight out.",
    image: "/generated/pea-and-ham-soup.jpg",
    imagePrompt: "A deep bowl of thick yellow split pea soup on a scrubbed pine table, the surface matt and dense with shreds of pink ham breaking through it and a scatter of coarse black pepper and chopped parsley. The bowl is wide-lipped cream enamel with a heavy pewter spoon resting across the rim. Two thick slices of buttered wheaten bread sit on a parchment cloth behind, slightly out of focus, beside the picked ham bone. Warm, moody light from one side, burgundy and parchment palette, shallow depth of field, steam just visible. No text, no hands, no branding.",
    authenticityNote: "Pea and ham soup is not exclusive to Northern Ireland; it is common across Britain and Ireland and I am not claiming otherwise. What places this version in Ulster is the chain it belongs to: yellow split peas rather than green, the liquor from a boiled or glazed ham rather than a stock cube, and wheaten bread on the side."
  },
  {
    slug: "roast-ham-with-cider-glaze",
    title: "Roast Ham with Cider Glaze",
    region: "Northern Ireland",
    category: "Sunday Roasts",
    difficulty: "Intermediate",
    prepMinutes: 30,
    cookMinutes: 150,
    serves: 10,
    editorialRating: 4.7,
    mostLoved: false,
    tags: [
      "christmas",
      "easter",
      "armagh cider",
      "make-ahead",
      "leftovers"
    ],
    story: "County Armagh is the Orchard County, and its cider is the natural partner to the ham that anchors a Northern Irish Christmas or Easter table. The joint is poached first in cider and aromatics until a skewer slides clean through, then skinned, scored, studded with cloves and blasted under a muscovado glaze until the fat lacquers and blisters. The poaching liquor is never thrown out; it becomes soup.",
    ingredients: [
      {
        quantity: "2.5",
        unit: "kg",
        item: "unsmoked gammon joint (about 5 1/2 lb), boneless and tied"
      },
      {
        quantity: "1.5",
        unit: "litres",
        item: "dry cider, Armagh if you can get it"
      },
      {
        quantity: "1",
        unit: "large",
        item: "onion, halved"
      },
      {
        quantity: "2",
        unit: "",
        item: "carrots, halved lengthways"
      },
      {
        quantity: "2",
        unit: "",
        item: "celery sticks, halved"
      },
      {
        quantity: "2",
        unit: "",
        item: "bay leaves"
      },
      {
        quantity: "1",
        unit: "tsp",
        item: "black peppercorns"
      },
      {
        quantity: "30",
        unit: "",
        item: "whole cloves, for studding"
      },
      {
        quantity: "150",
        unit: "g",
        item: "dark muscovado sugar"
      },
      {
        quantity: "2",
        unit: "tbsp",
        item: "English mustard"
      },
      {
        quantity: "3",
        unit: "tbsp",
        item: "runny honey"
      },
      {
        quantity: "1",
        unit: "tbsp",
        item: "cider vinegar"
      }
    ],
    method: [
      "If your butcher says the cure is a heavy one, soak the gammon in cold water overnight and drain it. Otherwise rinse it, sit it in a pot that holds it snugly, and pour the cider over.",
      "Add the onion, carrots, celery, bay and peppercorns, top up with cold water to cover by 2 cm and bring it slowly to the point where the surface only trembles. Skim off the grey scum, part-cover, and hold it there 2 hours, which is 20 minutes per 500 g plus 20 minutes. Before you lift it out, push a skewer into the thickest part: it should meet no resistance, and a probe there should read 70C.",
      "Lift the joint onto a board and leave it 15 minutes. Ladle 400 ml of the liquor into a small pan and boil hard for 8 to 10 minutes until reduced to roughly 100 ml and syrupy. Heat the oven to 200C (fan 180C, gas 6).",
      "Cut away the skin with a small sharp knife, leaving an even 5 mm blanket of fat behind. Score the fat into 2 cm diamonds, cutting into the fat but never through to the meat, and press a clove into every second crossing point, spacing the thirty evenly over the joint rather than trying to fill every junction.",
      "Whisk the muscovado, mustard, honey and cider vinegar into the reduced liquor. Sit the ham on a rack in a roasting tin, brush on a third of the glaze and roast 30 minutes, brushing again at 10 and 20 minutes, until dark, blistered and sticky.",
      "Rest 20 minutes before carving in thin slices across the grain. Strain the remaining poaching liquor, cool it and refrigerate: the fat sets into a lid you can lift off in one disc, and what lies beneath is your ham stock."
    ],
    cooksNote: "Hold the pot at a bare tremble rather than a rolling boil. Gammon poaches best at around 85C, where the muscle stays slack; a hard boil contracts it and gives you dry, stringy slices that no glaze can rescue. And when the liquor has chilled and you lift off the fat cap, taste it before you commit it to anything. Cures vary enormously, and a heavy one yields a stock that wants cutting by half with water.",
    image: "/generated/roast-ham-with-cider-glaze.jpg",
    imagePrompt: "A whole glazed gammon joint on a scratched pewter platter, the fat scored into dark diamonds with a clove pressed into every second crossing and the glaze catching the light in a treacly, blistered sheen. Two thin slices have been carved and lean against the base, pink against the burnt-sugar crust. A carving fork rests on a burgundy linen cloth beside a squat glass of cider and a few bruised Armagh apples. Warm, moody low side light, parchment and deep red palette, shallow depth of field. No text, no hands, no branding.",
    authenticityNote: "Ham is a fixture of the Northern Irish festive table, and County Armagh's orchards and cider make the cider element a genuinely local one. To be clear, the sugar-and-clove glazed ham itself is common across Britain and Ireland rather than unique to Ulster; what is regional here is the Armagh cider in both the poaching liquor and the glaze, and the near-universal habit of turning that liquor into pea and ham soup."
  },
  {
    slug: "fifteens",
    title: "Fifteens",
    region: "Northern Ireland",
    category: "Teatime",
    difficulty: "Easy",
    prepMinutes: 20,
    cookMinutes: 0,
    serves: 15,
    editorialRating: 4.3,
    mostLoved: false,
    tags: [
      "no-bake",
      "traybake",
      "make-ahead",
      "tea table",
      "freezer-friendly"
    ],
    story: "Fifteens are the arithmetic of an Ulster tray-bake table: fifteen digestives, fifteen marshmallows, fifteen glacé cherries, bound with condensed milk and rolled in coconut. Nothing is cooked. The log goes into the fridge overnight and comes out firm enough to cut into pink-flecked rounds. They belong to church halls, Women's Institute stalls and the bottom tier of every Northern Irish tea trolley.",
    ingredients: [
      {
        quantity: "15",
        unit: "",
        item: "digestive biscuits, crushed to coarse crumbs"
      },
      {
        quantity: "8",
        unit: "",
        item: "pink marshmallows, snipped into quarters"
      },
      {
        quantity: "7",
        unit: "",
        item: "white marshmallows, snipped into quarters"
      },
      {
        quantity: "15",
        unit: "",
        item: "red glacé cherries, rinsed of syrup, dried and quartered"
      },
      {
        quantity: "175",
        unit: "g",
        item: "sweetened condensed milk (a little under half a 397 g tin)"
      },
      {
        quantity: "75",
        unit: "g",
        item: "desiccated coconut, for rolling"
      },
      {
        quantity: "25",
        unit: "g",
        item: "desiccated coconut, folded through the mixture (optional)"
      }
    ],
    method: [
      "Put the digestives in a bag and crush them with a rolling pin to coarse, uneven crumbs, some pieces still the size of a fingernail. Reduce them to powder and the slices come out sandy rather than chewy.",
      "Snip the marshmallows into quarters with scissors dipped in hot water between cuts, and quarter the rinsed, dried cherries. Tip both into a large bowl with the crumbs and the optional 25 g of coconut.",
      "Pour in the condensed milk and work it through with a spoon, then with your hand, for two to three minutes, until the mixture clumps into a stiff, sticky paste that holds its shape when you squeeze a handful.",
      "Scatter the 75 g of coconut over a large sheet of cling film. Tip the mixture on top, shape it into a log about 6 cm across, roll it to coat every side, then wrap tightly and twist the ends like a cracker.",
      "Chill at least 4 hours and preferably overnight, until firm right through to the middle. Unwrap, trim the ends square and cut into 1.5 cm rounds with a warm, dry knife, wiping the blade between slices."
    ],
    cooksNote: "Rinse the syrup off the cherries and pat them properly dry before they go anywhere near the bowl. Wet cherries bleed pink through the coconut and slacken the paste, and a slack paste never sets hard enough to slice, which is the exact moment most people wrongly reach for more condensed milk. If it will not hold together, chill the bowl twenty minutes and try again rather than adding liquid.",
    image: "/generated/fifteens.jpg",
    imagePrompt: "Overhead-tilted shot of six coconut-rolled Fifteens slices fanned across a parchment-toned vintage side plate, cut faces up so the pink marshmallow and red cherry show through the pale biscuit paste. The uncut remainder of the log sits behind with one end trimmed and loose coconut around it. A burgundy linen napkin, a small bone-handled knife and a rose-patterned china teacup blur into the background. Warm, moody window light from the left, shallow depth of field, stray coconut shreds on the cloth. No text, no hands, no branding.",
    authenticityNote: "Fifteens are specifically Northern Irish, a fixture of Ulster tray-bake tables, church halls and Women's Institute stalls, and take their name from the fifteen each of digestives, marshmallows and glacé cherries. The canonical recipe is those three plus condensed milk and coconut; the pink and white marshmallow split and the coconut folded through the mixture are family variations, and I have found no reliable date for the recipe's first appearance."
  },
  {
    slug: "wheaten-bread",
    title: "Wheaten Bread",
    region: "Northern Ireland",
    category: "Teatime",
    difficulty: "Easy",
    prepMinutes: 15,
    cookMinutes: 50,
    serves: 10,
    editorialRating: 4.8,
    mostLoved: true,
    tags: [
      "soda bread",
      "no-yeast",
      "buttermilk",
      "st patrick's day",
      "one-bowl"
    ],
    story: "Every Ulster kitchen keeps its own wheaten, and every one of them insists it is the right one. What they share is coarse wholemeal flour, buttermilk and bicarbonate of soda doing in ninety seconds what yeast needs three hours to manage. The crumb comes out dense, nutty and faintly sour, the crust firm and dark. Cut it thick while still barely warm, with salted butter and a slab of Ulster cheddar.",
    ingredients: [
      {
        quantity: "340",
        unit: "g",
        item: "coarse wholemeal flour"
      },
      {
        quantity: "110",
        unit: "g",
        item: "plain flour"
      },
      {
        quantity: "1",
        unit: "tsp",
        item: "bicarbonate of soda, sieved"
      },
      {
        quantity: "1",
        unit: "tsp",
        item: "fine salt"
      },
      {
        quantity: "1",
        unit: "tbsp",
        item: "caster sugar (optional, see the authenticity note)"
      },
      {
        quantity: "40",
        unit: "g",
        item: "cold butter, cubed (optional, see the authenticity note), plus a knob for the tin"
      },
      {
        quantity: "450",
        unit: "ml",
        item: "buttermilk (16 fl oz), well shaken"
      },
      {
        quantity: "2",
        unit: "tbsp",
        item: "pinhead oatmeal, for the top"
      }
    ],
    method: [
      "Heat the oven to 200C (fan 180C, gas 6) and butter a 900 g (2 lb) loaf tin, lining the base with a strip of baking paper.",
      "Sieve the bicarbonate of soda and the salt into a large bowl with the plain flour, then stir through the coarse wholemeal and the sugar. Rub in the cold butter, if you are using it, with your fingertips until it disappears entirely into the flour.",
      "Pour in 400 ml of the buttermilk and cut it through with a table knife until you have a wet, shaggy dough with no dry flour left in the base of the bowl. Add the last 50 ml only if it looks tight. Do not knead it.",
      "Scrape the dough straight into the tin, level the top with a wet spoon, scatter over the pinhead oatmeal and bake for 45 to 50 minutes, until the loaf is dark brown and has shrunk slightly from the sides of the tin.",
      "Turn out and tap the base: it should sound hollow and papery. If it thuds, return it to the oven out of its tin for five more minutes. Cool on a wire rack at least 30 minutes before slicing, or the crumb will tear rather than cut."
    ],
    cooksNote: "Sieve the bicarbonate of soda rather than tipping it straight in. It clumps in the tub, and any lump that survives into the dough bakes into a bitter grey-yellow pocket you will find three slices later. Then get the loaf into the oven within two minutes of the buttermilk going in: the lift is a one-shot acid reaction, and it starts spending itself in the bowl.",
    image: "/generated/wheaten-bread.jpg",
    imagePrompt: "A dark, close three-quarter shot of a wholemeal wheaten loaf on a scarred oak board, one thick slice cut and leaning against the loaf so the dense brown crumb faces the light. Pinhead oatmeal crusts the top. A curl of salted butter softens on the cut slice; a bone-handled butter knife and a chipped cream enamel plate sit just out of focus. Warm, moody side light from the left, deep burgundy linen and parchment tones, shallow depth of field, crumbs scattered across the board. No text, no hands, no branding.",
    authenticityNote: "Wheaten bread is the Ulster wholemeal soda bread, distinct from the white soda farls of the same tradition, and is raised by buttermilk and bicarbonate of soda with no yeast at all. Families differ on whether sugar and butter belong in it; both are widespread in Northern Ireland, but a wheaten of nothing but wholemeal, soda, salt and buttermilk is equally traditional, which is why both are marked optional in the list above."
  }
];


/**
 * Adapter — map to the site's real schema.
 *
 * Open mockData.js, read ONE existing recipe object, then change the RIGHT-HAND
 * side of each line below to match its key names and value shapes. Everything
 * else follows automatically.
 *
 *   import { toSiteShape } from "./recipes-expansion";
 *   export const RECIPES = [...EXISTING_RECIPES, ...toSiteShape()];
 */
export const toSiteShape = (recipes = EXPANSION_RECIPES) =>
  recipes.map((r) => ({
    slug: r.slug,
    title: r.title,

    // If the site stores region lowercase-hyphenated, swap the line below for:
    //   region: r.region.toLowerCase().replace(/\s+/g, "-"),
    // Getting this wrong makes all ten Northern Ireland recipes vanish from the
    // filter while still rendering in the grid — a silent failure.
    region: r.region,

    category: r.category,
    difficulty: r.difficulty,

    // If the site stores pre-formatted strings ("55 min"), swap for:
    //   prep: `${r.prepMinutes} min`,
    prep: r.prepMinutes,
    cook: r.cookMinutes,
    serves: r.serves,

    // Ratings: see CONTENT_ADDITION_PLAN.md section 4. Mapping editorialRating
    // onto `rating` keeps the star UI working; the caption must then read
    // "Editors' score", and ratingCount must be dropped from the card.
    rating: r.editorialRating,

    mostLoved: r.mostLoved,
    tags: r.tags,
    story: r.story,

    // If ingredients are a flat string array, swap for:
    //   ingredients: r.ingredients.map((i) =>
    //     [i.quantity, i.unit, i.item].filter(Boolean).join(" ")),
    ingredients: r.ingredients,

    method: r.method,
    notes: r.cooksNote,
    image: r.image,
  }));

export default EXPANSION_RECIPES;
