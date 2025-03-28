import React from "react";
import "./Footer.css";

const FooterBottom = () => {
  const currentYear = new Date().getFullYear();
  return (
    <>
      <div className="Footer-Bottom footer-bottom-background d-flex justify-content-around align-items-center">
        <p className="fotter-bottom-text m-0 ">
          Copyright © {currentYear} Atal Foundation
        </p>
        <p className="fotter-bottom-text m-0">
          Powered By :-
          <a
            href="https://parkhya.com/"
            target="_blank"
            className="text-decoration-none text-white ms-2"
            rel="noreferrer"
          >
            Parkhya Solutions Pvt. Ltd.
          </a>
        </p>
      </div>
    </>
  );
};

export default FooterBottom;
