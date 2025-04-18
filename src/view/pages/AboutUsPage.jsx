import React, { useState } from "react";
import { Card } from "react-bootstrap";
import useAboutUs from "../hooks/useAboutUs";
import LightBox from "../components/LightBox";
const AboutUs = () => {
  const [photoIndex, setPhotoIndex] = useState(0);
  const [open, setOpen] = useState(false);
  const { data, isLoading, status, isError } = useAboutUs();
  if (isLoading) return <div className="spinner"></div>;
  if (status === "failed") return <div>Error: {isError}</div>;
  if (data === undefined) {
    return <h4 className="py-5 my-5 text-center">No Data Available</h4>;
  }

  const aboutUsData = data?.sections;
  const aboutUsImgs = aboutUsData.map((img, index) => img.image);
  const aboutUsBanner = data?.banner;

  return (
    <div className="App container py-5">
      <div className="pages-banner-img">
        <img
          loading="lazy"
          src={`${process.env.REACT_APP_BASE_IMG_URL + aboutUsBanner}`}
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
                onClick={() => {
                  setPhotoIndex(index);
                  setOpen(true);
                }}
                src={`${process.env.REACT_APP_BASE_IMG_URL + data.image}`}
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
      <LightBox
        open={open}
        onClose={() => setOpen(false)}
        photoIndex={photoIndex}
        images={aboutUsImgs}
        source={process.env.REACT_APP_BASE_IMG_URL}
      />
    </div>
  );
};

export default AboutUs;
