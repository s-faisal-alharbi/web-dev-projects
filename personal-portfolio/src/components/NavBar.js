import React,{ useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from '../assets/img/logo.jpg';
// import underline from '../assets/img/nabBottomBar.svg'
// import navIcon1 from '../assets/img/nav-icon1.svg';
// import navIcon2 from '../assets/img/nav-icon2.svg';
// import navIcon3 from '../assets/img/nav-icon3.svg';
// import { HashLink } from 'react-router-hash-link';
import {BrowserRouter as Router} from "react-router-dom";
import { useTranslation } from 'react-i18next';
import i18n from '../assets/i18n';
import i18next from "i18next";

const LanguageSelector = () => {
    
  const [selectedLanguage, setSelectedLanguage] = useState(i18n.language); // i18n.language contains the language assigned to lng in i18n.js file.

  const chooseLanguage = (e) => {
      e.preventDefault();
      i18n.changeLanguage(e.target.value);   // i18n.changeLanguage() is used to change the language assigned to lng in i18n.js file.
      setSelectedLanguage(e.target.value);
      localStorage.setItem("lang", e.target.value);
  }

  return (
      
      <select defaultValue={selectedLanguage} onChange={chooseLanguage}>  
          <option value="ar">عربي</option>
          <option value="en">English</option>
      </select>
  );
};
export const NavBar = () => {
  const { t } = useTranslation()
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
            <img src={logo} alt="Logo" className="mx-auto" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>{t('Home')}</Nav.Link>
              <Nav.Link href="#hotels" className={activeLink === 'hotels' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('hotels')}>{t('Hotels')}</Nav.Link>
              
            </Nav>
            <Nav className="ms-auto"> 
            <span className="navbar-text">
            <Nav.Link href="#Hotels" className={activeLink === 'hotels' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('hotels')}>{t('Hotels')}</Nav.Link>   
            <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>{t('Projects')}</Nav.Link>
              {/* <div className="social-icon">
                <a href="#"><img src={navIcon1} alt="" /></a>
                <a href="#"><img src={navIcon2} alt="" /></a>
                <a href="#"><img src={navIcon3} alt="" /></a>
              </div> */}
              {/* <HashLink to='#connect'>
                <button className="vvd"><span>Let’s Connect</span></button>
              </HashLink> */}
              {/* <label className="switch" onClick => {()=>i18next.changeLanguage(lng_code)} >
                <input type="checkbox"/>
                <span className="slider"/>
              </label> */}
            </span>
            </Nav>
          </Navbar.Collapse>
        </Container>

      </Navbar>
      
    </Router>
  )
}
