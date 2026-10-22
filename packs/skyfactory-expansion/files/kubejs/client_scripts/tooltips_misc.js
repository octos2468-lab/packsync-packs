;(function () {   // own scope: KubeJS client scripts share one global scope, top-level names collided across files
// Ottocraft tooltip polish: adventure, Hexxit, Tinkers, food, Chickens, Ex Nihilo, Chance Cubes, Bountiful, Capsule,
// sf3extras/kubejs items and the vanilla-adjacent mods (tooltips-misc, Update 7). Client only; F3+T reloads it.
//
// 1. LANG: text fixes for keys the mod jars already define. kubejs/assets/<ns>/lang loads BELOW the mod jars in this
//    pack (KubeJS 2101 puts it in its [Internal] pack, under mod_resources), so a plain override there loses. These go
//    into KubeJS's [Last] generated pack instead, the top of the resource stack. Only this session's namespaces.
// 2. TIPS: a Shift section (and sometimes one short line) for items that explain nothing or explain it wrong.
// 3. TIDY: in these namespaces only, split lines that contain a newline (or a literal "\n" from 1.12 lang), wrap
//    lines wider than WRAP px, and drop exact repeats (code + sf3_lore.js both adding "Requires a Mesh", etc.).

var WRAP = 250
var HINT = '§8Hold §7Shift§8 for details'

var LANG = {
  // one wording for every "hold Shift" hint
  hexxitgear: {
    'gui.hexxitgear.set.more_info': HINT,
    'ability.hexxitgear.stealth.desc': 'Become invisible, but slowed.\nYour next attack breaks the invisibility\nand deals extra damage.',
    'ability.hexxitgear.lift.desc': 'Lifts enemies in front of you\nhigh into the air.',
    'ability.hexxitgear.rampage.desc': 'Move faster, hit harder and regenerate.\nNearby enemies are slowed.',
    'ability.hexxitgear.shield.desc': 'Grants total invulnerability.',
    'gui.hexxitgear.refresher_shard': 'Right-click to reset your Hexxit Gear set ability cooldown.',
    'tooltip.hexxitgear.hexical_master_sword_blade': 'Combine with the Hilt to forge the sword.',
    'tooltip.hexxitgear.hexical_master_sword_hilt': 'Combine with the Blade to forge the sword.'
  },
  nyx: { 'tooltip.nyx.shift': HINT },
  cqrepoured: { 'description.click_shift.name': HINT },
  secretroomsmod: { 'camopaste.pressshift': HINT },
  platforms: { 'info.platforms.holdshift': HINT },
  tconstruct: {
    'tooltip.tool.holdShift': '§8Hold §7Shift§8 for stats',
    'tooltip.tool.holdCtrl': '§8Hold §7Ctrl§8 for parts',
    'tooltip.tank.holdShift': '§8Hold §7Shift§8 for buckets'
  },
  // Capsule: "* Left click" lines rendered as one joined line; the newline is split by TIDY, these only read better
  capsule: {
    'capsule.tooltip.canRotate': 'Left-click: rotate\nSneak + left-click: mirror',
    'capsule.tooltip.blueprintUseUncharged': 'Left-click: charge from your inventory\nRight-click: undo the last deploy\nSneak + right-click: link an inventory',
    'capsule.tooltip.blueprintUseCharged': 'Right-click: deploy instantly\nSneak + right-click: link an inventory'
  },
  // Bounty Board pages (Update 6): clearer decree line, item ids instead of a doubled "Requires:", typo + wrong colour
  bountiful: {
    'bountiful.decree.tooltip': 'Opens the Age %s jobs page of a Bounty Board for good.',
    'bountiful.tooltip.advanced': '§8Hold §7Shift§8 for item ids',
    'bountiful.tooltip.requiredDetails': '§8Item id:',
    'bountiful.requirements.met': '§aBounty complete. Right-click a Bounty Board to turn it in.',
    'bountiful.cannot.fulfill': "§cYou don't have everything this bounty asks for yet."
  },
  // Dark Utilities rings: Curios ring slot, not Baubles; each names its real enchantment
  darkutils: {
    'jei.darkutils.ring_angler': 'Wear it in your off hand or a Curios ring slot: your held tool gets +1 Luck of the Sea, even without the enchantment. More rings stack. Found in Nether Fortress chests.',
    'jei.darkutils.ring_depth': 'Wear it in your off hand or a Curios ring slot: your boots get +1 Depth Strider, even without the enchantment. More rings stack. Found in Nether Fortress chests.',
    'jei.darkutils.ring_engineer': 'Wear it in your off hand or a Curios ring slot: your held tool gets +1 Efficiency, even without the enchantment. More rings stack. Found in Nether Fortress chests.',
    'jei.darkutils.ring_frost': 'Wear it in your off hand or a Curios ring slot: your boots get +1 Frost Walker, even without the enchantment. More rings stack. Found in Nether Fortress chests.',
    'jei.darkutils.ring_protect': 'Wear it in your off hand or a Curios ring slot: your chestplate gets +1 Protection, even without the enchantment. More rings stack. Found in Nether Fortress chests.',
    'jei.darkutils.ring_pyro': 'Wear it in your off hand or a Curios ring slot: your held weapon gets +1 Fire Aspect, even without the enchantment. More rings stack. Found in Nether Fortress chests.',
    'jei.darkutils.ring_titan': 'Wear it in your off hand or a Curios ring slot: your held weapon gets +1 Knockback, even without the enchantment. More rings stack. Found in Nether Fortress chests.',
    'jei.darkutils.ender_hopper': 'Pulls nearby items into the container it is attached to. Sneak + right-click shows its reach.'
  },
  // Iron Backpacks: 1.12 "Ore Dictionary" filter matches item tags here (BackpackRules.oreDict)
  ironbackpacks: {
    'item.ironbackpacks.upgrade.filterOreDict.name': 'Tag Filter Upgrade',
    'item.ironbackpacks.filter_ore_dict_upgrade': 'Tag Filter Upgrade',
    'button.ironbackpacks.oreDict.tooltip': 'Tag Matching',
    'button.ironbackpacks.clear.oreDictFilter.tooltip': 'Clears the Tag filter items.',
    'tooltip.ironbackpacks.upgrade.oreDictFilter.desc': 'Like the basic filter, but also picks up items that share a common tag (c:ingots/iron, logs, wool...) with an item in the filter.',
    'tooltip.ironbackpacks.upgrade.fuzzyFilter.desc': 'Like the basic filter, but ignores durability and other item data.',
    'tooltip.ironbackpacks.upgrade.voidFilter.desc': 'Deletes items you pick up that match the filter (ignores durability and item data).',
    'jei.description.upgrade.filter.fuzzy': 'Items in the filter slots match even if their durability or other data differs.',
    'jei.description.upgrade.filter.oreDict': 'Items in the filter slots also match anything sharing a common tag with them. For example, put an oak log in a slot and any log is picked up.',
    'jei.description.upgrade.filter.void': 'Items matching the filter slots are DELETED when picked up. Durability and item data are ignored.'
  },
  // Chickens: grammar
  chickens: {
    'block.chickens.henhouse.tooltip': 'Collects what nearby chickens lay (about 4 blocks around). Needs hay bales: each bale lasts 100 items.',
    'item.chickens.liquid_egg.tooltip': 'Places its liquid like a one-use bucket.'
  },
  // Cooking for Blockheads: "\n" lines are split by TIDY; this keeps them short
  cookingforblockheads: {
    'tooltip.cookingforblockheads.recipe_book.description': 'Shows food you can make\nfrom what is in your inventory.',
    'tooltip.cookingforblockheads.crafting_book.description': 'Crafts food from what\nis in your inventory.'
  },
  // KubeJS keepsake names (also generated by the startup script; kept here so they never show as raw keys)
  kubejs: {
    'item.kubejs.settlers_charter': "Settler's Charter",
    'item.kubejs.homestead_seal': 'Homestead Seal',
    'item.kubejs.engineers_compact': "Engineer's Compact",
    'item.kubejs.nether_accord': 'Nether Accord',
    'item.kubejs.realm_key': 'Realm Key',
    'item.kubejs.mastery_crown': 'Mastery Crown'
  }
}

var JsonObject = Java.loadClass('com.google.gson.JsonObject')
ClientEvents.generateAssets('last', event => {
  Object.keys(LANG).forEach(ns => {
    let o = new JsonObject()
    Object.keys(LANG[ns]).forEach(k => o.addProperty(k, String(LANG[ns][k])))
    event.json(ns + ':lang/en_us', o)
  })
})

// ---------------------------------------------------------------------------------------------------------------
// TIPS: id -> { line: always-shown lines, shift: lines shown while Shift is held }. Colour codes: §7 grey (default),
// §e yellow = an action, §f white = an item or place, §6 gold = headline. Long lines are wrapped by TIDY.
var Y = '§e', W = '§f', G = '§7', O = '§6', R = '§c'
var TIPS = {}
function tip(ids, line, shift) {
  if (!Array.isArray(ids)) ids = [ids]
  ids.forEach(id => { TIPS[id] = { line: line || [], shift: shift || [] } })
}

// --- our keepsakes, crown, decrees and bounty board (boss-gated ages + Bounty Board pages) --------------------------
var KEEPSAKES = [
  ['kubejs:settlers_charter', 'Settler Decree'], ['kubejs:homestead_seal', 'Homestead Decree'],
  ['kubejs:engineers_compact', 'Engineer Decree'], ['kubejs:nether_accord', 'Nether Decree'], ['kubejs:realm_key', 'Realm Decree']
]
KEEPSAKES.forEach(k => tip(k[0], [O + 'Keepsake from the old seal system'], [
  'Ages now open when someone beats a gate boss, for the whole server. See ' + Y + '/sf3ages' + G + ' or the guide page ' + W + 'How Ages Open' + G + '.',
  Y + 'Right-click' + G + ': pays this age\'s reward bag, if you never got it.',
  'Craft it with paper, an ink sac and a gold nugget for a ' + W + k[1] + G + ' (this item is kept).'
]))
tip('kubejs:mastery_crown', [O + "The guide's final trophy"], [
  'Made from an ' + W + 'Awakened Core' + G + ', a ' + W + 'Gaia Spirit' + G + ', a ' + W + 'Chaos Shard' + G + ' and paper.',
  Y + 'Right-click' + G + ': pays the Age 6 reward bag, if you never got it.',
  'Craft it with paper, an ink sac and a gold nugget for a ' + W + 'Mastery Decree' + G + ' (the crown is kept).'
])
var DECREES = {
  settler: 'Craft one: a Bounty Board (kept), 2 paper, 2 ink sacs, a feather and a gold nugget.',
  homestead: 'Every player gets one when Age 3 opens.',
  engineer: 'Every player gets one when Age 4 opens.',
  nether: 'Every player gets one when Age 5 opens.',
  realm: 'Every player gets one when Age 6 opens.',
  mastery: 'Craft it from the Mastery Crown (kept), paper, an ink sac and a gold nugget.'
}
Object.keys(DECREES).forEach(d => tip('bountiful:decree_' + d, [], [
  'Open a ' + W + 'Bounty Board' + G + ', go to this decree\'s locked page and put it in the slot (or ' + Y + 'right-click' + G + ' the board with it). The page stays open and starts with 3 jobs.',
  DECREES[d],
  'Decree + paper crafts a copy (the decree is kept).'
]))
tip(['bountiful:bountyboarditem', 'bountiful:bountyboard'], [G + 'Take jobs, bring what they ask, get paid'], [
  W + 'Notices' + G + ' is always open; each age has its own page, opened with that age\'s ' + W + 'Decree' + G + '.',
  'Every open page gets a new job about every 3 minutes, up to 9.',
  Y + 'Right-click' + G + ' the board with a finished Bounty to cash it in, on any page.',
  'Breaking it drops the board and its decrees. Jobs on it are lost.'
])
tip('bountiful:bounty', ['§8Turn in: right-click a Bounty Board with it'], [])
tip('explorerscompass:explorerscompass', [R + 'Retired' + G + ': use the ' + Y + 'Locate' + G + ' button in your inventory instead.'], [])

// --- Hexxit Gear ----------------------------------------------------------------------------------------------------
tip('hexxitgear:hexbiscus', [], ['Craft it into ' + W + 'Hexical Essence' + G + '.'])
tip('hexxitgear:hexical_essence', [], ['Made from Hexbiscus flowers. Four of it, a diamond and a Nyx ' + W + 'Fallen Star' + G + ' make a ' + W + 'Hexical Diamond' + G + '.'])
tip('hexxitgear:hexical_diamond', [], ['Crafting material for the Hexxit armor sets.', 'Made from a diamond, 4 Hexical Essence and a Nyx ' + W + 'Fallen Star' + G + ' (they fall from the sky at night).'])

// --- Capsule --------------------------------------------------------------------------------------------------------
tip('capsule:capsule', [], [
  Y + 'Right-click' + G + ' to activate it, then ' + Y + 'right-click' + G + ' again to throw it at the block you look at.',
  'An empty capsule captures the blocks in its area where it lands; a full one builds them there.',
  Y + 'Right-click' + G + ' a deployed capsule to pull the blocks back in.'
])

// --- Ex Nihilo Adscensio / Ex Compressum ------------------------------------------------------------------------------
tip('exnihiloadscensio:sieve', [], [
  'Put a mesh in, then a siftable block (dirt, gravel, sand, dust, soul sand...).',
  Y + 'Right-click' + G + ' (or hold it) to sift. Better meshes find more and rarer things.'
])
tip(['exnihiloadscensio:string_mesh', 'exnihiloadscensio:flint_mesh', 'exnihiloadscensio:iron_mesh', 'exnihiloadscensio:diamond_mesh', 'excompressum:iron_mesh'],
  [], ['Goes in a Sieve (or Heavy Sieve). Higher tiers find more and rarer things.'])
tip(['exnihiloadscensio:wooden_hammer', 'exnihiloadscensio:stone_hammer', 'exnihiloadscensio:iron_hammer', 'exnihiloadscensio:golden_hammer', 'exnihiloadscensio:diamond_hammer'],
  [], ['Breaks blocks one step down: cobblestone → gravel → sand → dust. Netherrack and end stone become crushed blocks.', 'Better hammers last longer and mine faster.'])
tip(['exnihiloadscensio:wooden_crook', 'exnihiloadscensio:bone_crook', 'excompressum:compressed_crook'],
  [], ['Break leaves with it for more saplings and a chance of ' + W + 'Silkworms' + G + '. Collects string from infested leaves.'])
tip('exnihiloadscensio:silkworm', [], [Y + 'Right-click' + G + ' leaves to infest them. Fully infested leaves give string when broken with a crook.', 'Cook it for a snack.'])
tip(['exnihiloadscensio:wooden_barrel', 'exnihiloadscensio:stone_barrel'], [], [
  'Fill it with leaves, saplings, food and other organic items to compost them into dirt.',
  'Or pour in a bucket: drop items into the fluid to transform them (dust in water makes clay).',
  'Wooden barrels cannot hold hot fluids; stone ones can.'
])
tip(['exnihiloadscensio:crucible', 'excompressum:oak_crucible', 'excompressum:spruce_crucible', 'excompressum:birch_crucible',
  'excompressum:jungle_crucible', 'excompressum:acacia_crucible', 'excompressum:dark_oak_crucible'], [], [
  'Melts what you put in. The stone crucible turns cobblestone and netherrack into lava; wooden ones turn leaves and saplings into water.',
  'The stone one needs heat underneath (torch, fire, lava...). Hotter is faster.'
])
tip('exnihiloadscensio:unfired_crucible', [], ['Smelt it in a furnace to get a working Crucible.'])
tip('exnihiloadscensio:porcelain_doll', [], ['Crafting base for the Blazing and Creeping dolls.'])
tip('exnihiloadscensio:blazing_doll', [], ['Drop it into a barrel of lava to summon a ' + W + 'Blaze' + G + '.'])
tip('exnihiloadscensio:creeping_doll', [], ['Drop it into a barrel of witchwater to summon an ' + W + 'Enderman' + G + '.'])
tip('exnihiloadscensio:ancient_spores', [], ['Put it in a barrel of water to make ' + W + 'Witchwater' + G + '. ' + Y + 'Right-click' + G + ' dirt to grow mycelium.'])
tip('exnihiloadscensio:grass_seeds', [], [Y + 'Right-click' + G + ' dirt to turn it into grass.'])
tip(['exnihiloadscensio:stone_pebble', 'exnihiloadscensio:granite_pebble', 'exnihiloadscensio:diorite_pebble', 'exnihiloadscensio:andesite_pebble'],
  [], ['Four in a square craft the matching block (stone pebbles make cobblestone). Can be thrown.'])
tip(['exnihiloadscensio:witchwater_bucket'], [], ['Water + Ancient Spores in a barrel. Turns mobs that touch it into their spooky versions. Creeping dolls work in it.'])
tip(['excompressum:wolf_bait', 'excompressum:ocelot_bait', 'excompressum:cow_bait', 'excompressum:pig_bait', 'excompressum:chicken_bait', 'excompressum:sheep_bait',
  'excompressum:squid_bait', 'excompressum:rabbit_bait', 'excompressum:horse_bait', 'excompressum:donkey_bait'], [], [
  'Place it and walk away: the animal spawns after a while.',
  Y + 'Right-click' + G + ' it to check: it needs blocks from the animal\'s home biome around it, no other bait or animals close by, and water for squid.'
])
tip(['excompressum:auto_hammer', 'excompressum:auto_sieve', 'excompressum:auto_heavy_sieve', 'excompressum:auto_compressed_hammer', 'excompressum:auto_compressor'],
  [], ['Does the hand job by itself on Forge Energy (FE). Pipe or hopper blocks in and products out.', 'The sieves need a mesh.'])

// --- Chance Cubes -----------------------------------------------------------------------------------------------------
tip(['chancecubes:chance_cube', 'chancecubes:chance_icosahedron'], [], ['Break it for a random reward: great, silly or dangerous.', 'A ' + W + 'Chance Pendant' + G + ' in your inventory tilts the odds your way.'])
tip(['chancecubes:giant_chance_cube', 'chancecubes:compact_giant_chance_cube'], [], ['A huge cube with huge rewards (and huge risks). Place it with room around it, then break it.'])
tip(['chancecubes:chance_pendant_tier1', 'chancecubes:chance_pendant_tier2', 'chancecubes:chance_pendant_tier3'], [], ['Keep it in your inventory: Chance Cubes you break roll better. Higher tiers help more.'])
tip('chancecubes:scanner', [], ['Hold it and look at a Chance Cube to see its chance value (how good its reward will be).'])

// --- Pam's HarvestCraft -----------------------------------------------------------------------------------------------
tip('harvestcraft:presser', [], ['Presses honeycomb, waxcomb and other items into honey, wax and more. JEI lists every recipe.'])
tip('harvestcraft:apiary', [], ['Put a ' + W + 'Queen Bee' + G + ' in it to make wax comb, honeycomb and the odd grub.', 'Flowers, crops and gardens nearby speed it up. The queen wears out over time.'])
tip('harvestcraft:groundtrap', [], ['Load it with ' + W + 'Grain Bait' + G + ', Veggie Bait or Fruit Bait to catch meat, leather, feathers and other animal drops over time.'])
tip('harvestcraft:watertrap', [], ['Place it in water and load it with ' + W + 'Fish Trap Bait' + G + ' to catch fish and seafood over time.'])
tip('harvestcraft:market', [], ['Buy seeds, saplings and animal spawn eggs with emeralds.'])
tip('harvestcraft:shippingbin', [], ['Sell crops and food for emeralds.'])
tip('harvestcraft:well', [], ['Endless water: fills buckets and bottles, and gives ' + W + 'Fresh Water' + G + '.'])

// --- Tinkers' Construct (SF3 version) --------------------------------------------------------------------------------
tip('tconstruct:stencil_table', [], ['Turns blank patterns into part patterns: pick the part you want.'])
tip('tconstruct:part_builder', [], ['Cut tool parts from wood, stone and other materials with a pattern. Metal parts are cast in the Smeltery instead.'])
tip('tconstruct:tool_station', [], ['Assemble tools from parts, repair them and apply modifiers.'])
tip('tconstruct:tool_forge', [], ['Like the Tool Station, but also builds the big tools (hammer, excavator, lumber axe, cleaver...).'])
tip('tconstruct:smeltery_controller', [], [
  'The heart of the Smeltery: build a hollow box of seared bricks with this in a wall and a ' + W + 'Seared Tank' + G + ' (fuel) in another.',
  'Melts ores and metals; pour them out through a drain and faucet into casting tables and basins.'
])
tip('tconstruct:seared_tank', [], ['Holds fluid. In a Smeltery wall, a tank of lava is its fuel.'])
tip('tconstruct:seared_faucet', [], [Y + 'Right-click' + G + ' (or give a redstone signal) to pour from the tank or drain behind it into the table or basin below.'])
tip('tconstruct:seared_drain', [], ['Part of a Smeltery wall. Put a faucet on it to pour out molten metal.'])
tip('tconstruct:seared_table', [], ['Casting table: pour metal onto it, empty for ingots or with a cast for parts.'])
tip('tconstruct:seared_basin', [], ['Casting basin: pour 9 ingots\' worth of metal into it for a block.'])
tip('tconstruct:drying_rack', [], ['Hang meat or other items on it to dry them into jerky, leather and more.'])

// --- Chickens / Hatchery ---------------------------------------------------------------------------------------------
tip('chickens:analyzer', [], [Y + 'Right-click' + G + ' a chicken to see its growth, gain and strength. Breed the best ones to raise the stats (max 10).'])
tip('chickens:spawn_egg', [], ['Spawns this kind of chicken. Breeding two kinds can give a new kind; JEI shows which parents make which.'])
tip('hatchery:pen', [], ['Holds one chicken (bring it with an ' + W + 'Animal Net' + G + ') and collects what it lays.'])
tip('hatchery:animalnet', [], [Y + 'Right-click' + G + ' a chicken to catch it, then right-click a Nesting Pen to put it in.'])

// --- Dark Utilities ---------------------------------------------------------------------------------------------------
var RINGS = { ring_angler: 'Luck of the Sea on your held tool', ring_depth: 'Depth Strider on your boots', ring_engineer: 'Efficiency on your held tool',
  ring_frost: 'Frost Walker on your boots', ring_protect: 'Protection on your chestplate', ring_pyro: 'Fire Aspect on your held weapon', ring_titan: 'Knockback on your held weapon' }
Object.keys(RINGS).forEach(r => tip('darkutils:' + r, [], ['Wear it in your off hand or a Curios ring slot: +1 ' + RINGS[r] + ', even without the enchantment. More rings stack.', 'Found in Nether Fortress chests.']))
tip('darkutils:charm_agression', [], ['In your inventory: when you hit a mob, nearby mobs of the same kind join the fight too.'])
tip('darkutils:charm_gluttony', [], ['In your inventory: you eat food almost instantly. Careful!'])
tip('darkutils:charm_null', [], ['In your inventory: destroys the items you choose when you pick them up.', Y + 'Right-click' + G + ' to set the list.'])
tip('darkutils:charm_portal', [], ['In your inventory: Nether portals take you through instantly.'])
tip('darkutils:charm_sleep', [], ['In your inventory: makes sleeping easier.'])
tip('darkutils:focus_sash', [], ['In your inventory: a hit that would kill you from full health leaves you alive instead.'])
tip('darkutils:ender_tether', [], ['Endermen nearby cannot teleport away: they warp to the tether instead.'])
tip('darkutils:feeder', [], ['Holds up to 10 of one food. Nearby animals that like it eat from it and breed.'])
tip('darkutils:sneaky_block', [], [Y + 'Right-click' + G + ' it with another block to copy that block\'s look (the block is not used up).'])
tip('darkutils:timer', [], ['Sends a short redstone pulse every few ticks. ' + Y + 'Right-click' + G + ' to set the time.'])

// --- small utility mods -----------------------------------------------------------------------------------------------
tip('torchmaster:dread_lamp', [], ['Stops passive animals spawning within 64 blocks.'])
tip(['snad:snad', 'snad:red_snad'], [], ['Sugar cane and cactus planted on it grow faster.'])
tip('gravestone:gravestone', [], ['When you die, your items are kept in a gravestone where you fell. Break it to get them back.'])
tip('birdsnests:birdsnest', [], [Y + 'Right-click' + G + ' to open it for a few random goodies. Found by breaking natural leaves.'])

// ---------------------------------------------------------------------------------------------------------------------
// Full coverage (coordinator, 2026-10-20): every item that is not self-explanatory says what it does, how to use it and
// why. S(ids, 'line|line') = Shift lines only. Facts come from the port sources (doc comments, use/hurtEnemy code).
function S(ids, text) { tip(ids, [], text.split('|')) }

// generated by namefix.py: CQR names. kubejs/assets/cqrepoured/lang only had auto-generated names ('Shield Bull');
// the CQR jar keeps the real ones under 1.12-style keys (item.shield_bull = 'Ice Bull Shield').
function addLang(ns, map) { LANG[ns] = LANG[ns] || {}; Object.keys(map).forEach(k => { LANG[ns][k] = map[k] }) }
addLang('cqrepoured', {
 "block.cqrepoured.andesite_carved": "Carved Andesite",
 "block.cqrepoured.andesite_large": "Large Andesite Bricks",
 "block.cqrepoured.andesite_small": "Small Andesite Bricks",
 "block.cqrepoured.diorite_carved": "Carved Diorite",
 "block.cqrepoured.diorite_large": "Large Diorite Bricks",
 "block.cqrepoured.diorite_small": "Small Diorite Bricks",
 "block.cqrepoured.endstone_carved": "Carved Endstone",
 "block.cqrepoured.endstone_small": "Small Endstone Bricks",
 "block.cqrepoured.granite_carved": "Carved Granite",
 "block.cqrepoured.granite_large": "Large Granite Bricks",
 "block.cqrepoured.granite_small": "Small Granite Bricks",
 "block.cqrepoured.prismarine_carved": "Carved Prismarine",
 "block.cqrepoured.prismarine_large": "Large Prismarine Bricks",
 "block.cqrepoured.prismarine_small": "Small Prismarine Bricks",
 "block.cqrepoured.purpur_carved": "Carved Purpur",
 "block.cqrepoured.purpur_large": "Large Purpur Bricks",
 "block.cqrepoured.purpur_small": "Small Purpur Bricks",
 "block.cqrepoured.red_netherbrick_carved": "Carved Red Netherbrick",
 "block.cqrepoured.red_netherbrick_large": "Large Red Netherbricks",
 "block.cqrepoured.stone_small": "Small Stone Bricks",
 "block.cqrepoured.table_acacia": "Acacia Table",
 "block.cqrepoured.table_birch": "Birch Table",
 "block.cqrepoured.table_dark": "Dark Oak Table",
 "block.cqrepoured.table_jungle": "Jungle Table",
 "block.cqrepoured.table_oak": "Oak Table",
 "block.cqrepoured.table_spruce": "Spruce Table",
 "block.cqrepoured.phylactery": "Lich Phylactery",
 "block.cqrepoured.temporary_web": "Decaying Web",
 "block.cqrepoured.exporter": "Exporter Block",
 "item.cqrepoured.dagger_iron": "Iron Dagger",
 "item.cqrepoured.dagger_diamond": "Diamond Dagger",
 "item.cqrepoured.dagger_ninja": "Ninja Dagger",
 "item.cqrepoured.dagger_monking": "Monking Dagger",
 "item.cqrepoured.sword_turtle": "Tortoise Blade",
 "item.cqrepoured.sword_spider": "Spider Sword",
 "item.cqrepoured.sword_moonlight": "Moonlight",
 "item.cqrepoured.sword_sunshine": "Sunshine",
 "item.cqrepoured.sword_walker": "Walker Sword",
 "item.cqrepoured.great_sword_iron": "Iron Greatsword",
 "item.cqrepoured.great_sword_diamond": "Diamond Greatsword",
 "item.cqrepoured.great_sword_bull": "Bull Greatsword",
 "item.cqrepoured.great_sword_monking": "Monking Great Sword",
 "item.cqrepoured.spear_diamond": "Diamond Spear",
 "item.cqrepoured.spear_iron": "Iron Spear",
 "item.cqrepoured.battle_axe_bull": "Bull Battle Axe",
 "item.cqrepoured.staff_healing": "Healing Staff",
 "item.cqrepoured.staff_fire": "Fire Staff",
 "item.cqrepoured.staff_thunder": "Thunder Staff",
 "item.cqrepoured.staff_wind": "Wind Staff",
 "item.cqrepoured.staff_poison": "Poison Staff",
 "item.cqrepoured.staff_vampiric": "Vampiric Staff",
 "item.cqrepoured.staff_spider": "Spider Staff",
 "item.cqrepoured.staff_gun": "Gun Staff",
 "item.cqrepoured.shield_bull": "Ice Bull Shield",
 "item.cqrepoured.shield_carl": "Carl",
 "item.cqrepoured.shield_dragonslayer": "Dragon Shield",
 "item.cqrepoured.shield_fire": "Fiery Shield",
 "item.cqrepoured.shield_goblin": "Goblin Shield",
 "item.cqrepoured.shield_monking": "Monkey Shield",
 "item.cqrepoured.shield_moon": "Moon Shield",
 "item.cqrepoured.shield_mummy": "Bandaged Shield",
 "item.cqrepoured.shield_pigman": "Pigman Shield",
 "item.cqrepoured.shield_pirate": "Pirate Shield",
 "item.cqrepoured.shield_pirate2": "Pirate Shield",
 "item.cqrepoured.shield_rainbow": "Rainbow Shield",
 "item.cqrepoured.shield_reflective": "Mirror Shield",
 "item.cqrepoured.shield_rusted": "Rusted Shield",
 "item.cqrepoured.shield_skeleton_friends": "Skeleton Shield",
 "item.cqrepoured.shield_specter": "Specter Shield",
 "item.cqrepoured.shield_spider": "Spider Shield",
 "item.cqrepoured.shield_sun": "Sun Shield",
 "item.cqrepoured.shield_tomb": "Tomb Shield",
 "item.cqrepoured.shield_triton": "Triton Shield",
 "item.cqrepoured.shield_turtle": "Tortoise Infantry Shield",
 "item.cqrepoured.shield_walker": "Walker Shield",
 "item.cqrepoured.shield_warped": "Warped Shield",
 "item.cqrepoured.shield_zombie": "Zombie Shield",
 "item.cqrepoured.shield_walker_king": "Walker King Shield",
 "item.cqrepoured.helmet_slime": "Slime Helmet",
 "item.cqrepoured.chestplate_slime": "Slime Chestplate",
 "item.cqrepoured.leggings_slime": "Slime Leggings",
 "item.cqrepoured.boots_slime": "Slime Boots",
 "item.cqrepoured.helmet_turtle": "Tortoiseshell Helmet",
 "item.cqrepoured.chestplate_turtle": "Tortoiseshell Chestplate",
 "item.cqrepoured.leggings_turtle": "Tortoiseshell Leggings",
 "item.cqrepoured.boots_turtle": "Tortoiseshell Boots",
 "item.cqrepoured.helmet_bull": "Bull Helmet",
 "item.cqrepoured.chestplate_bull": "Bull Chestplate",
 "item.cqrepoured.leggings_bull": "Bull Leggings",
 "item.cqrepoured.boots_bull": "Bull Boots",
 "item.cqrepoured.helmet_spider": "Spider Helmet",
 "item.cqrepoured.chestplate_spider": "Spider Chestplate",
 "item.cqrepoured.leggings_spider": "Spider Leggings",
 "item.cqrepoured.boots_spider": "Spider Boots",
 "item.cqrepoured.helmet_inquisition": "Inquisition Helmet",
 "item.cqrepoured.chestplate_inquisition": "Inquisition Chestplate",
 "item.cqrepoured.leggings_inquisition": "Inquisition Leggings",
 "item.cqrepoured.boots_inquisition": "Inquisition Boots",
 "item.cqrepoured.helmet_heavy_diamond": "Heavy Diamond Helmet",
 "item.cqrepoured.chestplate_heavy_diamond": "Heavy Diamond Chestplate",
 "item.cqrepoured.leggings_heavy_diamond": "Heavy Diamond Leggings",
 "item.cqrepoured.boots_heavy_diamond": "Heavy Diamond Boots",
 "item.cqrepoured.helmet_heavy_iron": "Heavy Iron Helmet",
 "item.cqrepoured.chestplate_heavy_iron": "Heavy Iron Chestplate",
 "item.cqrepoured.leggings_heavy_iron": "Heavy Iron Leggings",
 "item.cqrepoured.boots_heavy_iron": "Heavy Iron Boots",
 "item.cqrepoured.helmet_diamond_dyable": "Dyable Diamond Helmet",
 "item.cqrepoured.chestplate_diamond_dyable": "Dyable Diamond Chestplate",
 "item.cqrepoured.leggings_diamond_dyable": "Dyable Diamond Leggings",
 "item.cqrepoured.boots_diamond_dyable": "Dyable Diamond Boots",
 "item.cqrepoured.helmet_iron_dyable": "Dyable Iron Helmet",
 "item.cqrepoured.chestplate_iron_dyable": "Dyable Iron Chestplate",
 "item.cqrepoured.leggings_iron_dyable": "Dyable Iron Leggings",
 "item.cqrepoured.boots_iron_dyable": "Dyable Iron Boots",
 "item.cqrepoured.boots_cloud": "Cloud Boots",
 "item.cqrepoured.helmet_dragon": "Dragon Helmet",
 "item.cqrepoured.musket_dagger_iron": "Musket with Iron Dagger",
 "item.cqrepoured.musket_dagger_diamond": "Musket with Diamond Dagger",
 "item.cqrepoured.musket_dagger_monking": "Musket with Monking Dagger",
 "item.cqrepoured.bullet_iron": "Iron Bullets",
 "item.cqrepoured.bullet_gold": "Gold Bullets",
 "item.cqrepoured.bullet_diamond": "Diamond Bullets",
 "item.cqrepoured.bullet_fire": "Fiery Bullets",
 "item.cqrepoured.bubble_pistol": "Bubble Gun",
 "item.cqrepoured.bubble_rifle": "Bubble Launcher",
 "item.cqrepoured.spiderhook": "Spiderhookshot",
 "item.cqrepoured.scale_turtle": "Giant Tortoise Scale",
 "item.cqrepoured.leather_bull": "Bull Leather",
 "item.cqrepoured.horn_bull": "Bull Horn",
 "item.cqrepoured.ball_slime": "Regenerating Slime Ball",
 "item.cqrepoured.leather_spider": "Spider Leather",
 "item.cqrepoured.bone_monking": "Monking Bone",
 "item.cqrepoured.giant_spider_poison": "Giant Spider Venom",
 "item.cqrepoured.feather_golden": "Golden Feather",
 "item.cqrepoured.potion_healing": "Healing Potion"
})

// --- Ancient Beasts ---
S('ancientbeasts:cactus_broth', 'A big meal (12 hunger), but one bowl in four pricks you for 2 damage.')
S('ancientbeasts:shield_book', Y + 'Right-click' + G + ' a mob or player to shield them for 14 s, or the air to shield yourself for 6 s.|20 s cooldown.')
S('ancientbeasts:tough_glove', 'A 5-damage punch that knocks the target away (every 2 s). Does not work on giants.')
S(['ancientbeasts:ice_dart', 'ancientbeasts:ice_dart_red'], Y + 'Right-click' + G + ' to throw three ice darts at once.|Also repairs the matching Frost Wand.')
S('ancientbeasts:ice_wand', Y + 'Right-click' + G + ' a block or mob: a line of ice crystals erupts towards it.|Repair it with Ice Spikes.')
S('ancientbeasts:ice_wand_red', Y + 'Right-click' + G + ' a block or mob: a line of frostblood crystals erupts towards it.|Repair it with red Ice Spikes.')
S('ancientbeasts:bestiary', Y + 'Right-click' + G + ' to read about the Ancient Beasts creatures you have met.')
S('ancientbeasts:kunai', 'A light 3-damage blade. ' + Y + 'Right-click' + G + ' to throw a chain that pulls in what it hits (4 s cooldown).')
S('ancientbeasts:concoction', Y + 'Drink' + G + ' for three random effects (40 s each), good or bad.|16 sips, 150 s cooldown.')
S(['ancientbeasts:storm_bottle', 'ancientbeasts:storm_bottle_1', 'ancientbeasts:storm_bottle_2'], Y + 'Throw' + G + ' it to change the weather: storm, rain or clear skies.')
S(['ancientbeasts:marauder_mask', 'ancientbeasts:hunter_mask', 'ancientbeasts:scorcher_mask', 'ancientbeasts:spiritweaver_mask'], 'A tribal mask worn as a helmet. Repair it with Sandmonster Scales.')
S(['ancientbeasts:scale_armor', 'ancientbeasts:scale_hood'], 'Light desert armor. Repair it with Sandmonster Scales.')
S('ancientbeasts:pokey', 'With a redstone signal it breaks the block in front (up to stone hardness) and thrusts out a spike; without one it retracts.|The spike hurts anything it touches, ignoring armor.')
S('ancientbeasts:skewer', 'Trap block: when something stands in front of it, a spike shoots out and hurts it, ignoring armor.')
S('ancientbeasts:spiky', 'The spike pushed out by a Pokey or Skewer. Hurts anything it touches.')

// --- Combustive Fishing ---
S('combustfish:golden_rod', 'A fishing rod that works in ' + W + 'lava' + G + '. Catches Combustive Cod, Searing Swordfish and Bone Fish.')
S('combustfish:combustive_cod', Y + 'Throw' + G + ' it and it explodes. Drop it in water or a water cauldron to cool it into an edible Cooled Cod.')
S('combustfish:cooled_cod', 'A filling fish (7 hunger), made by cooling a Combustive Cod in water.')
S('combustfish:searing_swordfish', 'A sword that sets what it hits on fire. Cool it in water to get a Tempered Swordfish.')
S('combustfish:tempered_swordfish', 'A sword you can also eat: the more durability it has left, the more it fills you (up to 12 hunger). Never breaks.')
S('combustfish:bone_fish', Y + 'Right-click' + G + ' a wild wolf or cat: 1 in 3 chance to tame it.')
S('combustfish:magma_string', 'Crafting material for the Golden Rod.')

// --- Deep Below (Lunkertooth) ---
S('mimicfish:esca', 'The glowing lure of a Lunkertooth anglerfish. Edible.')
S('mimicfish:anglerfish_egg', 'Found in a Lunkertooth\'s treasure chest.')

// --- More Bows ---
S(['morebows:stone_bow', 'morebows:iron_bow', 'morebows:gold_bow', 'morebows:diamond_bow'], 'A sturdier bow: more durability and power than a wooden one.')
S('morebows:ender_bow', 'Fires one arrow, then five more appear around you 3 seconds later and fly at the same target.')
S('morebows:flame_bow', 'Every arrow it fires is set on fire.')
S('morebows:frost_bow', 'Arrows slow and freeze what they hit.')
S('morebows:multi_bow', 'Fires two or three arrows at once.')

// --- Deadly World ---
S('deadlyworld:deadly_spawner', 'A dungeon spawner from Deadly World. Needs an iron pickaxe; drops loot, never itself.')
S('deadlyworld:tower_dispenser', 'The arrow turret of a Deadly World tower. Fires at players who come close.')
S(['deadlyworld:infested_sandstone', 'deadlyworld:infested_clay', 'deadlyworld:infested_red_sandstone'], 'Looks normal, but releases silverfish when broken.')

// --- Secret Rooms ---
S('secretroomsmod:ghost_block', 'Looks like the block you place it against, but you can walk through it.')
S('secretroomsmod:secret_lever', 'A lever disguised as the block it is attached to: click the block to flip it.')
S('secretroomsmod:secret_redstone', 'Redstone wire disguised as the block it was placed against.')
S(['secretroomsmod:secret_light_pressure_plate', 'secretroomsmod:secret_heavy_pressure_plate', 'secretroomsmod:secret_player_pressure_plate'],
  'A disguised full-block pressure plate: gives a redstone signal while something (or a player, for the Player Plate) stands on it.')
S('secretroomsmod:solid_air', 'An invisible solid block.')
S(['secretroomsmod:secret_chest', 'secretroomsmod:secret_trapped_chest'], 'A chest disguised as the block it was placed against. The trapped one gives a redstone signal while open.')
S('secretroomsmod:secret_dispenser', 'A dispenser disguised as the block it was placed against.')
S('secretroomsmod:secret_gate', 'With a redstone signal it fills up to 10 blocks in front of it with disguised blocks; without one they vanish. A hidden door.')
S('secretroomsmod:secret_light_detector', 'A daylight sensor disguised as the block it was placed against. ' + Y + 'Right-click' + G + ' to invert it.')
S('secretroomsmod:camouflage_paste', 'The ingredient of every secret block. Drop five in fire to get Energized Camouflage Paste.')
S('secretroomsmod:energized_camouflage_paste', Y + 'Sneak + right-click' + G + ' a block to remember it, then use it on a secret block to make it look like that block.')
S('secretroomsmod:switch_probe', Y + 'Right-click' + G + ' a normal block to remember it, then a secret block to make it look like that block.')
S('secretroomsmod:programmable_switch_probe', 'Like the Switch Probe, but you type the block name: ' + Y + 'right-click' + G + ' the air to choose.')
S(['secretroomsmod:iron_exposing_helmet', 'secretroomsmod:diamond_exposing_helmet'], 'While worn, secret blocks show what they really are.')

// --- Wolf Armor, Statues, misc ---
S(['wolfarmor:leather_wolf_armor', 'wolfarmor:chainmail_wolf_armor', 'wolfarmor:iron_wolf_armor', 'wolfarmor:gold_wolf_armor', 'wolfarmor:diamond_wolf_armor'],
  Y + 'Sneak + right-click' + G + ' your tamed wolf to open its inventory and put the armor on.|A wooden chest used on a wolf gives it a backpack.')
S('statues:hammer', 'Stack two identical blocks and ' + Y + 'right-click' + G + ' them to carve a player statue.')
S('statues:palette', Y + 'Right-click' + G + ' a statue to paint it with the player\'s skin colours.')
S('minicoal:minicoal', 'One eighth of a coal: smelts one item. Handy for small furnace jobs.')
S('minicoal:minicharcoal', 'One eighth of a charcoal: smelts one item.')
S('morechickens:solidxp', Y + 'Right-click' + G + ' to release 25 experience points.')
S(['reccomplex:generic_solid', 'reccomplex:generic_space', 'reccomplex:inventory_generation_tag', 'reccomplex:inventory_generation_single_tag', 'reccomplex:book_generation_tag', 'reccomplex:artifact_generation_tag'],
  'Structure-building tool for map makers (Recurrent Complex). Not used in normal play.')

// --- ChocoCraft Plus ---
S('chococraftplus:chocopedia', Y + 'Right-click' + G + ' to read all about chocobos: taming, riding, colours and breeding.')
S('chococraftplus:chocobo_saddle', Y + 'Right-click' + G + ' your tamed chocobo to saddle it, then ride it. Fast travel over land.')
S('chococraftplus:chocobo_saddle_bags', 'Saddle with 36 slots of storage. ' + Y + 'Right-click' + G + ' your tamed chocobo to put it on.')
S('chococraftplus:chocobo_pack_bags', 'Pack bags with 54 slots of storage for a tamed chocobo (no rider).')
S(['chococraftplus:nut_packet_yellow', 'chococraftplus:nut_packet_pink', 'chococraftplus:nut_packet_red'], 'Craft it into chocobo nuts (see JEI).')
var CHOCO_VEG = ['veg_gysahl', 'veg_krakka', 'veg_tantal', 'veg_pasana', 'veg_cree', 'veg_reagan', 'veg_mimett', 'veg_sylkis']
CHOCO_VEG.forEach(v => S('chococraftplus:' + v, 'Chocobo food. ' + Y + 'Right-click' + G + ' a wild chocobo to tame it, or a tame one to train its stats. The Chocopedia lists what each veggie does.'))
S('chococraftplus:veg_gysahl', 'The chocobo\'s favourite. ' + Y + 'Right-click' + G + ' a wild chocobo to tame it, or a tame one to heal it.|Grows in wild Gysahl gardens; plant the seeds on farmland.')
var CHOCO_NUTS = ['nut_pipio', 'nut_luchile', 'nut_saraha', 'nut_lasan', 'nut_param', 'nut_porov', 'nut_carob', 'nut_zeio']
CHOCO_NUTS.forEach(v => S('chococraftplus:' + v, 'Breeding nut. ' + Y + 'Right-click' + G + ' two tamed adult chocobos to breed them; better nuts give better chicks. See the Chocopedia.'))
S('chococraftplus:strawblock', 'Bedding for a chocobo pen: chocobos resting on straw near a filled cauldron heal. Stablehand villagers work here.')
S('chococraftplus:gysahlgardenblock', 'A wild Gysahl garden. Break it for Gysahl carrots, other chocobo veggies, nuts and seeds.')
var CHOCO_COL = ['yellow', 'green', 'blue', 'white', 'black', 'gold', 'pink', 'red', 'royal']
CHOCO_COL.forEach(c => S('chococraftplus:chocobo_feather_' + c, 'Dropped by chocobos. Crafts dye and saddles; on a bookshelf it makes a Chocopedia.'))
S(['chococraftplus:raw_chocobo_leg', 'chococraftplus:cooked_chocobo_leg'], 'Meat from a chocobo. Cook it before eating.')

// --- Hatchery ---
S('hatchery:liquid_fertilizer_bucket', 'Liquid fertilizer for the Fertilizer Sprayer. Made in the Fertilizer Mixer from water and manure.')
S('hatchery:hatcheryegg', 'A bred egg. Put it in an Egg Nest to hatch the chicken it carries.')
S('hatchery:chickenmanure', 'Drops from Nesting Pens. Use it like bone meal, or craft Fertilized Dirt, Manure Blocks and Liquid Fertilizer.')
S('hatchery:feather_meal', 'Shredder by-product. Mix it with seeds to make Chicken Feed.')
S('hatchery:plastic', 'Melted feather fibers. Crafting material for upgrades and the Lucky Egg Machine.')
S('hatchery:feather_fiber', 'Shredded feathers. Smelt into Plastic.')
S('hatchery:chicken_feed', 'Put it in a Chicken Feeder as food for nearby chickens.')
S('hatchery:circuit_board', 'Crafting material for machine upgrades.')
S('hatchery:fiber_pad', 'Crafting material, e.g. for wool.')
S('hatchery:feather_pulp', 'Cook it into paper.')
S('hatchery:prize_egg', Y + 'Right-click' + G + ' to open it for a random prize. Made by the Lucky Egg Machine.')
S('hatchery:chicken_machine', 'Give it power, eggs and plastic and it makes Lucky Eggs full of prizes.')
S(['hatchery:rf_upgrade_1', 'hatchery:rf_upgrade_2', 'hatchery:rf_upgrade_3'], 'Raises the Methane Digester Generator\'s output (40 / 60 / 80 RF/t by tier).')
S(['hatchery:speed_upgrade_1', 'hatchery:speed_upgrade_2', 'hatchery:speed_upgrade_3'], 'Makes a Hatchery machine work faster.')
S(['hatchery:tank_upgrade_1', 'hatchery:tank_upgrade_2', 'hatchery:tank_upgrade_3'], 'Gives a Hatchery machine a bigger fluid tank.')
S(['hatchery:rf_capacity_1', 'hatchery:rf_capacity_2', 'hatchery:rf_capacity_3'], 'Gives a Hatchery machine a bigger energy buffer.')
S('hatchery:nest', 'Put an egg in and it hatches after a while. A redstone lamp up to 3 blocks above, or sitting on it, speeds it up.')
S('hatchery:feeder', 'Holds up to 200 seeds or Chicken Feed. Chickens within 4 blocks grow faster and lay faster. Accepts pipes.')
S('hatchery:fertilized_farmland', 'Gives crops on it random bone meal boosts. Hoe Fertilized Dirt to make it.')
S('hatchery:manure_block', 'Nine chicken manure in a block.')
S('hatchery:nursery_block', 'Sorts chickens: adults to one side, chicks to the other (4x4 area).')
S('hatchery:fertilizer_mixer', 'Makes Liquid Fertilizer from water and manure. Works faster with RF power.')
S('hatchery:digester_generator', 'Burns liquid manure for power (20 RF/t, more with RF upgrades).')
S('hatchery:shredder', 'Shreds feathers into Feather Meal and Feather Fibers.')
S('hatchery:sprayer', 'Sprays Liquid Fertilizer on crops around it so they grow faster.')

// --- Dark Utilities (the rest) ---
S(['darkutils:unstable_pearl', 'darkutils:dwindle_cream', 'darkutils:dark_sugar'], 'Crafting ingredient (JEI shows its uses).')
S('darkutils:shulker_pearl', 'Get it by ' + Y + 'right-clicking' + G + ' a Shulker. Mostly decorative: makes Pearl Blocks.')
S('darkutils:item_grate', 'Items fall through it; mobs and players do not.')
S('darkutils:update_detector', 'Gives a short redstone pulse whenever a block next to it changes.')
S('darkutils:anti_slime', 'Slimes cannot spawn near it.')
S('darkutils:fake_tnt', 'A much weaker TNT that cannot break blocks. Perfect for harmless pranks.')
S(['darkutils:trap_poison', 'darkutils:trap_weakness', 'darkutils:trap_harming', 'darkutils:trap_slowness', 'darkutils:trap_fire', 'darkutils:trap_wither'],
  'A floor trap: mobs standing on it get its effect (poison, weakness, damage, slowness, fire or wither). Great in mob farms.')
S('darkutils:vector_plate', 'Slowly pushes mobs the way its arrow points. Sneaking stops it.')
S('darkutils:vector_plate_fast', 'Pushes mobs quickly the way its arrow points. Sneaking stops it.')
S('darkutils:vector_plate_extreme', 'Pushes mobs very fast the way its arrow points. Sneaking stops it.')
S(['darkutils:sneaky_lever', 'darkutils:sneaky_ghost', 'darkutils:sneaky_obsidian'],
  Y + 'Right-click' + G + ' it with another block to copy that block\'s look (the block is not used up). The False Block can be walked through.')
S('darkutils:sneaky_bedrock', 'Unbreakable like bedrock. In creative, ' + Y + 'right-click' + G + ' it with a block to copy that block\'s look.')
S(['darkutils:chest_glacial', 'darkutils:chest_jungle', 'darkutils:chest_magic', 'darkutils:chest_nether', 'darkutils:chest_royal', 'darkutils:chest_sandstone', 'darkutils:chest_prismarine'],
  'A normal chest with a fancy look.')
S(['darkutils:mysterious_potion', 'darkutils:mysterious_potion_zombie'], 'A suspicious potion from dungeon chests. Drink it, or give it to something, and see what happens...')
S('ancientbeasts:vessel', 'Place it on a block to set down your Lil Vessel companion. Its damage bar shows its injuries.')
S('ancientbeasts:rifted_pearl', Y + 'Throw' + G + ' it like an ender pearl; it tears open a rift where it lands.')
S('ancientbeasts:miner_helmet', 'Iron-grade helmet with a lamp: lights up the area around you while worn.')
S('ancientbeasts:charred_cloak', 'A leather-grade hood made of charred fur.')
S('ancientbeasts:spear', 'A long weapon: 6 damage, slower than a sword.')

// --- sf3extras: our own collection of SkyFactory 3 extras ---
var SX = 'sf3extras:'
function sx(ids, text) { S((Array.isArray(ids) ? ids : [ids]).map(i => SX + i), text) }
function each(list, f) { list.forEach(f) }

// Tiny Progressions, SimplyCorn, More Shears, Baconators, XP rings
sx('long_fall_boots', 'Boots that cancel all fall damage.')
sx(['lesser_xp_ring', 'xp_ring', 'greater_xp_ring'], 'While carried, soaks up nearby experience orbs and stores them (bigger rings reach further).|' + Y + 'Right-click' + G + ' to release the stored experience to yourself.')
sx('end_cake', 'Each bite teleports you to the End. Feed it an Eye of Ender to restore a bite.')
sx('hydrogel', 'Keeps farmland in a 9x9 area around it moist, like water, without any water.')
sx('kernels', 'Plant on farmland to grow corn. Also pops into Popcorn in a furnace.')
sx('pop_firework', 'A firework rocket. Use it for an Elytra boost or a celebration.')
sx(['shaver', 'flint_shears', 'golden_shears', 'diamond_shears', 'emerald_shears', 'wooden_shears'], 'Shears. Like vanilla shears they cut wool, leaves and webs; better materials last longer.|Shearing pigs gives Pig Skin and polar bears give Polar Bear Hide.')
sx(['pig_skin', 'polar_bear_hide'], 'Sheared from pigs / polar bears. Crafts light armor.')
sx('clipboard', 'A 9-line to-do list with tick boxes. ' + Y + 'Right-click' + G + ' to write on it.')
sx('crumb_star', 'Dropped next to the Nether Star by a "celebrity" Wither. A trophy.')
sx('climbing_rope', 'Hangs down from the block above; climb it like a ladder. Use rope on rope to make it longer.')
each(['baconator', 'cluckinator', 'jerkynator', 'darkonator'], k => sx(k, 'Holds up to 64 of one food family. ' + Y + 'Right-click' + G + ' to load it from your inventory.|While carried it feeds you automatically when you are hungry enough.'))
sx('funnel', 'Place under a fluid source: it soaks up the source (1000 mB) and drains it into the tank below.')
sx('hopper_duct', 'Moves items in the direction it faces, even upwards, without pulling from containers. A redstone signal stops it.')
sx('grated_hopper', 'Collects items dropped on top of it (never from containers) and passes them on. A redstone signal stops it.')
sx('auto_packager', 'Packs items into their 2x2 or 3x3 crafting result (e.g. ingots into blocks) using 1000 FE per craft.|' + Y + 'Right-click' + G + ' to switch mode.')
each(['oak', 'spruce', 'birch', 'jungle', 'acacia', 'dark_oak'], w => sx(w + '_simple_barrel', 'Stores 4096 of one item. ' + Y + 'Right-click' + G + ' to put items in (twice quickly: all of them), hit it to take a stack.|Sneak-right-click upgrades onto it for more space and features.'))
each(['mark1', 'mark2', 'mark3', 'mark4', 'mark5'], m => sx('upgrade_' + m + '_compressor', 'Barrel upgrade: doubles its capacity. Install them in order (Mark 1 first).'))
sx('beneath_teleporter', 'Use it to travel to The Beneath, a pitch-dark cave world, and back. Bring light: something lives in the dark.')

// Simple Generators
var GEN = { furnace_generator: 'Burns furnace fuel (coal, wood...) for power.', culinary_generator: 'Burns food for power: the more filling, the more power. Sugar works too.',
  ender_generator: 'Burns Ender Pearls, Eyes of Ender and Dragon\'s Breath for power.', lava_generator: 'Makes power from lava. ' + Y + 'Right-click' + G + ' it with a lava bucket or pipe lava in.',
  netherstar_generator: 'Burns Nether Stars for a huge amount of power.' }
Object.keys(GEN).forEach(g => ['', '_2', '_3'].forEach((t, i) => sx(g + t, GEN[g] + '|' + Y + 'Right-click' + G + ' with fuel to load it, empty-handed to see its status. MK.' + ['I', 'II', 'III'][i] + ': ' + ['1x', '8x', '64x'][i] + ' output.')))

// Tiny Progressions
sx(['charcoal_block'], 'Nine charcoal: a compact furnace fuel.')
sx(['compressed_bone_block', 'compressed_flesh_block'], 'Storage block for bones / rotten flesh.')
sx(['compressed_flint_block', 'compressed_nether_star_block'], 'Landing on it hurts three times as much. The Nether Star version also works as a beacon base.')
sx(['quartz_knife', 'flint_knife'], 'A crafting tool: used in recipes, it is not used up (loses one durability each time).')
sx(['emerald_apple', 'diamond_apple', 'gold_apple'], 'A magic apple: eating it gives the effects listed above.')
sx('watering_can', 'Hold ' + Y + 'right-click' + G + ' on plants: speeds up their growth (25% chance per plant each tick) and moistens farmland.')
sx('party_pickaxe', 'A very fast pickaxe. Mining ores or storage blocks sets off a firework.')
sx(['growth_crystal', 'growth_crystal_2', 'growth_crystal_3'], 'Speeds up plants within 4 blocks of it. Higher tiers work faster.')
sx(['wooden_scythe', 'golden_scythe', 'iron_scythe', 'diamond_scythe'], 'A sword that also harvests: breaking a crop, plant or leaves breaks the ripe ones around it too.')

// Reliquia / Nice displays
sx(['oak_potion_holder', 'spruce_potion_holder', 'birch_potion_holder', 'jungle_potion_holder', 'acacia_potion_holder', 'dark_oak_potion_holder'], 'Displays potions. ' + Y + 'Right-click' + G + ' with a potion to place it, empty-handed to take one back.')
sx(['oak_toolrack', 'spruce_toolrack', 'birch_toolrack', 'jungle_toolrack', 'acacia_toolrack', 'dark_oak_toolrack'], 'Displays tools. ' + Y + 'Right-click' + G + ' with a tool to hang it, empty-handed to take one back.')
sx(['oak_fancy_crafting_table', 'spruce_fancy_crafting_table', 'birch_fancy_crafting_table', 'jungle_fancy_crafting_table', 'acacia_fancy_crafting_table', 'dark_oak_fancy_crafting_table'], 'A decorative crafting table: opens the normal 3x3 crafting grid.')
sx(['particle_block', 'particle_cylinder'], 'A decorative light (level 10) that gives off particles.')

// Environmental Tech
var ET = 'Environmental Tech multiblock part. ' + Y + 'Right-click' + G + ' its controller to see what the structure still needs (JEI shows the layouts).'
sx(['et_basalt_structure_1', 'et_basalt_structure_2', 'et_basalt_structure_3', 'et_basalt_structure_4', 'et_alabaster_structure_1', 'et_alabaster_structure_2', 'et_alabaster_structure_3', 'et_alabaster_structure_4'], 'Frame block for Environmental Tech multiblocks; the tier must match the controller tier.')
sx(['et_basalt_machine_base', 'et_alabaster_machine_base'], 'The base layer of Environmental Tech multiblocks.')
sx('et_solar_1', 'Solar cell for the Solar Array: more cells, more power while the sun shines.')
sx('et_lunar_1', 'Goes in a Solar Array like a solar cell, but makes power at night instead of by day.')
sx(['et_lightning_rod', 'et_lightning_rod_insulated'], 'Part of the Lightning Rod multiblock, which turns lightning strikes into power.')
sx('et_laser_core', 'The core of a Void Miner multiblock.')
sx('et_lens', 'Clear lens for a Void Miner: mines a mix of everything.')
each(['white', 'orange', 'magenta', 'light_blue', 'yellow', 'lime', 'pink', 'gray', 'light_gray', 'cyan', 'purple', 'blue', 'brown', 'green', 'red', 'black'],
  c => sx('et_lens_' + c, 'Coloured lens for a Void Miner: focuses it on the ores and resources of this colour.'))
sx('et_modifier_speed_1', 'Multiblock modifier: the machine works faster but uses more power. (On the Nano Bot Beacon: Speed.)')
sx('et_modifier_piezo_1', 'Solar Array modifier: makes power from rain while the sun is hidden.')
sx('et_modifier_efficiency_1', 'Multiblock modifier: the machine uses less power.')
sx('et_modifier_fortune_1', 'Void Miner modifier: chance of an extra item per mined resource.')
sx('et_modifier_silk_touch', 'Void Miner modifier: mines ore blocks instead of their drops.')
sx('et_modifier_accuracy_1', 'Void Miner modifier: makes the lens colour focus stronger.')
sx('et_modifier_flight', 'Nano Bot Beacon modifier: players in range can fly.')
each(['night_vision', 'haste', 'strength', 'water_breathing', 'regen', 'saturation', 'resistance', 'jump_boost', 'fire_resistance'],
  m => sx('et_modifier_' + m, 'Nano Bot Beacon modifier: gives players in range this potion effect.'))
sx('et_modifier_core', 'Base item for crafting multiblock modifiers.')
var ETC = { solar: 'Solar Array: makes power from sunlight with Solar Cells.', lightning: 'Lightning Rod: catches lightning for big bursts of power.',
  void_res_miner: 'Void Resource Miner: makes non-ore resources out of nothing, using power.', nano_bot_beacon: 'Nano Bot Beacon: gives players in range potion effects (and flight) from its modifiers.' }
Object.keys(ETC).forEach(k => [1, 2, 3, 4].forEach(t => sx('et_controller_' + k + '_' + t, ETC[k] + '|' + Y + 'Right-click' + G + ' it to see what the structure still needs. Tier ' + t + ' needs tier ' + t + ' structure blocks.')))
sx(['et_photovoltaic_cell', 'et_lunarvoltaic_cell', 'et_lens_item', 'et_lonsdaleite_shard', 'et_clay_plate', 'et_ceramic_plate', 'et_clay_kneaded', 'et_ender_stabilized'], 'Environmental Tech crafting material.')

// Not Enough Wands (all cost experience per use)
sx(['wand_core', 'advanced_wand_core'], 'Crafting core for the wands.')
sx('building_wand', Y + 'Right-click' + G + ' a block face to extend it by 3x3 or 5x5 with the same block from your inventory.|Sneak-right-click the air to switch size.')
sx('swapping_wand', Y + 'Sneak-right-click' + G + ' a block to pick it, then ' + Y + 'right-click' + G + ' blocks to swap them for it (one or 3x3).')
sx('teleportation_wand', Y + 'Right-click' + G + ' to teleport up to 30 blocks where you look.')
sx('capturing_wand', Y + 'Right-click' + G + ' a mob to capture it, then a block to release it there. Not bosses or players.')
sx('illumination_wand', Y + 'Right-click' + G + ' a block face to put an invisible light there. Sneak-right-click removes lights within 5 blocks.')
sx('moving_wand', Y + 'Right-click' + G + ' a block to pick it up (with its contents), then again to place it somewhere else.')
sx('displacement_wand', Y + 'Right-click' + G + ' to push the 3x3 you click away from you; sneak to pull it towards you.')
sx('acceleration_wand', 'Hold ' + Y + 'right-click' + G + ' on a block to make it tick faster (crops, furnaces, machines). Sneak-right-click the air to change speed.')
sx('potion_wand', 'Hold a potion in your off hand and ' + Y + 'sneak-right-click' + G + ' to store it, then ' + Y + 'right-click' + G + ' mobs to apply it.')
sx('freezing_wand', Y + 'Right-click' + G + ' a mob to freeze it in place (no AI); again to unfreeze it.')

// Ceramics: clay barrels and armor
sx('clay_barrel', 'Holds 4000 mB of any fluid. Each Barrel Extension stacked on top adds 4000 mB more.')
each(['white', 'orange', 'magenta', 'light_blue', 'yellow', 'lime', 'pink', 'gray', 'light_gray', 'cyan', 'purple', 'blue', 'brown', 'green', 'red', 'black'], c => {
  sx(c + '_clay_barrel', 'Holds 4000 mB of any fluid. Each Barrel Extension stacked on top adds 4000 mB more.')
  sx(c + '_clay_barrel_extension', 'Stack on a clay barrel to add 4000 mB of fluid space.')
})
sx('clay_barrel_extension', 'Stack on a clay barrel to add 4000 mB of fluid space.')
sx(['unfired_clay_barrel', 'unfired_clay_barrel_extension', 'unfired_bucket', 'unfired_shears', 'unfired_clay_helmet', 'unfired_clay_chestplate', 'unfired_clay_leggings', 'unfired_clay_boots'], 'Unfired clay: smelt it in a furnace to finish it.')
sx('clay_shears', 'Fragile shears made of fired clay.')
sx(['clay_helmet', 'clay_chestplate', 'clay_leggings', 'clay_boots'], 'Cheap early armor made of fired clay.')

// Literal Ascension
sx(['carved_granite', 'carved_diorite', 'carved_andesite'], 'A hollowed stone chute: drop down it, or climb its carved notches. Made with a Carving Tool.')
sx(['natura_bloodwood_stepladder', 'natura_darkwood_stepladder', 'natura_fusewood_stepladder', 'natura_ghostwood_stepladder', 'botania_livingwood_stepladder', 'botania_dreamwood_stepladder', 'roots_wildwood_stepladder', 'iron_stepladder', 'gold_stepladder', 'diamond_stepladder', 'emerald_stepladder'],
  'A free-standing ladder: place it facing the way you look and climb it. Works against a wall top too.')
sx('fireworks_stepladder', 'Climb on and pick it up: it launches you into the air, tips over and explodes after 4 seconds. Fun!')

// Redstone Paste
sx('redstone_paste', 'Redstone that sticks to floors, walls and ceilings.')
sx(['sticky_repeater', 'sticky_comparator'], 'A repeater / comparator that can be placed on walls and ceilings.')

// Drawers & Bits, ExtraBitManipulation
sx('bit_drawer', 'A compacting drawer for one block and its Chisels & Bits bits: stores both and converts between them.|Left-click with a bit bag to fill the bag.')
sx('bit_controller', 'A drawer controller that also accepts bit bags and chiseled blocks, and builds chiseled blocks from stored bits.')
sx(['bit_wrench_head', 'sculpting_loop_head', 'sculpting_square_head', 'sculpting_spade_curved_head', 'sculpting_spade_squared_head', 'modeling_tool_head'], 'Crafting part for the matching bit tool.')
sx('body_part_template', 'Template block for chiseled armor: chisel it into the shape you want, then craft it into armor.')

// Advanced Generators (multiblocks)
var AG = 'Advanced Generators multiblock part: place it touching the controller or other parts.'
sx(['turbine_controller', 'steam_turbine_controller', 'exchanger_controller', 'syngas_controller'], 'Heart of an Advanced Generators machine (gas turbine, steam turbine, heat exchanger or syngas producer).|Build the other modules against it; ' + Y + 'right-click' + G + ' to see the machine state.')
sx(['fluid_input', 'fluid_output_select', 'item_input', 'item_output', 'gas_input', 'pressure_input', 'pressure_output_select'], AG + ' Lets fluids, gases or items in or out.')
sx(['rf_output', 'forge_output', 'tesla_output'], AG + ' Sends out the machine\'s power.')
sx(['low_voltage_emitter', 'medium_voltage_emitter', 'high_voltage_emitter', 'extreme_voltage_emitter', 'insane_voltage_emitter'], AG + ' Sends out power at this voltage tier.')
sx(['fuel_tank', 'heat_exchanger', 'mixing_chamber', 'heating_chamber', 'efficiency_upgrade_tier1', 'efficiency_upgrade_tier2', 'power_capacitor_redstone', 'power_capacitor_advanced', 'power_capacitor_dense'], AG + ' Adds capacity or efficiency to the machine.')
sx('generator_sensor', AG + ' Gives a redstone signal from the machine\'s state.')
sx('generator_control', AG + ' Lets redstone switch the machine on and off.')
sx('generators_data_port', AG + ' Lets a ComputerCraft computer read and control the machine.')
each(['iron', 'gold', 'steel', 'vibrant', 'manyullyn', 'bronze', 'enderium', 'advanced_alloy'], m => {
  sx('turbine_' + m, AG + ' A turbine; better materials make more power.')
  sx(['turbine_blade_' + m, 'turbine_rotor_' + m], 'Crafting part for the matching turbine.')
  sx('turbine_kit_' + m, Y + 'Right-click' + G + ' a lower-tier turbine in a machine to upgrade it in place (you get the old rotor back).')
})
sx(['capacitor_kit_advanced', 'capacitor_kit_dense'], Y + 'Right-click' + G + ' a lower-tier power capacitor in a machine to upgrade it in place.')
sx(['iron_frame', 'iron_wiring', 'iron_tubing', 'machine_controller', 'power_io', 'pressure_valve', 'advanced_pressure_valve', 'upgrade_kit'], 'Advanced Generators crafting part.')

// Random Things (1.10 items)
sx('rt_item_corrector', 'Items moving over it are pulled to its middle, so they line up.')
sx('rt_item_rejuvenator', 'Items lying on it never despawn.')
sx('rt_item_sealer', 'Items lying on it cannot be picked up for a while.')
sx('rt_item_redirector', 'Items flowing into it are sent out in a new direction.')
sx('rt_item_filtered_redirector', 'Items flowing into it turn left or right if they match its two filters, else go straight. ' + Y + 'Right-click' + G + ' / sneak-right-click to set the filters.')
sx('rt_super_lubricent_ice', 'Almost frictionless: items and mobs slide a long way on it.')
sx('rt_super_lubricent_platform', 'A thin platform: you can walk on it, items fall through.')
sx('rt_filtered_super_lubricent_platform', 'A thin platform: only items matching its filter fall through. ' + Y + 'Right-click' + G + ' to set the filter.')
sx('rt_voxel_projector', 'Projects a 3D model from a MagicaVoxel file as a hologram.')

// SCM (circuit boards)
sx('scm_circuit', 'A 7x7 redstone circuit board. Install components with ' + Y + 'right-click' + G + ', adjust them with the Screwdriver, read them with the Multimeter.')
sx(['scm_redstone_pile', 'scm_glowing_redstone_pile', 'scm_bundled_wire'], 'Circuit component: wire. Right-click a circuit board cell to install.')
sx(['scm_redstone_stick', 'scm_bundled_stick'], 'Circuit component: a post that carries the signal up a layer.')
sx(['scm_tiny_plate', 'scm_tiny_plate_nonconductive'], 'Circuit component: a plate to build on (the non-conductive one blocks signals).')
sx('scm_quartz_resonator', 'Circuit component: a delay.')
sx('scm_ender_pulsar', 'Circuit component: a timer that pulses on its own.')
sx('scm_energized_glowstone', 'Circuit component: gives a random signal.')
sx(['scm_tiny_lamp', 'scm_segmented_lamp'], 'Circuit component: a lamp that lights with the signal.')
sx(['scm_adder', 'scm_subtractor', 'scm_multiplier', 'scm_divider', 'scm_constant'], 'Circuit component: maths on signal strengths (0-255).')
sx('scm_inventory_scanner', 'Circuit component: outputs how full the inventory next to the board is.')
sx(['scm_glowstone_pile', 'scm_paint_brush', 'scm_palette'], 'Crafting material for circuit parts.')
sx('scm_monocle', 'Worn on your head. Purely for style.')
sx('scm_magnificent_monocle', 'Worn on your head. Hold the zoom key (default Z) to zoom in.')
sx('scm_punchcard', 'Crafting material for circuit blueprints.')
sx('scm_update_detector', 'Pulses a full redstone signal out of its back whenever the block in front changes.')
sx('scm_red_alloy_wire', 'Wire that carries a redstone signal along its whole length without getting weaker.')

// Charset
sx('charset_graphite', 'Crafting material (Charset).')
sx('charset_backpack', 'A 27-slot backpack. ' + Y + 'Right-click' + G + ' to open it; it can also be worn in the chest slot.')
sx('charset_audio_tape', 'Records and plays audio in a Tape Drive. ' + Y + 'Sneak-right-click' + G + ' to record nearby note blocks, ' + Y + 'right-click' + G + ' to play.')
sx('charset_audio_cable', 'Links Charset Tape Drives so audio travels between them (up to 128 blocks of cable).')
sx('charset_audio_drive', 'Holds one audio tape: record and play it.')
sx('charset_gate_buffer', 'Logic gate: on when either side input is on.')
sx('charset_gate_nand', 'Logic gate: off only when both side inputs are on.')
sx('charset_gate_nor', 'Logic gate: on only when both side inputs are off.')
sx('charset_gate_xor', 'Logic gate: on when exactly one side input is on.')
sx('charset_gate_multiplexer', 'Logic gate: the rear input chooses which side input is passed to the front.')
sx('charset_gate_pulse_former', 'Logic gate: turns a long input into one short pulse.')
sx('charset_gate_rs_latch', 'Logic gate: one side turns it on, the other turns it off; it remembers.')
sx('charset_poster', 'A wall poster. Decoration.')
sx('charset_wrench', Y + 'Right-click' + G + ' a block to rotate it.')
sx('charset_barrel', 'Stores 4096 of one item. ' + Y + 'Right-click' + G + ' to put items in (twice quickly: all of them), hit it to take a stack.|Lock it with a Charset Lock.')
sx('charset_crate', '18 slots. Crates of the same wood that touch share one big inventory for hoppers and pipes.')
sx('charset_barrel_cart', 'A minecart carrying a barrel. Right-click to put items in, hit it to take them out.')
sx('charset_shelf', 'A six-slot shelf: put items on it and take them off by hand or with hoppers.')
sx('charset_key', 'Pair it with a locked Charset barrel; it then opens that barrel.')
sx('charset_master_key', 'Opens every locked Charset barrel.')
sx('charset_lock', 'Use it on a paired Charset barrel to lock or unlock it. Locked barrels cannot be broken.')
sx(['charset_audio_magnetic_tape', 'charset_audio_reel'], 'Material for audio tapes: combine reels to make longer tapes.')
sx('charset_pipe', 'An item pipe: moves items from containers into the next container.')
sx('charset_shifter', 'Pushes or pulls items between the container behind it and the pipe in front. Can be filtered.')

// Engineers Workshop
sx('workshop_table', 'A table with four work units (crafting, smelting, crushing, alloying or storage). Upgrades change what each unit can do.')
var EW = { blank: 'Base for the other upgrades.', auto_crafter: 'A crafting unit crafts by itself.', storage: 'Gives a crafting unit extra storage.',
  charged: 'Speeds up a unit using power.', speed: 'Speeds up a unit.', queue: 'Adds a queue to a smelting/crushing/alloy unit.', efficiency: 'The table uses less fuel.',
  rf: 'The table accepts RF/FE power.', solar: 'The table makes a little power from sunlight.', auto_transfer: 'The table moves items between units by itself.',
  filter: 'Adds item filters to the table.', transfer: 'Lets hoppers and pipes reach more slots.', max_power: 'Increases the table\'s power storage.',
  fuel_delay: 'Fuel burns longer.', axe: 'Lets a crushing unit chop logs too.', compactor: 'A crafting unit packs items into blocks.' }
Object.keys(EW).forEach(k => sx('ew_upgrade_' + k, 'Workshop Table upgrade: ' + EW[k]))

// --- Comforts ---
var COLORS16 = ['white', 'orange', 'magenta', 'light_blue', 'yellow', 'lime', 'pink', 'gray', 'light_gray', 'cyan', 'purple', 'blue', 'brown', 'green', 'red', 'black']
S('comforts:rope', 'Attach it to a wall. Two ropes 3 blocks apart can hold a hammock between them.')
COLORS16.forEach(c => {
  S('comforts:sleeping_bag_' + c, 'A bed you can carry: sleep anywhere through the night. It never sets your respawn point.')
  S('comforts:hammock_' + c, 'Hang it between two ropes 3 blocks apart to take a nap during the day (skips to night). Never sets your respawn point.')
})

// --- Fairy Lights ---
var FAIRY = ['fairy_light', 'paper_lantern', 'orb_lantern', 'flower_light', 'candle_lantern_light', 'oil_lantern_light', 'jack_o_lantern', 'skull_light', 'ghost_light', 'spider_light', 'witch_light', 'snowflake_light', 'icicle_lights', 'meteor_light']
FAIRY.forEach(f => S('fairylights:' + f, 'A light for Hanging Lights: craft it into a Hanging Lights string to hang it up.'))
S('fairylights:hanging_lights', Y + 'Right-click' + G + ' a fence or wall, then another one, to hang a string of lights between them.')
S(['fairylights:tinsel', 'fairylights:pennant_bunting', 'fairylights:letter_bunting'], Y + 'Right-click' + G + ' a fence or wall, then another one, to hang it between them.')
S('fairylights:pennant', 'A flag for Pennant Bunting: craft it into a bunting string.')
S('fairylights:ladder', 'A free-standing stepladder for hanging decorations up high.')

// --- Hexxit World leftovers ---
S('hexxitworld:beanstalk', 'A climbable plant that grows upward and ends in a Sunflower Bush. Bone meal speeds it up.')
S('hexxitworld:lawn', 'Grass you can cut and grow back; bone meal works on it.')
S('hexxitworld:sunflower_bush', 'A tall bush; bone meal it for a Sunflower Bush Seed.')
S('hexxitworld:heart_drop', 'Walk over it to heal 1 heart.')
S(['hexxitworld:emerald_shard_drop', 'hexxitworld:emerald_piece_drop'], 'Walk over it to pick up emerald pieces.')
S('hexxitworld:heart_piece', 'Dropped by big monsters. Combine pieces into a Heart Container, or brew it into an Elixir of Life.')
S('hexxitworld:fallen_star', 'Falls from the sky at night. Brew it into an Elixir of Stardew, or craft it with an ender pearl into Dimensional Catalysts.')
S(['hexxitworld:chocobo_helmet', 'hexxitworld:chocobo_chestplate', 'hexxitworld:chocobo_leggings', 'hexxitworld:chocobo_boots'], 'Dress up as a chocobo! A full disguise, purely for fun.')
S('hexxitworld:bad_bow', 'A weak, squeaky bow: arrows fly a short way. A joke weapon.')
S('hexxitworld:dimensional_catalyst', 'Crafting ingredient (made from a Fallen Star and an ender pearl).')

// --- Nyx leftovers ---
S('nyx:lunar_water_bucket', 'Lunar Water, blessed by the moon. Fill bottles from it for Lunar Water Bottles (Regeneration).')
S('nyx:star_block', 'Decorative block made from Fallen Stars.')
S(['nyx:meteorite_rock', 'nyx:meteorite_rock_hot'], 'Rock from a fallen meteor. Mine it for Meteorite Shards (hot rock cools down over time).')
S('nyx:frezarite_rock', 'Rock from an ice meteor. Mine it for Frezarite Crystals.')
S('nyx:kreknorite_rock', 'Rock from a fire meteor. Mine it for Kreknorite Shards.')
S(['nyx:meteorite_shard', 'nyx:frezarite_crystal', 'nyx:kreknorite_shard'], 'Meteor material for Nyx tools and armor. Find meteors with the Meteor Detector.')

// --- Ex Nihilo / Ex Compressum leftovers ---
S(['exnihiloadscensio:crushed_netherrack', 'exnihiloadscensio:crushed_endstone'], 'Hammered netherrack / end stone. Sieve it for Nether / End resources.')
S('excompressum:compressed_flint', 'Nine flint. Compressed blocks go through the Heavy Sieve and Compressed Hammer.')
S('excompressum:compressed_netherrack', 'Nine netherrack. Smash it with a Compressed Hammer.')
S('excompressum:mana_sieve', 'An automatic sieve powered by Botania mana instead of energy. Needs a mesh.')
S('excompressum:chicken_stick', 'An unbreakable hammer for cobblestone, gravel and sand. It clucks, and now and then a chicken hatches.')
S('excompressum:bat_zapper', Y + 'Right-click' + G + ' to kill every bat within 5 blocks.')
S('excompressum:uncompressed_coal', 'One eighth of a coal: smelts one item.')

// --- small leftovers ---
S('capsule:capsulemarker', 'Capture Base: an empty capsule thrown next to it captures the cube of blocks on top of it.')
S('ceramics:clay_bucket', 'A bucket made of fired clay. Scoops and pours any bucket fluid, milks cows and picks up sand, red sand and gravel; lava and other hot fluids break it.')
S('chancecubes:cube_dispenser', 'Shows a Chance Cube: left-click takes 64 (sneak: 1), sneak with an empty hand cycles the cube type.')
S(['chipped:botanist_workbench', 'chipped:loom_table', 'chipped:alchemy_bench', 'chipped:carpenters_table', 'chipped:glassblower', 'chipped:mason_table', 'chipped:tinkering_table'],
  'Put blocks in to turn them into one of their decorative variants.')
S('chipped:chisel', Y + 'Right-click' + G + ' to pick a decorative variant, then right-click blocks to change them into it.')
S('chisel:offsettool', Y + 'Right-click' + G + ' a chiseled block to shift its connected texture.')
S('dragonmounts:dragon_egg', 'Place it and ' + Y + 'right-click' + G + ' to start hatching. The dragon\'s colour depends on what is around the egg while it hatches.')
S('farmingforblockheads:market', 'Buy seeds and saplings with emeralds.')
S('headcrumbs:player', 'A statue of a player.')
S('hexxitgear:hexical_master_sword_activation', 'The Master Sword while it awakens. Strike it with lightning on a mountain top to finish it.')
S('ironbackpacks:upgrade_core', 'Base item for crafting backpack upgrades.')
S('lootbags:loot_opener', 'Opens the loot bags you put in, so hoppers can pull the loot out.')
S('lootbags:loot_recycler', 'Turns unwanted items into value; enough value makes a new loot bag.')
S('mowziesmobs:wrought_helmet', 'The Ferrous Wroughtnaut\'s helmet: sturdy head armor.')
S('mowziesmobs:captured_grottol', 'A caught Grottol. Place it to let it go.')
S('naturescompass:natures_compass', Y + 'Right-click' + G + ' to choose a biome, then the needle points to the nearest one.')
S('platforms:platformer', 'Crafts platforms, ramps and rails. Choose the shape and material in its screen.')
S('platforms:wrench', Y + 'Right-click' + G + ' a platform to rotate it; sneak to change its type.')
S('props:tool', 'Decowand: ' + Y + 'click' + G + ' a decoration to cycle its variants.')

// --- Sophisticated Storage / Backpacks ---
var SS_T = ['basic', 'copper', 'iron', 'gold', 'diamond', 'netherite']
SS_T.forEach((a, i) => SS_T.slice(i + 1).forEach(b => S('sophisticatedstorage:' + a + '_to_' + b + '_tier_upgrade',
  Y + 'Sneak-right-click' + G + ' a placed ' + (a === 'basic' ? 'wooden' : a) + ' chest, barrel or shulker box to upgrade it to ' + b + ', contents kept.')))
S(['sophisticatedstorage:chest', 'sophisticatedstorage:copper_chest', 'sophisticatedstorage:iron_chest', 'sophisticatedstorage:gold_chest', 'sophisticatedstorage:diamond_chest', 'sophisticatedstorage:netherite_chest',
  'sophisticatedstorage:copper_barrel', 'sophisticatedstorage:iron_barrel', 'sophisticatedstorage:gold_barrel', 'sophisticatedstorage:diamond_barrel', 'sophisticatedstorage:netherite_barrel'],
  'Storage that takes upgrades (stack, pickup, crafting, filters...) in its upgrade slots. Higher tiers hold more and take more upgrades.|Upgrade it in place with a tier upgrade.')
S('sophisticatedstorage:decoration_table', 'Paints Sophisticated storage blocks with the look of other blocks and dyes.')
S(['sophisticatedstorage:upgrade_base', 'sophisticatedbackpacks:upgrade_base'], 'Base item for crafting storage / backpack upgrades.')
S('sophisticatedcore:xp_bucket', 'Liquid experience, from the experience pump upgrade.')

// --- leftovers ---
S('apple_shields:apple_pie', 'Crafting material for the Apple Pie Shield.')
S('euru:upgrade_base', 'Base item for crafting upgrades.')
S(['oreberries:copper_nugget', 'oreberries:tin_nugget', 'oreberries:aluminum_nugget'], 'A metal nugget from oreberries. Nine make an ingot.')
S(['sf3extras:et_basalt', 'sf3extras:et_alabaster', 'sf3extras:et_lonsdaleite', 'sf3extras:et_mica'], 'Environmental Tech stone. Used for structure blocks and decoration.')
S('sf3extras:scm_redwire', 'Wire that carries a redstone signal along its whole length without getting weaker.')
S('sf3extras:rt_item_projector', 'Creative only: projects the items in the inventory behind it out of its front.')
S('simplelabels:blockvsu', 'Vast Storage Unit: stores a huge amount of one item. Put a Deep Storage Label on it to show what is inside.')
S('simplelabels:label', 'Put it on a storage block (barrel, drawer, VSU) to show the stored item and count.')
S('torchmaster:terrain_lighter', 'Load it with torches: it places them on the ground around it in a spiral, lighting the area.')
S('waystones:waystone', 'Activate it by ' + Y + 'right-clicking' + G + ', then teleport between your activated waystones from any waystone.')
S('waystones:warp_scroll', Y + 'Hold right-click' + G + ' to read it and pick a waystone to teleport to. Used up.')
S('woodenshears:wshears', 'Cheap shears made of wood. Breaks quickly.')
S('headcrumbs:skull', 'A mob or player head. Decoration.')
S('exnihiloadscensio:cooked_silkworm', 'A cooked silkworm. A small snack.')
S('apple_shields:white_apple', 'Crafting material for the iShield.')
S('apple_shields:rf_white_apple', 'Crafting material for the RF iShield.')

// --- Tinkers' Construct (SF3 version) ---
var TC = 'tconstruct:'
S(TC + 'graveyard_soil', 'Undead mobs standing on it slowly heal.')
S(TC + 'consecrated_soil', 'Undead mobs standing on it burn and take damage. Good for undead farms and base floors.')
S([TC + 'earth_congealed_slime', TC + 'sky_congealed_slime', TC + 'ender_congealed_slime', TC + 'blood_congealed_slime', TC + 'magma_congealed_slime'], 'A soft, bouncy block: cancels fall damage. Also the trunk of slime trees.')
S([TC + 'earth_slime', TC + 'sky_slime', TC + 'ender_slime', TC + 'blood_slime', TC + 'magma_slime'], 'A coloured slime block: as bouncy and sticky as vanilla slime.')
S([TC + 'lavawood', TC + 'firewood'], 'Decorative wood blocks.')
S([TC + 'slime_crystal_green', TC + 'slime_crystal_blue', TC + 'slime_crystal_magma'], 'Slime crafting material (JEI shows where it comes from).')
S(TC + 'silky_cloth', 'Crafting material for the Silky Jewel (the Silk Touch modifier).')
S(TC + 'crafting_station', 'A crafting table that keeps its items and can use the inventory of a chest next to it.')
S(TC + 'pattern_chest', 'Stores patterns and casts (one of each), and keeps them when broken. Next to a tool table it shows up as a tab.')
S(TC + 'part_chest', 'Stores tool parts and keeps them when broken. Next to a tool table it shows up as a tab.')
S(TC + 'seared_gauge', 'A seared tank with a window. Part of a Smeltery wall or Tinker Tank.')
S(TC + 'seared_furnace_controller', 'Heart of the Seared Furnace: a seared multiblock that smelts lots of items at once with lava heat.')
S(TC + 'tinker_tank_controller', 'Heart of the Tinker Tank: a big seared multiblock that stores fluids.')
S([TC + 'gem_cast', TC + 'plate_cast', TC + 'gear_cast'], 'Put it on a Casting Table and pour metal (or molten gems) in to cast that shape.')
S(TC + 'wood_rail', 'A cheap rail made of wood.')
S([TC + 'jewel_item_frame', TC + 'alubrass_item_frame', TC + 'cobalt_item_frame', TC + 'ardite_item_frame', TC + 'manyullyn_item_frame', TC + 'gold_item_frame', TC + 'clear_item_frame'], 'A decorative item frame. Place it on a wall and put an item in it.')
S(TC + 'slimedrop_green', 'Dried slime. Eat it for Speed III (1:30).')
S(TC + 'slimedrop_blue', 'Dried slime. Eat it for Jump Boost III (1:30).')
S(TC + 'slimedrop_purple', 'Dried slime. Eat it for Luck (1:30).')
S(TC + 'slimedrop_blood', 'Dried blood. Eat it for Health Boost (1:30).')
S(TC + 'slimedrop_magma', 'Dried magma slime. Eat it for Fire Resistance (1:30).')
S(TC + 'pattern', 'A part pattern. Use it in the Part Builder to cut that tool part from wood, stone, bone...')
S(TC + 'shard', 'A bit of tool material left over in the Part Builder. Use it to repair tools or make small parts.')
S(TC + 'cast', 'Put it on a Casting Table and pour metal in to cast this tool part.')
S(TC + 'clay_cast', 'A one-use cast: put it on a Casting Table and pour metal in to cast this part. It breaks after one use.')

// --- Pam's HarvestCraft ---
var HC = 'harvestcraft:'
S(HC + 'hardenedleatheritem', 'Leather hardened with pressed wax. Crafts Hardened Leather armor.')
S(HC + 'queenbeeitem', 'Put it in an Apiary to make honeycomb and wax. Found by breaking wild beehives. Wears out over time.')
S(HC + 'grubitem', 'An Apiary by-product. JEI shows its uses.')
S([HC + 'honeycombitem', HC + 'waxcombitem'], 'Press it in the Presser for honey / beeswax.')
S(HC + 'royaljellyitem', 'Made from a Queen Bee. A rare cooking ingredient.')
S(HC + 'beeswaxitem', 'Crafting material for candles and hardened leather.')
S([HC + 'fruitbaititem', HC + 'grainbaititem', HC + 'veggiebaititem'], 'Bait for the Ground Trap: it catches animal drops over time.')
S(HC + 'fishtrapbaititem', 'Bait for the Water Trap: it catches fish and seafood over time.')
S(HC + 'saltitem', 'Cooking ingredient. Craft a Pot with Fresh Water to make it.')
S(HC + 'freshwateritem', 'Cooking ingredient. Craft it from a water bucket, or take it from a Well.')
S(HC + 'freshmilkitem', 'Cooking ingredient. A milk bucket crafts into 4.')
S(HC + 'wovencottonitem', 'Cloth woven from cotton. Crafts wool and other items.')
var HC_TOOLS = ['cuttingboarditem', 'potitem', 'skilletitem', 'saucepanitem', 'bakewareitem', 'mortarandpestleitem', 'mixingbowlitem', 'juiceritem']
HC_TOOLS.forEach(t => S(HC + t, 'Kitchen tool: needed in many cooking recipes, and it is not used up.'))
var HC_CAKES = ['carrotcake', 'cheesecake', 'cherrycheesecake', 'chocolatesprinklecake', 'holidaycake', 'lamingtoncake', 'pavlovacake', 'pineappleupsidedowncake', 'pumpkincheesecake', 'redvelvetcake']
HC_CAKES.forEach(c => S(HC + c, 'Place it, then ' + Y + 'right-click' + G + ' to eat a slice.'))
S([HC + 'aridgarden', HC + 'frostgarden', HC + 'shadedgarden', HC + 'soggygarden', HC + 'tropicalgarden', HC + 'windygarden'], 'A wild garden. Break it for crops and seeds that grow in its climate.')
S(HC + 'beehive', 'A wild beehive. Break it for a Queen Bee.')
S([HC + 'honeycomb', HC + 'waxcomb', HC + 'pressedwax'], 'Storage / decorative block made of honeycomb or wax.')
S(HC + 'honey', 'A block of honey.')

// --- Natura ---
var NA = 'natura:'
S(NA + 'tainted_soil', 'Nether soil: Nether plants grow on it and fire on it burns forever.')
S([NA + 'tainted_farmland_dry', NA + 'tainted_farmland_heated'], 'Tainted farmland (creative). Heated farmland counts as fertile for crops.')
S(NA + 'thorn_vines', 'A climbable Nether vine.')
S([NA + 'green_glowshroom', NA + 'blue_glowshroom', NA + 'purple_glowshroom'], 'A glowing Nether mushroom. Spreads like mushrooms; bone meal grows a huge one. Makes Glowshroom Stew.')
S([NA + 'huge_green_glowshroom', NA + 'huge_blue_glowshroom', NA + 'huge_purple_glowshroom'], 'A glowing mushroom block from a huge glowshroom. Light source and decoration.')
S(NA + 'respawn_obelisk', Y + 'Right-click' + G + ' to set your respawn point here, in any dimension (even the Nether).')
S(NA + 'blaze_hopper', 'A fireproof hopper made of Nether materials. Works like a normal hopper.')
S([NA + 'blaze_rail', NA + 'blaze_rail_golden', NA + 'blaze_rail_activator', NA + 'blaze_rail_detector'], 'A fireproof rail made with blaze rods. Works like its vanilla counterpart.')
S(NA + 'nether_lever', 'A lever made of Nether materials.')
S(NA + 'netherrack_furnace', 'A furnace where every fuel burns twice as long.')
S([NA + 'vanilla_glowshroomstew', NA + 'ghostwood_glowshroomstew', NA + 'bloodwood_glowshroomstew', NA + 'darkwood_glowshroomstew', NA + 'fusewood_glowshroomstew'], 'Gives Night Vision, but also Poison and Mining Fatigue for a short while.')
S(NA + 'saguaro_fruit_item', 'Fruit of the saguaro cactus. Eat it, or place it on sand to plant a new saguaro.')
S([NA + 'ghostwood_kama', NA + 'bloodwood_kama', NA + 'darkwood_kama', NA + 'fusewood_kama', NA + 'netherquartz_kama'], 'A sickle: leaves, vines and grass broken with it also drop what shears would get.')
S(NA + 'flint_and_blaze', 'A fire starter, like flint and steel.')
S([NA + 'imp_armor_helmet', NA + 'imp_armor_chestplate', NA + 'imp_armor_leggings', NA + 'imp_armor_boots'], 'Light armor made of imp leather.')

// --- Project: Vibrant Journeys ---
var PV = 'pvj:'
var PV_GROUND = ['willow_twigs', 'mangrove_twigs', 'palm_twigs', 'redwood_twigs', 'fir_twigs', 'pine_twigs', 'aspen_twigs', 'red_maple_twigs', 'orange_maple_twigs', 'baobab_twigs', 'cottonwood_twigs', 'juniper_twigs', 'juniper_berried_twigs',
  'white_cherry_blossom_twigs', 'pink_cherry_blossom_twigs', 'jacaranda_twigs', 'oak_twigs', 'birch_twigs', 'spruce_twigs', 'jungle_twigs', 'acacia_twigs', 'dark_oak_twigs',
  'andesite_rocks', 'granite_rocks', 'diorite_rocks', 'sandstone_rocks', 'red_sandstone_rocks', 'bones', 'seashells', 'pinecones']
PV_GROUND.forEach(g => S(PV + g, 'Ground cover decoration. ' + Y + 'Sneak-right-click' + G + ' it to pick it up.'))
S(PV + 'wet_adobe', 'Dries into Adobe when it sits in the sun (clear day, open sky).')
S(PV + 'mud', 'Slows everything that walks through it (except pigs, who love it).')
S([PV + 'rock_formation', PV + 'ice_formation'], 'A cave stalagmite. Decoration.')
S(PV + 'pvj_cobweb', 'A cobweb found in old buildings. Slows anything caught in it.')
S([PV + 'bloodnettle', PV + 'witherweed'], 'A Nether plant. Plant it on netherrack or soul sand.')
S(PV + 'glowcap', 'A glowing cave mushroom (light level 11).')
S(PV + 'slime_droplet', 'Dropped by small slimes. Crafting material.')
S(PV + 'coconut_milk', 'A drink: gives Regeneration for 20 seconds.')
S(PV + 'juniper_berries', 'A snack: gives a short Regeneration boost.')
S([PV + 'spectral_wrappings', PV + 'goon_bile'], 'A mob drop. Crafting material.')
S(PV + 'unstable_essence', 'Ingredient for the Mystical Grill.')
S(PV + 'coconut', 'Grows under palm leaves. Crafts Coconut Milk (see JEI).')
S(PV + 'mystical_grill', 'Put it over a fire above a water cauldron, add nether wart and Unstable Essence, then grill raw meat for a meal with a random effect.')

// --- Mo' Creatures ---
var MC = 'mocreatures:'
S(MC + 'firestone', 'A glowing stone from the Wyvern Lair.')
S(MC + 'wyvern_nest_block', 'A wyvern nest: soaks up most fall damage when you land on it.')
S(MC + 'tall_wyvgrass', 'Wyvern Lair grass. Only drops with shears.')
S(MC + 'sugarlump', 'A treat: ' + Y + 'right-click' + G + ' a baby elephant to tame it. Eating one yourself makes you dizzy.')
S(MC + 'mocegg', 'A Mo\'Creatures egg. Drop it on the ground (fish eggs in water) and it hatches into a baby creature.')
S(MC + 'staffportal', Y + 'Right-click' + G + ' to travel to the Wyvern Lair and back (3 uses).')
S(MC + 'medallion', 'Taming token: ' + Y + 'right-click' + G + ' a fed big cat cub or a kitty with it to tame it. Also crafts amulets.')
S(MC + 'kittylitter', 'Place it for your kitty to use.')
S(MC + 'petfood', Y + 'Right-click' + G + ' a kitty bed to fill its food bowl.')
S([MC + 'essencedarkness', MC + 'essencefire', MC + 'essenceundead', MC + 'essencelight'], 'Give it to a tamed horse, big cat, ostrich, wyvern or scorpion to transform it into a magical form.|Made from the matching Heart (see JEI).')
S([MC + 'essence_eternal', MC + 'essence_ice'], 'Not used yet.')
S([MC + 'heartdarkness', MC + 'heartfire', MC + 'heartundead'], 'Dropped by evil horses. Brew/craft it into the matching Essence.')
S([MC + 'heart_eternal', MC + 'heart_ice'], 'Not used yet.')
S(MC + 'unicornhorn', 'Dropped by evil horse mobs. Crafting material.')
S([MC + 'fishnet', MC + 'fishnetfull'], Y + 'Right-click' + G + ' a tamed fish to catch it in the net; ' + Y + 'right-click' + G + ' again to release it.')
S([MC + 'petamulet', MC + 'petamuletfull'], Y + 'Right-click' + G + ' a tamed pet to store it in the amulet; ' + Y + 'right-click' + G + ' again to release it anywhere.')
S([MC + 'tusksiron', MC + 'tusksdiamond'], Y + 'Right-click' + G + ' your tamed adult elephant to give it tusks: it hits harder.')
S(MC + 'elephantharness', Y + 'Right-click' + G + ' your tamed elephant to put on a harness, so you can ride it.')
S(MC + 'elephantchest', Y + 'Right-click' + G + ' your harnessed elephant to give it storage.')
S([MC + 'elephantgarment', MC + 'elephanthowdah', MC + 'mammothplatform'], Y + 'Right-click' + G + ' your tamed elephant or mammoth to put it on: more seats or decoration.')
S(MC + 'ancientsilverscrap', 'Dropped by silver skeletons. Crafts ancient silver tools and armor.')
S(MC + 'firestonechunk', 'Crafting material from the Wyvern Lair.')
S([MC + 'chitinblack', MC + 'chitinfrost', MC + 'chitinnether', MC + 'chitinundead', MC + 'chitin'], 'Scorpion shell. Crafts scorpion armor (a full set gives a permanent effect).')
S([MC + 'nunchaku', MC + 'sai', MC + 'bo', MC + 'katana'], 'A fast ninja weapon.')
S([MC + 'sharksword', MC + 'shark_mattock', MC + 'sharkaxe'], 'A tool made of shark teeth.')
S([MC + 'ancient_silver_mattock', MC + 'shark_mattock'], 'Pickaxe, shovel and (while sneaking) hoe in one tool.')
S([MC + 'furchest', MC + 'furhelmet', MC + 'furlegs', MC + 'furboots'], 'Warm fur armor: each piece adds a little Luck.')
S(MC + 'mysticpear', 'A sweet magical fruit. Edible.')

// generated by materials.py (mob loot tables + recipes)
S('mod_lavacow:hyphae', 'Dropped by Mycosis. Crafts Mycelium.')
S('mod_lavacow:piranha', 'Dropped by Piranha.')
S('mod_lavacow:mousse', 'Crafts Crab Cake.')
S('mod_lavacow:sharptooth', 'Dropped by Flame Imp, Foglet, Ghoul, Isnachi and others. Crafts Bone Meal, Bone Sword, Dart, Famine Helmet and more (see JEI).')
S('mod_lavacow:poisonspore', 'Dropped by Mycosis.')
S('mod_lavacow:undyingheart', 'Dropped by Frigid, Mycosis, Sludge Lord, Unburied and others.')
S('mod_lavacow:moltenbeef', 'Dropped by Moogma, Salamander Blue, Salamander Nymph, Salamander Nymph Blue and others. Crafts "War", Molten Alloy, Molten Heart, Molten Meat Barrel.')
S('mod_lavacow:molten_alloy', 'Crafts Block of Molten Alloy, Molten Axe, Molten Boots, Molten Chestplate and more (see JEI).')
S('mod_lavacow:plagued_porkchop', 'Dropped by Undead Swine. Crafts Green Bacon & Eggs.')
S('mod_lavacow:pigboarhide', 'Dropped by Undead Swine. Crafts Swine Boots, Swine Mask, Swine Pants, Swine Tunic.')
S('mod_lavacow:scythe_claw', 'Dropped by Scarecrow, Scarecrow Plague, Scarecrow Straw, Wendigo. Crafts "Famine", Azrael\'s Scythe, Beast Claw, Famine Boots and more (see JEI).')
S('mod_lavacow:mimic_claw', 'Dropped by Mimicrab. Crafts Chitin, Crab Cake.')
S('mod_lavacow:silky_sludge', 'Dropped by Lil Sludge, Sludge Lord. Crafts "Pestilence", Holy Sludge, Sludge Pile.')
S('mod_lavacow:burntovipositor', 'Dropped by Salamander Blue, Warmander. Crafts "War", Molten Meat.')
S('mod_lavacow:poisonstinger', 'Dropped by Vespa. Crafts Bee Sting, Bone Meal, Vespa Shield.')
S('mod_lavacow:vespa_carapace', 'Dropped by Vespa. Crafts Bee Sting, Chitin, Vespa Carapace Barrel, Vespa Shield.')
S('mod_lavacow:zombiepiranha_item', 'Dropped by Swarmer. Crafts Swarmer Launcher.')
S('mod_lavacow:cursed_fabric', 'Dropped by Avaton, Banshee, Mummy, Revenant and others. Crafts Curseweave Cloth, Halo Necklace.')
S('mod_lavacow:holy_sludge', 'Crafts Halo Necklace.')
S('mod_lavacow:feather_black', 'Dropped by Penghoul, Raven. Crafts Dreamcatcher, Fang Arrow, Ghoulish Arrow, Raven Whistle.')
S('mod_lavacow:shattered_ice', 'Dropped by Frigid, Penghoul. Crafts Baobing, Frozen Dagger, Ice.')
S('mod_lavacow:acidicheart', 'Dropped by Amber Lord, Mummy, Osvermis, Osvermis Spiritus and others. Crafts Famine Tunic.')
S('mod_lavacow:foul_bristle', 'Dropped by Isnachi. Crafts Foul Hide.')
S('mod_lavacow:ectoplasm', 'Dropped by Avaton, Banshee, Cactyrant Nether, Ghost Ray and others. Crafts Ectoplasm Mass, Ghost Jelly.')
S('mod_lavacow:banshee_vocal_cord', 'Dropped by Banshee. Crafts Sonic Grenade.')
S('mod_lavacow:weta_jaw', 'Dropped by Avaton, Emperor Weta. Crafts Bone Meal, Weta Boots, Weta Chestplate, Weta Helmet and more (see JEI).')
S('mod_lavacow:chitin', 'Dropped by Amber Scarab, Emperor Weta, Enigmoth, Vespa. Crafts Basic Grenade, Bone Meal, Leather, Weta Boots and more (see JEI).')
S('mod_lavacow:hatred_shard', 'Dropped by Bosses/Skeleton King, Forsaken, Osvermis, Osvermis Spiritus and others. Crafts Azrael\'s Scythe, Forsaken Staff, Kings Crown1, Midnight Mourne.')
S('mod_lavacow:emblem_of_king', 'Dropped by Bosses/Skeleton King. Crafts Forsaken Staff.')
S('mod_lavacow:curseweave_cloth', 'Crafts Cursed Bandage0, Cursed Bandage1, Cursed Bandage2, Cursed Bandage3.')
S('mod_lavacow:imp_horn', 'Dropped by Flame Imp. Crafts Blaze Powder, Kung Pao Chicken.')
S('mod_lavacow:cactus_thorn', 'Dropped by Cactoid, Cactyrant, Cactyrant Nether. Crafts Thorn Shooter.')
S('mod_lavacow:ectoplasm_mass', 'Crafts Ghost Grenade.')
S('mod_lavacow:ghost_swarmer_item', 'Dropped by Ghost Swarmer. Crafts Ectoplasm.')
S('mod_lavacow:ancient_amber', 'Dropped by Amber Lord, Amber Scarab. Crafts Scarab Scepter.')
S('mod_lavacow:diseased_wheat', 'Dropped by Scarecrow, Scarecrow Plague, Scarecrow Straw. Crafts Diseased Bread, Diseased Hay Block.')
S('mod_lavacow:enigmoth_larva_item', 'Dropped by Enigmoth Caterpillar.')
S('mod_lavacow:holy_water', 'Crafts Holy Grenade.')
S('mod_lavacow:lamprey', 'Crafts Lamprey Kabayaki.')
S('mod_lavacow:foul_hide', 'Dropped by Wendigo. Crafts Beast Claw, Famine Boots, Famine Helmet, Famine Pants and more (see JEI).')
S('mod_lavacow:ushabti', 'Dropped by Mummy.')
S('mod_lavacow:ghoul_claw', 'Dropped by Ghoul. Crafts Ghoulish Arrow.')

// --- Fish's Undead Rising (hand-written; mob-drop materials are generated in 08_fur_gen.js) ---
var FU = 'mod_lavacow:'
S(FU + 'glowshroom', 'A glowing mushroom (full light). Spreads in dark places. Crafts Ghost Jelly and cyan dye.')
S([FU + 'glowshroom_block_stem', FU + 'glowshroom_block_cap'], 'Part of a huge Glow Shroom. Break it for Glow Shrooms.')
S([FU + 'cordy_shroom', FU + 'veil_shroom', FU + 'bloodtooth_shroom'], 'A strange mushroom from Fish\'s Undead Rising. Used in its foods and potions (see JEI).')
S(FU + 'pileofsludge', 'A pile of sludge left by Sludge Lords.')
S([FU + 'scarecrowhead_common', FU + 'scarecrowhead_straw', FU + 'scarecrowhead_plague'], 'A Scarecrow\'s head, dropped when you beat one. Decoration.')
S(FU + 'tombstone', 'A graveyard tombstone: at night Unburied climb out of it (up to 3 nearby).')
S(FU + 'cactoid_sprout', 'A young Cactoid: on sand or soul sand it soon hatches into a Cactoid creature.')
S(FU + 'diseased_hay_block', 'Nine Diseased Wheat in a block.')
S([FU + 'scythe_claw_block', FU + 'vespa_carapace_block', FU + 'molten_meat_block'], 'A storage barrel: nine of the material in one block.')
S(FU + 'mummified_cod', 'Edible, but may give you Corroded (weaker armor) for 20 s.')
S(FU + 'ghost_swarmer_item', 'Edible. May give Raven\'s Grace for 20 s.')
S(FU + 'lamprey', 'Edible raw, but may make you nauseous. Cook it first.')
S(FU + 'mousse', 'Minced meat you drink. Crafts Crab Cake and Meatballs.')
S(FU + 'meatball', 'A quick snack: eaten almost instantly.')
S(FU + 'shattered_ice', 'Crushed ice you drink: very little hunger, lots of saturation.')
S([FU + 'tooth_dagger', FU + 'vespa_dagger'], 'A fast dagger. The Bee Sting is made from Vespa parts.')
S(FU + 'bone_trout', 'A skeletal fish caught by fishing. Crafting material.')
S([FU + 'ghoul_arrow', FU + 'fang_arrow'], 'A special arrow made from Fish\'s Undead Rising mob parts.')

// --- Chocolate Quest Repoured ---
var CQ = 'cqrepoured:'
S(CQ + 'spawner', 'A dungeon spawner: releases its stored mobs when a player comes close. Cannot be broken in survival.')
S(CQ + 'boss_block', 'Dungeon builder block that marks where a boss appears. Creative only.')
S(CQ + 'force_field_nexus', "Powers a dungeon's protection: while it stands, the dungeon's blocks cannot be broken. Destroy it to lift the protection.")
S(CQ + 'null_block', 'An invisible barrier used in dungeons. Creative only.')
S(CQ + 'tnt', 'Dungeon TNT. Some is hidden in walls as a trap!')
S(CQ + 'map_placeholder', 'Dungeon builder block. Creative only.')
S(CQ + 'phylactery', 'The Lich\'s soul jar. Break it (it explodes!) to stop the Lich from coming back.')
S(CQ + 'temporary_web', 'A web shot by spiders. It disappears after a short while.')
S(CQ + 'exporter', 'Creative tool for saving dungeon structures.')
S(CQ + 'sword_turtle', 'A sword from the Giant Tortoise: while held you cannot be knocked back.')
S(CQ + 'diamond_sword_fake_healing_staff', 'Not obtainable: a sword support mobs swap their healing staff for.')
var CQ_SH = ['bull', 'carl', 'dragonslayer', 'fire', 'goblin', 'monking', 'moon', 'mummy', 'pigman', 'pirate', 'pirate2', 'rainbow', 'reflective', 'rusted', 'skeleton_friends', 'specter', 'spider', 'sun', 'tomb', 'triton', 'turtle', 'walker', 'warped', 'zombie']
CQ_SH.forEach(s => S(CQ + 'shield_' + s, 'A sturdy shield (1024 uses) carried by dungeon mobs. Hold ' + Y + 'right-click' + G + ' to block. Repair with iron.'))
var ARMOR4 = ['helmet', 'chestplate', 'leggings', 'boots']
ARMOR4.forEach(a => {
  S([CQ + a + '_heavy_iron', CQ + a + '_heavy_diamond'], 'Heavy armor: each piece adds knockback resistance but slows you by 5%.')
  S([CQ + a + '_iron_dyable', CQ + a + '_diamond_dyable'], 'Armor you can dye: craft it with dye like leather armor.')
  S(CQ + a + '_inquisition', 'Armor worn by the inquisition.')
})
S(CQ + 'helmet_dragon', 'The dragon\'s helmet: +10 max health and double attack damage.')
for (var di = 0; di < 20; di++) S(CQ + 'dungeon_placer_d' + di, 'Creative only: ' + Y + 'right-click' + G + ' to place this dungeon.')

// generated by materials.py (mob loot tables + recipes)
S('twilightforest:naga_scale', 'Dropped by Naga. Crafts Naga Scale Leggings, Naga Scale Tunic.')
S('twilightforest:exanimate_essence', 'Dropped by Twilight Lich.')
S('twilightforest:raven_feather', 'Dropped by Raven. Crafts Magic Map Focus.')
S('twilightforest:magic_map_focus', 'Dropped by Death Tome. Crafts Blank Magic Map.')
S('twilightforest:maze_map_focus', 'Dropped by Minotaur. Crafts Blank Maze Map, Uncrafting Table.')
S('twilightforest:maze_map', 'Crafts Blank Maze/Ore Map.')
S('twilightforest:liveroot', 'Found by breaking Liveroots. Crafts Raw Ironwood.')
S('twilightforest:raw_ironwood', 'Crafts Ironwood Ingot.')
S('twilightforest:torchberries', 'Dropped by Skeleton Druid. Crafts Magic Map Focus, Torch.')
S('twilightforest:raw_venison', 'Dropped by Deer. Crafts Venison Jerky, Venison Steak.')
S('twilightforest:hydra_chop', 'Dropped by Hydra.')
S('twilightforest:tannin', 'Crafts Treated Leather.')
S('twilightforest:fiery_blood', 'Dropped by Hydra.')
S('twilightforest:fiery_tears', 'Dropped by Ur-Ghast.')
S('twilightforest:steeleaf_ingot', 'Crafts Block of Steeleaf.')
S('twilightforest:raw_meef', 'Dropped by Minotaur. Crafts Meef Jerky, Meef Steak.')
S('twilightforest:meef_stroganoff', 'Dropped by Minoshroom.')
S('twilightforest:maze_slime_ball', 'Dropped by Maze Slime. Crafts Gelatinous Maze Slime Drop, Lead, Magma Cream, Maze Slime Block and more (see JEI).')
S('twilightforest:crumble_horn', 'Dropped by Questing Ram Rewards.')
S('twilightforest:charm_of_life_1', 'Crafts Charm of Life II.')
S('twilightforest:charm_of_keeping_1', 'Dropped by Maze Slime. Crafts Charm of Keeping II.')
S('twilightforest:charm_of_keeping_2', 'Crafts Charm of Keeping III.')
S('twilightforest:iron_berry', 'Found by breaking Iron Oreberry Bush Berries. Crafts Iron Nugget.')
S('twilightforest:gold_berry', 'Found by breaking Gold Oreberry Bush Berries. Crafts Gold Nugget.')
S('twilightforest:copper_berry', 'Found by breaking Copper Oreberry Bush Berries. Crafts Copper Nugget.')
S('twilightforest:essence_berry', 'Found by breaking Essence Berry Bush Berries.')
S('twilightforest:borer_essence', 'Dropped by Towerwood Borer. Crafts Carminite.')
S('twilightforest:carminite', 'Dropped by Ur-Ghast. Crafts Block of Carminite.')
S('twilightforest:mason_jar', 'Crafts Cicada Jar, Firefly Jar.')
S('twilightforest:firefly_jar', 'Crafts Firefly Particle Spawner.')
S('twilightforest:armor_shard', 'Dropped by Block and Chain Goblin, Helmet Crab, Lower Goblin Knight, Upper Goblin Knight. Crafts Armor Shard Cluster.')
S('twilightforest:armor_shard_cluster', 'Crafts Knightmetal Ingot.')
S('twilightforest:knightmetal_ring', 'Crafts Block and Chain, Knightmetal Shield.')
S('twilightforest:ice_bomb', 'Dropped by Alpha Yeti.')
S('twilightforest:arctic_fur', 'Dropped by Winter Wolf, Yeti. Crafts Block of Arctic Fur.')
S('twilightforest:alpha_yeti_fur', 'Dropped by Alpha Yeti. Crafts Yeti Boots, Yeti Horned Helm, Yeti Jacket, Yeti Leggings.')
S('twilightforest:triple_bow', 'Dropped by Snow Queen.')
S('twilightforest:seeker_bow', 'Dropped by Snow Queen.')
S('twilightforest:magic_beans', 'Dropped by Troll.')
S('twilightforest:giant_sword', 'Dropped by Armored Giant.')
S('twilightforest:crown_splinter', 'Crafts Mystic Crown.')
S('twilightforest:huge_water_lily', 'Crafts Magenta Dye.')
S('twilightforest:naga_trophy', 'Dropped by Naga. Crafts Banner Pattern.')
S('twilightforest:lich_trophy', 'Dropped by Twilight Lich. Crafts Banner Pattern.')
S('twilightforest:minoshroom_trophy', 'Dropped by Minoshroom. Crafts Banner Pattern.')
S('twilightforest:hydra_trophy', 'Dropped by Hydra. Crafts Banner Pattern.')
S('twilightforest:knight_phantom_trophy', 'Dropped by Knight Phantom Defeated. Crafts Banner Pattern.')
S('twilightforest:ur_ghast_trophy', 'Dropped by Ur-Ghast. Crafts Banner Pattern.')
S('twilightforest:alpha_yeti_trophy', 'Dropped by Alpha Yeti. Crafts Banner Pattern.')
S('twilightforest:snow_queen_trophy', 'Dropped by Snow Queen. Crafts Banner Pattern.')
S('twilightforest:quest_ram_trophy', 'Dropped by Questing Ram Rewards.')
S('twilightforest:hollow_crimson_stem', 'Found by breaking Hollow Crimson Stem.')
S('twilightforest:hollow_warped_stem', 'Found by breaking Hollow Warped Stem.')
S('twilightforest:twilight_oak_boat', 'Crafts Twilight Oak Boat with Chest.')
S('twilightforest:canopy_boat', 'Crafts Canopy Boat with Chest.')
S('twilightforest:mangrove_boat', 'Crafts Mangrove Boat with Chest.')
S('twilightforest:dark_boat', 'Crafts Darkwood Boat with Chest.')
S('twilightforest:time_boat', 'Crafts Timewood Boat with Chest.')
S('twilightforest:transformation_boat', 'Crafts Transwood Boat with Chest.')
S('twilightforest:mining_boat', 'Crafts Minewood Boat with Chest.')
S('twilightforest:sorting_boat', 'Crafts Sortingwood Boat with Chest.')
S('twilightforest:raspberry', 'Found by breaking Raspberry Bush Berries. Crafts Berry Medley.')
S('twilightforest:blueberry', 'Found by breaking Blueberry Bush Berries. Crafts Berry Medley.')
S('twilightforest:blackberry', 'Found by breaking Blackberry Bush Berries. Crafts Berry Medley.')
S('twilightforest:maloberry', 'Found by breaking Maloberry Bush Berries. Crafts Berry Medley.')
S('twilightforest:blightberry', 'Found by breaking Blightberry Bush Berries.')
S('twilightforest:duskberry', 'Found by breaking Duskberry Bush Berries.')
S('twilightforest:skyberry', 'Found by breaking Skyberry Bush Berries.')
S('twilightforest:stingberry', 'Found by breaking Stingberry Bush Berries.')
S('twilightforest:treated_leather', 'Crafts Tanned Leather.')
S('twilightforest:tanned_leather', 'Crafts Traveller\'s Belt, Traveller\'s Boots, Traveller\'s Gloves, Traveller\'s Goggles and more (see JEI).')
S('twilightforest:moss_patch', 'Found by breaking Hollow Acacia Log, Hollow Birch Log, Hollow Canopy Tree Log. Crafts Moss Soup.')
S('twilightforest:mayapple', 'Found by breaking Potted Mayapple.')
S('twilightforest:mushgloom', 'Found by breaking Huge Mushgloom Block, Huge Mushgloom Stem, Potted Mushgloom.')
S('twilightforest:root_strand', 'Crafts Rope, Stick, Tannin.')
S('twilightforest:smoker', 'Crafts Encased Smoker.')
S('twilightforest:fire_jet', 'Crafts Encased Fire Jet.')
S('twilightforest:firefly', 'Found by breaking Firefly Particle Spawner. Crafts Firefly Jar, Firefly Particle Spawner.')
S('twilightforest:cicada', 'Crafts Cicada Jar.')
S('twilightforest:moonworm', 'Found by breaking Moonworm Failed To Place.')
S('twilightforest:etched_nagastone', 'Crafts Cracked Etched Nagastone, Mossy Etched Nagastone, Nagastone Stairs (Left), Nagastone Stairs (Right).')
S('twilightforest:terrorcotta_arcs', 'Crafts Terrorcotta Curves, Terrorcotta Lines.')
S('twilightforest:terrorcotta_curves', 'Crafts Terrorcotta Arcs, Terrorcotta Lines.')
S('twilightforest:terrorcotta_lines', 'Crafts Terrorcotta Arcs, Terrorcotta Curves.')
S('twilightforest:mazestone', 'Crafts Cut Mazestone, Decorative Mazestone Brick, Mazestone Border, Mazestone Brick and more (see JEI).')
S('twilightforest:cut_mazestone', 'Crafts Decorative Mazestone Brick, Mazestone Border, Mazestone Brick, Mazestone Mosaic.')
S('twilightforest:mazestone_mosaic', 'Crafts Cut Mazestone, Decorative Mazestone Brick, Mazestone Border, Mazestone Brick.')
S('twilightforest:mazestone_border', 'Crafts Cut Mazestone, Decorative Mazestone Brick, Mazestone Brick, Mazestone Mosaic.')
S('twilightforest:maze_slime_block', 'Crafts Maze Slimeball.')
S('twilightforest:underbrick', 'Crafts Cracked Underbrick, Mossy Underbrick, Underbrick Floor.')
S('twilightforest:aurora_block', 'Crafts Aurora Pillar, Aurora Slab.')
S('twilightforest:thorn_rose', 'Crafts Red Dye.')
S('twilightforest:fluffy_cloud', 'Crafts Rainy Cloud, Snowy Cloud.')
S('twilightforest:giant_obsidian', 'Crafts Obsidian.')

// --- Twilight Forest (hand-written; overrides the generated drop/recipe lines) ---
var TF = 'twilightforest:'
function tf(ids, text) { S((Array.isArray(ids) ? ids : [ids]).map(i => TF + i), text) }
tf('naga_scale', 'Dropped by the Naga, the first Twilight boss. Crafts Naga Scale armor.')
tf(['naga_chestplate', 'naga_leggings'], 'Armor made of Naga scales: strong for its tier.')
tf('exanimate_essence', 'Dropped by the Twilight Lich. Crafting material.')
tf('raven_feather', 'Dropped by ravens on the Twilight hills. Crafts the Magic Map Focus.')
tf('liveroot', 'From Liveroots underground. Craft with gold for Raw Ironwood.')
tf('raw_ironwood', 'Smelt it into Ironwood ingots.')
tf(['ironwood_helmet', 'ironwood_chestplate', 'ironwood_leggings', 'ironwood_boots', 'ironwood_sword', 'ironwood_shovel', 'ironwood_pickaxe', 'ironwood_axe', 'ironwood_hoe'],
  'Ironwood gear: about iron strength, and it comes with built-in enchantments.')
tf(['steeleaf_helmet', 'steeleaf_chestplate', 'steeleaf_leggings', 'steeleaf_boots', 'steeleaf_sword', 'steeleaf_shovel', 'steeleaf_pickaxe', 'steeleaf_axe', 'steeleaf_hoe'],
  'Steeleaf gear: light, strong and comes with built-in enchantments.')
tf('steeleaf_ingot', 'A tough leaf from Steeleaf trees. Crafts Steeleaf tools and armor.')
tf('torchberries', 'Glowing berries from Torchberry plants in caves. Craft them into torches or the Magic Map Focus.')
tf(['magic_map', 'filled_magic_map'], Y + 'Right-click' + G + ' a blank map to draw the Twilight Forest around you, with biomes and boss structures.')
tf(['maze_map', 'filled_maze_map'], Y + 'Right-click' + G + ' a blank map inside the Minotaur Labyrinth to map the maze around you.')
tf(['magic_map_focus', 'maze_map_focus'], 'Crafting ingredient for the Magic Map / Maze Map.')
tf('mazebreaker_pickaxe', 'Dropped by the Minoshroom. Breaks maze stone fast and comes heavily enchanted.')
tf('transformation_powder', Y + 'Right-click' + G + ' certain animals and mobs to transform them into another creature.')
tf('crumble_horn', 'Hold ' + Y + 'right-click' + G + ' to crumble stone and dirt in front of you.')
tf('peacock_feather_fan', Y + 'Right-click' + G + ' to blow mobs and items away; used in the air it gives you a little lift.')
tf(['brittle_potion_flask', 'greater_potion_flask'], 'Holds several doses of one potion. Fill it with potions of the same kind, drink one dose at a time.')
tf('charm_of_life_1', 'Keep it in your inventory: if you would die, it is used up and saves you with a little health.')
tf('charm_of_life_2', 'Keep it in your inventory: if you would die, it is used up and saves you with full health and regeneration.')
tf('charm_of_keeping_1', 'Keep it in your inventory: when you die you keep your armor and held item. Used up.')
tf('charm_of_keeping_2', 'Keep it in your inventory: when you die you keep your armor and hotbar. Used up.')
tf('charm_of_keeping_3', 'Keep it in your inventory: when you die you keep everything. Used up.')
tf('tower_key', 'Opens the Locked Vanishing Blocks of the Dark Tower.')
tf('experiment_115', 'A strange cake from the Dark Tower. Place it and take bites.')
tf(['mason_jar', 'firefly_jar', 'cicada_jar'], 'A jar. ' + Y + 'Right-click' + G + ' a firefly or cicada with an empty jar to catch it; jarred fireflies are a light.')
tf('armor_shard', 'Dropped by goblin knights and other Knight Stronghold mobs. Nine make an Armor Shard Cluster.')
tf('armor_shard_cluster', 'Smelt it into Knightmetal.')
tf(['knightmetal_helmet', 'knightmetal_chestplate', 'knightmetal_leggings', 'knightmetal_boots'], 'Knightmetal armor: very strong.')
tf('knightmetal_ring', 'Knightmetal loop. Crafts the Block and Chain.')
tf('knightmetal_shield', 'A strong shield made of knightmetal.')
tf('block_and_chain', Y + 'Right-click' + G + ' to throw a spiked block on a chain; it hits hard and can break blocks.')
tf('ice_bomb', Y + 'Throw' + G + ' it: freezes water and mobs where it bursts.')
tf('triple_bow', 'Fires three arrows at once.')
tf('seeker_bow', 'Its arrows home in on the target you aim at.')
tf('ice_bow', 'Its arrows slow and chill what they hit.')
tf('ender_bow', 'When an arrow hits a mob, you swap places with it.')
tf('ice_sword', 'Hits chill and slow the target.')
tf('giant_sword', 'A huge sword with longer reach.')
tf('lamp_of_cinders', Y + 'Right-click' + G + ' thorns to burn them away.')
tf('cube_of_annihilation', Y + 'Throw' + G + ' it to destroy magic-protected dungeon blocks (like Deadrock barriers); it comes back to you.')
tf('magic_beans', 'Plant them on Uberous Soil: they grow a huge beanstalk up to the clouds.')
tf('uberous_soil', 'Super-fertile soil: plants on it grow fast. Magic Beans planted on it grow the giant beanstalk.')
tf('huge_stalk', 'The giant beanstalk. Climb it.')
tf(['naga_trophy', 'lich_trophy', 'minoshroom_trophy', 'hydra_trophy', 'knight_phantom_trophy', 'ur_ghast_trophy', 'alpha_yeti_trophy', 'snow_queen_trophy', 'quest_ram_trophy'],
  'A boss trophy. Place it on a wall or floor; on a Trophy Pedestal it unlocks the Knight Stronghold.')
tf('trophy_pedestal', 'Place a boss trophy on it to open up the Knight Stronghold.')
tf(['hollow_crimson_stem', 'hollow_warped_stem'], 'A hollow log you can walk through, or climb when it stands upright.')
tf('uncrafting_table', 'Puts crafted items back into their ingredients, at an experience cost. It can also re-craft an item into another recipe that uses the same ingredients.')
tf(['smoker', 'encased_smoker'], 'A Twilight vent that puffs smoke.')
tf(['fire_jet', 'encased_fire_jet'], 'A Twilight vent that shoots fire when powered by redstone.')
tf('firefly', 'Place it on a wall: a small glowing light. Catch it in a Mason Jar.')
tf('cicada', 'Place it on a wall: it chirps. Catch it in a Mason Jar.')
tf('moonworm', 'Place it on a wall: a small glowing light. The Moonworm Queen shoots them.')
tf('slider', 'A dungeon trap that slides back and forth, hurting what it hits.')
tf('brazier', 'A Twilight light source.')
tf(['iron_oreberry', 'gold_oreberry', 'copper_oreberry', 'essence_oreberry'], 'An oreberry bush. Pick its berries when ripe.')
tf(['iron_berry', 'gold_berry', 'copper_berry'], 'An oreberry: craft it into nuggets.')
tf('essence_berry', 'A berry full of experience. Eat it for XP.')
tf(['raspberry_bush', 'blueberry_bush', 'blackberry_bush', 'maloberry_bush', 'blightberry_bush', 'duskberry_bush', 'skyberry_bush', 'stingberry_bush'], 'A berry bush. ' + Y + 'Right-click' + G + ' it to pick the berries when ripe.')
tf('nagastone_head', 'Part of the Naga Courtyard. Decoration.')
tf('red_thread', 'Place it on surfaces to mark a path, like a trail of thread. Hard to see without the right goggles.')
tf('stronghold_shield', 'An unbreakable barrier in the Knight Stronghold. Defeat the Knight Phantoms to remove them.')
tf(['reappearing_block', 'vanishing_block'], 'Dark Tower block: a redstone signal or a click makes it vanish for a while.')
tf('locked_vanishing_block', 'Dark Tower block: unlock it with a Tower Key.')
tf('carminite_builder', 'With a redstone signal it builds a temporary bridge of blocks in the direction it faces.')
tf('antibuilder', 'Turns blocks placed near it back into air. Breaks Dark Tower cheats.')
tf('ghast_trap', 'Kill Carminite Ghastlings near it to charge it, then use it to drag the Ur-Ghast down.')
tf('carminite_reactor', 'A dangerous Dark Tower device: a redstone signal makes it start a reaction that ends in an explosion.')
tf('aurora_block', 'A colourful Aurora Palace block. Decoration.')
tf(['brown_thorns', 'green_thorns'], 'Thorns hurt anything that touches them and grow back when broken. Burn them with the Lamp of Cinders.')
tf('burnt_thorns', 'Burnt thorns: they crumble when touched.')
tf('thorn_rose', 'A rare flower that grows among the thorns.')
tf(['deadrock', 'weathered_deadrock'], 'A tough stone from the Highlands. Decoration.')
tf('trollsteinn', 'A Troll Cave stone that glows when light shines on it.')
tf(['wispy_cloud', 'fluffy_cloud'], 'A cloud block from above the Troll Caves.')
tf(['rainy_cloud', 'snowy_cloud'], 'A cloud block that rains / snows below itself.')
tf('giant_obsidian', 'A giant block of obsidian. Only the Giant Pickaxe can break it.')
tf('trollvidr', 'A Troll Cave plant. Grows Trollbers.')
tf(['unripe_trollber', 'trollber'], 'A Troll Cave plant. Ripe Trollbers glow.')
tf(['violet_force_field', 'pink_force_field', 'orange_force_field', 'green_force_field', 'blue_force_field'], 'A force field from the Final Castle. Cannot be broken.')
tf('cinder_furnace', 'A furnace that smelts faster, and slowly turns logs around it into cinder logs.')
tf(['twilight_portal_miniature_structure', 'naga_courtyard_miniature_structure', 'lich_tower_miniature_structure', 'minotaur_labyrinth_miniature_structure', 'dark_tower_miniature_structure'], 'A miniature model of a Twilight Forest structure. Decoration.')
tf(['naga_boss_spawner', 'lich_boss_spawner', 'hydra_boss_spawner', 'ur_ghast_boss_spawner', 'knight_phantom_boss_spawner', 'snow_queen_boss_spawner', 'minoshroom_boss_spawner', 'alpha_yeti_boss_spawner', 'final_boss_boss_spawner'], 'Creative only: spawns this boss when a player comes near.')
tf('time_log_core', 'Timewood Clock: makes blocks around it tick faster (crops grow, machines speed up). ' + Y + 'Right-click' + G + ' to turn it on or off.')
tf('transformation_log_core', 'Heart of Transformation: slowly turns the land around it into an Enchanted Forest biome. ' + Y + 'Right-click' + G + ' to turn it on or off.')
tf('mining_log_core', 'Minewood Core: pulls ores from the ground around it up to its level. ' + Y + 'Right-click' + G + ' to turn it on or off.')
tf('sorting_log_core', 'Sortingwood Engine: sorts items between the chests around it. ' + Y + 'Right-click' + G + ' to turn it on or off.')
var TF_RACK = ['oak', 'spruce', 'birch', 'jungle', 'acacia', 'dark_oak', 'crimson', 'warped', 'vangrove', 'bamboo', 'cherry', 'twilight_oak', 'canopy', 'mangrove', 'dark', 'time', 'transformation', 'mining', 'sorting']
TF_RACK.forEach(w => tf(w + '_drying_rack', 'Hang raw meat (or other items) on it to dry them into jerky and treated leather.'))
tf('treated_leather', 'Leather soaked in Tannin. Dry it on a Drying Rack for Tanned Leather.')
tf('tanned_leather', 'Strong leather made on the Drying Rack.')
tf('tannin', 'Crafts Treated Leather.')
tf('fiery_blood', 'Dropped by the Hydra. With iron, crafts Fiery Ingots.')
tf('fiery_tears', 'Dropped by the Ur-Ghast. With iron, crafts Fiery Ingots.')
tf('borer_essence', 'Dropped by Towerwood Borers in the Dark Tower. Crafts Carminite.')
tf('carminite', 'Dropped by the Ur-Ghast. Crafts the Dark Tower devices.')
tf(['arctic_fur', 'alpha_yeti_fur'], 'Dropped by yetis and winter wolves. Crafts Arctic / Yeti armor.')
tf('crown_splinter', 'Combine splinters into the Mystic Crown.')
tf('four_leaf_clover', 'A lucky find. Crafting material.')
tf('keepsake_casket', 'When you die, your kept items are stored in a casket where you fell. Open it to get them back.')
tf('maze_slime_ball', 'Dropped by maze slimes in the Labyrinth. Crafting material.')
tf('hedge', 'A thick hedge: it pricks whatever pushes into it.')
tf(['root_strand', 'root'], 'Underground roots. Decoration; break them for sticks.')
tf('liveroot_block', 'Underground roots. Break them for Liveroot.')
tf('torchberry_plant', 'A glowing cave plant. Break it for Torchberries.')
tf('mushgloom', 'A glowing mushroom from the Twilight caves.')
tf('firefly_particle_spawner', 'Creative only: makes fireflies float around it.')
tf('skull_chest', 'A creepy chest from the Twilight dungeons.')
tf('magic_painting', 'A Twilight Forest painting.')
tf('wrought_iron_bar', 'Decorative iron bars.')

// --- Twilight Forest corrections, checked against TF's own tips texts ---
tf('exanimate_essence', 'Dropped by the Twilight Lich. Crafted with a scepter, it fully recharges it.')
tf('keepsake_casket', 'A limited-use gravestone: if it is in your inventory when you die, it places itself and holds all your items.')
tf(['brittle_potion_flask', 'greater_potion_flask'], 'Holds up to 3 doses of the same potion. Drink one dose at a time.')
tf('peacock_feather_fan', Y + 'Right-click' + G + ' to push mobs away, or use it while jumping to launch yourself up. Also puts out candles.')
tf('reappearing_block', 'Dark Tower block: activating it makes it vanish for a while, then it comes back.')
tf('vanishing_block', 'Dark Tower block: activating it makes it disappear for good.')
tf('hydra_chop', 'Dropped by the Hydra. Fills your hunger bar completely.')
tf('experiment_115', 'A strange cake from the Dark Tower. Place it and take bites; sneak-right-click to pick it back up.')
tf('mystic_crown', 'Worn on your head, it slightly strengthens scepters.')
tf('mazebreaker_pickaxe', 'Dropped by the Minoshroom. Breaks Mazestone 16 times faster without extra wear.')
tf('mining_log_core', 'Heart of the Miner\'s Tree: pulls ores from around it up to the surface. ' + Y + 'Right-click' + G + ' to turn it on or off.')
tf('sorting_log_core', 'Heart of the Sorting Tree: sorts the chest next to it into other chests nearby. ' + Y + 'Right-click' + G + ' to turn it on or off.')
tf('time_log_core', 'Heart of the Tree of Time: speeds up crops and blocks around it. ' + Y + 'Right-click' + G + ' to turn it on or off.')
tf('uncrafting_table', 'Uncrafts items into their ingredients (costs XP), re-crafts them into other items, repairs gear and moves enchantments between items.')
tf(['unripe_trollber', 'trollber'], 'A Troll Cave plant. Killing a Troll nearby ripens it; ripe Trollbers glow.')
tf('wrought_iron_bar', 'Decorative iron bars. Only obtainable by uncrafting blocks made of them.')
tf(['charm_of_keeping_1', 'charm_of_keeping_2', 'charm_of_keeping_3'], 'Keep it in your inventory: when you die, part of your inventory comes back to you (more with higher tiers). Used up.')
tf('cube_of_annihilation', Y + 'Throw' + G + ' it to destroy specially marked dungeon blocks in its path; it returns to you.')
tf('trophy_pedestal', 'Place a boss trophy on it to activate it and open up the Knight Stronghold. It can only be mined after activation.')
tf('maze_map_focus', 'Sometimes dropped by Minotaurs. Crafts the Maze Map.')
tf(['iron_oreberry', 'gold_oreberry', 'copper_oreberry', 'essence_oreberry'], 'A metal berry bush, found rarely underground. Pick its berries when ripe.')
tf('essence_berry', 'From the Essence Berry Bush. JEI shows its uses.')

// --- Create (+ Simulated, Aeronautics, Offroad). Create's Ponder (hold W over a block) shows full animations. ---
var CR = 'create:'
var PONDER = ' Hold ' + Y + 'W' + G + ' over it to watch how it works.'
function cr(ids, text) { S((Array.isArray(ids) ? ids : [ids]).map(i => CR + i), text + PONDER) }
cr('shaft', 'Carries rotation in a straight line.')
cr(['cogwheel', 'large_cogwheel'], 'Carries rotation to touching cogwheels. A large and a small cog together change the speed (x2 or x0.5).')
cr(['andesite_encased_shaft', 'brass_encased_shaft'], 'A shaft in a casing: carries rotation and looks tidy.')
cr(['andesite_encased_cogwheel', 'brass_encased_cogwheel', 'andesite_encased_large_cogwheel', 'brass_encased_large_cogwheel'], 'A cogwheel in a casing: links to shafts and cogs on its sides.')
cr('gearbox', 'Sends rotation out of all four sides around its axis, reversing some of them.')
cr('clutch', 'A shaft that stops carrying rotation while it gets a redstone signal.')
cr('gearshift', 'A shaft that reverses the rotation while it gets a redstone signal.')
cr('encased_chain_drive', 'Passes rotation to other chain drives in a line next to it.')
cr('adjustable_chain_gearshift', 'A chain drive whose output speed changes with the redstone signal strength.')
cr('chain_conveyor', 'Carries packages along chains strung between conveyors. Connect two with a chain.')
cr('creative_motor', 'Creative only: endless rotation at a set speed.')
cr(['water_wheel', 'large_water_wheel'], 'Makes rotation from flowing water on its blades.')
cr('encased_fan', 'Blows (or sucks) air. Through fire, lava, water or soul fire it smelts, smokes, washes or haunts items in its stream.')
cr('hand_crank', 'Hold ' + Y + 'right-click' + G + ' to turn it for a little rotation by hand.')
cr('mysterious_cuckoo_clock', 'A clock that shows the time when powered. It might do something special at midnight...')
cr('millstone', 'Grinds items put in it into powders and dusts. Needs rotation.')
cr('crushing_wheel', 'Place two facing each other and spin them inwards to crush items dropped between them.')
cr('mechanical_press', 'Presses items below it (on a belt or depot) into plates; with a Basin below it compacts items.')
cr('mechanical_mixer', 'Mixes the items and fluids in a Basin below it into new ones. Some recipes need a heated basin.')
cr('basin', 'Holds items and fluids for the Mechanical Mixer and Press above it.')
cr('blaze_burner', 'Heats the Basin above it. ' + Y + 'Right-click' + G + ' with a blaze spawn egg or capture a blaze; feed it fuel to keep it burning.')
cr('depot', 'Holds one item for machines to work on (press, fan, spout...).')
cr('weighted_ejector', 'Throws items placed on it to a target spot you set with a wrench. Needs rotation.')
cr('smart_chute', 'A chute with a filter: only lets matching items through.')
cr('speedometer', 'Shows how fast the rotation passing through it spins.')
cr('stressometer', 'Shows how much stress the connected network is under.')
cr('fluid_pipe', 'Carries fluids. Needs a Mechanical Pump to move them.')
cr('mechanical_pump', 'Pushes fluids through pipes in the direction of its arrow. Needs rotation.')
cr('smart_fluid_pipe', 'A pipe with a filter: only lets the chosen fluid through.')
cr('fluid_valve', 'Opens or closes the pipe when it gets rotation.')
cr(['copper_valve_handle', 'white_valve_handle', 'orange_valve_handle', 'magenta_valve_handle', 'light_blue_valve_handle', 'yellow_valve_handle', 'lime_valve_handle', 'pink_valve_handle',
  'gray_valve_handle', 'light_gray_valve_handle', 'cyan_valve_handle', 'purple_valve_handle', 'blue_valve_handle', 'brown_valve_handle', 'green_valve_handle', 'red_valve_handle', 'black_valve_handle'],
  'Turn it by hand for a precise amount of rotation (e.g. to open a valve or turn a bearing by an exact angle).')
cr('fluid_tank', 'Stores fluids. Stack and place them side by side to make bigger tanks.')
cr('creative_fluid_tank', 'Creative only: an endless supply of the chosen fluid.')
cr('hose_pulley', 'Lowers a hose to pump a whole lake of fluid in or out. Needs rotation.')
cr('item_drain', 'Empties fluid containers (buckets, bottles...) dropped on it into a tank.')
cr('spout', 'Fills items below it (on a belt or depot) with fluid from its tank.')
cr('portable_fluid_interface', 'Lets pipes reach the fluid tanks of a moving contraption when it stops next to another interface.')
cr('steam_engine', 'Attach it to a fluid tank boiler heated by Blaze Burners and filled with water: makes strong rotation.')
cr('steam_whistle', 'Attach it to a boiler: it whistles while powered. Bigger whistles play lower notes.')
cr(['mechanical_piston', 'sticky_mechanical_piston'], 'Pushes the blocks in front of it out and pulls them back when it rotates. Add Extension Poles for more range.')
cr('piston_extension_pole', 'Lengthens a Mechanical Piston\'s reach.')
cr(['gantry_carriage', 'gantry_shaft'], 'A carriage moves along a spinning gantry shaft, carrying the blocks attached to it.')
cr(['windmill_bearing', 'mechanical_bearing'], 'Rotates the blocks attached to its front. A windmill bearing with sails makes rotation from the wind.')
cr('clockwork_bearing', 'Turns attached blocks as clock hands showing the time.')
cr(['rope_pulley', 'elevator_pulley'], 'Lowers and raises the blocks attached below it. The elevator version makes a lift with floor contacts.')
cr('cart_assembler', 'Place it on a rail: a minecart passing over it picks up the attached blocks as a moving contraption.')
cr(['linear_chassis', 'secondary_linear_chassis', 'radial_chassis'], 'Glue-like frame: moves the blocks on its sticky sides along with a contraption. Make sides sticky with slime.')
cr('sticker', 'With a redstone signal it sticks to (or lets go of) the block in front. Moves blocks with contraptions.')
cr('contraption_controls', 'On a moving contraption, lets you switch its tools (drills, saws...) on and off.')
cr('mechanical_drill', 'Breaks the block in front of it while it spins. Works on moving contraptions too.')
cr('mechanical_saw', 'Cuts trees and processes logs into planks and more. Works on moving contraptions too.')
cr('portable_storage_interface', 'Lets machines reach the inventory of a moving contraption when it stops next to another interface.')
cr('redstone_contact', 'Two facing contacts give a redstone signal; works when a contraption brings one past the other.')
cr('mechanical_harvester', 'On a moving contraption, harvests grown crops it passes and leaves them replanted.')
cr('mechanical_plough', 'On a moving contraption, tills soil and breaks small plants it passes.')
cr('mechanical_roller', 'On a moving contraption, flattens and paves the ground it passes with a block you give it.')
cr(['sail_frame', 'white_sail'], 'Put sails on a Windmill Bearing to catch the wind.')
cr(['andesite_casing', 'brass_casing', 'copper_casing', 'shadow_steel_casing', 'refined_radiance_casing', 'railway_casing'], 'A casing block. ' + Y + 'Right-click' + G + ' a shaft, belt or machine with it to encase it.')
cr('mechanical_crafter', 'Several crafters in a grid craft together, even big recipes. Needs rotation; aim the arrows to chain them.')
cr('rotation_speed_controller', 'Sets the speed of the large cog on top of it.')
cr('mechanical_arm', 'Picks items up from one spot and puts them in another. Select its inputs and outputs before placing it.')
cr('track_station', 'A train stop. Assemble trains here and set schedules.')
cr('track_signal', 'Splits the track into sections so trains do not crash.')
cr('track_observer', 'Gives a redstone signal when a train passes over it.')
cr('controls', 'Train controls: lets you drive the train. Needed to assemble a train.')
cr(['andesite_funnel', 'brass_funnel'], 'Puts items into the container it faces or takes them out. The brass one can filter.')
cr('andesite_tunnel', 'Splits items on a belt between the belts beside it.')
cr('content_observer', 'Gives a redstone signal when it sees the filtered item in a container or on a belt.')
cr('stockpile_switch', 'Gives a redstone signal when the container it faces is fuller (or emptier) than set.')
cr('item_vault', 'Huge item storage. Place several together to make a bigger vault.')
cr(['packager', 'repackager'], 'Packs items from the container behind it into a package (and unpacks packages). Part of Create\'s logistics.')
cr('package_frogport', 'Sends and receives packages on a chain conveyor.')
var COL16 = ['white', 'orange', 'magenta', 'light_blue', 'yellow', 'lime', 'pink', 'gray', 'light_gray', 'cyan', 'purple', 'blue', 'brown', 'green', 'red', 'black']
COL16.forEach(c => {
  cr(c + '_postbox', 'Receives packages addressed to it, and sends packages from trains.')
  cr(c + '_table_cloth', 'Put it on a table to make a shop counter: show items for sale or ask for payment.')
})
cr('stock_link', 'Connects a container network to Create\'s logistics so it can be ordered from.')
cr('stock_ticker', 'Order items from the linked stock and get them packaged.')
cr('redstone_requester', 'Sends a set order to the network when it gets a redstone signal.')
cr('factory_gauge', 'Shows and controls production of an item in a logistics network.')

// --- Simulated (physics contraptions) ---
var SI = 'simulated:'
var SIP = ' Hold ' + Y + 'W' + G + ' to ponder it.'
function si(ids, text) { S((Array.isArray(ids) ? ids : [ids]).map(i => SI + i), text + SIP) }
si('physics_assembler', 'Turns the blocks attached to it into a Simulated Contraption with real physics.')
si('swivel_bearing', 'Rotates a glued group of blocks freely; rotation from the shaft passes through. Redstone unlocks it.')
si('rope_winch', 'Reels a rope in and out when it rotates. Link it to a Rope Connector with a Rope Coupling.')
si('rope_connector', 'The other end of a winch rope.')
si(['iron_handle', 'copper_handle'].concat(COL16.map(c => c + '_handle')), 'Attach it to a block; hold ' + Y + 'right-click' + G + ' to grab on and pull yourself around it.')
si('directional_gearshift', 'Unpowered it passes no rotation; a redstone signal from either side picks the direction.')
si('torsion_spring', 'Passes rotation only within a set range of angles, then springs back.')
si(['auger_shaft', 'auger_cog'], 'Moves items along it and collects from harvesting tools on contraptions.')
COL16.forEach(c => si(c + '_portable_engine', 'Burns fuel for rotation. Can run in either direction.'))
si(['laser_pointer', 'laser_sensor'], 'A powered laser pointer shines a beam; the sensor gives a signal when the laser hits it.')
si('velocity_sensor', 'Gives a redstone signal based on how fast it moves.')
si('altitude_sensor', 'Gives a redstone signal based on how high it is.')
si('gimbal_sensor', 'Gives a redstone signal based on how it is tilted.')
si('navigation_table', 'Gives redstone feedback pointing towards the target of a navigation item (map, compass).')
si('optical_sensor', 'Gives a signal when something blocks its laser.')
si('docking_connector', 'Two facing connectors lock together rigidly. Use them to dock contraptions.')
si('analog_transmission', 'An encased cogwheel whose speed you control with redstone strength.')
si('steering_wheel', 'Hold ' + Y + 'right-click' + G + ' to grab it and steer: turns rotation precisely. A comparator reads its angle.')
si('throttle_lever', 'A lever that gives any redstone strength from 0 to 15.')
si(['directional_linked_receiver', 'modulating_linked_receiver'], 'A Redstone Link receiver that outputs the direction (or distance) to the transmitter.')
si('redstone_accumulator', 'Stores a signal strength that rises with power at its back and falls with power on its sides.')
si('redstone_inductor', 'Output slowly follows its input signal; set the rate on its panel.')
si('redstone_magnet', 'Powered magnets attract or push other redstone magnets.')
si('white_symmetric_sail', 'A sail that works the same both ways. Handy for windmills.')
si(['incomplete_gyroscopic_mechanism', 'incomplete_engine_assembly', 'gyroscopic_mechanism', 'engine_assembly'], 'Crafting part for Simulated machines (assembled step by step; see JEI).')
si('honey_glue', 'Glues blocks together for Simulated Contraptions. ' + Y + 'Right-click' + G + ' two corners to glue an area.')
si('rope_coupling', 'Right-click a Rope Winch and a Rope Connector to link them with rope.')

// --- Aeronautics ---
var AE = 'aeronautics:'
COL16.forEach(c => {
  S(AE + c + '_envelope', 'Balloon fabric: enclose a space with envelopes and fill it with hot air or steam for lift.' + SIP)
  S(AE + c + '_envelope_encased_shaft', 'A shaft passing through balloon fabric.' + SIP)
})
S(AE + 'adjustable_burner', 'Hot Air Burner: fills a balloon above it with hot air for lift. Air pressure affects it.' + SIP)
S(AE + 'steam_vent', 'Fills a balloon above it with steam from a boiler for lift.' + SIP)
S(AE + 'propeller_bearing', 'Spins the blocks attached to it as a propeller for thrust.' + SIP)
S(AE + 'gyroscopic_propeller_bearing', 'A propeller bearing that tilts to stay level. Great for helicopters.' + SIP)
S([AE + 'andesite_propeller', AE + 'wooden_propeller'], 'A small ready-made propeller: makes thrust when spun.' + SIP)
S(AE + 'mounted_potato_cannon', 'A block Potato Cannon for contraptions: fires its ammo when powered.' + SIP)
S([AE + 'levitite', AE + 'pearlescent_levitite'], 'A floating crystal: enough of it on a Simulated Contraption lifts it.' + SIP)
S(AE + 'levitite_blend_bucket', 'Levitite Blend: crystallize it into Levitite.' + SIP)
S(AE + 'end_stone_powder', 'Crushed end stone. Ingredient of Levitite Blend.')

// --- Offroad ---
S('offroad:borehead_bearing', 'Spins Rock Cutting Wheels attached to its front to dig a tunnel.' + SIP)
S('offroad:rockcutting_wheel', 'Breaks the blocks in a range around itself when spun by a Borehead Bearing.' + SIP)

// --- ComputerCraft ---
var CC = 'computercraft:'
S([CC + 'computer_normal', CC + 'computer_advanced'], 'A programmable computer (Lua). ' + Y + 'Right-click' + G + ' to open it; type help to start. Advanced ones have colour and mouse support.')
S(CC + 'computer_command', 'Creative only: a computer that can run server commands.')
S([CC + 'pocket_computer_normal', CC + 'pocket_computer_advanced'], 'A computer you carry. ' + Y + 'Right-click' + G + ' to use it; craft it with a modem for wireless.')
S([CC + 'turtle_normal', CC + 'turtle_advanced'], 'A programmable robot: it moves, mines, builds and farms by itself. Give it a tool by crafting.')
S([CC + 'disk', CC + 'treasure_disk'], 'Stores programs and files. Put it in a Disk Drive next to a computer.')
S([CC + 'printed_page', CC + 'printed_pages', CC + 'printed_book'], 'Text printed by a computer\'s printer.')
S(CC + 'speaker', 'Lets a computer play notes, sounds and audio.')
S(CC + 'disk_drive', 'Reads floppy disks for the computer next to it.')
S(CC + 'printer', 'Prints text from a computer onto paper. Needs paper and ink (dye).')
S([CC + 'monitor_normal', CC + 'monitor_advanced'], 'A screen for a computer. Place several together for a big display.')
S([CC + 'wireless_modem_normal', CC + 'wireless_modem_advanced'], 'Lets computers talk wirelessly. The Ender Modem reaches any distance and dimension.')
S([CC + 'wired_modem_full', CC + 'wired_modem', CC + 'cable'], 'Connects computers and peripherals over cable. ' + Y + 'Right-click' + G + ' a modem to attach the block next to it.')
S(CC + 'redstone_relay', 'Lets a computer read and send redstone signals on all its sides.')

// --- Create (the rest) ---
cr(['andesite_table_cloth', 'brass_table_cloth', 'copper_table_cloth'], 'Put it on a table to make a shop counter: show items for sale or ask for payment.')
cr('display_board', 'A big display: shows text and values sent from Display Links.')
cr('nixie_tube', 'Shows redstone signal strength as a number, or text from a name tag or Display Link.')
cr('rose_quartz_lamp', 'A lamp; when powered, it turns off the other lamps in its row (only one lit at a time).')
cr('redstone_link', 'Sends redstone signals wirelessly to other links with the same two items as frequency.')
cr('analog_lever', 'A lever you can set to any strength 0-15 by right-clicking (sneak to lower).')
cr('pulse_repeater', 'Turns any input into a short pulse, after a set delay.')
cr('pulse_extender', 'Makes a pulse last longer, by a set time.')
cr('pulse_timer', 'Gives a short pulse again and again at a set interval.')
cr('powered_latch', 'Turns on with a signal at the back and stays on until a side signal turns it off.')
cr('powered_toggle_latch', 'Each signal at the back flips it on or off.')
cr('vertical_gearbox', 'A gearbox placed on its side: sends rotation up and down too.')
cr('empty_blaze_burner', 'An empty burner. ' + Y + 'Right-click' + G + ' a blaze (or blaze spawner) with it to catch one and get a Blaze Burner.')
cr('belt_connector', 'Mechanical Belt: ' + Y + 'right-click' + G + ' two shafts in a line to connect them with a belt that moves items and carries rotation.')
cr('super_glue', Y + 'Right-click' + G + ' two corners to glue blocks together so they move as one contraption.')
cr(['copper_backtank_placeable', 'netherite_backtank_placeable'], 'Backtank placed as a block: charge it with rotation to fill it with air for diving and tools.')
cr(['cardboard_helmet', 'cardboard_chestplate', 'cardboard_leggings', 'cardboard_boots'], 'Cardboard armor: no protection, but a great disguise.')
cr(['minecart_contraption', 'furnace_minecart_contraption', 'chest_minecart_contraption'], 'A minecart carrying a contraption. Place it back on a rail to set it off.')
cr(['cardboard_package_12x12', 'cardboard_package_10x12', 'cardboard_package_10x8', 'cardboard_package_12x10', 'rare_creeper_package', 'rare_darcy_package', 'rare_evan_package', 'rare_jinx_package',
  'rare_kryppers_package', 'rare_simi_package', 'rare_starlotte_package', 'rare_thunder_package', 'rare_up_package', 'rare_vector_package'], 'A package of items. ' + Y + 'Right-click' + G + ' to open it, or send it through the logistics network.')
cr('schedule', 'A train schedule: write stops and conditions, then give it to a train\'s conductor.')
COL16.forEach(c => cr(c + '_toolbox', 'Portable storage: place it and pull items from it to your hotbar from up to a few blocks away.'))
cr(['andesite_scaffolding', 'brass_scaffolding', 'copper_scaffolding'], 'Scaffolding you can climb; place it upward from the bottom.')
cr('metal_girder', 'A metal beam for building; connects to shafts placed through it.')
COL16.forEach(c => cr(c + '_seat', 'Sit on it. Mobs that walk onto it sit down too, which is handy for moving them on contraptions.'))
cr(['incomplete_precision_mechanism', 'incomplete_track', 'unprocessed_obsidian_sheet'], 'A half-finished item: keep processing it in the sequence JEI shows.')
cr(['precision_mechanism', 'electron_tube', 'propeller', 'whisk', 'brass_hand', 'transmitter', 'sturdy_sheet', 'crafter_slot_cover'], 'Create crafting component.')
cr(['chromatic_compound', 'shadow_steel', 'refined_radiance'], 'Rare Create material.')

// --- Items that looked plain by name but are not (second pass) ---
var COLS = ['white', 'orange', 'magenta', 'light_blue', 'yellow', 'lime', 'pink', 'gray', 'light_gray', 'cyan', 'purple', 'blue', 'brown', 'green', 'red', 'black']
// Secret Rooms
S(['secretroomsmod:secret_stairs', 'secretroomsmod:secret_wooden_button', 'secretroomsmod:secret_stone_button', 'secretroomsmod:secret_pressure_plate', 'secretroomsmod:secret_wooden_trapdoor',
  'secretroomsmod:secret_iron_trapdoor', 'secretroomsmod:secret_wooden_door', 'secretroomsmod:secret_iron_door'], 'Works like the normal block, but disguised as the block it was placed against.')
S('secretroomsmod:one_way_glass', 'Looks like the block it was placed against from outside, but is see-through from inside. Place it while standing outside.')
S('secretroomsmod:torch_lever', 'A torch that is also a lever: ' + Y + 'right-click' + G + ' to send a redstone signal into the block it is on.')
// Dark Utilities
S(['darkutils:sneaky_torch', 'darkutils:sneaky_plate'], Y + 'Right-click' + G + ' it with another block to copy that block\'s look (the block is not used up).')
// Mo' Creatures
COLS.concat(['silver']).forEach(c => S('mocreatures:kittybed_' + c, 'Place it for your kitty to sleep in; fill its bowl with Pet Food.'))
// Ex Nihilo
S(['exnihiloadscensio:oak_seed', 'exnihiloadscensio:spruce_seed', 'exnihiloadscensio:birch_seed', 'exnihiloadscensio:jungle_seed', 'exnihiloadscensio:acacia_seed', 'exnihiloadscensio:dark_oak_seed'], 'Plant it on dirt or grass to grow that tree.')
S(['exnihiloadscensio:cactus_seed', 'exnihiloadscensio:sugarcane_seed', 'exnihiloadscensio:carrot_seed', 'exnihiloadscensio:potato_seed'], 'Plant it to grow the crop (cactus on sand, sugar cane next to water).')
S('exnihiloadscensio:porcelain_clay', 'Shape it into a Porcelain Doll.')
S(['excompressum:compressed_gravel', 'excompressum:compressed_sand', 'excompressum:compressed_dirt', 'excompressum:compressed_nether_gravel', 'excompressum:compressed_ender_gravel', 'excompressum:compressed_soul_sand'],
  'Nine blocks in one. Sift it in a Heavy Sieve for nine times the loot.')
// misc
S('deadlyworld:infested_dirt', 'Looks normal, but releases silverfish when broken.')
S('fairylights:garland', Y + 'Right-click' + G + ' a fence or wall, then another one, to hang it between them.')
S('hatchery:fertilized_dirt', 'Plants on it grow faster. Hoe it to make Fertilized Farmland.')
S('hexxitworld:sunflower_bush_seed', 'Plant it to grow a Sunflower Bush.')
S(['chococraftplus:gysahl_seeds'], 'Plant on farmland to grow Gysahl carrots.')
S('chococraftplus:seed_packet', 'Craft it into Gysahl seeds (see JEI).')
S('torchmaster:mega_torch_unlit', 'A burnt-out Mega Torch. Light it with flint and steel to make it work again.')
S('cqrepoured:unlit_torch', 'An unlit torch from a dungeon. Light it with flint and steel or fire.')
S('create:red_sand_paper', 'Hold ' + Y + 'right-click' + G + ' with an item in your off hand to polish it (e.g. rose quartz). Hold W to ponder it.')
S(['twilightforest:zombie_skull_candle', 'twilightforest:skeleton_skull_candle', 'twilightforest:wither_skeleton_skull_candle', 'twilightforest:creeper_skull_candle', 'twilightforest:player_skull_candle', 'twilightforest:piglin_skull_candle'],
  'A mob head with candles on top: a spooky light. Add up to 4 candles.')
S(['tconstruct:earth_slime_dirt', 'tconstruct:sky_slime_dirt', 'tconstruct:ender_slime_dirt', 'tconstruct:magma_slime_dirt'], 'Dirt from the slime islands. Slime saplings grow on its grass.')
S('tconstruct:seared_window', 'A see-through seared block for Smeltery walls.')
S('pvj:void_grass', 'Strange grass: anything walking through it may get teleported a short way!')
// sf3extras: porcelain (Ceramics)
S(COLS.map(c => 'sf3extras:' + c + '_porcelain_barrel'), 'Holds 4000 mB of any fluid. Each Barrel Extension stacked on top adds 4000 mB more.')
S(COLS.map(c => 'sf3extras:' + c + '_porcelain_barrel_extension'), 'Stack on a porcelain barrel to add 4000 mB of fluid space.')
S('sf3extras:porcelain_faucet', 'Attach it to the side of a fluid barrel or tank; ' + Y + 'right-click' + G + ' it (or power it) to pour the fluid into the block below.')
S(['sf3extras:unfired_porcelain', 'sf3extras:porcelain_ball'], 'Unfired porcelain: smelt it in a furnace.')
S(COLS.map(c => 'sf3extras:' + c + '_sword_plinth'), 'Displays a sword. ' + Y + 'Right-click' + G + ' with a sword to place it, empty-handed to take it back.')
S('sf3extras:et_sand_enriched', 'Environmental Tech sand. Smelts into Clear Glass for lenses.')

// --- Items whose own tooltip only shows a stat or a word (third pass) ---
// Fish's Undead Rising variant items had auto-generated names ("Parasite Item0") in kubejs/assets lang
addLang('mod_lavacow', {
  'item.mod_lavacow.parasite_item0': 'Raw Parasite', 'item.mod_lavacow.parasite_item1': 'Raw Parasite', 'item.mod_lavacow.parasite_item2': 'Raw Parasite',
  'item.mod_lavacow.ptera_wing0': 'Raw Ptera Wing', 'item.mod_lavacow.ptera_wing1': 'Raw Ptera Wing', 'item.mod_lavacow.ptera_wing2': 'Raw Ptera Wing', 'item.mod_lavacow.ptera_wing3': 'Raw Ptera Wing',
  'item.mod_lavacow.cursed_bandage0': 'Pet Bandage', 'item.mod_lavacow.cursed_bandage1': 'Pet Bandage', 'item.mod_lavacow.cursed_bandage2': 'Pet Bandage', 'item.mod_lavacow.cursed_bandage3': 'Pet Bandage',
  'item.mod_lavacow.kings_crown0': "King's Crown", 'item.mod_lavacow.kings_crown1': "King's Crown"
})
S(['mod_lavacow:parasite_item0', 'mod_lavacow:parasite_item1', 'mod_lavacow:parasite_item2'], 'Dropped by Parasites. Edible raw, better cooked.')
S(['mod_lavacow:ptera_wing0', 'mod_lavacow:ptera_wing1', 'mod_lavacow:ptera_wing2', 'mod_lavacow:ptera_wing3'], 'Dropped by Pteras. Cook it for Fried Ptera Wing.')
// Dark Utilities mob filters
var DU_F = ['player', 'undead', 'arthropod', 'monster', 'animal', 'water', 'baby', 'pet', 'slime', 'fireres', 'boss']
DU_F.forEach(f => {
  S('darkutils:filter_' + f, 'Only the listed type of mob can walk through it; everything else is blocked. Great for mob farms.')
  S('darkutils:inverted_filter_' + f, 'Everything can walk through it except the listed type of mob.')
})
S(['ancientbeasts:irongrass', 'ancientbeasts:magic_feather', 'ancientbeasts:fire_key'], 'An unfinished Ancient Beasts artifact: it has no effect yet.')
var MOC_AM = { amuletbone: 'a skeleton horse', amuletghost: 'a ghost horse', amuletfairy: 'a fairy horse', amuletpegasus: 'a pegasus' }
Object.keys(MOC_AM).forEach(a => S(['mocreatures:' + a, 'mocreatures:' + a + 'full'], Y + 'Right-click' + G + ' your tamed ' + MOC_AM[a].replace('a ', '') + ' to store it in the amulet; ' + Y + 'right-click' + G + ' again to release it.'))
S(['pvj:mystical_porkchop', 'pvj:mystical_beef', 'pvj:mystical_chicken', 'pvj:mystical_mutton', 'pvj:mystical_cod', 'pvj:mystical_salmon', 'pvj:mystical_potato', 'pvj:mystical_rabbit'], 'Cooked on the Mystical Grill: eating it gives a random effect.')
S(['twilightforest:travellers_vest', 'twilightforest:travellers_wings', 'twilightforest:travellers_boots'], 'Traveller\'s gear: each piece has a built-in ability, and up to 3 more can be added. Made from Tanned Leather.')
S('twilightforest:travellers_gloves', 'Cosmetic gloves made of Tanned Leather.')
S(['twilightforest:arctic_helmet', 'twilightforest:arctic_chestplate', 'twilightforest:arctic_leggings', 'twilightforest:arctic_boots'], 'Warm armor made of Arctic Fur. Can be dyed.')
S(['twilightforest:naga_banner_pattern', 'twilightforest:lich_banner_pattern', 'twilightforest:hydra_banner_pattern', 'twilightforest:snow_queen_banner_pattern'], 'Use it in a Loom to put this boss pattern on a banner.')
S('waystones:return_scroll', Y + 'Hold right-click' + G + ' to read it and return to the last waystone you activated. Used up.')
S('waystones:bound_scroll', 'Bind it to a waystone, then read it to teleport there. Used up.')
S(['oreberries:iron_oreberry', 'oreberries:gold_oreberry', 'oreberries:tin_oreberry'], 'An oreberry. Smelt it into a nugget.')
S(['oreberries:iron_oreberry_bush', 'oreberries:gold_oreberry_bush', 'oreberries:tin_oreberry_bush'], 'An oreberry bush. Grows berries in the dark underground; pick them when ripe.')


// ---------------------------------------------------------------------------------------------------------------------
// TIDY + TIPS run in one dynamic handler. MINE = namespaces this file looks after.
var MINE = {}
'kubejs bountiful explorerscompass naturescompass hexxitgear hexxitworld battletowers cqrepoured mowziesmobs twilightforest aether mocreatures mod_lavacow nyx dragonmounts ancientbeasts specialmobs deadlyworld infernalmobs roguelike reccomplex asr apple_shields morebows tconstruct harvestcraft skewers cookingforblockheads farmingforblockheads combustfish chickens morechickens hatchery exnihiloadscensio excompressum chancecubes capsule sf3extras lootbags darkutils ironbackpacks platforms colytra wolfarmor waystones torchmaster gravestone snad secretroomsmod betterbuilderswands chisel chiselsandbits flatcoloredblocks props fairylights headcrumbs statues waddles mimicfish cavenoise birdsnests lostbooks natura oreberries gravelores minicoal ceramics woodenshears sophisticatedbackpacks sophisticatedstorage sophisticatedcore pvj comforts chococraftplus hexxitintegration'
  .split(' ').forEach(n => { MINE[n] = true })

var JComponent = Java.loadClass('net.minecraft.network.chat.Component')
var FORMAT = /§[0-9a-fk-orA-FK-OR]/g

// codes still active at the end of s (colour resets formats, §r resets all)
function activeCodes(s) {
  let colour = '', fmt = ''
  let m = s.match(FORMAT) || []
  m.forEach(c => {
    let k = c.charAt(1).toLowerCase()
    if (k === 'r') { colour = ''; fmt = '' }
    else if ('0123456789abcdef'.indexOf(k) >= 0) { colour = c; fmt = '' }
    else fmt += c
  })
  return colour + fmt
}

function wrapText(font, s) {
  if (font.width(s) <= WRAP) return [s]
  let out = [], cur = '', words = s.split(' ')
  words.forEach(w => {
    let next = cur === '' ? w : cur + ' ' + w
    if (cur !== '' && font.width(next) > WRAP) {
      out.push(cur)
      cur = activeCodes(cur) + w
    } else cur = next
  })
  if (cur !== '') out.push(cur)
  return out
}

// a line we may rebuild: no siblings that carry their own style
function plainLine(c) {
  let sibs = c.getSiblings()
  for (let i = 0; i < sibs.size(); i++) if (!sibs.get(i).getStyle().isEmpty() || !sibs.get(i).getSiblings().isEmpty()) return false
  return true
}

// mods whose own tooltip lines are repeated by sf3_lore.js (Ex Compressum hammers/heavy sieves, Mega Torch)
var DEDUPE = { excompressum: true, exnihiloadscensio: true, torchmaster: true, sf3extras: true }

// returns the new line list (JS array of Components); index 0 (the name) is never touched
function tidy(font, src, dedupe) {
  let out = [src[0]], seen = {}
  for (let i = 1; i < src.length; i++) {
    let c = src[i]
    let s = String(c.getString())
    let key = s.replace(FORMAT, '').trim()
    if (dedupe && key.length > 3) {
      if (seen[key]) continue
      seen[key] = true
    }
    if (!plainLine(c) || (s.indexOf('\n') < 0 && s.indexOf('\\n') < 0 && font.width(s) <= WRAP)) { out.push(c); continue }
    let style = c.getStyle(), carry = ''
    s.split(/\n|\\n/).forEach(p => {
      wrapText(font, carry + p.trim()).forEach(x => out.push(JComponent.literal(x).setStyle(style)))
      carry = activeCodes(carry + p)
    })
  }
  return out
}

function hasShiftHint(arr) {
  for (let i = 1; i < arr.length; i++) if (/shift/i.test(String(arr[i].getString()))) return true
  return false
}

ItemEvents.modifyTooltips(event => {
  event.modifyAll(t => t.dynamic('tooltips_misc'))
})

ItemEvents.dynamicTooltips('tooltips_misc', event => {
  let id = String(event.item.id)
  let ns = id.substring(0, id.indexOf(':'))
  if (!MINE[ns] && !TIPS[id]) return
  let lines = event.lines
  let arr = []
  for (let i = 0; i < lines.size(); i++) arr.push(lines.get(i))
  if (arr.length === 0) return
  // advanced tooltips (F3+H) end with the item id (and maybe component count): our lines go above them
  let at = arr.length
  if (event.advanced) for (let i = arr.length - 1; i > 0; i--) if (String(arr[i].getString()) === id) { at = i; break }
  // a blue italic last line is the mod name (JEI / KubeJS): keep it last
  if (at > 1) {
    let st = arr[at - 1].getStyle()
    if (st.isItalic() && st.getColor() != null && String(st.getColor().serialize()) === 'blue') at--
  }
  let t = TIPS[id]
  if (t) {
    let add = []
    t.line.forEach(l => add.push(Text.of(G + l)))
    if (t.shift.length > 0) {
      if (event.shift) t.shift.forEach(l => add.push(Text.of(G + l)))
      else if (!hasShiftHint(arr)) add.push(Text.of(HINT))
    }
    arr = arr.slice(0, at).concat(add).concat(arr.slice(at))
  }
  if (!event.startup) arr = tidy(Client.font, arr, !!DEDUPE[ns])
  lines.clear()
  arr.forEach(c => lines.add(c))
})
})();
