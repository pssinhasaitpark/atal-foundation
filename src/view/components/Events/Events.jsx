import React from "react";
import "./Events.css";
import { Link } from "react-router";
import useEventsImgs from "../../hooks/useEventsImgs";
import useEventsVids from "../../hooks/useEventsVids";

const Events = () => {
  const { data: eventData, isLoading, status } = useEventsImgs();
  const { data: eventVidData, isLoading: isLoadingVid } = useEventsVids();
  if (isLoading && isLoadingVid) return <div className="spinner"></div>;
  if (status === "failed") return <div>Error: </div>;
  if (!eventData || !eventVidData) {
    return <div className="spinner"></div>;
  }
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const eventImgData = eventData?.imageGroups;
  const eventVideoData = eventVidData;
  const bannerimg = eventData?.banner;
  return (
    <div className="container my-lg-5 my-2">
      <div className="pages-banner-img">
        <img
          loading="lazy"
          src={bannerimg}
          className="img-fluid w-100 h-100 object-fit-fill"
          alt="Event Banner"
        />
      </div>

      <div className="event-imgs-section my-4 pb-3">
        <div className="event-imgs-details">
          <p className="event-imgs-title fw-bold fs-1 heading-font">
            {eventData?.title}
          </p>
          <p className="fw-light event-imgs-description lh-lg">
            {eventData?.description}
          </p>
        </div>

        <div className="event-imgs">
          <div className="row">
            {eventImgData?.map((img, index) => (
              <div
                key={index}
                className={`col-12 custom-p-3 ${
                  index === 0 ? "col-md-8" : "col-md-4"
                }`}
              >
                <Link to={`/event/${img._id}`} onClick={scrollToTop}>
                  <div className="position-relative overflow-hidden h-100">
                    <img
                      loading="lazy"
                      src={img.images[0]}
                      alt={img.alt}
                      className={`scale-image img-fluid event-img-${index} w-100 object-fit-cover ${
                        img.className || ""
                      }`}
                    />
                    <div className="event-gallery-text-bg position-absolute bottom-0 text-white start-0 w-100 text-center py-2">
                      <div className="event-gallery-font">
                        {img.image_title}
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="event-video-section my-4">
        <div className="event-video-details">
          <p className="event-video-title fw-bold fs-1 heading-font">
            {eventVideoData?.video_title}
          </p>
          <p className="fw-light event-video-description lh-lg">
            {eventVideoData?.video_description}
          </p>
        </div>

        <div className="event-video">
          <div className="row">
            {eventVideoData?.videos?.map((vid, index) => (
              <div
                key={index}
                className="col-lg-3 col-sm-6 col-12 custom-p-1"
                style={{ height: "400px" }}
              >
                <video
                  height="100%"
                  width="100%"
                  controls="controls"
                  preload="metadata"
                  className="border"
                >
                  <source type="video/webm" src={vid} />
                </video>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;
