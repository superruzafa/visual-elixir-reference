---
title: put_new_lazy/3
url: /Keyword/put_new_lazy/3
---

# Keyword.put_new_lazy/3

{{< signature >}}

Evaluates `fun` and puts the result under `key` in `keywords` unless `key` is already present.

This function is useful in case you want to compute the value to put under `key` only if `key` is not already present, as for example, when the value is expensive to calculate or generally difficult to setup and teardown again.

{{< figure src="images/functions/Keyword/put_new_lazy-3.svg" >}}

If `keywords` doesn’t contain `key` then it’s added using the value returned from `fun`.

{{< figure src="images/functions/Keyword/put_new_lazy-3.2.svg" >}}
