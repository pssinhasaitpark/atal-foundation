import React from "react";
import "./HomeSlider.css";
import { Card } from "react-bootstrap";
import Slider from "react-slick";
import { HomeSlider1, HomeSlider2, HomeSlider3, HomeSlider4 } from "../../../../assets/images/index";

const HomeSlider = () => {
    const memorialInfo = {
        title: "Building A Stronger India, Inspired By Atal",
        subtitle: "with two decades of impact in literacy, health, disability, and livelihoods, atalfoundation now prioritizes education for systemic change, while other initiatives continue as development support programs.",
        badge: "Atal Foundation",
    };
    const sliderImages1 = [
        { src: HomeSlider1, alt: "" },
        { src: HomeSlider2, alt: "" },

    ];
    const sliderImages2 = [
        { src: HomeSlider3, alt: "" },
        { src: HomeSlider4, alt: "" },
    ];
    const settings1 = {
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
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
            <div className="container-fluid px-0 mb-4">
                <div className="row g-0">
                    <div className="col-sm-12 col-md-6 p-0">
                        <div className="background-image p-lg-5">
                            <Card className="custom-card bg-transparent border-0 p-lg-5 justify-content-center align-items-center">
                                <Card.Body className="card-style w-75 py-lg-5 ">
                                    <h5 className="home-badge badge border text-dark rounded-0 fs-6 fw-normal mb-3 text-uppercase">
                                        {memorialInfo.badge}
                                    </h5>
                                    <h3 className="fw-bold fs-1 heading-font">
                                        {memorialInfo.title}
                                    </h3>
                                    <p className="fw-light fs-6 lh-lg">
                                        {memorialInfo.subtitle}
                                    </p>
                                    <button className="btn btn-primary fs-3 px-4">Learn About</button>
                                </Card.Body>
                            </Card>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-3 p-0">
                        <Slider {...settings1}>
                            {sliderImages1.map((image, index) => (
                                <div key={index} className="border-0">
                                    <img className="card-img-top" src={image.src} alt={image.alt} />
                                </div>
                            ))}
                        </Slider>
                    </div>

                    <div className="col-sm-12 col-md-3 p-0">
                        <Slider {...settings2}>
                            {sliderImages2.map((image, index) => (
                                <div key={index} className="border-0">
                                    <img className="card-img-top" src={image.src} alt={image.alt} />
                                </div>
                            ))}
                        </Slider>
                    </div>

                </div>
            </div>
        </>
    );
};

export default HomeSlider;
