# Simplicity

Very simple, clean and readable (I think so) Hugo theme.

#### Responsive design
Works on mobile, tablet and desktop.
#### Responsive images
It generates several image sizes during build process and displays the best one for given device/resolution.
#### Clean typography
It should be a pleasure to read your blog, right?
#### Additional shortcodes
Shortcodes for Google Adsense, images, Speaker Deck, Video, Vimeo, Youtube.
#### Google Adsense
You can use shortcode to insert Adsense Ad whenever you want.
#### Google Analytics
Just add a Google Analytics code to turn it on.
#### Lightbox
Image shortcode allow to turn on [baguetteBox.js](https://feimosi.github.io/baguetteBox.js/) for given image.
#### Auto hide/show header
This theme uses [headroom.js](http://wicky.nillia.ms/headroom.js/) script.
#### Page scroll indicator
Displays progress bar on the top of the page when user scroll the page.
#### Disqus
Just add a Disqus shortname to enable comments.
#### Categories
Separate page with list of all categories and list of posts for selected category.
#### Tags
Separate page with list of all categories and list of posts for selected tag.
#### RSS
Custom RSS template without e-mail inside feed.
#### Social icons
Add an information about your social profile in config file to display it on the home page. Supported services: email, Facebook, Github, Google+, Linkedin, Messenger, Spotify, Stackoverflow, Telegram, Twitter.
#### Gravatar support
Just add your Gravatar email to the config file to display your avatar on the home page.
#### and more
- OpenGraph support
- Schema Structured Data
- Twitter card
- Display licence in footer
- No JS frameworks, no CSS frameworks, no jQuery

# Demo

You can preview this theme on my personal blog - [eshlox.net](https://eshlox.net) or [eshlox.pl](https://eshlox.pl).

## Table of Contents

- [Table of Contents](#table-of-contents)
- [Getting Started](#getting-started)
	- [exampleSite](#examplesite)
	- [config.toml](#configtoml)
	- [favicons](#favicons)
- [Shortcodes](#shortcodes)
	- [figure](#figure)
- [Development](#development)
- [Browsers support](#browsers-support)
- [License](#license)

## Getting Started

Run the following commands in your Hugo site directory to download the theme:

```
mkdir themes
cd themes
git clone https://github.com/eshlox/simplicity.git
```

### exampleSite

Look inside `exampleSite` directory to find out how to configure your site.

That's how the structure looks like:

```
exampleSite/
├── config.toml
├── content
│   ├── _index.md
│   ├── categories
│   │   └── _index.md
│   ├── media
│   │   ├── _index.md
│   │   ├── image-1.jpg
│   │   └── video.mp4
│   ├── photos.md
│   ├── posts
│   │   ├── 2014
│   │   │   ├── creating-a-new-theme.md
│   │   │   ├── goisforlovers.md
│   │   │   ├── hugoisforlovers.md
│   │   │   └── migrate-from-jekyll.md
│   │   ├── 2016
│   │   │   └── lorem-ipsum.md
│   │   ├── 2017
│   │   │   ├── images.md
│   │   │   └── typography.md
│   │   └── _index.md
│   ├── projects.md
│   └── tags
│       └── _index.md
└── resources
    └── _gen
        └── images
            └── media
                ├── image-1_hu3d03a01dcc18bc5be0e67db3d8d209a6_1073788_320x0_resize_q75_box.jpg
                ├── image-1_hu3d03a01dcc18bc5be0e67db3d8d209a6_1073788_480x0_resize_q75_box.jpg
                └── image-1_hu3d03a01dcc18bc5be0e67db3d8d209a6_1073788_768x0_resize_q75_box.jpg
```

Every `_index.md` file contains title, language and slug.

### config.toml

Copy `config.toml` from `exampleSite` to the root directory of your Hugo site and modify it according to your needs.

### favicons

This theme contains default favicon with `S` letter. If you want to change it, create a directory `static/assets/img` inside the root of your Hugo site and put your favicon files there. They should have names: `favicon.ico` and `apple-touch-icon.png`.

## Shortcodes

This theme includes additional shortcodes.

### Adsense

Add adsense configuration and use `{{< adsense >}}` in your post to display an ad.

### Image

Insert responsive image with title:

`{{< image src="media/image-1.jpg" title="Photo by Ales Krivec on Unsplash" >}}`

Full page width image:

`{{< image src="media/image-1.jpg" title="Photo by Ales Krivec on Unsplash" full="true">}}`

Lightbox:

`{{< image src="media/image-1.jpg" lightbox="true" >}}`

Insert image without resizing (the same image for all devices/resulotions).

`{{< image src="media/image-1.jpg" resize="false" >}}`

### Speakcer Deck

`{{< speakerdeck 50021f75cf1db900020005e7 >}}`

### Video

`{{< video src="media/video.mp4" >}}`

### Responsive Vimeo

`{{< vimeo 265143954 >}}`

### Responsive Youtube

`{{< vimeo 265143954 >}}`

## Development

This theme uses `webpack`. You can install all required libraries using [yarn](https://github.com/yarnpkg/yarn), just run `yarn install`.

When you change SCSS or Javascript files, you can compile changes using `npm run build` command.

To review your changes, you can use `npm run start` command which will run `hugo serve` with content from `exampleSite`. 

## Browsers support

Dekstop:

- Firefox (latest)
- Chrome (latest)
- Safari (latest)

Mobile:

- Firefox (latest)
- Chrome (latest)

It probably works in other browsers but it hasn't been tested yet.

## Licence

This theme is released under the MIT license. Please read the [license](https://github.com/eshlox/simplicity/blob/master/LICENSE) for more information.
