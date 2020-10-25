---
title: pop_lazy/3
url: /Map/pop_lazy/3
---

# Map.pop_lazy/3

{{< signature >}}

Lazily returns and removes the value associated with `key` in `map`.

If `key` is present in `map` with value `value`, `{value, new_map}` is returned where `new_map` is the result of removing `key` from `map`.

{{< figure src="images/functions/Map/pop_lazy-3.svg" >}}

If `key` is not present in `map`, `{b, map}` is returned, where `b` is the result of applying `fun`.

{{< figure src="images/functions/Map/pop_lazy-3.2.svg" >}}
