---
title: Images
date: 2017-11-11T10:15:01+02:00
categories: ["writing"]
tags: ["images", "lightbox"]
language: en
slug: images
images: [/images/image-1.jpg]
---

Use markdown to display an image.

```markdown
![Alt text](/images/image-1.jpg "Photo by Ales Krivec on Unsplash")
```

Result:

![Alt text](/images/image-1.jpg "Photo by Ales Krivec on Unsplash")


You can use ```figure``` shortcode to insert an image with caption.

Example code:

```html
&#123;{< figure src="/images/image-1.jpg" title="Photo by Ales Krivec on Unsplash" >}&#125;
```

Result:

{{< figure src="/images/image-1.jpg" title="Photo by Ales Krivec on Unsplash" >}}


You can add ```lightbox="true"``` parameter to use lightbox plugin.

Example code:

```html
&#123;{< figure src="/images/image-1.jpg" title="Photo by Ales Krivec on Unsplash" lightbox="true" >}&#125;
```

Result (click on the image):

{{< figure src="/images/image-1.jpg" title="Photo by Ales Krivec on Unsplash" lightbox="true" >}}
