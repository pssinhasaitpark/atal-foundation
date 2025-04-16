import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { atallogo } from "../../../assets/images/index";
import useOurProgram from "../../hooks/useOurProgram";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { data, isLoading, isError } = useOurProgram();
  const location = useLocation();

  const toggleOffcanvas = () => {
    setIsOpen(!isOpen);
  };
  const closeOffcanvas = () => {
    setIsOpen(false);
  };

  const isDropdownActive = (path) => {
    return location.pathname.startsWith(path);
  };

  return (
    <nav
      className="navbar navbar-expand-lg navbar-light z-3"
      style={{ backgroundColor: "rgb(246, 134, 51)" }}
    >
      <div className="container d-flex flex-row">
        <NavLink className="navbar-brand px-lg-2" to="/">
          <img src={atallogo} alt="Logo" width="100%" />
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleOffcanvas}
          aria-controls="offcanvasNavbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className={`offcanvas offcanvas-start ${isOpen ? "show" : ""}`}
          style={{
            backdropFilter: "blur(10px)",
            background: "none",
            backgroundColor: "rgb(144 82 36 / 60%)",
          }}
          tabIndex="-1"
          id="offcanvasNavbar"
        >
          <div className="offcanvas-header">
            <img src={atallogo} alt="Logo" width="100%" />
            <button
              type="button"
              className="btn-close text-white"
              onClick={closeOffcanvas}
            ></button>
          </div>
          <div className="offcanvas-body">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  exact
                  to="/"
                  onClick={closeOffcanvas}
                  activeclassname="active"
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  to="/about"
                  onClick={closeOffcanvas}
                  activeclassname="active"
                >
                  About
                </NavLink>
              </li>
              <li className="nav-item dropdown">
                <NavLink
                  className={`nav-link dropdown-toggle ${
                    isDropdownActive("/our-programmes") ? "active" : ""
                  }`}
                  to="/our-programmes"
                  id="Our Programmes"
                  role="button"
                  data-bs-toggle="dropdown"
                >
                  Our Programmes
                </NavLink>
                <ul
                  className="dropdown-menu custom-dropdown-menu"
                  aria-labelledby="navbarDropdownPrograms"
                >
                  {isError || isLoading ? (
                    <li>Loading..</li>
                  ) : (
                    data?.map((opCategory) => (
                      <li key={opCategory._id}>
                        <NavLink
                          className="dropdown-item custom-dropdown-item"
                          to={`/our-programmes/${opCategory.category}`}
                          onClick={closeOffcanvas}
                          activeclassname="active"
                        >
                          {opCategory.category}
                        </NavLink>
                      </li>
                    ))
                  )}
                </ul>
              </li>
              <li className="nav-item dropdown">
                <NavLink
                  className={`nav-link dropdown-toggle ${
                    isDropdownActive("/involved") ? "active" : ""
                  }`}
                  to="/get-invloved"
                  id="navbarDropdownInvolved"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Get Involved
                </NavLink>
                <ul
                  className="dropdown-menu custom-dropdown-menu"
                  aria-labelledby="navbarDropdownInvolved"
                >
                  <li>
                    <NavLink
                      className="dropdown-item custom-dropdown-item"
                      to="/registration"
                      onClick={closeOffcanvas}
                      activeclassname="active"
                    >
                      Registration
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className="dropdown-item custom-dropdown-item"
                      to="/members"
                      onClick={closeOffcanvas}
                      activeclassname="active"
                    >
                      Members
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className="dropdown-item custom-dropdown-item"
                      to="/supportspeaks"
                      onClick={closeOffcanvas}
                      activeclassname="active"
                    >
                      Support Speaks
                    </NavLink>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  to="/gallery"
                  onClick={closeOffcanvas}
                  activeclassname="active"
                >
                  Gallery
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  to="/message"
                  onClick={closeOffcanvas}
                  activeclassname="active"
                >
                  Message
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  to="/events"
                  onClick={closeOffcanvas}
                  activeclassname="active"
                >
                  Events
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  to="/contacts"
                  onClick={closeOffcanvas}
                  activeclassname="active"
                >
                  Contacts
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
