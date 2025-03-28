import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { LuMoveLeft, LuMoveRight } from "../../assets/logos/index";
import { SlideshowLightbox } from "lightbox.js-react";
import { useBookSection } from "../hooks/index";

const BookDetailPage = () => {
  const swiperRef = useRef(null);
  const handlePrevClick = () => {
    swiperRef.current.swiper.slidePrev();
  };
  const handleNextClick = () => {
    swiperRef.current.swiper.slideNext();
  };
  const { data, isLoading, isError, status } = useBookSection();
  if (isLoading) return <div className="spinner"></div>;
  if (status === "failed") return <div>Error: {isError}</div>;
  return (
    <div className="App container my-5">
      <div>
        <h2 className="heading-font text-center">{data?.book_title}</h2>
        <img
          src={data?.cover_image}
          alt={data?.book_title}
          className="w-100 my-4 object-fit-contain"
          style={{ height: "500px" }}
        />
        <div
          className="fw-light fs-6 lh-lg w-75 mx-auto"
          dangerouslySetInnerHTML={{
            __html: data?.description,
          }}
        />
      </div>
      <div className="py-5">
        <h3 className="heading-font text-center">
          Book Distribution and News Article
        </h3>
        <Swiper
          ref={swiperRef}
          spaceBetween={10}
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
          {data?.images?.map((image, index) => (
            <SwiperSlide key={index} className="photo-gallery-slider-card">
              <SlideshowLightbox
                backgroundColor="black"
                modalClose="clickOutside"
              >
                <img
                  loading="lazy"
                  src={image}
                  alt={`book_img-${index}`}
                  className="photo-gallery-img w-100 "
                />
              </SlideshowLightbox>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="d-flex justify-content-center">
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
      </div>
    </div>
  );
};

export default BookDetailPage;
