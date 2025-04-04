import React from "react";
import { Card } from "react-bootstrap";
import useAboutUs from "../hooks/useAboutUs";
const AboutUs = () => {
  const { data, isLoading, status, isError } = useAboutUs();
  if (isLoading) return <div className="spinner"></div>;
  if (status === "failed") return <div>Error: {isError}</div>;
  if (data === undefined) {
    return <h4 className="py-5 my-5 text-center">No Data Available</h4>;
  }

  const aboutUsData = data?.sections;
  const aboutUsBanner = data?.banner;

  return (
    <div className="App container py-5">
      <div className="pages-banner-img">
        <img
          loading="lazy"
          src={aboutUsBanner}
          alt=""
          className="img-fluid w-100 h-100 object-fit-cover"
        />
      </div>

      <nav aria-label="custom-breadcrumb" className="pt-5">
        <ol className="custom-breadcrumb list-unstyled d-flex align-items-end mb-0">
          <li className="custom-breadcrumb-item">
            <a
              href="about"
              className="heading-font text-decoration-none text-dark"
            >
              About Us
            </a>
          </li>
          <li
            className="custom-breadcrumb-item active heading-font text-muted ps-1"
            aria-current="page"
          >
            Our Soul
          </li>
        </ol>
      </nav>
      <div className="">
        {aboutUsData?.map((data, index) => (
          <div key={index} className="row py-lg-5 border-bottom ">
            <div className="col-sm-4">
              <img
                loading="lazy"
                src={data.image}
                alt={`${data.title}`}
                className="img-fluid w-100 h-100 object-fit-cover "
              />
            </div>
            <div className="col-sm-8">
              <Card className="custom-card bg-transparent border-0 justify-content-center align-items-center">
                <Card.Body className="card-style p-0 ps-lg-5">
                  <h3 className="fw-bold fs-1 heading-font">{data.title}</h3>
                  <div
                    className="fw-light fs-6 lh-lg"
                    dangerouslySetInnerHTML={{
                      __html: data.description,
                    }}
                  />
                </Card.Body>
              </Card>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutUs;
