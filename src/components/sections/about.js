import React from 'react'
import styled from "styled-components"
import { StaticImage } from 'gatsby-plugin-image'
import ContentWrapper from '../../styles/contentWrapper'

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
      width: 100%;
      max-width: 43.25rem;
      color: #607D8B;
      box-shadow: 0 1px 6px rgba(0, 0, 0, 0.12), 0 1px 4px rgba(0, 0, 0, 0.24);
      transition: all 0.3s ease-out;
        &:hover {
          transform: translate3d(0px, -0.155rem, 0px);
        }
    }
  }
`

const about = ({content}) => {
    const { frontmatter, rawMarkdownBody } = content;

  return (
    <StyledSection>
        <StyledContentWrapper>
            <div className='section-title'>{frontmatter.aboutTitle}</div>
            <div className="text-content">{rawMarkdownBody}</div>
        </StyledContentWrapper>
    </StyledSection>
  )
}

export default about