// worldgen-qa (2026-10-18): travel gate for the Aether, backing up zz_leak_audit.js.
// The right-click gate there only stops a player pouring a vanilla water bucket into the glowstone frame. The Aether also lights
// its portal from block-neighbour updates (dispenser with a water bucket, water flowing in, melting ice, other water buckets),
// so the portal itself can still appear early. This blocks the trip instead: a player without the Age 4 advancement
// (minecraft:nether/obtain_blaze_rod, same as Twilight's portalUnlockedByAdvancement) cannot travel to aether:the_aether.
// Fail-open like the original: if the advancement lookup throws, travel is allowed and the error is logged once.
const AETHER_TRAVEL_ADV = 'minecraft:nether/obtain_blaze_rod'
const AETHER_GATE_RL = Java.loadClass('net.minecraft.resources.ResourceLocation')
let aetherTravelWarned = false
NativeEvents.onEvent('net.neoforged.neoforge.event.entity.EntityTravelToDimensionEvent', event => {
  try {
    if (String(event.getDimension().location()) != 'aether:the_aether') return
    let aetherGateEntity = event.getEntity()
    if (!aetherGateEntity || !aetherGateEntity.isPlayer() || aetherGateEntity.isCreative() || aetherGateEntity.isSpectator()) return
    let aetherGateHolder = aetherGateEntity.server.getAdvancements().get(AETHER_GATE_RL.parse(AETHER_TRAVEL_ADV))
    if (!aetherGateHolder || aetherGateEntity.getAdvancements().getOrStartProgress(aetherGateHolder).isDone()) return
    event.setCanceled(true)
    aetherGateEntity.displayClientMessage(Text.gold('The Aether will not let you in yet. Come back once you have faced the Nether.'), true)
  } catch (e) {
    if (!aetherTravelWarned) { aetherTravelWarned = true; console.error('aether travel gate failed, travel left open: ' + e) }
  }
})
