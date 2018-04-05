console.log("requiring browserified.js");
var x = require("./browserified.js");
console.log(x);

console.log("requiring browserified-target.js");
var x = require("./browserified-target.js");
console.log(x);

console.log("requiring browserified-require.js");
var x = require("./browserified-require.js");
console.log(x);

console.log("requiring browserified-standalone.js");
var x = require("./browserified-standalone.js");
console.log(x);

console.log("requiring browserified-standalone-target.js");
var x = require("./browserified-standalone-target.js");
console.log(x);

console.log("requiring browserified-standalone-require.js");
var x = require("./browserified-standalone-require.js");
console.log(x);

if(typeof assert === "undefined") require("./assert");
assert.isString("abc");
assert.isObject({});
assert.throws(()=>{assert.isString(1)},assert.AssertionError);

