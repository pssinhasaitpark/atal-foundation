import React from "react";
import { Figmaimages1 } from "../../../../assets/images/index"
const MoreAboutFoundation = () => {
    const foundationInfo = [
        {
            image: Figmaimages1,
            title: "Our role:",
            description:
                "At Atal Foundation, we act as catalysts for social change, focusing on Education & Skill Development",
        },
        {
            image: Figmaimages1,
            title: "How we work:",
            description:
                "At Atal Foundation, we follow a structured and impact-driven approach to create lasting social change",
        },
        {
            image: Figmaimages1,
            title: "Our role:",
            description:
                "Inspired by the vision of Atal Ji, Atal Foundation was established to drive meaningful social transformation.",
        },
    ];

    return (
        <div className="container py-lg-5">
            <h3 className="fw-bold heading-font">More About Foundation</h3>
            <div className="row mt-4">
                {foundationInfo.map((info, index) => (
                    <div key={index} className="col-md-4">
                        <div className="card border-0">
                            <img src={info.image} className="card-img-top" alt="Foundation" />
                            <div className="card-body p-0 my-2">
                                <p className="heading-font"><span className="fw-bold heading-font">{info.title}</span>:{info.description}</p>
                                <a href="/" className="text-warning fw-bold">
                                    Learn About
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MoreAboutFoundation;