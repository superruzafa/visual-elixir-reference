---
title: slice/3
aliases:
  - /Enum/slice
---

Returns a subset list of the given `enumerable`, from `start` (zero-based) with `count` number of elements if available.

{{< diagram 1 >}}

A negative `start` can be passed, which means the enumerable is enumerated once and the index is counted from the end.

{{< diagram 2 >}}

It returns [] if `count` is 0 or if `start` is out of bounds.

