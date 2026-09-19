---
title: all?/2
aliases:
  - /Enum/all
---

Returns `true` if **all** the elements in `enumerable` evaluate to a truthy value when the function `fun` is applied over them.

{{< diagram 1 >}}

As soon as one element evaluates to a falsy value, the iteration stops and the whole function returns `false`.

{{< diagram 2 >}}

On empty enumerables this function returns `true`.

{{< diagram 3 >}}
