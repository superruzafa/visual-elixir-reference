---
title: update/4
url: /Map/update/4
---


Updates the `key` in `map` with the given function `fun`.

If `key` is present in `map` with value `value`, `fun` is invoked with argument `value` and its result is used as the new value of `key`.

{{< figure src="images/functions/Map/update-4.svg" >}}

If `key` is not present in `map`, `value` is inserted as the value of `key`.
The initial value will not be passed through the update function.

{{< figure src="images/functions/Map/update-4.2.svg" >}}
