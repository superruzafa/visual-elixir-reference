---
title: flat_map_reduce/3
aliases:
  - /Enum/flat_map_reduce
---

Maps and reduces an `enumerable`, flattening the given results (only one level deep).

It expects an accumulator `acc` and a function `fun` that receives each enumerable element, and must return a tuple containing a new enumerable (often a list) with the new accumulator.

{{< diagram 1 >}}

The map-reducing may end before processing all the enumerable if the `fun` function returns a tuple with `:halt` as first element and the accumulator as second.

{{< diagram 2 >}}
