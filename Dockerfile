FROM superruzafa/tinytex:0.5.0

RUN apk update && apk add --no-cache make hugo inotify-tools

RUN tlmgr update --self
RUN tlmgr install standalone
RUN tlmgr install pgf

