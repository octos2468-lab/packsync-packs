// Update 6 (progression-gates, 2026-10-20): a Bounty Board grants bountiful:decrees/<age> to the player who opens that
// age's page (by placing the decree on it). This ticks the guide goal "Apply the <Age> Decree to a Bounty Board" (world-wide,
// like every guide goal). Old boards whose page was opened before Update 6 tick nothing: tick the goal by hand if you like.
const DECREE_GOAL_PREFIX = 'mastery.apply_the_'
const DECREE_GOAL_SUFFIX = '_decree_to_a_bounty_board'
let decreeGuide = null

function decreeGoalTick(server, player, id) {
  let m = /^bountiful:decrees\/(settler|homestead|engineer|nether|realm|mastery)$/.exec(id)
  if (!m) return
  try {
    if (decreeGuide === null) decreeGuide = Java.loadClass('sf3.extras.guide.Guide')
    decreeGuide.setDone(server, DECREE_GOAL_PREFIX + m[1] + DECREE_GOAL_SUFFIX, true, player.getGameProfile().getName())
  } catch (e) {
    console.warn('decree goals: guide tick failed for ' + id + ': ' + e)
  }
}

NativeEvents.onEvent('net.neoforged.neoforge.event.entity.player.AdvancementEvent$AdvancementEarnEvent', event => {
  let player = event.getEntity()
  if (!player || !player.server) return
  decreeGoalTick(player.server, player, String(event.getAdvancement().id()))
})
