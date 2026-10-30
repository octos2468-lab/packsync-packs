// U22 OPTIONAL S3 stopgap (integration-prep 2026-10-30; only with the user's OK).
// Dreamshift private.2.x denies these blocks INSIDE a Dreamspace only. A Player Chest or Player Interface placed in the real
// world can still read and write the inventory of a player who is dreaming, so their recipes are removed until a proper fix.
// None of them is placed in world-sf3hx2 today (coordinator). Already-crafted items keep working; this only stops new ones.
ServerEvents.recipes(function (event) {
  ;['extrautils2:player_chest', 'randomthings:player_interface', 'randomthings:creative_player_interface',
    'randomthings:ender_letter', 'randomthings:ender_mailbox'].forEach(function (id) {
    if (Item.exists(id)) event.remove({ output: id })
  })
})
