if(typeof Logger === "undefined") Logger = console;
Logger.log("hello.js starts.");
Logger.log("typeof require = " + typeof require);
Logger.log("typeof module = " + typeof module);
Logger.log("Object.keys(module) = " + Object.keys(module));
Logger.log("typeof exports = " + typeof exports);
Logger.log("Object.keys(exports) = " + Object.keys(exports));
function hello() {
  Logger.log("hello");
}
if(typeof exports === "undefined") exports = {};
exports.hello = hello;
//hello();
Logger.log("hello.js ends");

