import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom"; // Import Link for navigation
import {
    Figmaimages1,
    Figmaimages2,
    Figmaimages3,
    Figmaimages4,
} from "../../../../assets/images/index";
import { LuMoveLeft, LuMoveRight } from "../../../../assets/logos/index";

export const newsData = [
    {
        id: 1,
        title: "August 15 - India Independence Day",
        description: "On August 15, India celebrates its 77th Independence Day, marking the nation's freedom from British rule in 1947—a day of pride, reflection, and unity for all Indians.",
        image: Figmaimages1,
    },
    {
        id: 2,
        title: "October 17 - Anti Poverty Day",
        description: "On October 17, we observe Anti Poverty Day to raise awareness and engage people in fighting poverty and hunger across the globe.",
        image: Figmaimages2,
    },
    {
        id: 3,
        title: "August 15 - India Independence Day",
        description: "On August 15, India celebrates its 77th Independence Day, marking the nation's freedom from British rule in 1947—a day of pride, reflection, and unity for all Indians.",
        image: Figmaimages3,
    },
    {
        id: 4,
        title: "August 15 - India Independence Day",
        description: "On August 15, India celebrates its 77th Independence Day, marking the nation's freedom from British rule in 1947—a day of pride, reflection, and unity for all Indians.",
        image: Figmaimages4,
    },
];
const OurNews = () => {
    const swiperRef = useRef(null);
    const handlePrevClick = () => {
        swiperRef.current.swiper.slidePrev();
    };
    const handleNextClick = () => {
        swiperRef.current.swiper.slideNext();
    };
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };


    return (
        <div style={{ backgroundColor: "#FBFBFB" }}>
            <Container className="py-lg-4 py-4" style={{ backgroundColor: "#FBFBFB" }}>
                <div className="">
                    <div className="d-flex justify-content-between align-items-center mb-3">
                        <h2 className="top-programmes-title our-news-title align-items-center heading-font">
                            Our News
                        </h2>
                        <span>
                            <button className="btn px-3 py-0 fs-2 border-0" onClick={handlePrevClick}>
                                <LuMoveLeft />
                            </button>
                            <button className="btn px-3 py-0 fs-2 border-0" onClick={handleNextClick}>
                                <LuMoveRight />
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
                        {newsData.map((news) => (
                            <SwiperSlide key={news.id}>
                                <div className="row">
                                    <div className="col-sm-5">
                                        <img
                                            loading="lazy"
                                            src={news.image}
                                            alt={news.title}
                                            className="w-100 h-100 object-fit-cover"
                                        />
                                    </div>
                                    <div className="col-sm-7 px-4 py-3">
                                        <p className="fs-4 heading-font fw-bold">
                                            {news.title}
                                        </p>
                                        <p className="heading-font">{news.description}</p>
                                        <Link to={`/news/${news.id}`} onClick={scrollToTop}
                                            className="text-decoration-none text-warning-color align-items-center d-flex">
                                            More About <LuMoveRight className="mx-2" />
                                        </Link>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </Container>
        </div>
    );
};

export default OurNews;
