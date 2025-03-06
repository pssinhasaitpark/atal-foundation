import React from "react";
import { AboutUsBanner } from "../../../assets/images/index";
import { Card } from "react-bootstrap";
import useAboutUs from "../../hooks/useAboutUs";
const AboutUsComponent = () => {
  const { data, isLoading, isError } = useAboutUs();
  if (isLoading)
    return (
    //  <LoadingSpinner/>a
    <p>ladoing</p>
    );
  if (isError && isError)
    return <p className="text-muted fs-2 text-center">Error: {isError}</p>;

  const aboutUsData = data.sections;
  const aboutUsBanner = AboutUsBanner || data.banner;

  return (
    <div className="container py-5">
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
            <a href="/" className="heading-font text-decoration-none text-dark">
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
                alt=""
                className="img-fluid w-100 h-100 object-fit-cover"
              />
            </div>
            <div className="col-sm-8">
              <Card className="custom-card bg-transparent border-0 justify-content-center align-items-center">
                <Card.Body className="card-style p-0 ps-lg-5">
                  <h3 className="fw-bold fs-1 heading-font w-75">
                    {data.title}
                  </h3>
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

export default AboutUsComponent;
