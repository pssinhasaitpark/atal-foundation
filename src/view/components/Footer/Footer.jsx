import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import FooterBottom from "./FooterBottom.jsx";
import {
  FaWhatsapp,
  TiSocialFacebookCircular,
  FaInstagram,
  AiOutlineYoutube
} from "../../../assets/logos/index.js"
const Footer = () => {
  const quickLinks1 = ["Home", "About", "Our Programmes", "Get Involved"];
  const quickLinks2 = ["Gallery", "Message", "Events", "Contact"];

  return (
    <>
      <div className="footer bg-dark text-light">
        <div className="footer-padding">
          <div className="row">
            <div className="col-md-4 footer-section my-5 my-lg-0">
              <h5 className="custom-badge badge rounded-0 border mb-3 text-light">
                Atal Foundation
              </h5>
              <h3 className="fw-bold fs-1 heading-font">
                building a stronger<br /> india, inspired by atal
              </h3>
            </div>
            <div className="col-md-3 footer-section quick-links-div ps-5 my-5 my-lg-0">
              <div className='quick-links'>
                <p className="mb-3 fs-4">Quick Links</p>
              </div>
              <div className='row quick-links fw-light'>
                <div className='col-6 lh-lg'>
                  {quickLinks1.map((link, index) => (
                    <div key={index} className="">
                      <Link href="/" className="text-light text-decoration-none">
                        {link}
                      </Link>
                    </div>
                  ))}
                </div>
                <div className='col-6 lh-lg'>
                  {quickLinks2.map((link, index) => (
                    <div key={index} className="">
                      <Link href="/" className="text-light text-decoration-none">
                        {link}
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="col-md-4 footer-section footer-middle ps-lg-5 ms-lg-5 my-5 my-lg-0">
              <h5 className="mb-4 fs-4 fw-medium">Sign up for our newsletter</h5>
              <div className="d-flex">
                <input
                  type="email"
                  className="form-control footer-form rounded-0"
                  placeholder="Enter Email"
                />
                <button
                  className="btn btn-primary w-50"
                >
                  Subscribe
                </button>
              </div>
              <div>
                <FaWhatsapp className='footer-logos me-4' />
                <TiSocialFacebookCircular className='footer-logos me-4' />
                <FaInstagram className='footer-logos me-4'/>
                <AiOutlineYoutube className='footer-logos me-4' />
              </div>
            </div>
          </div>
        </div>
      </div>
      <FooterBottom />
    </>
  );
};

export default Footer;