import React from "react";
import { VisionSection as VisionSecImg } from "../../../../assets/images/index"
import { Card } from "react-bootstrap"
const VisionSection = () => {
  return (
    <div className="container py-lg-5 py-4">
      <div className="row align-items-center">
        {/* Left Text Section */}
        <div className="col-md-6">
          <Card className="custom-card bg-transparent border-0 justify-content-center align-items-center">
            <Card.Body className="card-style ps-lg-0 p-lg-5">
              <h5 className="custom-badge badge mb-3">
                Our Vision
              </h5>
              <h3 className="fw-bold fs-1 heading-font">
                inspired by atal, empowering lives, transforming futures with change.
              </h3>
              <p className="fw-light fs-6 lh-lg">
                A just and self-reliant society built on rights, equity, justice, and
                service. Deepalaya focuses on children as the entry point, families
                as the unit of development, and community organization as the
                approach. Our long-term strategy empowers children, families, and
                communities, with a special focus on girls, street children, and
                children with disabilities for sustainable social transformation.
              </p>
            </Card.Body>
          </Card>
        </div>
        {/* Right Images Section */}
        <div className="col-md-6">
          <div className="">
            <img loading="lazy"
              src={VisionSecImg}
              alt=""
              className="img-fluid w-100"
             
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisionSection;
