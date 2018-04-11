if(typeof assert === "undefined") require("myassert");

function testMyAssert(){
  console.log("testMyAssert");
  
  assert.isString("abc");
  assert.isObject({});
  assert.isStringArray(["ab", "cd"]);
}

if(typeof process !== "undefined") {
  testMyAssert();
}


