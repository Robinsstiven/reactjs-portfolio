import React, { useState } from "react";
import './navbar.css';
import logo from '../../assets/developer-white-logo.svg';
import { Link } from 'react-scroll';
import contactImg from '../../assets/message-notification-black.svg';
import menu from '../../assets/burger-menu-right-svgrepo-com.svg';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <nav className="navbar">
      <img src={logo} alt="logo" className="logo" />
      <div className="desktopMenu">
        <Link activeClass="active" to="hero" spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuItem">Home</Link>
        <Link activeClass="active" to="skills" spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuItem">About</Link>
        <Link activeClass="active" to="portfolio" spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuItem">Portfolio</Link>
        <Link activeClass="active" to="contact-section" spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuItem">Clients</Link>
      </div>
      <button className="desktopMenuButton" onClick={() => {
        document.getElementById('contact-section').scrollIntoView({behavior: 'smooth'});
      }}>
        <img className="desktopMenuImg" src={contactImg} alt="" />
        Contact Me
      </button>

      <img src={menu} alt="Menu" className="mobile-menu" onClick={() => setShowMenu(!showMenu)} />
      <div className="mobile-nav" style={{display: showMenu? 'flex' : 'none'}}>
        <Link activeClass="active" to="hero" spy={true} smooth={true} offset={-100} duration={500} className="mobile-item" onClick={() => setShowMenu(false)}>Home</Link>
        <Link activeClass="active" to="skills" spy={true} smooth={true} offset={-100} duration={500} className="mobile-item" onClick={() => setShowMenu(false)}>About</Link>
        <Link activeClass="active" to="portfolio" spy={true} smooth={true} offset={-100} duration={500} className="mobile-item" onClick={() => setShowMenu(false)}>Portfolio</Link>
        <Link activeClass="active" to="contact-page" spy={true} smooth={true} offset={-100} duration={500} className="mobile-item" onClick={() => setShowMenu(false)}>Clients</Link>
        <Link activeClass="active" to="contact-section" spy={true} smooth={true} offset={-100} duration={500} className="mobile-item" onClick={() => setShowMenu(false)}>Contact</Link>
      </div>
    </nav>
  );
}

export default Navbar