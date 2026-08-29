---
title: pop/3
url: /Map/pop/3
---


Returns and removes the value associated with key in map.

If `key` is present in `map` with value `value`, `{value, new_map}` is returned where `new_map` is the result of removing `key` from `map`.

{{< figure src="images/functions/Map/pop-3.svg" >}}

If `key` is not present in `map`, `{default, map}` is returned.

{{< figure src="images/functions/Map/pop-3.2.svg" >}}
