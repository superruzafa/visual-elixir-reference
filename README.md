# Visual Elixir Reference

An awesome visual guide to some of the most common Elixir functions.

https://superruzafa.github.io/visual-elixir-reference

![Build Status](https://github.com/superruzafa/visual-elixir-reference/actions/workflows/main.yml/badge.svg)

## Development

This guide uses [Hugo] as render engine.

To launch the server in your local machine just launch the following command:

~~~ sh
$ hugo server
~~~

and browse http://localhost:1313/visual-elixir-reference

The function diagrams are written using the TeX [TikZ] library.
In order to build the images you must have configured a TeX environment
(or build and use the image from the provided Dockerfile).

Then, from the project's root dir just launch the following command:

~~~ sh
$ make
~~~

It will transform the .tex files into .svg images.

[Hugo]: https://gohugo.io "Hugo"
[TikZ]: https://tikz.dev "TikZ"
