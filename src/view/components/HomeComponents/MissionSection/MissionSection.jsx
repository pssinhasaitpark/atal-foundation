import React from "react";
import { ourMissionImg } from "../../../../assets/images/index";
import { Card } from "react-bootstrap";
import "./MissionSection.css"
const MissionSection = () => {
    return (
        <div className="container py-lg-5 py-4">
            <div className="row align-items-center">
                <div className="col-md-5">
                    <div className="">
                        <img loading="lazy"
                            src={ourMissionImg}
                            alt=""
                            className="img-fluid w-100"
                           
                        />
                    </div>
                </div>
                <div className="col-md-7">
                    <Card className="custom-card bg-transparent border-0 justify-content-center align-items-center">
                        <Card.Body className="card-style  p-lg-5">
                            <p className="custom-badge badge mb-3">
                                Our Mission
                            </p>
                            <h3 className="custom-mission-heading heading-font">
                                empowering communities, transforming<br />lives, building a better
                                future.
                            </h3>
                            <p className="custom-subtitle">
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
