# metalsmith-dayone-example

An example Metalsmith site built from Day One data.


## Demo

There is a prebuilt demo in the [`gh-pages`]() branch or check out the [deployed version]().


## Usage

This repo is just an example of how to create a Metalsmith static site from your own Day One data. There is a `.zip` file in the repo already with a sample Day One export that is used.

But if you wanted to, you could export your own data and use it in this example to see how it worked.

```sh
# Export your Day One data as JSON to a .zip file
git clone git@github.com:lukekarrys/metalsmith-dayone-example.git
cd metalsmith-dayone-example
npm install
npm run build -- --data your-dayone.zip
npm run preview
```
