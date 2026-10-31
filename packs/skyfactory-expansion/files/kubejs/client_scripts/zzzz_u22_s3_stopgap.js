;(function () {   // own scope: KubeJS client scripts share one global scope
// U22 S3 stopgap, client half (pairs with server_scripts/zzzz_u22_s3_stopgap.js; narrowed in U22.2): hide the still-uncraftable
// Ender Letter and Ender Mailbox in JEI and mark them in their tooltip (tooltips_tech.js still describes what they do).
var S3_IDS = ['randomthings:ender_letter', 'randomthings:ender_mailbox']
RecipeViewerEvents.removeEntries('item', function (event) {
  S3_IDS.forEach(function (id) { if (Item.exists(id)) event.remove(id) })
})
ItemEvents.modifyTooltips(function (event) {
  S3_IDS.forEach(function (id) {
    if (Item.exists(id)) event.add(id, [Text.red('Disabled in this pack: no recipe.')])
  })
})
})()
