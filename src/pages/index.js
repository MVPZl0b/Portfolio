import * as React from "react"
import Layout from "../components/Layout"
import Hero from "../components/sections/Hero"
//import { graphql } from "gatsby"
import About from "../components/sections/about"
import '../fonts/Orbitron-VariableFont_wght.ttf';

const IndexPage = () => {
  return (  
    <Layout>
      {/* <Hero content={data.config.edges[0].node} />
      <About content={data.config.edges[0].node} /> */}
    </Layout>
  )
}

export default IndexPage

