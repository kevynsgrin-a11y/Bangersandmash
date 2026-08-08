# Image Generation Prompts — Phase 1 expansion

32 prompts, keyed by slug, written to the site's established style directive:
warm moody magazine lighting, burgundy and parchment palette, dish-accurate
composition, shallow depth of field, no text, no hands, no branding. The existing
23 images were produced under the same directive, so the expanded grid reads as one
shoot rather than two.

## Running them

Append these to the prompt map in `/app/scripts/generate_images.py`, then:

All 32 slugs, complete and paste-ready — run from `/app`:

```bash
python3 scripts/generate_images.py \
  --only tattie-scones,forfar-bridie,scotch-pie,clootie-dumpling,cranachan,haggis-neeps-and-tatties,stovies,cullen-skink,scotch-broth,roast-leg-of-lamb-with-rowan-jelly,dundee-cake,scottish-shortbread,glamorgan-sausages,welsh-oggie,monmouth-pudding,anglesey-eggs,faggots-with-peas-and-onion-gravy,welsh-rarebit,cawl,roast-welsh-lamb-with-honey-and-rosemary,bara-brith,welsh-cakes,ulster-fry,steak-and-guinness-pie,buttermilk-and-apple-tart,boxty,champ,irish-stew,pea-and-ham-soup,roast-ham-with-cider-glaze,fifteens,wheaten-bread \
  --concurrency 4
```

Regenerate this list from the module rather than editing it by hand:

```bash
node -e 'import("./recipes-expansion.js").then(m =>
  console.log(m.EXPANSION_RECIPES.map(r => r.slug).join(",")))'
```

Output goes to `/app/frontend/public/generated/<slug>.jpg`.

> **Optimise before shipping.** The existing 23 heroes run 738-859 KB each. Adding 32
> more at that weight puts roughly 44 MB of imagery behind a listing grid. Convert all
> 55 to WebP/AVIF with `srcset` and lazy-loading in one pass — see INTEGRATION.md section 3.

---

## Scotland

### `tattie-scones` — Tattie Scones
*Breakfast · Easy*

```
Warm, moody magazine-style food photography of four triangular tattie scones overlapping in
a loose stack on a black cast-iron girdle still on the hob, their surfaces blistered with
dark scorch marks and marked with fork pricks. A knob of butter melts across the top farl.
Just behind and softly out of focus sit a plate with a fried egg and rashers of streaky
bacon, and a floured wooden board with the trimmed dough. Parchment cloth, dark oak,
burgundy background dropping into shadow. Warm low morning light from the left. Shallow
depth of field on the top scone. No text, no hands, no branding.
```

### `forfar-bridie` — Forfar Bridie
*Pies & Pastries · Intermediate*

```
Two Forfar bridies on a dark oak board, warm moody magazine lighting from a low window.
Deep-gold shortcrust curved into horseshoes with a rope-crimped edge, a small hole punched
in the lid of the whole one, the other cut across to show hand-chopped beef and onion
sitting in its own glossy gravy with no potato anywhere. Props: a crumpled parchment wrapper
beneath, a burgundy linen napkin, a chipped enamel mug of tea out of focus behind. Burgundy
and parchment palette, shallow depth of field, background falling away dark. No text, no
hands, no branding.
```

### `scotch-pie` — Scotch Pie
*Pies & Pastries · Intermediate*

```
Three Scotch pies on a parchment-lined baking tray, warm moody magazine lighting raking in
from the left. Straight, pale-gold hot water crust walls standing a clear centimetre above
the mutton filling, one pie broken open to show the dense, spiced meat and the steam hole in
its lid. Props: a burgundy enamel jug of gravy, a small dish of baked beans, a bone-handled
knife, a dusting of flour on the dark oak table beneath. Burgundy and parchment palette,
shallow depth of field, deep shadow behind. No text, no hands, no branding.
```

### `clootie-dumpling` — Clootie Dumpling
*Puddings & Desserts · Advanced*

```
Warm, moody magazine-style food photography of a whole clootie dumpling on a chipped cream
enamel plate, its dark leathery skin taut and faintly wrinkled, with one thick wedge cut
away to show the dense fruited crumb studded with currants and sultanas. The damp cotton
cloot lies loosely to one side, still dusted with flour and creased from the string. A small
white jug of pouring cream sits behind, out of focus. Dark oak table, parchment cloth,
burgundy background falling into shadow. Warm single-source light from behind left, faint
steam rising. Shallow depth of field on the cut face. No text, no hands, no branding.
```

### `cranachan` — Cranachan
*Puddings & Desserts · Easy*

```
Warm, moody magazine-style food photography of cranachan in two footed crystal glasses, the
layers clearly readable through the glass: whipped cream, crushed raspberry sauce and
toasted oatmeal, topped with whole raspberries and a thread of honey caught mid-drizzle. A
small wooden bowl of toasted medium oatmeal and a squat whisky glass sit just behind, softly
out of focus. Parchment linen runner over dark oak, a few loose raspberries fallen to the
table. Warm low side light, burgundy and parchment palette, deep shadow at the frame edges.
Shallow depth of field on the front glass. No text, no hands, no branding.
```

### `haggis-neeps-and-tatties` — Haggis, Neeps & Tatties
*Regional Classics · Intermediate*

```
A warm, moody magazine-style plate shot: a split haggis on a cream ironstone plate, its
casing scored open so the loose, oatmeal-flecked filling spills out, with a mound of coarse
orange neep mash and a mound of pale buttered tatties beside it, butter melting into a small
pool. Props: an antique bone-handled knife, a cut-glass dram of whisky out of focus behind,
a burgundy wool runner on a dark oak table, a pepper mill at the frame's edge. Burgundy and
parchment palette, shallow depth of field, single low side light. No text, no hands, no
branding.
```

### `stovies` — Stovies
*Regional Classics · Easy*

```
A shallow cast-iron pan of stovies on dark scrubbed oak, lit warm and moody from a low side
window in magazine style. Potatoes half collapsed into glossy brown onion juices, browned
edges catching the light, shreds of roast beef folded through, black pepper ground over the
top. Props: oatcakes stacked on a small parchment-coloured plate, a bowl of sliced pickled
beetroot glowing deep burgundy, a worn wooden spoon resting against the pan, a rumpled linen
cloth. Burgundy and parchment palette, shallow depth of field, background dropping into
shadow. No text, no hands, no branding.
```

### `cullen-skink` — Cullen Skink
*Soups & Stews · Easy*

```
A wide, shallow cream stoneware bowl of Cullen skink on a scrubbed dark oak table, shot in
warm, moody magazine lighting from a low side window. Pale flakes of smoked haddock and soft
chunks of potato break the milky surface, scattered with chopped flat-leaf parsley and
cracked white pepper. Props: a worn pewter soup spoon, two oatcakes, a burgundy linen napkin
gathered at the edge, a small milk jug half in shadow. Burgundy and parchment palette,
shallow depth of field, background falling to darkness. No text, no hands, no branding.
```

### `scotch-broth` — Scotch Broth
*Soups & Stews · Easy*

```
A deep cream enamel bowl of Scotch broth on a parchment-coloured cloth over dark wood, lit
warm and low from one side in moody magazine style. The broth is thick with pearl barley,
diced carrot and swede, shreds of mutton and ribbons of green kale, with steam catching the
light. Props: a battered cast-iron pot behind and out of focus, a bone-handled spoon, a torn
piece of bread on a small plate, a burgundy tea towel. Burgundy and parchment palette,
shallow depth of field, deep shadow in the corners. No text, no hands, no branding.
```

### `roast-leg-of-lamb-with-rowan-jelly` — Roast Leg of Lamb with Rowan Jelly
*Sunday Roasts · Intermediate*

```
Warm, moody magazine-style food photography of a carved bone-in roast leg of lamb on a
scratched pewter platter, three thick pink slices fanned back from the bone, rosemary spikes
and garlic slivers still visible in the salted crust. Alongside sits a small footed glass
dish of clear amber rowan jelly, and behind it a burgundy enamel jug of dark gravy.
Parchment linen cloth, dark oak table, a few rowan berries on the stem scattered near the
platter edge. Low raking window light from the left, deep falling shadows, burgundy and
parchment palette. Shallow depth of field on the front slice. No text, no hands, no
branding.
```

### `dundee-cake` — Dundee Cake
*Teatime · Intermediate*

```
Warm, moody magazine-style food photography of a whole Dundee cake on a footed cream cake
stand, its flat top completely covered by three concentric rings of whole blanched almonds
glazed to a soft hazel sheen. One slice has been cut and laid on a small plate in front,
showing the pale golden crumb dense with currants, sultanas and flecks of candied orange
peel. Dark oak table, parchment cloth, a squat jar of Seville marmalade behind and out of
focus. Warm raking light from the right, burgundy and parchment palette, shadows pooling at
the edges. Shallow depth of field on the cut slice. No text, no hands, no branding.
```

### `scottish-shortbread` — Scottish Shortbread
*Teatime · Easy*

```
Warm, moody magazine-style food photography of a round of Scottish shortbread petticoat
tails, pale straw-coloured, crimped around the edge and cut into eight wedges, with one
wedge lifted slightly clear to show the sandy break along the crumb. Scattered caster sugar
catches the light on the surface and the fork-prick rings are clearly visible. Shown in a
parchment-lined shallow tin on a dark oak table, with a bone-handled knife and a burgundy-
glazed teacup behind, out of focus. Warm low side light, burgundy and parchment palette,
soft deep shadow. Shallow depth of field on the lifted wedge. No text, no hands, no
branding.
```

## Wales

### `glamorgan-sausages` — Glamorgan Sausages
*Breakfast · Easy*

```
Eight golden crumbed Glamorgan sausages on a warm cream ceramic plate, one broken open to
show the pale interior of melted Caerphilly, soft leek and breadcrumb. Warm moody light
raking from the left, deep burgundy shadows, parchment linen over a scrubbed dark wood
board. A small dish of chutney, a few raw leek rings and a wedge of crumbly white Caerphilly
sit behind, softly out of focus. Shallow depth of field with the split sausage sharp.
Editorial British food photography. No text, no hands, no branding.
```

### `welsh-oggie` — Welsh Oggie
*Pies & Pastries · Intermediate*

```
Four large Welsh oggies on a blackened baking tray, deep burnished gold with a thick rope
crimp running the length of each top and a dark steam vent. One broken open to show diced
lamb, leek, potato and swede in a glossy amber gravy. Warm moody light from a single low
window, deep burgundy shadows, parchment cloth and a scrubbed oak board. A knife, scattered
flour and raw leek tops behind, softly blurred. Shallow depth of field with the crimp sharp.
Editorial British food photography. No text, no hands, no branding.
```

### `monmouth-pudding` — Monmouth Pudding
*Puddings & Desserts · Easy*

```
A shallow cream enamel pie dish of Monmouth pudding, the meringue peaked and tipped bronze
at the edges, one serving lifted out with a worn silver spoon to reveal the strata beneath:
pale lemon-scented crumb, a seam of dark raspberry jam, another band of meringue. Props: an
open jar of raspberry jam with a spoon standing in it, a cut lemon half, a burgundy linen
napkin, a stack of parchment-coloured pudding bowls. Warm, moody, magazine-style light
raking from the left; shallow depth of field; slightly overhead three-quarter angle. No
text, no hands, no branding.
```

### `anglesey-eggs` — Anglesey Eggs
*Regional Classics · Easy*

```
An oval earthenware baking dish of Anglesey eggs straight from the oven, a thick collar of
leek-flecked mash browned along its ridges around a centre of halved boiled eggs under
bubbling Caerphilly sauce, breadcrumbs crisped to gold on top. A spoonful has been served
onto a parchment-coloured plate, a bright yolk half showing. Props: a bundle of trimmed
leeks, a wedge of crumbly white Caerphilly, a burgundy tea towel draped over the dish
handle. Warm, moody, low window light; steam rising; shallow depth of field; close three-
quarter angle. No text, no hands, no branding.
```

### `faggots-with-peas-and-onion-gravy` — Faggots with Peas and Onion Gravy
*Regional Classics · Intermediate*

```
Four faggots in a battered enamel roasting tin, burnished dark brown where the caul fat has
melted and set to a glaze, sitting in a pool of glossy onion gravy thick with softened
onion. Beside the tin, a warmed plate holds a mound of mushy marrowfat peas, green and
coarse-textured, with a jug of extra gravy behind. Props: a few fresh sage leaves, a well-
used serving spoon, a burgundy cloth, a parchment-coloured enamel plate. Warm, moody, low-
key lighting from one side; steam catching the light; shallow depth of field; close three-
quarter angle. No text, no hands, no branding.
```

### `welsh-rarebit` — Welsh Rarebit
*Regional Classics · Easy*

```
Two thick slices of grilled Welsh rarebit on a chipped enamel plate, the cheese surface
blistered dark amber with molten channels between the peaks. One slice cut through to show
the sauce set firm right to the crust. Warm low side light, deep burgundy shadows, parchment
linen beneath. A half-glass of dark ale, a wooden-handled grater with cheese shreds and a
small pot of English mustard sit behind, out of focus. Shallow depth of field, the blistered
crust sharp. Moody magazine food photography. No text, no hands, no branding.
```

### `cawl` — Cawl
*Soups & Stews · Easy*

```
A deep bowl of Welsh cawl on a scrubbed oak table, warm moody side light from a low window.
Chunks of lamb, thick rounds of carrot, quartered floury potato and green leek sit in a
cloudy amber broth flecked with parsley. A wedge of crumbly white Caerphilly and a torn
slice of buttered bread rest on a parchment cloth beside it, with a pewter spoon. Burgundy
and parchment palette, deep shadows, shallow depth of field with the broth surface sharp.
Magazine food photography. No text, no hands, no branding.
```

### `roast-welsh-lamb-with-honey-and-rosemary` — Roast Welsh Lamb with Honey and Rosemary
*Sunday Roasts · Intermediate*

```
A bronzed leg of Welsh lamb resting on a scarred oak carving board, the honey glaze catching
the light in dark amber patches, rosemary sprigs and slivered garlic pushed into the fat.
Two thick slices cut and fanned to show a rosy centre beneath a rendered crust. Warm moody
light from a low window, deep burgundy shadows, parchment linen. A blackened roasting tin of
onions and a jug of glossy gravy sit behind, softly out of focus. Shallow depth of field.
Editorial British food photography. No text, no hands, no branding.
```

### `bara-brith` — Bara Brith
*Teatime · Easy*

```
A dark, close-crumbed bara brith on a scarred wooden board, two thick slices cut and fanned
so the sultanas, raisins and currants show through, one slice spread with pale salted
butter. The loaf's top is glossy with honey glaze and split along its spine. Props: a butter
dish with a bone-handled knife, a bone-china teacup of strong tea, a crumpled parchment-
coloured cloth, the greaseproof paper the loaf was wrapped in. Warm, moody, low side light
against a burgundy background; shallow depth of field; three-quarter view at table height.
No text, no hands, no branding.
```

### `welsh-cakes` — Welsh Cakes
*Teatime · Easy*

```
A blackened cast-iron bakestone just off the heat, eight Welsh cakes cooling on it, deep
gold with a pale band around their middles and currants showing dark at the surface, thickly
dredged in caster sugar. One is broken open on a chipped enamel plate beside it. Props: a
parchment-coloured linen cloth, a bowl of caster sugar with a small sieve, a jar of
currants, an earthenware teapot slightly out of focus. Burgundy and parchment palette, warm
moody side light from a low window, shallow depth of field, close three-quarter angle. No
text, no hands, no branding.
```

## Northern Ireland

### `ulster-fry` — Ulster Fry
*Breakfast · Easy*

```
A full Ulster fry on a wide cream ironstone plate set on a scrubbed oak table: two rashers
of back bacon, two browned pork sausages, dark discs of black pudding beside pale white
pudding, a golden potato bread, a soda farl split and fried cut-side up, one fried egg with
a glossy yolk, a blistered tomato half. Warm low side light from a window, deep shadows, a
burgundy linen napkin and a parchment-toned enamel teapot soft in the background. Shallow
depth of field, faint steam catching the light. No text, no hands, no branding.
```

### `steak-and-guinness-pie` — Steak and Guinness Pie
*Pies & Pastries · Intermediate*

```
A deep oval pie dish of steak and stout pie on a burgundy cloth, the all-butter puff lid
risen high and burnished mahogany, one wedge lifted away to show dark glossy gravy and
chunks of shin beef falling apart. Crimped edge, a steam vent still releasing a thread of
steam. A parchment-coloured napkin, an antique steel pie server and a plain unlabelled glass
of dark stout with a settled cream head sit just behind and out of focus. Warm moody light
raking from the left, deep shadow, shallow depth of field. No text, no hands, no branding.
```

### `buttermilk-and-apple-tart` — Buttermilk and Apple Tart
*Puddings & Desserts · Intermediate*

```
A buttermilk and apple tart in a fluted 23 cm case on a parchment-coloured ceramic stand,
one wedge lifted out to reveal the pale set custard and the seam of Bramley slices beneath
it. Freshly grated nutmeg dusts the surface and the pastry edge is deep gold. Beside it, a
burgundy linen cloth, a bone-handled cake slice, a small jug of thick cream and two whole
Bramley apples with their green-flushed skins. Warm, moody light raking from the left,
shallow depth of field, deep red and parchment palette. No text, no hands, no branding.
```

### `boxty` — Boxty
*Regional Classics · Easy*

```
A stack of three boxty pancakes on a chipped cream enamel plate, edges lacy and irregular,
crust deep gold with darker blistered patches, the top one torn open to show a dense pale
potato crumb with a pat of butter sinking into it. Set on a dark oak board with a burgundy
tea towel folded behind and a parchment-toned buttermilk jug and an old box grater soft in
the background. Warm low side light, moody shadow, shallow depth of field with focus on the
torn edge. No text, no hands, no branding.
```

### `champ` — Champ
*Regional Classics · Easy*

```
A wide shallow earthenware bowl of champ on a parchment linen cloth, a burgundy runner
falling into shadow behind. Soft ivory mash flecked green with spring onion, swirled with
the back of a spoon into a deep central well holding a knob of butter that has begun to run
in a golden channel down one side. A worn wooden spoon rests alongside, with a small enamel
jug of hot milk and a few trimmed spring onions out of focus behind. Warm moody window
light, shallow depth of field, gentle steam. No text, no hands, no branding.
```

### `irish-stew` — Irish Stew
*Soups & Stews · Easy*

```
A cast-iron casserole of Irish stew, its lid propped against the side, on a deep burgundy
cloth over an aged parchment-coloured board. Pale broth clouded and thickened by collapsed
potato, pieces of mutton on the bone, halved potatoes still holding their shape, translucent
onion, a bay leaf and thyme sprig surfacing. A worn pewter ladle rests inside and a chipped
enamel bowl sits part-filled alongside, scattered with chopped parsley. Warm low raking
light from the left, deep shadow at the rim, steam rising. Shallow depth of field. No text,
no hands, no branding.
```

### `pea-and-ham-soup` — Pea and Ham Soup
*Soups & Stews · Easy*

```
A deep bowl of thick yellow split pea soup on a scrubbed pine table, the surface matt and
dense with shreds of pink ham breaking through it and a scatter of coarse black pepper and
chopped parsley. The bowl is wide-lipped cream enamel with a heavy pewter spoon resting
across the rim. Two thick slices of buttered wheaten bread sit on a parchment cloth behind,
slightly out of focus, beside the picked ham bone. Warm, moody light from one side, burgundy
and parchment palette, shallow depth of field, steam just visible. No text, no hands, no
branding.
```

### `roast-ham-with-cider-glaze` — Roast Ham with Cider Glaze
*Sunday Roasts · Intermediate*

```
A whole glazed gammon joint on a scratched pewter platter, the fat scored into dark diamonds
with a clove pressed into every second crossing and the glaze catching the light in a
treacly, blistered sheen. Two thin slices have been carved and lean against the base, pink
against the burnt-sugar crust. A carving fork rests on a burgundy linen cloth beside a squat
glass of cider and a few bruised Armagh apples. Warm, moody low side light, parchment and
deep red palette, shallow depth of field. No text, no hands, no branding.
```

### `fifteens` — Fifteens
*Teatime · Easy*

```
Overhead-tilted shot of six coconut-rolled Fifteens slices fanned across a parchment-toned
vintage side plate, cut faces up so the pink marshmallow and red cherry show through the
pale biscuit paste. The uncut remainder of the log sits behind with one end trimmed and
loose coconut around it. A burgundy linen napkin, a small bone-handled knife and a rose-
patterned china teacup blur into the background. Warm, moody window light from the left,
shallow depth of field, stray coconut shreds on the cloth. No text, no hands, no branding.
```

### `wheaten-bread` — Wheaten Bread
*Teatime · Easy*

```
A dark, close three-quarter shot of a wholemeal wheaten loaf on a scarred oak board, one
thick slice cut and leaning against the loaf so the dense brown crumb faces the light.
Pinhead oatmeal crusts the top. A curl of salted butter softens on the cut slice; a bone-
handled butter knife and a chipped cream enamel plate sit just out of focus. Warm, moody
side light from the left, deep burgundy linen and parchment tones, shallow depth of field,
crumbs scattered across the board. No text, no hands, no branding.
```
