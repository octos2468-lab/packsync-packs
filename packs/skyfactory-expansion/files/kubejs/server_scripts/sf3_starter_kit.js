// SF3 InitialInventory equivalent (original: guided book, torch, coffee, toast). The book is now
// Otto's guide, opened from the inventory (sf3extras), so it is not an item that can be lost.
// Replaces Skyblock Builder's starter inventory now that the pack starts in a regular world.
// Given once per player; the stage persists with the player's save.
PlayerEvents.loggedIn(event => {
  var player = event.player
  if (player.stages.has('sf3_starter_kit')) return
  player.stages.add('sf3_starter_kit')
  ;['minecraft:torch', 'actuallyadditions:coffee_cup', 'harvestcraft:toastitem']
    .forEach(id => player.give(Item.of(id)))
})
