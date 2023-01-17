FROM local/tinytex

RUN apk update && \
    apk add --no-cache make hugo inotify-tools

RUN tlmgr update --self
RUN tlmgr install standalone
RUN tlmgr install pgf

