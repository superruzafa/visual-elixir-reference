---
title: map_every/3
url: Enum/map_every/3
---

Returns a list of results of invoking `fun` on every `nth` element of enumerable, starting with the first element.

The first element is always passed to the given function, unless `nth` is 0.

The second argument specifying every `nth` element must be a non-negative integer.

If `nth` is 0, then enumerable is directly converted to a list, without `fun` being ever applied.

{{< figure src="images/functions/Enum/map_every-3.svg" >}}
