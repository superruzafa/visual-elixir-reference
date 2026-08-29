---
title: Range
url: /Range
---

Ranges represent a sequence of zero, one or many, ascending or descending integers, using the `first..last` notation.

{{< figure src="images/functions/Range/Range.svg" >}}

Additionally, a `step` can be provided to indicate the difference between integers within the range.

When not defined, an implicit `step` is defined based on the values of `first` and `last`. 
For ascending ranges (`first` <= `last`) the implicit `step` is `1` while for desdending ranges is `-1`.

{{< figure src="images/functions/Range/Range.2.svg" >}}

