---
title: async/3
aliases:
  - /Task/async
---

Spawns a linked process that runs the function `fun` of `module` with `args` concurrently and immediately returns a `%Task{}` struct as a handle to it.

{{< diagram 1 >}}

If the function fails, the task process exits with an error and the calling process exits too.

{{< diagram 2 >}}
