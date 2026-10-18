// Integration-prep pack-side fixes (candidate-server). Each block says which port jar is incomplete.
ServerEvents.recipes(event => {
  // sf3extras still ships stand-in recipes for Random Things blocks (rt_*); the Random Things port has the real ones (identical recipes conflict, e.g. voxel projector)
  event.remove({ id: /^sf3extras:rt_/ })
})
