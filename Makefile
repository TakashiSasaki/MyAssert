.PHONY: test prepare browserified

test: assert.js
	node test.js

BROWSERIFIED=browserified.js browserified-standalone.js browserified-target.js browserified-require.js

clean:
	@rm -rf $(BROWSERIFIED)

assert.js: myassert.js
	touch empty.js ;\
	browserify -s assert -r ./myassert -o $@ empty.js ;\
	rm empty.js

prepare:
	sudo npm -g install browserify

browserified:  clean browserified-require.js browserified-target.js browserified-standalone-require.js browserified-standalone-target.js browserified-standalone.js browserified.js

browserified-require.js: hello.js
	touch empty.js ;\
		browserify -r ./$< -o $@ empty.js; \
		rm empty.js

browserified-target.js: hello.js
	touch empty.js ;\
		browserify -r ./$<:target -o $@ empty.js; \
		rm empty.js

browserified-standalone-require.js: hello.js
	touch empty.js ;\
		browserify -s hello -r ./$< -o $@ empty.js; \
		rm empty.js

browserified-standalone-target.js: hello.js
	touch empty.js ;\
		browserify -s hello -r ./$<:target -o $@ empty.js; \
		rm empty.js

browserified-standalone.js: hello.js goodbye.js
	browserify -s hello -o $@ $^

browserified.js: hello.js goodbye.js
	browserify -o $@ $^


