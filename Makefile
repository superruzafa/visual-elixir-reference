SHARED_TEX_FILES := tikzlibraryfunprog.code.tex $(shell find assets/images/shared -name '*.tex')
TEX_FILES := $(shell find assets/images/functions -name '*.fp.tex')
TEX_PDF_FILES := $(subst assets,resources/_gen,$(subst .fp.tex,.tex,$(TEX_FILES)))
PDF_FILES := $(subst .tex,.pdf,$(TEX_PDF_FILES))
SVG_FILES := $(subst assets,static,$(subst .fp.tex,.svg,$(TEX_FILES)))

all: $(SVG_FILES)

static/%.svg: resources/_gen/%.pdf
	mkdir -p $(dir $@)
	pdf2svg $< $@

resources/_gen/%.pdf: resources/_gen/%.tex
	pdflatex -halt-on-error -output-directory $(dir $@) $<
	rm -f $(subst .pdf,.aux,$@)
	rm -f $(subst .pdf,.log,$@)

resources/_gen/%.tex: assets/%.fp.tex $(SHARED_TEX_FILES)
	mkdir -p $(dir $@)
	cat \
		assets/images/shared/preamble.tex \
		assets/images/shared/header.tex \
		$< \
		assets/images/shared/footer.tex \
		> $@; \

.SECONDARY: $(TEX_PDF_FILES) $(PDF_FILES)

