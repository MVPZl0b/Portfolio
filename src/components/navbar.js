import React, { useEffect, useState } from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { FaBars, FaTimes } from 'react-icons/fa'
import Button from "./Button"
import "../styles/Navbar.css"
import { IconContext } from "react-icons/lib"



const Navbar = () => {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  }

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <IconContext.Provider value={{ color: "#fff" }}>
      <div className="navbar">
        <div className="navbar-container container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            {"<Portfolio>"}</Link>
          <div className="menu-icon" onClick={handleClick}>{click ? <FaTimes /> : <FaBars />}</div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>About</Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>Projects</Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>More</Link>
            </li>
            <li className="nav-btn">
              {button ? (
                <Link to="/" className="btn-link"><Button buttonStyle="btn--outline">Resume</Button></Link>
              ) : (
                <Link to="/" className="btn-link" onClick={closeMobileMenu}><Button buttonStyle="btn--outline" buttonColor="mobile">Resume</Button></Link>
              )}
            </li>
          </ul>
        </div>
      </div>
    </IconContext.Provider>
  )
}

export default Navbar



/* 
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
  } */
