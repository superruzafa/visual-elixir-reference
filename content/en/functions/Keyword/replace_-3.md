---
title: replace!/3
url: /Keyword/replace_/3
aliases: ['/Keyword/replace!/3/']
---

# Keyword.replace!/3

{{< signature >}}

Puts `value` under `key` only if the key already exists in keywords.

In case the key exists multiple times in the keyword list, it removes later occurrences.

{{< figure src="images/functions/Keyword/replace_-3.svg" >}}

If `key` is not present in `keywords`, a `KeyError` exception is raised.

{{< figure src="images/functions/Keyword/replace_-3.2.svg" >}}
