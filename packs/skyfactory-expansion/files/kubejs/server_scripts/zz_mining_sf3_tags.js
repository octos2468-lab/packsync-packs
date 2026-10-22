// mining-audit (Update 13): Tiny Progressions compressed bone/flint (Material.GROUND) and flesh (SAND) were shovel blocks in SF3 1.10,
// not pickaxe blocks. Hardness/requiresTool: startup_scripts/zz_mining_sf3_hardness.js.
ServerEvents.tags('block', event => {
  const shovel = ['sf3extras:compressed_bone_block', 'sf3extras:compressed_flint_block', 'sf3extras:compressed_flesh_block']
  event.remove('minecraft:mineable/pickaxe', shovel)
  event.add('minecraft:mineable/shovel', shovel)
})
