---
title: pop_lazy/3
url: Keyword/pop_lazy/3
---

# Keyword.pop_lazy/3

{{< signature >}}

Returns the first value for `key` and removes all associated entries in the keyword list.

It returns a tuple where the first element is the first value for key and the second element is a keyword list with all entries associated with key removed.

{{< figure src="images/functions/Keyword/pop_lazy-3.svg" >}}

If the `key` is not present in the keyword list, the value from the function `fun` is returned in `{value, keywords}`.

{{< figure src="images/functions/Keyword/pop_lazy-3.2.svg" >}}
