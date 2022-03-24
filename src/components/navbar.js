import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

import { navLinks } from "../config/config.js"
// Navbar created by konstantin.digital.

const StyledNav = styled.nav`
  display: none;
  @media (min-width: 1200px) {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin: 0 auto;
    width: 31.25rem;
    background: #263238;
    a {
      color: #009688;
    }
  }
  .nav-link {
    font-size: 1rem;
    font-weight: 700;
    text-align: center;
    position: relative;
    padding: 0 2.5rem;
    &::before {
      transition: 200ms ease-out;
      height: 0.1563rem;
      content: "";
      position: absolute;
      background-color: #263238;
      width: 0%;
      bottom: -0.125rem;
    }
    &:hover::before {
      width: 100%;
    }
  }
  .cta-btn {
    width: auto;
    height: auto;
    font-weight: 700;
    border-radius: 1rem;
    border: 0.125rem solid #009688;
    background: #263238;
    transition: 20ms ease-out;
    font-size: 1rem;
    padding: 0.5rem 1.5rem;
    margin: 0;
    &:hover {
      background: #009688;
      color: #263238;
    }
  }
`

const Navbar = () => {
  const { menu, button } = navLinks
  return (
    <StyledNav>
      {menu.map(({ name, url }, key) => {
        return (
          <Link className="nav-link" key={key} to={url}>
            {name}
          </Link>
        )
      })}
      {button.useFileName ? (
        <a
          className="cta-btn"
          href={`/${button.fileName}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          {button.name}
        </a>
      ) : (
        <Link className="cta-btn" to={button.url}>
          {button.name}
        </Link>
      )}
    </StyledNav>
  )
}

export default Navbar
