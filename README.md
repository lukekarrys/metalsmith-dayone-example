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

This is just an example, there's no way to use it directly in your Metalsmith site. But I tried to comment everything that's going on in the [`index.js`](./index.js) file.

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
