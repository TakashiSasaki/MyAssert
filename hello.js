if(typeof Logger === "undefined") Logger = console;
function hello() {
  Logger.log("hello");
}
if(typeof exports === "undefined") exports = {};
exports.hello = hello;
//hello();

