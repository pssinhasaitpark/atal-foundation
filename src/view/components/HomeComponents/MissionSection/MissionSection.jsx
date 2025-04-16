import React,{useState} from "react";
import { ourMissionImg } from "../../../../assets/images/index";
import { Card } from "react-bootstrap";
import "./MissionSection.css";
import LightBox from "../../LightBox";
const MissionSection = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="container py-lg-4 py-4">
      <div className="row align-items-center">
        <div className="col-md-5">
          <div className="">
            <img
              loading="lazy"
              onClick={() => {
                setOpen(true);
              }}
              src={ourMissionImg}
              alt=""
              className="img-fluid w-100"
            />
          </div>
        </div>
        <div className="col-md-7">
          <Card className="custom-card bg-transparent border-0 justify-content-center align-items-center">
            <Card.Body className="card-style  p-lg-5">
              <p className="custom-badge badge mb-3">Our Mission</p>
              <h3 className="custom-mission-heading heading-font">
                Empowering Communities, Transforming Lives
                <br /> Building a Better Future
              </h3>
              <ul>
                <li className="custom-subtitle">
                  Our mission is to uplift lives by creating opportunities,
                  nurturing potential, and fostering a spirit of self-reliance.
                  Every project we undertake is a step toward a more inclusive,
                  equitable, and empowered society.
                </li>
                <li className="custom-subtitle">
                  At Atal Foundation, we believe that lasting change begins at
                  the grassroots. Through our focused initiatives in education,
                  health, skill development, and social awareness, we strive to
                  empower individuals and communities alike.
                </li>
                <li className="custom-subtitle">
                  Together, we are not just dreaming of a better future — we are
                  building it, one empowered life at a time.
                </li>
              </ul>
            </Card.Body>
          </Card>
        </div>
      </div>
      <LightBox
        open={open}
        onClose={() => setOpen(false)}
        images={Array(ourMissionImg)}
      />
    </div>
  );
};

export default MissionSection;
