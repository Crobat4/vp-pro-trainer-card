import React from 'preact/compat';
import BadgeSlots from 'components/shared/BadgeSlots';
import Data from 'modules/Data';
import SlotGroup from 'modules/pokemon/SlotGroup';

type Props = {
    badges: number,
    slotQty: number,
    totalSlots?: number,
}

function GymSlot({ badges, slotQty, totalSlots = 7 }: Props) {
    const baseSize = 70;
    const groupID = `badges${badges}`;
    if (!Data.slotsPerBadge[groupID]) {
        const slotGroup = new SlotGroup(groupID, badges, slotQty);
        Data.slotsPerBadge[slotGroup.id] = slotGroup;
    }

    return BadgeSlots(Data.slotsPerBadge[groupID], slotQty, badges, baseSize, totalSlots);
}

export default GymSlot;
