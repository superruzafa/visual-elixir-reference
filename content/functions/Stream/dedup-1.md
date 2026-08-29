---
title: dedup/1
url: /Stream/dedup/1
---

Creates a stream that only emits elements if they are different from the last emitted element.

This function only ever needs to store the last emitted element.

Elements are compared using `===/2`.

{{< figure src="images/functions/Stream/dedup-1.svg" >}}
