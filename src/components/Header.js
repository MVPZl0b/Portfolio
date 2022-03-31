import React from 'react'
import styled from 'styled-components'
import Navbar from "./navbar"
import ContentWrapper from "../styles/contentWrapper"

const StyledContentWrapper = styled(ContentWrapper)`
  && {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
  }
`

const StyledHeader2 = styled.header`
  width: 100%;
  height: "6.25rem";
  background: #263238;
`
/* const StyledHeader = styled.h2`
    height: 6.25rem;
    margin: 0 auto;
    padding: 0 2.5rem;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 500;
    font-size: 36px;
    line-height: 24px;
    display: flex;
    align-items: center;
    text-align: center;
` */
const StyledLogo = styled.div`
  font-size: 2rem;
  font-weight: 900;
  color: #B0BEC5;
`


const Header = () => {
  return (
    <Navbar />
  )
}
export default Header