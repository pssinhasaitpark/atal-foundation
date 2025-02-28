import React, { useRef } from "react";
// import { Figmaimages1, Figmaimages2, Figmaimages3, Figmaimages4, Figmaimages5, Figmaimages6 } from "../../../../assets/images/index";
import { Swiper, SwiperSlide } from "swiper/react";
import { Container, Card } from "react-bootstrap";
import { LuMoveLeft, LuMoveRight } from "../../../../assets/logos/index";
import "./PhotoGallery2.css";
import useGallery from "../../../hooks/useGallery"
import { Link } from "react-router";
const PhotoGallery2 = () => {

    const swiperRef = useRef(null);
    const { data, isLoading, isError } = useGallery();
    if (isLoading) return <p className='text-muted fs-2 text-center'>Loading Gallery...</p>;
    if (isError && isError) return <p className='text-muted fs-2 text-center'>Error: {isError}</p>;
    const imagesData = data.gallery_image.images;

    // JSON data for images and their details
    // const imagesData = [
    //     { src: Figmaimages1, alt: "Image 1" },
    //     { src: Figmaimages2, alt: "Image 2" },
    //     { src: Figmaimages3, alt: "Image 3" },
    //     { src: Figmaimages4, alt: "Image 4" },
    //     { src: Figmaimages5, alt: "Image 5" },
    //     { src: Figmaimages6, alt: "Image 6" },
    // ];
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      };
    const handlePrevClick = () => {
        swiperRef.current.swiper.slidePrev();
    };
    const handleNextClick = () => {
        swiperRef.current.swiper.slideNext();
    };

    return (
        <div style={{ backgroundColor: "#FBFBFB" }}>
            <Container className="py-lg-4 py-3">
                <div className="">
                    <div className="d-flex justify-content-between align-items-center mb-3">
                        <div>
                            <h2 className="top-programmes-title photo-gallery-title  align-items-center heading-font">
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
                        {/* Dynamically render SwiperSlides based on imagesData */}
                        {imagesData.map((image, index) => (
                            <SwiperSlide key={index} className="photo-gallery-slider-card me-3">
                                <Link to="/gallery" onClick={scrollToTop}>
                                <Card className="border-0">
                                    <Card.Img
                                        loading="lazy"
                                        variant="top"
                                        src={image}
                                        alt="gallery_image"
                                        className="photo-gallery-img rounded-0 img-fluid object-fit-cover"
                                    />
                                </Card>
                                </Link>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </Container>
        </div>
    );
};

export default PhotoGallery2;
