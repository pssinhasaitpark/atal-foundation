import React from "react";
import { Card } from "react-bootstrap";
import useOurProgram from "../hooks/useOurProgram";
import { useParams } from "react-router";
const CardComponent = () => {
  const { category } = useParams();
  const { data, isLoading, isError, status } = useOurProgram();
  let filterData = [];
  if (!isLoading && !isError) {
    filterData = data.filter((item) => item.category === `${category}`);
  }

  if (isLoading) return <div className="spinner"></div>;
  if (status === "failed") return <div>Error: {isError}</div>;
  if (data === undefined)
    return <h4 className="py-5 my-5 text-center">No Data Available</h4>;

  const dynamicData = filterData[0]?.details;
  const bannerImage = filterData[0]?.banner;

  return (
    <div className="App container py-5">
      <div className="pages-banner-img ">
        <img
          loading="lazy"
          src={bannerImage}
          alt={`${filterData[0].category}-banner`}
          className="h-100 w-100 object-fit-cover"
        />
      </div>

      <nav aria-label="custom-breadcrumb" className="pt-5">
        <ol className="custom-breadcrumb list-unstyled d-flex align-items-end">
          <li className="custom-breadcrumb-item fs-2">
            <a
              href={`${filterData[0].category}`}
              className="heading-font text-decoration-none text-dark"
            >
              Our Programmes
            </a>
          </li>
          <li
            className="custom-breadcrumb-item active fs-3 heading-font text-muted ps-1"
            aria-current="page"
          >
            {filterData[0].category}
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
                className="img-fluid w-100 object-fit-cover"
              />
            </div>
            <div className="col-md-8 d-flex flex-column justify-content-center">
              <Card className="custom-card bg-transparent border-0 justify-content-center align-items-center">
                <Card.Body className="card-style p-0 ps-5">
                  <h3 className="fw-bold fs-1 heading-font ">{data.title}</h3>
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

export default CardComponent;
