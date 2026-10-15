// Pre-playthrough recipe fixes (2026-10-13). Hand-written; found by the pack-wide machine-recipe overlap scan.

ServerEvents.recipes(event => {
  // Smelting soul sand matched two furnace recipes (Natura Soul Glass from original SF3, Create Scoria), so the
  // furnace could only ever make one of them. Soul Glass keeps the furnace; Scoria moves to the Blast Furnace
  // (Create also makes it where lava meets liquid chocolate).
  event.remove({ id: 'create:smelting/scoria' })
  event.remove({ id: 'enderio:smelting/create/smelting/scoria' })
  event.blasting('create:scoria', 'minecraft:soul_sand').id('sf3:blasting/scoria_from_soul_sand')
})
