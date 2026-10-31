// U22 S3 stopgap (integration-prep 2026-10-30), narrowed in U22.2 (2026-10-31): Dreamshift private.2.8.1 keeps Player Chests
// and Player Interfaces (XU2, RT, AA) from reaching a dreaming player's inventory, so their recipes are back. The Ender Letter
// and Ender Mailbox stay uncraftable. Already-crafted items keep working; this only stops new ones.
ServerEvents.recipes(function (event) {
  ;['randomthings:ender_letter', 'randomthings:ender_mailbox'].forEach(function (id) {
    if (Item.exists(id)) event.remove({ output: id })
  })
})
