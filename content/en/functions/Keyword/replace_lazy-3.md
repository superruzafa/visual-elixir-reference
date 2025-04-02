---
title: replace_lazy/3
url: /Keyword/replace_lazy/3
aliases: ['/Keyword/replace_lazy/3/']
---


Replaces the value under `key` using the given function only if the key already exists in `keywords`.

In case the key exists multiple times in the keyword list, it removes later occurrences.

{{< figure src="images/functions/Keyword/replace_lazy-3.svg" >}}

If `key` is not present `keywords` is returned as it.

{{< figure src="images/functions/Keyword/replace_lazy-3.2.svg" >}}
