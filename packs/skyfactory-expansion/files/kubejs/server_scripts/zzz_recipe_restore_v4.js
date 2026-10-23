// recipe-restore v4 (Update 16): original SF3 / Hexxit II routes the ports dropped (guide v4 coverage port gaps).
// Source of each recipe is in the comment. Items the gate listed that already have a working route are in
// progression\gap-audit\V4-ROUTES.md (for the guide), not here.
ServerEvents.recipes(event => {
  let has = id => Item.exists(id)

  // Blood Magic 2.1.11 ModRecipes: recipes the port's generator missed (registered in code, not in the SF3 recipe dump).
  if (has('bloodmagic:sigil_fast_miner')) {
    // AlchemyArrayRecipeRegistry.registerCraftingRecipe(REAGENT_FASTMINER, SLATE:1 (reinforced), SIGIL_FAST_MINER)
    event.custom({ type: 'bloodmagic:alchemy_array', input: { item: 'bloodmagic:reagent_fast_miner' }, catalyst: { item: 'bloodmagic:slate_reinforced' },
      effect: { type: 'crafting', result: { id: 'bloodmagic:sigil_fast_miner', count: 1 } },
      circle: { textures: ['bloodmagic:textures/models/alchemy_arrays/fast_miner_sigil.png'] } }).id('recipeqa:restore/bloodmagic/sigil_fast_miner')
  }
  if (has('bloodmagic:ritual_diviner_dawn')) {
    // ShapedOreRecipe(RITUAL_DIVINER:1, " S ", "tdt", " S ", S = SLATE:3 (demonic), t = DUSK scribe (inscription tool), d = RITUAL_DIVINER)
    event.shaped('bloodmagic:ritual_diviner_dawn', [' S ', 'tdt', ' S '], { S: 'bloodmagic:slate_demonic', t: 'bloodmagic:inscription_tool_dusk', d: 'bloodmagic:ritual_diviner' })
      .id('recipeqa:restore/bloodmagic/ritual_diviner_dawn')
  }
  let table = (out, n, lp, ticks, tier, ings, id) => event.custom({ type: 'bloodmagic:alchemy_table', lp: lp, ticks: ticks, tier: tier,
    ingredients: ings, result: { id: out, count: n } }).id('recipeqa:restore/bloodmagic/' + id)
  // Iron / gold sand: SF3 registered them as dustIron / dustGold, so the port's alchemy_table_72/73 (ore + cutting fluid) already give
  // the unified iron / gold dust. Not re-added (it would duplicate those recipes). Coal sand had no such stand-in.
  if (has('bloodmagic:coal_sand')) {
    // AlchemyTableCustomRecipe(SAND_COAL x4, 100 LP, 100 t, tier 1, coal, coal, flint); the port's BMEvents already makes it a furnace fuel
    table('bloodmagic:coal_sand', 4, 100, 100, 1, [{ item: 'minecraft:coal' }, { item: 'minecraft:coal' }, { item: 'minecraft:flint' }], 'coal_sand')
  }

  // Reliquary 1.12.2-1.3.5 XRRecipes.register: the Alkahestry Tome (shapeless, nine mob ingredients and a book).
  if (has('xreliquary:alkahestry_tome')) {
    event.shapeless('xreliquary:alkahestry_tome', ['xreliquary:molten_core', 'xreliquary:witch_hat', 'xreliquary:eye_of_the_storm',
      'xreliquary:catalyzing_gland', 'minecraft:book', 'xreliquary:slime_pearl', 'xreliquary:chelicerae', 'minecraft:wither_skeleton_skull',
      'xreliquary:nebulous_heart']).id('recipeqa:restore/xreliquary/alkahestry_tome')
  }

  // Extra Utilities 2 (SF3): Redstone Glass = Resonator on Thickened Glass (TileResonator.resonatorRecipes, 100 GP).
  // Thickened Glass is not in this pack (euru's own recipe wants angel_utilities:thickened_glass, also absent), so plain glass stands in.
  if (has('extrautils2:redstone_glass')) {
    event.custom({ type: 'euru:resonator_recipe_type', ingredients: [{ item: 'minecraft:glass' }], outputs: [{ id: 'extrautils2:redstone_glass', count: 1 }],
      strings: ['euru:resonator', 'minecraft:glass'] }).id('recipeqa:restore/extrautils2/redstone_glass')
  }

  // Fish's Undead Rising 1.12.2-1.5.2-hex AddRecipes.addSmelting: furnace, 0.35 xp (the port registered none).
  let fur = [[['mod_lavacow:parasite_item0', 'mod_lavacow:parasite_item1', 'mod_lavacow:parasite_item2'], 'mod_lavacow:parasite_item_cooked', 1],
    [['mod_lavacow:piranha'], 'mod_lavacow:piranha_cooked', 1], [['mod_lavacow:cheirolepis'], 'mod_lavacow:cheirolepis_cooked', 1],
    [['mod_lavacow:mousse'], 'mod_lavacow:meatball', 4], [['mod_lavacow:mimic_claw'], 'mod_lavacow:mimic_claw_cooked', 1],
    [['mod_lavacow:ptera_wing0', 'mod_lavacow:ptera_wing1', 'mod_lavacow:ptera_wing2', 'mod_lavacow:ptera_wing3'], 'mod_lavacow:ptera_wing_cooked', 1],
    [['mod_lavacow:zombiepiranha_item'], 'mod_lavacow:zombiepiranha_item_cooked', 1],
    [['mod_lavacow:enigmoth_larva_item'], 'mod_lavacow:enigmoth_larva_item_cooked', 1], [['mod_lavacow:lamprey'], 'mod_lavacow:lamprey_cooked', 1]]
  fur.forEach(f => {
    let ins = f[0].filter(i => has(i))
    if (ins.length && has(f[1])) event.smelting(Item.of(f[1], f[2]), ins).xp(0.35).id('recipeqa:restore/mod_lavacow/' + f[1].split(':')[1] + '_smelting')
  })
  // AddRecipes.addBrewing: brewing-stand recipes. KubeJS here has no brewing hook, so the same ingredients craft it shapeless
  // (the potion must have the named base potion; neoforge:components matches it).
  let potion = p => ({ type: 'neoforge:components', items: 'minecraft:potion', components: { 'minecraft:potion_contents': { potion: p } } })
  let brew = (base, ing, out) => {
    if (has(ing) && has(out)) event.custom({ type: 'minecraft:crafting_shapeless', category: 'misc', ingredients: [base, { item: ing }],
      result: { id: out, count: 1 } }).id('recipeqa:restore/mod_lavacow/' + out.split(':')[1])
  }
  brew(potion('minecraft:awkward'), 'mod_lavacow:pheromone_gland', 'mod_lavacow:charming_catalyst')
  brew(potion('minecraft:strong_regeneration'), 'mod_lavacow:hyphae', 'mod_lavacow:fissionpotion')
  brew(potion('minecraft:awkward'), 'mod_lavacow:holy_sludge', 'mod_lavacow:holy_water')
  brew({ item: 'mod_lavacow:fissionpotion' }, 'mod_lavacow:mootenheart', 'mod_lavacow:potion_of_mooten_lava')

  // Project Vibrant Journeys 1.12.2-1.6.4 PVJCrafting: furnace, 0.35 xp. (Squids dropping raw squid is a loot modifier, see kubejs/data.)
  ;[['pvj:raw_squid', 'pvj:cooked_squid'], ['pvj:raw_duck', 'pvj:cooked_duck'], ['pvj:clam', 'pvj:steamed_clam_meat']].forEach(p => {
    if (has(p[0]) && has(p[1])) event.smelting(p[1], p[0]).xp(0.35).id('recipeqa:restore/pvj/' + p[1].split(':')[1] + '_smelting')
  })

  // Simple Corn 2.2.0 MyRecipeFireworks: popcorn fireworks make Pop Fireworks, not vanilla rockets (sf3extras data had the wrong result).
  if (has('sf3extras:pop_firework')) {
    event.remove({ id: 'sf3extras:pop_firework' })
    event.shapeless(Item.of('sf3extras:pop_firework', 3), ['minecraft:paper', 'minecraft:gunpowder', 'sf3extras:popcorn']).id('recipeqa:restore/sf3extras/pop_firework')
  }
})
