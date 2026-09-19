---
title: count_until/3
aliases:
  - /Enum/count_until
---

Counts how many elements are evaluated to truthy when `fun` is applied over them, stopping at `limit`.

{{< diagram 1 >}}

If `enumerable` is traversed completely then the function returns the count of elements that are evaluated to truthy when `fun` is applied over them.

{{< diagram 2 >}}

