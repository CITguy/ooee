const eleventyNavigationPlugin = require('@11ty/eleventy-navigation')
const syntaxHighlight = require('@11ty/eleventy-plugin-syntaxhighlight')

module.exports = function (eleventyConfig) {
  //eleventyConfig.setQuietMode(false)
  //eleventyConfig.setTemplateFormats('html,liquid,ejs,md,hbs,mustache,haml,pug,njk,11ty.js')

  eleventyConfig.addPlugin(eleventyNavigationPlugin)
  eleventyConfig.addPlugin(syntaxHighlight)

  eleventyConfig.setDataDeepMerge(true);

  return {
    dir: {
      /* top-level directory/file/glob to look for templates */
      input: '.', // default: '.'

      /* relative to dir.input */
      includes: 'docs/_includes', // default '_includes'

      /* (optional) relative to dir.input */
      layouts: 'docs/_layouts', // default: dir.includes

      /* relative to dir.input */
      data: 'docs/_data', // default: '_data'

      /* where to place generated assets */
      //output: '_site', // default: '_site'
    },

    /* dir.data global data files are run through this engine before transforming into JSON */
    dataTemplateEngine: 'liquid', // default (0.x: 'liquid';  1.0: false)

    /* default template engine for markdown files */
    markdownTemplateEngine: 'liquid', // default: 'liquid'

    /* default template engine for HTML files */
    htmlTemplateEngine: 'liquid', // default: 'liquid'

    /* which types of templates should be transformed */
    //templateFormats: [ 'html', 'liquid', 'ejs', 'md', 'hbs', 'mustache', 'haml', 'pug', 'njk', '11ty.js' ],

    /* deploy to subdirectory with path prefix */
    //pathPrefix: '/', // default: '/'
  }
}
