"use strict";

const validators = require('../index');
const validateCharacters = validators.validateCharacters;
const validateMonth = validators.validateMonth;
const validateDay = validators.validateDay;
const validateBirthdate = validators.validateBirthdate;
const validateControl = validators.validateControl;
const checkPesel = validators.checkPesel;

const assert = require('assert');

describe('Validator functions', function() {
    describe('#validateCharacters()', function() {
        it('should return true if string consists of 11 digits', function() {
            assert.equal(validateCharacters('01234567890'), true);
        });
        it('should return false in any other case', function() {
            assert.equal(validateCharacters('012345678'), false);
            assert.equal(validateCharacters('012345678901'), false);
            assert.equal(validateCharacters('  012345678'), false);
            assert.equal(validateCharacters('01.2345678'), false);
            assert.equal(validateCharacters('0123,45678'), false);
            assert.equal(validateCharacters('0123,45678'), false);
            assert.equal(validateCharacters(''), false);
            assert.equal(validateCharacters('abcdefgh'), false);
            assert.equal(validateCharacters('2+34567890101'), false);
        });
    });
    describe('#validateMonth()', function() {
        it('should return true if month-part of string is correct for any century', function() {
            assert.equal(validateMonth('00010000000'), true);
            assert.equal(validateMonth('00230000000'), true);
            assert.equal(validateMonth('00510000000'), true);
            assert.equal(validateMonth('00690000000'), true);
            assert.equal(validateMonth('00920000000'), true);
        });
        it('should return false in any other case', function() {
            assert.equal(validateMonth('00000000000'), false);
            assert.equal(validateMonth('00190000000'), false);
            assert.equal(validateMonth('00530000000'), false);
            assert.equal(validateMonth('00740000000'), false);
            assert.equal(validateMonth('00960000000'), false);
        });
    });
    describe('#validateDay()', function() {
        it('should return true if date-part of string is in correct range for given month', function() {
            assert.equal(validateMonth('00011000000'), true);
            assert.equal(validateMonth('00021200000'), true);
            assert.equal(validateMonth('00041600000'), true);
            assert.equal(validateMonth('00080200000'), true);
            assert.equal(validateMonth('00112400000'), true);
            assert.equal(validateMonth('00222700000'), true);
            assert.equal(validateMonth('00453000000'), true);
        });
        it('should return false in any other case', function() {
            assert.equal(validateDay('00013200000'), false);
            assert.equal(validateDay('00023000000'), false);
            assert.equal(validateDay('00423000000'), false);
            assert.equal(validateDay('00523200000'), false);
            assert.equal(validateDay('00623100000'), false);
        });
    });
    describe('#validateBirthdate()', function() {
        it('should return true if whole birthday-part of string is correct', function() {
            assert.equal(validateBirthdate('00011000000'), true);
            assert.equal(validateBirthdate('00021200000'), true);
            assert.equal(validateBirthdate('00041600000'), true);
            assert.equal(validateBirthdate('00080200000'), true);
            assert.equal(validateBirthdate('00112400000'), true);
            assert.equal(validateBirthdate('00222700000'), true);
            assert.equal(validateBirthdate('00453000000'), true);
        });
        it('should return false in any other case', function() {});
    });
    describe('#validateControl()', function() {
        it('should return true if control digit is correct', function() {});
        it('should return false in any other case', function() {});
    });
});

describe('PESEL checking function', function() {
    it('should return true if PESEL is correct', function() {});
    it('should return false in any other case', function() {});
});
