import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Container } from "react-bootstrap";
import {
    Figmaimages1,
    Figmaimages2,
    Figmaimages3,
    Figmaimages4,

} from "../../../../assets/images/index";
import { GoArrowLeft, GoArrowRight } from "../../../../assets/logos/index";
const OurNews = () => {
    const swiperRef = useRef(null);
    const handlePrevClick = () => {
        swiperRef.current.swiper.slidePrev();
    };
    const handleNextClick = () => {
        swiperRef.current.swiper.slideNext();
    };

    return (
        <div style={{ backgroundColor: "#FBFBFB" }}>
            <Container className="py-lg-4 py-4" style={{ backgroundColor: "#FBFBFB" }}>
                <div className="">
                    <div className="d-flex justify-content-between align-items-center mb-3">
                        <h2 className="our-news-title align-items-center heading-font">
                            Our News
                        </h2>
                        <span>
                            <button className="btn px-3 fs-5" onClick={handlePrevClick}>
                                <GoArrowLeft />
                            </button>
                            <button className="btn px-3 fs-5" onClick={handleNextClick}>
                                <GoArrowRight />
                            </button>
                        </span>
                    </div>
                    <Swiper
                        ref={swiperRef}
                        spaceBetween={30}
                        modules={[]}
                        className="mySwiper mb-4"
                        breakpoints={{
                            400: {
                                slidesPerView: 1,
                            },
                            768: {
                                slidesPerView: 2,
                            },
                            1024: {
                                slidesPerView: 2,
                            },
                        }}
                    >
                        <SwiperSlide>
                            <div className="row">
                                <div className="col-sm-5">
                                    <img loading="lazy" src={Figmaimages1} alt="" className="w-100 h-100 object-fit-cover" />
                                </div>
                                <div className="col-sm-7 px-4 py-3">
                                    <p className="fs-4 heading-font fw-bold">
                                        August 15 <br /> India Independence Day
                                    </p>
                                    <p className="heading-font">
                                        On August 15, India celebrates its 77th Independence Day,
                                        marking the nation's freedom from British rule in 1947-a day
                                        of pride, reflection, and unity for all Indians.
                                    </p>
                                    <a href="/" className="text-decoration-none text-warning-color">More About</a>
                                </div>
                            </div>

                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="row">
                                <div className="col-sm-5">
                                    <img loading="lazy" src={Figmaimages2} alt="" className="w-100 h-100 object-fit-cover" />
                                </div>
                                <div className="col-sm-7 px-4 py-3">
                                    <p className="fs-4 heading-font fw-bold">
                                        October 17 <br /> Anti Poverty Day
                                    </p>
                                    <p className="heading-font">
                                        On August 15, India celebrates its 77th Independence Day,
                                        marking the nation's freedom from British rule in 1947-a day
                                        of pride, reflection, and unity for all Indians.
                                    </p>
                                    <a href="/" className="text-decoration-none text-warning-color">More About</a>
                                </div>
                            </div>

                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="row">
                                <div className="col-sm-5">
                                    <img loading="lazy" src={Figmaimages3} alt="" className="w-100 h-100 object-fit-cover" />
                                </div>
                                <div className="col-sm-7 px-4 py-3">
                                    <p className="fs-4 heading-font fw-bold">
                                        August 15 <br /> India Independence Day
                                    </p>
                                    <p className="heading-font">
                                        On August 15, India celebrates its 77th Independence Day,
                                        marking the nation's freedom from British rule in 1947-a day
                                        of pride, reflection, and unity for all Indians.
                                    </p>
                                    <a href="/" className="text-decoration-none text-warning-color">More About</a>
                                </div>
                            </div>

                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="row">
                                <div className="col-sm-5">
                                    <img loading="lazy" src={Figmaimages4} alt="" className="w-100 h-100 object-fit-cover" />
                                </div>
                                <div className="col-sm-7 px-4 py-3">
                                    <p className="fs-4 heading-font fw-bold">
                                        August 15 <br /> India Independence Day
                                    </p>
                                    <p className="heading-font">
                                        On August 15, India celebrates its 77th Independence Day,
                                        marking the nation's freedom from British rule in 1947-a day
                                        of pride, reflection, and unity for all Indians.
                                    </p>
                                    <a href="/" className="text-decoration-none text-warning-color">More About</a>
                                </div>
                            </div>

                        </SwiperSlide>


                    </Swiper>
                </div>
            </Container>
        </div>
    );
};

export default OurNews;
