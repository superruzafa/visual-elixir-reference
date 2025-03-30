---
title: chunk_every/4
url: /Stream/chunk_every/4
---

Streams the enumerable in chunks, containing `count` elements each, where each new chunk starts `step` elements into the enumerable.

`step` is optional and, if not passed, defaults to `count`, i.e. chunks do not overlap.

If the last chunk does not have `count` elements to fill the chunk, elements are taken from `leftover` to fill in the chunk. If `leftover` does not have enough elements to fill the chunk, then a partial chunk is returned with less than `count` elements.

If `:discard` is given in leftover, the last chunk is discarded unless it has exactly count elements.

{{< figure src="images/functions/Stream/chunk_every-4.svg" >}}
