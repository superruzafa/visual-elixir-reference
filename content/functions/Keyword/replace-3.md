---
title: replace/3
aliases:
  - /Keyword/replace
---


Puts `value` under `key` only if the key already exists in `keywords`.

In case the key exists multiple times in the keyword list, it removes later occurrences.

{{< diagram 1 >}}

If `key` is not present `keywords` is returned as it.

{{< diagram 2 >}}
