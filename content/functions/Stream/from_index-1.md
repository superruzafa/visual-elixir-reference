---
title: from_index/1
aliases:
  - /Stream/from_index
---

Builds a stream that emits a sequence of integers, starting from the given offset (defaulting to `0`).

{{< diagram 1 >}}

If a function is supplied, it will be invoked with elements starting from the offset.

{{< diagram 2 >}}

