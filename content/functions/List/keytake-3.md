---
title: keytake/3
aliases:
  - /List/keytake
---


Receives a list of tuples and returns the first tuple where the element at `index` in the tuple matches the given `key`, as well as the list without found tuple.

{{< diagram 1 >}}

If such a tuple is not found, `nil` will be returned.

{{< diagram 2 >}}
