---
title: chunk_by/2
url: /Stream/chunk_by/2
---

# Stream.chunk_by/2

{{< signature >}}

Chunks `stream` by buffering elements for which fun returns the same value.

Elements are only emitted when `fun` returns a new value or the enumerable finishes.

{{< figure src="images/functions/Stream/chunk_by-2.svg" >}}
