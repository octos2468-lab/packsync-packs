// Boss respawn (boss-respawn, 2026-10-21): the bounty bosses that live once per structure get a crafted summon item.
// Each one works only once the age that boss opens (or, for the Chaos Guardian, its bounty age) is open on the server,
// so it repeats a fight the server has already won and never skips a gate. Summoned bosses carry the entity tag
// boss_respawn; startup_scripts/boss_respawn.js trims the summoned Golem's drops. Design: staging\boss-respawn\README.md.
const BR_RL = Java.loadClass('net.minecraft.resources.ResourceLocation')
const BR_AABB = Java.loadClass('net.minecraft.world.phys.AABB')
const BR_ENTITY = Java.loadClass('net.minecraft.world.entity.Entity')
const BR_RANGE = 64

const BR_SUMMONS = {
  'kubejs:tower_golem_effigy': { entity: 'battletowers:golem', boss: 'Tower Golem', age: 3, place: 'ground' },
  'kubejs:elder_guardian_lure': { entity: 'minecraft:elder_guardian', boss: 'Elder Guardian', age: 4, place: 'water' },
  'kubejs:chaos_guardian_beacon': { entity: 'draconicevolution:chaos_guardian', boss: 'Chaos Guardian', age: 6, place: 'end' }
}

ServerEvents.recipes(event => {
  event.shaped('kubejs:tower_golem_effigy', ['MCM', 'CDC', 'MIM'], {
    M: 'minecraft:mossy_stone_bricks', C: 'minecraft:clay', D: 'minecraft:diamond', I: 'minecraft:iron_block'
  }).id('kubejs:boss_respawn/tower_golem_effigy')
  event.shaped('kubejs:elder_guardian_lure', ['PNP', 'GEG', 'PNP'], {
    P: 'minecraft:prismarine_shard', N: 'minecraft:nautilus_shell', G: 'minecraft:gold_ingot', E: 'minecraft:ender_eye'
  }).id('kubejs:boss_respawn/elder_guardian_lure')
  event.shaped('kubejs:chaos_guardian_beacon', ['BWB', 'SHS', 'BWB'], {
    B: 'draconicevolution:draconium_block', W: 'draconicevolution:wyvern_core', S: 'minecraft:nether_star', H: 'draconicevolution:dragon_heart'
  }).id('kubejs:boss_respawn/chaos_guardian_beacon')
})

// Fail closed: a summon that cannot read the age advancement does nothing.
function brAgeOpen(player, age) {
  try {
    let holder = player.server.getAdvancements().get(BR_RL.parse('progression:ages/age_' + age))
    return holder != null && player.getAdvancements().getOrStartProgress(holder).isDone()
  } catch (e) {
    console.error('boss-respawn: age check failed: ' + e)
    return false
  }
}

function brAlreadyUp(level, x, y, z, type) {
  let list = level.getEntitiesOfClass(BR_ENTITY, new BR_AABB(x - BR_RANGE, y - BR_RANGE, z - BR_RANGE, x + BR_RANGE, y + BR_RANGE, z + BR_RANGE))
  for (let i = 0; i < list.size(); i++) {
    let e = list.get(i)
    if (e.isAlive() && e.getTags().contains('boss_respawn') && String(e.getEncodeId()) == type) return true
  }
  return false
}

function brId(level, x, y, z) { return String(level.getBlock(x, y, z).id) }

// Returns [x, y, z] for the boss, or a string saying why not.
function brSpot(level, player, s) {
  let px = Math.floor(player.x), py = Math.floor(player.y), pz = Math.floor(player.z)
  let dim = String(level.dimension)
  if (s.place == 'ground') {
    if (dim != 'minecraft:overworld') return 'The effigy only works in the Overworld.'
    let look = player.getLookAngle()
    let len = Math.sqrt(look.x() * look.x() + look.z() * look.z()) || 1
    let x = Math.floor(player.x + look.x() / len * 6), z = Math.floor(player.z + look.z() / len * 6)
    for (let dy = 2; dy >= -2; dy--) {
      let y = py + dy
      if (brId(level, x, y - 1, z) == 'minecraft:air') continue
      let clear = true
      for (let k = 0; k < 4 && clear; k++) for (let ox = -1; ox <= 1 && clear; ox++) for (let oz = -1; oz <= 1 && clear; oz++)
        if (brId(level, x + ox, y + k, z + oz) != 'minecraft:air') clear = false
      if (clear) return [x + 0.5, y, z + 0.5]
    }
    return 'Needs open ground 6 blocks ahead of you: 3x3 wide and 4 high.'
  }
  if (s.place == 'water') {
    for (let r = 2; r <= 8; r++) for (let dy = -4; dy <= 2; dy++) for (let ox = -r; ox <= r; ox++) for (let oz = -r; oz <= r; oz++) {
      if (Math.max(Math.abs(ox), Math.abs(oz)) != r) continue
      let x = px + ox, y = py + dy, z = pz + oz
      if (brId(level, x, y, z) == 'minecraft:water' && brId(level, x, y + 1, z) == 'minecraft:water' &&
          brId(level, x + 1, y, z) == 'minecraft:water' && brId(level, x, y, z + 1) == 'minecraft:water') return [x + 0.5, y, z + 0.5]
    }
    return 'Needs deep water (2 blocks deep) within 8 blocks of you.'
  }
  if (dim != 'minecraft:the_end') return 'The beacon only works in the End.'
  if (px * px + pz * pz < 1000 * 1000) return 'Too close to the dragon island: go at least 1,000 blocks out into the End.'
  for (let ox = -8; ox <= 8; ox++) for (let oy = -8; oy <= 28; oy++) for (let oz = -8; oz <= 8; oz++)
    if (brId(level, px + ox, py + oy, pz + oz) == 'draconicevolution:chaos_crystal') return 'Not next to a chaos island crystal: use it away from the island.'
  return [px + 0.5, py + 20, pz + 0.5]
}

// Summons the boss for this item if every rule passes; uses up the item only then. Returns true when a boss appeared.
function brUse(server, level, player, stack) {
  let s = BR_SUMMONS[String(stack.id)]
  if (!s) return false
  if (!brAgeOpen(player, s.age)) { player.tell(Text.red('The ' + s.boss + ' answers only once Age ' + s.age + ' is open (/sf3ages).')); return false }
  let spot = brSpot(level, player, s)
  if (typeof spot == 'string') { player.tell(Text.red(spot)); return false }
  if (brAlreadyUp(level, spot[0], spot[1], spot[2], s.entity)) { player.tell(Text.red('A summoned ' + s.boss + ' is still alive nearby.')); return false }
  let nbt = '{Tags:["boss_respawn"],PersistenceRequired:1b'
  // the Golem collapses its tower when it dies: a tower point below y 70 ends the collapse at once (no blocks touched)
  if (s.entity == 'battletowers:golem') nbt += ',towerType:0,towerX:' + Math.floor(spot[0]) + ',towerY:-60,towerZ:' + Math.floor(spot[2])
  nbt += '}'
  let dim = String(level.dimension)
  server.runCommandSilent('execute in ' + dim + ' run summon ' + s.entity + ' ' + spot[0] + ' ' + spot[1] + ' ' + spot[2] + ' ' + nbt)
  if (!player.isCreative()) stack.shrink(1)
  player.tell(Text.gold('The ' + s.boss + ' answers your call.'))
  server.runCommandSilent('execute in ' + dim + ' positioned ' + spot[0] + ' ' + spot[1] + ' ' + spot[2] +
    ' run playsound minecraft:entity.wither.spawn hostile @a[distance=..48] ~ ~ ~ 0.6 0.8')
  return true
}

ItemEvents.rightClicked(event => {
  if (!BR_SUMMONS[String(event.item.id)] || event.hand != 'main_hand') return
  event.cancel()
  brUse(event.server, event.level, event.player, event.item)
})
