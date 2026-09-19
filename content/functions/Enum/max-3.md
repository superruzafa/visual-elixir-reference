---
title: max/3
aliases:
  - /Enum/max
---

Returns the maximal element in the enumerable according to Erlang's term ordering.

By default, the comparison is done with the `>=` sort function. If multiple elements are considered maximal, the first one that was found is returned.

{{< diagram 1 >}}

If the enumerable is empty, the provided `empty_fallback` is called.

{{< diagram 2 >}}

The default `empty_fallback` raises `Enum.EmptyError`.

{{< diagram 3 >}}
