---
title: transform/5
aliases:
  - /Stream/transform
---

Transforms an enumerable into a stream using function-based callbacks: `start_fun`, `last_fun`, and `after_fun`.

At the beginning of the transformation, the initial accumulator is created by calling `start_fun`.
Then, for each element, `fun` is called with the current element and the previous accumulator,
returning a tuple containing the emitted stream elements (if any) and the next accumulator.

Once all elements have been processed, `last_fun` is called to emit any final chunk of elements.

Finally, `after_fun` is called with the last accumulator to perform cleanup.

{{< diagram 1 >}}

The transformation can be halted before consuming all elements of the `enumerable` by returning `{:halt, acc}`.

{{< diagram 2 >}}

