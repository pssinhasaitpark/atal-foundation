import React from "react";
import { useParams } from "react-router-dom";
import useEventsImgs from "../hooks/useEventsImgs";

const SingleEventPage = () => {
  const { id } = useParams();
  const { data: eventData, isLoading, isError, status } = useEventsImgs();

  if (isLoading) return <div className="spinner"></div>;
  if (status === "failed") return <div>Error: {isError} </div>;
  const event = eventData.imageGroups.find((e) => e._id === id);
  if (!event) {
    return <div>Event not found</div>;
  }

  return (
    <div className="App container py-5">
      <h2 className="event-title heading-font text-center">
        {event.image_title}
      </h2>
      <img
        src={`${process.env.REACT_APP_BASE_IMG_URL + event.images[0]}`}
        alt={event.alt}
        className="img-fluid w-100 object-fit-cover my-5"
        style={{ height: "450px" }}
      />
      <div
        className="fw-light fs-6 lh-lg"
        dangerouslySetInnerHTML={{
          __html: event.image_description,
        }}
      />
    </div>
  );
};

export default SingleEventPage;
