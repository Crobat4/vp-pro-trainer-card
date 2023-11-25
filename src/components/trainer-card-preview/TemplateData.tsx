import React from 'preact/compat';
import PartyPokemon from 'modules/pokemon/PartyPokemon';
import Sparkle from '/assets/icons/sparkle-sharp.svg';
import Crown from '/assets/icons/crown.svg';
import PokemonType from 'modules/emums/PokemonType';
import { signal } from '@preact/signals';
import { TypeColors } from 'modules/Constants';
import GeneratePokemonSlot from 'modules/GenerateSlot';
import States from 'modules/States';

export default class TemplateData {
    public static slotList = Array.from({length: 40}, () => new PartyPokemon(0));
    public static badgeURL = signal('');
    public static type = signal(PokemonType.Normal);
    public static theme = signal('');
    public static move = signal('');

    public static generateSparklesSlot(badgeWidth, baseSize, badges, isTemplate = false) {
        return <div className={`d-flex justify-content-center align-items-center p-0 badge-slot ${!isTemplate ? 'btn' : ''}`}
            style={{ width: badgeWidth, height: baseSize, backgroundColor: TypeColors[TemplateData.type.value].dark, borderColor: TypeColors[TemplateData.type.value].dark }}>
            <div className={`${badges > 8 ? 'h-100 d-flex justify-content-center align-items-center' : 'px-0'}`}>
                {this.generateSparkles(badges)}
            </div>
        </div>;
    }

    public static generateTeamSlots(totalSlots, pokemonSlots, badges = 0, baseSize = 90, isTemplate = false) {
        const badgeWidth = baseSize * (totalSlots - pokemonSlots) + 2 * (totalSlots - pokemonSlots - 1);
        const slots =
            <div className={`d-flex slots ${!isTemplate ? 'btn-group' : ''}`} style={{ height: baseSize, marginBottom: 8 }}>
                {this.generateSparklesSlot(badgeWidth, baseSize, badges, isTemplate)}
                {
                    Array.from({length: pokemonSlots}, () => {
                        let count;
                        if (isTemplate) {
                            States.countTemplate++;
                            count = States.countTemplate;
                        } else {
                            States.count++;
                            count = States.count;
                        }
                        return <GeneratePokemonSlot key={count} slotID={count} baseSize={baseSize} isTemplate={isTemplate} />;
                    })
                }
            </div>;
        return slots;
    }

    public static generateSparkles(number) {
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
}
