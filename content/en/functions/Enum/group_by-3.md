---
title: group_by/3
url: Enum/group_by/3
---

# Enum.group_by/3

{{< signature >}}

Splits the `enumerable` into groups based on `key_fun`.

The result is a map where each key is given by `key_fun` and each value is a list of elements given by `value_fun`. The order of elements within each list is preserved from the enumerable. However, like all maps, the resulting map is unordered.

{{< figure src="images/functions/Enum/group_by-3.svg" >}}
