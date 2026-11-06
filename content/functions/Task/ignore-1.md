---
title: ignore/1
aliases:
  - /Task/ignore
---

Unlinks the given `%Task{}` and returns `nil`. The task keeps running, but its result is discarded and it can no longer be awaited.

{{< diagram 1 >}}

If the task had already replied by the time it is ignored, the reply is returned as `{:ok, result}`.

{{< diagram 2 >}}

Since the link is gone, if the task fails later its exit doesn't affect the calling process.

{{< diagram 3 >}}
