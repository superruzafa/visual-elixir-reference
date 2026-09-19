{{- $module := path.Base (path.Split .Path).Dir -}}
{{- $basename := replace (path.Split .Path).File ".md" "" -}}
{{- $parts := split $basename "-" -}}
{{- $function_wo_arity := index $parts 0 -}}
{{- $arity := index $parts 1 -}}
{{- $function := printf "%s/%s" $function_wo_arity $arity -}}
---
title: {{ $function }}
url: /{{ $module }}/{{ $function }}
{{- if (strings.HasSuffix $function_wo_arity "_") }}
aliases: ['/{{ $module }}/{{ $function }}/']
{{- end }}
draft: true
---

# {{ $module }}.{{ $function }}
Brief description and usage of the `{{ $module }}`'s `{{ $function }}` function.

{{< diagram 1 >}}
{{< diagram 2 >}}
{{< diagram 3 >}}
