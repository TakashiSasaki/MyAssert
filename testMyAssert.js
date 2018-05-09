'use strict'
if(typeof assert === "undefined") require("myassert-browserified");

function testMyAssert(){
  console.log("testMyAssert");

  assert.isString("abc");
  assert.isObject({});
  assert.isStringArray(["ab", "cd"]);
  assert.isPositiveInteger(123);
  assert.throws(()=>{assert.isPositiveInteger(-12)}, assert.AssertionError);
  assert.isPositiveIntegerArray([2,3,4]);
  assert.throws(()=>{assert.isPositiveIntegerArray([0,1,2,-1]);}, assert.AssertionError);
}

if(typeof process !== "undefined") {
  testMyAssert();
}


