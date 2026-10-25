// Sophisticated Storage wood chests/barrels from a Storage Drawers basic drawer (fix for "pale oak chest comes out as an oak chest").
//
// Cause: zz_progression_retier.js replaced the lever in the middle of every Sophisticated Storage wood recipe with #storagedrawers:basic_drawers.
// SS's own "generic wood" recipe (sophisticatedstorage:generic_wood_storage) treats every slot whose ingredient has 2+ items as a planks/slab slot:
//   * assemble(): the drawer in the middle is not planks -> the wood type lookup gives up -> the chest stays the default oak chest
//     (the barrels stay spruce) for pale oak and the Twilight Forest woods.
//   * matches(): a middle slot that is not a known wood counts as "non custom wood", so the generic recipe also matches vanilla woods
//     and competes with the exact recipes (a cherry barrel came out as a spruce barrel).
// Fix: exact recipes for every generic wood (pale oak + 8 Twilight Forest woods), and the generic recipes rewritten as plain shaped
// recipes (same ids) that take every other planks type, minus the woods that have an exact recipe, and give the default wood like SS does.
ServerEvents.recipes(function (event) {
  var WOODS = [
    ['minecraft:pale_oak', 'minecraft:pale_oak_planks', 'minecraft:pale_oak_slab'],
    ['twilightforest:twilight_oak', 'twilightforest:twilight_oak_planks', 'twilightforest:twilight_oak_slab'],
    ['twilightforest:canopy', 'twilightforest:canopy_planks', 'twilightforest:canopy_slab'],
    ['twilightforest:mangrove', 'twilightforest:mangrove_planks', 'twilightforest:mangrove_slab'],
    ['twilightforest:dark', 'twilightforest:dark_planks', 'twilightforest:dark_slab'],
    ['twilightforest:time', 'twilightforest:time_planks', 'twilightforest:time_slab'],
    ['twilightforest:transformation', 'twilightforest:transformation_planks', 'twilightforest:transformation_slab'],
    ['twilightforest:mining', 'twilightforest:mining_planks', 'twilightforest:mining_slab'],
    ['twilightforest:sorting', 'twilightforest:sorting_planks', 'twilightforest:sorting_slab']
  ]
  var VANILLA_PLANKS = ['oak', 'spruce', 'birch', 'acacia', 'cherry', 'jungle', 'dark_oak', 'crimson', 'warped', 'mangrove', 'bamboo']
  // item -> pattern
  var SHAPES = [
    ['chest', 'sophisticatedstorage:chest', ['PPP', 'PLP', 'PPP'], false],
    ['barrel', 'sophisticatedstorage:barrel', ['PSP', 'PLP', 'PSP'], true],
    ['limited_barrel_1', 'sophisticatedstorage:limited_barrel_1', ['PSP', 'PLP', 'PPP'], true],
    ['limited_barrel_2', 'sophisticatedstorage:limited_barrel_2', ['PPP', 'SLS', 'PPP'], true],
    ['limited_barrel_3', 'sophisticatedstorage:limited_barrel_3', ['PSP', 'PLP', 'SPS'], true],
    ['limited_barrel_4', 'sophisticatedstorage:limited_barrel_4', ['SPS', 'PLP', 'SPS'], true]
  ]
  function cond(item) { return [{ type: 'sophisticatedcore:item_enabled', itemRegistryName: item }] }
  function add(id, item, pattern, key, wood) {
    event.custom({
      'neoforge:conditions': cond(item), type: 'minecraft:crafting_shaped', category: 'misc', pattern: pattern, key: key,
      result: { id: item, count: 1, components: { 'sophisticatedstorage:wood_type': wood } }
    }).id(id)
  }

  // 1) exact recipes for the generic woods
  WOODS.forEach(function (w) {
    var name = w[0].replace(':', '_')
    SHAPES.forEach(function (s) {
      var key = { L: { tag: 'storagedrawers:basic_drawers' }, P: { item: w[1] } }
      if (s[3]) key.S = { item: w[2] }
      add('recipeqa:storage_wood/' + name + '_' + s[0], s[1], s[2], key, w[0])
    })
  })

  // 2) the generic recipes become plain fallbacks for every other planks type (default wood, as in Sophisticated Storage)
  var excluded = []
  VANILLA_PLANKS.forEach(function (v) { excluded.push({ item: 'minecraft:' + v + '_planks' }) })
  WOODS.forEach(function (w) { excluded.push({ item: w[1] }) })
  var excludedSlabs = []
  VANILLA_PLANKS.forEach(function (v) { excludedSlabs.push({ item: 'minecraft:' + v + '_slab' }) })
  WOODS.forEach(function (w) { excludedSlabs.push({ item: w[2] }) })
  var planksLeft = { type: 'neoforge:difference', base: { tag: 'minecraft:planks' }, subtracted: excluded }
  var slabsLeft = { type: 'neoforge:difference', base: { tag: 'minecraft:wooden_slabs' }, subtracted: excludedSlabs }
  SHAPES.forEach(function (s) {
    var id = 'sophisticatedstorage:generic_' + s[0]
    var key = { L: { tag: 'storagedrawers:basic_drawers' }, P: planksLeft }
    if (s[3]) key.S = slabsLeft
    event.remove({ id: id })
    add(id, s[1], s[2], key, s[3] ? 'spruce' : 'oak')
  })
})
