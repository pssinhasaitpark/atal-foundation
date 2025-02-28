import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Container, Card, Modal } from "react-bootstrap";
import { LuMoveLeft, LuMoveRight } from "../../../../assets/logos/index";
import "./PhotoGallery2.css";
import useGallery from "../../../hooks/useGallery";
import { Link } from "react-router";

const PhotoGallery2 = () => {
  const [showModal, setShowModal] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);
  const swiperRef = useRef(null);
  const { data, isLoading, isError } = useGallery();

  if (isLoading)
    return <p className="text-muted fs-2 text-center">Loading Gallery...</p>;
  if (isError && isError)
    return <p className="text-muted fs-2 text-center">Error: {isError}</p>;

  const imagesData = data.gallery_image.images;

  const handlePrevClick = () => {
    swiperRef.current.swiper.slidePrev();
  };

  const handleNextClick = () => {
    swiperRef.current.swiper.slideNext();
  };
  const handleImageClick = (image) => {
    setCurrentImage(image);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setCurrentImage(null);
  };

  return (
    <div style={{ backgroundColor: "#FBFBFB" }}>
      <Container className="py-lg-4 py-3">
        <div>
          <div className="d-flex justify-content-between align-items-center mb-3">
            <div>
              <h2 className="top-programmes-title photo-gallery-title align-items-center heading-font">
                Photo Gallery
              </h2>
              <p className="heading-font custom-our-mission-sub">
                At Atal Foundation, our events serve as platforms for <br />
                awareness, empowerment, and community engagement.
              </p>
            </div>
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
                slidesPerView: 1, // 1 card per view for small devices
              },
              768: {
                slidesPerView: 2, // 2 cards per view for medium screens
              },
              1024: {
                slidesPerView: 3, // 3 cards per view for large screens
              },
              1440: {
                slidesPerView: 4,
              },
            }}
          >
            {imagesData.map((image, index) => (
              <SwiperSlide key={index} className="photo-gallery-slider-card">
                <Link onClick={() => handleImageClick(image)}>
                  <Card className="border-0 ">
                    <Card.Img
                      loading="lazy"
                      variant="top"
                      src={image}
                      alt={`gallery_image_${index}`}
                      className="photo-gallery-img rounded-0 object-fit-cover"
                    />
                  </Card>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </Container>
      <Modal
        show={showModal}
        onHide={handleCloseModal}
        size="lg"
        centered
        animation={false}
      >
        <Modal.Body className="p-0">
          <img
            src={currentImage}
            alt="Full Size"
            className="d-block w-100 bg-transparent object-fit-cover"
            onClick={handleCloseModal}
            style={{ cursor: "pointer" }}
          />
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default PhotoGallery2;
