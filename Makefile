.PHONY: test prepare browserified

test: assert.js
	node test.js

BROWSERIFIED=browserified.js browserified-target.js browserified-require.js \
						 browserified-standalone.js browserified-standalone-target.js browserified-standalone-require.js


clean:
	@rm -rf $(BROWSERIFIED)

assert.js: myassert.js
	touch empty.js ;\
	browserify -s assert -r ./myassert -o $@ empty.js ;\
	rm empty.js

prepare:
	sudo npm -g install browserify js-beautify js-prettify

browserified:  clean $(BROWSERIFIED)

browserified-require.js: hello.js
	browserify -r ./$< -o $@ empty.js

browserified-target.js: hello.js
	browserify -r ./$<:target -o $@ empty.js

browserified-standalone-require.js: hello.js
	browserify -s greeting -r ./$< -o $@ empty.js

browserified-standalone-target.js: hello.js
	browserify -s greeting -r ./$<:target -o $@ empty.js

browserified-standalone.js: hello.js goodbye.js
	browserify -s greeting -o $@ $^

browserified.js: hello.js goodbye.js
	browserify -o $@ $^


