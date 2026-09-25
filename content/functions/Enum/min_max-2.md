---
title: min_max/2
---

Returns a tuple with the minimal and the maximal elements within `enumerable`.
If multiple elements are considered maximal or minimal, the first one that was found is returned.

If `fun` is omitted then the function `Kernel.</2` is used as comparator.

{{< diagram 1 >}}

If `fun` is omitted and `enumerable` is empty then the default value for `fun` raises an `Enum.EmptyError`.

{{< diagram 2 >}}

If `fun` is specified and it's a 2-arity function then it's evaluated with pairs of elements to determine their ordering.

`fun` must return `true` only if the first argument strictly precedes the second, and `false` otherwise (including when
they're equal).

{{< diagram 3 >}}

`fun` may also be a module. In that case its `compare/2` function is used, and the first argument is considered to
precede the second only when it returns `:lt`.

{{< diagram 4 >}}

If `fun` is specified and it's 0-arity then it's evaluated only when `enumerable` is empty and its result returned.
The comparator for non-empty enumerables is still `Kernel.</2`.

{{< diagram 5 >}}
