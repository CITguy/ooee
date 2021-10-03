const path = require('path')

module.exports = function () {
  return {
    layout: 'docs.njk',
    eleventyComputed: {
      permalink: ({ page }) => {
        // initialize as filePathStem without leading '/docs'
        let result = page.filePathStem.replace(/^\/docs/, '')

        // avoid generating 'index/' directories
        // (we want 'index.html', not 'index/index.html')
        if (/index$/.test(result)) {
          result = path.dirname(result)
        }

        return `${result}/` 
      }
    }
  }
}
