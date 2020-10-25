---
title: uniq_by/2
url: /Stream/uniq_by/2
---

# Stream.uniq_by/2

{{< signature >}}

Creates a stream that only emits elements if they are unique, by removing the elements for which function `fun` returned duplicate elements.

The function `fun` maps every element to a term which is used to determine if two elements are duplicates.

{{< figure src="images/functions/Stream/uniq_by-2.svg" >}}

Keep in mind that, in order to know if an element is unique or not, this function needs to store all unique values emitted by the stream. Therefore, if the stream is infinite, the number of elements stored will grow infinitely, never being garbage-collected.
