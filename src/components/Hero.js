import React from 'react'
import styled from "styled-components"
import { StaticImage } from 'gatsby-plugin-image'

const StyledSection = styled.section`
  * {

  }
  .title {
    margin: 0 auto;
    margin-top: 150px;
    font-family: "roboto";
    text-align: left;
    color: #607D8B;
  }
  .subtitle {
    margin-top: 0;
    text-align: left;
    color: #607D8B;
  }
  .description {
    text-align: left;
    color: #607D8B;
  }
`

const Hero = ({ content }) => {

  const imageStyle = {
    width: "140px",
    height: "140px",
    borderRadius: "50%",
    align: "right"

  };

  const { frontmatter, rawMarkdownBody } = content
  return (
    <StyledSection id="hero">
      <h1 className="title">
        {frontmatter.greetings}{" "}
        <br />
        {frontmatter.title}
      </h1>
      <h2 className="subtitle">
        {frontmatter.subtitlePrefix}{" "}
      </h2>
      <div className="description">{rawMarkdownBody}</div>
      <StaticImage 
      src="../images/portfolio.jpg" 
      alt="Headshot" 
      style={imageStyle}/>
    </StyledSection>
  )
}

export default Hero