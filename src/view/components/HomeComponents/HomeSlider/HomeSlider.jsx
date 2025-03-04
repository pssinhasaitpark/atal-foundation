import React from "react";
import "./HomeSlider.css";
import { Card } from "react-bootstrap";
import Slider from "react-slick";
import { Link } from "react-router";
import useHomeSlide from "../../../hooks/useHomeSlide";

const HomeSlider = () => {
  const { data, isLoading, isError } = useHomeSlide();
  if (isLoading)
    return <p className="text-muted fs-2 text-center">Loading HomePage...</p>;
  if (isError && isError)
    return <p className="text-muted fs-2 text-center">Error: {isError}</p>;
  const memorialInfo = data;
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const sliderImages1 = memorialInfo.image1;
  const sliderImages2 = memorialInfo.image2;
  const settings1 = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    speed: 1000,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const settings2 = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 1000,
    arrows: false,
    fade: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className="py-5" style={{ backgroundColor: "#FBFBFB" }}>
        <div className="container">
          <div className="row p-3">
            <div className="col-sm-12 col-md-6 p-0">
              <div className="ps-lg-0 p-lg-5">
                <Card className="custom-card bg-transparent border-0 ps-lg-0 p-lg-5 justify-content-center align-items-center">
                  <Card.Body className="card-style w-100 ">
                    <h5 className="custom-badge badge text-uppercase mb-3">
                      {memorialInfo.badge}
                    </h5>
                    <h3 className="custom-heading heading-font">
                      building a stronger india,
                      <br /> inspired by atal
                    </h3>
                    <p className="custom-subtitle">
                      {memorialInfo.description}
                    </p>
                    <Link to="/about" onClick={scrollToTop}>
                      {" "}
                      <button className="custom-button">Learn About</button>
                    </Link>
                  </Card.Body>
                </Card>
              </div>
            </div>
            <div className="col-sm-12 col-md-6">
              <div className="row">
                <div className="col-sm-12 col-md-6 p-0">
                  <Slider {...settings1}>
                    {sliderImages1.map((image) => (
                      <div key={image._id} className="border-0">
                        <img
                          loading="lazy"
                          className="img-fluid h-100 w-100 card-img-top"
                          src={image.url}
                          alt={image.alt}
                        />
                      </div>
                    ))}
                  </Slider>
                </div>

                <div className="col-sm-12 col-md-6 p-0">
                  <Slider {...settings2}>
                    {sliderImages2.map((image) => (
                      <div key={image._id} className="border-0">
                        <img
                          loading="lazy"
                          className="img-fluid h-100 w-100 card-img-top"
                          src={image.url}
                          alt={image.alt}
                        />
                      </div>
                    ))}
                  </Slider>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeSlider;
