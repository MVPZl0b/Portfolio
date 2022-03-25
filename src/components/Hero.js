import React from 'react'
import styled from "styled-components"
import { StaticImage } from 'gatsby-plugin-image'
import ContentWrapper from '../styles/contentWrapper'

const StyledSection = styled.section`
  width: 100%;
  height: auto;
  background: #263238;
  margin-top: 4rem;
`
const StyledContentWrapper = styled(ContentWrapper)`
  && {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    @media (min-width: 786px) {
      flex-direction: row;
      justify-content: space-between;
    } 
    .section-title {
      margin-bottom: 0.5rem;
      text-align: center;
      color: #607D8B;
    }
    .section-subtitle {
      margin-top: 0.5rem;
      text-align: center;
      color: #607D8B;
    }
    .inner-wrapper {
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
    .text-content {
      margin-left: 1.75rem;
      text-align: center;
      width: 100%;
      max-width: 31.25rem;
      color: #607D8B;
    }
    .image {
      width: 100%;
      max-width: 18rem;
      margin-top: 4rem;
      margin-left: 0;
      @media (min-width: 786px) {
        margin-left: 2rem;
      }
      border-radius: 50%;
      box-shadow: 0 0 2.5rem rgba(0, 0, 0, 0.16);
      filter: grayscale(20%) contrast(1) brightness(90%);
      transition: all 0.3s ease-out;
      &:hover {
        filter: grayscale(50%) contrast(1) brightness(90%);
        transform: translate3d(0px, -0.155rem, 0px);
        box-shadow: 0 0 2.5rem rgba(0, 0, 0, 0.32);
      }
    }
  }
`

const Hero = ({ content }) => {

  const { frontmatter, rawMarkdownBody } = content
  return (
    <StyledSection>
      <StyledContentWrapper>
        <div className='inner-wrapper'>
          <h1 className="section-title">{frontmatter.title}</h1>
          <h2 className="section-subtitle">{frontmatter.subtitlePrefix}</h2>
          <div className="text-content">{rawMarkdownBody}</div>
        </div>
        <StaticImage
          src="../images/portfolio.jpg"
          alt="Headshot"
          className='image' />
      </StyledContentWrapper>
    </StyledSection>
  )
}

export default Hero