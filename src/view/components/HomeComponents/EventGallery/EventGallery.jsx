import { EventGallery1, EventGallery2, EventGallery3, EventGallery4, EventGallery5 } from "../../../../assets/images/index";
import React from "react";
import { Link } from "react-router-dom";
import "./EventGallery.css";
export const eventsData = [
    {
        id: 1,
        image: EventGallery5,
        alt: "August 15 - Indian Independence Day",
        title: "August 15 - Indian Independence Day",
        description: "In 1951, Vajpayee was seconded by the RSS, along with Deendayal Upadhyaya, to work for the newly formed Bharatiya Jana Sangh, a Hindu right-wing political party associated with the RSS. He was appointed as a national secretary of the party in charge of the Northern region, based in Delhi. He soon became a follower and aide of party leader Syama Prasad Mukherjee. In the 1957 Indian general election, Vajpayee contested elections to the Lok Sabha, the lower house of the Indian Parliament. He lost to Raja Mahendra Pratap in Mathura, but was elected from Balrampur.",


    },
    {
        id: 2,
        image: EventGallery3,
        alt: "March 24 - World TB Day",
        title: "March 24 - World TB Day",
        description: "In 1951, Vajpayee was seconded by the RSS, along with Deendayal Upadhyaya, to work for the newly formed Bharatiya Jana Sangh, a Hindu right-wing political party associated with the RSS. He was appointed as a national secretary of the party in charge of the Northern region, based in Delhi. He soon became a follower and aide of party leader Syama Prasad Mukherjee. In the 1957 Indian general election, Vajpayee contested elections to the Lok Sabha, the lower house of the Indian Parliament. He lost to Raja Mahendra Pratap in Mathura, but was elected from Balrampur.",

    },
    {
        id: 3,
        image: EventGallery2,
        alt: "November 19 - National Integration Day",
        title: "November 19 - National Integration Day",
        description: "In 1951, Vajpayee was seconded by the RSS, along with Deendayal Upadhyaya, to work for the newly formed Bharatiya Jana Sangh, a Hindu right-wing political party associated with the RSS. He was appointed as a national secretary of the party in charge of the Northern region, based in Delhi. He soon became a follower and aide of party leader Syama Prasad Mukherjee. In the 1957 Indian general election, Vajpayee contested elections to the Lok Sabha, the lower house of the Indian Parliament. He lost to Raja Mahendra Pratap in Mathura, but was elected from Balrampur.",

    },
    {
        id: 4,
        image: EventGallery4,
        alt: "10th - Human Rights Day",
        title: "10th - Human Rights Day",
        description: "In 1951, Vajpayee was seconded by the RSS, along with Deendayal Upadhyaya, to work for the newly formed Bharatiya Jana Sangh, a Hindu right-wing political party associated with the RSS. He was appointed as a national secretary of the party in charge of the Northern region, based in Delhi. He soon became a follower and aide of party leader Syama Prasad Mukherjee. In the 1957 Indian general election, Vajpayee contested elections to the Lok Sabha, the lower house of the Indian Parliament. He lost to Raja Mahendra Pratap in Mathura, but was elected from Balrampur.",


    },
    {
        id: 5,
        image: EventGallery1,
        alt: "October 17 - Anti Poverty Day",
        title: "October 17 - Anti Poverty Day",
        description: "In 1951, Vajpayee was seconded by the RSS, along with Deendayal Upadhyaya, to work for the newly formed Bharatiya Jana Sangh, a Hindu right-wing political party associated with the RSS. He was appointed as a national secretary of the party in charge of the Northern region, based in Delhi. He soon became a follower and aide of party leader Syama Prasad Mukherjee. In the 1957 Indian general election, Vajpayee contested elections to the Lok Sabha, the lower house of the Indian Parliament. He lost to Raja Mahendra Pratap in Mathura, but was elected from Balrampur.",

    },
    {
        id: 6,
        image: EventGallery5,
        alt: "August 15 - Indian Independence Day",
        title: "August 15 - Indian Independence Day",
        description: "In 1951, Vajpayee was seconded by the RSS, along with Deendayal Upadhyaya, to work for the newly formed Bharatiya Jana Sangh, a Hindu right-wing political party associated with the RSS. He was appointed as a national secretary of the party in charge of the Northern region, based in Delhi. He soon became a follower and aide of party leader Syama Prasad Mukherjee. In the 1957 Indian general election, Vajpayee contested elections to the Lok Sabha, the lower house of the Indian Parliament. He lost to Raja Mahendra Pratap in Mathura, but was elected from Balrampur.",

    },
    {
        id: 7,
        image: EventGallery3,
        alt: "March 24 - World TB Day",
        title: "March 24 - World TB Day",
        description: "In 1951, Vajpayee was seconded by the RSS, along with Deendayal Upadhyaya, to work for the newly formed Bharatiya Jana Sangh, a Hindu right-wing political party associated with the RSS. He was appointed as a national secretary of the party in charge of the Northern region, based in Delhi. He soon became a follower and aide of party leader Syama Prasad Mukherjee. In the 1957 Indian general election, Vajpayee contested elections to the Lok Sabha, the lower house of the Indian Parliament. He lost to Raja Mahendra Pratap in Mathura, but was elected from Balrampur.",

    },

];

const EventGallery = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <div className="mb-5 event-gallery-bg">
            <div className="container row mx-auto py-5">
                <h2 className="event-title text-light heading-font">Events</h2>
                <p className="fs-5 heading-font text-light">
                    At Atal Foundation, our events serve as platforms for <br /> awareness,
                    empowerment, and community engagement.
                </p>

                <div className="col-md-12 col-12 mt-2 text-light ps-0">
                    <div className="row g-3">
                        {eventsData.map(event => (
                            <div key={event.id} className={`col-12 col-md-${event.id === 1 ? '6' : '3'} p-3 mt-0`}>
                                <Link to={`/event/${event.id}`} onClick={scrollToTop}>
                                    <div className="position-relative h-100 shadow-lg rounded-0 overflow-hidden">
                                        <img
                                            loading="lazy"
                                            src={event.image}
                                            alt={event.alt}
                                            className="scale-image img-fluid w-100 object-fit-cover"
                                            style={{ height: "308px" }}
                                        />
                                        <div className="event-gallery-text-bg position-absolute bottom-0 text-white w-100 text-center py-2">
                                            <div className="event-gallery-font"> {event.title}</div>
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
