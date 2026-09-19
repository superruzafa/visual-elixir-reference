---
title: pop!/2
aliases:
  - /Keyword/pop!
---


Returns the first value for `key` and removes all associated entries in the keyword list.

It returns a tuple where the first element is the first value for key and the second element is a keyword list with all entries associated with key removed.

{{< diagram 1 >}}

If the `key` is not present in the keyword list, `KeyError` is raised.

{{< diagram 2 >}}
