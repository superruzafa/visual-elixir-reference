---
title: split/2
url: /Keyword/split/2
---


Takes all entries corresponding to the given `keys` in `keywords` and extracts them into a separate keyword list.

Returns a tuple with the new list and the old list with removed keys.

Keys for which there are no entries in the keyword list are ignored.

Entries with duplicated keys end up in the same keyword list.

{{< figure src="images/functions/Keyword/split-2.svg" >}}
