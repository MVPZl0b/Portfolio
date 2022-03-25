import * as React from "react"

import Layout from "../components/Layout"
import Hero from "../components/Hero"
import { graphql } from "gatsby"

const IndexPage = ({data}) => {
  return (
    <Layout>
      <Hero content={data.hero.edges[0].node} />
    </Layout>
  )
}

export default IndexPage

export const pageQuery = graphql`
{
  hero: allMarkdownRemark {
    edges {
      node {
        frontmatter {
          title
          subtitlePrefix
        }
        rawMarkdownBody
      }
    }
  }
}
`
