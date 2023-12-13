import React from 'preact/compat';
import { TypeColors, Crown, Sparkle } from 'modules/Constants';
import GeneratePokemonSlot from 'components/shared/GeneratePokemonSlot';
import Data from 'modules/Data';

function generateSparklesSlot(baseSize, badges, isTemplate) {
    return <div className={`d-flex justify-content-center align-items-center p-0 badge-slot w-100 ${!isTemplate ? 'btn' : ''}`}
        style={{ height: baseSize, backgroundColor: TypeColors[Data.type.value].dark, borderColor: TypeColors[Data.type.value].dark }}>
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
function BadgeSlots(slotGroup, slotQty, badges, baseSize, isTemplate = false) {
    //const badgeWidth = baseSize * (totalSlots - slotQty) + 2 * (totalSlots - slotQty - 1);
    return (
        <div className={`w-100 slots d-xl-flex ${isTemplate ? 'd-flex' : ''}`} style={{ marginBottom: 8 }}>
            {generateSparklesSlot(baseSize, badges, isTemplate)}
            <div className={'d-flex'}>
                {
                    Array.from({length: slotQty}, (val, key) => {
                        return (
                            <div key={key} className={'badge-pokemon-slot w-100'}>
                                <GeneratePokemonSlot
                                    key={key}
                                    baseSize={baseSize}
                                    slot={slotGroup.slots[key]}
                                    isTemplate={isTemplate}
                                />
                            </div>
                        );
                    })
                }
            </div>
        </div>
    );
}

export default BadgeSlots;
