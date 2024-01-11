import React from 'preact/compat';
import PokemonType from 'modules/emums/PokemonType';
import { signal } from '@preact/signals';
import SlotGroup from 'modules/pokemon/SlotGroup';

export default class Data {
    public static badgeURL = signal('');
    public static type = signal(JSON.parse(localStorage.getItem('type')) || PokemonType.Normal);
    public static theme = signal(JSON.parse(localStorage.getItem('theme')) || '');
    public static move = signal(JSON.parse(localStorage.getItem('move')) || 0);
    public static slotsPerBadge: {[key: string]: SlotGroup} = JSON.parse(localStorage.getItem('slotsPerBadge')) || {};
}
