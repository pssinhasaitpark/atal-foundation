import React from "react";
import { Link } from "react-router-dom";
import "./EventGallery.css";
import useEventsImgs from "../../../hooks/useEventsImgs";

const EventGallery = () => {
  const { data: eventData, isLoading, isError, status } = useEventsImgs();
  if (eventData == null) return <></>;

  if (isLoading) return <div className="spinner"></div>;
  if (status === "failed") return <div>Error: {isError}</div>;

  const eventImgData = eventData?.imageGroups;
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="mb-5 event-gallery-bg">
      <div className="container row mx-auto py-5">
        <h2 className="event-title text-light heading-font">Events</h2>
        <p className="fs-5 heading-font text-light">
          Our events unite communities through awareness, health drives, youth
          workshops, and <br /> skill programs — each one a step toward
          meaningful change.
        </p>

        <div className="col-md-12 col-12 mt-2 text-light ps-0">
          <div className="row g-3">
            {eventImgData?.slice(0, 5)?.map((event, index) => (
              <div
                key={index}
                className={`col-12 col-md-${
                  index === 0 || index === 3 || index === 4 ? "6" : "3"
                } p-3 mt-0`}
              >
                <Link to={`/event/${event?._id}`} onClick={scrollToTop}>
                  <div className="position-relative h-100 shadow-lg rounded-0 overflow-hidden">
                    <img
                      loading="lazy"
                      src={`${
                        process.env.REACT_APP_BASE_IMG_URL + event?.images[0]
                      }`}
                      alt={event?.alt}
                      className="scale-image img-fluid w-100 object-fit-cover"
                      style={{ height: "308px" }}
                    />
                    <div
                      className="gradient-overlay position-absolute top-0 left-0 w-100 h-100"
                      style={{
                        background:
                          "linear-gradient(to bottom, rgba(0, 0, 0, 0),85%, rgb(0, 0, 0))",
                      }}
                    ></div>
                    <div className=" position-absolute bottom-0 text-white w-100 text-center py-2">
                      <div className="heading-font event-gallery-font">
                        {" "}
                        {event?.image_title}
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventGallery;
