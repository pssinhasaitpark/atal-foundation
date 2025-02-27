import React from "react";
import { useParams } from "react-router-dom";
import { MoreAboutFoundationImage1, MoreAboutFoundationImage2, MoreAboutFoundationImage3 } from "../../../../assets/images/index";

const FoundationDetailPage = () => {
  const { id } = useParams();
  const foundationDetails = {
    1: {
      title: "Our role",
      description:
        "At Atal Foundation, we act as catalysts for social change, focusing on Education & Skill Development",
      image: MoreAboutFoundationImage1,
    },
    2: {
      title: "How we work",
      description:
        "At Atal Foundation, we follow a structured and impact-driven approach to create lasting social change",
      image: MoreAboutFoundationImage2
    },
    3: {
      title: "Our vision",
      description:
        "Inspired by the vision of Atal Ji, Atal Foundation was established to drive meaningful social transformation.",
      image: MoreAboutFoundationImage3,
    },
  };

  const foundation = foundationDetails[id];

  if (!foundation) {
    return <div>Foundation not found!</div>;
  }

  return (
    <div className="foundation-detail-container container my-5 w-75">
      <h2 className="heading-font text-center">{foundation.title}</h2>
      <img src={foundation.image} alt={foundation.title} className="w-100 my-4" />
      <p>{foundation.description}</p>
    </div>
  );
};

export default FoundationDetailPage;
