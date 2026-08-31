---
title: fetch/2
aliases:
  - /Map/fetch
---


Fetches the value for a specific `key` in the given `map` by returning `{:ok, value}`.

{{< diagram 1 >}}

If `map` doesn't contain `key`, `:error` is returned.

{{< diagram 2 >}}
