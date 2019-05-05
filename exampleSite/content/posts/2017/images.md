---
title: Images
date: 2017-03-11T10:15:01+02:00
categories: ["writing"]
tags: ["images", "lightbox"]
language: en
slug: images
images: [/images/image-1.jpg]
---

Use markdown to display an image.

```markdown
![Alt text](/media/image-1.jpg "Photo by Ales Krivec on Unsplash")
```

Result:

![Alt text](/media/image-1.jpg "Photo by Ales Krivec on Unsplash")

You can use ```image``` shortcode to insert an image which automatically generates additional five sizes of image for various display sizes.

Example code:

```html
{{</* image src="media/image-1.jpg" */>}}
```

Result:

{{< image src="media/image-1.jpg" >}}

You can insert image with caption.

Example code:

```html
{{</* image src="media/image-1.jpg" title="Photo by Ales Krivec on Unsplash" */>}}
```

Result:

{{< image src="media/image-1.jpg" title="Photo by Ales Krivec on Unsplash" >}}

You can add ```lightbox="true"``` parameter to use lightbox plugin.

Example code:

```html
{{</* image src="media/image-1.jpg" title="Photo by Ales Krivec on Unsplash" lightbox="true" */>}}
```

Result (click on the image):

{{< image src="media/image-1.jpg" title="Photo by Ales Krivec on Unsplash" lightbox="true" >}}

You can add ```round="50"``` parameter to round the corners from 0% to 50%(full circle).

Example code:

```html
{{</* image src="media/image-1.jpg" title="Photo by Ales Krivec on Unsplash" lightbox="true" round="50" */>}}
```

Result (you can still click on it):

{{< image src="media/image-1.jpg" title="Photo by Ales Krivec on Unsplash" lightbox="true" round="50" >}}


You can add `full="true"` parameter to display image with full width.

Example code:

```html
{{</* image src="media/image-1.jpg" title="Photo by Ales Krivec on Unsplash" full="true" */>}}
```

Result:

{{< image src="media/image-1.jpg" title="Photo by Ales Krivec on Unsplash" full="true" >}}

Add `resize=false` parameter to display original image without resizing (useful for animated GIFs).

```html
{{</* image src="media/image-1.jpg" title="Photo by Ales Krivec on Unsplash" resize="false" */>}}
```

Result:

{{< image src="media/image-1.jpg" title="Photo by Ales Krivec on Unsplash" resize="false" >}}
