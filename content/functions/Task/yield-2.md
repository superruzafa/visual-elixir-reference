---
title: yield/2
aliases:
  - /Task/yield
---

Blocks the caller until the given `%Task{}` finishes and returns its result as `{:ok, result}`.

{{< diagram 1 >}}

If the task doesn't complete within `timeout` milliseconds (default `5000`), `nil` is returned instead of exiting, and the task keeps running.

{{< diagram 2 >}}
