---
title: split_with/2
url: Enum/split_with/2
---

Splits the `enumerable` in two lists by calling `fun` with each element in the enumerable as its only argument. Returns a tuple with the first list containing all the elements in enumerable for which applying `fun` returned a truthy value, and a second list with all the elements for which applying `fun` returned a falsy value (`false` or `nil`).

The elements in both the returned lists are in the same relative order as they were in the original enumerable (if such enumerable was ordered, like a list).

{{< figure src="images/functions/Enum/split_with-2.svg" >}}
