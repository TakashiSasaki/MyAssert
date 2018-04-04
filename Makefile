.PHONY: test prepare browserified

test: assert.js
	node test.js

assert.js: myassert.js
	touch empty.js ;\
	browserify -s assert -r ./myassert -o $@ empty.js ;\
	rm empty.js

prepare:
	sudo npm -g install browserify

browserified:  browserified-require.js browserified-target.js browserified-standalone-require.js browserified-standalone-target.js browserified-standalone.js browserified.js

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

browserified-standalone.js: hello.js
	browserify -s hello -o $@ $<

browserified.js: hello.js
	browserify -o $@ $<


