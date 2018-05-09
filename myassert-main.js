if(typeof assert === "undefined") assert = require("assert");

assert.isInstanceOf = function(actual, expected) {
  if(actual instanceof expected) return;
  assert.fail(actual.constructor.name. expected.constructor.name, "", "instanceof");
}//assert.isInstanceOf

assert.isString = function(actual) {
  if(typeof actual === "string") return;
  assert.fail("" + actual + "is not a string.");
}//assert.isString

assert.isArray = function(actual){
  if(actual instanceof Array) return true;
  if(actual instanceof Int8Array) return true;
  if(actual instanceof Uint8Array) return true;
  if(actual instanceof Uint8ClampedArray) return true;
  if(actual instanceof Int16Array) return true;
  if(actual instanceof Uint16Array) return true;
  if(actual instanceof Int32Array) return true;
  if(actual instanceof Uint32Array) return true;
  if(actual instanceof Float32Array) return true;
  if(actual instanceof Float64Array) return true;
  assert.fail("" + actual + " is not an array.");
}//assert.isArray

assert.isStringArray = function(actual) {
  assert.isArray(actual);
  for(var i=0; i<actual.length; ++i){
    assert.isString(actual[i]);
  }//for
}//isStringArray

assert.isObject = function(actual) {
  if(actual === null) assert.fail("" + actual + " is null.");
  if(actual instanceof Array) assert.fail("" + actual + " is an array.");
  if(actual instanceof Object) return;
  if(typeof actual === "object") return;
  assert.fail("" + actual + " is not an object.");
}//assert.isObject

assert.isUndefined = function(actual) {
  if(typeof actual === "undefined") return;
  assert.fail("" + actual + " is not undefined.");
}//assert.isUndefined

assert.isNotUndefined = function(actual) {
  if(typeof actual === "undefined") {
    assert.fail("" + actual + " is undefined.");
  }
}//assert.isNotUndefined

assert.lengthOf = function(collection, expectedLength) {
  if(collection.length === expectedLength) return;
  assert.fail("The length of " + collection + " is not " + expectedLength +".");
}//assert.lengthOf

assert.hasProperty = function(o, p){
  if(Object.keys(o).indexOf(p) < 0) assert.fail("Object " + o + " does not have property " + p + ".");
}//assert.hasProperty

assert.isFunction = function(f) {
  if(typeof f === "function") return;
  assert.fail("" + f +" is not a function.");
}//assert.isFunction

assert.isInteger = function(x){
  if(typeof x !== "number") assert.fail("" + x + " is not an integer number.");
  if(x !== Math.floor(x)) assert.fail("" + x + " is not an integer number.");
  if(x !== Math.ceil(x)) assert.fail("" + x + " is not an integer number.");
}//assert.isInteger

assert.isPositiveInteger = function(x) {
  assert.isInteger(x);
  if(x <= 0) assert.fail("" + x + " is not a positive integer.");
}//assert.isPositiveInteger

assert.isPositiveIntegerArray = function(x){
  assert.isArray(x);
  x.forEach(function(value,index,array){
    assert.isPositiveInteger(value);
  });
}//assert.isPositiveIntegerArray

assert.isUint8Array = function(x) {
  assert.isArray(x);
  if(x.constructor.name === "Uint8Array") return;
  if(x.constructor.name === "Uint8ClampedArray") return;
  x.forEach(function(value,index,array) {
    if(value > 255) assert.fail("" + value + " is greater than 255 which does not fit to 8bit unsigned integer.");
    if(value < 0) assert.fail("" + value + " is negative which does not fit to 8bit unsigned integer.");
  });
}//assert.isUint8Array

assert.isInt8Array = function(actual){
  assert.isArray(actual);
  if(actual.constructor.name === "Int8Array") return;
  actual.forEach(function(value,index,array){
    if(value < -128) assert.fail("" + value + " is less than -128 which does not fit to 8bit signed integer.");
    if(value > 127 ) assert.fail("" + value + " is less than -128 which does not fit to 8bit signed integer.");
  });
}//assert.isInt8Array

assert.isUint16Array = function(actual) {
  assert.isArray(actual);
  if(actual.constructor.name === "Uint16Array") return;
  actual.forEach(function(value,index,array){
    if(value < 0) assert.fail("" + value + " is negative which does not fit to 16bit unsigned integer.");
    if(value > 65535) assert.fail("" + value + " is greater than 65535 which does not fit to 16bit unsigned integer.");
  });//forEach
}//assert.isUint16Array

assert.isInt16Array = function(actual) {
  assert.isArray(actual);
  if(actual.constructor.name === "Int16Array") return;
  actual.forEach(function(value,index,array){
    if(value < -32768) assert.fail("" + value + " is less than -32768 which does not fit to 16bit signed integer.");
    if(value > 32768) assert.fail("" + value + "is greater than 32768 which does not fit to 16bit signed integer.");
  });//forEach
}//assert.isInt16Array


//if(typeof exports === "undefined") exports = {};
//exports.assert = assert;
if(typeof module === "object") module.exports = assert;

