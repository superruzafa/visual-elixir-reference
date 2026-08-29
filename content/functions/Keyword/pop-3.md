---
title: pop/3
url: Keyword/pop/3
---


Returns the first value for `key` and removes all associated entries in the keyword list.

It returns a tuple where the first element is the first value for key and the second element is a keyword list with all entries associated with key removed.

{{< figure src="images/functions/Keyword/pop-3.svg" >}}

If the `key` is not present in the keyword list, `{default, keywords}` is returned.

{{< figure src="images/functions/Keyword/pop-3.2.svg" >}}
