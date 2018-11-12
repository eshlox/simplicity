---
title: Code
date: 2017-01-09T10:15:01+02:00
categories: [writing]
tags: [typography, elements]
language: en
slug: code
---

```
import os

# Very long line, very long line, very long line, very long line, very long line, very long line, very long line, very long line.
filename = os.environ.get('PYTHONSTARTUP')
if filename and os.path.isfile(filename):
    with open(filename) as fobj:
        startup_file = fobj.read()
    exec(startup_file)
```

---

```python
import os

# Very long line, very long line, very long line, very long line, very long line, very long line, very long line, very long line.
filename = os.environ.get('PYTHONSTARTUP')
if filename and os.path.isfile(filename):
    with open(filename) as fobj:
        startup_file = fobj.read()
    exec(startup_file)
```

---

```python
import os

filename = os.environ.get('PYTHONSTARTUP')
if filename and os.path.isfile(filename):
    with open(filename) as fobj:
        startup_file = fobj.read()
    exec(startup_file)
```

---

{{< highlight html >}}
<section id="main">
    <div>
        <h1 id="title">{{ .Title }}</h1>
        {{ range .Data.Pages }}
            {{ .Render "summary"}}
        {{ end }}
    </div>
</section>
{{< /highlight >}}
