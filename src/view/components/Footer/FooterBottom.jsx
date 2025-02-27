import React from "react";
import "./Footer.css";

const FooterBottom = () => {
  const currentYear = new Date().getFullYear();
  return (
    <>
      <div className="Footer-Bottom footer-bottom-background">
        <p className="text-center fotter-bottom-text m-0 ">
          Copyright © {currentYear} Atal Foundation
        </p>
      </div>
    </>
  );
};

export default FooterBottom;
