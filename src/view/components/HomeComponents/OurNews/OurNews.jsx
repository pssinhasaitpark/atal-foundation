import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./OurNews.css";
import useOurNews from "../../../hooks/useOurNews";
import { LuMoveLeft, LuMoveRight } from "../../../../assets/logos/index";
import LightBox from "../../LightBox";
const OurNews = () => {
  const [open, setOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);
  const swiperRef = useRef(null);
  const { data, isLoading, isError, status } = useOurNews();
  if (isLoading) return <div className="spinner"></div>;
  if (status === "failed") return <div>Error: {isError}</div>;
  if (data === undefined) return <></>;
  const newsData = data;
  const handlePrevClick = () => {
    swiperRef.current.swiper.slidePrev();
  };
  const handleNextClick = () => {
    swiperRef.current.swiper.slideNext();
  };
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const newsDataImgs = newsData.map((img, index) => img.images);

  return (
    <div>
      <Container className="py-lg-4 py-4">
        <div className="">
          <div className="d-flex justify-content-between align-items-center mb-3">
            <h2 className="top-programmes-headline our-news-headline align-items-center heading-font">
              Our News
            </h2>
            <span>
              <button
                className="btn px-3 py-0 fs-2 border-0"
                onClick={handlePrevClick}
                aria-label="handlePrevClick"
              >
                <LuMoveLeft />
              </button>
              <button
                className="btn px-3 py-0 fs-2 border-0"
                onClick={handleNextClick}
                aria-label="handleNextClick"
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
                slidesPerView: 2,
              },
            }}
          >
            {newsData?.map((news, index) => {
              return (
                <>
                  <SwiperSlide key={`${news.id}-${index}`}>
                    <div className="row">
                      <div className="col-sm-5" style={{ height: "300px" }}>
                        <img
                          loading="lazy"
                          src={`${process.env.REACT_APP_BASE_IMG_URL}${news?.images}`}
                          onClick={() => {
                            setPhotoIndex(index);
                            setOpen(true);
                          }}
                          alt={`${news?.headline}${index}`}
                          className="w-100 h-100 object-fit-cover"
                        />
                      </div>
                      <div className="col-sm-7 px-4 py-3 d-flex flex-column justify-content-around">
                        <p className="fs-4 heading-font fw-bold">
                          {news?.headline}
                        </p>

                        <div
                          className="our-news-homepage-description heading-font fw-light fs-6 lh-lg"
                          dangerouslySetInnerHTML={{
                            __html: news?.description,
                          }}
                        />

                        <Link
                          to={`/news/${news._id}`}
                          onClick={scrollToTop}
                          className="text-decoration-none text-warning-color align-items-center d-flex"
                        >
                          More About <LuMoveRight className="mx-2" />
                        </Link>
                      </div>
                    </div>
                  </SwiperSlide>
                </>
              );
            })}
          </Swiper>
        </div>
      </Container>
      <LightBox
        open={open}
        onClose={() => setOpen(false)}
        photoIndex={photoIndex}
        images={newsDataImgs}
        source={process.env.REACT_APP_BASE_IMG_URL}
      />
    </div>
  );
};

export default OurNews;
