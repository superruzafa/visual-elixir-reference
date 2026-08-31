---
title: pop_lazy/3
aliases:
  - /Map/pop_lazy
---


Lazily returns and removes the value associated with `key` in `map`.

If `key` is present in `map` with value `value`, `{value, new_map}` is returned where `new_map` is the result of removing `key` from `map`.

{{< diagram 1 >}}

If `key` is not present in `map`, `{b, map}` is returned, where `b` is the result of applying `fun`.

{{< diagram 2 >}}
