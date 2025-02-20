import React from "react";
import "./Header.css";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { IoIosSearch } from "../../../assets/logos/index"
import { AtalLogo1 } from "../../../assets/images/index";
const Header = () => {
  return (

    <nav class="navbar navbar-expand-lg">
      <div class="container-fluid">
        <Navbar.Brand href="#" className="fw-bold text-primary fs-4 fw-bolder test-info">
          <img src={AtalLogo1} alt="" className="" />
        </Navbar.Brand>

        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <Nav.Link href="#home">Home</Nav.Link>
            <NavDropdown title="About" id="navbar-About-dropdown" className="fs-6 landing-text-white">
              <NavDropdown.Item href="#about-us">About Us</NavDropdown.Item>
              <NavDropdown.Item href="#vision">Vision</NavDropdown.Item>
              <NavDropdown.Item href="#mission">Mission</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Our Programmes" id="navbar-our-programmes-dropdown" className="fs-6 landing-text-white">
              <NavDropdown.Item href="#our-programs">Our Programs</NavDropdown.Item>
              <NavDropdown.Item href="#feature-2">Feature 2</NavDropdown.Item>
              <NavDropdown.Item href="#feature-3">Feature 3</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Get Involved" id="navbar-get-involved-dropdown" className="fs-6 landing-text-white">
              <NavDropdown.Item href="#gallery">Gallery</NavDropdown.Item>
              <NavDropdown.Item href="#messages">Messages</NavDropdown.Item>
              <NavDropdown.Item href="#events">Events</NavDropdown.Item>
            </NavDropdown>

            <Nav.Link href="#Gallery">Gallery</Nav.Link>
            <Nav.Link href="#Message">Message</Nav.Link>
            <Nav.Link href="#Events">Events</Nav.Link>
            <Nav.Link href="#Contacts">Contacts</Nav.Link>
          </ul>
          <form class="d-flex" role="search">
            <div class="input-group border ">
              <input type="search" class="form-control outline-0 border-0" placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
              <span class="input-group-text border-0 bg-transparent" id="search-addon">
                <IoIosSearch className="fs-4" />
              </span>
            </div>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Header;
