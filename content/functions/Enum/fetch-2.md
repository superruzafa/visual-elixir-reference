---
title: fetch/2
aliases:
  - /Enum/fetch
---

Finds the element at the given `index` (zero-based) and returns `{:ok, element}` if found.

{{< diagram 1 >}}

A negative `index` can be passed, which means the index is counted from the end.

{{< diagram 2 >}}

Returns `:error` if the given index is outside the range of the enumerable.

{{< diagram 3 >}}
