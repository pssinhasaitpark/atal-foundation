import React from "react";
import "./HomeSlider.css";
import { Card } from "react-bootstrap";
import Slider from "react-slick";
import { HomeSlider1, HomeSlider2, HomeSlider3, HomeSlider4 } from "../../../../assets/images/index";
import { Link } from "react-router";
const HomeSlider = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      };
    const memorialInfo = {
        title: "building a stronger india, inspired by atal",
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
                                            building a stronger india,<br /> inspired by atal
                                        </h3>
                                        <p className="custom-subtitle">
                                            {memorialInfo.subtitle}
                                        </p>
                                       <Link to="/about"  onClick={scrollToTop}> <button className="custom-button" >Learn About</button></Link>
                                    </Card.Body>
                                </Card>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-6">
                            <div className="row">
                                <div className="col-sm-12 col-md-6 p-0">
                                    <Slider {...settings1}>
                                        {sliderImages1.map((image, index) => (
                                            <div key={index} className="border-0">
                                                <img loading="lazy" className=" img-fluid h-100 w-100 card-img-top" src={image.src} alt={image.alt} />
                                            </div>
                                        ))}
                                    </Slider>
                                </div>

                                <div className="col-sm-12 col-md-6 p-0">
                                    <Slider {...settings2}>
                                        {sliderImages2.map((image, index) => (
                                            <div key={index} className="border-0">
                                                <img loading="lazy" className="img-fluid h-100 w-100 card-img-top" src={image.src} alt={image.alt} />
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
