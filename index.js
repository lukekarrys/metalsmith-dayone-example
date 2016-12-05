const mkdirp = require('mkdirp')
const rimraf = require('rimraf')
const Metalsmith = require('metalsmith')
const debug = require('metalsmith-debug')
const layouts = require('metalsmith-layouts')
const collections = require('metalsmith-collections')
const permalinks = require('metalsmith-permalinks')
const tags = require('metalsmith-tags')
const pagination = require('metalsmith-pagination')
const copy = require('metalsmith-copy')
const dayone = require('metalsmith-dayone')

const { prefix: PREFIX, data: DATA } = require('minimist')(process.argv.slice(2), {
  default: {
    data: 'Metalsmith_Example.zip',
    prefix: '/'
  }
})

const SRC = `${__dirname}/src`
const ENTRIES = 'entries'
const SORT_BY = 'date'
const PER_PAGE = 10
const REVERSE = true

// Metalsmith needs a source directory to not throw an error but all the site
// data will be built from the Day One zip file. So just create an empty directory
// which will be removed after the build
mkdirp.sync(SRC)

// Normal metalsmith setup
Metalsmith(__dirname)
  .source(SRC)
  .destination('./build')
  .clean(true)

  // Add some site wide metadata
  .metadata({
    sitetitle: 'Day One Blog',
    urlPrefix: `${PREFIX.startsWith('/') ? '' : '/'}${PREFIX}${PREFIX.endsWith('/') ? '' : '/'}`
  })

  // Parse Day One data and specify layout & path for each entry
  .use(dayone({
    data: DATA,
    layout: 'entry.pug',
    path: `${ENTRIES}/:id.html`
  }))

  // Create paginated tag pages
  .use(tags({
    handle: 'tags',
    layout: 'tag.pug',
    path: 'tags/:tag.html',
    pathPage: 'tags/:tag/:num.html',
    perPage: PER_PAGE,
    sortBy: SORT_BY,
    reverse: REVERSE
  }))

  // As well as a tags list page
  .use((files) => Object.assign(files, {
    'tags.html': { layout: 'tags.pug', contents: '' }
  }))

  // Create entries collection for the index page
  .use(collections({
    [ENTRIES]: {
      pattern: `${ENTRIES}/*.html`,
      sortBy: SORT_BY,
      reverse: REVERSE
    }
  }))

  // Paginate entries collection and output the first page as the index
  .use(pagination({
    [`collections.${ENTRIES}`]: {
      layout: 'entries.pug',
      path: `${ENTRIES}/:num.html`,
      first: 'index.html',
      noPageOne: true,
      perPage: PER_PAGE
    }
  }))

  // Copy the main index to entries/index since that would be a logical url
  .use(copy({
    pattern: 'index.html',
    directory: 'entries'
  }))

  // Move all path.html to path/index.html for better linking
  .use(permalinks())

  // Finally use pug as the templating engine for all the layouts
  .use(layouts({
    engine: 'pug',
    directory: 'layouts'
  }))

  // Add debug plugin since stuff always goes wrong
  .use(debug())

  // Build site and remove source directory
  .build(() => rimraf.sync(SRC))
