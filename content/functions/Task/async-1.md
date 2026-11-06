---
title: async/1
aliases:
  - /Task/async
---

Spawns a linked process that runs `fun` concurrently and immediately returns a `%Task{}` struct as a handle to it.

{{< diagram 1 >}}

If `fun` fails, the task process exits with an error and the calling process exits too.

{{< diagram 2 >}}
