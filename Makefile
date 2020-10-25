SHARED_TEX_FILES := $(shell find assets/images/shared -name '*.tex')
FPTK_FILES := $(shell find assets/images/fptk -name '*.tex')
TEX_FILES := $(shell find assets/images/functions -name '*.tex')
PDF_FILES := $(addsuffix .pdf,$(basename $(subst assets,resources/_gen,$(TEX_FILES))))
TEX_PDF_FILES := $(addsuffix .tex,$(basename $(subst assets,resources/_gen,$(TEX_FILES))))
SVG_FILES := $(addsuffix .svg,$(basename $(subst assets,static,$(TEX_FILES))))
FPTK_TARGET := resources/_gen/images/fptk.tex

all: $(SVG_FILES)

static/images/functions/%.svg: resources/_gen/images/functions/%.pdf
	mkdir -p $(dir $@)
	pdf2svg $< $@

resources/_gen/images/functions/%.pdf: resources/_gen/images/functions/%.tex
	pdflatex -halt-on-error -output-directory $(dir $@) $<
	rm -f $(subst .pdf,.aux,$@)
	rm -f $(subst .pdf,.log,$@)


$(FPTK_TARGET): $(FPTK_FILES)
	cat $^ > $@

resources/_gen/images/functions/%.tex: assets/images/functions/%.tex $(FPTK_TARGET) # $(SHARED_TEX_FILES)
	mkdir -p $(dir $@)
	echo ${HUGO_ENVIRONMENT}
	@if [ "development" = "$(ENVIRONMENT)" ]; then \
		cat \
			assets/images/shared/preamble.tex \
			assets/images/shared/debug.tex \
			$(FPTK_TARGET) \
			assets/images/shared/header.tex \
			$< \
			assets/images/shared/footer.tex > $@; \
	else \
		cat \
			assets/images/shared/preamble.tex \
			$(FPTK_TARGET) \
			assets/images/shared/header.tex \
			$< \
			assets/images/shared/footer.tex > $@; \
	fi

.PHONY: watch
watch:
	while true; do \
		inotifywait -q -r -e modify -e create -e delete -e move --exclude '^_.*\.tex' assets/images/functions | while read path action file; do \
			echo $$path$$file | sed s/assets/static/ | sed s/\.tex/\.svg/ | xargs make; \
		done; \
	done

.PHONY: touch
touch:
	touch $(TEX_FILES)
	touch $(FPTK_TARGET)
	touch $(TEX_PDF_FILES)
	touch $(PDF_FILES)
	touch $(SVG_FILES)

.SECONDARY: $(TEX_FILES) $(PDF_FILES)
