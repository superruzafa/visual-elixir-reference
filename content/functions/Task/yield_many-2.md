---
title: yield_many/2
aliases:
  - /Task/yield_many
---

Waits for all the given `%Task{}`s to finish and returns a list of `{task, result}` tuples, in the same order as the tasks.

{{< diagram 1 >}}

When `opts` is a timeout (a non-negative integer), tasks that don't complete within that many milliseconds get `nil` as their result and keep running.

{{< diagram 2 >}}

## Options

`opts` can be either a timeout or a keyword list.

When acting as a timeout, it is the maximum amount of time (in milliseconds) each task is allowed to execute for. Defaults to 5000.
It can also be `:infinity` to wait forever.

When acting as a keyword list, it accepts the following options:

- `:limit`, the maximum amount of tasks to wait for. If the limit is reached before the timeout, this function returns immediately without triggering the `:on_timeout` behaviour
- `:timeout`, the maximum amount of time (in milliseconds or `:infinity`) each task is allowed to execute for. Defaults to 5000
- `:on_timeout`, what to do when a task times out. The possible values are:
  - `:nothing`, do nothing (default). The tasks can still be awaited on, yielded on, ignored, or shut down later
  - `:ignore`, the results of the task will be ignored
  - `:kill_task`, the task that timed out is killed
