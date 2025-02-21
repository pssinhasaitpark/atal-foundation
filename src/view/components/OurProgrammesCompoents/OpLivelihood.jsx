import React from "react";
import { OPBanner3, AboutUsImgs2 } from "../../../assets/images/index";
import { Card } from "react-bootstrap";
const OpLivelihood = () => {
  return (
    <div className="container py-5">
      <div className="bannerImg overflow-hidden" style={{ height: "30rem" }}>
        <img src={OPBanner3} alt="" className=" object-fit-contain w-100 " />
      </div>
      <nav aria-label="custom-breadcrumb" className="pt-5">
        <ol className="custom-breadcrumb list-unstyled d-flex align-items-end">
          <li className="custom-breadcrumb-item fs-2">
            <a href="/" className="heading-font text-decoration-none text-dark">
              Our Programmes
            </a>
          </li>
          <li
            className="custom-breadcrumb-item active fs-3 heading-font text-muted ps-1"
            aria-current="page"
          >
            Livelihood
          </li>
        </ol>
      </nav>
      <div className="HealthCare1 border-bottom py-lg-5">
        <div className="row align-items-stretch">
          <div className="col-md-4 d-flex">
            <img
              src={AboutUsImgs2}
              alt="Children learning"
              className="img-fluid w-100 h-100 object-fit-cover"
            />
          </div>
          <div className="col-md-8 d-flex flex-column justify-content-center">
            <Card className="custom-card bg-transparent border-0 justify-content-center align-items-center">
              <Card.Body className="card-style p-0 ps-5">
                <h3 className="fw-bold fs-1 heading-font">
                  livelihood: empowering
                  <br />
                  communities, transforming lives
                </h3>

                <p className="fw-light fs-6 lh-lg m-0">
                  At ATAL FOUNDATION, we believe that sustainable livelihoods
                  are the key to breaking the cycle of poverty and fostering
                  self- reliance. Our mission is to create opportunities that
                  enable individuals, especially in rural and underprivileged
                  communities, to earn a dignified living through skill
                  development, entrepreneurship, and employment support.
                </p>
                <p className="fw-light lh-lg" ><strong>Our Approach to Livelihood Development</strong><br />
                  <strong> Skill Development & Vocational Training</strong><br />
                  We provide hands-on training in various trades, including agriculture, handicrafts, tailoring, digital literacy, and more, equipping individuals with market-relevant skills for better employment opportunities. <br />
                  <strong>Entrepreneurship & Small Business Support</strong><br />
                  We encourage self-employment by offering financial literacy programs, mentorship, and access to micro-financing, helping individuals start and sustain their businesses. <br />
                  <strong>Empowering Women & Youth</strong><br />
                  Special focus is given to women and youth, ensuring they have equal access to resources, training, and employment, making them active contributors to their families and communities. <br />
                  <strong>Sustainable & Rural Livelihood Initiatives</strong><br />
                  We promote eco-friendly practices such as organic farming, dairy farming, and other sustainable income-generation activities that contribute to environmental conservation and economic growth.</p>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
      <div className="HealthCare2 border-bottom py-lg-5">
        <div className="row align-items-stretch">
          <div className="col-md-4 d-flex">
            <img
              src={AboutUsImgs2}
              alt="Children learning"
              className="img-fluid w-100 h-100 object-fit-cover"
            />
          </div>
          <div className="col-md-8 d-flex flex-column justify-content-center">
            <Card className="custom-card bg-transparent border-0 justify-content-center align-items-center">
              <Card.Body className="card-style p-0 ps-5">
                <h3 className="fw-bold fs-1 heading-font">
                  our initiatives for livelihood <br />
                  development
                </h3>
                <p className="fw-bold m-0"><span>🔷</span>Skill Development & Vocational Training</p>
                <p className="fw-light">We provide hands-on training in various trades such as tailoring, agriculture, digital literacy, and handicrafts, enabling individuals to secure employment or start their own ventures.</p>
                <p className="fw-bold m-0"><span>🔷</span>Women & Youth Empowerment</p>
                <p className="fw-light">By offering specialized training and financial literacy programs, we help women and young people gain the confidence and skills needed for self-sufficiency and entrepreneurship.</p>
                <p className="fw-bold m-0"><span>🔷</span>Entrepreneurship & Small Business Support</p>
                <p className="fw-light">Our programs assist aspiring entrepreneurs with mentorship, access to micro-financing, and market linkages to help them establish and grow their businesses.</p>
                <p className="fw-bold m-0"><span>🔷</span>Rural & Sustainable Livelihoods</p>
                <p className="fw-light">We promote eco-friendly income-generation activities such as organic farming, dairy farming, and sustainable crafts, ensuring long-term benefits for both communities and the environment.</p>

              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OpLivelihood;
