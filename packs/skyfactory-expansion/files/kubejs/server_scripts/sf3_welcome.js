// First-join welcome: where the guide is and how to tame shaders / Distant Horizons. Shown once per player
// (the stage persists with the player's save). Keys named here are the pack's shipped defaults; players can rebind them.
PlayerEvents.loggedIn(event => {
  var player = event.player
  if (player.stages.has('sf3_welcome_v1')) return
  player.stages.add('sf3_welcome_v1')
  player.tell(Text.gold("Welcome to Otto's ModdedMC!"))
  player.tell(Text.yellow("Press G to open Otto's Guide: it tells you what to do next, step by step."))
  player.tell(Text.gray("Shaders are on: K turns them on/off, O opens the shader menu (pick the Low profile if FPS is poor)."))
  player.tell(Text.gray("Distant Horizons (far terrain) is in Options > Video Settings. Lower its render distance if the game stutters."))
  player.tell(Text.gray("Options > Controls: the pack ships conflict-free keys. Press B for your backpack."))
})
