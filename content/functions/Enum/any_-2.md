---
title: any?/2
aliases:
  - '/Enum/any'
---
Returns `true` if **at least one element** in `enumerable` evaluates to a truthy value when the function `fun` is applied over it.

{{< diagram 1 >}}

If no element in `enumerable` evaluates to a truthy value then the function returns `false`. 

{{< diagram 2 >}}

On empty enumerables this function returns `false`.

{{< diagram 3 >}}
