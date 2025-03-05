import React from "react";
import { useParams } from "react-router-dom";
import useEventsImgs from "../../hooks/useEventsImgs";

const SingleEvent = () => {
  const { id } = useParams();
  const { data: eventData, isLoading, isError } = useEventsImgs();

  if (isLoading) return <span className="sr-only">Loading...</span>;
  if (isError && isError)
    return <p className="text-muted fs-2 text-center">Error: {isError}</p>;

  const event = eventData.imageGroups.find((e) => e._id === id);
  if (!event) {
    return <div>Event not found</div>;
  }

  return (
    <div className="container py-5">
      <h2 className="event-title heading-font text-center">
        {event.image_title}
      </h2>
      <img
        src={event.images[0]}
        alt={event.alt}
        className="img-fluid w-100 object-fit-cover my-5"
        style={{ height: "450px" }}
      />
      <p>{event.image_description}</p>
    </div>
  );
};

export default SingleEvent;
