;(function () {   // own scope: KubeJS client scripts share one global scope
// U22 OPTIONAL S3 stopgap, client half (pairs with server_scripts/zzzz_u22_s3_stopgap.js): hide the now-uncraftable items in
// JEI and say why in their tooltip (tooltips_tech.js still describes what they do).
var S3_IDS = ['extrautils2:player_chest', 'randomthings:player_interface', 'randomthings:creative_player_interface',
              'randomthings:ender_letter', 'randomthings:ender_mailbox']
RecipeViewerEvents.removeEntries('item', function (event) {
  S3_IDS.forEach(function (id) { if (Item.exists(id)) event.remove(id) })
})
ItemEvents.modifyTooltips(function (event) {
  S3_IDS.forEach(function (id) {
    if (Item.exists(id)) event.add(id, [Text.red('Disabled in this pack: no recipe.')])
  })
})
})()
