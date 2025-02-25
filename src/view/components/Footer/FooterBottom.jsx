import React from "react";
import "./Footer.css";

const FooterBottom = () => {
  const currentYear = new Date().getFullYear();
  return (
    <>
      <div className="Footer-Bottom py-1 footer-bottom-background">
        <p className="text-center fw-normal m-0 text-light">
          Copyright © {currentYear} Atal Foundation
        </p>
      </div>
    </>
  );
};

export default FooterBottom;
