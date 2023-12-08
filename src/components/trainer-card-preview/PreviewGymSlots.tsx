import React from 'preact/compat';
import SlotGroup from 'modules/pokemon/SlotGroup';
import BadgeSlots from 'components/shared/BadgeSlots';

type Props = {
    slotGroup: SlotGroup,
    totalSlots?: number
}

function PreviewGymSlots({ slotGroup, totalSlots = 7 }: Props) {
    const baseSize = 90;
    return BadgeSlots(slotGroup, slotGroup.slots.length, slotGroup.badges, baseSize, totalSlots, true);
}

export default PreviewGymSlots;
