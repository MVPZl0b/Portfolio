import React from "react";
import styled from "styled-components";
import ContentWrapper from "../../styles/contentWrapper";
import "animate.css/animate.min.css";
import { AnimationOnScroll } from "react-animation-on-scroll";

const StyledSection = styled.section`
  width: 100%;
  height: auto;
  background: #263238;
  margin-top: 4rem;
`;
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
      margin-bottom: 1.25rem;
      text-align: left;
      color: #607d8b;
    }
    .section-subtitle {
      margin-top: 0.5rem;
      text-align: left;
      color: #607d8b;
    }
    .inner-wrapper {
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
    .text-content {
      width: 100%;
      max-width: 43.25rem;
      color: #607d8b;
      box-shadow: 0 1px 6px rgba(0, 0, 0, 0.12), 0 1px 4px rgba(0, 0, 0, 0.24);
      transition: all 0.3s ease-out;
      &:hover {
        transform: translate3d(0px, -0.155rem, 0px);
      }
    }
  }
`;

const about = ({ content }) => {
  const { frontmatter, rawMarkdownBody } = content;

  return (
    <StyledSection>
      <AnimationOnScroll animateIn="animate__pulse">
        <StyledContentWrapper>
          <div className="inner-wrapper">
            <h1 className="section-title">{frontmatter.aboutTitle}</h1>
            <div className="text-content">{rawMarkdownBody}</div>
          </div>
        </StyledContentWrapper>
      </AnimationOnScroll>
    </StyledSection>
  );
};

export default about;
