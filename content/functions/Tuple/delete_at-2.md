---
title: delete_at/2
aliases:
  - /Tuple/delete_at
---


Deletes the element at the given `index` from `tuple`.

{{< diagram 1 >}}

Raises `ArgumentError` if `index` is negative or greater than or equal to the length of tuple.
`index` is zero-based.

{{< diagram 2 >}}
