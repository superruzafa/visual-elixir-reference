---
title: fetch/2
url: Enum/fetch/2
---

Finds the element at the given `index` (zero-based) and returns `{:ok, element}` if found.

{{< figure src="images/functions/Enum/fetch-2.svg" >}}

A negative `index` can be passed, which means the index is counted from the end.

{{< figure src="images/functions/Enum/fetch-2.2.svg" >}}

Returns `:error` if the given index is outside the range of the enumerable.

{{< figure src="images/functions/Enum/fetch-2.3.svg" >}}
