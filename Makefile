.PHONY: test prepare browserified

all: browserified test
	@rm -rf tmp.js

test: assert.js
	node test.js

BROWSERIFIED=browserified.js browserified-target.js browserified-require.js \
						 browserified-standalone.js browserified-standalone-target.js browserified-standalone-require.js


clean:
	@rm -rf $(BROWSERIFIED) tmp.js

assert.js: myassert.js
	touch empty.js ;\
	browserify -s assert -r ./myassert -o $@ empty.js ;\
	rm empty.js

prepare:
	sudo npm -g install browserify js-beautify js-prettify

browserified:  clean $(BROWSERIFIED)

browserified-require.js: hello.js goodbye.js
	browserify -r ./hello.js -r ./goodbye.js -o tmp.js empty.js ;\
	 	js-beautify -f tmp.js -o $@

browserified-target.js: hello.js goodbye.js
	browserify -r ./hello.js:hello-target ./goodbye.js:goodbye-target -o tmp.js empty.js ;\
	 	js-beautify -f tmp.js -o $@

browserified-standalone-require.js: hello.js goodbye.js
	browserify -s greeting -r ./hello.js -r ./goodbye.js -o tmp.js empty.js ;\
	 	js-beautify -f tmp.js -o $@

browserified-standalone-target.js: hello.js goodbye.js
	browserify -s greeting -r ./hello.js:hello-target ./goodbye.js: -o tmp.js empty.js ;\
	 	js-beautify -f tmp.js -o $@

browserified-standalone.js: hello.js goodbye.js
	browserify -s greeting -o tmp.js $^ ;\
	 	js-beautify -f tmp.js -o $@

browserified.js: hello.js goodbye.js
	browserify -o tmp.js $^ ;\
	 	js-beautify -f tmp.js -o $@


