---
title: shutdown/2
aliases:
  - /Task/shutdown
---

Unlinks the given `%Task{}` and shuts it down, returning `nil`. The task can no longer be awaited.

{{< diagram 1 >}}

If the task replies while it is being shut down, the reply is returned as `{:ok, result}`.

{{< diagram 2 >}}

If the task doesn't exit within `timeout` milliseconds (default `5000`), it is killed and `{:exit, reason}` is returned.

{{< diagram 3 >}}
