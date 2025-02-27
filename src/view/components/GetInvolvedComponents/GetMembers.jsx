import React from "react";
import {peoplebehind } from "../../../assets/images/index"
const GetMembersData = [
  {
    name: "Dr. C.L. Yadav",
    designation: "Advocate",
    location: "Indore",
    image: peoplebehind,
  },
  {
    name: "Adv. Avijit Mishra",
    designation: "Advocate",
    location: "Sagar",
    image: peoplebehind,
  },
  {
    name: "Ritesh Rajora",
    designation: "Sundaram BNP Paribas Asset Management",
    location: "Bhopal",
    image: peoplebehind,
  },
  {
    name: "Rohit Yadav",
    designation: "Assistant Doctor Homoeo Clinic",
    location: "A-23.24 Homoeo Clinic Sukhliya Chouraha Indore",
    image: peoplebehind,
  },
];

const GetMembers = () => {
  return (
    <div className="container my-4">
      <h3 className="text-center mb-4">Members</h3>
      <div className="row">
        {GetMembersData.map((person, index) => (
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
                {person.designation && <p className="mb-1">{person.designation}</p>}
                <p className="text-muted">{person.location}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GetMembers;
