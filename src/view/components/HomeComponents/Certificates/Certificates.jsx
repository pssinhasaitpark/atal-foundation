import React, { useState } from "react";

import LightBox from "../../LightBox";
import {
  cerficateImg1,
  cerficateImg2,
  cerficateImg3,
  cerficateImg4,
} from "../../../../assets/images/index";
import "./Certificates.css";

const Certificates = () => {
  const images = [cerficateImg2, cerficateImg1, cerficateImg3, cerficateImg4];
  const [open, setOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);
  return (
    <div className="container py-lg-4 py-4">
      <div>
        <h2 className="top-programmes-title photo-gallery-title align-items-center heading-font">
          Certificates
        </h2>
        <p className="heading-font custom-our-mission-sub">
          In honor of your exceptional contribution to social change,
          empowerment, and the upliftment of our community.
          <br />
          Your dedication, compassion, and active participation continue to
          inspire positive transformation.
        </p>
      </div>
      <div className="row">
        {images?.map((img, index) => (
          <div
            key={index}
            onClick={() => {
              setPhotoIndex(index);
              setOpen(true);
            }}
            className="col-sm-12 col-lg-3"
          >
            <img
              loading="lazy"
              src={img}
              alt={`gallery-img-${index}`}
              className={`certificate-img w-100 object-fit-cover my-2 my-lg-0`}
            />
          </div>
        ))}
      </div>
      <LightBox
        open={open}
        onClose={() => setOpen(false)}
        photoIndex={photoIndex}
        images={images}

      />
    </div>
  );
};

export default Certificates;
