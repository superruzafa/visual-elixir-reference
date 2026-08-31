---
title: dedup/1
aliases:
  - /Stream/dedup
---

Creates a stream that only emits elements if they are different from the last emitted element.

This function only ever needs to store the last emitted element.

Elements are compared using `===/2`.

{{< diagram 1 >}}
