import React, { useState } from "react";
import { AtalLogo1 } from "../../../assets/images/index";
// import { IoIosSearch } from "../../../assets/logos/index";
import "./Header.css";
import useOurProgram from "../../hooks/useOurProgram";

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const { data, isLoading, isError } = useOurProgram();
  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>Error: {isError}</p>;
  }
  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm px-lg-5 py-lg-2">
      <div className="container-fluid">
        <button
          className="navbar-toggler border-0"
          type="button"
          onClick={toggleNav}
          aria-controls="navbarNav"
          aria-expanded={isNavOpen ? "true" : "false"}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="d-flex justify-content-center mx-auto">
          <a
            className="navbar-brand fw-bold text-primary d-flex align-items-center"
            href="/"
          >
            <img
              loading="lazy"
              src={AtalLogo1}
              alt="Atal Logo"
              className="atal-logo-header me-2"
              height="90"
            />
          </a>
        </div>
        <div
          className={`collapse navbar-collapse ${isNavOpen ? "show" : ""}`}
          id="navbarNav"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/about">
                About
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="/"
                id="navbarDropdownPrograms"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Our Programmes
              </a>
              <ul
                className="dropdown-menu custom-dropdown-menu"
                aria-labelledby="navbarDropdownPrograms"
              >
                {data.map((opCategory) => (
                  <li key={opCategory._id}>
                    <a
                      className="dropdown-item custom-dropdown-item"
                      href={`/${opCategory.category}`}
                    >
                      {opCategory.category}
                    </a>
                  </li>
                ))}

                {/* <li><a className="dropdown-item custom-dropdown-item" href="/OpEducation">Education</a></li>
                <li><a className="dropdown-item custom-dropdown-item" href="/OpHealthcare">Healthcare</a></li>
                <li><a className="dropdown-item custom-dropdown-item" href="/OpLivelihood">Livelihood</a></li>
                <li><a className="dropdown-item custom-dropdown-item" href="/OpGirlChild">Girl Child & Women Empowerment</a></li>
                <li><a className="dropdown-item custom-dropdown-item" href="/OpPrivileged">Privileged Children</a></li>
                <li><a className="dropdown-item custom-dropdown-item" href="/OpCivicDriven">Civic Driven Change</a></li>
                <li><a className="dropdown-item custom-dropdown-item" href="/OpSocial">Social Entrepreneurship</a></li>
                <li><a className="dropdown-item custom-dropdown-item" href="/OpSpecialSupport">Special Support Programme</a></li>
                <li><a className="dropdown-item custom-dropdown-item" href="/OpSpecialInterventions">Special Interventions</a></li> */}
              </ul>
            </li>

            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="/"
                id="navbarDropdownInvolved"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Get Involved
              </a>
              <ul
                className="dropdown-menu custom-dropdown-menu"
                aria-labelledby="navbarDropdownInvolved"
              >
                <li>
                  <a
                    className="dropdown-item custom-dropdown-item"
                    href="/registration"
                  >
                    Registration
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item custom-dropdown-item"
                    href="/members"
                  >
                    Members
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item custom-dropdown-item"
                    href="/supportspeaks"
                  >
                    Support Speaks
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/gallery">
                Gallery
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/message">
                Message
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/events">
                Events
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/contacts">
                Contacts
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
