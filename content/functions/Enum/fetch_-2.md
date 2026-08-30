---
title: fetch!/2
aliases:
  - /Enum/fetch!
---

Finds the element at the given `index` (zero-based) and returns it if found.

{{< figure src="images/functions/Enum/fetch_-2.svg" >}}

A negative `index` can be passed, which means the `index` is counted from the end.

{{< figure src="images/functions/Enum/fetch_-2.2.svg" >}}

Raises `OutOfBoundsError` if the given index is outside the range of the enumerable.

{{< figure src="images/functions/Enum/fetch_-2.3.svg" >}}
