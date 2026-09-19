---
title: pop_values/2
aliases:
  - /Keyword/pop_values
---


Returns all values for `key` and removes all associated entries in the keyword list.

It returns a tuple where the first element is a list of values for `key` and the second element is a keyword list with all entries associated with `key` removed.

{{< diagram 1 >}}

If the `key` is not present in the keyword list, `{[], keyword_list}` is returned.

{{< diagram 2 >}}
