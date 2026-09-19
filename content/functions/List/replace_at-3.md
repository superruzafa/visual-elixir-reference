---
title: replace_at/3
aliases:
  - /List/replace_at
---


Returns a list with a replaced value at the specified `index`.

{{< diagram 1 >}}

Negative indices indicate an offset from the end of the `list`.

{{< diagram 2 >}}

If `index` is out of bounds, the original `list` is returned.
