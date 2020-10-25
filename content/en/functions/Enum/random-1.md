---
title: random/1
url: Enum/random/1
---

# Enum.random/1

{{< signature >}}

Returns a random element from `enumerable`.

This function uses Erlang's `:rand` module to calculate the random value. Check its documentation for setting a different random algorithm or a different seed.

The implementation is based on the reservoir sampling algorithm. It assumes that the sample being returned can fit into memory; the input enumerable doesn't have to, as it is traversed just once.

If a range is passed into the function, this function will pick a random value between the range limits, without traversing the whole range (thus executing in constant time and constant memory).

{{< figure src="images/functions/Enum/random-1.svg" >}}

Raises `Enum.EmptyError` if enumerable is empty.

{{< figure src="images/functions/Enum/random-1.2.svg" >}}
