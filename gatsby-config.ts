import type { GatsbyConfig } from 'gatsby'

const config: GatsbyConfig = {
  siteMetadata: {
    title: '今集亭',
    description: 'jin‘s website.',
    author: 'jin',
  },
  plugins: [
    'gatsby-plugin-pnpm', // pnpm 下 webpack 不会正常打包
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-plugin-alias-imports',
      options: {
        alias: {
          '@': 'src',
        },
        extensions: ['tsx', 'ts'],
      },
    },
  ],
}

export default config
