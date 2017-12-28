# Simplicity

Very simple, clean and readable (I think so) Hugo theme.

- Responsive design
- Clean typography
- Google Analytics
- Lightbox
- Disqus
- OpenGraph support
- Schema Structured Data
- Twitter card
- Creative commons licence icon in footer (optional)
- HTML5 grid
- No JS frameworks, no CSS frameworks, no jQuery

# Demo

You can preview this theme on my personal blog - [eshlox.net](https://eshlox.net).

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
│   ├── categories
│   │   └── _index.md
│   ├── _index.md
│   ├── posts
│   │   ├── 2016
│   │   │   └── lorem-ipsum.md
│   │   ├── 2017
│   │   │   ├── images.md
│   │   │   └── typography.md
│   │   └── _index.md
│   └── tags
│       └── _index.md
├── public
└── static
    └── images
        └── image-1.jpg
```

Every `_index.md` file contains title, language and slug.

### config.toml

Copy `config.toml` from `exampleSite` to the root directory of your Hugo site and modify it according to your needs.

### favicons

This theme contains default favicon with `S` letter. If you want to change it, create a directory `static/assets/img` inside the root of your Hugo site and put your favicon files there. They shoud have names: `favicon.ico` and `apple-touch-icon.png`.

## Shortcodes

This theme includes additional shortcodes.

### figure

Use [figure](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/figure) to embed an image.

```
{{< figure src="/images/image-1.jpg" title="Photo" >}}
```

You can also use lightbox plugin to display image in full-screen mode ([baguetteBox.js](https://github.com/feimosi/baguetteBox.js)).

```
{{< figure src="/images/image-1.jpg" title="Photo" lightbox="true" >}}
```

## Development

This theme uses `webpack`. You can install all required libraries using [yarn](https://github.com/yarnpkg/yarn), just run `yarn install`.

When you change SCSS or Javascript files, you can compile changes using `npm run build` command.

To review your changes, you can use `npm run start` command which will run `hugo serve` with content from `exampleSite`. 

## Browsers support

Theme uses [HTML5 grid](https://caniuse.com/#feat=css-grid).

Dekstop:

- Firefox (latest)
- Chrome (latest)

Mobile:

- Firefox (latest)
- Chrome (latest)

It probably works in other browsers but it hasn't been tested yet.

## Licence

This theme is released under the MIT license. Please read the [license](https://github.com/eshlox/simplicity/blob/master/LICENSE) for more information.
