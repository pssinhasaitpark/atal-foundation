import React from "react";
import { GalleryBanner } from "../../../assets/images";
import "./Gallery.css";
import useGallery from "../../hooks/useGallery";
import { SlideshowLightbox } from "lightbox.js-react";
const Gallery = () => {
  const { data, isLoading, status, isError } = useGallery();
  if (isLoading) return <div className="spinner"></div>;
  if (status === "failed") return <div>Error: {isError}</div>;
  if (data == null)
    return <h4 className="my-5 py-5 text-center">No Data Available</h4>;

  const gallerySection = data?.gallery_image;
  const videoSection = data?.gallery_video;
  const generateLargeColIndices = (n) => {
    const indices = [];
    for (let i = 0; i <= n; i++) {
      if ([0, 5, 6, 11].includes(i % 12)) {
        indices.push(i);
      }
    }
    return indices;
  };

  const n = gallerySection?.images.length;
  const largeColIndices = generateLargeColIndices(n);

  return (
    <div className="container my-lg-5 my-2">
      <div className="pages-banner-img">
        <img
          loading="lazy"
          src={GalleryBanner}
          className="img-fluid w-100 h-100 object-fit-fill"
          alt="Gallery Banner"
        />
      </div>

      <div className="gallery-imgs-section my-4 pb-5 border-bottom">
        <div className="gallery-imgs-details">
          <p className="gallery-imgs-title fw-bold fs-1 heading-font">
            {gallerySection?.title}
          </p>
          <p className="fw-light gallery-imgs-description lh-lg">
            {gallerySection?.description}
          </p>
        </div>

        <div className="gallery-imgs">
          <div className="row">
            {gallerySection?.images?.map((img, index) => (
              <div
                key={index}
                className={`col-12 ${
                  largeColIndices.includes(index) ? "col-md-6" : "col-md-3"
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
                    alt={`gallery-img-${index}`}
                    className={`gallery-img-${index} w-100 object-fit-cover `}
                    style={{
                      height: largeColIndices.includes(index) ? "440px" : "",
                    }}
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
            {videoSection?.title}
          </p>
          <p className="fw-light gallery-video-description lh-lg">
            {videoSection?.description}
          </p>
        </div>

        <div className="gallery-video">
          <div className="row">
            {videoSection?.videos?.slice(0, 4)?.map((video, index) => (
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
