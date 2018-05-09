'use strict'
if(typeof assert === "undefined") require("myassert-browserified");

function testMyAssert(){
  console.log("testMyAssert");

  assert.isString("abc");
  assert.isObject({});
  assert.isStringArray(["ab", "cd"]);

  assert.isArray(new Uint8Array());
  assert.isArray(new Uint8ClampedArray());
  assert.isArray(new Uint16Array());
  assert.isArray(new Uint32Array());
  assert.isArray(new Int8Array());
  assert.isArray(new Uint8Array());
  assert.isArray(new Uint16Array());
  assert.isArray(new Uint32Array());
  assert.isArray(new Float32Array());
  assert.isArray(new Float64Array());

  assert.isPositiveInteger(123);
  assert.throws(()=>{assert.isPositiveInteger(-12)}, assert.AssertionError);

  assert.isPositiveIntegerArray([2,3,4]);
  assert.throws(()=>{assert.isPositiveIntegerArray([0,1,2,-1]);}, assert.AssertionError);
  assert.isPositiveIntegerArray(new Uint8Array([1,2,3]));
  assert.isPositiveIntegerArray(new Uint8Array([-1,-2,-3]));

  assert.isUint8IntegerArray([0,1,2,3]);
  assert.throws(()=>{assert.isUint8IntegerArray([-1,0,1,2,3])}, assert.AssertionError);
  assert.isUint8IntegerArray(new Uint8Array([-1,0,1,2,3]));
}

if(typeof process !== "undefined") {
  testMyAssert();
}


