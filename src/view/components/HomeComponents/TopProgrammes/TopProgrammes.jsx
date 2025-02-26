import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Container, Card } from "react-bootstrap";
import { GoArrowLeft, GoArrowRight } from "../../../../assets/logos/index";
import { Figmaimages1, Figmaimages2, Figmaimages3, Figmaimages4, Figmaimages5, Figmaimages6 } from "../../../../assets/images/index";
import "./TopProgrammes.css";

const programData = [
    {
        id: 1,
        image: Figmaimages1,
        description: "Educating the Rural India: India's rural areas have been left behind in ..."
    },
    {
        id: 2,
        image: Figmaimages2,
        description: "Healthcare : Street and Working Children live and work in extremely unhygienic..."
    },
    {
        id: 3,
        image: Figmaimages3,
        description: "Girl Child&women Empowerment: At Atal Foundation, we believe empowering..."
    },
    {
        id: 4,
        image: Figmaimages4,
        description: "Civic Driven Change: At Atal Foundation, we believe in the power of collective..."
    },
    {
        id: 5,
        image: Figmaimages5,
        description: "Girl Child&women Empowerment: At Atal Foundation, we believe empowering..."
    },
    {
        id: 6,
        image: Figmaimages6,
        description: "Civic Driven Change: At Atal Foundation, we believe in the power of collective..."
    }
];

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
                    {programData.map((program) => (
                        <SwiperSlide key={program.id}>
                            <Card className="rounded-0 border-0">
                                <Card.Img
                                    loading="lazy"
                                    variant="top"
                                    src={program.image}
                                    className="top-programmes-image rounded-0"
                                />
                                <Card.Body className="p-0 mt-3">
                                    <Card.Text className="fw-normal">
                                        {program.description}
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </Container>
    );
};

export default TopProgrammes;
