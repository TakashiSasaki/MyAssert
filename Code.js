function test() {

	var hello = require("hello");  
	Logger.log("typeof hello = " + typeof hello);
	hello.hello();

	var goodbye = require("goodbye");
	Logger.log("typeof goodbye = " + typeof goodbye);
	goodbye.goodbye();

	assert = require("assert");
	assert.isString("abc");

}//test

