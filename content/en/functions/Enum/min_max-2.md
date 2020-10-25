---
title: min_max/2
url: /Enum/min_max/2
---

# Enum.min_max/2

{{< signature >}}

Returns a tuple with the minimal and the maximal elements in the enumerable according to Erlang's term ordering.
If multiple elements are considered maximal or minimal, the first one that was found is returned.

{{< figure src="images/functions/Enum/min_max-2.svg" >}}

If the enumerable is empty, the provided `empty_fallback` is called.

{{< figure src="images/functions/Enum/min_max-2.2.svg" >}}

The default `empty_fallback` raises `Enum.EmptyError`.

{{< figure src="images/functions/Enum/min_max-2.3.svg" >}}
