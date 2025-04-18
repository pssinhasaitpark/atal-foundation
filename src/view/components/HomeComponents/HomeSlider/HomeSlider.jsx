import React from "react";
import "./HomeSlider.css";
import { Card } from "react-bootstrap";
import Slider from "react-slick";
import { Link } from "react-router";
import {
  HomeSlider1,
  HomeSlider2,
  HomeSlider3,
  HomeSlider4,
} from "../../../../assets/images/index";
const data = {
  badge: "ATAL FOUNDATION",
  title: "Building a Stronger <br/> India, Inspired by Atal ji",
  description:"The Atal Foundation was established with a profound commitment to serve humanity and the nation through socio-cultural initiatives, inspired by the esteemed philosophy of Bharat Ratna, the Hon'ble Prime Minister of India, Shri Atal Bihari Vajpayee. Guided by his visionary thinking, the Foundation's core ethos is to ignite the spirit of service, motivation, and inspiration in individuals, fostering a deep sense of humanity and national pride.",
  image1: [{ url: HomeSlider1 }, { url: HomeSlider2 }],
  image2: [{ url: HomeSlider3 }, { url: HomeSlider4 }],
};
const HomeSlider = () => {
  const memorialInfo = data;
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const sliderImages1 = memorialInfo?.image1;
  const sliderImages2 = memorialInfo?.image2;
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
  const stripHTML = (htmlString) => {
    const doc = new DOMParser().parseFromString(htmlString, "text/html");
    return doc.body.textContent || "";
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
              <div className="pt-lg-5">
                <Card className="custom-card bg-transparent border-0 ps-lg-0 justify-content-center align-items-center">
                  <Card.Body className="card-style w-100 ">
                    <h5 className="custom-badge badge text-uppercase mb-3">
                      {memorialInfo?.badge}
                    </h5>
                    <h3 className="custom-heading heading-font">
                      {stripHTML(memorialInfo?.title)}
                    </h3>
                    <p className="custom-subtitle my-3">
                      {memorialInfo?.description}
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
              <div className="row row-cols-2">
                <div className="col-sm-12 col-md-6 p-0">
                  <Slider {...settings1}>
                    {sliderImages1?.map((image, index) => (
                      <div key={`${image?._id} ${index}`} className="border-0">
                        <img
                          loading="lazy"
                          className="img-fluid h-100 w-100 card-img-top"
                          src={image?.url}
                          alt={image?.alt || "atalimg"}
                        />
                      </div>
                    ))}
                  </Slider>
                </div>
                <div className="col-sm-12 col-md-6 p-0">
                  <Slider {...settings2}>
                    {sliderImages2?.map((image, index) => (
                      <div key={`${image?._id} ${index}`} className="border-0">
                        <img
                          loading="lazy"
                          className="img-fluid h-100 w-100 card-img-top"
                          src={image?.url}
                          alt={image?.alt || "atalimg"}
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
