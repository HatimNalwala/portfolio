

import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from '../assets/img/logo.png';
import logo3 from '../assets/img/logo3.png';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.png';
import { HashLink } from 'react-router-hash-link';
import {
  BrowserRouter as Router
} from "react-router-dom";

export const NavBar = () => {

  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  return (
    <Router>
      <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
        <Container>
          <Navbar.Brand href="/">
            <img src={logo} alt="Logo" /> 
            <p className="white">Sustainable product at affordable prices </p>
          </Navbar.Brand>
          <span> <h1>Earthly</h1></span>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
              <Nav.Link href="#shops" className={activeLink === 'shops' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('shops')}>Shop</Nav.Link>
               
            </Nav>
            <span className="navbar-text">
              <div className="social-icon">
                <a href="https://www.linkedin.com/in/hatim-nalwala-52b90721b/"><img src={navIcon1} alt="" /></a>
                <a href="https://github.com/HatimNalwala"><img src={navIcon3} alt="" /></a>
                <a href="https://www.instagram.com/hatim_2204/"><img src={navIcon2} alt="" /></a>
              </div>
              <HashLink to='#connect'>
                <button className="vvd"><span>Let’s Connect</span></button>
              </HashLink>
            </span> 
            <Navbar.Brand className="pal" href="/">
              <img src={logo3} alt="Logo" /> 
            </Navbar.Brand>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Router>
  )
}
