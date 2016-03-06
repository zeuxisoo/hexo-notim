.PHONY: assets

all:
	@echo "make server"
	@echo "make watch"
	@echo "make assets"

server:
	@npm run server

watch:
	@npm run watch

assets:
	@npm run assets
	@rm -rf source/css/bundle.css
	@rm -rf source/js/bundle.js
