---
title: fetch/2
aliases:
  - /Map/fetch
---


Fetches the value for a specific `key` in the given `map` by returning `{:ok, value}`.

{{< figure src="images/functions/Map/fetch-2.svg" >}}

If `map` doesn't contain `key`, `:error` is returned.

{{< figure src="images/functions/Map/fetch-2.2.svg" >}}
