import { EventGallery1, EventGallery2, EventGallery3, EventGallery4, EventGallery5 } from "../../../../assets/images/index";
import React from "react";
import { IoIosSearch } from "../../../../assets/logos/index";
import "./EventGallery.css";
import { Link } from "react-router";


const events = [
    {
        id: 1,
        image: EventGallery5,
        alt: "August 15 - Indian Independence Day",
        title: "August 15 - Indian Independence Day",
    },
    {
        id: 2,
        image: EventGallery3,
        alt: "March 24 - World TB Day",
        title: "March 24 - World TB Day",
    },
    {
        id: 3,
        image: EventGallery2,
        alt: "November 19 - National Integration Day",
        title: "November 19 - National Integration Day",
    },
    {
        id: 4,
        image: EventGallery4,
        alt: "10th - Human Rights Day",
        title: "10th - Human Rights Day",
    },
    {
        id: 5,
        image: EventGallery1,
        alt: "October 17 - Anti Poverty Day",
        title: "October 17 - Anti Poverty Day",
    }
];

const EventGallery = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };
    return (
        <div className="mb-5 event-gallery-bg">
            <div className="container row mx-auto py-5">
                <h2 className="event-title text-light heading-font">Events</h2>
                <p className="fs-5 heading-font text-light ">
                    At Atal Foundation, our events serve as platforms for <br /> awareness,
                    empowerment, and community engagement.
                </p>

                <div className="col-md-8 col-12 mt-2 text-light ps-0">
                    <div className="row g-3">
                        {events.map(event => (
                            <div key={event.id} className={`col-12 col-md-${event.id === 1 ? '8' : '4'} p-3 mt-0`}>
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
                            </div>
                        ))}
                    </div>
                </div>

                <div className="col-md-4 col-12 mt-2 eventgallery-right">
                    <div className="p-4 bg-light shadow-sm  lh-lg">
                        <h2 className="event-sub-heading heading-font">Subscribe Now</h2>
                        <p className="heading-font event-sub-subtitle">
                            Subscribe to The Optimist to get weekly <br /> updates on the latest in global health,<br />
                            gender equality, education, and more.
                        </p>
                        <form className="d-flex border mb-3" role="search">
                            <div className="input-group">
                                <input
                                    type="search"
                                    className="form-control border-0 outline-0 bg-transparent py-3"
                                    placeholder="Search"
                                    aria-label="Search"
                                    aria-describedby="search-addon"
                                />
                                <button className="input-group-text border-0" id="search-addon">
                                    <IoIosSearch className="fs-4" />
                                </button>
                            </div>
                        </form>
                        <Link to="/events" onClick={scrollToTop}>
                            <button className="custom-button my-3">Learn About</button></Link>
                        <p className="event-sub-button-sub mt-2 heading-font">
                            By submitting your email to subscribe, you <br /> agree to the ATAL
                            Foundation.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EventGallery;

