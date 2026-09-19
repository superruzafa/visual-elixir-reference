---
title: reduce_while/3
aliases:
  - /Enum/reduce_while
---

Reduces `enumerable` until it's exhausted or `fun` returns `{:halt, term}`.

The return value for `fun` is expected to be

- `{:cont, acc}` to continue the reduction with `acc` as the new accumulator or
- `{:halt, acc}` to halt the reduction

If `fun` returns `{:halt, acc}` the reduction is halted and the function returns `acc`.

{{< diagram 1 >}}

Otherwise, if `enumerable` is exhausted, the function returns the accumulator of the last `{:cont, acc}`.

{{< diagram 2 >}}
