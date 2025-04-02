---
title: uniq/1
url: /Stream/uniq/1
---

Creates a stream that only emits elements if they are unique.

{{< figure src="images/functions/Stream/uniq-1.svg" >}}

Keep in mind that, in order to know if an element is unique or not, this function needs to store all unique values emitted by the stream. Therefore, if the stream is infinite, the number of elements stored will grow infinitely, never being garbage-collected.
