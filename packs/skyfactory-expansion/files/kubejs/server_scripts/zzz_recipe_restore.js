// recipe-restore (Update 12): recipes 1.12 mods generated in code and the 1.21.1 ports lost.
// Ex Compressum: every compressed block is 9 of its base block, and splits back into 9 (SF3 3.0.22 had all of these).
// Cobblestone keeps the euru 9-cobblestone recipe (zz_progression_fixes.js) and the stonecutter bridge; only the split is added here.
ServerEvents.recipes(event => {
  let compress = (block, base, pack) => {
    if (!Item.exists(block) || !Item.exists(base)) return
    let n = block.split(':')[1]
    if (pack) event.shaped(block, ['###', '###', '###'], { '#': base }).id('recipeqa:restore/excompressum/' + n + '_compress')
    event.shapeless(Item.of(base, 9), [block]).id('recipeqa:restore/excompressum/' + n + '_decompress')
  }
  compress('excompressum:compressed_cobblestone', 'minecraft:cobblestone', false)
  compress('excompressum:compressed_dirt', 'minecraft:dirt', true)
  compress('excompressum:compressed_gravel', 'minecraft:gravel', true)
  compress('excompressum:compressed_sand', 'minecraft:sand', true)
  compress('excompressum:compressed_dust', 'exnihiloadscensio:dust', true)
  compress('excompressum:compressed_netherrack', 'minecraft:netherrack', true)
  compress('excompressum:compressed_end_stone', 'minecraft:end_stone', true)
  compress('excompressum:compressed_nether_gravel', 'exnihiloadscensio:crushed_netherrack', true)
  compress('excompressum:compressed_ender_gravel', 'exnihiloadscensio:crushed_endstone', true)
  compress('excompressum:compressed_soul_sand', 'minecraft:soul_sand', true)
  // The jar's own dust/soul sand/nether/ender gravel recipes are replaced by the restore ids above (same recipe, one copy).
  ;['compressed_dust', 'compressed_nether_gravel', 'compressed_ender_gravel', 'compressed_soul_sand'].forEach(n => {
    event.remove({ id: 'excompressum:' + n + '_compress' })
    event.remove({ id: 'excompressum:' + n + '_decompress' })
  })

  // Random Things blocks (sf3extras rt_*): SF3 3.0.22 crafting recipes, unchanged.
  let rt = (out, rows, key) => { if (Item.exists(out)) event.shaped(out, rows, key).id('recipeqa:restore/randomthings/' + out.split(':')[1]) }
  rt('sf3extras:rt_super_lubricent_ice', ['S', 'I', 'W'], { S: '#c:slime_balls', I: 'minecraft:ice', W: 'minecraft:water_bucket' })
  rt('sf3extras:rt_super_lubricent_platform', ['LLL', ' E '], { L: 'sf3extras:rt_super_lubricent_ice', E: 'minecraft:ender_pearl' })
  rt('sf3extras:rt_filtered_super_lubricent_platform', [' P ', ' L ', ' S '], { P: 'minecraft:paper', L: 'sf3extras:rt_super_lubricent_platform', S: 'minecraft:string' })
  rt('sf3extras:rt_item_corrector', ['ILI', 'CCC', 'CCC'], { I: '#c:ingots/iron', L: 'sf3extras:rt_super_lubricent_ice', C: '#c:cobblestones' })
  rt('sf3extras:rt_item_rejuvenator', ['WLW', 'CCC', 'CCC'], { W: '#minecraft:wool', L: 'sf3extras:rt_super_lubricent_ice', C: '#c:cobblestones' })
  rt('sf3extras:rt_item_sealer', ['ALA', 'CCC', 'CCC'], { A: '#c:gems/lapis', L: 'sf3extras:rt_super_lubricent_ice', C: '#c:cobblestones' })
  rt('sf3extras:rt_item_redirector', ['OOO', 'GER', 'OLO'], { O: '#c:obsidians', G: '#c:dyes/green', E: 'minecraft:ender_pearl', R: '#c:dyes/red', L: 'sf3extras:rt_super_lubricent_ice' })
  rt('sf3extras:rt_item_filtered_redirector', [' P ', ' R ', ' S '], { P: 'minecraft:paper', R: 'sf3extras:rt_item_redirector', S: 'minecraft:string' })

  // Mystical Agriculture: the jar's Botania/Chisel recipes name 1.21 ids (botania:manasteel_ingot, chisel:marble/raw) that the
  // 1.12 ports don't have, so their item_exists conditions dropped them. SF3 used mana_resource meta 0/4 and raw marble (variation 7).
  if (Item.exists('botania:mana_resource')) {
    let mana = meta => ({ type: 'botania:stack', item: 'botania:mana_resource', meta: meta })
    let seeds = (out, a, b, c) => event.custom({ type: 'minecraft:crafting_shaped', category: 'misc', pattern: ['ABA', 'BCB', 'ABA'],
      key: { A: a, B: { item: b }, C: { item: c } }, result: { id: out, count: 1 } }).id('recipeqa:restore/mysticalagriculture/' + out.split(':')[1])
    let ring = (ess, result, n) => event.custom({ type: 'minecraft:crafting_shaped', category: 'misc', pattern: ['AAA', 'A A', 'AAA'],
      key: { A: { item: ess } }, result: result }).id('recipeqa:restore/mysticalagriculture/' + n)
    seeds('mysticalagriculture:manasteel_seeds', mana(0), 'mysticalagriculture:intermedium_essence', 'mysticalagriculture:tier3_crafting_seed')
    seeds('mysticalagriculture:terrasteel_seeds', mana(4), 'mysticalagriculture:supremium_essence', 'mysticalagriculture:tier5_crafting_seed')
    ring('mysticalagriculture:manasteel_essence', { id: 'botania:mana_resource', count: 5 }, 'manasteel_ingot')
    ring('mysticalagriculture:terrasteel_essence', { id: 'botania:mana_resource', count: 2, components: { 'minecraft:custom_model_data': 4, 'minecraft:custom_data': { meta: 4 } } }, 'terrasteel_ingot')
  }
  if (Item.exists('chisel:marbleextra')) {
    event.shaped('mysticalagriculture:marble_seeds', ['ABA', 'BCB', 'ABA'], { A: '#chisel:ore/stonemarble', B: 'mysticalagriculture:prudentium_essence', C: 'mysticalagriculture:tier2_crafting_seed' })
      .id('recipeqa:restore/mysticalagriculture/marble_seeds')
    event.custom({ type: 'minecraft:crafting_shaped', category: 'misc', pattern: ['AAA', 'A A', 'AAA'], key: { A: { item: 'mysticalagriculture:marble_essence' } },
      result: { id: 'chisel:marbleextra', count: 24, components: { 'minecraft:custom_model_data': 7 } } }).id('recipeqa:restore/mysticalagriculture/marble')
  }

  // Immersive Engineering: HOP graphite ingot from its dust (SF3 smelted it; modern IE only goes ingot -> dust).
  if (Item.exists('immersiveengineering:ingot_hop_graphite')) {
    event.smelting('immersiveengineering:ingot_hop_graphite', '#c:dusts/hop_graphite').xp(0.5).id('recipeqa:restore/immersiveengineering/ingot_hop_graphite_smelting')
    event.blasting('immersiveengineering:ingot_hop_graphite', '#c:dusts/hop_graphite').xp(0.5).id('recipeqa:restore/immersiveengineering/ingot_hop_graphite_blasting')
  }
})
