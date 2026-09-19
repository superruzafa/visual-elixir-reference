---
title: update_at/3
aliases:
  - /List/update_at
---


Returns a list where its `index`-th element is updated according ta function `fun`.

If `index` is out of bounds, the original list is returned.

{{< diagram 1 >}}

Negative indices indicate an offset from the end of the list.

{{< diagram 2 >}}
