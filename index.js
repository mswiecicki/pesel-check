"use strict";

const { validateCharacters, validateBirthdate, validateControl } = require('./lib/validators');

const isPeselValid = pesel => validateCharacters(pesel) && validateBirthdate(pesel) && validateControl(pesel);

module.exports = isPeselValid;