import React from 'react'
import styled from 'styled-components'


const StyledFooter = styled.footer`
  width: 100%;
  max-width: 62.5rem;
  height: 6.25rem;
  margin: 0 auto;
  padding: 0 2.5rem;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`

const StyledLogo = styled.div`
  font-size: 2rem;
  font-weight: 900;
  color: #B0BEC5;
`


const Footer = () => {
  return (
    <StyledFooter>
        <StyledLogo>{"</Portfolio>"}</StyledLogo>
    </StyledFooter>
  )
}

export default Footer