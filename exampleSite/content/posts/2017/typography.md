---
title: Typography - all elements with examples
date: 2017-11-09T10:15:01+02:00
categories: ["writing"]
tags: ["typography", "elements"]
language: en
slug: typography
---

Lorem ipsum dolor sit amet, consectetur adipiscing elit :wink:. Nullam nibh lorem, porta ut urna ut, scelerisque consequat magna. Pellentesque vel massa sed tortor cursus tempus at eget ligula. Duis leo odio, luctus eget suscipit vel, pharetra id velit. Mauris arcu enim, mollis placerat porta in, sagittis a nisl. Nam et augue eu justo porta tincidunt. In luctus nisl dolor, sed aliquet augue elementum eget. Vivamus laoreet, mauris vitae aliquam faucibus, tellus dolor feugiat felis, ac facilisis diam eros eget est.

Ut dolor nunc, dictum vitae molestie pulvinar, condimentum quis dui. Mauris ullamcorper tincidunt magna, quis tristique ligula laoreet fringilla. Nam dapibus tellus vel est vehicula, sed mattis sapien tempus. Aenean suscipit erat in lacus luctus lacinia. Donec in justo arcu. Nunc nibh lorem, ultricies in nunc ac, posuere feugiat ligula. In convallis, urna dapibus vehicula gravida, justo massa aliquam nunc, vitae gravida justo metus non felis. Mauris sed augue risus. Quisque commodo quam in risus porttitor ultrices. Fusce pellentesque eget eros vitae pulvinar. Maecenas nec felis tortor. Etiam dictum felis eget augue congue finibus. Etiam nibh sapien, cursus sit amet feugiat non, posuere tincidunt dui.

---

# This is H1
## This is H2
### This is H3
#### This is H4
##### This is H5
###### This is H6

---

Use the `printf()` function.

Use the ```printf()``` function.

---

*single asterisks*

**double asterisks**

~~Mistaken text.~~

<u>Underline</u>

---

:heart_eyes:
:boom:
:smiling_imp:

---

> Blockquote: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ac dolor elementum, consectetur tortor in, lacinia velit. Aenean dignissim tellus justo, sit amet suscipit tortor lacinia non.

---

*   Red
*   Green
*   Blue

---

1.  Red
2. 	Green
3.	Blue

---

- [ ] a task list item
- [ ] list syntax required
- [ ] normal **formatting**, @mentions, #1234 refs
- [ ] incomplete
- [x] completed

---

```
import os

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

---

First Header | Second Header | Third Header
------------ | ------------- | ------------
Content Cell | Content Cell  | Content Cell
Content Cell | Content Cell  | Content Cell

---

| First Header  | Second Header |
| ------------- | ------------- |
| Content Cell  | Content Cell  |
| Content Cell  | Content Cell  |

---

First Header | Second Header | Third Header
:----------- | :-----------: | -----------:
Left         | Center        | Right
Left         | Center        | Right

---

You can create footnotes like this[^footnote].

[^footnote]: Here is the *text* of the **footnote**.

---

This is [an example](http://example.com/ "Title") inline link.

[This link](http://example.net/) has no title attribute.

An email <example@example.com> link.

---

# Table of Contents
  * [Chapter 1](#chapter-1)
  * [Chapter 2](#chapter-2)
  * [Chapter 3](#chapter-3)

## Chapter 1 <a id="chapter-1"></a>
Content for chapter one.

## Chapter 2 <a id="chapter-2"></a>
Content for chapter one.

## Chapter 3 <a id="chapter-3"></a>
Content for chapter one.

---

This is [an example][id] reference-style link.

Then, anywhere in the document, you define your link label like this, on a line by itself:

[id]: http://example.com/  "Optional Title Here"

---

![Alt text](/images/image-1.jpg)

![Alt text](/images/image-1.jpg "Photo by Ales Krivec on Unsplash")

{{< img src="/images/image-1.jpg" title="Photo by Ales Krivec on Unsplash" >}}

{{< figure src="/images/image-1.jpg" title="Photo by Ales Krivec on Unsplash" >}}

---

{{< instagram BbTLbYSH59J >}}

---

{{< instagram BahBaqvnv5N hidecaption >}}

---

{{< speakerdeck 4e8126e72d853c0060001f97 >}}

---

{{< tweet 877500564405444608 >}}

---

{{< youtube wwKBHrMy-Wc >}}

---

{{< vimeo 111271422 >}}

---

{{< gist spf13 7896402 >}}

