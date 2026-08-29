---
title: interval/1
url: Stream/interval/1
---

Creates a stream that emits a value after the given period `n` in milliseconds.

The values emitted are an increasing counter starting at 0. This operation will block the caller by the given interval every time a new element is streamed.

{{< figure src="images/functions/Stream/interval-1.svg" >}}
