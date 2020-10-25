---
title: uniq_by/2
url: Enum/uniq_by/2
---

# Enum.uniq_by/2

{{< signature >}}

Enumerates the `enumerable` by removing the elements for which function `fun` returned duplicate elements.

The function `fun` maps every element to a term. Two elements are considered duplicates if the return value of `fun` is equal for both of them.

The first occurrence of each element is kept.

{{< figure src="images/functions/Enum/uniq_by-2.svg" >}}
