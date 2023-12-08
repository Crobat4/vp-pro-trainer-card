import React from 'preact/compat';
import { TypeColors, Crown, Sparkle } from 'modules/Constants';
import GeneratePokemonSlot from 'components/shared/GeneratePokemonSlot';
import Data from 'modules/Data';

function generateSparklesSlot(badgeWidth, baseSize, badges, isTemplate) {
    return <div className={`d-flex justify-content-center align-items-center p-0 badge-slot ${!isTemplate ? 'btn' : ''}`}
        style={{ width: badgeWidth, height: baseSize, backgroundColor: TypeColors[Data.type.value].dark, borderColor: TypeColors[Data.type.value].dark }}>
        <div className={`${badges > 8 ? 'h-100 d-flex justify-content-center align-items-center' : 'px-0'}`}>
            {generateSparkles(badges)}
        </div>
    </div>;
}

function generateSparkles(number) {
    let badge;
    if (number <= 0) {
        badge = <span style="font-size: 28px; color: white;">No badges</span>;
    } else if (number > 8) {
        badge = <img className="crown-icon white-icon" src={Crown} />;
    } else {
        badge = new Array(number).fill(<img className="sparkle-icon white-icon" src={Sparkle} />);
    }
    return badge;
}

// Shared with Home page and Preview slots
function BadgeSlots(slotGroup, slotQty, badges, baseSize, totalSlots, isTemplate = false) {
    const badgeWidth = baseSize * (totalSlots - slotQty) + 2 * (totalSlots - slotQty - 1);
    return (
        <div className={`d-flex slots ${!isTemplate ? 'btn-group' : ''}`} style={{ height: baseSize, marginBottom: 8 }}>
            {generateSparklesSlot(badgeWidth, baseSize, badges, isTemplate)}
            {
                Array.from({length: slotQty}, (val, key) => {
                    return <GeneratePokemonSlot
                        key={key}
                        baseSize={baseSize}
                        slot={slotGroup.slots[key]}
                        isTemplate={isTemplate}
                    />;
                })
            }
        </div>
    );
}

export default BadgeSlots;
