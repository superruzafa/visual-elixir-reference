---
title: replace!/3
aliases:
  - /Map/replace!
---


Alters the value stored under `key` to value, but only if the entry `key` already exists in map.

{{< diagram 1 >}}

If `key` is not present in map, a `KeyError` exception is raised.

{{< diagram 2 >}}
