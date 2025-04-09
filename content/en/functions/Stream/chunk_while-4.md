---
title: chunk_while/4
url: /Stream/chunk_while/4
---

Chunks `stream` with fine grained control when every chunk is emitted.

`fun` receives the current element and the accumulator and must return

- `{:cont, chunk, acc}` to emit the given chunk and continue with accumulator or
- `{:cont, acc}` to not emit any chunk and continue with the return accumulator.

`after_fun` is invoked when iteration is done and must also return `{:cont, chunk, acc}` or `{:cont, acc}`.

{{< figure src="images/functions/Stream/chunk_while-4.svg" >}}

The iteration stops as soon as `fun` returns a tuple of the form `{:halt, acc}`.

{{< figure src="images/functions/Stream/chunk_while-4.2.svg" >}}
