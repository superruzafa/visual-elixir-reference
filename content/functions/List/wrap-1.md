---
title: wrap/1
aliases:
  - /List/wrap
---


Wraps `term` in a list if this is not list.

{{< diagram 1 >}}

If `term` is already a list, it returns the list.

{{< diagram 2 >}}

If `term` is `nil`, it returns an empty list.

{{< diagram 3 >}}
