---
title: get_lazy/3
aliases:
  - /Keyword/get_lazy
---


Gets the value for a specific `key`.

If duplicated entries exist, the first one is returned.

{{< diagram 1 >}}

If `key` does not exist, lazily evaluates fun and returns its result.

This is useful if the default value is very expensive to calculate or generally difficult to setup and teardown again.

{{< diagram 2 >}}
