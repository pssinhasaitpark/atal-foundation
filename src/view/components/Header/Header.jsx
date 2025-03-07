import React, { useState } from "react";
import { AtalLogo1 } from "../../../assets/images/index";
// import { IoIosSearch } from "../../../assets/logos/index";
import "./Header.css";
import useOurProgram from "../../hooks/useOurProgram";
import { Link } from "react-router";
const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const { data, isLoading, isError } = useOurProgram();
  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm top-border">
      <div className="container">
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
          <Link
            className="navbar-brand fw-bold text-primary d-flex align-items-center"
            to="/"
          >
            <img
              loading="lazy"
              src={AtalLogo1}
              alt="Atal Logo"
              className="atal-logo-header me-2"
              height="90"
            />
          </Link>
        </div>
        <div
          className={`collapse navbar-collapse ${isNavOpen ? "show" : ""}`}
          id="navbarNav"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>
            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                to="/"
                id="navbarDropdownPrograms"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Our Programmes
              </Link>
              <ul
                className="dropdown-menu custom-dropdown-menu"
                aria-labelledby="navbarDropdownPrograms"
              >
                {isError ? (
                  <p>Error: {isError}</p>
                ) : isLoading ? (
                  <p>Loading...</p>
                ) : (
                  data?.map((opCategory) => (
                    <li key={opCategory._id}>
                      <Link
                        className="dropdown-item custom-dropdown-item"
                        to={`/${opCategory.category}`}
                      >
                        {opCategory.category}
                      </Link>
                    </li>
                  ))
                )}

                {/* <li><Link className="dropdown-item custom-dropdown-item" to="/OpEducation">Education</Link></li>
                <li><Link className="dropdown-item custom-dropdown-item" to="/OpHealthcare">Healthcare</Link></li>
                <li><Link className="dropdown-item custom-dropdown-item" to="/OpLivelihood">Livelihood</Link></li>
                <li><Link className="dropdown-item custom-dropdown-item" to="/OpGirlChild">Girl Child & Women Empowerment</Link></li>
                <li><Link className="dropdown-item custom-dropdown-item" to="/OpPrivileged">Privileged Children</Link></li>
                <li><Link className="dropdown-item custom-dropdown-item" to="/OpCivicDriven">Civic Driven Change</Link></li>
                <li><Link className="dropdown-item custom-dropdown-item" to="/OpSocial">Social Entrepreneurship</Link></li>
                <li><Link className="dropdown-item custom-dropdown-item" to="/OpSpecialSupport">Special Support Programme</Link></li>
                <li><Link className="dropdown-item custom-dropdown-item" to="/OpSpecialInterventions">Special Interventions</Link></li> */}
              </ul>
            </li>

            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                to="/"
                id="navbarDropdownInvolved"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Get Involved
              </Link>
              <ul
                className="dropdown-menu custom-dropdown-menu"
                aria-labelledby="navbarDropdownInvolved"
              >
                <li>
                  <Link
                    className="dropdown-item custom-dropdown-item"
                    to="/registration"
                  >
                    Registration
                  </Link>
                </li>
                <li>
                  <Link
                    className="dropdown-item custom-dropdown-item"
                    to="/members"
                  >
                    Members
                  </Link>
                </li>
                <li>
                  <Link
                    className="dropdown-item custom-dropdown-item"
                    to="/supportspeaks"
                  >
                    Support Speaks
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/gallery">
                Gallery
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/message">
                Message
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/events">
                Events
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contacts">
                Contacts
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
