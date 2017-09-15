# PESEL check
> **DONE (no more changes to the project anticipated)**  
> _unless some bugs or feature requests surface in the future_

Small package aiming to do one thing, and one thing only: check PESEL.

PESEL is a Polish personal identification number consisting of 11 digits
and encoding birthdate and sex of the owner.

While being principally unique and correct it is possible for legit 
(meaning copied from legal document)  
PESEL
to be duplicated or incorrect algorithm-wise.  
That happens due to human error
during registration or changing of PESEL number.

## Usage

Nothing fancy - you pass a string to function and get boolean in return.


```javascript
const isPeselValid = require('pesel-check');

isPeselValid('12345678901'); // => false (since '12345678901' isn't valid PESEL)
isPeselValid('11111111116'); // => true (since '11111111116' apparently is)
```

Function checks length, contents, birthdate and validates control sum.