---
title: merge/3
url: /Map/merge/3
---


Merges two maps into one, resolving conflicts through the given `fun`.

All keys in `map2` will be added to `map1`. The given function will be invoked when there are duplicate keys; its arguments are `key` (the duplicate key), `value1` (the value of `key` in `map1`), and `value2` (the value of `key` in `map2`).

The value returned by `fun` is used as the value under `key` in the resulting map.

{{< figure src="images/functions/Map/merge-3.svg" >}}
