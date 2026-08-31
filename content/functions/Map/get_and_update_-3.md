---
title: get_and_update!/3
aliases:
  - /Map/get_and_update!
---


Gets the value from `key` and updates it, all in one pass.

`fun` is called with the current value under `key` in `map` and must return a two-element tuple: the "get" value (the retrieved value, which can be operated on before being returned) and the new value to be stored under `key` in the resulting new map. 

The returned value is a tuple with the "get" value returned by `fun` and a new map with the updated value under `key`.

{{< diagram 1 >}}

If `key` is not present in `map` then `KeyError` is raised.

{{< diagram 2 >}}

`fun` may also return `:pop`, which means the current value shall be removed from `map` and returned.

{{< diagram 3 >}}
