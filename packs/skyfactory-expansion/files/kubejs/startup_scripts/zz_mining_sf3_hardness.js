// mining-audit (Update 13): SkyFactory 3 1.10 mining values for compressed blocks. Startup script: must run on BOTH server and client,
// because the client predicts mining time from the block's hardness.
// Extra Utilities 2 compressed cobblestone (SF3 3.0.22): Material.ROCK, hardness = 2 (cobblestone) x 2.25^(level-1).
// The pack's euru blocks stand in for it (euru default: 4/8/16/32/40/40/40/40; septuple didn't need a tool).
// Tiny Progressions compressed bone/flint (Material.GROUND) and flesh (SAND) need no tool in 1.10; shovel tags in zz_mining_sf3_tags.js.
const SF3_COMPRESSED_COBBLE = ['compressed', 'double_compressed', 'triple_compressed', 'quadruple_compressed',
  'quintuple_compressed', 'sextuple_compressed', 'septuple_compressed', 'octuple_compressed']

BlockEvents.modification(event => {
  SF3_COMPRESSED_COBBLE.forEach((name, i) => {
    event.modify(`euru:${name}_cobblestone`, block => {
      block.destroySpeed = 2 * Math.pow(2.25, i)
      block.requiresTool = true
    })
  })
  ;['sf3extras:compressed_bone_block', 'sf3extras:compressed_flint_block', 'sf3extras:compressed_flesh_block'].forEach(id => {
    event.modify(id, block => { block.requiresTool = false })
  })
})
