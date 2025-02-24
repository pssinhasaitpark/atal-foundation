import React from "react";
import { VisionSection as VisionSecImg } from "../../../../assets/images/index";
import { Card } from "react-bootstrap";
const MissionSection = () => {
    return (
        <div className="container py-lg-5 py-4">
            <div className="row align-items-center">
                <div className="col-md-6">
                    <div className="">
                        <img
                            src={VisionSecImg}
                            alt="Smiling children"
                            className="img"
                            style={{ maxWidth: "100%" }}
                        />
                    </div>
                </div>
                <div className="col-md-6">
                    <Card className="custom-card bg-transparent border-0 justify-content-center align-items-center">
                        <Card.Body className="card-style p-lg-5">
                            <h5 className="custom-badge badge rounded-0 border mb-3">
                                Our Mission
                            </h5>
                            <h3 className="fw-bold fs-1 heading-font">
                                empowering communities, transforming lives, building a better
                                future.
                            </h3>
                            <p className="fw-light fs-6 lh-lg">
                                mission:- our mission is to promote and provide qualitative
                                education at affordable costs to children and communities, which
                                are socially and economically deprived. furthermore this program
                                helps to bring out the children's latent talents, so that they
                                not only acquire academic learning, but also vocational
                                proficiency, personal character and societal values. they should
                                become self-reliant and responsible citizens.
                            </p>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default MissionSection;
