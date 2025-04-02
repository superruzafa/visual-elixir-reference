FROM superruzafa/tinytex:0.6.0

RUN apk update && \
    apk add \
      make \
      hugo \
      inotify-tools

RUN tlmgr update --self
RUN tlmgr install standalone
RUN tlmgr install pgf

