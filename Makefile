all: build

build: dep
	npm run build

dep: node_modules

node_modules: package.json package-lock.json
	npm install

clean:
	rm -rf dist && \
	find . -type f -name "*~" -exec rm -f {} \;

distclean: clean
	rm -rf node_modules

.PHONY: all build dep clean distclean