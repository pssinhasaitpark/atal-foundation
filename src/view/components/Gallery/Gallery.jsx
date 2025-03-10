import React from "react";
import { GalleryBanner } from "../../../assets/images";
import "./Gallery.css";
import useGallery from "../../hooks/useGallery";
import { SlideshowLightbox } from "lightbox.js-react";
const Gallery = () => {
  const { data, isLoading, status, isError } = useGallery();
  if (isLoading) return <div className="spinner"></div>;
  if (status === "failed") return <div>Error: {isError}</div>;
  const gallerySection = data.gallery_image;
  const videoSection = data.gallery_video;

  return (
    <div className="container my-lg-5 my-2">
      <div className="pages-banner-img">
        <img
          loading="lazy"
          src={GalleryBanner}
          className="img-fluid w-100 h-100 object-fit-cover"
          alt="Gallery Banner"
        />
      </div>

      <div className="gallery-imgs-section my-4 pb-5 border-bottom">
        <div className="gallery-imgs-details">
          <p className="gallery-imgs-title fw-bold fs-1 heading-font">
            {gallerySection.title ||
              "Gallery - Capturing Moments Of Change & Impact"}
          </p>
          <p className="fw-light gallery-imgs-description lh-lg">
            {gallerySection.description ||
              "Welcome to the Atal Foundation Gallery, where every image tells a story of hope, transformation, and resilience. Through our various initiatives, we have touched thousands of lives, empowering communities, supporting education, providing healthcare, and driving meaningful social change."}
          </p>
        </div>

        <div className="gallery-imgs">
          <div className="row">
            {gallerySection.images?.map((img, index) => (
              <div
                key={index}
                className={`col-12 ${
                  index === 0 ? "col-md-6" : "col-md-3"
                } p-1 overflow-hidden`}
              >
                {" "}
                <SlideshowLightbox
                  className="h-100"
                  backgroundColor="black"
                  modalClose="clickOutside"
                >
                  <img
                    loading="lazy"
                    src={img}
                    alt={img.alt}
                    className={`gallery-img-${index} w-100 object-fit-cover `}
                  />
                </SlideshowLightbox>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="gallery-video-section my-4">
        <div className="gallery-video-details">
          <p className="gallery-video-title fw-bold fs-1 heading-font">
            {videoSection.title || "Video Gallery"}
          </p>
          <p className="fw-light gallery-video-description lh-lg">
            {videoSection.description ||
              "Welcome to the Atal Foundation Video Gallery, where we showcase impactful stories, events, and initiatives through visual storytelling. Our videos capture the essence of the work we do and the change we inspire in the communities we serve."}
          </p>
        </div>

        <div className="gallery-video">
          <div className="row">
            {videoSection.videos.slice(0, 4).map((video, index) => (
              <div
                key={index}
                className="col-lg-3 col-sm-2 p-1 "
                style={{ height: "400px" }}
              >
                <video
                  height="100%"
                  width="100%"
                  className="border w-100"
                  controls
                  preload="metadata"
                >
                  <source src={video} type="video/webm" />
                  Your browser does not support the video tag.
                </video>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
