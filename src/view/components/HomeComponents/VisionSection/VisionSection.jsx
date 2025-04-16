import React, { useState } from "react";
import { VisionSection as VisionSecImg } from "../../../../assets/images/index";
import { Card } from "react-bootstrap";
import LightBox from "../../LightBox";
const VisionSection = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="container py-lg-4 py-4">
      <div className="row align-items-center">
     
        <div className="col-md-6">
          <Card className="custom-card bg-transparent border-0 justify-content-center align-items-center">
            <Card.Body className="card-style ps-lg-0 p-lg-5">
              <p className="custom-badge badge mb-3">Our Vision</p>
              <h3 className="fw-bold fs-1 heading-font">
                Inspired by Atal, Empowering Lives, Transforming Futures with
                Change
              </h3>
              <ul>
                <li className="fw-light fs-6 lh-lg">
                  Guided by the visionary ideals of Shri Atal Bihari Vajpayee
                  ji, the Atal Foundation is committed to nurturing a society
                  where every individual has the opportunity to grow, lead, and
                  make a difference.
                </li>
                <li className="fw-light fs-6 lh-lg">
                  We are driven by his legacy of inclusivity, leadership, and
                  nation-building, and we channel that inspiration into
                  real-world impact — empowering lives through education,
                  health, skill development, and social initiatives.
                </li>
                <li className="fw-light fs-6 lh-lg">
                  With every step we take, we aim to transform futures, spark
                  positive change, and build a resilient, empowered India.
                </li>
              </ul>
            </Card.Body>
          </Card>
        </div>

        <div className="col-md-6">
          <div className="">
            <img
              loading="lazy"
              src={VisionSecImg}
              onClick={() => {
                setOpen(true);
              }}
              alt=""
              className="img-fluid w-100"
            />
          </div>
        </div>
      </div>
      <LightBox
        open={open}
        onClose={() => setOpen(false)}
        images={Array(VisionSecImg)}
      />
    </div>
  );
};

export default VisionSection;
