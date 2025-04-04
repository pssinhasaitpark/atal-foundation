import React from "react";
import { pb1, pb2, pb3, pb4, pb5, pb6 } from "../../assets/images/index";
import { Link } from "react-router";
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
const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};
const PeopleBehindPage = () => {
  return (
    <div className="App container my-4">
      <h3 className="text-center mb-4">People Behind</h3>
      <div className="row">
        {peopleBehind.map((person) => (
          <div key={person.id} className="col-md-6 mb-4">
            <Link
              to={`/people-behind/peopleBehind/${person.id}`}
              className="text-decoration-none"
              onClick={() => {
                scrollToTop();
              }}
            >
              <div className="card shadow-sm p-3 d-flex flex-row align-items-center">
                <img
                  src={person.image}
                  alt={person.name}
                  className="rounded-circle me-3"
                  width="80"
                  height="80"
                />
                <div>
                  <h5 className="fw-bold">{person.name}</h5>
                  {person.designation && (
                    <p className="mb-1">{person.designation}</p>
                  )}
                  <p className="text-muted">{person.location}</p>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};
export default PeopleBehindPage;
