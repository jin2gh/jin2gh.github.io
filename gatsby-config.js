module.exports = {
  siteMetadata: {
    title: '今集亭',
    description: 'jin‘s website.',
    author: 'JINJITING',
  },
  plugins: [
    'gatsby-plugin-pnpm', // pnpm 下 webpack 不会正常打包
    'gatsby-plugin-sass',
  ],
}
