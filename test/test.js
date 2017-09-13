"use strict";

const { 
    validateCharacters,
    _validateMonth,
    _validateDay,
    validateBirthdate,
    validateControl,
} = require('../lib/validators');

const isPeselValid = require('../index')

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
            assert.equal(_validateMonth('00010000000'), true);
            assert.equal(_validateMonth('00230000000'), true);
            assert.equal(_validateMonth('00510000000'), true);
            assert.equal(_validateMonth('00690000000'), true);
            assert.equal(_validateMonth('00920000000'), true);
        });
        it('should return false in any other case', function() {
            assert.equal(_validateMonth('00000000000'), false);
            assert.equal(_validateMonth('00190000000'), false);
            assert.equal(_validateMonth('00530000000'), false);
            assert.equal(_validateMonth('00740000000'), false);
            assert.equal(_validateMonth('00960000000'), false);
        });
    });
    describe('#validateDay()', function() {
        it('should return true if date-part of string is in correct range for given month', function() {
            assert.equal(_validateDay('00011000000'), true);
            assert.equal(_validateDay('00021200000'), true);
            assert.equal(_validateDay('00041600000'), true);
            assert.equal(_validateDay('00080200000'), true);
            assert.equal(_validateDay('00112400000'), true);
            assert.equal(_validateDay('00222700000'), true);
            assert.equal(_validateDay('00453000000'), true);
        });
        it('should return false in any other case', function() {
            assert.equal(_validateDay('00013200000'), false);
            assert.equal(_validateDay('00023000000'), false);
            assert.equal(_validateDay('00423000000'), false);
            assert.equal(_validateDay('00523200000'), false);
            assert.equal(_validateDay('00623100000'), false);
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
        it('should return false in any other case', function() {
            assert.equal(validateBirthdate('00753000000'), false);
            assert.equal(validateBirthdate('00133000000'), false);
            assert.equal(validateBirthdate('00023000000'), false);
            assert.equal(validateBirthdate('00003000000'), false);
            assert.equal(validateBirthdate('10103200000'), false);
        });
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
