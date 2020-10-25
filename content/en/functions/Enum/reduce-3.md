---
title: reduce/3
url: Enum/reduce/3
---

# Enum.reduce/3

{{< signature >}}

Invokes `fun` for each element in the enumerable with the accumulator.

The initial value of the accumulator is `acc`. The function is invoked for each element in the enumerable with the accumulator. The result returned by the function is used as the accumulator for the next iteration. The function returns the last accumulator.

{{< figure src="images/functions/Enum/reduce-3.svg" >}}

It returns `acc` if enumerable is empty.

{{< figure src="images/functions/Enum/reduce-3.2.svg" >}}
