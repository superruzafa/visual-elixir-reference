---
title: pop_first/3
aliases:
  - /Keyword/pop_first
---


Returns the first value for `key` and removes all associated entries in the keyword list.

It returns a tuple where the first element is the first value for key and the second element is a keyword list with all entries associated with key removed.

{{< diagram 1 >}}

If the `key` is not present in the keyword list, `{default, keywords}` is returned.

{{< diagram 2 >}}
