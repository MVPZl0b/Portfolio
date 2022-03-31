import React, { useState } from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { MdFingerprint } from 'react-icons/md'
import { FaBars, FaTimes } from 'react-icons/fa'
import Button from "./Button"
import "../styles/Navbar.css"



const Navbar = () => {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click)
  const closeMobileMenu = () => setButton(false)

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  }

  window.addEventListener('resize', showButton);

  return (
    <div className="navbar">
      <div className="navbar-container container">
        <Link to="/" className="navbar-logo">
          <MdFingerprint className='navbar-icon' />
          {"<Portfolio>"}</Link>
        <div className="menu-icon" onClick={handleClick}>{click ? <FaTimes /> : <FaBars />}</div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className="nav-item">
            <Link to="/" className="nav-links">About</Link>
          </li>
          <li className="nav-item">
            <Link to="/" className="nav-links">Projects</Link>
          </li>
          <li className="nav-item">
            <Link to="/" className="nav-links">More</Link>
          </li>
          <li className="nav-btn">
            {button ? (
              <Link to="/" className="btn-link"><Button buttonStyle="btn--mobile">Resume</Button></Link>
            ) : (
              <Link to="/" className="btn-link"><Button buttonStyle="btn--mobile">Resume</Button></Link>
            )}
          </li>
        </ul>
      </div>
    </div>
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
