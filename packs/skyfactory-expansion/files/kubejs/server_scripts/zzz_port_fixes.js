// KubeJS server script for the pack: put it in kubejs/server_scripts/ (the "zzz" name loads it last). NOT installed
// anywhere: the live pack is untouched. See ../README.md. The other two script fixes (Charset barrel recipe, Mob
// Grinding Utils saw) are one-line edits in sf3_recipes.js and zz_sf3_recipe_conflicts.js: see patched/*.diff.
// (A script cannot remove a recipe that another script added with event.remove, so those two had to be edited in place.)

ServerEvents.recipes(event => {
  // SF3's extrautils2.cfg has ItemBuildersWand=false and ItemCreativeBuildersWand=false (SF3 used Better Builder's
  // Wands). xu2gear ships both; drop the survival recipe so the items only exist in creative.
  event.remove({ id: 'xu2gear:builders_wand' })
})
