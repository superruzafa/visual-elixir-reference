---
title: at/3
aliases:
  - /Enum/at
---
Finds the element in `enumerable` at the index `index` (zero-based).

{{< diagram 1 >}}

A negative `index` can be passed, which means the `index` is counted from the end.

{{< diagram 2 >}}

The function evaluates to `default` if the `index` is out of bounds.

{{< diagram 3 >}}
