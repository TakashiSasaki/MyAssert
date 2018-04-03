require("./myassert");
assert.isString("abc");
assert.isObject({});
assert.throws(()=>{assert.isString(1)},assert.AssertionError);

