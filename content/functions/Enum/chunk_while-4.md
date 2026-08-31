---
title: chunk_while/4
aliases:
  - /Enum/chunk_while
---

Chunks `enumerable` with fine grained control when every chunk is emitted.

`fun` receives the current element and the accumulator and must return

- `{:cont, chunk, acc}` to emit the given chunk and continue with accumulator or
- `{:cont, acc}` to not emit any chunk and continue with the return accumulator.

`after_fun` is invoked when iteration is done and must also return `{:cont, chunk, acc}` or `{:cont, acc}`.

{{< diagram 1 >}}

The iteration stops as soon as `fun` returns a tuple of the form `{:halt, acc}`.

{{< diagram 2 >}}
