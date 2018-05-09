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

  assert.isUint8Array([0,1,2,3]);
  assert.throws(()=>{assert.isUint8Array([-1,0,1,2,3])}, assert.AssertionError);
  assert.isUint8Array(new Uint8Array([-1,0,1,2,3]));

  assert.isInt8Array([0,1,2,3]);
  assert.isInt8Array(new Int8Array([0,1,2,3]));
  assert.isInt8Array(new Int8Array([-129, 128]));
  assert.throws(()=>{assert.isInt8Array([-129, 128])}, assert.AssertionError);

  assert.isUint16Array([1,2,3,4]);
  assert.isUint16Array(new Uint16Array([-1,-2,-3,-4]));
  assert.throws(()=>{assert.isUint16Array([70000, -1])}, assert.AssertionError);

  assert.isInt16Array([1,2,3,4]);
  assert.isInt16Array(new Int16Array([-40000, 40000]));
  assert.throws(()=>{assert.isInt16Array([-40000, 40000])}, assert.AssertionError);
}//testMyAssert

if(typeof process !== "undefined") {
  testMyAssert();
}//if


