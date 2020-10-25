---
title: transform/3
url: Stream/transform/3
---

# Stream.transform/3

{{< signature >}}

Transforms an existing stream.

It expects an accumulator and a function that receives each stream element and an accumulator. It must return a tuple, where the first element is a new stream (often a list) or the atom `:halt`, and the second element is the accumulator to be used by the next element, if any, in both cases.

{{< figure src="images/functions/Stream/transform-3.svg" >}}
