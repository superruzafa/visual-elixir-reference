---
title: all?/2
url: Enum/all_/2
aliases:
  - '/Enum/all?/2/'
---

# Enum.all?/2

{{< signature >}}

Returns `true` if **all** the elements in `enumerable` evaluate to a truthy value when the function `fun` is applied over them.

{{< figure src="images/functions/Enum/all_-2.svg" >}}

As soon as one element evaluates to a falsy value, the iteration stops and the whole function returns `false`.

{{< figure src="images/functions/Enum/all_-2.2.svg" >}}

On empty enumerables this function returns `true`.

{{< figure src="images/functions/Enum/all_-2.3.svg" >}}