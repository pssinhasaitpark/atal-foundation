import React from "react";
import { AboutUsBanner } from "../../../assets/images/index";
import { Card } from "react-bootstrap";
import useAboutUs from '../../hooks/useAboutUs';
const AboutUsComponent = () => {

  const { data, isLoading, isError } = useAboutUs();

  if (isLoading) return <p className="text-muted fs-2 text-center">Loading About Us data...</p>;
  if (isError && isError) return <p>Error: {isError}</p>;

  const aboutUsData = data.sections
  const aboutUsBanner = AboutUsBanner || data.banner;
  // const dynamicData = [
  //   {
  //     image: AboutUsImgs2,
  //     title: "Educating Rural India: A Step Towards a Brighter Future",
  //     description: `India's rapid economic growth has transformed urban landscapes, but rural areas continue to struggle with poverty and a lack of basic education. The disparity between urban and rural education is a major challenge, with millions of children in villages unable to access proper schooling. Despite the government's vision for Universal Compulsory Primary Education, challenges such as poverty, lack of infrastructure, and the need for child labor prevent many children from receiving an education. Without basic education, these children remain trapped in a cycle of hard labor and low wages, limiting their opportunities for a better future. Education is the key to breaking this cycle, and ATAL FOUNDATION is committed to making quality education accessible to every child in rural India.`,
  //   },
  //   {
  //     image: AboutUsImgs2,
  //     title: "Transforming Education for All",
  //     description: `Education is the foundation of progress. The ATAL FOUNDATION focuses on ensuring every child, especially in rural areas, has access to quality education. Our goal is to break barriers like poverty and lack of infrastructure that prevent children from reaching their full potential. The future of India lies in educating its rural children and providing them with the resources to succeed in a rapidly changing world.`,
  //   },
  //   {
  //     image: AboutUsImgs2,
  //     title: "Building a Better Tomorrow Through Education",
  //     description: `Rural education is essential for the growth and development of India's rural communities. The ATAL FOUNDATION strives to provide innovative educational solutions that cater to the unique needs of rural children. We believe that education is a powerful tool to eliminate poverty, create equality, and provide a brighter future for every child in rural India.`,
  //   },
  // ];

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
        {aboutUsData.map((data, index) => (
          <div
            key={index}
            className="py-lg-5 border-bottom row align-items-stretch"
          >
            <div className="col-md-4 d-flex">
              <img
                loading="lazy"
                src={data.image}
                alt=""
                className="img-fluid w-100 h-100 object-fit-cover"
              />
            </div>
            <div className="col-md-8 d-flex flex-column justify-content-center">
              <Card className="custom-card bg-transparent border-0 justify-content-center align-items-center">
                <Card.Body className="card-style p-0 ps-5">
                  <h3 className="fw-bold fs-1 heading-font w-75">
                    {data.title}
                  </h3>
                  <div className="fw-light fs-6 lh-lg"
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
