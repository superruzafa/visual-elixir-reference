---
title: elem/2
aliases:
  - /Kernel/elem
---


Gets the element at the zero-based `index` in `tuple`.
Allowed in guard tests.

{{< diagram 1 >}}

It raises `ArgumentError` when `index` is negative or it is out of range of the tuple elements.

{{< diagram 2 >}}
