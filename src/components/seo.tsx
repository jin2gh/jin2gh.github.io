import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

export type SeoProps = {
  description?: string
  title?: string
  children?: React.ReactNode
}

const Seo = ({ description, children, title }: SeoProps) => {
  const useSiteMetadata = () => {
    const { site } = useStaticQuery(graphql`
      query {
        site {
          siteMetadata {
            author
            title
            description
          }
        }
      }
    `)

    return site.siteMetadata || {}
  }
  const {
    author,
    description: defaultDescription,
    title: defaultTitle,
  } = useSiteMetadata()

  return (
    <>
      <title>{title || defaultTitle}</title>
      <meta name="author" content={author} />
      <meta name="description" content={description || defaultDescription} />
      {/* <meta name="image" content={image} /> */}
      {children}
    </>
  )
}

export default Seo
