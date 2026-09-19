---
title: split/2
aliases:
  - /Map/split
---


Takes all entries corresponding to the given `keys` in `map` and extracts them into a separate map.

Returns a tuple with the new map and the old map with removed keys.

Keys for which there are no entries in `map` are ignored.

{{< diagram 1 >}}
