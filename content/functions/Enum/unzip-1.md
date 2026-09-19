---
title: unzip/1
aliases:
  - /Enum/unzip
---

It takes an `enumerable` with elements being two-element tuples and returns a tuple with two lists, each of which is formed by the first and second element of each tuple, respectively.

{{< diagram 1 >}}

This function fails unless `enumerable` is or can be converted into a list of tuples with exactly two elements in each tuple.
