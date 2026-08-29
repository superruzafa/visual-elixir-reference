---
title: get_lazy/3
url: Keyword/get_lazy/3
---


Gets the value for a specific `key`.

If duplicated entries exist, the first one is returned.

{{< figure src="images/functions/Keyword/get_lazy-3.svg" >}}

If `key` does not exist, lazily evaluates fun and returns its result.

This is useful if the default value is very expensive to calculate or generally difficult to setup and teardown again.

{{< figure src="images/functions/Keyword/get_lazy-3.2.svg" >}}
