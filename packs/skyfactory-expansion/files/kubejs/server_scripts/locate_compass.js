// Update 3.1: the inventory's Locate button replaces the Explorer's Compass item (its search code still runs on the
// server). Nobody is given the compass, and it has no recipe, so there is nothing to lose or carry.
ServerEvents.recipes(event => {
  event.remove({ output: 'explorerscompass:explorerscompass' })
})
