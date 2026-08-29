FROM frolvlad/alpine-glibc AS build

RUN apk update \
    && apk --no-cache add \
        gcc \
        make \
        libc-dev \
        cairo-dev \
        poppler-dev

RUN \
    wget -O - https://github.com/dawbarton/pdf2svg/archive/v0.2.3.tar.gz | tar xzv && \
    cd pdf2svg-0.2.3 && \
    ./configure && \
    make && \
    make install



FROM frolvlad/alpine-glibc AS runtime

ARG HUGO_VERSION=0.161.1
ARG NODE_VERSION=22.14.0
ARG USER_ID=1000
ARG GROUP_ID=1000

RUN apk update && \
    apk --no-cache add \
        bash \
        perl \
        curl \
        cairo-gobject \
        poppler-glib \
        xz \
        make \
        inotify-tools

COPY --from=build /usr/local/bin/pdf2svg /usr/local/bin

RUN curl -fsSL https://nodejs.org/dist/v${NODE_VERSION}/node-v${NODE_VERSION}-linux-x64.tar.xz | \
    tar -xJ --strip-components=1 -C /usr/local

RUN curl -L https://github.com/gohugoio/hugo/releases/download/v${HUGO_VERSION}/hugo_extended_${HUGO_VERSION}_linux-amd64.tar.gz | \
    tar xzv -C /usr/local/bin

RUN apk --no-cache add inkscape

RUN addgroup -g ${GROUP_ID} app && \
    adduser -D -u ${USER_ID} -G app app

USER app
WORKDIR /home/app

RUN curl -L "https://yihui.org/tinytex/install-unx.sh" | sh -s
ENV PATH="/home/app/.TinyTeX/bin/x86_64-linuxmusl:${PATH}"

RUN tlmgr update --self
RUN tlmgr install standalone
RUN tlmgr install pgf

