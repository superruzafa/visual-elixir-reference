SHARED_TEX_FILES := $(shell find assets/images/shared -name '*.tex')
TEX_FILES := $(shell find assets/images/functions -name '*.fp.tex')
TEX_FULL_FILES := $(subst assets,resources/_gen,$(TEX_FILES:.fp.tex=.tex))
PDF_FILES := $(TEX_FULL_FILES:.tex=.pdf)
SVG_FILES := $(subst assets,static,$(TEX_FILES:.fp.tex=.svg))

all: $(SVG_FILES)

static/%.svg: resources/_gen/%.pdf
	mkdir -p $(dir $@)
	pdf2svg $< $@

resources/_gen/%.pdf: resources/_gen/%.tex
	pdflatex -halt-on-error -output-directory $(dir $@) $<
	rm -f $(subst .pdf,.aux,$@)
	rm -f $(subst .pdf,.log,$@)

resources/_gen/%.tex: assets/%.fp.tex $(SHARED_TEX_FILES) tikzlibraryfunprog.code.tex
	mkdir -p $(dir $@)
	cat \
		assets/images/shared/preamble.tex \
		assets/images/shared/header.tex \
		$< \
		assets/images/shared/footer.tex \
		> $@;

.PHONY: watch
watch:
	while true; do \
		inotifywait -q -r -e modify -e create -e delete -e move --exclude '^_.*\.fp.tex' assets/images/functions | while read path action file; do \
			echo $$path$$file | sed s/assets/static/ | sed s/\.fp.tex/\.svg/ | xargs make; \
		done; \
	done

.SECONDARY: $(TEX_FULL_FILES) $(PDF_FILES)
