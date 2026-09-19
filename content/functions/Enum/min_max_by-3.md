---
title: min_max_by/3
aliases:
  - /Enum/min_max_by
---

Returns a tuple with the minimal and the maximal elements in the enumerable as calculated by the given function.
If multiple elements are considered maximal or minimal, the first one that was found is returned.

{{< diagram 1 >}}

If the enumerable is empty, the provided `empty_fallback` is called.

{{< diagram 2 >}}

The default `empty_fallback` raises `Enum.EmptyError`.

{{< diagram 3 >}}
