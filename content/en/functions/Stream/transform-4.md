---
title: transform/4
url: Stream/transform/4
---

# Stream.transform/4

{{< signature >}}

Transforms an existing stream with function-based start and finish.

The accumulator is only calculated when transformation starts. It also allows an after function to be given which is invoked when the stream halts or completes.

{{< figure src="images/functions/Stream/transform-4.svg" >}}
