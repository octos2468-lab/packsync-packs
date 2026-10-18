// PROGRESSION PLAN v2 section 2/3: additive cross-mod links and travel-ladder gates. Every block is guarded, so a port that has not landed yet is skipped.
ServerEvents.recipes(event => {
  // Age 1 link: Mo' Creatures hide and fur work as leather for the basic Iron Backpack (additive: leather still works)
  if (Item.exists('mocreatures:hide') && Item.exists('mocreatures:fur')) {
    event.replaceInput({ id: 'ironbackpacks:basic_backpack' }, '#c:leathers', ['#c:leathers', 'mocreatures:hide', 'mocreatures:fur'])
  }

  // Capsules (Age 3-5): wood and iron capsules stay; gold and obsidian need Ender IO electrical steel; diamond and emerald need vibrant alloy
  if (Item.exists('capsule:capsule')) {
    ;['capsule:capsule_gold', 'capsule:capsule_obsidian'].forEach(id => event.replaceInput({ id: id }, 'minecraft:iron_ingot', 'enderio:electrical_steel_ingot'))
    ;['capsule:capsule_diamond', 'capsule:capsule_emerald'].forEach(id => event.replaceInput({ id: id }, 'minecraft:iron_ingot', 'enderio:vibrant_alloy_ingot'))
  }
})
