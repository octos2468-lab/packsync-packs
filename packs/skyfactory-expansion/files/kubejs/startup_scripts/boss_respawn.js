// Boss respawn (boss-respawn, 2026-10-21): crafted summon items for the bounty bosses that live once per structure
// (Battle Tower Golem, Elder Guardian, Chaos Guardian). Use and recipes: server_scripts/boss_respawn.js. Design: staging\boss-respawn\README.md.
StartupEvents.registry('item', event => {
  event.create('tower_golem_effigy').displayName('Tower Golem Effigy').rarity('uncommon').glow(true).maxStackSize(16)
  event.create('elder_guardian_lure').displayName('Elder Guardian Lure').rarity('rare').glow(true).maxStackSize(16)
  event.create('chaos_guardian_beacon').displayName('Chaos Guardian Beacon').rarity('epic').glow(true).maxStackSize(1)
})

// A summoned Golem keeps 1 diamond (the effigy costs 1), its clay and paper; the 6-11 diamonds and redstone of a real
// tower Golem stay a reward for exploring. Summoned bosses carry the entity tag boss_respawn.
const BR_ITEMS = Java.loadClass('net.minecraft.core.registries.BuiltInRegistries').ITEM
NativeEvents.onEvent('net.neoforged.neoforge.event.entity.living.LivingDropsEvent', event => {
  try {
    let entity = event.getEntity()
    if (!entity.getTags().contains('boss_respawn') || String(entity.getEncodeId()) != 'battletowers:golem') return
    let diamonds = 0
    let it = event.getDrops().iterator()
    while (it.hasNext()) {
      let stack = it.next().getItem()
      let id = String(BR_ITEMS.getKey(stack.getItem()))
      if (id == 'minecraft:redstone') it.remove()
      else if (id == 'minecraft:diamond') {
        let keep = Math.max(0, Math.min(stack.getCount(), 1 - diamonds))
        diamonds += keep
        if (keep == 0) it.remove()
        else stack.setCount(keep)
      }
    }
  } catch (e) {
    console.error('boss-respawn: golem drop filter failed: ' + e)
  }
})
