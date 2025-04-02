---
title: update!/3
url: /Map/update_/3
aliases: ['/Map/update!/3/']
---


Updates the `key` in `map` with the given function `fun`.

If `key` is present in `map` with value `value`, `fun` is invoked with argument `value` and its result is used as the new value of `key`.

{{< figure src="images/functions/Map/update_-3.svg" >}}

If `key` is not present in `map`, a `KeyError` exception is raised.

{{< figure src="images/functions/Map/update_-3.2.svg" >}}
