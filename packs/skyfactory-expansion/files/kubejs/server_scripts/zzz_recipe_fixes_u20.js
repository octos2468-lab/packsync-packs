// recipe-restore (Update 20): SF3 routes still missing. The jar recipe regressions (sf3extras, AA, DE) are fixed in the jars
// themselves (update20-pending/recipes/mods). Static analysis, no boot while players are online: see the README next to it.
ServerEvents.recipes(event => {
  let has = id => Item.exists(id)

  // 1) Extreme Reactors dusts: SF3 crushed reactor ingots (IE Crusher, Ender IO SAG Mill, AA Crusher); the port has no recipe making them.
  ;['yellorium', 'cyanite', 'graphite', 'blutonium', 'ludicrite'].forEach(m => {
    let ingot = 'bigreactors:' + m + '_ingot', dust = 'bigreactors:' + m + '_dust'
    if (!has(ingot) || !has(dust)) return
    event.custom({ type: 'immersiveengineering:crusher', input: { item: ingot }, result: { basePredicate: { item: dust }, count: 1 }, energy: 3000 })
      .id('recipeqa:restore/bigreactors/' + m + '_dust_crusher')
    event.custom({ type: 'enderio:sag_milling', input: { ingredient: { item: ingot } }, outputs: [{ result: { id: dust } }], energy: 2400 })
      .id('recipeqa:restore/bigreactors/' + m + '_dust_sag')
    event.custom({ type: 'actuallyadditions:crushing', ingredient: { item: ingot }, result: [{ result: { id: dust, count: 1 } }, { result: {}, chance: 0.0 }] })
      .id('recipeqa:restore/bigreactors/' + m + '_dust_crushing')
  })

  // 2) Random Things 3.7.7 (SF3): Stable Ender Pearl = obsidian corners, lapis sides, ender pearl centre. The port has no recipe,
  //    yet it is the key part of the Ender Anchor / Bridge, Player Interface, Redstone Remote and redstone interfaces.
  if (has('randomthings:stable_enderpearl')) {
    event.shaped('randomthings:stable_enderpearl', ['OLO', 'LEL', 'OLO'], { O: 'minecraft:obsidian', L: '#c:gems/lapis', E: 'minecraft:ender_pearl' })
      .id('recipeqa:restore/randomthings/stable_enderpearl')
  }

  // 3) Extra Utilities 2 (SF3) glass made from Thickened Glass, which this pack does not have (same stand-in as Redstone Glass):
  //    Dark Glass = 2 thickened glass + black dye -> 2, Glowing Glass = 2 thickened glass + glowstone dust -> 2 (plain glass stands in).
  //    Ineffable Glass = 8 thickened glass around a moon stone; with plain glass that is exactly the Ethereal Glass recipe, so it is a
  //    stonecutter step from Ethereal Glass instead (same moon-stone gate).
  if (has('extrautils2:dark_glass')) event.shapeless(Item.of('extrautils2:dark_glass', 2), ['#c:glass_blocks/colorless', '#c:dyes/black', '#c:glass_blocks/colorless']).id('recipeqa:restore/extrautils2/dark_glass')
  if (has('extrautils2:glowing_glass')) event.shapeless(Item.of('extrautils2:glowing_glass', 2), ['#c:glass_blocks/colorless', '#c:dusts/glowstone', '#c:glass_blocks/colorless']).id('recipeqa:restore/extrautils2/glowing_glass')
  if (has('extrautils2:ineffable_glass') && has('extrautils2:ethereal_glass')) event.stonecutting('extrautils2:ineffable_glass', 'extrautils2:ethereal_glass').id('recipeqa:restore/extrautils2/ineffable_glass')

  // 4) Extra Utilities 2 (SF3): Rainbow Stone = Resonator on Stoneburnt (decorativesolid:3, now euru:stone_burnt).
  if (has('extrautils2:rainbow_stone') && has('euru:stone_burnt')) {
    event.custom({ type: 'euru:resonator_recipe_type', ingredients: [{ item: 'euru:stone_burnt' }], outputs: [{ id: 'extrautils2:rainbow_stone', count: 1 }],
      strings: ['euru:resonator', 'euru:stone_burnt'] }).id('recipeqa:restore/extrautils2/rainbow_stone')
  }
})
