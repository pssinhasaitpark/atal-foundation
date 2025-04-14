import React from "react";
import { SlideshowLightbox } from "lightbox.js-react";
import {
  cerficateImg1,
  cerficateImg2,
  cerficateImg3,
  cerficateImg4,
} from "../../../../assets/images/index";
import "./Certificates.css";

const Certificates = () => {
  const images = [cerficateImg2, cerficateImg1, cerficateImg3, cerficateImg4];

  return (
    <div className="container">
      <div>
        <h2 className="top-programmes-title photo-gallery-title align-items-center heading-font">
          Certificates
        </h2>
        <p className="heading-font custom-our-mission-sub">
        In honor of your exceptional contribution to social change, empowerment, and the upliftment of our community.<br/>Your dedication, compassion, and active participation continue to inspire positive transformation.
        </p>
      </div>
      <div className="row">
        {images?.map((img, index) => (
          <SlideshowLightbox
            className="col-lg-3 my-4 "
            backgroundColor="black"
            modalClose="clickOutside"
          >
            <img
              loading="lazy"
              src={img}
              alt={`gallery-img-${index}`}
              className={`certificate-img w-100 object-fit-cover `}
            />
          </SlideshowLightbox>
        ))}
      </div>
    </div>
  );
};

export default Certificates;
