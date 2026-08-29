---
title: slice/3
url: Enum/slice/3
---

Returns a subset list of the given `enumerable`, from `start` (zero-based) with `count` number of elements if available.

{{< figure src="images/functions/Enum/slice-3.svg" >}}

A negative `start` can be passed, which means the enumerable is enumerated once and the index is counted from the end.

{{< figure src="images/functions/Enum/slice-3.2.svg" >}}

It returns [] if `count` is 0 or if `start` is out of bounds.

