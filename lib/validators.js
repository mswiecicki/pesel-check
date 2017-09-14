"use strict";

function validateCharacters(pesel) {
    if (typeof pesel !== 'string') return false;
    
    return /^[0-9]{11}$/.test(pesel.trim());
}

function _validateMonth(pesel) {
    const monthStr = pesel.substr(2, 2);

    if (monthStr === '00' || (monthStr[0] % 2 && monthStr[1] > 2) ) return false;
    else return true;
}

function _validateDay(pesel) {
    function _getFullYear(pesel) {
        const year = parseInt(pesel.substr(0, 2));
        const month = parseInt(pesel.substr(2, 2));
        const century = 1800 + (100 * (Math.ceil(month / 20) % 5));
        return century + year;
    }

    const _isLeapYear = fullYear => !(fullYear % 4) && (fullYear % 100 || !(fullYear % 400)) ;

    const month = parseInt(pesel.substr(2, 2)) % 20;
    const day = parseInt(pesel.substr(4, 2));
    const longMonths = [1,3,5,7,8,10,12];

    if (day < 1) return false;
    if (month === 2) 
        if (_isLeapYear(_getFullYear(pesel))) return day <= 29;
        else return day <= 28;
    if (longMonths.indexOf(month) !== -1) return day <= 31;
    else return day <= 30;
}

function validateBirthdate(pesel) {
    return _validateMonth(pesel) && _validateDay(pesel);
}

function validateControl(pesel) {
    const weights = [1, 3, 7, 9, 1, 3, 7, 9, 1, 3, 1];
    const sum = weights.reduce((acc, weight, index) => (acc + (weight * pesel[index])), 0);
    return (sum % 10) === 0;
}

module.exports = {
    validateCharacters,
    _validateMonth,
    _validateDay,
    validateBirthdate,
    validateControl,
}
