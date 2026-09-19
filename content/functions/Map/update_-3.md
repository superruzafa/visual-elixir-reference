---
title: update!/3
aliases:
  - /Map/update!
---


Updates the `key` in `map` with the given function `fun`.

If `key` is present in `map` with value `value`, `fun` is invoked with argument `value` and its result is used as the new value of `key`.

{{< diagram 1 >}}

If `key` is not present in `map`, a `KeyError` exception is raised.

{{< diagram 2 >}}
