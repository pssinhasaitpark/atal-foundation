import React from "react";
import { useParams } from "react-router-dom";
import { eventsData } from "../../components/HomeComponents/EventGallery/EventGallery";
const SingleEvent = () => {
    const { id } = useParams();
    const event = eventsData.find(e => e.id === parseInt(id));

    if (!event) {
        return <div>Event not found</div>;
    }

    return (
        <div className="container py-5">
            <h2 className="event-title heading-font text-center">{event.title}</h2>
            <img src={event.image} alt={event.alt} className="img-fluid w-100 object-fit-cover my-5" style={{ height: "450px" }} />
            <p>{event.description}</p>
        </div>
    );
};

export default SingleEvent;
