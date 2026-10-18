// Port gaps found by the progression solver (PROGRESSION-GAPS.md). SF3 originals restored; ids are new so nothing is overwritten.
ServerEvents.recipes(event => {
  // Quantum DSU (SF3 script): the candidate's sf3_recipes.js used enderio:void_chassis, which the Ender IO port does not have (it is enderio:machine_chassis).
  event.remove({ id: 'quantumstorage:quantumdsu' })
  event.shaped('quantumstorage:quantumdsu', ['EOE', 'OCO', 'IOI'], {
    E: 'minecraft:ender_pearl', O: 'ironchest:obsidian_chest', C: 'enderio:machine_chassis', I: 'minecraft:iron_ingot'
  }).id('progression:fix/quantumdsu')

  // XU2 Golden Lasso as SF3 had it: gold nuggets and string (euru's own recipe needs euru:nuggeto_experience, which has no source).
  event.remove({ id: 'euru:golden_lasso_recipe' })
  event.shaped('euru:golden_lasso', ['GSG', 'S S', 'GSG'], { G: '#c:nuggets/gold', S: '#c:strings' }).id('progression:fix/golden_lasso')

  // XU2 Angel Block as SF3 had it (also angel_utilities' recipe): gold ingot over feather-obsidian-feather. euru's own needs euru:nuggeto_experience.
  event.remove({ id: 'euru:angel_block_recipe' })
  event.shaped('euru:angel_block', [' G ', 'FOF', '   '], { G: '#c:ingots/gold', F: 'minecraft:feather', O: 'minecraft:obsidian' }).id('progression:fix/angel_block')

  // PACK DECISION (not an SF3 recipe): Psi's CAD core needs Psidust, and Psidust is only made with a CAD (ItemCAD.craft), so the
  // original has no way in. Bootstrap: 3 redstone + an ender pearl give 3 Psidust; after the first CAD the in-world redstone craft takes over.
  event.shapeless(Item.of('psi:psidust', 3), ['minecraft:redstone', 'minecraft:redstone', 'minecraft:redstone', 'minecraft:ender_pearl']).id('progression:fix/psidust_bootstrap')
})

// Ex Deorum -> Ex Nihilo Adscensio swap (pre-release audit 2026-10-18): routes that still pointed at Ex Deorum items. Each block only
// runs when the Ex Deorum item is gone, so a pack that still has Ex Deorum is unchanged.
ServerEvents.recipes(event => {
  if (!Item.exists('exdeorum:compressed_cobblestone')) {
    // zz_sf3_recipe_conflicts.js removes euru:cc_recipe in favour of the Ex Deorum block; without it compressed cobblestone (Beneath
    // teleporter, stone spikes, the compression ladder) had no recipe. Restores the Extra Utilities 9-cobblestone recipe.
    event.shaped('euru:compressed_cobblestone', ['###', '###', '###'], { '#': 'minecraft:cobblestone' }).id('progression:restore/euru_compressed_cobblestone')
    if (Item.exists('excompressum:compressed_cobblestone')) {
      event.stonecutting('excompressum:compressed_cobblestone', 'euru:compressed_cobblestone').id('progression:restore/excompressum_from_euru_compressed_cobblestone')
      event.stonecutting('euru:compressed_cobblestone', 'excompressum:compressed_cobblestone').id('progression:restore/euru_from_excompressum_compressed_cobblestone')
    }
  }
  // sf3:script/porcelain_brick_from_exdeorum smelted the Ex Deorum clay ball into a porcelain brick; same for the Ex Nihilo porcelain clay
  if (!Item.exists('exdeorum:porcelain_clay_ball') && Item.exists('exnihiloadscensio:porcelain_clay')) {
    event.smelting('sf3extras:porcelain_brick', 'exnihiloadscensio:porcelain_clay').xp(0.1).id('progression:restore/porcelain_brick_from_exnihilo')
  }
})
ServerEvents.tags('item', event => {
  // sf3extras porcelain (porcelain bricks, faucet, barrels) is made from #sf3extras:porcelain_clay, which listed the Ex Deorum clay ball
  if (!Item.exists('exdeorum:porcelain_clay_ball') && Item.exists('exnihiloadscensio:porcelain_clay')) event.add('sf3extras:porcelain_clay', 'exnihiloadscensio:porcelain_clay')
  // Ender IO remote awareness upgrade (inventory panel and chests) uses #exdeorum:end_cake_materials, an eye of ender in Ex Deorum
  if (!Item.exists('exdeorum:porcelain_clay_ball')) event.add('exdeorum:end_cake_materials', 'minecraft:ender_eye')
})

// BALANCE DECISION (coordinator, 2026-10-18): the Entropic lens (botania:lens meta 11) needs a Gaia Spirit (mana_resource meta 5), so the
// Entropic + Power composite mana blaster (33-67 sustained DPS, BALANCE-MEASURED 14e) cannot exist before Gaia (Age 6). The rest of the
// mana blaster and its lenses stay as in SF3.
ServerEvents.recipes(event => {
  event.remove({ id: 'botania:shapeless/lens_11' })
  event.custom({
    type: 'minecraft:crafting_shapeless', category: 'misc',
    ingredients: [
      { item: 'botania:lens', meta: 0, type: 'botania:stack' },
      { ore: 'runeEnvyB', type: 'botania:ore' },
      { item: 'botania:mana_resource', meta: 5, type: 'botania:stack' }
    ],
    result: { id: 'botania:lens', count: 1, components: { 'minecraft:custom_model_data': 11, 'minecraft:custom_data': { meta: 11 } } }
  }).id('progression:balance/botania_entropic_lens_gaia')
})
