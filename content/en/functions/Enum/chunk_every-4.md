---
title: chunk_every/4
url: Enum/chunk_every/4
---

Returns list of lists containing `count` elements each, where each new chunk starts `step` elements into `enumerable`.

`step` is optional and, if not passed, defaults to `count`, i.e. chunks do not overlap.

If the last chunk does not have `count` elements to fill the chunk, elements are taken from `leftover` to fill in the chunk. If `leftover` does not have enough elements to fill the chunk, then a partial chunk is returned with less than `count` elements.

If `:discard` is given in `leftover`, the last chunk is discarded unless it has exactly `count` elements.

{{< figure src="images/functions/Enum/chunk_every-4.svg" >}}
