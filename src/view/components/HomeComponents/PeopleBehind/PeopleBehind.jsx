import React from 'react'
import { peoplebehind } from "../../../../assets/images/index"
import { Card } from "react-bootstrap"
const PeopleBehind = () => {
  const topProgrammes = {
    title: "atal foundation india-inspired by atal,committed to progress",
    subtitle: "with two decades of impact in literacy, health, disability, and livelihoods, atalfoundation now prioritizes education for systemic change, while other initiatives continue as development support programs.",
    badge: "People Behind",
  };
  // Team member data
  const teamMembers = [
    { id: 1, name: 'Adv. Santosh Shukla', imageUrl: peoplebehind },
    { id: 2, name: 'Dr. Prachi Shukla', imageUrl: peoplebehind },
    { id: 3, name: 'Dr. Prabhakar Mishra', imageUrl: peoplebehind },
    { id: 4, name: 'Abhishek Tiwari', imageUrl: peoplebehind },
    { id: 5, name: 'Mrs. Mala Tiwari', imageUrl: peoplebehind },
    { id: 6, name: 'Mrs. Ruchi Mishra', imageUrl: peoplebehind },
  ];

  return (
    <div className="container py-lg-5">
      <div className="row">

        <div className="col-lg-6 col-md-6 d-flex justify-content-center align-items-center flex-column">
          <div className="row">
            {teamMembers.slice(0, 3).map(member => (
              <div key={member.id} className="col-md-4 col-sm-2 mb-4 p-1">
                <div className="position-relative">
                  <img
                    src={member.imageUrl}
                    alt={member.name}
                    className="img-fluid w-100"
                  />
                  <div className="text-center text-light py-1 position-absolute bottom-0 start-0 w-100">
                    <p className="mb-0 small">{member.name}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="row">
            {teamMembers.slice(3, 6).map(member => (
              <div key={member.id} className="col-md-4 col-sm-2 mb-4 p-1">
                <div className="position-relative">
                  <img
                    src={member.imageUrl}
                    alt={member.name}
                    className="img-fluid w-100"
                  />
                  <div className="text-center text-light  py-1 position-absolute bottom-0 start-0 w-100">
                    <p className="mb-0 small">{member.name}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right column - Foundation info */}
        <div className="col-lg-6 col-md-6 d-flex flex-column justify-content-center">
          <Card className="custom-card bg-transparent border-0 justify-content-center align-items-center px-2">
            <Card.Body className="card-style">
              <h5 className="custom-badge badge rounded-0 border mb-3">
                {topProgrammes.badge}
              </h5>
              <h3 className="fw-bold fs-1 mb-3 heading-font">
                {topProgrammes.title}
              </h3>
              <div className="mb-2">
                <div className="d-flex align-items-start">
                  <span className="text-success me-1">✅</span>
                  <p className="mb-2">education for all - ensuring quality education and skill development for holistic growth.</p>
                </div>
              </div>
              <div className="mb-2">
                <div className="d-flex align-items-start">
                  <span className="text-success me-1">✅</span>
                  <p className="mb-2">health & well-being - providing healthcare access, nutrition, and mental health support.</p>
                </div>
              </div>
              <div className="mb-4">
                <div className="d-flex align-items-start">
                  <span className="text-success me-1">✅</span>
                  <p className="mb-2">livelihood & empowerment - creating sustainable employment and entrepreneurship</p>
                </div>
              </div>
              <button className="btn btn-primary ">Learn About</button>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default PeopleBehind