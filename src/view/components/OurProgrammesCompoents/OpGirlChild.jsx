import React from "react";
import { Card } from "react-bootstrap";
import useOurProgram from "../../hooks/useOurProgram";

const OpGirlChild = () => {
  const { data, isLoading, isError } = useOurProgram();
  let girlChildData = [];
  if (!isLoading && !isError) {
    girlChildData = data.filter(
      (item) => item.category === "Girl Child & Women Empowerment"
    );
  }
  if (isLoading)
    return <p className="text-muted fs-2 text-center">Loading Data...</p>;
  if (isError && isError)
    return <p className="text-muted fs-2 text-center">Error: {isError}</p>;
  const dynamicData = girlChildData[0].details;
  const bannerImage = girlChildData[0].banner;

  return (
    <div className="container py-5">
      <div className="pages-banner-img">
        <img
          loading="lazy"
          src={bannerImage}
          alt=""
          className="img-fluid w-100 h-100 object-fit-cover"
        />
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
            {girlChildData[0].category}
          </li>
        </ol>
      </nav>
      <div className="">
        {dynamicData.map((data, index) => (
          <div
            key={index}
            className="py-lg-5 border-bottom row align-items-stretch"
          >
            <div className="col-md-4 d-flex">
              <img
                loading="lazy"
                src={data.images[0].url}
                alt={data.title}
                className="img-fluid w-100 h-100 object-fit-cover"
              />
            </div>
            <div className="col-md-8 d-flex flex-column justify-content-center">
              <Card className="custom-card bg-transparent border-0 justify-content-center align-items-center">
                <Card.Body className="card-style p-0 ps-5">
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

export default OpGirlChild;
