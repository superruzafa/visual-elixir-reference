---
title: count_until/2
---

Counts up to `limit` elements in the `enumerable`, which is useful for checking whether the enumerable has fewer, exactly, or more elements than `limit`, without needing to count the entire enumerable.

{{< diagram 1 >}}

If `enumerable` has less elements than `limit` then the length of the enumerable is returned.

{{< diagram 2 >}}

