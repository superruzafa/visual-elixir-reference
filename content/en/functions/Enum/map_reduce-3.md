---
title: map_reduce/3
url: Enum/map_reduce/3
---

# Enum.map_reduce/3

{{< signature >}}

Invokes the given function to each element in the enumerable to reduce it to a single element, while keeping an accumulator.

Returns a tuple where the first element is the mapped enumerable and the second one is the final accumulator.

The function, `fun`, receives two arguments: the first one is the element, and the second one is the accumulator. `fun` must return a tuple with two elements in the form of `{result, accumulator}`.

{{< figure src="images/functions/Enum/map_reduce-3.svg" >}}
