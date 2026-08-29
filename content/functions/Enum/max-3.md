---
title: max/3
url: /Enum/max/3
---

Returns the maximal element in the enumerable according to Erlang's term ordering.

By default, the comparison is done with the `>=` sort function. If multiple elements are considered maximal, the first one that was found is returned.

{{< figure src="images/functions/Enum/max-3.svg" >}}

If the enumerable is empty, the provided `empty_fallback` is called.

{{< figure src="images/functions/Enum/max-3.2.svg" >}}

The default `empty_fallback` raises `Enum.EmptyError`.

{{< figure src="images/functions/Enum/max-3.3.svg" >}}
