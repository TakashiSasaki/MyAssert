if(typeof assert === "undefined") require("myassert-browserified");

function testMyAssert(){
  console.log("testMyAssert");
  
  assert.isString("abc");
  assert.isObject({});
  assert.isStringArray(["ab", "cd"]);
}

if(typeof process !== "undefined") {
  testMyAssert();
}


