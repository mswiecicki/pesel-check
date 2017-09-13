# 2.0.0

**BREAKING CHANGE!**

Module no longer returns object with methods - it returns just vaildating function itself instead.

_Rationale_:

There is no need to export all functions in module, exporting the actually used makes more sense.
