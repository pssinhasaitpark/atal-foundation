import React, { useState } from "react";
import { AtalLogo1 } from "../../../assets/images/index";
import { IoIosSearch } from "../../../assets/logos/index"
import "./Header.css"
const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm px-lg-5 py-lg-2">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleNav}
          aria-controls="navbarNav"
          aria-expanded={isNavOpen ? 'true' : 'false'}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <a className="navbar-brand fw-bold text-primary fs-3 d-flex align-items-center" href="/">
          <img src={AtalLogo1} alt="Atal Logo" className="me-2" height="70" />
        </a>
        <div className={`collapse navbar-collapse ${isNavOpen ? 'show' : ''}`} id="navbarNav">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <a className="nav-link" href="#home">Home</a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="/" id="navbarDropdownAbout" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                About
              </a>
              <ul className="dropdown-menu custom-dropdown-menu" aria-labelledby="navbarDropdownAbout">
                <li><a className="dropdown-item custom-dropdown-item" href="#our-soul">Our Soul</a></li>
                <li><a className="dropdown-item custom-dropdown-item" href="#our-presence">Our Presence</a></li>
                <li><a className="dropdown-item custom-dropdown-item" href="#people-behind">People Behind</a></li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="/" id="navbarDropdownPrograms" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Our Programmes
              </a>
              <ul className="dropdown-menu custom-dropdown-menu" aria-labelledby="navbarDropdownPrograms">
                <li><a className="dropdown-item custom-dropdown-item" href="#our-programs">Our Programs</a></li>
                <li><a className="dropdown-item custom-dropdown-item" href="#education">Education</a></li>
                <li><a className="dropdown-item custom-dropdown-item" href="#healthcare">Healthcare</a></li>
                <li><a className="dropdown-item custom-dropdown-item" href="#livelihood">Livelihood</a></li>
                <li><a className="dropdown-item custom-dropdown-item" href="#empowerment">Girl Child & Women Empowerment</a></li>
                <li><a className="dropdown-item custom-dropdown-item" href="#children">Privileged Children</a></li>
                <li><a className="dropdown-item custom-dropdown-item" href="#civic-change">Civic Driven Change</a></li>
                <li><a className="dropdown-item custom-dropdown-item" href="#entrepreneurship">Social Entrepreneurship</a></li>
                <li><a className="dropdown-item custom-dropdown-item" href="#support-programme">Social Support Programme</a></li>
                <li><a className="dropdown-item custom-dropdown-item" href="#special-interaction">Special Interaction</a></li>
              </ul>
            </li>

            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="/" id="navbarDropdownInvolved" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Get Involved
              </a>
              <ul className="dropdown-menu custom-dropdown-menu" aria-labelledby="navbarDropdownInvolved">
                <li><a className="dropdown-item custom-dropdown-item" href="#registration">Registration</a></li>
                <li><a className="dropdown-item custom-dropdown-item" href="#members">Members</a></li>
                <li><a className="dropdown-item custom-dropdown-item" href="#support">Support Speaks</a></li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#gallery">Gallery</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#message">Message</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#events">Events</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contacts">Contacts</a>
            </li>
          </ul>
          <form className="d-flex border ms-auto">
            <div className="input-group">
              <input type="search" className="form-control border-0 outline-0 bg-transparent" placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
              <button className="input-group-text bg-transparent border-0" id="search-addon">
                <IoIosSearch className="fs-4" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Header;
