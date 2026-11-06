---
title: async_stream/3
aliases:
  - /Task/async_stream
---

Runs `fun` concurrently over every element of `enumerable`, each in its own linked process, and returns a stream of `{:ok, result}` tuples, in the same order as the elements.

{{< diagram 1 >}}

## Options

- `:max_concurrency`, the maximum number of tasks running at the same time. Defaults to `System.schedulers_online/0`.
- `:ordered`, whether results are emitted in the input order. Setting it to `false` avoids buffering results, but tasks run asynchronously either way. Defaults to `true`.
- `:timeout`, the maximum time (in milliseconds or `:infinity`) each task may run. Defaults to 5000.
- `:on_timeout`, what to do when a task times out:
  - `:exit` (default), the caller exits.
  - `:kill_task`, the task is killed and `{:exit, :timeout}` is emitted for it.
- `:zip_input_on_exit`, includes the input in exit tuples: `{:exit, {input, reason}}`. Defaults to `false`.
