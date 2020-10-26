---
title: get_lazy/3
url: Map/get_lazy/3
---

# Map.get_lazy/3

{{< signature >}}

Gets the value for a specific `key` in `map`.

If `key` is present in `map` with value _value_, then _value_ is returned.

{{< figure src="images/functions/Map/get_lazy-3.svg" >}}

Otherwise, `fun` is evaluated and its result is returned.
This is useful if the default value is very expensive to calculate or generally difficult to setup and teardown again.

{{< figure src="images/functions/Map/get_lazy-3.2.svg" >}}
