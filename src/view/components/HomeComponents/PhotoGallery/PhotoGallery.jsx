import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Container, Card } from "react-bootstrap";
import { Figmaimages1, Figmaimages2, Figmaimages3, Figmaimages4, Figmaimages5, Figmaimages6 } from "../../../../assets/images/index";
import { GoArrowLeft, GoArrowRight } from "../../../../assets/logos/index"
import "./PhotoGallery.css"
const PhotoGallery = () => {
    const swiperRef = useRef(null);
    const handlePrevClick = () => {
        swiperRef.current.swiper.slidePrev();
    };
    const handleNextClick = () => {
        swiperRef.current.swiper.slideNext();
    };

    return (
        <div style={{ backgroundColor: "#FBFBFB" }}>

            <Container className="py-lg-4" style={{ backgroundColor: "#FBFBFB" }}>
                <div className="">
                    <div className="d-flex justify-content-between align-items-center mb-3">
                        <h3 className="photo-gallery-title align-items-center heading-font">
                            Photo Gallery
                        </h3>
                        <span>
                            <button
                                className="btn px-3 fs-5"
                                onClick={handlePrevClick}
                            >
                                <GoArrowLeft />
                            </button>
                            <button
                                className="btn px-3 fs-5"
                                onClick={handleNextClick}
                            >
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
                                slidesPerView: 4,
                            },
                        }}
                    >
                        <SwiperSlide>
                            <Card className="rounded-0 border-0">
                                <Card.Img variant="top" src={Figmaimages1} className="top-programmes-image rounded-0" />
                            </Card>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Card className="rounded-0 border-0">
                                <Card.Img variant="top" src={Figmaimages2} className="top-programmes-image rounded-0" />
                            </Card>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Card className="rounded-0 border-0">
                                <Card.Img variant="top" src={Figmaimages3} className="top-programmes-image rounded-0" />

                            </Card>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Card className="rounded-0 border-0">
                                <Card.Img variant="top" src={Figmaimages4} className="top-programmes-image rounded-0" />
                            </Card>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Card className="rounded-0 border-0">
                                <Card.Img variant="top" src={Figmaimages5} className="top-programmes-image rounded-0" />
                            </Card>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Card className="rounded-0 border-0">
                                <Card.Img variant="top" src={Figmaimages6} className="top-programmes-image rounded-0" />
                            </Card>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </Container>
        </div>
    );
};

export default PhotoGallery;
