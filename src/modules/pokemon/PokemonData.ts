type FormNameProps = {
    formName: string,
    fullFormName: string,
}

export default class PokemonData {
    formID: number;
    form: FormNameProps;
    formPrettyName: string;
    hasSubForm: boolean;

    constructor (
        public id: number,
        public name: string,
        public genderDifferences: boolean,
        public prettyName: string,
        public types: {
            // Make type enum
            primary: string,
            secondary: string
        },
        formID: number = 1,
        form: FormNameProps = {formName: '', fullFormName: ''},
        formPrettyName: string = '',
        hasSubForm: boolean = false
    ) {
        this.formID = formID;
        this.form = form;
        this.formPrettyName = formPrettyName;
        this.hasSubForm = hasSubForm;
    }
}
