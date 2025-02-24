import React from "react";
import { Card } from "react-bootstrap";
import {
  AboutUsBanner,
  AboutUsImgs1,
  AboutUsImgs2,
} from "../../../assets/images/index";
const AboutUsComponent = () => {
  return (
    <div className="container py-5">
      <div className="pages-banner-img">
        <img
          src={AboutUsBanner}
          alt=""
          className="img-fluid w-100 h-100 object-fit-cover"
        />
      </div>
      <nav aria-label="custom-breadcrumb" className="py-5">
        <ol className="custom-breadcrumb list-unstyled d-flex align-items-end">
          <li className="custom-breadcrumb-item fs-2">
            <a href="/" className="heading-font text-decoration-none text-dark">
              About Us
            </a>
          </li>
          <li
            className="custom-breadcrumb-item active fs-3 heading-font text-muted ps-1"
            aria-current="page"
          >
            Our Soul
          </li>
        </ol>
      </nav>
      <div className="AboutSection1 border-bottom py-lg-5">
        <div className="row align-items-stretch">
          <div className="col-md-4 d-flex">
            <img src={AboutUsImgs2} alt="Children learning" className="img-fluid w-100 h-100 object-fit-cover" />
          </div>
          <div className="col-md-8 d-flex flex-column justify-content-center">
            <Card className="custom-card bg-transparent border-0 justify-content-center align-items-center">
              <Card.Body className="card-style p-0 ps-5">
                <h3 className="fw-bold fs-1 heading-font">
                  building a responsible nation:
                  <br />
                  the role of a good citizen
                </h3>
                <p className="fw-light fs-6 lh-lg">
                  <div class="">
                    <h5 class="">🌍 A Global Reach</h5>
                    <p>
                      Our vision goes beyond borders. We have successfully
                      expanded our operations internationally, bringing
                      world-class services to clients across different
                      continents. With a strategic approach and a
                      customer-centric mindset, we continue to grow in key
                      global markets, fostering collaborations and
                      strengthening our impact.
                    </p>
                  </div>

                  <div class="">
                    <h5 class="">🏢 Nationwide Coverage</h5>
                    <p>
                      From metropolitan cities to emerging markets, our
                      presence spans across major regions within the country.
                      We are dedicated to serving diverse communities by
                      delivering high-quality products and services tailored
                      to meet local needs. Our strong network of offices,
                      service hubs, and partners ensures that we are always
                      within reach.
                    </p>
                  </div>

                  <div class="">
                    <h5 class="">
                      📍 Strategic Locations for Maximum Efficiency
                    </h5>
                    <p>
                      To provide uninterrupted service and maintain
                      operational excellence, our locations are strategically
                      positioned for efficiency and accessibility. Our
                      offices, warehouses, and distribution centers are
                      located in key regions, enabling us to deliver timely
                      solutions and enhance customer experiences.
                    </p>
                  </div>

                  <div class="">
                    <h5 class="">💻 A Growing Digital Presence</h5>
                    <p>
                      In today's digital era, physical presence is
                      complemented by a robust online presence. Through our
                      digital platforms, we connect with customers globally,
                      offering convenient access to our products and services.
                      Whether through e-commerce, social media, or digital
                      support, we ensure that our customers can engage with us
                      anytime, anywhere.
                    </p>
                  </div>
                </p>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
      <div className="AboutSection2 border-bottom py-lg-5">
        <div className="row align-items-stretch">
          <div className="col-md-4 d-flex">
            <img src={AboutUsImgs1} alt="Children learning" className="img-fluid w-100 h-100" />
          </div>
          <div className="col-md-8 d-flex flex-column justify-content-center">
            <Card className="custom-card bg-transparent border-0 justify-content-center align-items-center">
              <Card.Body className="card-style p-lg-5">
                <h3 className="fw-bold fs-1 heading-font">
                  our presence: expanding boundaries,
                  <br />
                  connecting the world
                </h3>
                <p className="fw-light fs-6 lh-lg">
                  A nation's progress and prosperity depend on its citizens.
                  To create a strong, united, and progressive India, it is
                  essential that every individual adopts the good norms of
                  responsible citizenship and works towards spreading the
                  spirit of nationalism. What Does It Mean to Be a Good
                  Citizen? Being a good citizen goes beyond just obeying laws;
                  it involves contributing positively to society, respecting
                  others, and upholding the values of democracy, equality, and
                  justice. Some key aspects of good citizenship include:
                </p>
                <ul className="fw-light fs-6 lh-lg">
                  <li>
                    {" "}
                    Respect for the Constitution and Laws: A responsible
                    citizen follows the laws of the land, respects the
                    Constitution, and works towards maintaining peace and
                    order.
                  </li>
                  <li>
                    Active Participation in Nation-Building: Citizens should
                    engage in activities that contribute to the country's
                    development, such as education, cleanliness drives, and
                    volunteering for social causes.
                  </li>
                  <li>
                    Promoting Unity and Harmony: In a diverse country like
                    India, fostering unity and mutual respect among different
                    communities is essential for national progress.
                  </li>
                  <li>
                    Upholding Honesty and Integrity: Being truthful, fair, and
                    ethical in everyday dealings strengthens society and
                    ensures justice and trust among people.
                  </li>
                  <li>
                    Civic Responsibility: Small acts like voting, paying taxes
                    honestly, keeping the environment clean, and helping those
                    in need make a significant impact on the nation's
                    well-being.
                  </li>
                </ul>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsComponent;
