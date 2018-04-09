if(typeof Logger === "undefined") Logger = console;
function goodbye() {
  Logger.log("goodbye");
}
if(typeof exports === "undefined") exports = {};
exports.goodbye = goodbye;
//goodbye();

