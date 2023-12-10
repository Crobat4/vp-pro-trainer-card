type ChangelogItemsProps = {
    added?: string[],
    changed?: string[],
    fixed?: string[],
    removed?: string[],
}

export default class Changelog {
    public description: string;
    public items: ChangelogItemsProps;

    constructor (
        public version: string,
        public date: Date,
        description: string = '',
        items: ChangelogItemsProps = {added: [], changed: [], fixed: [], removed: []}
    ) {
        this.description = description;
        this.items = items;
    }

    getDateString() {
        return new Intl.DateTimeFormat('en-US', {month: 'long', year: 'numeric', day: 'numeric'}).format(this.date);
    }
}
