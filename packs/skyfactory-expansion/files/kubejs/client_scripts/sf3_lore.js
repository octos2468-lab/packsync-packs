// SkyFactory 3.0.22 scripts/lore.zs tooltips, mapped to 1.21.1 items.
ItemEvents.modifyTooltips(event => {
  const add = (id, lines) => { if (Item.exists(id)) event.add(id, lines.map(l => Text.yellow(l))) }
  add('sf3extras:funnel', ['Fluid Transport Pipe'])
  add('torchmaster:megatorch', ['Like a Magnum Torch!', 'Stops Mob Spawns in a', '64 Block Radius'])
  for (const w of ['oak', 'spruce', 'birch', 'jungle', 'acacia', 'dark_oak', 'mangrove', 'cherry', 'bamboo', 'crimson', 'warped'])
    add('exdeorum:' + w + '_sieve', ['Requires a Mesh'])
  for (const m of ['wooden', 'stone', 'iron', 'golden', 'diamond', 'netherite'])
    add('excompressum:compressed_' + m + '_hammer', ['Hammers Compressed Blocks', 'Breaks 1 Block at a Time'])
  for (const w of ['oak', 'spruce', 'birch', 'jungle', 'acacia', 'dark_oak', 'mangrove', 'cherry', 'bamboo', 'crimson', 'warped'])
    add('excompressum:' + w + '_heavy_sieve', ['Requires a Mesh', 'Only sieves compressed blocks'])
})
