# 2.0.2

Bump `mocha`'s version from `^3.4.2` to `^7.1.1` in package.json (security versions fix)

# 2.0.1

Fix bug where leap years would not be accounted for during date validation

# 2.0.0

**BREAKING CHANGE!**

Module no longer returns object with methods - it returns just vaildating function itself instead.

_Rationale_:

There is no need to export all functions in module, exporting the actually used makes more sense.
