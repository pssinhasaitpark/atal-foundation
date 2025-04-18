import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Container } from "react-bootstrap";
import { LuMoveLeft, LuMoveRight } from "../../../../assets/logos/index";
import "./PhotoGallery2.css";
import useGallery from "../../../hooks/useGallery";
import LightBox from "../../LightBox";
const PhotoGallery2 = () => {
  const swiperRef = useRef(null);
  const { data, isLoading, isError, status } = useGallery();
  const [open, setOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);
  if (isLoading) return <div className="spinner"></div>;
  if (status === "failed") return <div>Error: {isError}</div>;

  const imagesData = data?.gallery_image.images;

  const handlePrevClick = () => {
    swiperRef.current.swiper.slidePrev();
  };

  const handleNextClick = () => {
    swiperRef.current.swiper.slideNext();
  };

  return (
    <div>
      <Container className="py-lg-4 py-4">
 
          <div className="d-flex justify-content-between align-items-center mb-3">
            <div>
              <h2 className="top-programmes-title photo-gallery-title align-items-center heading-font">
                Photo Gallery
              </h2>
              <p className="heading-font custom-our-mission-sub">
                The Atal Foundation's events are vibrant reflections of unity,
                learning, and collective action
                <br /> We capture powerful moments of awareness, empowerment,
                and community engagement through our Photo Gallery.
              </p>
            </div>
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
            spaceBetween={10}
            modules={[]}
            className="mySwiper "
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
            {imagesData && imagesData.length > 0 ? (
              imagesData?.map((image, index) => (
                <SwiperSlide key={index} className="photo-gallery-slider-card">
                  <img
                    loading="lazy"
                    onClick={() => {
                      setPhotoIndex(index);
                      setOpen(true);
                    }}
                    src={`${process.env.REACT_APP_BASE_IMG_URL + image}`}
                    alt={`gallery_image_${index}`}
                    className="photo-gallery-img w-100"
                  />
                </SwiperSlide>
              ))
            ) : (
              <h4 className="py-5 mt-5 text-center">No images found</h4>
            )}
          </Swiper>
      
      </Container>
      <LightBox
        open={open}
        onClose={() => setOpen(false)}
        photoIndex={photoIndex}
        images={imagesData}
        source={process.env.REACT_APP_BASE_IMG_URL}
      />
    </div>
  );
};

export default PhotoGallery2;
