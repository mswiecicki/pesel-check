"use strict";

function validateCharacters(pesel) {
    return /^[0-9]{11}$/.test(pesel.trim());
}

function validateMonth(pesel) {
    const monthStr = pesel.substr(2, 2);

    if (monthStr[0] % 2 && monthStr[1] > 2) return false;
    else return true;
}

function validateDay(pesel) {
    const month = parseInt(pesel.substr(2, 2)) % 20;
    const day = parseInt(pesel.substr(4, 2));
    const longMonths = [1,3,5,7,8,10,12];

    if (day < 1) return false;
    if (month === 2) return day <= 28;
    if (longMonths.indexOf(month) !== -1) return day <= 31;
    else return day <= 30;
}

function validateBirthdate(pesel) {
    return validateMonth(pesel) && validateDay(pesel);
}

function validateControl(pesel) {
    const weights = [1, 3, 7, 9, 1, 3, 7, 9, 1, 3, 1];
    const sum = weights.reduce((acc, weight, index) => (acc + (weight * pesel[index])), 0);
    return (sum % 10) === 0;
}

function validatePESEL(pesel) {
    if (validateCharacters(pesel) && validateBirthdate(pesel) && validateControl(pesel))
        return true;
    return false;
}

export default validatePESEL;
