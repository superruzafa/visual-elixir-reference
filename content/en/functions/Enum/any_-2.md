---
title: any?/2
url: Enum/any_/2
aliases:
  - '/Enum/any?/2/'
---
Returns `true` if **at least one element** in `enumerable` evaluates to a truthy value when the function `fun` is applied over it.

{{< figure src="images/functions/Enum/any_-2.svg" >}}

If no element in `enumerable` evaluates to a truthy value then the function returns `false`. 

{{< figure src="images/functions/Enum/any_-2.2.svg" >}}

On empty enumerables this function returns `false`.

{{< figure src="images/functions/Enum/any_-2.3.svg" >}}
