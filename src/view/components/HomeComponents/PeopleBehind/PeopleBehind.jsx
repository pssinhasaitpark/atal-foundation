import React from "react";
import {
  peopleimg1,
  peopleimg2,
  peopleimg3,
  peopleimg4,
  peopleimg5,
  peopleimg6,
} from "../../../../assets/images/index";
import { Card } from "react-bootstrap";
import { Link } from "react-router";
const PeopleBehind = () => {
  const topProgrammes = {
    title: "atal foundation india-inspired by atal,committed to progress",
    subtitle:
      "with two decades of impact in literacy, health, disability, and livelihoods, atalfoundation now prioritizes education for systemic change, while other initiatives continue as development support programs.",
    badge: "People Behind",
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const teamMembers = [
    { id: 1, name: "Adv. Santosh Shukla", imageUrl: peopleimg6 },
    { id: 2, name: "Dr. Prachi Shukla", imageUrl: peopleimg2 },
    { id: 3, name: "Dr. Prabhakar Mishra", imageUrl: peopleimg3 },
    { id: 4, name: "Abhishek Tiwari", imageUrl: peopleimg1 },
    { id: 5, name: "Mrs. Mala Tiwari", imageUrl: peopleimg5 },
    { id: 6, name: "Mrs. Ruchi Mishra", imageUrl: peopleimg4 },
  ];

  return (
    <div className="container py-lg-5">
      <div className="row">
        <div className="col-lg-6 col-md-6 d-flex justify-content-center align-items-center flex-column">
          <div className="row">
            {teamMembers.map((member) => (
              <div key={member.id} className="col-12 col-sm-6 col-md-4 p-2">
                <div className="position-relative h-100 w-100">
                  <img
                    loading="lazy"
                    src={member.imageUrl}
                    alt={member.name}
                    className="img-fluid w-100 h-100 object-fit-cover"
                  />
                  <div className="justify-content-center d-flex position-absolute bottom-0 w-100">
                    <p className="text-center mb-0 small bg-light py-1 px-4 text-dark">
                      {member.name}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Foundation Info */}
        <div className="col-lg-6 col-md-6 d-flex flex-column justify-content-center">
          <Card className="custom-card bg-transparent border-0 justify-content-center align-items-center px-2">
            <Card.Body className="card-style">
              <p className="custom-badge badge mb-3">{topProgrammes.badge}</p>
              <h3 className="fs-1 fw-bold mb-3 heading-font">
                {topProgrammes.title}
              </h3>
              <div className="mb-2">
                <div className="d-flex align-items-start">
                  <span className="text-success me-1">✅</span>
                  <p className="custom-subtitle  mb-2">
                    education for all - ensuring quality education and skill
                    development for holistic growth.
                  </p>
                </div>
              </div>
              <div className="mb-2">
                <div className="d-flex align-items-start">
                  <span className="text-success me-1">✅</span>
                  <p className="custom-subtitle  mb-2">
                    health & well-being - providing healthcare access,
                    nutrition, and mental health support.
                  </p>
                </div>
              </div>
              <div className="mb-4">
                <div className="d-flex align-items-start">
                  <span className="text-success me-1">✅</span>
                  <p className="custom-subtitle  mb-2">
                    livelihood & empowerment - creating sustainable employment
                    and entrepreneurship
                  </p>
                </div>
              </div>
              <Link onClick={scrollToTop} to="/people-behind">
                <button className="custom-button">Learn About</button>
              </Link>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default PeopleBehind;
