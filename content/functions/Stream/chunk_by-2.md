---
title: chunk_by/2
aliases:
  - /Stream/chunk_by
---

Chunks `stream` by buffering elements for which `fun` returns the same value.

Elements are only emitted when `fun` returns a new value or the enumerable finishes.

{{< diagram 1 >}}
