import React from 'preact/compat';
import SlotGroup from 'modules/pokemon/SlotGroup';
import BadgeSlots from 'components/shared/BadgeSlots';

type Props = {
    slotGroup: SlotGroup,
}

function PreviewGymSlots({ slotGroup }: Props) {
    const baseSize = 88;
    return BadgeSlots(slotGroup, slotGroup.slots.length, slotGroup.badges, baseSize, true);
}

export default PreviewGymSlots;
