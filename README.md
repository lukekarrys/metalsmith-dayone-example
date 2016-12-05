# metalsmith-dayone-example

An example Metalsmith site built from Day One data.


## Demo

There is a prebuilt demo in the [`gh-pages`](../../tree/gh-pages) branch or check out the [deployed version](http://metalsmith-dayone.lukecod.es).


## Features

- Paginated entries pages
- Paginated entries by tag pages
- Tags list page
- Custom domain
- Deploy to GitHub pages
- `pug` templates


## Usage

This is mostly a collection of Metalsmith plugins that produces a site with all the features I'd want to publish a [Day One](http://dayoneapp.com/) journal. I tried to comment everything that's going on in the [`index.js`](./index.js) file, so it'd be at least semi-understandable.

This is just an example, so there's no way to use it directly in your Metalsmith site, but all the Day One data parsing is in the plugin [`metalsmith-dayone`](https://github.com/lukekarrys/metalsmith-dayone) if you wanted to do something different with the data.

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
