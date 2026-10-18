// Leak audit: the Aether portal (glowstone frame + water bucket) stays closed until the player has reached Age 4
// (advancement minecraft:nether/obtain_blaze_rod). Twilight Forest has its own config switch (portalUnlockedByAdvancement), see CHANGES.md.
// Fail-open: if the advancement API misbehaves, the portal works and the error is logged once.
const LEAK_AUDIT_RL = Java.loadClass('net.minecraft.resources.ResourceLocation')
const AETHER_GATE_ADV = 'minecraft:nether/obtain_blaze_rod'
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
  event.player.tell(Text.gold('The glowstone frame will not hold the water yet. Come back once you have faced the Nether.'))
})
