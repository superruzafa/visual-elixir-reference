---
title: min_max_by/3
url: /Enum/min_max_by/3
---

Returns a tuple with the minimal and the maximal elements in the enumerable as calculated by the given function.
If multiple elements are considered maximal or minimal, the first one that was found is returned.

{{< figure src="images/functions/Enum/min_max_by-3.svg" >}}

If the enumerable is empty, the provided `empty_fallback` is called.

{{< figure src="images/functions/Enum/min_max_by-3.2.svg" >}}

The default `empty_fallback` raises `Enum.EmptyError`.

{{< figure src="images/functions/Enum/min_max_by-3.3.svg" >}}
