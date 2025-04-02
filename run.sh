#!/bin/bash

docker container run --rm --name=ver --platform=linux/amd64 -it -p 1313:1313 -v $PWD:/code -w /code local/visual-elixir-reference bash

