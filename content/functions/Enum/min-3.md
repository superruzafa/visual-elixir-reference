---
title: min/3
aliases:
  - /Enum/min
---

Returns the minimal element in the enumerable according to Erlang's term ordering.

By default, the comparison is done with the `<=` sort function. If multiple elements are considered minimal, the first one that was found is returned.

{{< diagram 1 >}}

If the enumerable is empty, the provided `empty_fallback` is called.

{{< diagram 2 >}}

The default `empty_fallback` raises `Enum.EmptyError`.

{{< diagram 3 >}}
