---
title: timer/1
aliases:
  - /Stream/timer
---

Creates a stream that emits a single value after `n` milliseconds.

The value emitted is 0. This operation will block the caller by the given time until the element is streamed.

{{< diagram 1 >}}
