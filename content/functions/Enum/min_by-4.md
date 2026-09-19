---
title: min_by/4
aliases:
  - /Enum/min_by
---

Returns the minimal element in the enumerable as calculated by the given `fun`.

By default, the comparison is done with the `<=` sort function. If multiple elements are considered minimal, the first one that was found is returned.

{{< diagram 1 >}}

If the enumerable is empty, the provided `empty_fallback` is called.

{{< diagram 2 >}}

The default `empty_fallback` raises `Enum.EmptyError`.

{{< diagram 3 >}}
