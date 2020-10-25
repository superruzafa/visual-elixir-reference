---
title: dedup_by/2
url: /Stream/dedup_by/2
---

# Stream.dedup_by/2

{{< signature >}}

Creates a stream that only emits elements if the result of calling `fun` on the element is different from the (stored) result of calling `fun` on the last emitted element.

{{< figure src="images/functions/Stream/dedup_by-2.svg" >}}
