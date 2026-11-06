---
title: await/2
aliases:
  - /Task/await
---

Blocks the caller until the given `%Task{}` finishes and returns its result.

{{< diagram 1 >}}

If the task doesn't complete within `timeout` milliseconds (default `5000`), the calling process exits. Because of the link, the task process exits too.

{{< diagram 2 >}}
