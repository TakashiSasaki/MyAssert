function test() {
	Logger.log("typeof greeting = " + typeof greeting);
	//Logger.log("Object.keys(greeting) = " + Object.keys(greeting));
	Logger.log("typeof hello = " + typeof hello);
	Logger.log("typeof greeting = " + typeof greeting);
	var hello = require("hello");  
	Logger.log("typeof hello = " + typeof hello);
	hello.hello();
	var goodbye = require("goodbye");
	Logger.log("typeof goodbye = " + typeof goodbye);
	goodbye.goodbye();
}
