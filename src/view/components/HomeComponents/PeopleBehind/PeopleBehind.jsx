import React from "react";
import { useNavigate } from "react-router";
import { pb1, pb2, pb3, pb4, pb5, pb6 } from "../../../../assets/images/index";
import { Card } from "react-bootstrap";
import { Link } from "react-router";
import "./PeopleBehind.css"
const PeopleBehind = () => {
  const navigate = useNavigate();

  const topProgrammes = {
    title: "People Behind Atal Foundation India",
    subtitle:
      "with two decades of impact in literacy, health, disability, and livelihoods, atalfoundation now prioritizes education for systemic change, while other initiatives continue as development support programs.",
    badge: "People Behind",
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const peopleBehind = [
    {
      id: 1,
      name: "Mala Vajpayee Tiwari",
      detail: "Niece of Bharat Ratna Atal Bihari Vajpayee Ji.",
      image: pb2,
    },
    {
      id: 2,
      name: "Santosh Shukla",
      detail:
        "President and CEO of World Book of Records, a UK-based organization, & advocate at the Supreme Court of India.",
      image: pb6,
    },
    {
      id: 3,
      name: "Mrs. Ruchi Mishra",
      detail:
        "Deeply involved in promoting social, cultural, educational, environmental, national integration, and universal peace through various activities. ",
      image: pb5,
    },
    {
      id: 4,
      name: "Dr. Prachi Shukla",
      detail:
        "Dr. Prachi Shukla is a visionary entrepreneur and committed social activist, dedicated to driving societal change through business and social initiatives. She empowers marginalized communities by blending entrepreneurship with social welfare, focusing on education, healthcare, and livelihood development. Her work continues to inspire and uplift those in need, making a lasting impact on both the business and social sectors. ",
      image: pb4,
    },
    {
      id: 5,
      name: "Abhishek Tiwari",
      detail:
        "Deeply involved in promoting social, cultural, educational, environmental, national integration, and universal peace through various activities. ",
      image: pb1,
    },
    {
      id: 6,
      name: "Dr. Prabhakar Mishra",
      detail:
        "Deeply involved in promoting social, cultural, educational, environmental, national integration, and universal peace through various activities. ",
      image: pb3,
    },
  ];
  const handleClick = () => {
    navigate("/people-behind");
  };
  return (
    <div className="container py-lg-4 py-4">
      <div className="row">
        <div className="col-lg-6 col-md-6 d-flex justify-content-center align-items-center flex-column">
          <div className="container">
            <div className="row ">
              {peopleBehind.map((member) => (
                <div key={member.id} className="col-4 col-md-6 col-lg-4">
                  <Link
                    to={`people-behind/peopleBehind/${member.id}`}
                    onClick={scrollToTop}
                  >
                    <div className="position-relative h-100 w-100">
                      <img
                        loading="lazy"
                        src={member.image}
                        alt={member.name}
                        className="img-fluid w-100 h-100 object-fit-cover"
                      />
                      <div className="justify-content-center d-flex position-absolute bottom-0 w-100">
                        <p className="atal-pb-name text-center mb-0 small bg-light py-lg-1 py-0 px-lg-4 px-0 text-dark">
                          {member.name}
                        </p>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
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
              <ul>
                <li className="custom-subtitle  mb-2">
                  At the heart of Atal Foundation India is a dedicated team of
                  visionaries, changemakers, and compassionate leaders—all
                  inspired by the legacy of Shri Atal Bihari Vajpayee ji.
                </li>
                <li className="custom-subtitle  mb-2">
                  Our team is a vibrant mix of social workers, educators, youth
                  leaders, policy advocates, and volunteers, united by a shared
                  mission: to serve the nation, uplift communities, and drive
                  positive change at every level of society.
                </li>
                <li className="custom-subtitle  mb-2">
                  Each member brings passion, purpose, and experience, working
                  selflessly to turn vision into action. It is through their
                  relentless efforts that the Foundation continues to reach new
                  milestones in empowerment, awareness, and service.
                </li>
                <li className="custom-subtitle  mb-2">
                  Together, we are not just leading initiatives—we are building
                  a stronger India.
                </li>
              </ul>

              <button
                className="custom-button"
                onClick={() => {
                  handleClick();
                  scrollToTop();
                }}
              >
                Learn About
              </button>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default PeopleBehind;
