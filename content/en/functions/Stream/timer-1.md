---
title: timer/1
url: Stream/timer/1
---

# Stream.timer/1

{{< signature >}}

Creates a stream that emits a single value after `n` milliseconds.

The value emitted is 0. This operation will block the caller by the given time until the element is streamed.

{{< figure src="images/functions/Stream/timer-1.svg" >}}
