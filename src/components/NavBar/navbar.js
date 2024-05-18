import React from "react";
import './navbar.css';
import logo from '../../assets/developer-white-logo.svg';
import { Link } from 'react-scroll';
import contactImg from '../../assets/message-notification-black.svg'

const Navbar = () => {
  return (
    <nav className="navbar">
      <img src={logo} alt="logo" className="logo" />
      <div className="desktopMenu">
        <Link className="desktopMenuItem">Home</Link>
        <Link className="desktopMenuItem">About</Link>
        <Link className="desktopMenuItem">Portfolio</Link>
        <Link className="desktopMenuItem">Clients</Link>
      </div>
      <button className="desktopMenuButton">
        <img className="desktopMenuImg" src={contactImg} alt="" />
        Contact Me
      </button>
    </nav>
  )
}

export default Navbar