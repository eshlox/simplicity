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

Ã ¾ Ķ Ŀ Ƿ ע ऋ ਉ ጇ ᚙ ឿ ظ

# This is H1

Maecenas nec felis tortor. Etiam dictum felis eget augue congue finibus. Etiam nibh sapien, cursus sit amet feugiat non, posuere tincidunt dui.

## This is H2

Maecenas nec felis tortor. Etiam dictum felis eget augue congue finibus. Etiam nibh sapien, cursus sit amet feugiat non, posuere tincidunt dui.

### This is H3

Maecenas nec felis tortor. Etiam dictum felis eget augue congue finibus. Etiam nibh sapien, cursus sit amet feugiat non, posuere tincidunt dui.

#### This is H4

Maecenas nec felis tortor. Etiam dictum felis eget augue congue finibus. Etiam nibh sapien, cursus sit amet feugiat non, posuere tincidunt dui.

##### This is H5

Maecenas nec felis tortor. Etiam dictum felis eget augue congue finibus. Etiam nibh sapien, cursus sit amet feugiat non, posuere tincidunt dui.

###### This is H6

Maecenas nec felis tortor. Etiam dictum felis eget augue congue finibus. Etiam nibh sapien, cursus sit amet feugiat non, posuere tincidunt dui.

---

Use the `printf()` function. You can use also ```print()```.

*italics*

**bold**

~~strikethrough text~~

<u>underline</u>

:heart_eyes:
:boom:
:smiling_imp:

> Blockquote: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ac dolor elementum, consectetur tortor in, lacinia velit. Aenean dignissim tellus justo, sit amet suscipit tortor lacinia non.

*   Red
*   Green
*   Blue

1.  Red
2. 	Green
3.	Blue

- [ ] Red
- [ ] Green
- [ ] **Blue**
- [ ] Yellow
- [x] Orange

```
import os

# Very long line, very long line, very long line, very long line, very long line, very long line, very long line, very long line.
filename = os.environ.get('PYTHONSTARTUP')
if filename and os.path.isfile(filename):
    with open(filename) as fobj:
        startup_file = fobj.read()
    exec(startup_file)
```

```python
import os

filename = os.environ.get('PYTHONSTARTUP')
if filename and os.path.isfile(filename):
    with open(filename) as fobj:
        startup_file = fobj.read()
    exec(startup_file)
```

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

First Header | Second Header | Third Header
------------ | ------------- | ------------
Content Cell | Content Cell  | Content Cell
Content Cell | Content Cell  | Content Cell

| First Header  | Second Header |
| ------------- | ------------- |
| Content Cell  | Content Cell  |
| Content Cell  | Content Cell  |

First Header | Second Header | Third Header
:----------- | :-----------: | -----------:
Left         | Center        | Right
Left         | Center        | Right

You can create footnotes like this[^footnote].

[^footnote]: Here is the *text* of the **footnote**.

This is [an example](http://example.com/ "Title") link.

An email <example@example.com> link.

![Alt text](/images/image-1.jpg "Photo by Ales Krivec on Unsplash")

{{< figure src="/images/image-1.jpg" title="Photo by Ales Krivec on Unsplash" >}}

{{< figure src="/images/image-1.jpg" title="Photo by Ales Krivec on Unsplash" lightbox="true" >}}

{{< instagram BbTLbYSH59J >}}

{{< instagram BahBaqvnv5N hidecaption >}}

{{< speakerdeck 50021f75cf1db900020005e7 >}}

{{< tweet 935115588166471680 >}}

{{< youtube wwKBHrMy-Wc >}}

{{< vimeo 111271422 >}}

{{< gist spf13 7896402 >}}

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
