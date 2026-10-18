// SkyFactory 3.0.22 CraftTweaker scripts (scripts/*.zs) ported to KubeJS for the 1.21.1 pack.
// Only recipes whose items exist in 1.21 are ported; each block cites the original script.
// Items are checked with Item.exists so a missing optional mod never breaks the whole file.

const has = id => id.startsWith('#') || Item.exists(id)
const allHave = ids => ids.every(has)

// sf3:* recipes that clash with another mod's recipe; zz_sf3_recipe_conflicts.js adds their replacements.
// The list between the markers is written by tools/gen_recipe_conflict_fixes.py.
// CONFLICT-SKIP-BEGIN
const conflictSkip = ["sf3:bucket_copper", "sf3:charset_barrel", "sf3:charset_graphite", "sf3:charset_shelf", "sf3:sticks"]
// CONFLICT-SKIP-END
const skipped = id => conflictSkip.indexOf('sf3:' + id) >= 0

ServerEvents.recipes(event => {
  const shaped = (out, pattern, key, id) => {
    const ids = Object.values(key)
    if (skipped(id)) return
    if (!allHave(ids) || !has(String(out).replace(/^\d+x /, ''))) return
    event.shaped(out, pattern, key).id('sf3:' + id)
  }
  const shapeless = (out, ins, id) => {
    if (skipped(id)) return
    if (!allHave(ins) || !has(String(out).replace(/^\d+x /, ''))) return
    event.shapeless(out, ins).id('sf3:' + id)
  }
  const smelt = (out, input, id) => {
    if (!has(input) || !has(String(out).replace(/^\d+x /, ''))) return
    event.smelting(out, input).id('sf3:' + id)
  }

  // ---- shapedrecipes.zs: Ex Nihilo meshes (Ex Deorum equivalents)

  // Decorative crafting tables: Random Things and Natura reused the vanilla 2x2-planks shape, so a
  // normal crafting table could never be made from those planks. They now take a crafting table + plank.
  ;['oak', 'spruce', 'birch', 'jungle', 'acacia', 'dark_oak', 'mangrove', 'cherry', 'bamboo', 'crimson', 'warped'].forEach(wood => {
    event.remove({ id: 'randomthings:custom_crafting_table_' + wood })
    shapeless('randomthings:custom_crafting_table_' + wood, ['minecraft:crafting_table', 'minecraft:' + wood + '_planks'], 'custom_crafting_table_' + wood)
  })
  ;['maple', 'silverbell', 'amaranth', 'tiger', 'willow', 'eucalyptus', 'hopseed', 'sakura', 'redwood', 'ghostwood', 'bloodwood', 'fusewood', 'darkwood'].forEach(wood => {
    event.remove({ id: 'natura:' + wood + '_workbench' })
    shapeless('natura:' + wood + '_workbench', ['minecraft:crafting_table', 'natura:' + wood + '_planks'], 'natura_' + wood + '_workbench')
  })

  // Watering can progression: Tiny Progressions can needs the Extra Utilities can
  event.remove({ id: 'sf3extras:watering_can' })
  shaped('sf3extras:watering_can', ['IB ', 'IWI', ' I '], { I: 'minecraft:iron_ingot', B: 'minecraft:bone_meal', W: 'euru:watering_can' }, 'watering_can')

  // Sponge recipes
  shaped('minecraft:sponge', ['YCY', 'CSC', 'YCY'], { Y: 'minecraft:yellow_wool', C: 'excompressum:wood_chippings', S: 'minecraft:slime_block' }, 'sponge_chippings')
  shaped('excompressum:chicken_stick', [' C ', ' SC', 'S  '], { C: 'minecraft:chicken', S: 'minecraft:stick' }, 'chicken_stick')

  // Harder recipes
  event.remove({ id: 'draconicevolution:machines/grinder' })
  shaped('draconicevolution:grinder', ['ASA', 'SWS', 'AGA'], { A: 'draconicevolution:awakened_draconium_ingot', S: 'minecraft:diamond_sword', W: 'draconicevolution:wyvern_core', G: 'draconicevolution:generator' }, 'grinder')

  // More metals for buckets
  for (const m of ['aluminum', 'copper', 'lead']) shaped('minecraft:bucket', ['M M', ' M '], { M: '#c:ingots/' + m }, 'bucket_' + m)

  // Master Infusion Crystal with Epic Bacon
  event.remove({ id: 'mysticalagriculture:master_infusion_crystal' })
  shaped('mysticalagriculture:master_infusion_crystal', ['SBS', 'BIB', 'SNS'], { S: 'mysticalagriculture:supremium_essence', B: 'harvestcraft:epicbaconitem',
    I: 'mysticalagriculture:infusion_crystal', N: 'minecraft:nether_star' }, 'master_infusion_crystal')

  // Simple Generators without Dragon's Breath (IE plates; RFTools machine frame)
  for (const g of ['furnace_generator', 'ender_generator', 'culinary_generator', 'lava_generator', 'furnace_generator_2', 'ender_generator_2', 'culinary_generator_2', 'lava_generator_2'])
    event.remove({ id: 'sf3extras:' + g })
  shaped('sf3extras:furnace_generator', ['PIP', 'IFI', 'PRP'], { P: 'immersiveengineering:plate_iron', I: 'minecraft:iron_ingot', F: 'minecraft:furnace', R: 'minecraft:redstone_block' }, 'furnace_generator_iron')
  shaped('sf3extras:furnace_generator', ['PAP', 'AFA', 'PRP'], { P: 'immersiveengineering:plate_aluminum', A: 'immersiveengineering:ingot_aluminum', F: 'minecraft:furnace', R: 'minecraft:redstone_block' }, 'furnace_generator_aluminum')
  shaped('sf3extras:culinary_generator', ['PFP', 'OMH', 'PRP'], { P: 'immersiveengineering:plate_iron', F: 'minecraft:flint_and_steel', O: 'minecraft:fishing_rod', M: 'rftools:machine_frame', H: 'minecraft:iron_hoe', R: 'minecraft:redstone_block' }, 'culinary_generator_iron')
  shaped('sf3extras:culinary_generator', ['PFP', 'OMH', 'PRP'], { P: 'immersiveengineering:plate_aluminum', F: 'minecraft:flint_and_steel', O: 'minecraft:fishing_rod', M: 'rftools:machine_frame', H: 'minecraft:iron_hoe', R: 'minecraft:redstone_block' }, 'culinary_generator_aluminum')
  shaped('sf3extras:ender_generator', ['PEP', 'EME', 'PRP'], { P: 'immersiveengineering:plate_electrum', E: 'minecraft:ender_eye', M: 'rftools:machine_frame', R: 'minecraft:redstone_block' }, 'ender_generator')
  shaped('sf3extras:lava_generator', ['PCP', 'CMC', 'PRP'], { P: 'immersiveengineering:plate_electrum', C: '#c:ingots/copper', M: 'rftools:machine_frame', R: 'minecraft:redstone_block' }, 'lava_generator')
  for (const g of ['furnace_generator', 'ender_generator', 'culinary_generator', 'lava_generator'])
    shaped('sf3extras:' + g + '_2', ['GGG', 'GVG', 'GGG'], { G: 'sf3extras:' + g, V: 'enderio:vibrant_crystal' }, g + '_2')

  // Slime dirt (Tinkers' Construct 3 slime colours)
  shaped('tconstruct:earth_slime_dirt', ['SSS', 'SDS', 'SSS'], { S: 'minecraft:slime_ball', D: 'minecraft:dirt' }, 'earth_slime_dirt')
  shaped('tconstruct:sky_slime_dirt', ['SSS', 'SDS', 'SSS'], { S: 'tconstruct:sky_slime_ball', D: 'minecraft:dirt' }, 'sky_slime_dirt')
  shaped('tconstruct:ender_slime_dirt', ['SSS', 'SDS', 'SSS'], { S: 'tconstruct:ender_slime_ball', D: 'minecraft:dirt' }, 'ender_slime_dirt')
  shaped('tconstruct:ichor_slime_dirt', ['SSS', 'SDS', 'SSS'], { S: 'tconstruct:ichor_slime_ball', D: 'minecraft:dirt' }, 'ichor_slime_dirt')
  shapeless('tconstruct:sky_slime_vine', ['tconstruct:sky_slime_leaves', 'tconstruct:sky_slime_leaves', 'tconstruct:sky_slime_leaves', 'tconstruct:sky_slime_leaves'], 'blue_slime_vine')
  shapeless('tconstruct:ender_slime_vine', ['tconstruct:ender_slime_leaves', 'tconstruct:ender_slime_leaves', 'tconstruct:ender_slime_leaves', 'tconstruct:ender_slime_leaves'], 'purple_slime_vine')

  // Mob Grinding Utils changes
  event.remove({ id: 'mob_grinding_utils:recipe_absorption_hopper' })
  shaped('mob_grinding_utils:absorption_hopper', [' E ', ' O ', 'OHO'], { E: 'minecraft:ender_eye', O: 'minecraft:obsidian', H: 'minecraft:hopper' }, 'absorption_hopper')
  event.remove({ id: 'mob_grinding_utils:recipe_spikes' })
  shaped('4x mob_grinding_utils:spikes', [' S ', 'SIS'], { S: 'minecraft:iron_sword', I: 'minecraft:iron_block' }, 'spikes')
  ;['recipe_tank', 'recipe_tank_reset', 'recipe_tank_sink', 'recipe_tank_sink_reset'].forEach(id => event.remove({ id: 'mob_grinding_utils:' + id }))
  shaped('mob_grinding_utils:tank', ['IGI', 'GGG', 'IGI'], { I: 'minecraft:iron_ingot', G: 'minecraft:glass' }, 'tank')
  event.remove({ id: 'mob_grinding_utils:recipe_fan' })
  shaped('mob_grinding_utils:fan', ['SIS', 'IRI', 'SIS'], { S: 'minecraft:stone_slab', I: 'minecraft:iron_ingot', R: 'minecraft:redstone' }, 'fan')
  event.remove({ id: 'mob_grinding_utils:recipe_mob_swab' })
  shaped('mob_grinding_utils:mob_swab', ['  W', ' S ', 'W  '], { W: '#minecraft:wool', S: 'minecraft:stick' }, 'mob_swab')
  event.remove({ id: 'mob_grinding_utils:recipe_absorbtion_upgrade' })
  shaped('mob_grinding_utils:absorption_upgrade', ['OEO', 'ERE', 'OEO'], { O: 'minecraft:obsidian', E: 'minecraft:ender_pearl', R: 'minecraft:redstone_block' }, 'absorption_upgrade')
  const saw = { saw_upgrade_sharpness: 'minecraft:iron_sword', saw_upgrade_looting: 'minecraft:lapis_lazuli', saw_upgrade_fire: 'minecraft:flint_and_steel',
    saw_upgrade_smite: 'minecraft:rotten_flesh', saw_upgrade_arthropod: 'minecraft:spider_eye' }
  for (const [u, item] of Object.entries(saw)) {
    event.remove({ id: 'mob_grinding_utils:recipe_' + u })
    shaped('mob_grinding_utils:' + u, ['NXN', 'XRX', 'NXN'], { N: 'minecraft:gold_nugget', X: item, R: 'minecraft:redstone_block' }, u)
  }
  event.remove({ id: 'mob_grinding_utils:recipe_saw_upgrade_beheading' })
  shaped('mob_grinding_utils:saw_upgrade_beheading', ['NGN', 'IRI', 'NGN'], { N: 'minecraft:gold_nugget', G: 'minecraft:golden_helmet', I: 'minecraft:iron_helmet', R: 'minecraft:redstone_block' }, 'saw_upgrade_beheading')
  event.remove({ id: 'mob_grinding_utils:recipe_saw' })
  shaped('mob_grinding_utils:saw', ['DMD', 'MRG', 'III'], { D: 'xu2blocks:diamond_spike', M: 'mob_grinding_utils:spikes', R: 'enderio:vibrant_crystal', G: 'euru:redstone_gear', I: 'minecraft:iron_block' }, 'saw')

  // The Beneath teleporter (compressed cobblestone; wither roses stand in for Dark Utilities' removed wither dust)
  event.remove({ id: 'sf3extras:beneath_teleporter' })
  shaped('sf3extras:beneath_teleporter', ['QWQ', 'W5W', 'QWQ'], { Q: 'euru:quadruple_compressed_cobblestone', W: 'minecraft:wither_rose', 5: 'euru:quintuple_compressed_cobblestone' }, 'beneath_teleporter')


  // Dragon Egg (Dark Utilities' shulker pearl is gone: shulker shells instead)
  event.remove({ id: 'mysticalagradditions:dragon_egg' })
  shaped('minecraft:dragon_egg', ['CWC', 'PNP', 'BHB'], { C: 'minecraft:end_crystal', W: 'minecraft:wither_rose', P: 'minecraft:shulker_shell', N: 'minecraft:nether_star',
    B: 'minecraft:dragon_breath', H: 'draconicevolution:dragon_heart' }, 'dragon_egg')

  // Menril sapling from Mystical Agriculture

  // Cobblestone generator with any water/lava container (Tiny Progressions)
  shaped('sf3extras:cobblegen_block', ['CCC', 'WGL', 'CCC'], { C: 'minecraft:cobblestone', W: 'minecraft:water_bucket', G: '#c:glass_blocks', L: 'minecraft:lava_bucket' }, 'cobblegen_porcelain')

  // Tiny Progressions wither-proof blocks to match other mods
  event.remove({ id: 'sf3extras:reinforced_glass' })
  shaped('sf3extras:reinforced_glass', [' G ', 'GSG', ' G '], { G: 'minecraft:glass', S: 'minecraft:wither_skeleton_skull' }, 'reinforced_glass')
  event.remove({ id: 'sf3extras:reinforced_obsidian' })
  shaped('sf3extras:reinforced_obsidian', ['PSP', 'SOS', 'PSP'], { P: 'immersiveengineering:plate_steel', S: 'immersiveengineering:steel_scaffolding_standard', O: 'minecraft:obsidian' }, 'reinforced_obsidian')

  // Quantum DSU harder (Obsidian Chests + EnderIO machine chassis); VSU <-> DSU conversion
  event.remove({ id: 'quantumstorage:quantumdsu' })
  event.remove({ id: 'simplelabels:dsu_from_vsu' })
  event.remove({ id: 'simplelabels:vsu_from_dsu' })
  shapeless('simplelabels:blockvsu', ['quantumstorage:quantumdsu'], 'vsu_from_dsu')
  shapeless('quantumstorage:quantumdsu', ['simplelabels:blockvsu'], 'dsu_from_vsu')

  // Torchmaster mega torch with Menril torches
  event.remove({ id: 'torchmaster:megatorch' })
  shaped('torchmaster:megatorch', ['TTT', 'DLD', 'ELE'], { T: 'integrateddynamics:menril_torch', D: 'minecraft:diamond', L: '#minecraft:logs', E: 'minecraft:emerald_block' }, 'megatorch')

  // Pam's HarvestCraft (original port): skillet metals, epic bacon and baits are recipes of the harvestcraft jar itself (SF3 scripts applied)

  // Actually Additions: tiny torch from mini coal; modern black quartz route uses renewable Nether Quartz Essence because MA 8 has no black-quartz essence item.
  shaped('6x actuallyadditions:black_quartz', ['EEE', ' E ', 'EEE'], { E: 'mysticalagriculture:nether_quartz_essence' }, 'black_quartz_essence')

  // Wooden shears with a sapling; coarse dirt from dirt + gravel
  shaped('woodenshears:wooden_shears', ['P P', ' S ', 'K K'], { P: '#minecraft:planks', S: '#minecraft:saplings', K: 'minecraft:stick' }, 'wooden_shears')
  shaped('2x minecraft:coarse_dirt', ['GD', 'DG'], { G: 'minecraft:gravel', D: 'minecraft:dirt' }, 'coarse_dirt')

  // Charset Tweaks (SF3 _modules.cfg: tweaks/additions graphite=true, glassShards=true)
  shapeless('2x sf3extras:charset_graphite', ['minecraft:charcoal'], 'charset_graphite')
  shaped('minecraft:glass', ['SS', 'S '], { S: 'sf3extras:charset_glass_shard' }, 'glass_from_charset_shards')
  shapeless('minecraft:black_wool', ['minecraft:white_wool', 'sf3extras:charset_graphite'], 'graphite_dye_black_wool')
  event.custom({ type: 'sf3extras:charset_audio_tape' }).id('sf3:charset_audio_tape')
  shaped('8x sf3extras:charset_audio_cable', ['NNN', 'RGR', 'NNN'], { N: 'minecraft:iron_nugget', R: 'minecraft:redstone', G: 'sf3extras:charset_graphite' }, 'charset_audio_cable')
  shaped('sf3extras:charset_audio_drive', ['IGI', 'RER', 'IPI'], { I: 'minecraft:iron_ingot', G: '#c:glass_blocks', R: 'minecraft:redstone', E: 'sf3extras:charset_audio_reel', P: 'minecraft:piston' }, 'charset_audio_drive')

  // Charset Gates: source recipe layouts from ModCharsetGates.init; gates output
  // in the placement-facing direction and accept two side inputs.
  shaped('sf3extras:charset_gate_nor', ['STS', 'SCS', 'SSS'], { S: 'minecraft:stone_slab', T: 'minecraft:redstone_torch', C: 'minecraft:cobblestone' }, 'charset_gate_nor')
  shaped('sf3extras:charset_gate_nand', ['RTR', 'CCC', 'SRS'], { R: 'minecraft:redstone', T: 'minecraft:redstone_torch', C: 'minecraft:cobblestone', S: 'minecraft:stone_slab' }, 'charset_gate_nand')
  shaped('sf3extras:charset_gate_xor', ['R R', 'CRC', 'SCS'], { R: 'minecraft:redstone', C: 'minecraft:cobblestone', S: 'minecraft:stone_slab' }, 'charset_gate_xor')
  shaped('sf3extras:charset_gate_pulse_former', ['RCR', 'CRC', 'RRS'], { R: 'minecraft:redstone', C: 'minecraft:cobblestone', S: 'minecraft:stone_slab' }, 'charset_gate_pulse_former')
  shaped('sf3extras:charset_gate_multiplexer', ['RCR', 'CSC', 'RCR'], { R: 'minecraft:redstone', C: 'minecraft:cobblestone', S: 'minecraft:stone_slab' }, 'charset_gate_multiplexer')
  shaped('sf3extras:charset_gate_buffer', [' C ', 'CRC', ' C '], { R: 'minecraft:redstone', C: 'minecraft:cobblestone' }, 'charset_gate_buffer')
  shaped('sf3extras:charset_gate_rs_latch', ['RCR', 'CTC', 'RCR'], { R: 'minecraft:redstone', C: 'minecraft:cobblestone', T: 'minecraft:redstone_torch' }, 'charset_gate_rs_latch')
  shaped('sf3extras:charset_poster', ['P'], { P: 'minecraft:paper' }, 'charset_poster')
  shaped('sf3extras:charset_wrench', ['  I', ' SI', 'I  '], { I: 'minecraft:iron_ingot', S: 'minecraft:stick' }, 'charset_wrench')

  // Charset storage subset: a one-type 4096-count barrel and reusable paired keys.
  shaped('sf3extras:charset_barrel', ['PPP', 'PCP', 'PPP'], { P: '#minecraft:planks', C: 'minecraft:chest' }, 'charset_barrel')
  shaped('sf3extras:charset_key', [' IG', 'I  ', '   '], { I: 'minecraft:iron_nugget', G: 'minecraft:gold_nugget' }, 'charset_key')
  shaped('sf3extras:charset_lock', ['ICI', 'CRC', ' I '], { I: 'minecraft:iron_ingot', C: 'minecraft:chain', R: 'minecraft:redstone' }, 'charset_lock')
  shaped('sf3extras:charset_master_key', ['DID', 'IKI', 'DID'], { D: 'minecraft:diamond', I: 'minecraft:iron_ingot', K: 'sf3extras:charset_key' }, 'charset_master_key')
  // The original storage module exposed its backpack as a registry item without
  // a survival recipe; this leather/chest recipe is an explicit 1.21.1 acquisition adaptation.
  shaped('sf3extras:charset_backpack', ['LLL', 'LCL', 'LLL'], { L: 'minecraft:leather', C: 'minecraft:chest' }, 'charset_backpack')
  // Charset's original shelf is a multipart cut from planks; slabs are the nearest
  // recipe input in the current standalone-block implementation.
  shaped('sf3extras:charset_shelf', ['SSS'], { S: 'minecraft:oak_slab' }, 'charset_shelf')

  // Growth crystal tier 1 (SF3 version)
  event.remove({ id: 'sf3extras:growth_crystal' })
  shaped('sf3extras:growth_crystal', ['IBI', 'BSB', 'IBI'], { I: 'minecraft:iron_ingot', B: 'sf3extras:compressed_bone_block', S: 'minecraft:sea_lantern' }, 'growth_crystal')

  // Actually Additions growth ring: retain SF3's empowered-crystal and ring recipe.
  event.remove({ id: 'actuallyadditions:ring_of_growth' })
  shaped('actuallyadditions:ring_of_growth', ['RPR', 'PCP', 'RPR'], {
    R: 'actuallyadditions:empowered_restonia_crystal',
    P: 'actuallyadditions:empowered_palis_crystal',
    C: 'actuallyadditions:ring',
  }, 'ring_of_growth_sf3')

  // Long Fall Boots without the Nether Star (SF3 comment: "I have no idea why Long Fall Boots requires a nether star?")
  event.remove({ id: 'sf3extras:long_fall_boots' })
  shaped('sf3extras:long_fall_boots', ['I I', 'O O', 'D D'], { I: 'minecraft:iron_block', O: 'minecraft:obsidian', D: 'minecraft:diamond_block' }, 'long_fall_boots')

  // ---- shapelessrecipes.zs
  shapeless('minecraft:prismarine_shard', ['minecraft:prismarine_crystals', 'minecraft:prismarine_crystals'], 'prismarine_shard')
  shapeless('4x minecraft:stick', ['#minecraft:planks', '#minecraft:planks'], 'sticks')
  shapeless('mob_grinding_utils:dark_oak_stone', ['minecraft:cobblestone', 'minecraft:cocoa_beans'], 'dark_oak_stone')
  shapeless('4x minecraft:clay_ball', ['minecraft:clay'], 'clay_balls')

  // ---- Furnace.zs
  smelt('fluxnetworks:flux_dust', 'minecraft:redstone', 'flux_dust')
  smelt('fluxnetworks:flux_block', 'minecraft:redstone_block', 'flux_block')
  smelt('refinedstorage:quartz_enriched_iron', 'sf3extras:quartz_dust', 'quartz_enriched_iron')
  smelt('refinedstorage:raw_improved_processor', 'minecraft:gold_ingot', 'raw_improved_processor')
  smelt('refinedstorage:raw_advanced_processor', 'minecraft:diamond', 'raw_advanced_processor')
  smelt('refinedstorage:raw_basic_processor', 'minecraft:iron_ingot', 'raw_basic_processor')
  smelt('2x minecraft:glass', 'snad:snad', 'glass_from_snad')
  smelt('2x minecraft:glass', 'snad:red_snad', 'glass_from_red_snad')

  // ---- tinkers.zs: remove the vanilla bucket melting exploit; retain the added modern metal bucket recipes above.
  event.remove({ id: 'tconstruct:smeltery/melting/metal/iron/bucket' })

  // ---- tinkers.zs: 4 seared stone -> 8 seared bricks
  shapeless('8x tconstruct:seared_bricks', ['tconstruct:seared_stone', 'tconstruct:seared_stone', 'tconstruct:seared_stone', 'tconstruct:seared_stone'], 'seared_bricks')

  // ---- aa.zs: Actually Additions Crusher integrations (Ex Nihilo ore chunks -> 2 IE metal dust).
  const aaCrush = (name, input, output, count) => {
    if (!has(input) || !has(output)) return
    event.custom({ type: 'actuallyadditions:crushing', ingredient: { item: input },
      result: [{ result: { id: output, count: count } }] }).id('sf3:aa_crush_' + name)
  }
  aaCrush('sand_to_dust', 'minecraft:sand', 'exnihiloadscensio:dust', 1)
  aaCrush('prismarine', 'minecraft:prismarine', 'minecraft:prismarine_shard', 2)

  // ---- IE.zs: the old SF3 balance gives prismarine blocks 2 shards (modern IE defaults to 4).
  event.remove({ id: 'immersiveengineering:crusher/prismarine' })
  if (has('minecraft:prismarine') && has('minecraft:prismarine_shard'))
    event.custom({ type: 'immersiveengineering:crusher', energy: 3000, input: { item: 'minecraft:prismarine' },
      result: { id: 'minecraft:prismarine_shard', count: 2 } }).id('sf3:ie_crusher_prismarine_sf3')

  // IE armor salvage recipes from the original scripts; modern IE has no matching recipes.
  const ieCrush = (name, input, output, count, energy) => {
    if (!has(input) || !has(output)) return
    event.custom({ type: 'immersiveengineering:crusher', energy: energy, input: { item: input },
      result: { id: output, count: count } }).id('sf3:ie_salvage_' + name)
  }
  const armor = (mat, output, counts, energies) => {
    const slots = ['helmet', 'chestplate', 'leggings', 'boots']
    slots.forEach((slot, i) => ieCrush(mat + '_' + slot, 'minecraft:' + mat + '_' + slot,
      output, counts[i], energies[i]))
  }
  armor('diamond', 'minecraft:diamond', [3, 6, 5, 2], [10000, 16000, 14000, 8000])
  armor('iron', 'immersiveengineering:dust_iron', [3, 6, 5, 2], [10000, 16000, 14000, 8000])
  armor('golden', 'immersiveengineering:dust_gold', [3, 6, 5, 2], [10000, 16000, 14000, 8000])
  armor('chainmail', 'immersiveengineering:dust_steel', [3, 6, 5, 2], [10000, 16000, 14000, 8000])
  armor('leather', 'minecraft:leather', [3, 6, 5, 2], [10000, 16000, 14000, 8000])
  for (const [name, input, output, count, energy] of [
    ['diamond_horse_armor', 'minecraft:diamond_horse_armor', 'minecraft:diamond', 6, 6000],
    ['iron_horse_armor', 'minecraft:iron_horse_armor', 'immersiveengineering:dust_iron', 6, 6000],
    ['golden_horse_armor', 'minecraft:golden_horse_armor', 'immersiveengineering:dust_gold', 6, 6000],
    ['saddle', 'minecraft:saddle', 'minecraft:leather', 3, 3000],
    ['nether_brick', 'minecraft:nether_bricks', 'minecraft:nether_brick', 4, 2000],
    ['brick_block', 'minecraft:bricks', 'minecraft:brick', 4, 2000]
  ]) ieCrush(name, input, output, count, energy)
  ieCrush('sand_to_dust', 'minecraft:sand', 'exnihiloadscensio:dust', 1, 2000)
})

// ---- oredict.zs: Snad counts as sand
ServerEvents.tags('item', event => {
  event.add('minecraft:sand', ['snad:snad', 'snad:red_snad'])
  event.add('c:sands', ['snad:snad', 'snad:red_snad'])
  event.add('c:dyes/black', ['sf3extras:charset_graphite'])
})

// Charset Tweaks glass shards: only add them when ordinary glass loot is empty,
// preserving Silk Touch and any modded glass drop table. SF3's original drops 1-4
// from clear glass/panes; stained glass/panes have a 50% chance for one shard.
// forEach gives every handler its own id; a shared loop binding made all glass behave as the last pane.
;[
  'minecraft:glass', 'minecraft:glass_pane',
  'minecraft:white_stained_glass', 'minecraft:orange_stained_glass', 'minecraft:magenta_stained_glass',
  'minecraft:light_blue_stained_glass', 'minecraft:yellow_stained_glass', 'minecraft:lime_stained_glass',
  'minecraft:pink_stained_glass', 'minecraft:gray_stained_glass', 'minecraft:light_gray_stained_glass',
  'minecraft:cyan_stained_glass', 'minecraft:purple_stained_glass', 'minecraft:blue_stained_glass',
  'minecraft:brown_stained_glass', 'minecraft:green_stained_glass', 'minecraft:red_stained_glass',
  'minecraft:black_stained_glass',
  'minecraft:white_stained_glass_pane', 'minecraft:orange_stained_glass_pane', 'minecraft:magenta_stained_glass_pane',
  'minecraft:light_blue_stained_glass_pane', 'minecraft:yellow_stained_glass_pane', 'minecraft:lime_stained_glass_pane',
  'minecraft:pink_stained_glass_pane', 'minecraft:gray_stained_glass_pane', 'minecraft:light_gray_stained_glass_pane',
  'minecraft:cyan_stained_glass_pane', 'minecraft:purple_stained_glass_pane', 'minecraft:blue_stained_glass_pane',
  'minecraft:brown_stained_glass_pane', 'minecraft:green_stained_glass_pane', 'minecraft:red_stained_glass_pane',
  'minecraft:black_stained_glass_pane'
].forEach(id => {
  BlockEvents.drops(id, event => {
    if (event.itemEntities.size() > 0) return
    var stained = id.includes('_stained_glass')
    var random = event.level.random
    if (stained && random.nextFloat() >= 0.5) return
    var count = stained ? 1 : random.nextInt(4) + 1
    event.addItem(Item.of('sf3extras:charset_glass_shard', count))
  })
})
