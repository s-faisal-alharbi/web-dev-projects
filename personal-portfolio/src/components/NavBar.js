import React,{ useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from '../assets/img/logo.jpg';
import LanguageSelector from '../assets/components/LanguageSelector';
import {BrowserRouter as Router} from "react-router-dom";
import { useTranslation } from 'react-i18next';
import Toggle from 'react-toggle'
import "react-toggle/style.css"


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
            <Nav className={t("nav_class1")}>
              <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>{t('Home')}</Nav.Link>
              <Nav.Link href="#hotels" className={activeLink === 'hotels' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('hotels')}>{t('Hotels')}</Nav.Link>

            </Nav>
            <Nav className={t("nav_class2")}>
            <span className="navbar-text">
            {/* <Nav.Link href="#Hotels" className={activeLink === 'hotels' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('hotels')}>{t('Hotels')}</Nav.Link>    */}
            <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>{t('Projects')}</Nav.Link>

              <div className="switch">
              <LanguageSelector />
              </div>
            </span>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Router>
    
   
  );
}
