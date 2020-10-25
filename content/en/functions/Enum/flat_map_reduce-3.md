---
title: flat_map_reduce/3
url: Enum/flat_map_reduce/3
---

# Enum.flat_map_reduce/3

{{< signature >}}

Maps and reduces an `enumerable`, flattening the given results (only one level deep).

It expects an accumulator `acc` and a function `fun` that receives each enumerable element, and must return a tuple containing a new enumerable (often a list) with the new accumulator.

{{< figure src="images/functions/Enum/flat_map_reduce-3.svg" >}}

The map-reducing may end before processing all the enumerable if the `fun` function returns a tuple with `:halt` as first element and the accumulator as second.

{{< figure src="images/functions/Enum/flat_map_reduce-3.2.svg" >}}
