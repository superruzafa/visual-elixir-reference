---
title: resource/3
url: /Stream/resource/3
---

Emits a sequence of values for a given resource.

The function begins by calling `start_fun` with no arguments.

The result of that call is passed to `fun`, which returns a tuple containing two elements: a list of data and an accumulator.

`fun` is then called repeatedly with the updated accumulator until it returns `{:halt, acc}`. The final accumulator is then passed to `after_fun`.

{{< figure src="images/functions/Stream/resource-3.svg" >}}

A typical use case involves opening a file with `start_fun`, streaming its contents in some way with successive calls to `fun` (one per line), and then closing the file with `after_fun`.

