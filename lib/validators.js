"use strict";

function _parsePeselDate(pesel) {
    const yearPart = parseInt(pesel.substr(0, 2));
    const monthPart = parseInt(pesel.substr(2, 2));
    const dayPart = parseInt(pesel.substr(4, 2));

    const year = 1800 + (100 * (Math.ceil(monthPart / 20) % 5)) + yearPart;
    const month = monthPart % 20;
    
    return [year, month, dayPart];
}

function _validateMonth(pesel) {
    const monthStr = pesel.substr(2, 2);

    if (monthStr === '00' || (monthStr[0] % 2 && monthStr[1] > 2) ) return false;
    else return true;
}

function _validateDay(pesel) {
    const _isLeapYear = fullYear => !(fullYear % 4) && (fullYear % 100 || !(fullYear % 400)) ;
    
    const [year, month, day] = _parsePeselDate(pesel);
    const longMonths = [1,3,5,7,8,10,12];

    if (day < 1) return false;
    if (month === 2) 
        if (_isLeapYear(year)) return day <= 29;
        else return day <= 28;
    if (longMonths.indexOf(month) !== -1) return day <= 31;
    else return day <= 30;
}

function validateCharacters(pesel) {
    if (typeof pesel !== 'string') return false;
    
    return /^[0-9]{11}$/.test(pesel.trim());
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
    _parsePeselDate,
    _validateMonth,
    _validateDay,
    validateCharacters,
    validateBirthdate,
    validateControl,
}
