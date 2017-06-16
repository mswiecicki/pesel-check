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
        it('should return true if date-part of string is in correct range for given month', function() {});
        it('should return false in any other case', function() {});
    });
    describe('#validateBirthdate()', function() {
        it('should return true if whole birthday-part of string is correct', function() {});
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
