---
title: reduce/3
aliases:
  - /Enum/reduce
---

Invokes `fun` for each element in the enumerable with the accumulator.

The initial value of the accumulator is `acc`. The function is invoked for each element in the enumerable with the accumulator. The result returned by the function is used as the accumulator for the next iteration. The function returns the last accumulator.

{{< diagram 1 >}}

It returns `acc` if enumerable is empty.

{{< diagram 2 >}}
