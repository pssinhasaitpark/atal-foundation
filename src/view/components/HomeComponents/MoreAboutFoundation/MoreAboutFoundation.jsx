import React, { useState } from "react";
import {
  MoreAboutFoundationImage1,
  MoreAboutFoundationImage2,
  MoreAboutFoundationImage3,
} from "../../../../assets/images/index";
import { LuMoveRight } from "../../../../assets/logos/index";
import { Link } from "react-router-dom";
import "./MoreAboutFoundation.css";
import LightBox from "../../LightBox";
export const foundationInfo = [
  {
    id: 1,
    image: MoreAboutFoundationImage1,
    title: "Our role:",
    description:
      "At Atal Foundation, our role goes beyond support — we are catalysts for change.",
  },
  {
    id: 2,
    image: MoreAboutFoundationImage2,
    title: "How we work:",
    description:
      "At Atal Foundation, we follow a people-first, ground-up approach.",
  },
  {
    id: 3,
    image: MoreAboutFoundationImage3,
    title: "Our vision:",
    description:
      "To build an inclusive, empowered, and progressive India, where every individual.",
  },
];
const MoreAboutFoundation = () => {
  const [photoIndex, setPhotoIndex] = useState(0);
  const [open, setOpen] = useState(false);
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const foundationInfoImg = foundationInfo.map((img, index) => img.image);

  return (
    <div className="container py-lg-4 py-4">
      <h2 className="top-programmes-title heading-font">
        More About Foundation
      </h2>
      <div className="row mt-4">
        {foundationInfo?.map((info, index) => (
          <div key={index} className="col-md-4">
            <div className="card border-0">
              <img
                loading="lazy"
                src={info?.image}
                onClick={() => {
                  setPhotoIndex(index);
                  setOpen(true);
                }}
                className="card-img-top-maf object-fit-cover"
                alt={info?.title}
              />
              <div className="card-body p-0 my-2">
                <p className="heading-font more-about-subtitle ">
                  <span className="fw-bold heading-font">{info?.title}</span>
                  {info?.description}
                </p>

                <Link
                  to={`/foundation/${info.id}`}
                  onClick={scrollToTop}
                  className="text-warning-color text-decoration-none fw-bold align-items-center d-flex"
                >
                  Learn About <LuMoveRight className="mx-2" />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      <LightBox
        open={open}
        photoIndex={photoIndex}
        onClose={() => setOpen(false)}
        images={foundationInfoImg}
      />
    </div>
  );
};

export default MoreAboutFoundation;
