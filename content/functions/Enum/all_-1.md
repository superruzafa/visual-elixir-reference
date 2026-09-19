---
title: all?/1
---

Returns `true` if **all** the elements in `enumerable` are truthy.

{{< diagram 1 >}}

As soon as one element is falsy, the iteration stops and the whole function returns `false`.

{{< diagram 2 >}}

On empty enumerables this function returns `true`.

{{< diagram 3 >}}
