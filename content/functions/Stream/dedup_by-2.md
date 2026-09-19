---
title: dedup_by/2
aliases:
  - /Stream/dedup_by
---

Creates a stream that only emits elements if the result of calling `fun` on the element is different from the (stored) result of calling `fun` on the last emitted element.

{{< diagram 1 >}}
