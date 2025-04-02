import React from "react";
import { useParams } from "react-router-dom";
import { pb1, pb2, pb3, pb4, pb5, pb6 } from "../../assets/images/index";

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

const SinglePeopleBehind = () => {
  const { id } = useParams();
  // eslint-disable-next-line
  const item = peopleBehind.find((item) => item.id == id);

  return (
    <div className="App container my-5 w-75">
      <h2 className="heading-font text-center">{item.name}</h2>
      <img
        src={item.image}
        alt={item.name}
        className="w-100 my-4 object-fit-contain"
        style={{ height: "500px" }}
      />
      <div
        className="fw-light fs-6 lh-lg"
        dangerouslySetInnerHTML={{
          __html: item.detail,
        }}
      />
    </div>
  );
};

export default SinglePeopleBehind;
