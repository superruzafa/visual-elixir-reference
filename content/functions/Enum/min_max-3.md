---
title: min_max/3
aliases:
  - /Enum/min_max
---

Returns a tuple with the minimal and the maximal elements within `enumerable`.
If multiple elements are considered maximal or minimal, the first one that was found is returned.

The function uses `sorter` as elements comparator.

{{< diagram 1 >}}

`sorter` may also be a module. In that case its `compare/2` function is used, and the first argument is considered to
precede the second only when it returns `:lt`.

{{< diagram 2 >}}

If the enumerable is empty, the provided `empty_fallback` is called.

{{< diagram 3 >}}

