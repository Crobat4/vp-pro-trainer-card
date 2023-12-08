import React from 'preact/compat';
import PokemonType from 'modules/emums/PokemonType';
import { signal } from '@preact/signals';
import SlotGroup from 'modules/pokemon/SlotGroup';

export default class Data {
    public static badgeURL = signal('');
    public static type = signal(PokemonType.Normal);
    public static theme = signal('');
    public static move = signal('');
    public static slotsPerBadge: {[key: string]: SlotGroup} = {};
}
