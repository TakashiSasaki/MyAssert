.PHONY: test prepare browserified push pull 
NODEPATH=$(NODE_PATH):.

all: browserified assert.js test
	@rm -rf tmp.js

test: 
	NODE_PATH=$(NODEPATH) node test.js

BROWSERIFIED=browserified.js browserified-target.js browserified-require.js \
						 browserified-standalone.js browserified-standalone-target.js browserified-standalone-require.js \
						 myassert-browserified.js

push: browserified
	clasp push

pull:
	clasp pull

clean:
	@rm -rf $(BROWSERIFIED) tmp.js assert.js

myassert-browserified.js: myassert.js
	browserify -r ./myassert.js:myassert -o tmp.js empty.js ;\
		js-beautify -f tmp.js -o $@

prepare:
	sudo n stable ;\
		sudo npm -g update ;\
		sudo npm -g install browserify js-beautify js-prettify @google/clasp

browserified:  $(BROWSERIFIED)

browserified-require.js: hello.js goodbye.js
	browserify -r ./hello.js -r ./goodbye.js -o tmp.js empty.js ;\
	 	js-beautify -f tmp.js -o $@

browserified-target.js: hello.js goodbye.js
	browserify -r ./hello.js:hello -r ./goodbye.js:goodbye -o tmp.js empty.js ;\
	 	js-beautify -f tmp.js -o $@

browserified-standalone-require.js: hello.js goodbye.js
	browserify -s greeting -r ./hello.js -r ./goodbye.js -o tmp.js empty.js ;\
	 	js-beautify -f tmp.js -o $@

browserified-standalone-target.js: hello.js goodbye.js
	browserify -s greeting -r ./hello.js:hello -r ./goodbye.js:goodbye -o tmp.js empty.js ;\
	 	js-beautify -f tmp.js -o $@

browserified-standalone.js: hello.js goodbye.js
	browserify -s greeting -o tmp.js $^ ;\
	 	js-beautify -f tmp.js -o $@

browserified.js: hello.js goodbye.js
	browserify -o tmp.js $^ ;\
	 	js-beautify -f tmp.js -o $@


