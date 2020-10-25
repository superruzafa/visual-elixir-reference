---
title: elem/2
url: Kernel/elem/2
---

# Kernel.elem/2

{{< signature >}}

Gets the element at the zero-based `index` in `tuple`.
Allowed in guard tests.

{{< figure src="images/functions/Kernel/elem-2.svg" >}}

It raises `ArgumentError` when `index` is negative or it is out of range of the tuple elements.

{{< figure src="images/functions/Kernel/elem-2.2.svg" >}}
