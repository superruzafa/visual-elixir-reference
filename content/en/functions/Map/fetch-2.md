---
title: fetch/2
url: Map/fetch/2
---

# Map.fetch/2

{{< signature >}}

Fetches the value for a specific `key` in the given `map` by returning `{:ok, value}`.

{{< figure src="images/functions/Map/fetch-2.svg" >}}

If `map` doesn't contain `key`, `:error` is returned.

{{< figure src="images/functions/Map/fetch-2.2.svg" >}}
