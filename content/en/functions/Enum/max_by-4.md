---
title: max_by/4
url: /Enum/max_by/4
---

# Enum.max_by/4

{{< signature >}}

Returns the maximal element in the enumerable as calculated by the given `fun`.

By default, the comparison is done with the `>=` sorter function. If multiple elements are considered maximal, the first one that was found is returned.

{{< figure src="images/functions/Enum/max_by-4.svg" >}}

If the enumerable is empty, the provided `empty_fallback` is called.

{{< figure src="images/functions/Enum/max_by-3.2.svg" >}}

The default `empty_fallback` raises `Enum.EmptyError`.

{{< figure src="images/functions/Enum/max_by-3.3.svg" >}}
