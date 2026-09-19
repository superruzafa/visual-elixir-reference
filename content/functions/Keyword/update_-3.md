---
title: update!/3
aliases:
  - /Keyword/update!
---


Updates the `key` with the given function `fun`.
If there are duplicated keys, they are all removed and only the first one is updated.

{{< diagram 1 >}}

If the `key` does not exist, raises `KeyError`.

{{< diagram 2 >}}
