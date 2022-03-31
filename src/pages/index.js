import * as React from "react"
import Layout from "../components/Layout"
import Hero from "../components/sections/Hero"
import { graphql } from "gatsby"
import About from "../components/sections/about"

const IndexPage = ({data}) => {
  return (  
    <Layout>
      {/* <Hero content={data.config.edges[0].node} />
      <About content={data.config.edges[0].node} /> */}
    </Layout>
  )
}

export default IndexPage

export const pageQuery = graphql`
{
  config: allMarkdownRemark {
    edges {
      node {
        frontmatter {
          heading
          heroSubTitle
          heroText
          aboutTitle
        }
        rawMarkdownBody
      }
    }
  }
}
`
