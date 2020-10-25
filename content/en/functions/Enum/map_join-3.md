---
title: map_join/3
url: Enum/map_join/3
---

# Enum.map_join/3

{{< signature >}}

Maps and joins the given enumerable in one pass.

`joiner` can be either a binary or a list and the result will be of the same type as `joiner`. If `joiner` is not passed at all, it defaults to an empty binary.

All elements returned from invoking the `fun` must be convertible to a binary, otherwise an error is raised.

{{< figure src="images/functions/Enum/map_join-3.svg" >}}
