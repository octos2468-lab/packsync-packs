// Weapon balance (progression pass, BALANCE.md "Weapon bands"): restores original Hexxit II attributes where the port lost them.
// Nyx meteor axes: the original NyxItemAxe passes (damage - 1, speed - 4) to the 1.12 ItemAxe, so a meteorite axe hits for 10 at 1.0 attacks/s.
// The port's AxeItem.createAttributes(tier, damage - tierBonus, speed) dropped that conversion: 11 damage at 5.0 attacks/s (22 sustained DPS, over
// the Age 4 band). Root cause reported for ports/Nyx-original (NyxItems.Axe); this script sets the original values either way.
// Names are prefixed PB_ because KubeJS startup scripts share one scope (zz_leak_audit_power.js declares ENTRY, AM, OP ...).
const PB_ENTRY = Java.loadClass('net.minecraft.world.item.component.ItemAttributeModifiers$Entry')
const PB_AM = Java.loadClass('net.minecraft.world.entity.ai.attributes.AttributeModifier')
const PB_OP = Java.loadClass('net.minecraft.world.entity.ai.attributes.AttributeModifier$Operation')
const PB_ATTRS = Java.loadClass('net.minecraft.world.entity.ai.attributes.Attributes')
const PB_SLOTS = Java.loadClass('net.minecraft.world.entity.EquipmentSlotGroup')
const PB_RL = Java.loadClass('net.minecraft.resources.ResourceLocation')

// id -> [original damage, original attacks per second] (Nyx 1.5.1 NyxRegistry: new NyxItemAxe(material, damage, speed))
const PB_NYX_AXES = {
  'nyx:meteorite_axe': [10.0, 1.0],
  'nyx:frezarite_axe': [11.0, 1.1],
  'nyx:kreknorite_axe': [11.0, 1.1],
  'nyx:tektite_axe': [12.0, 1.2]
}

// the modifier list is built by a function, so each callback keeps its own values even if event.modify runs it after the loop
function pbAxeModifiers(damage, speed) {
  return [
    new PB_ENTRY(PB_ATTRS.ATTACK_DAMAGE, new PB_AM(PB_RL.parse('minecraft:base_attack_damage'), damage - 1.0, PB_OP.ADD_VALUE), PB_SLOTS.MAINHAND),
    new PB_ENTRY(PB_ATTRS.ATTACK_SPEED, new PB_AM(PB_RL.parse('minecraft:base_attack_speed'), speed - 4.0, PB_OP.ADD_VALUE), PB_SLOTS.MAINHAND)
  ]
}

function pbModifyAxe(event, id, damage, speed) {
  try {
    event.modify(id, item => item.setAttributeModifiersWithTooltip(pbAxeModifiers(damage, speed)))
  } catch (err) {
    console.info('progression balance: axe fix failed for ' + id + ': ' + err)
  }
}

ItemEvents.modification(event => {
  Object.keys(PB_NYX_AXES).forEach(id => pbModifyAxe(event, id, PB_NYX_AXES[id][0], PB_NYX_AXES[id][1]))
})
