"use strict";

const { validateCharacters, validateBirthdate, validateControl } = require('./lib/validators');

function isPeselValid(pesel) {
    if (validateCharacters(pesel) &&
        validateBirthdate(pesel) &&
        validateControl(pesel))
        return true;
    return false;
}

module.exports = isPeselValid;