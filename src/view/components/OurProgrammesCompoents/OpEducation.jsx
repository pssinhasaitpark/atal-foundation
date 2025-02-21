import React from "react";
import { OPBanner1, AboutUsImgs2 } from "../../../assets/images/index";
import { Card } from "react-bootstrap";
const OpEducation = () => {
  return (
    <div className="container py-5">
      <div className="bannerImg overflow-hidden" style={{ height: "30rem" }}>
        <img src={OPBanner1} alt="" className=" object-fit-contain w-100 " />
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
            Educating
          </li>
        </ol>
      </nav>
      <div className="Educating1 border-bottom py-lg-5">
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
                  educating rural india: a step
                  <br />
                  towards a brighter future
                </h3>
                <p className="fw-light fs-6 lh-lg">
                  India's rapid economic growth has transformed urban
                  landscapes, but rural areas continue to struggle with poverty
                  and a lack of basic education. The disparity between urban and
                  rural education is a major challenge, with millions of
                  children in villages unable to access proper schooling.
                  Despite the government's vision for Universal Compulsory
                  Primary Education, challenges such as poverty, lack of
                  infrastructure, and the need for child labor prevent many
                  children from receiving an education. Without basic education,
                  these children remain trapped in a cycle of hard labor and low
                  wages, limiting their opportunities for a better future.
                  Education is the key to breaking this cycle, and ATAL
                  FOUNDATION is committed to making quality education accessible
                  to every child in rural India.
                </p>
                <p className="fs-6 lh-lg m-0">
                  ATAL FOUNDATION's Mission for Rural Education{" "}
                </p>
                <p className="fw-light fs-6 lh-lg m-0">
                  At ATAL FOUNDATION, we believe that education is a fundamental
                  right and a powerful tool for social change. Our primary
                  mission is to educate thousands of village children who grow
                  up illiterate, empowering them with knowledge and skills that
                  will enable them to lead better lives.{" "}
                </p>
                <p className="fw-light fs-6 lh-lg">
                  To achieve this, we are launching the Village Model School-a
                  pilot initiative that will create a sustainable, high-quality
                  education system tailored for rural communities.{" "}
                </p>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
      <div className="Educating2 border-bottom py-lg-5">
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
                  village model school: transforming rural<br />
                  education
                </h3>
                <p className="fw-light fs-6 lh-lg m-0">
                  The Village Model School is designed to provide primary and secondary education following the National Open School
                  syllabus, ensuring that children receive a recognized and standardized curriculum.
                </p>
                <p className="fw-light fs-6 lh-lg m-0">Key Focus Areas</p>
                <p className="lh-lg m-0"><span>✔️</span>Technology & Sciences:</p>
                <p className="fw-light m-0">Introducing children to modern technology and scientific concepts.
                  Hands-on learning experiences to spark curiosity and innovation.
                  Digital literacy programs to prepare students for the future.</p>
                <p className="lh-lg m-0"><span>✔️</span>Health and Hygiene:</p>
                <p className="fw-light m-0">Educating students on personal hygiene and sanitation.
                  Awareness programs on nutrition, wellness, and preventive healthcare. Regular health check-ups and medical support.
                </p>
                <p className="lh-lg m-0"><span>✔️</span> Extra-Curricular Activities:</p>
                <p className="fw-light m-0">Encouraging creativity through art, music, and drama.
                  Skill-based programs to develop confidence and communication abilities. Exposure to new ideas through workshops and community projects. </p>
                <p className="lh-lg m-0"><span>✔️</span>Sports and Games:</p>
                <p className="fw-light m-0">Promoting physical fitness and team spirit.
                  Access to sports facilities and professional coaching.
                  Opportunities to participate in inter-school competitions.</p>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OpEducation;
