---
title: slice/2
url: Enum/slice/2
---

Returns a subset list of the given enumerable by `range`.

`range` must be a `Range`. Given an `enumerable`, it drops elements before `range.first` (zero-base), then takes elements until element `range.last` (inclusively).

If `range.last` is out of bounds, then it is assigned as the index of the last element.

{{< figure src="images/functions/Enum/slice-2.svg" >}}

Indexes are normalized, meaning that negative indexes will be counted from the end.

{{< figure src="images/functions/Enum/slice-2.2.svg" >}}

