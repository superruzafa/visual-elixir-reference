SHARED_TEX_FILES := $(shell find assets/images/shared -name '*.tex')
TEX_FILES := $(shell find assets/images/functions -name '*.fp.tex')
GEN_TEX_FILES := $(subst assets,resources/_gen,$(subst .fp.tex,.tex,$(TEX_FILES)))
PDF_FILES := $(GEN_TEX_FILES:.tex=.pdf)
SVG_FILES := $(subst assets,static,$(subst .fp.tex,.svg,$(TEX_FILES)))

all: $(SVG_FILES)

static/%.svg: resources/_gen/%.pdf
	mkdir -p $(dir $@)
	pdf2svg $< $@

resources/_gen/%.pdf: resources/_gen/%.tex tikzlibraryfunprog.code.tex
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
		> $@

.SECONDARY: $(PDF_FILES)

