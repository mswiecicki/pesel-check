declare module 'pesel-check' {
    /**
     * Parameter "pesel" is of type "string" because of the initial validateCharacters()
     * input validation, which accepts strings only.
     */
    const isPeselValid: (pesel: string) => boolean;

    export = isPeselValid;
}
