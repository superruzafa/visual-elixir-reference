---
title: min/3
url: /Enum/min/3
---

# Enum.min/3

{{< signature >}}

Returns the minimal element in the enumerable according to Erlang's term ordering.

By default, the comparison is done with the `<=` sorter function. If multiple elements are considered minimal, the first one that was found is returned.

{{< figure src="images/functions/Enum/min-3.svg" >}}

If the enumerable is empty, the provided `empty_fallback` is called.

{{< figure src="images/functions/Enum/min-3.2.svg" >}}

The default `empty_fallback` raises `Enum.EmptyError`.

{{< figure src="images/functions/Enum/min-3.3.svg" >}}
