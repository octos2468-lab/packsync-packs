// Ottocraft tech tooltips (tooltips-tech, Update 7).
// 1) "Hold Shift for details" sections for tech machines whose 1.21 port lost its
//    description (Ender IO dropped all of them) or never had one.
// 2) FE wording: tech mods built "RF" into code-generated lines (Ender IO, Draconic,
//    Simply Jetpacks, RFTools, ...). Lines after the item name are rewritten to FE.
// 3) Clean-ups of a few code-built lines (raw ids, shouting fluid ids, debug text).
// 4) Lang fixes: keys a mod jar defines are overridden by the generated LANG block below
//    (LAST asset pack); keys no jar defines live in kubejs/assets/<namespace>/lang/en_us.json.

;(function () {
  // <generated-lang> Built by mklang.py (see README). Keys a mod jar already defines: a
  // kubejs/assets lang file cannot override those, so they go into the LAST asset pack.
  const LANG = {
    "actuallyadditions": {
      "booklet.actuallyadditions.unavailable": "Parts of this feature are disabled or incomplete. You may find something missing or not fully working. Please use this item with caution!",
      "info.actuallyadditions.farmer.area": "Area: %sx%s",
      "info.actuallyadditions.gui.coffee_amount": "%s/%s Coffee",
      "tooltip.actuallyadditions.coal_generator_stats": "Generates %s CF (%s CF/t for %s ticks)",
      "tooltip.actuallyadditions.placer_augment": "Placing blocks from hotbar slot %s"
    },
    "bigreactors": {
      "block.bigreactors.reactoraccessport": "Reactor Access Port",
      "block.bigreactors.reactorcasing": "Reactor Casing",
      "block.bigreactors.reactorcomputerport": "Reactor Computer Port",
      "block.bigreactors.reactorcontroller": "Reactor Controller",
      "block.bigreactors.reactorcontrolrod": "Reactor Control Rod",
      "block.bigreactors.reactorcoolantport": "Reactor Coolant Port",
      "block.bigreactors.reactorcreativecoolantport": "Reactor Creative Coolant Port",
      "block.bigreactors.reactorfuelrod": "Reactor Fuel Rod",
      "block.bigreactors.reactorglass": "Reactor Glass",
      "block.bigreactors.reactorpowertaprf": "Reactor Power Tap",
      "block.bigreactors.reactorredstoneport": "Reactor Redstone Port",
      "block.bigreactors.turbinebearing": "Turbine Rotor Bearing",
      "block.bigreactors.turbinecomputerport": "Turbine Computer Port",
      "block.bigreactors.turbinecontroller": "Turbine Controller",
      "block.bigreactors.turbinecreativesteamgenerator": "Turbine Creative Steam Generator",
      "block.bigreactors.turbinefluidport": "Turbine Fluid Port",
      "block.bigreactors.turbineglass": "Turbine Glass",
      "block.bigreactors.turbinehousing": "Turbine Housing",
      "block.bigreactors.turbinepowertaprf": "Turbine Power Tap",
      "block.bigreactors.turbinerotorblade": "Turbine Rotor Blade",
      "block.bigreactors.turbinerotorshaft": "Turbine Rotor Shaft",
      "debug.bigreactors.fluidhelper.capacity": "Capacity (per): %1$s mB",
      "debug.bigreactors.fluidhelper.tank": "[%1$s] %2$s: %3$s, %4$s mB",
      "debug.bigreactors.reactantcontainer.capacity": "Capacity: %1$s mB",
      "debug.bigreactors.reactantcontainer.tank": "[%1$s] %2$s: %3$s",
      "debug.bigreactors.turbine.bladearea": "Blade Surface Area: %1$s",
      "debug.bigreactors.turbine.coilsize": "Coil Size: %1$s",
      "debug.bigreactors.turbine.input": "- Inlet : %1$s %2$s mB",
      "debug.bigreactors.turbine.maxintakerate": "Max Intake Rate: %1$s",
      "debug.bigreactors.turbine.output": "- Outlet : %1$s %2$s mB",
      "debug.bigreactors.turbine.rotorblades": "Rotor Blades: %1$s",
      "debug.bigreactors.turbine.rotormass": "Rotor Mass: %1$s",
      "debug.bigreactors.turbine.rotorshafts": "Rotor Shafts: %1$s",
      "item.bigreactors:wrench.machine.coords": "The machine start at %1$s, %2$s, %3$s and end at %4$s, %5$s, %6$s",
      "multiblock.validation.reactor.invalid_base_for_fuel_assembly": "%1$s, %2$s, %3$s - Only reactor casings can be used here",
      "multiblock.validation.reactor.invalid_block_for_exterior": "%1$s, %2$s, %3$s - %4$s is not valid for the reactor's exterior",
      "multiblock.validation.reactor.invalid_block_for_interior": "%1$s, %2$s, %3$s - %4$s is not valid for the reactor's interior",
      "multiblock.validation.reactor.invalid_block_in_fuel_assembly": "%1$s, %2$s, %3$s - Only fuel rods can be used here",
      "multiblock.validation.reactor.invalid_control_rods_column": "%1$s, %2$s, %3$s - Control rods may only be placed at the end of a sequence of fuel rods",
      "multiblock.validation.reactor.invalid_control_rods_position": "%1$s, %2$s, %3$s - Control rods may only be placed at the end of a sequence of fuel rods",
      "multiblock.validation.reactor.invalid_fluid_for_interior": "%1$s, %2$s, %3$s - The fluid %4$s is not valid for the reactor's interior",
      "multiblock.validation.reactor.invalid_frame_block": "%1$s, %2$s, %3$s - Only casing may be used as part of a reactor's frame",
      "multiblock.validation.reactor.invalid_fuelrod_column": "Fuel rod at %1$s, %2$s, %3$s must be part of a vertical column that reaches the entire height of the reactor, with a control rod on top",
      "multiblock.validation.reactor.invalid_fuelrod_position": "%1$s, %2$s, %3$s - fuel rods may only be placed in the reactor interior",
      "multiblock.validation.reactor.invalid_glass_position": "%1$s, %2$s, %3$s - Reactor glass may only be used on the exterior faces, not as part of a reactor's frame or interior",
      "multiblock.validation.reactor.invalid_part_for_interior": "%1$s, %2$s, %3$s - This reactor part may not be placed in the reactor's interior",
      "multiblock.validation.reactor.mixed_power_systems": "Standard and Tesla power taps cannot be mixed in one reactor",
      "multiblock.validation.reactor.null_block_found": "%1$s, %2$s, %3$s - Null block found, not valid for the reactor's interior",
      "multiblock.validation.reactor.redstoneport_invalid_on_bottom": "%1$s, %2$s, %3$s - Redstone ports may only be placed on a reactor's external side faces, not the bottom",
      "multiblock.validation.reactor.redstoneport_invalid_on_frame": "%1$s, %2$s, %3$s - Redstone ports may only be placed on a reactor's external side faces, not as part of the frame",
      "multiblock.validation.reactor.redstoneport_invalid_on_interior": "%1$s, %2$s, %3$s - Redstone ports may not be placed in a reactor's interior",
      "multiblock.validation.reactor.redstoneport_invalid_on_top": "%1$s, %2$s, %3$s - Redstone ports may only be placed on a reactor's external side faces, not the top",
      "multiblock.validation.turbine.found_loose_rotor_blades": "Found %1$s rotor blades that are not attached to the rotor. All rotor blades must extend continuously from the rotor's shaft",
      "multiblock.validation.turbine.found_loose_rotor_blocks": "Found %1$s rotor blocks that are not attached to the main rotor. All rotor blocks must be in a column extending the entire length of the turbine, starting from the bearing",
      "multiblock.validation.turbine.glass_invalid_on_frame": "%1$s, %2$s, %3$s - Glass cannot be used as part of a turbine's frame",
      "multiblock.validation.turbine.glass_invalid_on_interior": "%1$s, %2$s, %3$s - Glass can only be used as part of a turbine's exterior",
      "multiblock.validation.turbine.invalid_block_for_exterior": "%1$s, %2$s, %3$s - %4$s is not valid for a turbine's exterior",
      "multiblock.validation.turbine.invalid_block_for_interior": "%1$s, %2$s, %3$s is invalid for a turbine interior. Only rotor parts, metal blocks and empty space are allowed",
      "multiblock.validation.turbine.invalid_metals_shape": "Found %1$s metal blocks which were not in a ring around the rotor. All metal blocks must be in rings, or partial rings, around the rotor",
      "multiblock.validation.turbine.invalid_part_for_frame": "%1$s, %2$s, %3$s - Only turbine housing may be used as part of the turbine's frame",
      "multiblock.validation.turbine.invalid_part_for_interior": "%1$s, %2$s, %3$s - This part is not valid for the interior of a turbine",
      "multiblock.validation.turbine.mixed_power_systems": "Standard and Tesla power taps cannot be mixed in one turbine"
    },
    "draconicevolution": {
      "gui.de.RFCapacity.txt": "FE Capacity",
      "gui.de.rfPerShot.txt": "FE/Shot",
      "gui.reactor.genRate.txt": "This is the current FE/t being generated by the reactor.",
      "gui.reactor.inputRate.txt": "This is the exact FE/t input required to maintain the current field strength. As field strength increases this will increase exponentially.",
      "item.draconicevolution.tool_upgrade_rf_cap": "Upgrade Key (Energy Capacity)",
      "upgrade.de.holdCtrlForUpgrades.info": "§8Hold §7Ctrl§8 for upgrades",
      "upgrade.de.holdShiftForRecipes.info": "Applied by Fusion Crafting (see JEI)",
      "upgrade.de.rfCap.name": "Energy Capacity"
    },
    "enderio": {
      "enderio.power.rf": "FE",
      "enderio.stirlingGenerator.remaining": "Remaining %1$s|%2$sm }%3$ss|%4$s FE",
      "enderio.top.rf.value": "%s FE/t",
      "enderio.top.suffix.rf": " FE",
      "legacy.enderio.power.rf": "FE",
      "legacy.enderio.stirlingGenerator.remaining": "Remaining %1$s|%2$sm }%3$ss|%4$s FE",
      "legacy.enderio.top.rf.value": "%s FE/t",
      "legacy.enderio.top.suffix.rf": " FE",
      "legacy.item.itemPowerItemFilter.tooltip.detailed.line2": "how much FE they have stored",
      "legacy.item.itemRemoteInvAccessadvanced.tooltip.detailed.line3": "Uses {FLUIDNAME} to open a connection and FE to keep it open.",
      "legacy.item.itemRemoteInvAccessbasic.tooltip.detailed.line3": "Uses {FLUIDNAME} to open a connection and FE to keep it open.",
      "legacy.item.itemRemoteInvAccessender.tooltip.detailed.line3": "Uses {FLUIDNAME} to open a connection and FE to keep it open.",
      "legacy.item.itemRodOfReturn.tooltip.detailed.line3": "Requires FE and %s",
      "legacy.tile.blockCapBank.tooltip.detailed.line2": "Can charge FE powered items.",
      "legacy.tile.blockGauge.tooltip.detailed.line1": "Displays FE levels of adjacent"
    },
    "exchangers": {
      "exchangers.tooltip.hold_ctrl": "§8Hold §7Ctrl§8 for controls",
      "exchangers.tooltip.hold_shift": "§8Hold §7Shift§8 for details",
      "exchangers.tooltip.tier": "Tier %s"
    },
    "extrautils2": {
      "extrautils2.text.max.storage.s.rf": "Max Storage: %s FE",
      "extrautils2.text.max.transfer.s.rft": "Max Transfer: %s FE/t",
      "extrautils2.text.requires.rf.transmitters": "Needs Wireless RF Transmitters to send energy",
      "extrautils2.text.sending.s.rf.energy.per.tick": "Sending %s FE/t",
      "extrautils2.text.stored.energy.battery": "Stored Energy (Battery): %s / %s FE",
      "extrautils2.text.stored.energy.total": "Stored Energy (Total): %s / %s FE",
      "extrautils2.text.stores.rf.energy.for.wireless": "Stores energy for wireless transmission",
      "extrautils2.text.transmits.rf.energy.from.batteries": "Sends energy from batteries to nearby blocks"
    },
    "fluxnetworks": {
      "fluxItem.Info": "Smelt Redstone, or throw it into fire or lava"
    },
    "industrialforegoing": {
      "text.industrialforegoing.book.biofuel_generator": "Produces power when provided with Biofuel. A {bucket} of biofuel will produce 160RF/t, a total {640,000}FE. About {28} generators can be run from 1 {Bioreactor}.",
      "text.industrialforegoing.book.petrified_fuel_generator": "When provided with any {solid fuel} will produce power. The {FE}/tick is decided from its burn time, the more {burn time} the fuel has the more {FE}/tick it will produce.@L@@L@NOTE: All fuels burn the same time.",
      "text.industrialforegoing.book.protein_generator": "\"Produces power when provided with Protein. A {bucket} of protein will produce 320RF/t, a total {1,280,000}FE.",
      "text.industrialforegoing.book.welcome_manual": "Welcome to Industrial Foregoing's Manual!@L@@L@To get started you need to place a Tree Fluid Extractor in front of a log to collect Latex and pump into Latex Processing Unit with some water to get Tiny Rubber. @L@@L@{NOTE: Machines don't auto eject, neither they pull! Machines accept FE, FE, Tesla and Mek power.}"
    },
    "integrateddynamics": {
      "aspect.aspects.integrateddynamics.read.boolean.rf.applicable.info": "If the target in some way handles FE",
      "aspect.aspects.integrateddynamics.read.boolean.rf.canextract.info": "If FE can really be extracted from the target, takes into account storage",
      "aspect.aspects.integrateddynamics.read.boolean.rf.caninsert.info": "If FE can really be inserted into the target, takes into account storage and capacity",
      "aspect.aspects.integrateddynamics.read.boolean.rf.isempty.info": "If the target's FE buffer is completely empty",
      "aspect.aspects.integrateddynamics.read.boolean.rf.isfull.info": "If the target's FE buffer is completely full",
      "aspect.aspects.integrateddynamics.read.boolean.rf.isnonempty.info": "If the target's FE buffer is not empty",
      "aspect.aspects.integrateddynamics.read.boolean.rf.isprovider.info": "If the target can provide FE",
      "aspect.aspects.integrateddynamics.read.boolean.rf.isreceiver.info": "If the target can receive FE",
      "aspect.aspects.integrateddynamics.read.double.rf.fillratio.info": "The amount of FE in the target divided by its capacity",
      "aspect.aspects.integrateddynamics.read.integer.rf.amount.info": "The amount of FE stored in the target",
      "aspect.aspects.integrateddynamics.read.integer.rf.capacity.info": "The FE capacity of the target",
      "general.integrateddynamics.energyUnit.name": "FE",
      "operator.operators.integrateddynamics.itemstack.isrfcontainer.info": "If the given item can hold FE",
      "operator.operators.integrateddynamics.itemstack.rfcapacity.info": "The maximum amount of FE that can be stored in this item",
      "operator.operators.integrateddynamics.itemstack.storedrf.info": "The amount of FE stored in this item"
    },
    "mob_grinding_utils": {
      "tooltip.tank_amount": "%s / 32,000 mB"
    },
    "opencomputers": {
      "oc:tooltip.PowerConverter.ThermalExpansion": "§fThermal Expansion FE§7: §a%s:%s§7"
    },
    "quantumstorage": {
      "item.quantumstorage.renderupgrade": "Render Upgrade"
    },
    "randomthings": {
      "tooltip.positionFilter.x": "Position-X: %s",
      "tooltip.positionFilter.y": "Position-Y: %s",
      "tooltip.positionFilter.z": "Position-Z: %s",
      "tooltip.summoningPendulum.entityCount.plural": "Holding %s Entities",
      "tooltip.summoningPendulum.entityCount.singular": "Holding %s Entity"
    },
    "rangedpumps": {
      "block.rangedpumps.pump.state": "%s mB of %s - %s / %s RF",
      "block.rangedpumps.pump.state.working": "Draining at %s, %s, %s.",
      "block.rangedpumps.pump.state_empty": "Empty - %s / %s RF"
    },
    "refinedstorage": {
      "gui.refinedstorage.crafting_preview.available": "Available: %s",
      "gui.refinedstorage.crafting_preview.missing": "Missing: %s",
      "gui.refinedstorage.crafting_preview.to_craft": "To craft: %s",
      "gui.refinedstorage.network_transmitter.dimension": "Dimension %s",
      "gui.refinedstorage.network_transmitter.distance": "%s blocks",
      "gui.refinedstorage.wireless_transmitter.distance": "%s blocks",
      "misc.refinedstorage.energy_stored": "%s / %s FE",
      "misc.refinedstorage.energy_usage": "Usage: %s RS/t",
      "misc.refinedstorage.energy_usage_minimal": "%s RS/t",
      "misc.refinedstorage.network_card.tooltip": "Linked to %s, %s, %s.",
      "misc.refinedstorage.network_item.tooltip": "Linked to %s, %s, %s.",
      "misc.refinedstorage.pattern.oredict": "Matches by item tag",
      "misc.refinedstorage.storage.full": "%s%% full"
    },
    "scanner": {
      "tooltip.scanner.terrain2": "Rebuilds normal world terrain, chunk by chunk."
    },
    "simplyjetpacks": {
      "simplyjetpacks.tooltip.fuel.infinite.energy": "Infinite energy",
      "simplyjetpacks.tooltip.holdShift": "§8Hold §7Shift§8 for details",
      "simplyjetpacks.tooltip.tier": "Tier %s"
    },
    "solarfluxreborn": {
      "info.solarfluxreborn.hold.for.info": "§8Hold §7Shift§8 for details",
      "info.solarfluxreborn.rf": "FE",
      "info.solarfluxreborn.rfPerTick": "FE/t",
      "info.solarfluxreborn.upgrade.efficiency": "Increases the amount of FE generated by %s%%.",
      "info.solarfluxreborn.upgrade.low.light": "Generates more FE in low light environments but less in full brightness."
    },
    "storagedrawers": {
      "storageDrawers.drawers.description": "Holds %s stacks per drawer",
      "storageDrawers.upgrade.description": "Increases storage to %s times base value"
    },
    "xu2blocks": {
      "xu2blocks.jei.quantum_quarry": "Place a Quantum Quarry Actuator against each of the six faces of the quarry. Feed FE into any actuator (20,000 FE per block mined) and put inventories next to the actuators to collect the output. An enchanted book adds its pickaxe enchantments; Efficiency mines extra blocks per tick. Speeding it up with time accelerators makes it explode."
    },
    "xu2gear": {
      "gui.xu2gear.energy": "%s / %s FE",
      "gui.xu2gear.rate": "%s FE/t",
      "jei.xu2gear.energy": "%s FE",
      "jei.xu2gear.rate": "%s FE/t"
    },
    "zerocore": {
      "zerocore:api.multiblock.validation.invalid_foreign_part": "Block at %1$s, %2$s, %3$s belong to another machine",
      "zerocore:api.multiblock.validation.invalid_part": "Part at %1$s, %2$s, %3$s is incompatible with this machine",
      "zerocore:api.multiblock.validation.invalid_part_for_bottom": "Block at %1$s, %2$s, %3$s is not valid for use in the machine's bottom layer",
      "zerocore:api.multiblock.validation.invalid_part_for_frame": "Block at %1$s, %2$s, %3$s is not valid for use in the machine's frame",
      "zerocore:api.multiblock.validation.invalid_part_for_interior": "Block at %1$s, %2$s, %3$s is not valid for use in the machine's interior",
      "zerocore:api.multiblock.validation.invalid_part_for_sides": "Block at %1$s, %2$s, %3$s is not valid for use in the machine's sides",
      "zerocore:api.multiblock.validation.invalid_part_for_top": "Block at %1$s, %2$s, %3$s is not valid for use in the machine's top layer",
      "zerocore:api.multiblock.validation.machine_too_large": "Machine is too large, it may be at most %1$s blocks in the %2$s dimension.",
      "zerocore:api.multiblock.validation.machine_too_small": "Machine is too small, it must be at least %1$s blocks in the %2$s dimension.",
      "zerocore:debugTool.block.header": "%1$s side debug analysis report of block at %2$s, %3$s, %4$s",
      "zerocore:debugTool.block.intro": "Found %1$s name(s) in the Ore Dictionary for block %2$s",
      "zerocore:debugTool.tile.header": "%1$s side debug analysis report of Tile Entity at %2$s, %3$s, %4$s"
    }
  }
  // </generated-lang>
  const JsonObject = Java.loadClass('com.google.gson.JsonObject')
  ClientEvents.generateAssets('last', event => {
    for (let ns in LANG) {
      let o = new JsonObject()
      for (let k in LANG[ns]) o.addProperty(k, String(LANG[ns][k]))
      event.json(ns + ':lang/en_us', o)
    }
  })

  // Namespace -> one item it registers. The "@namespace" filter is only used when that item
  // exists: an empty filter would match every item in the game.
  const TECH_NAMESPACES = {
    immersiveengineering: 'alloy_smelter', enderio: 'yeta_wrench', rftools: 'machine_frame',
    rftoolscontrol: 'processor', rftoolsdim: 'dimlet_workbench', fluxnetworks: 'flux_plug',
    integrateddynamics: 'cable', integratedtunnels: 'part_importer_item', actuallyadditions: 'crusher',
    refinedstorage: 'controller', rebornstorage: '1024k_storage_disk', opencomputers: 'analyzer',
    storagedrawers: 'controller', industrialforegoing: 'animal_feeder', mob_grinding_utils: 'fan',
    randomthings: 'fertilized_dirt', draconicevolution: 'generator', bigreactors: 'reactorcontroller',
    solarfluxreborn: 'solar0', simplyjetpacks: 'jetpack_eio_1', quantumstorage: 'quantumdsu',
    extrautils2: 'pipe', xu2blocks: 'trash_can', xu2gear: 'unstable_ingot', rangedpumps: 'pump',
    exchangers: 'diamond_exchanger', stevescarts: 'blockcargomanager', scanner: 'terrainscanner',
    elevatorid: 'elevator_white', packingtape: 'tape', chesttransporter: 'chesttransporter',
    colossalchests: 'upgrade_tool', ironchest: 'copper_chest'
  }

  // ---------------------------------------------------------------------------
  // Shift sections. Each entry: item id -> lines (plain strings, shown gray).
  // ---------------------------------------------------------------------------
  const INFO = {}
  const info = (ids, lines) => { for (const id of [].concat(ids)) INFO[id] = lines }
  const colors = ['white', 'orange', 'magenta', 'light_blue', 'yellow', 'lime', 'pink', 'gray',
    'light_gray', 'cyan', 'purple', 'blue', 'brown', 'green', 'red', 'black']

  // ---- Ender IO --------------------------------------------------------------
  info('enderio:alloy_smelter', ['Smelts Ender IO alloys from up to', 'three ingredients. Also works as a', 'powered furnace.', 'Capacitors raise speed and storage.'])
  info('enderio:sag_mill', ['Grinds ores, gravel and more into', 'dusts with bonus outputs.', 'Grinding balls add output, save power.', 'Capacitors raise speed and storage.'])
  info('enderio:stirling_generator', ['Burns solid fuel to make power.', 'Capacitors raise output and efficiency.'])
  info('enderio:combustion_generator', ['Burns liquid fuel (Hootch, Rocket Fuel,', 'Fire Water) to make power.', 'Needs a coolant such as water.', 'Output depends on the fuel.'])
  info(['enderio:zombie_generator', 'enderio:frank_n_zombie'], ['Burns Nutrient Distillation for power.'])
  info(['enderio:photovoltaic_cell', 'enderio:advanced_photovoltaic_cell', 'enderio:vibrant_photovoltaic_cell'], ['Makes power in daylight.', 'Needs a clear view of the sky.'])
  info(['enderio:basic_capacitor_bank', 'enderio:capacitor_bank', 'enderio:vibrant_capacitor_bank'], ['Stores energy. Banks placed together', 'form one big multiblock store.', 'Charges powered items put inside.'])
  info('enderio:creative_capacitor_bank', ['Creative: endless energy.'])
  info('enderio:painting_machine', ['Paints facades, stairs, slabs, fences,', 'pressure plates, glass and machines', 'to look like another block.'])
  info('enderio:slice_and_splice', ['Slices mob heads and splices them into', 'Ender IO parts such as Z-Logic', 'controllers and Skeletal Contractors.'])
  info('enderio:soul_binder', ['Binds captured souls (Soul Vials)', 'into items, e.g. sets a Broken', 'Spawner\'s mob or makes soul parts.', 'Uses power and experience.'])
  info('enderio:powered_spawner', ['Spawns the bound mob using power.', 'Set the mob by combining with a', 'Broken Spawner in an anvil.', 'Capacitors raise speed and storage.'])
  info('enderio:broken_spawner', ['Drops from mined spawners and holds', 'their mob. Combine with a Powered', 'Spawner in an anvil to set its mob.'])
  info('enderio:vat', ['Brews Ender IO fluids (Nutrient', 'Distillation, Hootch, Rocket Fuel...)', 'from a base fluid and two ingredients.'])
  info('enderio:farming_station', ['Plants and harvests crops and trees.', 'Needs power and tools (hoe, axe).', 'Fortune and Looting on tools apply.', 'Capacitors raise range and power use.'])
  info('enderio:killer_joe', ['Attacks nearby mobs with the sword', 'inside. Needs Nutrient Distillation.', 'Collects the experience as liquid XP.'])
  info('enderio:crafter', ['Powered auto-crafter.', 'Set a recipe in the GUI and feed', 'it ingredients. Power per craft.'])
  info('enderio:enchanter', ['Uses levels to put enchantments', 'onto books from enchanting', 'ingredients.'])
  info('enderio:xp_obelisk', ['Stores experience. Pull or add levels', 'in the GUI; outputs liquid XP to', 'tanks next to it.'])
  info('enderio:xp_vacuum', ['Pulls nearby XP orbs and pushes them', 'as liquid XP into adjacent tanks', 'or conduits.'])
  info('enderio:vacuum_chest', ['Pulls nearby dropped items into', 'its inventory. Filter and range in', 'the GUI.'])
  info('enderio:wireless_charger', ['Charges powered items in the', 'inventories of nearby players.'])
  info('enderio:travel_anchor', ['Teleport between anchors: stand on one,', 'look at another and jump.', 'Sneak to go down. Works with the', 'Staff of Travelling. Can be painted.'])
  info('enderio:telepad', ['Teleports entities to a saved spot in', 'any dimension. Build a 3x3 of Telepads;', 'set targets with Location Printouts', 'or a Dialing Device.'])
  info('enderio:dialing_device', ['Place near a Telepad. Stores and', 'selects Telepad destinations.'])
  info('enderio:dimensional_transceiver', ['Sends items, fluids and power', 'wirelessly to other Transceivers,', 'across any distance and dimension.', 'Set channels in the GUI.'])
  info('enderio:weather_obelisk', ['Changes the weather. Needs power and', 'a Firework Rocket as the catalyst.'])
  info('enderio:attractor_obelisk', ['Lures mobs toward it.', 'Put soul vials inside to pick', 'which mobs it affects.'])
  info('enderio:aversion_obelisk', ['Stops mobs spawning in its area.', 'Put soul vials inside to pick', 'which mobs it affects.'])
  info('enderio:inhibitor_obelisk', ['Stops teleporting into or out of', 'its area.'])
  info('enderio:relocator_obelisk', ['Moves mobs that spawn in its area', 'out of it. Put soul vials inside', 'to pick which mobs.'])
  info('enderio:reservoir', ['Two or more joined Reservoirs with', '2 buckets of water give endless water.', 'Use a wrench to turn on auto-output.'])
  info(['enderio:fluid_tank', 'enderio:pressurized_fluid_tank'], ['Portable fluid tank: keeps its fluid', 'when broken. Can fill and empty', 'buckets and other containers.'])
  info('enderio:inventory_panel', ['Shows every inventory on its item', 'conduit network that has a Remote', 'Awareness Upgrade. Uses Nutrient', 'Distillation. Has a crafting grid.'])
  info(['enderio:inventory_panel_remote', 'enderio:advanced_inventory_panel_remote', 'enderio:ender_inventory_panel_remote'], ['Opens an Inventory Panel from afar.', 'Sneak-use a panel to bind it.', 'Uses fluid to connect and energy', 'to stay connected.'])
  info('enderio:inventory_panel_sensor', ['Gives a redstone signal based on how', 'many of an item the Inventory Panel', 'network holds.'])
  info('enderio:remote_awareness_upgrade', ['Put in an item conduit connection to', 'let Inventory Panels see and take', 'from that inventory.'])
  info(['enderio:power_monitor', 'enderio:graphical_power_monitor'], ['Shows power use and storage of the', 'energy conduit network it touches.'])
  info('enderio:rf_gauge', ['Shows the energy level of the', 'blocks next to it.'])
  info(['enderio:item_buffer', 'enderio:power_buffer', 'enderio:omni_buffer'], ['A small storage block that machines', 'and conduits can push into and', 'pull from.'])
  info('enderio:creative_buffer', ['Creative: endless energy buffer.'])
  info('enderio:energy_conduit', ['Carries energy. Upgrade to Enhanced', 'or Ender Energy Conduits for more.'])
  info(['enderio:enhanced_energy_conduit', 'enderio:ender_energy_conduit'], ['Carries energy at a higher rate.'])
  info('enderio:fluid_conduit', ['Carries fluids. Flow follows gravity', 'and depends on the fluid.'])
  info('enderio:pressurized_fluid_conduit', ['Carries fluids faster than a basic', 'Fluid Conduit.'])
  info('enderio:ender_fluid_conduit', ['Moves fluid instantly. One line can', 'carry several fluids.'])
  info('enderio:item_conduit', ['Moves items between inventories.', 'Set sides to extract or insert with', 'the Yeta Wrench; add filters and', 'speed upgrades per connection.'])
  info('enderio:redstone_conduit', ['Carries 16 coloured redstone channels.'])
  info('enderio:yeta_wrench', ['Configures conduits and machines.', 'Sneak-use breaks machines and', 'conduits. Hides conduit facades.'])
  info('enderio:conduit_probe', ['Use on a conduit to see its network.', 'Copy mode: sneak-use to copy a', 'bundle\'s settings, use to paste.'])
  info(['enderio:conduit_facade', 'enderio:hardened_conduit_facade', 'enderio:transparent_conduit_facade', 'enderio:transparent_hardened_conduit_facade'], ['Use on a conduit to hide it.', 'Paint it in the Painting Machine.', 'Hidden while you hold a wrench.'])
  info('enderio:staff_of_travelling', ['While held, Travel Anchors light up;', 'use to jump to one. Sneak-use for a', 'short blink forward. Uses energy.'])
  info('enderio:electromagnet', ['Pulls nearby items to you.', 'Sneak-use to switch on or off.', 'Must be charged and in your hotbar.'])
  info('enderio:soul_vial', ['Use on a mob to capture it.', 'Use again to release it.', 'Filled vials feed the Soul Binder.'])
  info('enderio:coordinate_selector', ['Use on a block to print a Location', 'Printout of the spot next to it.', 'Sneak-use to pick the block itself.', 'Works from a distance.'])
  info('enderio:location_printout', ['Made with the Coordinate Selector.', 'Add it to a Telepad or Dialing', 'Device as a destination.'])
  info('enderio:rod_of_return', ['Teleports you back to a Telepad.', 'Sneak-use a Telepad to bind it.', 'Needs energy and Ender Distillation.'])
  info('enderio:cold_fire_igniter', ['Places Cold Fire, which does not', 'spread. Uses Vapor of Levity.'])
  info('enderio:experience_rod', ['Use on a tank of liquid XP to gain', 'levels; sneak-use to put levels in.'])
  info(['enderio:basic_item_filter', 'enderio:advanced_item_filter', 'enderio:limited_item_filter'], ['Filter for item conduit connections', 'and other Ender IO machines.'])
  info('enderio:existing_item_filter', ['Only lets through items already in', 'the inventory. Sneak-use on an', 'inventory to snapshot it.'])
  info('enderio:mod_item_filter', ['Only lets through items from', 'chosen mods.'])
  info('enderio:power_item_filter', ['Filters chargeable items by how', 'much energy they hold.'])
  info('enderio:extract_speed_upgrade', ['Item conduit upgrade: pulls 4 more', 'items per extraction (up to 15).'])
  info('enderio:extract_speed_downgrade', ['Item conduit upgrade: pulls only', '1 item per extraction.'])
  info(['enderio:basic_capacitor', 'enderio:double_layer_capacitor', 'enderio:octadic_capacitor', 'enderio:loot_capacitor'], ['Machine upgrade: raises speed and', 'energy storage. Better capacitors', 'give bigger boosts.'])
  info(['enderio:glider_wing', 'enderio:glider_wings'], ['Dark Steel chestplate upgrade', '(anvil): lets you glide.'])
  info('enderio:dark_steel_anvil', ['An anvil that lasts much longer.'])
  info(['enderio:resetting_lever_ten', 'enderio:resetting_lever_thirty', 'enderio:resetting_lever_sixty', 'enderio:resetting_lever_three_hundred'], ['A lever that switches itself back', 'off after the time in its name.'])
  info(['enderio:light', 'enderio:powered_light', 'enderio:wireless_powered_light'], ['Lights up when given a redstone signal.', 'Powered lights need energy and light', 'a large area.'])
  info(['enderio:light_inverted', 'enderio:powered_light_inverted', 'enderio:wireless_powered_light_inverted'], ['Lights up until it gets a redstone', 'signal. Powered lights need energy', 'and light a large area.'])
  info(['enderio:dark_steel_pressure_plate', 'enderio:silent_dark_steel_pressure_plate'], ['Only players press it.', 'Can be painted.'])
  info(['enderio:soularium_pressure_plate', 'enderio:silent_soularium_pressure_plate'], ['Only hostile mobs press it.', 'Can be painted.'])
  info(['enderio:tuned_soularium_pressure_plate', 'enderio:silent_tuned_soularium_pressure_plate'], ['Only one mob type presses it', '(set in the Soul Binder).', 'Can be painted.'])
  info('enderio:z_logic_controller', ['Machine part that gives the Killer Joe', 'and Powered Spawner their smarts.'])
  info('enderio:skeletal_contractor', ['Machine part for obelisks.'])
  info('enderio:enderios', ['Not actually healthy.', 'Side effects include random', 'teleporting.'])

  // ---- Random Things ----------------------------------------------------------
  info('randomthings:fertilized_dirt', ['Crops on it grow 3x faster and', 'it never needs water or tilling.', 'Use a hoe to make it farmland.'])
  info('randomthings:player_interface', ['Lets pipes and machines reach the', 'inventory of the player who placed it.'])
  info('randomthings:creative_player_interface', ['Creative player interface.'])
  info(['randomthings:item_collector', 'randomthings:advanced_item_collector'], ['Picks up dropped items in range and', 'puts them in the inventory it faces.', 'The advanced one has a filter', 'and a bigger, adjustable range.'])
  info('randomthings:block_breaker', ['Breaks the block in front of it.', 'Redstone controls it.'])
  info(['randomthings:basic_redstone_interface', 'randomthings:advanced_redstone_interface'], ['Sends its redstone signal to a', 'linked block far away. Link with the', 'Redstone Tool.'])
  info('randomthings:redstone_tool', ['Links Redstone Interfaces to targets:', 'use on the interface, then on the', 'block to power.'])
  info('randomthings:redstone_remote', ['Remote control for redstone.', 'Put item+link pairs in the GUI,', 'then switch them from anywhere.'])
  info('randomthings:redstone_activator', ['Gives a redstone pulse or toggle', 'when powered. Set mode and length', 'in the GUI.'])
  info('randomthings:redstone_observer', ['Copies the redstone level at a linked', 'spot. Link it with the Redstone Tool.'])
  info('randomthings:analog_emitter', ['Emits a redstone signal of a set', 'strength. Use to change it.'])
  info(['randomthings:contact_button', 'randomthings:contact_lever'], ['Pressed by using the block it is', 'stuck to.'])
  info('randomthings:chat_detector', ['Emits redstone when its owner says', 'the set message in chat.'])
  info('randomthings:online_detector', ['Emits redstone while the named player', 'is online.'])
  info('randomthings:entity_detector', ['Emits redstone when entities are in', 'its area. Filter and range in the GUI.'])
  info('randomthings:biome_radar', ['Put a Biome Crystal in it to search', 'for that biome.'])
  info('randomthings:biome_crystal', ['Holds one biome. Used by the', 'Biome Radar.'])
  info('randomthings:ender_bridge', ['When powered, teleports entities', 'standing on it to an Ender Anchor', 'straight ahead of it.'])
  info('randomthings:prismarine_ender_bridge', ['A faster, longer-range Ender Bridge.'])
  info('randomthings:ender_anchor', ['Target block for the Ender Bridge.'])
  info('randomthings:ender_mailbox', ['Receives Ender Letters sent to you.'])
  info('randomthings:ender_letter', ['Write a receiver\'s name and put items', 'in it; drop it in your Ender Mailbox', 'to send it.'])
  info(['randomthings:item_redirector', 'randomthings:filtered_item_redirector'], ['Changes where items pass through.', 'The filtered one sorts items by', 'filter in the GUI.'])
  info('randomthings:iron_dropper', ['A dropper with options: no random', 'spread, delay and redstone mode.'])
  info('randomthings:imbuing_station', ['Makes Imbues from a bottle and', 'ingredients. Drink one to coat your', 'weapon with fire, poison, wither,', 'experience or collapse.'])
  info(['randomthings:imbue_fire', 'randomthings:imbue_poison', 'randomthings:imbue_wither', 'randomthings:imbue_experience', 'randomthings:imbue_collapse'], ['Drink to give your attacks this', 'effect for a while.'])
  info('randomthings:potion_vaporizer', ['Fills an area with the effect of the', 'potion inside. Needs fuel.'])
  info('randomthings:rain_shield', ['Stops rain in a wide radius.'])
  info('randomthings:nature_core', ['Grows plants and spawns animals', 'around it. Found in the wild.'])
  info('randomthings:fluid_display', ['Looks like a still fluid block.', 'Use with a bucket to set the fluid.'])
  info('randomthings:voxel_projector', ['Projects a 3D model you draw in its', 'GUI.'])
  info('randomthings:spectre_key', ['Hold use to enter your own Spectre', 'Dimension; use again to return.'])
  info('randomthings:spectre_anchor', ['Put on an item to keep it on death.'])
  info('randomthings:summoning_pendulum', ['Use on animals to pick them up', '(up to 5); use on a block to', 'release them.'])
  info('randomthings:bottle_of_air', ['Drink underwater for a breath', 'of air.'])
  info('randomthings:lava_charm', ['Protects you from lava for a while;', 'recharges out of lava.'])
  info('randomthings:lava_wader', ['Boots with a built-in Lava Charm.'])
  info(['randomthings:water_walking_boots', 'randomthings:obsidian_water_walking_boots'], ['Lets you walk on water. The obsidian', 'pair also acts as an Obsidian Skull.'])
  info(['randomthings:obsidian_skull', 'randomthings:obsidian_skull_ring'], ['Fire damage gives you a short', 'fire resistance.'])
  info('randomthings:magic_hood', ['Hides your name tag from others.'])
  info(['randomthings:magic_bean', 'randomthings:lesser_magic_bean'], ['Plant it to grow a beanstalk that', 'reaches the sky. Lesser beans grow', 'shorter stalks.'])
  info('randomthings:pitcher_plant', ['Fills a bucket with water when used.'])
  info('randomthings:ecto_plasm', ['Dropped by spirits.'])
  info('randomthings:super_lubricent_ice', ['Extremely slippery.'])
  info('randomthings:light_redirector', ['Redirects light from one side', 'to another.'])
  info('randomthings:dungeon_chest_generator', ['Creative: makes a dungeon chest', 'with loot of the set category.'])
  info('randomthings:spirit_spawn_egg', ['Creative: spawns a spirit.'])
  info(['randomthings:entity_filter', 'randomthings:position_filter', 'randomthings:item_filter'], ['Filter for Random Things machines.'])
  info(colors.map(c => 'randomthings:grass_seeds_' + c).concat(['randomthings:grass_seeds']), ['Use on dirt to turn it into grass', 'of this colour.'])

  // ---- Refined Storage --------------------------------------------------------
  info(['refinedstorage:controller', 'refinedstorage:creative_controller'], ['The heart of a Refined Storage', 'network. Needs energy; every device', 'on the network draws from it.'])
  info('refinedstorage:cable', ['Connects devices to the network.'])
  info('refinedstorage:grid', ['Shows and takes items from the', 'whole network.'])
  info('refinedstorage:crafting_grid', ['A Grid with a crafting table that', 'pulls ingredients from storage.'])
  info('refinedstorage:pattern_grid', ['Writes crafting patterns for', 'autocrafting.'])
  info('refinedstorage:fluid_grid', ['Shows and takes fluids from the', 'whole network.'])
  info('refinedstorage:disk_drive', ['Holds up to 8 storage disks and adds', 'them to the network.'])
  info('refinedstorage:disk_manipulator', ['Moves items into or out of disks', '(e.g. empty a disk into the network).'])
  info('refinedstorage:importer', ['Pulls items or fluids from the', 'inventory it faces into the network.'])
  info('refinedstorage:exporter', ['Pushes chosen items or fluids from', 'the network into what it faces.'])
  info('refinedstorage:external_storage', ['Adds the inventory it faces (chest,', 'drawers, tank) to the network.'])
  info('refinedstorage:interface', ['Import and export items to the', 'network with pipes or hoppers.'])
  info('refinedstorage:fluid_interface', ['Import and export fluids to the', 'network.'])
  info('refinedstorage:constructor', ['Places blocks (or drops items)', 'from the network in front of it.'])
  info('refinedstorage:destructor', ['Breaks the block in front of it and', 'stores the drops.'])
  info('refinedstorage:crafter', ['Holds patterns. Facing a machine,', 'it sends ingredients there for', 'processing patterns.'])
  info('refinedstorage:crafting_monitor', ['Shows and cancels running', 'autocrafting jobs.'])
  info('refinedstorage:detector', ['Emits redstone when the amount of', 'an item meets a set condition.'])
  info('refinedstorage:relay', ['Turns the network beyond it on or', 'off with redstone.'])
  info('refinedstorage:network_transmitter', ['Links this network to a Network', 'Receiver elsewhere. Needs a Network', 'Card bound to the receiver.'])
  info('refinedstorage:network_receiver', ['Other end of a Network Transmitter.'])
  info('refinedstorage:network_card', ['Use on a Network Receiver to bind,', 'then put it in a Transmitter.'])
  info(['refinedstorage:wireless_grid', 'refinedstorage:wireless_crafting_monitor'], ['Use on a Controller to bind.', 'Works near a Wireless Transmitter.'])
  info(['refinedstorage:creative_wireless_grid', 'refinedstorage:creative_wireless_crafting_monitor'], ['Creative: needs no energy.'])
  info(['refinedstorage:reader', 'refinedstorage:writer'], ['Reads or writes redstone and', 'energy over a network channel.'])
  info('refinedstorage:wrench', ['Rotates RS blocks. Sneak-use to', 'switch mode; configuration mode', 'copies settings.'])
  info('refinedstorage:pattern', ['Write it in a Pattern Grid, then put', 'it in a Crafter. Shift shows inputs.'])
  info('refinedstorage:grid_filter', ['Put in a Grid to show only', 'chosen items.'])
  info('refinedstorage:machine_casing', ['Base block for RS machines.'])
  info('refinedstorage:speed_upgrade', ['Machine upgrade: works faster.'])
  info('refinedstorage:range_upgrade', ['Wireless Transmitter upgrade: more', 'range.'])
  info('refinedstorage:crafting_upgrade', ['Exporter/Constructor upgrade: crafts', 'missing items before exporting.'])
  info('refinedstorage:stack_upgrade', ['Moves a whole stack at a time.'])
  info('refinedstorage:interdimensional_upgrade', ['Wireless and network links work', 'across dimensions.'])
  info(['refinedstorage:silk_touch_upgrade', 'refinedstorage:fortune_upgrade'], ['Destructor upgrade.'])

  // ---- Flux Networks ----------------------------------------------------------
  info('fluxnetworks:flux_controller', ['Network brain: gives the network a', 'name, priority and security. One', 'per network.'])
  info('fluxnetworks:flux_plug', ['Takes energy from the block it', 'touches into the network.'])
  info('fluxnetworks:flux_point', ['Sends network energy into the', 'block it touches.'])
  info(['fluxnetworks:flux_storage', 'fluxnetworks:herculean_flux_storage', 'fluxnetworks:gargantuan_flux_storage'], ['Stores network energy. Keeps its', 'charge when broken.'])
  info('fluxnetworks:flux_configurator', ['Sneak-use a flux block to copy its', 'network, use another to paste.'])
  info('fluxnetworks:flux_core', ['Crafting part for flux devices.'])

  // ---- Integrated Dynamics / Tunnels -----------------------------------------
  info('integrateddynamics:cable', ['Logic Cable: connects parts and', 'blocks into one network. Use a', 'Wrench to remove parts.'])
  info('integrateddynamics:logic_programmer', ['Writes Variable Cards: pick an', 'operator or value, fill in its', 'inputs, then insert a blank card.'])
  info('integrateddynamics:portable_logic_programmer', ['A Logic Programmer you can carry.'])
  info('integrateddynamics:variable', ['Holds a value, aspect or operator.', 'Write it in a Logic Programmer or a', 'reader/writer part.'])
  info('integrateddynamics:variablestore', ['Stores Variable Cards so the whole', 'network can use them.'])
  info('integrateddynamics:proxy', ['Gives one variable a network-wide', 'ID so other cards can refer to it.'])
  info('integrateddynamics:materializer', ['Turns a variable into a fixed', 'value card.'])
  info('integrateddynamics:delay', ['Keeps a list of a variable\'s recent', 'values.'])
  info(['integrateddynamics:energy_battery', 'integrateddynamics:energy_battery_creative'], ['Stores energy for the network.'])
  info('integrateddynamics:coal_generator', ['Burns fuel to power the network.'])
  info('integrateddynamics:squeezer', ['Jump on it to squeeze items, e.g.', 'Menril Logs into Menril Resin.'])
  info('integrateddynamics:drying_basin', ['Dries items and fluids over time,', 'e.g. resin into Crystalized Menril.'])
  info('integrateddynamics:labeller', ['Names Variable Cards.'])
  info('integrateddynamics:variable_transformer', ['Lets parts read or write fluid and', 'item variables.'])
  info('integrateddynamics:facade', ['Hides cables. Use on a Logic Cable.'])
  info('integrateddynamics:wrench', ['Removes parts and rotates blocks.'])
  info('integrateddynamics:part_display_panel', ['Part: shows a variable\'s value.'])
  info(['integrateddynamics:part_static_light_panel', 'integrateddynamics:part_dynamic_light_panel'], ['Part: gives light. The dynamic panel', 'sets brightness from a variable.'])
  for (const t of ['audio', 'block', 'entity', 'extradimensional', 'fluid', 'inventory', 'machine', 'network', 'redstone', 'world'])
    info('integrateddynamics:part_' + t + '_reader', ['Part: reads values from what it', 'faces into Variable Cards.'])
  for (const t of ['audio', 'effect', 'inventory', 'redstone'])
    info('integrateddynamics:part_' + t + '_writer', ['Part: acts on what it faces using', 'a variable (e.g. redstone level).'])
  for (const t of ['item', 'fluid', 'energy']) {
    info('integratedtunnels:part_importer_' + t, ['Part: pulls ' + t + (t === 'energy' ? '' : 's') + ' from what it faces', 'into the network.'])
    info('integratedtunnels:part_exporter_' + t, ['Part: pushes ' + t + (t === 'energy' ? '' : 's') + ' from the network', 'into what it faces.'])
    info('integratedtunnels:part_interface_' + t, ['Part: adds the ' + t + ' storage it faces', 'to the network.'])
  }

  // ---- Actually Additions ------------------------------------------------------
  info('actuallyadditions:crusher', ['Crushes ores into two dusts.'])
  info('actuallyadditions:crusher_double', ['Crushes two ores at once.'])
  info('actuallyadditions:powered_furnace', ['Smelts two items at once.'])
  info('actuallyadditions:empowerer', ['Empowers crystals: put the item on', 'it and the ingredients on four', 'Display Stands around it.'])
  info('actuallyadditions:display_stand', ['Holds an item for the Empowerer.'])
  info('actuallyadditions:coal_generator', ['Burns fuel to make Crystal Flux.'])
  info('actuallyadditions:oil_generator', ['Burns Canola, Refined Canola or', 'Crystallized Oil to make power.'])
  info('actuallyadditions:leaf_generator', ['Eats leaves around it for power.'])
  info('actuallyadditions:heat_collector', ['Makes power from lava on 4 sides.', 'Has a small chance to eat the lava.'])
  info('actuallyadditions:bio_reactor', ['Makes power from seeds and crops', 'inside; more variety, more power.'])
  info('actuallyadditions:solar_panel', ['Makes a little power in daylight.'])
  info('actuallyadditions:battery_box', ['Holds a battery and charges or', 'discharges it.'])
  info('actuallyadditions:fermenting_barrel', ['Turns Canola Oil into Refined', 'Canola Oil.'])
  info('actuallyadditions:energizer', ['Charges items with power.'])
  info('actuallyadditions:enervator', ['Drains power from items.'])
  info('actuallyadditions:farmer', ['Plants and harvests a 9x9 area in', 'front of it. Uses power.'])
  info('actuallyadditions:breaker', ['Breaks the block in front of it.', 'Redstone pauses it.'])
  info('actuallyadditions:placer', ['Places blocks in front of it.', 'Redstone pauses it.'])
  info('actuallyadditions:dropper', ['Drops items in front of it.'])
  info('actuallyadditions:fluid_placer', ['Places fluid in front of it.'])
  info('actuallyadditions:fluid_collector', ['Picks up the fluid in front of it.'])
  info('actuallyadditions:long_range_breaker', ['Breaks a line of blocks up to 8 far.'])
  info('actuallyadditions:vertical_digger', ['Mines ores in a column below it.', 'Uses power; filter and range in GUI.'])
  info('actuallyadditions:feeder', ['Feeds animals around it to breed', 'them.'])
  info('actuallyadditions:ranged_collector', ['Picks up dropped items nearby.'])
  info('actuallyadditions:xp_solidifier', ['Turns experience into Solidified', 'Experience.'])
  info('actuallyadditions:item_repairer', ['Repairs tools slowly with power.'])
  info('actuallyadditions:coffee_machine', ['Brews coffee with power, water and', 'coffee beans. Add potion ingredients', 'to the cup for effects.'])
  info('actuallyadditions:firework_box', ['Launches fireworks with power.'])
  info('actuallyadditions:shock_suppressor', ['Stops explosions nearby; uses power.'])
  info('actuallyadditions:lava_factory_controller', ['Makes lava with power. Surround the', 'block above with Lava Factory Casing.'])
  info('actuallyadditions:item_interface', ['Pipe access to the inventories', 'linked by Item Lasers.'])
  info('actuallyadditions:hopping_item_interface', ['An Item Interface that also pushes', 'and pulls like a hopper.'])
  info(['actuallyadditions:laser_relay', 'actuallyadditions:laser_relay_advanced', 'actuallyadditions:laser_relay_extreme'], ['Moves energy between linked relays.', 'Link them with the Laser Wrench.'])
  info('actuallyadditions:laser_relay_fluids', ['Moves fluids between linked relays.'])
  info(['actuallyadditions:laser_relay_item', 'actuallyadditions:laser_relay_item_advanced'], ['Links inventories for an Item', 'Interface. Link with the Laser Wrench.'])
  info('actuallyadditions:laser_wrench', ['Use on two Laser Relays to link', 'them.'])
  info(['actuallyadditions:phantom_itemface', 'actuallyadditions:phantom_liquiface', 'actuallyadditions:phantom_energyface', 'actuallyadditions:phantom_redstoneface'], ['Acts like the block it is bound to.', 'Bind with the Phantom Connector.'])
  info(['actuallyadditions:phantom_breaker', 'actuallyadditions:phantom_placer'], ['Breaks or places at a bound spot.', 'Bind with the Phantom Connector.'])
  info('actuallyadditions:phantom_booster', ['Place on top of a Phantom block to', 'boost its range.'])
  info('actuallyadditions:phantom_connector', ['Use on a block, then on a Phantom', 'block to bind them.'])
  info('actuallyadditions:atomic_reconstructor', ['Fires a laser that converts blocks', 'and items, using power. Lenses', 'change what it does.'])
  info('actuallyadditions:player_interface', ['Pipes reach the inventory of the', 'player who placed it (or one tagged', 'with a Player Probe).'])
  info('actuallyadditions:lamp_controller', ['Turns attached lamps on and off.'])
  info(['actuallyadditions:crate_small', 'actuallyadditions:crate_medium', 'actuallyadditions:crate_large'], ['A storage crate.'])
  info('actuallyadditions:crate_keeper', ['Use on a crate to move it with its', 'items inside.'])
  info('actuallyadditions:greenhouse_glass', ['Speeds up plants below it.'])
  info('actuallyadditions:engineers_goggles', ['See mobs through walls.'])
  info('actuallyadditions:engineers_goggles_advanced', ['See mobs through walls, with more', 'range.'])
  info('actuallyadditions:leaf_blower', ['Clears grass and flowers in front', 'of you.'])
  info('actuallyadditions:advanced_leaf_blower', ['Also clears leaves.'])
  info('actuallyadditions:teleport_staff', ['Teleports you where you look. Uses', 'power.'])
  info('actuallyadditions:travelers_sack', ['A small backpack.'])
  info('actuallyadditions:void_sack', ['A backpack that voids filtered items.'])
  info('actuallyadditions:handheld_filler', ['Fills an area with the selected', 'block. Sneak-use to select.'])
  info('actuallyadditions:player_probe', ['Use on a player to bind a Player', 'Interface to them.'])

  // ---- Mob Grinding Utils ----------------------------------------------------
  info('mob_grinding_utils:spikes', ['Hurts mobs that stand on it.'])
  info('mob_grinding_utils:xp_tap', ['Attach to a Tank to let its liquid', 'XP out as orbs.'])
  info('mob_grinding_utils:tank', ['Holds 32,000 mB of fluid and keeps', 'it when broken.'])
  info('mob_grinding_utils:dragon_muffler', ['Mutes the Ender Dragon\'s sounds.'])
  info('mob_grinding_utils:wither_muffler', ['Mutes the Wither\'s sounds.'])
  info('mob_grinding_utils:absorption_upgrade', ['Absorption Hopper upgrade.'])
  info(['mob_grinding_utils:fan_upgrade_height', 'mob_grinding_utils:fan_upgrade_speed', 'mob_grinding_utils:fan_upgrade_width'], ['Mob Fan upgrade.'])

  // ---- Draconic Evolution -------------------------------------------------------
  info('draconicevolution:fusion_crafting_core', ['Centre of a Fusion Crafting setup:', 'Injectors around it, aimed at it,', 'hold the ingredients. Feed injectors', 'power and activate the core.'])
  info(['draconicevolution:crafting_pedestal', 'draconicevolution:crafting_pedestal_wyvern', 'draconicevolution:crafting_pedestal_draconic', 'draconicevolution:crafting_pedestal_chaotic'], ['Fusion Crafting injector: holds one', 'ingredient and must face the core.', 'Higher tiers allow higher recipes.'])
  info('draconicevolution:energy_storage_core', ['Energy Core: a huge multiblock store.', 'Build the shell shown when you use', 'it, then add 4 Stabilizers.'])
  info('draconicevolution:energy_core_stabilizer', ['Stabilizer for the Energy Core.', 'Place 4 around the core.'])
  info('draconicevolution:energy_pylon', ['Moves energy into or out of an', 'Energy Core. Needs glass above or', 'below it.'])
  info(['draconicevolution:energy_crystal_io_basic', 'draconicevolution:energy_crystal_io_wyvern', 'draconicevolution:energy_crystal_io_draconic'], ['Connects a wireless energy network', 'to the block it is on.'])
  info(['draconicevolution:energy_crystal_relay_basic', 'draconicevolution:energy_crystal_relay_wyvern', 'draconicevolution:energy_crystal_relay_draconic'], ['Relays energy between crystals.', 'Link with the Crystal Binder.'])
  info(['draconicevolution:energy_crystal_wireless_basic', 'draconicevolution:energy_crystal_wireless_wyvern', 'draconicevolution:energy_crystal_wireless_draconic'], ['Sends energy wirelessly to linked', 'blocks. Link with the Crystal Binder.'])
  info('draconicevolution:crystal_binder', ['Links energy crystals and blocks.'])
  info('draconicevolution:generator', ['Burns solid fuel to make power.'])
  info('draconicevolution:grinder', ['Kills nearby mobs with power. Drops', 'and XP are collected.'])
  info('draconicevolution:energy_infuser', ['Charges Draconic items with power.'])
  info('draconicevolution:reactor_core', ['Draconic Reactor: very high output.', 'Needs Stabilizers, Injectors and', 'careful control. It can explode.'])
  info(['draconicevolution:reactor_stabilizer', 'draconicevolution:reactor_injector'], ['Part of the Draconic Reactor.'])
  info('draconicevolution:flux_gate', ['Limits energy flow. Rate set by', 'redstone in the GUI.'])
  info('draconicevolution:fluid_gate', ['Limits fluid flow. Rate set by', 'redstone in the GUI.'])
  info('draconicevolution:dislocator_receptacle', ['Holds a bound Dislocator and', 'teleports what enters its portal.'])
  info('draconicevolution:dislocator_pedestal', ['Holds a Dislocator; use it to', 'teleport.'])
  info(['draconicevolution:entity_detector', 'draconicevolution:entity_detector_advanced'], ['Emits redstone when entities are', 'near. Configure range and filter.'])
  info('draconicevolution:particle_generator', ['Makes particle effects, set in its', 'GUI. Powered by redstone.'])
  info('draconicevolution:draconic_spawner', ['A configurable mob spawner.', 'Put a Mob Soul in it to set the mob.'])
  info('draconicevolution:mob_soul', ['Rarely dropped by mobs. Put it in a', 'Stabilized Mob Spawner.'])
  info('draconicevolution:diss_enchanter', ['Removes enchantments from items', 'onto books.'])
  info('draconicevolution:celestial_manipulator', ['Changes the weather and time of', 'day. Needs power.'])
  info('draconicevolution:potentiometer', ['Gives a redstone signal you set', 'by clicking.'])
  info('draconicevolution:rain_sensor', ['Emits redstone while it rains.'])
  info(['draconicevolution:wyvern_capacitor', 'draconicevolution:draconic_capacitor'], ['Charges your armor and held items.', 'Sneak-use to change mode.'])
  info('draconicevolution:info_tablet', ['Draconic Evolution manual.'])

  // ---- Extra Utilities 2 ------------------------------------------------------
  info('extrautils2:pipe', ['Item and fluid pipe for Transfer', 'Nodes. Pipes do nothing on their own.'])
  info(['extrautils2:transfer_node_items', 'extrautils2:transfer_node_fluids'], ['Put on an inventory or tank; pulls', 'from it and sends along pipes.', 'Add speed and stack upgrades.'])
  info('extrautils2:transfer_node_energy', ['Pulls energy from what it is on', 'and sends it along pipes.'])
  info(['extrautils2:retrieval_node_items', 'extrautils2:retrieval_node_fluids'], ['Pulls items or fluids back through', 'the pipes into what it is on.'])
  info(['extrautils2:transfer_filter', 'extrautils2:transfer_pipe_filter'], ['Put a Filter inside to limit what', 'passes this pipe.'])
  info('extrautils2:user', ['Uses the item inside on the block', 'in front, like a player. Needs GP.'])
  info('extrautils2:miner', ['Mines the block in front with the', 'tool inside. Needs GP.'])
  info('extrautils2:crafter', ['Crafts the set recipe automatically', 'from items pushed into it.'])
  info('extrautils2:scanner', ['Emits redstone when the block in', 'front matches the one set.'])
  info('extrautils2:player_chest', ['Opens the inventory of its owner.', 'Needs GP.'])
  info('extrautils2:indexer', ['Shows every inventory on its pipe', 'network in one GUI.'])
  info('extrautils2:indexer_remote', ['Opens a bound Indexer from afar.'])
  info('extrautils2:power_manager', ['Shows your GP (grid power) use and', 'production.'])
  info(['extrautils2:rainbow_generator', 'extrautils2:rainbow_generator_bottom_half', 'extrautils2:rainbow_generator_top_half'], ['Makes huge GP while every other', 'generator type is running.'])
  info('extrautils2:terraformer', ['Changes the biome around it. Add', 'Antenna and climate blocks around', 'it. Needs GP.'])
  info(['extrautils2:humidifier', 'extrautils2:dehumidifier', 'extrautils2:heater', 'extrautils2:cooler', 'extrautils2:dehostilifier', 'extrautils2:magic_absorbtion', 'extrautils2:magic_infuser'], ['Terraformer part: pushes the biome', 'climate one way.'])
  info('extrautils2:terraformer_antenna', ['Sets the Terraformer\'s range.'])
  info('extrautils2:climograph_base', ['Base of a Terraformer climate block.'])
  info('extrautils2:trowel', ['Places a random block from your', 'hotbar.'])
  info('extrautils2:sun_crystal', ['Leave in the sun to charge it.'])
  info('extrautils2:wrench', ['Rotates blocks and configures pipes.'])
  info(['extrautils2:filter', 'extrautils2:filter_fluids'], ['Set items to allow. Use in nodes,', 'Transfer Filters and machines.'])
  info(['extrautils2:ethereal_glass', 'extrautils2:reverse_ethereal_glass'], ['Players walk through it; mobs do', 'not (reverse: the other way round).'])
  info('xu2blocks:quantum_quarry_actuator', ['Put one on every face of the', 'Quantum Quarry. Feed it energy.'])
  info(['xu2blocks:trash_can', 'xu2blocks:trash_can_fluid', 'xu2blocks:trash_can_energy'], ['Deletes everything pushed into it.'])
  info(['xu2blocks:stone_drum', 'xu2blocks:iron_drum', 'xu2blocks:reinforced_large_drum', 'xu2blocks:demonically_gargantuan_drum'], ['Holds one fluid and keeps it when', 'broken. Craft alone to empty it.'])
  info('xu2blocks:sound_muffler', ['Quiets sounds around it.'])
  info(['xu2gear:builders_wand', 'xu2gear:creative_builders_wand'], ['Extends the face you look at with', 'blocks from your inventory.'])
  info(['xu2gear:destruction_wand', 'xu2gear:creative_destruction_wand'], ['Breaks the matching face you look at.'])

  // ---- Extreme Reactors ---------------------------------------------------------
  info('bigreactors:reactorcontroller', ['Reactor brain: place it on the', 'casing frame. Use it to see status', 'and turn the reactor on.'])
  info(['bigreactors:reactorcasing', 'bigreactors:reactorglass'], ['Reactor shell. The reactor is a', 'box of casing (glass on faces only)', 'with fuel rods inside.'])
  info('bigreactors:reactorfuelrod', ['Stack under a Control Rod in the', 'reactor to hold fuel.'])
  info('bigreactors:reactorcontrolrod', ['Top of a fuel rod column, on the', 'reactor roof. Insertion sets output.'])
  info('bigreactors:reactoraccessport', ['Load Yellorium and take out', 'Cyanite. Toggle in/out in its GUI.'])
  info(['bigreactors:reactorpowertaprf', 'bigreactors:turbinepowertaprf'], ['Outputs the reactor\'s energy to', 'cables or machines.'])
  info('bigreactors:reactorcoolantport', ['Moves coolant in and steam out,', 'for a reactor feeding a turbine.'])
  info('bigreactors:reactorredstoneport', ['Redstone control and readout.'])
  info(['bigreactors:reactorcomputerport', 'bigreactors:turbinecomputerport'], ['Lets computers control it.'])
  info('bigreactors:turbinecontroller', ['Turbine brain: place it on the', 'housing frame. Turbines turn steam', 'into much more power.'])
  info(['bigreactors:turbinehousing', 'bigreactors:turbineglass'], ['Turbine shell.'])
  info('bigreactors:turbinebearing', ['One per turbine, on a face, holding', 'the rotor shaft.'])
  info(['bigreactors:turbinerotorshaft', 'bigreactors:turbinerotorblade'], ['Rotor inside the turbine: a shaft', 'from the bearing with blades on it.'])
  info('bigreactors:turbinefluidport', ['Steam in, water out.'])
  info(['bigreactors:reactorpowertaptesla', 'bigreactors:turbinepowertaptesla'], ['Legacy part: use the other', 'Power Tap.'])

  // ---- Storage, misc tech -------------------------------------------------------
  info('storagedrawers:controller', ['Links drawers within range: insert', 'here and items go to matching', 'drawers.'])
  info('storagedrawers:controller_slave', ['Extra access point for a Drawer', 'Controller network.'])
  info('storagedrawers:compacting_drawers_3', ['Stores an item in 3 compressed', 'forms, e.g. nuggets, ingots and', 'blocks, converting between them.'])
  info('storagedrawers:framing_table', ['Gives framed drawers the look of', 'other blocks.'])
  info('storagedrawers:upgrade_template', ['Crafting base for drawer upgrades.'])
  info(['storagedrawers:status_upgrade_1', 'storagedrawers:status_upgrade_2'], ['Shows how full each drawer is.'])
  info(['storagedrawers:keybutton_drawer', 'storagedrawers:keybutton_concealment', 'storagedrawers:keybutton_personal', 'storagedrawers:keybutton_quantify'], ['Put on a Controller: press to apply', 'its key to all linked drawers.'])
  info('quantumstorage:quantumdsu', ['Holds a huge amount of one item and', 'keeps it when broken.'])
  info('quantumstorage:quantumtank', ['Holds a huge amount of one fluid and', 'keeps it when broken.'])
  info('rangedpumps:pump', ['Pumps all fluid sources in a big', 'area below it, top down, into its', 'tank. Needs energy and redstone.', 'Drained spots become stone.'])
  for (const c of colors.concat(['silver'])) info('elevatorid:elevator_' + c, ['Stand on it and jump to go to the', 'next elevator up; sneak to go down.', 'Elevators must be in the same column.'])
  info('packingtape:tape', ['Use on a chest or machine to pack', 'it with its contents. Needs paper.'])
  info('packingtape:packaged_block', ['Place to unpack the block with', 'its contents.'])
  for (const t of ['', '_copper', '_iron', '_silver', '_tin', '_gold', '_diamond', '_obsidian'])
    info('chesttransporter:chesttransporter' + t, ['Use on a chest to pick it up with', 'its contents; use on the ground to', 'place it.'])
  info(['colossalchests:upgrade_tool', 'colossalchests:upgrade_tool_reverse'], ['Use on a Colossal Chest to upgrade', '(or downgrade) its material.'])


  // ---- Coverage pass: every item that is not self-explanatory ---------------
  // Immersive Engineering
  const IE_MB = ['advanced_blast_furnace', 'alloy_smelter', 'arc_furnace', 'assembler', 'auto_workbench', 'blast_furnace',
    'bottling_machine', 'bucket_wheel', 'crusher', 'diesel_generator', 'excavator', 'fermenter', 'metal_press', 'mixer',
    'radio_tower', 'refinery', 'sawmill', 'silo', 'tank', 'squeezer', 'chunk_loader']
  for (const m of IE_MB) info('immersiveengineering:' + m, ['Multiblock part. Build the structure', 'from the Engineer\'s Manual, then', 'hit it with an Engineer\'s Hammer.'])
  info('immersiveengineering:hammer', ['Forms multiblocks: hit the right block', 'of a finished structure. Also rotates', 'and configures IE blocks.'])
  info('immersiveengineering:wirecutter', ['Cuts wires off connectors and crafts', 'metal wire from plates.'])
  info('immersiveengineering:screwdriver', ['Configures IE redstone and sensor', 'blocks (sides, channels, modes).'])
  info('immersiveengineering:voltmeter', ['Use on an IE block to read its', 'stored energy and wire network.'])
  info('immersiveengineering:manual', ['Engineer\'s Manual: explains every', 'IE machine and multiblock.'])
  info(['immersiveengineering:connector_lv', 'immersiveengineering:connector_mv', 'immersiveengineering:connector_hv'], ['Place on a machine, then link it to', 'other connectors with matching', 'wire coils to move power.'])
  info(['immersiveengineering:connector_lv_relay', 'immersiveengineering:connector_mv_relay', 'immersiveengineering:connector_hv_relay'], ['Wire relay: carries power between', 'wires without feeding a machine.'])
  info(['immersiveengineering:transformer', 'immersiveengineering:transformer_hv'], ['Links two wire voltages (LV/MV, or', 'MV/HV for the HV transformer).'])
  info('immersiveengineering:current_transformer', ['Shows how much power flows through', 'the wire attached to it.'])
  info('immersiveengineering:breaker_switch', ['Cuts the wire network it sits in', 'when switched off.'])
  info('immersiveengineering:redstone_breaker', ['A breaker switch worked by redstone.'])
  info('immersiveengineering:connector_redstone', ['Sends redstone over redstone wire on', '16 colour channels.'])
  info('immersiveengineering:connector_bundled', ['Sends bundled redstone over wire.'])
  info('immersiveengineering:connector_structural', ['Holds structural ropes and cables', '(for zip lines and decoration).'])
  info('immersiveengineering:connector_probe', ['Reads comparator output of the block', 'it faces onto a redstone channel.'])
  info('immersiveengineering:feedthrough', ['Passes power through a wall.'])
  info(['immersiveengineering:wirecoil_copper', 'immersiveengineering:wirecoil_copper_ins'], ['LV wire. Use on two LV connectors', 'to link them.'])
  info(['immersiveengineering:wirecoil_electrum', 'immersiveengineering:wirecoil_electrum_ins'], ['MV wire. Use on two MV connectors', 'to link them.'])
  info('immersiveengineering:wirecoil_steel', ['HV wire. Use on two HV connectors', 'to link them.'])
  info('immersiveengineering:wirecoil_redstone', ['Redstone wire for redstone', 'connectors.'])
  info(['immersiveengineering:wirecoil_structure_rope', 'immersiveengineering:wirecoil_structure_steel'], ['Structural wire: ride it with a', 'Skyhook or use as decoration.'])
  info(['immersiveengineering:capacitor_lv', 'immersiveengineering:capacitor_mv', 'immersiveengineering:capacitor_hv'], ['Stores power. Use a hammer to set', 'each side to input or output.', 'Keeps its charge when broken.'])
  info('immersiveengineering:capacitor_creative', ['Creative: endless power.'])
  info('immersiveengineering:dynamo', ['Kinetic Dynamo: turns rotation from a', 'water wheel or windmill into power.'])
  info('immersiveengineering:thermoelectric_generator', ['Makes power from a hot block on one', 'side and a cold one on the other.'])
  info('immersiveengineering:watermill', ['Water Wheel: place on a Kinetic Dynamo', 'with flowing water passing it.'])
  info('immersiveengineering:windmill', ['Windmill: place on a Kinetic Dynamo', 'high up with open space around.'])
  info(['immersiveengineering:waterwheel_segment', 'immersiveengineering:windmill_blade', 'immersiveengineering:windmill_sail'], ['Crafting part for the water wheel', 'or windmill.'])
  info('immersiveengineering:charging_station', ['Charges IE tools placed on it.'])
  info('immersiveengineering:furnace_heater', ['Powered heater: speeds up furnaces,', 'coke ovens and blast furnaces', 'it touches.'])
  info('immersiveengineering:blastfurnace_preheater', ['Place next to an Improved Blast', 'Furnace to speed it up with power.'])
  info('immersiveengineering:electric_lantern', ['Lights up while powered.'])
  info('immersiveengineering:floodlight', ['Powered spotlight. Aim it with', 'the hammer.'])
  info('immersiveengineering:tesla_coil', ['Zaps nearby mobs (or players) with', 'power. Configure with a hammer.'])
  info(['immersiveengineering:turret_gun', 'immersiveengineering:turret_chem'], ['Powered turret. Set targets and', 'whitelist in its GUI; load ammo', 'or fluid.'])
  info('immersiveengineering:siren', ['Plays a loud sound on redstone.'])
  info('immersiveengineering:sample_drill', ['Core Sample Drill: powered, finds the', 'mineral vein of this chunk.'])
  info('immersiveengineering:coresample', ['Shows the mineral vein of a chunk.', 'Use on a map to mark it.'])
  info('immersiveengineering:survey_tools', ['Use on the ground to find the mineral', 'vein of this chunk (slower than', 'a sample drill).'])
  info('immersiveengineering:cloche', ['Garden Cloche: grows a crop inside', 'with power and water. Add fertilizer', 'to speed it up.'])
  info('immersiveengineering:fertilizer', ['Speeds up the Garden Cloche.'])
  info('immersiveengineering:circuit_table', ['Builds logic circuits for the', 'Redstone Logic Unit.'])
  info('immersiveengineering:logic_unit', ['Runs logic circuits on redstone', 'channel inputs.'])
  info('immersiveengineering:logic_circuit', ['Program for a Logic Unit.'])
  info('immersiveengineering:redstone_timer', ['Pulses redstone at a set interval.'])
  info('immersiveengineering:redstone_state_cell', ['Redstone latch: set and reset', 'by inputs.'])
  info('immersiveengineering:redstone_switchboard', ['Remaps redstone channels.'])
  info('immersiveengineering:machine_interface', ['Reads multiblock values (fill, power)', 'as redstone. Place on the machine\'s', 'redstone port.'])
  info(['immersiveengineering:conveyor_basic', 'immersiveengineering:conveyor_redstone', 'immersiveengineering:conveyor_dropper', 'immersiveengineering:conveyor_extract', 'immersiveengineering:conveyor_splitter', 'immersiveengineering:conveyor_vertical'], ['Moves items and mobs. Variants stop', 'on redstone, drop, pull from', 'inventories, split or go up.'])
  info('immersiveengineering:item_batcher', ['Sends items on in set batches.'])
  info('immersiveengineering:sorter', ['Item Router: sorts items to sides by', 'filters set in its GUI.'])
  info('immersiveengineering:fluid_sorter', ['Fluid Router: sorts fluids to sides', 'by filters set in its GUI.'])
  info(['immersiveengineering:chute_iron', 'immersiveengineering:chute_steel', 'immersiveengineering:chute_aluminum', 'immersiveengineering:chute_copper'], ['Items fall down through it.'])
  info('immersiveengineering:fluid_pipe', ['Carries fluids. Pumps push fluid', 'through pipes.'])
  info('immersiveengineering:fluid_pump', ['Pumps fluid into pipes; with power', 'it pumps much faster.'])
  info('immersiveengineering:fluid_placer', ['Places fluid from pipes into', 'the world.'])
  info('immersiveengineering:pipe_valve', ['Pipe that redstone can shut.'])
  info('immersiveengineering:radiator', ['Cools machines it is part of.'])
  info('immersiveengineering:metal_barrel', ['Holds 24,000 mB of fluid.', 'Keeps it when broken.'])
  info('immersiveengineering:wooden_barrel', ['Holds 12,000 mB of non-hot fluid.'])
  info('immersiveengineering:jerrycan', ['Carries fluid to refill tools and', 'machines.'])
  info('immersiveengineering:crate', ['Storage crate. Keeps its contents', 'when broken.'])
  info('immersiveengineering:reinforced_crate', ['Blast-proof crate. Keeps its', 'contents when broken.'])
  info('immersiveengineering:craftingtable', ['Crafting table that keeps its', 'items and has storage.'])
  info('immersiveengineering:workbench', ['Engineer\'s Workbench: install', 'upgrades and shaders on IE tools,', 'and print blueprints.'])
  info('immersiveengineering:blueprint', ['Recipe plan for the Engineer\'s', 'Workbench.'])
  info('immersiveengineering:blueprint_shelf', ['Decorative shelf for blueprints.'])
  info('immersiveengineering:toolbox', ['Carry tools, wires and parts. Place', 'it as a box; it keeps its items.'])
  info('immersiveengineering:maintenance_kit', ['Repair or swap parts on IE tools.'])
  info('immersiveengineering:drill', ['Powered by diesel. Needs a drillhead;', 'add upgrades in the Workbench.'])
  info(['immersiveengineering:drillhead_iron', 'immersiveengineering:drillhead_steel'], ['Head for the Mining Drill.'])
  info('immersiveengineering:buzzsaw', ['Diesel buzzsaw for trees. Needs', 'a sawblade or grinding disk.'])
  info(['immersiveengineering:sawblade', 'immersiveengineering:rockcutter', 'immersiveengineering:grindingdisk'], ['Blade for the Buzzsaw.'])
  info('immersiveengineering:chemthrower', ['Sprays fluid from its tank: fire,', 'potions, or cleaning water.'])
  info('immersiveengineering:revolver', ['Fires IE bullets. Assemble from', 'gun parts; add upgrades in', 'the Workbench.'])
  info('immersiveengineering:speedloader', ['Reloads a revolver in one go.'])
  info('immersiveengineering:railgun', ['Fires metal rods using stored power.'])
  info('immersiveengineering:skyhook', ['Ride structural wires. Use while', 'looking at a wire.'])
  info('immersiveengineering:glider', ['Glide while falling.'])
  info('immersiveengineering:shield', ['Metal shield; takes upgrades in', 'the Workbench.'])
  info('immersiveengineering:powerpack', ['Wearable battery: charges IE', 'tools in your inventory.'])
  info('immersiveengineering:earmuffs', ['Blocks loud sounds. Can be added', 'to helmets in the Workbench.'])
  info('immersiveengineering:gunpowder_barrel', ['Explodes when lit or shot.'])
  info('immersiveengineering:turntable', ['Rotates the block on top on', 'redstone.'])
  info('immersiveengineering:electromagnet', ['Pulls metal items toward it while', 'powered.'])
  info(['immersiveengineering:mold_packing_4', 'immersiveengineering:mold_packing_9', 'immersiveengineering:mold_unpacking'], ['Metal Press mold: packs items 2x2', 'or 3x3, or unpacks them.'])
  info('immersiveengineering:empty_shell', ['Casing for revolver bullets.'])
  for (const t of ['armor_piercing', 'buckshot', 'casull', 'dragons_breath', 'firework', 'flare', 'he', 'homing', 'potion', 'silver', 'wolfpack'])
    info('immersiveengineering:bullet_' + t, ['Revolver ammo.'])
  for (const u of ['buzzsaw_spareblades', 'chemthrower_focus', 'chemthrower_multitank', 'drill_capacity', 'drill_damage', 'drill_fortune', 'drill_lube', 'drill_waterproof', 'powerpack_antenna', 'powerpack_induction', 'powerpack_magnet', 'powerpack_tesla', 'railgun_capacitors', 'railgun_scope', 'revolver_bayonet', 'revolver_electro', 'revolver_magazine', 'shield_flash', 'shield_magnet', 'shield_shock', 'skyhook_insulation', 'skyhook_mace', 'skyhook_slope'])
    info('immersiveengineering:toolupgrade_' + u, ['Tool upgrade: install it in the', 'Engineer\'s Workbench.'])
  for (const b of ['common', 'uncommon', 'rare', 'epic', 'immersiveengineering_masterwork'])
    info('immersiveengineering:shader_bag_' + b, ['Use to open a random shader.'])
  info(['immersiveengineering:light_engineering', 'immersiveengineering:heavy_engineering', 'immersiveengineering:rs_engineering', 'immersiveengineering:basic_engineering', 'immersiveengineering:resonanz_engineering', 'immersiveengineering:generator'], ['Building block for multiblocks.'])
  info(['immersiveengineering:coil_lv', 'immersiveengineering:coil_mv', 'immersiveengineering:coil_hv'], ['Building block for multiblocks', 'and generators.'])
  info(['immersiveengineering:alloybrick', 'immersiveengineering:blastbrick', 'immersiveengineering:blastbrick_reinforced'], ['Building block for the kiln and', 'blast furnaces.'])

  // Industrial Foregoing
  const IFI = (id, lines) => info('industrialforegoing:' + id, lines)
  IFI('animal_baby_separator', ['Moves baby animals in its area to', 'the other side (or adults).'])
  IFI('animal_feeder', ['Feeds animals in its area to', 'breed them.'])
  IFI('animal_rancher', ['Shears and milks animals in its area.'])
  IFI('biofuel_generator', ['Burns Biofuel for power.'])
  IFI('bioreactor', ['Turns seeds, crops and food into', 'Biofuel.'])
  IFI('block_breaker', ['Breaks blocks in front of it.'])
  IFI('block_placer', ['Places blocks in front of it.'])
  IFI('conveyor', ['Moves items and mobs. Add conveyor', 'upgrades to insert, extract, split...'])
  for (const u of ['blinking', 'bouncing', 'detection', 'dropping', 'extraction', 'insertion', 'splitting'])
    IFI('conveyor_' + u + '_upgrade', ['Conveyor upgrade: use on an IF', 'conveyor.'])
  IFI('dissolution_chamber', ['Combines items with a fluid into', 'new items (see JEI).'])
  IFI('dye_mixer', ['Mixes dyes from red, green and', 'blue inputs.'])
  IFI('enchantment_applicator', ['Applies enchanted books using', 'liquid essence.'])
  IFI('enchantment_extractor', ['Moves enchantments from items onto', 'books.'])
  IFI('enchantment_factory', ['Enchants items using liquid essence.'])
  IFI('enchantment_sorter', ['Splits enchanted and plain items.'])
  IFI('fermentation_station', ['Ferments fluids (see JEI).'])
  IFI('fluid_collector', ['Picks up fluid sources in its area.'])
  IFI('fluid_extractor', ['Place facing a log to extract', 'latex.'])
  IFI('fluid_placer', ['Places fluid in front of it.'])
  IFI('fluid_sieving_machine', ['Sieves Pink Slime and more into', 'items.'])
  IFI('fluid_laser_base', ['Laser drill base for fluids (oil,', 'ether). Put Laser Drills around it.'])
  IFI('ore_laser_base', ['Laser drill base: mines ores from', 'below. Put Laser Drills around it;', 'lenses pick which ores.'])
  IFI('laser_drill', ['Powers a laser base it points at.'])
  IFI('hydroponic_bed', ['Grows a crop placed on it with', 'water and power.'])
  IFI('infinity_backpack', ['Huge backpack with stack-sized slots.'])
  IFI('infinity_charger', ['Charges Infinity tools.'])
  for (const t of ['drill', 'hammer', 'launcher', 'nuke', 'saw', 'trident'])
    IFI('infinity_' + t, ['Infinity tool: runs on power or', 'biofuel. Higher tiers reach further.'])
  IFI('latex_processing_unit', ['Turns latex into rubber.'])
  IFI('machine_settings_copier', ['Copy settings from one IF machine', 'to another.'])
  IFI('marine_fisher', ['Fishes in water below it.'])
  IFI('material_stonework_factory', ['Makes cobble, stone and more from', 'water and lava.'])
  IFI('meat_feeder', ['Feeds you liquid meat when hungry.'])
  IFI('mechanical_dirt', ['Spawns mobs using meat.'])
  IFI('mob_crusher', ['Kills mobs in its area, collects', 'drops and essence.'])
  IFI('mob_detector', ['Emits redstone for mobs in its area.'])
  IFI('mob_duplicator', ['Spawns copies of a captured mob', 'using essence.'])
  IFI('mob_imprisonment_tool', ['Use on a mob to catch it.'])
  IFI('mob_slaughter_factory', ['Turns mobs into meat and pink slime.'])
  IFI('pitiful_generator', ['Burns fuel for a little power.'])
  IFI('plant_fertilizer', ['Fertilizes crops in its area.'])
  IFI('plant_gatherer', ['Harvests crops and trees in its area.'])
  IFI('plant_sower', ['Plants seeds in its area.'])
  IFI('potion_brewer', ['Brews potions automatically.'])
  IFI('resourceful_furnace', ['Powered furnace that also makes', 'essence.'])
  IFI('sewage_composter', ['Turns sewage into fertilizer.'])
  IFI('sewer', ['Collects animal waste (sewage)', 'and XP in its area.'])
  IFI('simulated_hydroponic_bed', ['Simulates many crops at once.'])
  IFI('sludge_refiner', ['Turns sludge into dirt, clay...'])
  IFI('spores_recreator', ['Makes mushrooms from spores.'])
  IFI('stasis_chamber', ['Freezes mobs on top of it.'])
  IFI('washing_factory', ['Washes ores for extra output.'])
  IFI('water_condensator', ['Makes water from air.'])
  IFI('wither_builder', ['Builds and summons Withers.'])
  IFI('transporter', ['Pipe-like part. Combine with item,', 'fluid or world transporter types.'])
  info(['industrialforegoing:item_transporter_type', 'industrialforegoing:fluid_transporter_type', 'industrialforegoing:world_transporter_type'], ['Use on a block face to add a', 'transporter.'])
  for (const t of ['crimed', 'culinary', 'death', 'disenchantment', 'ender', 'explosive', 'frosty', 'furnace', 'halitosis', 'magma', 'meatallurgic', 'netherstar', 'pink', 'potion', 'reactor', 'rocket', 'slimey'])
    IFI('mycelial_' + t, ['Mycelial generator: makes power from', 'its own fuel (see JEI).'])
  for (const t of ['range_addon_tier_', 'speed_addon_tier_', 'efficiency_addon_tier_', 'processing_addon_tier_'])
    for (let n = 0; n <= 11; n++) IFI(t + n, ['Machine addon: put it in an IF', 'machine\'s addon slot.'])
  for (const c of colors) IFI(c + '_laser_lens', ['Laser drill lens: favours ores of', 'this colour.'])

  // Actually Additions
  const RINGS = ['fire_resistance', 'haste', 'invisibility', 'jump_boost', 'night_vision', 'regeneration', 'resistance', 'speed', 'strength', 'water_breathing']
  for (const r of RINGS) {
    info('actuallyadditions:ring_of_' + r, ['Potion ring: gives its effect while', 'held in your hand.'])
    info('actuallyadditions:advanced_ring_of_' + r, ['Potion ring: gives its effect from', 'anywhere in your inventory.'])
  }
  info('actuallyadditions:ring_of_growth', ['Grows plants around you. Uses', 'Crystal Flux.'])
  info('actuallyadditions:ring_of_magnetizing', ['Pulls nearby items to you. Uses', 'Crystal Flux.'])
  info('actuallyadditions:ring_of_liquid_banning', ['Removes fluid around you.'])
  for (const t of ['wooden', 'stone', 'iron', 'gold', 'diamond', 'emerald', 'netherite', 'obsidian', 'black_quartz', 'enori_crystal', 'emeradic_crystal', 'diamatine_crystal', 'palis_crystal', 'restonia_crystal', 'void_crystal'])
    info('actuallyadditions:' + t + '_aiot', ['All-in-one tool: pickaxe, axe,', 'shovel and hoe.'])
  for (const u of ['block_placing', 'five_by_five', 'fortune', 'fortune_ii', 'silk_touch', 'speed', 'speed_ii', 'speed_iii', 'three_by_three'])
    info('actuallyadditions:drill_upgrade_' + u, ['Drill augment: sneak-use the', 'Drill to install it.'])
  info(['actuallyadditions:laser_upgrade_invisibility', 'actuallyadditions:laser_upgrade_range'], ['Laser Relay upgrade: use on a', 'relay.'])
  info(['actuallyadditions:lens', 'actuallyadditions:lens_of_color', 'actuallyadditions:lens_of_detonation', 'actuallyadditions:lens_of_certain_death', 'actuallyadditions:lens_of_the_killer', 'actuallyadditions:lens_of_disenchanting', 'actuallyadditions:lens_of_the_miner'], ['Atomic Reconstructor lens: changes', 'what its laser does.'])
  info(['actuallyadditions:small_to_medium_crate_upgrade', 'actuallyadditions:medium_to_large_crate_upgrade', 'actuallyadditions:chest_to_crate_upgrade'], ['Use on a chest or crate to upgrade', 'it, keeping its items.'])
  info('actuallyadditions:canola_press', ['Presses canola into Canola Oil.'])
  info('actuallyadditions:crafter_on_a_stick', ['A crafting table you can carry.'])
  info('actuallyadditions:filter', ['Item filter for laser relays and', 'machines.'])
  info('actuallyadditions:fishing_net', ['Catches fish from water below it.'])
  info('actuallyadditions:solidified_experience', ['Use to gain experience.'])
  info('actuallyadditions:spawner_changer', ['Use on a mob to store it, then on', 'a spawner to change its mob.'])
  info('actuallyadditions:wings_of_the_bats', ['Lets you fly while it is in your', 'inventory.'])
  info('actuallyadditions:worm', ['Use on grass to place a worm that', 'speeds up crops nearby.'])
  info(['actuallyadditions:basic_coil', 'actuallyadditions:advanced_coil'], ['Crafting part for machines.'])
  info('actuallyadditions:booklet_stand', ['Holds an open manual.'])
  info('actuallyadditions:smiley_cloud', ['A friendly cloud. Name it.'])
  info(['actuallyadditions:biocoal'], ['Fuel.'])

  // Refined Storage / Reborn Storage
  for (const s of ['1k', '4k', '16k', '64k'])
    info('refinedstorage:' + s + '_storage_disk', ['Stores items. Put it in a Disk', 'Drive. Sneak-use an empty disk to', 'take it apart.'])
  for (const s of ['64k', '128k', '256k', '512k'])
    info('refinedstorage:' + s + '_fluid_storage_disk', ['Stores fluids. Put it in a Disk', 'Drive.'])
  info(['refinedstorage:creative_storage_disk', 'refinedstorage:creative_fluid_storage_disk'], ['Creative: endless storage disk.'])
  info('refinedstorage:upgrade', ['Blank upgrade: craft into a', 'specific upgrade.'])
  info(['refinedstorage:construction_core', 'refinedstorage:destruction_core'], ['Crafting part for the Constructor', 'and Destructor.'])
  for (const s of ['256k', '1024k', '4096k', '16384k'])
    info('rebornstorage:' + s + '_storage_disk', ['Big item disk. Put it in a', 'Refined Storage Disk Drive.'])
  info(['rebornstorage:multicrafter_frame', 'rebornstorage:multicrafter_heat', 'rebornstorage:multicrafter_storage', 'rebornstorage:multicrafter_cpu'], ['Part of the Multicrafter: a big', 'autocrafting block for Refined', 'Storage. Storage parts hold patterns.'])

  // Storage Drawers
  for (const w of ['oak', 'spruce', 'birch', 'jungle', 'acacia', 'dark_oak', 'framed'])
    for (const t of ['full_drawers_1', 'full_drawers_2', 'full_drawers_4', 'half_drawers_2', 'half_drawers_4']) {
      const id = 'storagedrawers:' + w + '_' + t
      if (!INFO[id]) info(id, ['Use to insert; double-use inserts', 'all matching items. Hit to take a', 'stack (sneak: one).'])
    }
  for (const w of ['oak', 'spruce', 'birch', 'jungle', 'acacia', 'dark_oak', 'framed'])
    info('storagedrawers:' + w + '_trim', ['Trim: links drawers to a Controller', 'like a drawer, without storage.'])

  // Random Things (rest)
  info('randomthings:block_of_sticks', ['Temporary block: breaks itself', 'after 10 seconds.'])
  info('randomthings:block_of_sticks_returning', ['Temporary block: after 10 seconds it', 'breaks and returns to you.'])
  info(['randomthings:custom_crafting_table_oak', 'randomthings:custom_crafting_table_spruce', 'randomthings:custom_crafting_table_birch', 'randomthings:custom_crafting_table_jungle', 'randomthings:custom_crafting_table_acacia', 'randomthings:custom_crafting_table_dark_oak', 'randomthings:custom_crafting_table_mangrove', 'randomthings:custom_crafting_table_cherry', 'randomthings:custom_crafting_table_bamboo', 'randomthings:custom_crafting_table_crimson', 'randomthings:custom_crafting_table_warped'], ['A crafting table in this wood.'])
  info('randomthings:dyeing_machine', ['Dyes items: open it to recolour.'])
  info('randomthings:golden_compass', ['Points to a spot. Craft it with a', 'Position Filter to set the spot.'])
  info('randomthings:igniter', ['Lights fire in front of it while', 'powered; puts it out when the', 'signal stops.'])
  info('randomthings:item_corrector', ['Straightens items moving over it so', 'they travel in a line.'])
  info('randomthings:item_rejuvenator', ['Items lying on it never despawn.'])
  info('randomthings:item_sealer', ['Items on it cannot be picked up', 'for 30 seconds.'])
  info('randomthings:item_projector', ['Pushes items out in front of it.', 'Set range in its GUI.'])
  info(['randomthings:platform_oak', 'randomthings:platform_spruce', 'randomthings:platform_birch', 'randomthings:platform_jungle', 'randomthings:platform_acacia', 'randomthings:platform_darkoak'], ['Thin platform you can stand on.'])
  info(['randomthings:super_lubricent_platform', 'randomthings:filtered_super_lubricent_platform'], ['Slippery platform. The filtered one', 'only carries chosen items.'])
  info('randomthings:stable_enderpearl', ['Use to bind to yourself. Drop it:', 'after 7 seconds you teleport to it.'])
  info('randomthings:spectre_core', ['Part of the Spectre Dimension', 'structure.'])
  info('randomthings:crafting_recipe', ['Holds a crafting recipe for', 'machines that read it.'])
  info('randomthings:sakanade_spores', ['Crafting ingredient.'])
  info(['randomthings:bean', 'randomthings:lesser_bean_stalk'], ['Part of a magic beanstalk.'])

  // Draconic Evolution (rest)
  info(['draconicevolution:draconic_core', 'draconicevolution:wyvern_core', 'draconicevolution:awakened_core', 'draconicevolution:chaotic_core'], ['Crafting core for higher DE tiers', '(Fusion Crafting).'])
  info(['draconicevolution:wyvern_energy_core', 'draconicevolution:draconic_energy_core'], ['Crafting part for energy items.'])
  info('draconicevolution:dragon_heart', ['Dropped by the Ender Dragon. Key', 'ingredient for Draconic gear.'])
  info(['draconicevolution:chaos_fragment_small', 'draconicevolution:chaos_fragment_medium', 'draconicevolution:chaos_fragment_large'], ['Chaos material for Chaotic gear.'])
  info(['draconicevolution:reactor_focus_ring', 'draconicevolution:reactor_inner_rotor', 'draconicevolution:reactor_outer_rotor', 'draconicevolution:reactor_rotor_assembly', 'draconicevolution:reactor_stabilizer_frame'], ['Crafting part for the Draconic', 'Reactor.'])
  info(['draconicevolution:creative_capacitor', 'draconicevolution:creative_rf_source'], ['Creative: endless energy.'])
  info('draconicevolution:infused_obsidian', ['Building block for the Energy Core', 'and the Draconic Spawner.'])
  info(['draconicevolution:wyvern_pick', 'draconicevolution:draconic_pick', 'draconicevolution:wyvern_bow', 'draconicevolution:draconic_bow', 'draconicevolution:wyvern_helm', 'draconicevolution:draconic_helm', 'draconicevolution:wyvern_legs', 'draconicevolution:draconic_legs', 'draconicevolution:draconic_staff_of_power'], ['Powered gear: charge it in an', 'Energy Infuser. Add upgrades with', 'Fusion Crafting.'])

  // Extra Utilities 2 (rest)
  info('extrautils2:analog_crafter', ['Crafts the set recipe from items', 'piped into it. Needs no power.'])
  info('extrautils2:screen', ['Shows a picture on its face.'])
  info('extrautils2:contract', ['Use on a villager to sign them to', 'a contract.'])
  info('extrautils2:redstone_lantern', ['Lantern that gives off redstone.'])
  info(['extrautils2:triple_compressed_dirt', 'extrautils2:quadruple_compressed_dirt'], ['Many blocks of dirt packed into', 'one.'])
  info('xu2blocks:biome_marker', ['Use to record your biome; sneak-use', 'to clear. Put in a Quantum Quarry', 'to mine only that biome.'])
  info('xu2blocks:quantum_quarry', ['Needs an Actuator on all six faces', 'and energy. Puts mined items into', 'inventories by the actuators.'])
  info('xu2blocks:creative_drum', ['Creative: endless fluid. Use with a', 'filled container to pick it.'])
  info('xu2blocks:creative_spike', ['Creative: kills anything that', 'touches it, without drops.'])
  info('xu2gear:boomerang', ['Throw it; it comes back. Dip it in', 'a potion for potion hits.'])
  info('xu2gear:compound_bow', ['A stronger bow.'])
  info('xu2gear:kikoku', ['A blade whose hits pierce armor.'])
  info('xu2gear:klein_bottle', ['Decorative display piece.'])
  info('xu2gear:magical_apple', ['Gives a burst of good effects.'])
  info('xu2gear:red_coal', ['Strong fuel.'])
  for (const c of ['pathetic', 'mediocre', 'passable', 'decent', 'good', 'damn_good', 'inspiring', 'amazing', 'perfected'])
    info('xu2gear:opinium_core_' + c, ['Opinium core: crafting step toward', 'the next, better core.'])

  // Steve's Carts
  info('stevescarts:blockcartassembler', ['Builds carts from a hull and modules', 'placed in its GUI. Needs fuel.'])
  info('stevescarts:blockcargomanager', ['Loads or unloads items between a', 'cart and the chests around it.'])
  info('stevescarts:blockliquidmanager', ['Loads or unloads fluids between a', 'cart and the tanks around it.'])
  info('stevescarts:blockdistributor', ['Links managers to inventories so', 'pipes can reach them.'])
  info('stevescarts:blockjunction', ['Rail switch: turns carts by', 'redstone or a detector.'])
  info('stevescarts:blockactivator', ['Turns cart modules on or off as', 'carts pass. Set in its GUI.'])
  info(['stevescarts:blockdetector_normal', 'stevescarts:blockdetector_unit', 'stevescarts:blockdetector_junction', 'stevescarts:blockdetector_stop', 'stevescarts:blockdetector_redstone', 'stevescarts:blockadvdetector'], ['Part of the Steve\'s Carts detector', 'rail system: reacts to carts.'])

  // Solar Flux, Simply Jetpacks, Iron/Colossal chests, misc
  for (const s of ['solar0', 'solar1', 'solar2', 'solar3', 'solar4', 'solar5', 'solar6', 'solar7', 'solardraconic', 'solarchaotic'])
    info('solarfluxreborn:' + s, ['Makes power in sunlight. Feeds', 'machines and panels next to it.', 'Use to add upgrades.'])
  info(['solarfluxreborn:wire_1', 'solarfluxreborn:wire_2', 'solarfluxreborn:wire_3'], ['Energy cable for solar panels.'])
  info('solarfluxreborn:upgrade_blank', ['Blank solar panel upgrade.'])
  info(['simplyjetpacks:armor_plating_eio_1', 'simplyjetpacks:armor_plating_eio_2', 'simplyjetpacks:armor_plating_eio_3', 'simplyjetpacks:armor_plating_eio_4'], ['Craft with a jetpack to armor it.'])
  info(['ironchest:wood_iron_upgrade', 'ironchest:wood_copper_upgrade', 'ironchest:copper_iron_upgrade', 'ironchest:copper_silver_upgrade', 'ironchest:iron_gold_upgrade', 'ironchest:silver_gold_upgrade', 'ironchest:gold_diamond_upgrade', 'ironchest:diamond_crystal_upgrade', 'ironchest:diamond_obsidian_upgrade'], ['Sneak-use on a chest to upgrade it', 'in place, keeping its items.'])
  for (const m of ['wood', 'copper', 'iron', 'silver', 'gold', 'diamond', 'obsidian', 'netherite']) {
    info('colossalchests:colossal_chest_' + m, ['Build a hollow cube of chest walls', '(3x3x3 or bigger) with this as one', 'block to make a huge chest.'])
    info('colossalchests:interface_' + m, ['Put in a Colossal Chest wall so', 'pipes and hoppers can reach it.'])
  }
  info('quantumstorage:renderupgrade', ['Sneak-use on a Quantum Storage Unit', 'to show its item on top.'])
  info(['bigreactors:reactorcreativecoolantport', 'bigreactors:turbinecreativesteamgenerator'], ['Creative: endless coolant or steam.'])
  info('bigreactors:wrench', ['Rotates and configures reactor', 'parts.'])
  info('mob_grinding_utils:tank_sink', ['Stand on it to drain your XP into', 'the tank as liquid XP.'])
  info(['exchangers:exchanger_core_tier1', 'exchangers:exchanger_core_tier2', 'exchangers:exchanger_core_tier3'], ['Crafting core for Exchangers.'])
  info('tacz:gun_smith_table', ['Craft guns, ammo and attachments.'])
  info(['tacz:target', 'tacz:target_minecart'], ['Shooting target: shows your hits.'])
  info(['enderio:inventory_chest_tiny', 'enderio:inventory_chest_small', 'enderio:inventory_chest_medium', 'enderio:inventory_chest_large', 'enderio:inventory_chest_big', 'enderio:inventory_chest_huge', 'enderio:inventory_chest_enormous', 'enderio:inventory_chest_warehouse', 'enderio:inventory_chest_warehouse13'], ['Ender IO storage chest. Bigger', 'sizes hold more.'])
  info(['enderio:zombie_electrode', 'enderio:ender_resonator', 'enderio:sentient_ender', 'enderio:chassis_plates', 'enderio:machine_chassis'], ['Ender IO machine part.'])
  info(['enderio:conduit_binder', 'enderio:conduit_binder_composite'], ['Crafting material for conduits.'])

  ItemEvents.modifyTooltips(event => {
    const hint = Text.darkGray('Hold ').append(Text.gray('Shift')).append(Text.darkGray(' for details'))
    for (const id in INFO) {
      let lines = INFO[id]
      if (!lines || !Item.exists(id)) continue
      event.add(id, { shift: false }, [hint])
      event.add(id, { shift: true }, lines.map(l => Text.gray(l)))
    }

    // Dynamic fix-ups for every tech item.
    for (const ns in TECH_NAMESPACES)
      if (Item.exists(ns + ':' + TECH_NAMESPACES[ns])) event.modify('@' + ns, t => t.dynamic('ottocraft_tech'))

    // Reborn Storage fluid disks are placeholders: replace the dev joke with the truth.
    for (const size of ['1024k', '4096k', '16384k', '32768k']) {
      let id = 'rebornstorage:' + size + '_fluid_storage_disk'
      if (!Item.exists(id)) continue
      event.modify(id, t => {
        t.removeText(Text.of('WIP BLAME WAY2MUCHNOISE'))
        t.add([Text.red('Placeholder: does not store fluids yet.')])
      })
    }
  })

  // ---------------------------------------------------------------------------
  // Line rewriting (runs on each tooltip render for TECH_NAMESPACES items).
  // ---------------------------------------------------------------------------
  const SWAPS = [
    [/\bRF\/(tick|t|T)\b/g, 'FE/t'],
    [/\bRF\/charged\b/g, 'powered'],
    [/\bRF\b/g, 'FE'],
    [/with Ore dictionary specific capabilities/g, 'with item-tag capabilities'],
    [/\b[Oo]re ?[Dd]ictionary\b/g, 'item tag']
  ]
  const NEEDS = /\bRF\b|[Oo]re ?[Dd]ictionary/
  const fix = s => { for (const sw of SWAPS) s = s.replace(sw[0], sw[1]); return s }

  // Copy a component, rewriting literal text and keeping style and siblings.
  function rebuild(c) {
    let txt = null
    try { txt = c.getContents().text() } catch (err) { txt = null }
    let out = txt != null ? Text.of(fix(String(txt))) : c.plainCopy()
    out.setStyle(c.getStyle())
    let sibs = c.getSiblings()
    for (let i = 0; i < sibs.size(); i++) out.append(rebuild(sibs.get(i)))
    return out
  }

  const CHESTS = {
    vanilla: 'Chest', vanilla_trapped: 'Trapped Chest', iron: 'Iron Chest', gold: 'Gold Chest',
    diamond: 'Diamond Chest', copper: 'Copper Chest', tin: 'Silver Chest', crystal: 'Crystal Chest',
    obsidian: 'Obsidian Chest', spawner: 'Mob Spawner', crate_small: 'Small Storage Crate',
    crate_medium: 'Medium Storage Crate', crate_large: 'Large Storage Crate',
    pattern_chest: 'Pattern Chest', part_chest: 'Part Chest'
  }
  const titleCase = s => s.split(/[_ ]+/).filter(w => w).map(w => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase()).join(' ')

  ItemEvents.dynamicTooltips('ottocraft_tech', e => {
    let lines = e.lines
    for (let i = 1; i < lines.size(); i++) {
      let s
      try { s = String(lines.get(i).getString()) } catch (err) { continue }
      let m
      if ((m = s.match(/^chesttransporter:(.+)$/))) {
        let key = m[1]
        let name = CHESTS[key] || (key.indexOf('basic_drawer_') === 0 ? 'Drawer' : titleCase(key))
        lines.set(i, Text.gray('Carrying: ').append(Text.white(name)))
      } else if ((m = s.match(/^(\d+) MB of (.+)$/))) {
        lines.set(i, Text.darkAqua(String(m[1]).replace(/\B(?=(\d{3})+(?!\d))/g, ',') + ' mB of ' + titleCase(m[2])))
      } else if (NEEDS.test(s)) {
        try { lines.set(i, rebuild(lines.get(i))) } catch (err) { /* leave the line as it was */ }
      }
    }
  })
})()
