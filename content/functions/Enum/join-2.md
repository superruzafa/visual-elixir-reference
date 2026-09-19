---
title: join/2
aliases:
  - /Enum/join
---

Joins the given enumerable into a binary using `joiner` as a separator.

If `joiner` is not passed at all, it defaults to the empty binary.

All elements in the enumerable must be convertible to a binary, otherwise an error is raised.

{{< diagram 1 >}}
