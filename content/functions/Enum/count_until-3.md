---
title: count_until/3
url: Enum/count_until/3
---

Counts how many elements are evaluated to truthy when `fun` is applied over them, stopping at `limit`.

{{< figure src="images/functions/Enum/count_until-3.svg" >}}

If `enumerable` is traversed completely then the function returns the count of elements that are evaluated to truthy when `fun` is applied over them.

{{< figure src="images/functions/Enum/count_until-3.2.svg" >}}

