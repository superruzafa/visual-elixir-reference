---
title: join/2
url: Enum/join/2
---

# Enum.join/2

{{< signature >}}

Joins the given enumerable into a binary using `joiner` as a separator.

If `joiner` is not passed at all, it defaults to the empty binary.

All elements in the enumerable must be convertible to a binary, otherwise an error is raised.

{{< figure src="images/functions/Enum/join-2.svg" >}}
