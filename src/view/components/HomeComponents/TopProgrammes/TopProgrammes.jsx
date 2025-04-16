import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Container, Card } from "react-bootstrap";
import { LuMoveLeft, LuMoveRight } from "../../../../assets/logos/index";

import "./TopProgrammes.css";
import { Link } from "react-router";
import useOurProgram from "../../../hooks/useOurProgram";

const TopProgrammes = () => {
  const swiperRef = useRef(null);
  const { data, isLoading, isError, status } = useOurProgram();

  if (isLoading) return <div className="spinner"></div>;
  if (status === "failed") return <div>Error: {isError}</div>;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handlePrevClick = () => {
    swiperRef.current.swiper.slidePrev();
  };

  const handleNextClick = () => {
    swiperRef.current.swiper.slideNext();
  };
  const stripHTML = (htmlString) => {
    const doc = new DOMParser().parseFromString(htmlString, "text/html");
    return doc.body.textContent || "";
  };
  return (
    <Container className="py-lg-4 py-4 border-bottom">
      <div className="">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h2 className="top-programmes-title align-items-center heading-font">
            Top Programmes
          </h2>
          <span>
            <button
              className="btn px-3 py-0 fs-2 border-0"
              onClick={handlePrevClick}
              aria-label="handleprevslide"

            >
              <LuMoveLeft />
            </button>
            <button
              className="btn px-3 py-0 fs-2 border-0"
              onClick={handleNextClick}
              aria-label="handlenextslide"
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
          {data?.map((program, index) => (
            <SwiperSlide key={index} className="top-programme-slider-card">
              <Link
                to={`/our-programmes/${program.category}`}
                onClick={scrollToTop}
                className="text-decoration-none"
              >
                <Card className="rounded-0 border-0">
                  <Card.Img
                    loading="lazy"
                    variant="top"
                    src={`${process.env.REACT_APP_BASE_IMG_URL+program.banner}`}
                    alt={program.category}
                    className="top-programmes-image rounded-0 object-fit-cover"
                  />
                  <Card.Body className="p-0 mt-3">
                    <Card.Text className="heading-font fw-normal truncated-paragraph ">
                      <span className="fw-bold heading-font">
                        {program.category} :{" "}
                      </span>
                      {stripHTML(program.details[0].description)}
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
