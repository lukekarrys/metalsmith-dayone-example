# metalsmith-dayone-example

An example Metalsmith site built from Day One data.

[ ![Codeship Status for lukekarrys/metalsmith-dayone-example](https://codeship.com/projects/15339330-9da2-0134-14f0-1a706822621a/status?branch=master)](https://codeship.com/projects/188701)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)
[![Greenkeeper badge](https://badges.greenkeeper.io/lukekarrys/metalsmith-dayone-example.svg)](https://greenkeeper.io/)


## Demo

You can check out the [deployed version](https://metalsmith-dayone.lukecod.es) or the built source in the [`gh-pages` branch](../../tree/gh-pages).


## Features

- Paginated entries pages
- Paginated entries by tag pages
- Tags list page
- Custom domain
- Deploy to GitHub pages
- `pug` template layouts


## Usage

This is mostly a collection of Metalsmith plugins that produces a site with all the features I'd want to publish a [Day One](http://dayoneapp.com/) journal as a blog. I tried to comment everything that's going on in the [`index.js`](./index.js) file, so it'd be at least semi-understandable.

This is just an example, so there's no way to use it directly in your Metalsmith site, but all the Day One data parsing is in the plugin [`metalsmith-dayone`](https://github.com/lukekarrys/metalsmith-dayone) if you wanted to do your own thing with the data.

### Use your own data

It is possible to have this example use your own Day One data, if you wanted to see how that would look:

```sh
# Export your own Day One data as JSON to your-dayone.zip
git clone git@github.com:lukekarrys/metalsmith-dayone-example.git
cd metalsmith-dayone-example
npm install
npm run build -- --data your-dayone.zip 
npm run preview
```


## LICENSE

MIT
