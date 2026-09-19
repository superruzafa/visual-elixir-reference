---
title: reduce/2
aliases:
  - /Enum/reduce
---

Invokes `fun` for each element in the enumerable with the accumulator.

The first element of the enumerable is used as the initial value of the accumulator. Then the function is invoked with the next element and the accumulator. The result returned by the function is used as the accumulator for the next iteration, recursively. When the enumerable is done, the last accumulator is returned.

{{< diagram 1 >}}

Since the first element of the enumerable is used as the initial value of the accumulator, `fun` will only be executed n - 1 times where n is the length of the enumerable. This function won't call the specified function for enumerables that are one-element long.

{{< diagram 2 >}}

Raises `Enum.EmptyError` if enumerable is empty.

{{< diagram 3 >}}
