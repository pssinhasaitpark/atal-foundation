import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import FooterBottom from "./FooterBottom.jsx";
// import { yt, fb, app, insta } from "../../../../assests/index.js";
const Footer = () => {
  const quickLinks1 = ["Home", "About", "History", "Books"];
  const quickLinks2 = ["News", "Gallery", "Contact"];

  return (
    <>
      <div className="footer bg-dark text-light py-5">
        <div className="">
          <div className="row  m-0 mb-5 ">

            <div className="col-md-4 footer-section w-25 ms-5 mt-2">
              <h5 className="home-badge badge border rounded-0 fs-6 fw-normal mb-3 text-uppercase">
                Atal Foundation
              </h5>
              <h3 className="fw-bold fs-1 heading-font">
                Building A Stronger India, Inspired By Atal
              </h3>
            </div>
            <div className="col-md-4 ms-5 footer-section mt-2">

              <div className="quick-links-container">
                <div className='quick-links'>

                  <p className="mb-3 fs-4 mt-5 ms-3">Quick Links</p>
                </div>
                <div className='row quick-links'>
                  <div className='col-6 p-0'>
                    <div className="ms-4 ">
                      {quickLinks1.map((link, index) => (
                        <div key={index} className="lh-lg ">
                          <Link href="/" className="text-light text-decoration-none fs-5 me-4 ">
                            {link}
                          </Link>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className='col-6 p-0 m-0'>
                    {quickLinks2.map((link, index) => (
                      <div key={index} className="lh-lg ">
                        <Link href="/" className="text-light text-decoration-none fs-5 me-5">
                          {link}
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 mt-5  footer-section footer-middle">
              <h5 className="mb-4 fs-4 fw-medium mt-2 ">Sign up for our newsletter</h5>
              <div className="d-flex newsletter-container d-flex align-items-center">
                <input
                  type="email"
                  className="form-control newsletter-email border rounded-start"
                  placeholder="Enter Email"
                />
                <button
                  className="btn btn-primary px-5 rounded-end text-light fs-5 fw-bolder "
                >
                  Subscribe
                </button>
              </div>
              {/* <div className="d-flex social-icons-container">
                <img src={app} alt="WhatsApp" className='me-2 footer-icons' />
                <img src={fb} alt="Facebook" className='me-2 footer-icons' />
                <img src={insta} alt="Instagram" className='me-2 footer-icons' />
                <img src={yt} alt="YouTube" className='me-2 footer-icons' />

              </div> */}
            </div>
          </div>
        </div>
      </div>
      <FooterBottom />
    </>
  );
};

export default Footer;