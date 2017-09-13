# PESEL check

Small package aiming to do one thing, and one thing only - check PESEL.

PESEL is a Polish personal identification number consisting of 11 digits
and encoding birthdate and sex of the owner.

## Usage

Nothing fancy - you pass a string to function and get boolean in return.


```javascript
const { checkPesel } = require('pesel-check');

checkPesel('12345678901'); // => false (since '12345678901' isn't valid PESEL)
checkPesel('11111111116'); // => true (since '11111111116' apparently is)
```

Function checks length, contents, birthdate and validates control sum.