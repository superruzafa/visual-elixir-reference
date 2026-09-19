---
title: replace_lazy/3
aliases:
  - /Keyword/replace_lazy
---


Replaces the value under `key` using the given function only if the key already exists in `keywords`.

In case the key exists multiple times in the keyword list, it removes later occurrences.

{{< diagram 1 >}}

If `key` is not present `keywords` is returned as it.

{{< diagram 2 >}}
