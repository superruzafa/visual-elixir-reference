FROM local/tinytex

RUN apt update && \
    apt install -y \
      make \
      hugo \
      inotify-tools \
      pdf2svg

RUN tlmgr update --self
RUN tlmgr install standalone
RUN tlmgr install pgf

