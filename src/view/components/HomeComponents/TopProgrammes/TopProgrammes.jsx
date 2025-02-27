import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Container, Card } from "react-bootstrap";
import { LuMoveLeft, LuMoveRight } from "../../../../assets/logos/index";
import { Figmaimages1, Figmaimages2, Figmaimages3, Figmaimages4, Figmaimages5, Figmaimages6 } from "../../../../assets/images/index";
import "./TopProgrammes.css";
import { Link } from "react-router";
const programData = [
    {
        id: 1,
        image: Figmaimages1,
        description: "Educating the Rural India: India's rural areas have been left behind in ...",
        url: "OpEducation"
    },
    {
        id: 2,
        image: Figmaimages2,
        url: "OpHealthcare",
        description: "Healthcare : Street and Working Children live and work in extremely unhygienic..."
    },
    {
        id: 3,
        image: Figmaimages3,
        url: "OpGirlChild",
        description: "Girl Child&women Empowerment: At Atal Foundation, we believe empowering..."
    },
    {
        id: 4,
        image: Figmaimages4,
        url: "OpCivicDriven",
        description: "Civic Driven Change: At Atal Foundation, we believe in the power of collective..."
    },
    {
        id: 5,
        image: Figmaimages5,
        url: "OpGirlChild",
        description: "Girl Child&women Empowerment: At Atal Foundation, we believe empowering..."
    },
    {
        id: 6,
        image: Figmaimages6,
        url: "OpCivicDriven",
        description: "Civic Driven Change: At Atal Foundation, we believe in the power of collective..."
    }
];

const TopProgrammes = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };
    const swiperRef = useRef(null);

    const handlePrevClick = () => {
        swiperRef.current.swiper.slidePrev();
    };

    const handleNextClick = () => {
        swiperRef.current.swiper.slideNext();
    };

    return (
        <Container className="pt-lg-5 py-lg-4 py-4 border-bottom">
            <div className="">
                <div className="d-flex justify-content-between align-items-center mb-3">
                    <h2 className="top-programmes-title align-items-center heading-font">
                        Top Programmes
                    </h2>
                    <span>
                        <button
                            className="btn px-3 py-0 fs-2 border-0"
                            onClick={handlePrevClick}
                        >
                            <LuMoveLeft />
                        </button>
                        <button
                            className="btn px-3 py-0 fs-2 border-0"
                            onClick={handleNextClick}
                        >
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
                            slidesPerView: 4,
                        },
                    }}
                >
                    {programData.map((program) => (
                        <SwiperSlide key={program.id} className="top-programme-slider-card me-3">
                            <Link to={`/${program.url}`} onClick={scrollToTop} className="text-decoration-none">
                                <Card className="rounded-0 border-0">
                                    <Card.Img
                                        loading="lazy"
                                        variant="top"
                                        src={program.image}
                                        className="top-programmes-image rounded-0"
                                    />
                                    <Card.Body className="p-0 mt-3">
                                        <Card.Text className="heading-font fw-normal ">
                                            {program.description}
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Link>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </Container>
    );
};

export default TopProgrammes;
