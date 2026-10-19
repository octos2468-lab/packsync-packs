// Leak audit: the Aether portal (glowstone frame + water bucket) stays closed until Age 5 is open for the player
// (advancement progression:ages/age_5, granted by progression_boss_gates.js when an Age 4 gate boss dies). Twilight Forest uses the same advancement (config portalUnlockedByAdvancement). Boss gates: progression/BOSS-GATES.md.
// Fail-open: if the advancement API misbehaves, the portal works and the error is logged once.
const LEAK_AUDIT_RL = Java.loadClass('net.minecraft.resources.ResourceLocation')
const AETHER_GATE_ADV = 'progression:ages/age_5'
let aetherGateWarned = false

function hasAdvancement(player, id) {
  try {
    const holder = player.server.getAdvancements().get(LEAK_AUDIT_RL.parse(id))
    if (!holder) return true
    return player.getAdvancements().getOrStartProgress(holder).isDone()
  } catch (e) {
    if (!aetherGateWarned) { aetherGateWarned = true; console.error('leak-audit aether gate: advancement check failed, portal left open: ' + e) }
    return true
  }
}

function glowstoneAround(block) {
  let n = 0
  for (let x = -3; x <= 3; x++) for (let y = -3; y <= 3; y++) for (let z = -3; z <= 3; z++) {
    if (block.offset(x, y, z).id == 'minecraft:glowstone') n++
  }
  return n
}

BlockEvents.rightClicked(event => {
  if (!event.player || event.item.id != 'minecraft:water_bucket') return
  if (event.block.id != 'minecraft:glowstone' && glowstoneAround(event.block) < 10) return
  if (glowstoneAround(event.block) < 10) return
  if (hasAdvancement(event.player, AETHER_GATE_ADV)) return
  event.cancel()
  event.player.tell(Text.gold('The glowstone frame will not hold the water yet. The Aether opens with Age 5: someone must defeat the Frostmaw, Barako or the Abyss Walker King first (/sf3ages).'))
})
