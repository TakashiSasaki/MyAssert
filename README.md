# MyAssert

MyAssert is a JavaScript code almost identical to default `assert` module provideded with NodeJS.
I added some extra test functions to it and make `assert` available in both NodeJS and Google Apps Script (GAS).

# Use in Google Apps Script (GAS)
Upload `myassert-browserify.js` to your GAS project and import it by `require` function.
```yourgasscript.js
var assert = require("myassert");
```

# Use in NodeJS
Copy `myassert.js` to your directory and import it by `require` function.

```yournodescript.js
var assert = require("./myassert.js");
```
If you add current cirectory to `NODE_PATH` environment variables, you can import it in the same manner as above.
```yournodescript.js
var assert = require("myassert");
```
```sh
NODE_PATH=$NODE_PATH:. node yourscript.js
```
