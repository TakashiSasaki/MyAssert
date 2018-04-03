.PHONY: test prepare

test: assert.js
	node test.js

assert.js: myassert.js
	touch empty.js ;\
	browserify -s assert -r ./myassert -o $@ empty.js ;\
	rm empty.js

prepare:
	sudo npm -g install browserify

