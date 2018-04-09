if(typeof Logger === "undefined") Logger = console;
Logger.log("goodbye.js starts.");
Logger.log("typeof require = " + typeof require);
Logger.log("typeof module = " + typeof module);
Logger.log("Object.keys(module) = " + Object.keys(module));
Logger.log("typeof exports = " + typeof exports);
Logger.log("Object.keys(exports) = " + Object.keys(exports));
function goodbye() {
  Logger.log("goodbye");
}
if(typeof exports === "undefined") exports = {};
exports.goodbye = goodbye;
//goodbye();
Logger.log("goodbye.js ends.");
