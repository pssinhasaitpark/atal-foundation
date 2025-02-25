import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Container, Card } from "react-bootstrap";
import { Figmaimages1, Figmaimages2, Figmaimages3, Figmaimages4, Figmaimages5, Figmaimages6 } from "../../../../assets/images/index";
import { GoArrowLeft, GoArrowRight } from "../../../../assets/logos/index"
import "./TopProgrammes.css"
const TopProgrammes = () => {
    const swiperRef = useRef(null);
    const handlePrevClick = () => {
        swiperRef.current.swiper.slidePrev();
    };
    const handleNextClick = () => {
        swiperRef.current.swiper.slideNext();
    };

    return (
        <Container className="py-lg-5 py-4">
            <div className="">
                <div className="d-flex justify-content-between align-items-center mb-3">
                    <h2 className="top-programmes-title align-items-center heading-font">
                        Top Programmes
                    </h2>
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
                            <Card.Img loading="lazy" variant="top" src={Figmaimages1} className="top-programmes-image rounded-0" />
                            <Card.Body className="p-0 mt-3">
                                <Card.Text className="fw-normal">
                                    Taking healthcare access to women who need it the most
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Card className="rounded-0 border-0">
                            <Card.Img loading="lazy" variant="top" src={Figmaimages2} className="top-programmes-image rounded-0" />
                            <Card.Body className="p-0 mt-3">
                                <Card.Text className="fw-normal">
                                    Taking healthcare access to women who need it the most
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Card className="rounded-0 border-0">
                            <Card.Img loading="lazy" variant="top" src={Figmaimages3} className="top-programmes-image rounded-0" />
                            <Card.Body className="p-0 mt-3">
                                <Card.Text className="fw-normal">
                                    Taking healthcare access to women who need it the most
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Card className="rounded-0 border-0">
                            <Card.Img loading="lazy" variant="top" src={Figmaimages4} className="top-programmes-image rounded-0" />
                            <Card.Body className="p-0 mt-3">
                                <Card.Text className="fw-normal">
                                    Taking healthcare access to women who need it the most
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Card className="rounded-0 border-0">
                            <Card.Img loading="lazy" variant="top" src={Figmaimages5} className="top-programmes-image rounded-0" />
                            <Card.Body className="p-0 mt-3">
                                <Card.Text className="fw-normal">
                                    Taking healthcare access to women who need it the most
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Card className="rounded-0 border-0">
                            <Card.Img loading="lazy" variant="top" src={Figmaimages6} className="top-programmes-image rounded-0" />
                            <Card.Body className="p-0 mt-3">
                                <Card.Text className="fw-normal">
                                    Taking healthcare access to women who need it the most
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </SwiperSlide>
                </Swiper>
            </div>
        </Container>
    );
};

export default TopProgrammes;
