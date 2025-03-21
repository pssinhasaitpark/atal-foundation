import React from "react";
import {
  peopleimg1,
  peopleimg6,
  peopleimg4,
  peopleimg5,
} from "../../assets/images/index";
const supportSpeaksData = [
  {
    name: "Dr. C.L. Yadav",
    designation: "Advocate",
    location: "Indore",
    image: peopleimg5,
  },
  {
    name: "Adv. Avijit Mishra",
    designation: "Advocate",
    location: "Sagar",
    image: peopleimg4,
  },
  {
    name: "Ritesh Rajora",
    designation: "Sundaram BNP Paribas Asset Management",
    location: "Bhopal",
    image: peopleimg6,
  },
  {
    name: "Rohit Yadav",
    designation: "Assistant Doctor Homoeo Clinic",
    location: "A-23.24 Homoeo Clinic Sukhliya Chouraha Indore",
    image: peopleimg1,
  },
];
const PeopleBehindPage = () => {
  return (
    <div className="App container my-4">
      <h3 className="text-center mb-4">People Behind</h3>
      <div className="row">
        {supportSpeaksData.map((person, index) => (
          <div key={index} className="col-md-6 mb-4">
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
          </div>
        ))}
      </div>
    </div>
  );
};
export default PeopleBehindPage;
