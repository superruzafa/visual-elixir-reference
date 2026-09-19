---
title: pop/3
aliases:
  - /Map/pop
---


Returns and removes the value associated with key in map.

If `key` is present in `map` with value `value`, `{value, new_map}` is returned where `new_map` is the result of removing `key` from `map`.

{{< diagram 1 >}}

If `key` is not present in `map`, `{default, map}` is returned.

{{< diagram 2 >}}
