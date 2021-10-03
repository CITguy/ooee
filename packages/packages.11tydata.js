module.exports = {
  layout: 'docs.njk',
  eleventyComputed: {
    eleventyNavigation: {
      parent: (data) => 'Packages',
      key: ({ eleventyNavigation }) => eleventyNavigation.key,
    }
  },
}
