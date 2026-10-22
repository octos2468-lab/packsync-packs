;(function () {   // own scope: KubeJS client scripts share one global scope
// Boss respawn summon items (boss-respawn, 2026-10-21): one short line, a Shift section, and a JEI information page.
var Y = '§e', W = '§f', G = '§7', O = '§6'
var BR_TIPS = {
  'kubejs:tower_golem_effigy': [O + 'Summons a Battle Tower Golem', [
    Y + 'Right-click' + G + ' in the Overworld: the Golem rises on open ground 6 blocks ahead, asleep until you come close.',
    'Works once ' + W + 'Age 3' + G + ' is open. For Golem bounties and practice; no tower collapses.',
    'A summoned Golem drops 1 diamond, clay and paper. The big diamond haul stays in real Battle Towers.'
  ]],
  'kubejs:elder_guardian_lure': [O + 'Summons an Elder Guardian', [
    Y + 'Right-click' + G + ' next to deep water (2 blocks deep, within 8 blocks): an Elder Guardian surfaces there.',
    'Works once ' + W + 'Age 4' + G + ' is open. For Elder Guardian bounties; it drops its usual sponge and shards.'
  ]],
  'kubejs:chaos_guardian_beacon': [O + 'Summons the Chaos Guardian', [
    Y + 'Right-click' + G + ' in the End, at least 1,000 blocks from the dragon island and away from any chaos island crystal.',
    'Works once ' + W + 'Age 6' + G + ' is open. The Guardian appears 20 blocks above you.',
    'For Chaos Guardian bounties: a summoned Guardian drops nothing. Chaos shards still come only from chaos islands.'
  ]]
}

ItemEvents.modifyTooltips(event => {
  Object.keys(BR_TIPS).forEach(id => event.modify(id, t => t.dynamic('boss_respawn')))
})

ItemEvents.dynamicTooltips('boss_respawn', event => {
  var tip = BR_TIPS[String(event.item.id)]
  if (!tip) return
  event.lines.add(Text.of(G + tip[0]))
  if (event.shift) tip[1].forEach(l => event.lines.add(Text.of(G + l)))
  else event.lines.add(Text.of('§8Hold §7Shift§8 for details'))
})

RecipeViewerEvents.addInformation('item', event => {
  Object.keys(BR_TIPS).forEach(id => event.add(id, [tip0(id)].concat(BR_TIPS[id][1].map(l => l.replace(/§./g, '')))))
})
function tip0(id) { return BR_TIPS[id][0].replace(/§./g, '') + '.' }
})()
