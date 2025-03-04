import React from "react";
import {
  Galleryimgs1,
  Galleryimgs2,
  Galleryimgs3,
  Galleryimgs5,
  EventsBanner,
  EventGallery1,
  EventGallery2,
  EventGallery3,
  EventGallery4,
  EventGallery5,
} from "../../../assets/images/index";
import "./Events.css";
import { Link } from "react-router";

const eventData = {
  banner: EventsBanner,
  imageSection: {
    title: "Events - Driving Change, Inspiring Action",
    description:
      "At Atal Foundation, we believe that every event is an opportunity to create impact, spread awareness, and empower communities. Our events bring together leaders, changemakers, volunteers, and beneficiaries to celebrate progress, discuss challenges, and drive meaningful initiatives. Join us in our mission to create a better future through impactful gatherings, workshops, and awareness campaigns.",
    images: [
      {
        id: 1,
        image: EventGallery5,
        alt: "August 15 - Indian Independence Day",
        title: "August 15 - Indian Independence Day",
        description:
          "In 1951, Vajpayee was seconded by the RSS, along with Deendayal Upadhyaya, to work for the newly formed Bharatiya Jana Sangh, a Hindu right-wing political party associated with the RSS. He was appointed as a national secretary of the party in charge of the Northern region, based in Delhi. He soon became a follower and aide of party leader Syama Prasad Mukherjee. In the 1957 Indian general election, Vajpayee contested elections to the Lok Sabha, the lower house of the Indian Parliament. He lost to Raja Mahendra Pratap in Mathura, but was elected from Balrampur.",
      },
      {
        id: 2,
        image: EventGallery3,
        alt: "March 24 - World TB Day",
        title: "March 24 - World TB Day",
        description:
          "In 1951, Vajpayee was seconded by the RSS, along with Deendayal Upadhyaya, to work for the newly formed Bharatiya Jana Sangh, a Hindu right-wing political party associated with the RSS. He was appointed as a national secretary of the party in charge of the Northern region, based in Delhi. He soon became a follower and aide of party leader Syama Prasad Mukherjee. In the 1957 Indian general election, Vajpayee contested elections to the Lok Sabha, the lower house of the Indian Parliament. He lost to Raja Mahendra Pratap in Mathura, but was elected from Balrampur.",
      },
      {
        id: 3,
        image: EventGallery2,
        alt: "November 19 - National Integration Day",
        title: "November 19 - National Integration Day",
        description:
          "In 1951, Vajpayee was seconded by the RSS, along with Deendayal Upadhyaya, to work for the newly formed Bharatiya Jana Sangh, a Hindu right-wing political party associated with the RSS. He was appointed as a national secretary of the party in charge of the Northern region, based in Delhi. He soon became a follower and aide of party leader Syama Prasad Mukherjee. In the 1957 Indian general election, Vajpayee contested elections to the Lok Sabha, the lower house of the Indian Parliament. He lost to Raja Mahendra Pratap in Mathura, but was elected from Balrampur.",
      },
      {
        id: 4,
        image: EventGallery4,
        alt: "10th - Human Rights Day",
        title: "10th - Human Rights Day",
        description:
          "In 1951, Vajpayee was seconded by the RSS, along with Deendayal Upadhyaya, to work for the newly formed Bharatiya Jana Sangh, a Hindu right-wing political party associated with the RSS. He was appointed as a national secretary of the party in charge of the Northern region, based in Delhi. He soon became a follower and aide of party leader Syama Prasad Mukherjee. In the 1957 Indian general election, Vajpayee contested elections to the Lok Sabha, the lower house of the Indian Parliament. He lost to Raja Mahendra Pratap in Mathura, but was elected from Balrampur.",
      },
      {
        id: 5,
        image: EventGallery1,
        alt: "October 17 - Anti Poverty Day",
        title: "October 17 - Anti Poverty Day",
        description:
          "In 1951, Vajpayee was seconded by the RSS, along with Deendayal Upadhyaya, to work for the newly formed Bharatiya Jana Sangh, a Hindu right-wing political party associated with the RSS. He was appointed as a national secretary of the party in charge of the Northern region, based in Delhi. He soon became a follower and aide of party leader Syama Prasad Mukherjee. In the 1957 Indian general election, Vajpayee contested elections to the Lok Sabha, the lower house of the Indian Parliament. He lost to Raja Mahendra Pratap in Mathura, but was elected from Balrampur.",
      },
    ],
  },
  videoSection: {
    title: "Event Video",
    description:
      "At Atal Foundation, we believe that every event is an opportunity to create impact, spread awareness, and empower communities. Our events bring together leaders, changemakers, volunteers, and beneficiaries to celebrate progress, discuss challenges, and drive meaningful initiatives. Join us in our mission to create a better future through impactful gatherings, workshops, and awareness campaigns.",
    videos: [
      { src: Galleryimgs5, alt: "Video Thumbnail 1" },
      { src: Galleryimgs3, alt: "Video Thumbnail 2" },
      { src: Galleryimgs2, alt: "Video Thumbnail 3" },
      { src: Galleryimgs1, alt: "Video Thumbnail 4" },
    ],
  },
};

const Events = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const { banner, imageSection, videoSection } = eventData;
  return (
    <div className="container my-lg-5 my-2">
      <div className="pages-banner-img">
        <img
          loading="lazy"
          src={banner}
          className="img-fluid w-100 h-100 object-fit-cover"
          alt="Event Banner"
        />
      </div>

      <div className="event-imgs-section my-4 pb-3">
        <div className="event-imgs-details">
          <p className="event-imgs-title fw-bold fs-1 heading-font">
            {imageSection.title}
          </p>
          <p className="fw-light event-imgs-description lh-lg">
            {imageSection.description}
          </p>
        </div>

        <div className="event-imgs">
          <div className="row">
            {imageSection.images.slice(0, 2).map((img, index) => (
              <div
                key={index}
                className={`col-12 custom-p-3 ${
                  index === 0 ? "col-md-8" : "col-md-4"
                }`}
              >
                <Link to={`/event/${img.id}`} onClick={scrollToTop}>
                  <div className="position-relative overflow-hidden h-100">
                    <img
                      loading="lazy"
                      src={img.image}
                      alt={img.alt}
                      className={`scale-image img-fluid ${
                        img.className || ""
                      } event-img-${index} w-100 object-fit-cover`}
                    />
                    <div className="event-gallery-text-bg position-absolute bottom-0 text-white w-100 text-center py-2">
                      <div className="event-gallery-font">{img.title}</div>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>

          <div className="row">
            {imageSection.images.slice(2).map((img, index) => (
              <div key={index} className="col-12 col-md-4 custom-p-3">
                <Link to={`/event/${img.id}`} onClick={scrollToTop}>
                  <div className="position-relative overflow-hidden h-100">
                    <img
                      loading="lazy"
                      src={img.image}
                      alt={img.alt}
                      className={`scale-image img-fluid ${img.className || ""}`}
                    />
                    <div className="event-gallery-text-bg position-absolute bottom-0 text-white start-0 w-100 text-center py-2">
                      <div className="event-gallery-font">{img.title}</div>
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
            {videoSection.title}
          </p>
          <p className="fw-light event-video-description lh-lg">
            {videoSection.description}
          </p>
        </div>

        <div className="event-video">
          <div className="row">
            {videoSection.videos.map((vid, index) => (
              <div
                key={index}
                className="col-lg-3 col-sm-6 col-12 custom-p-1"
                style={{ height: "400px" }}
              >
                <video
                  height="100%"
                  width="100%"
                  controls="controls"
                  preload="none"
                >
                  <source
                    type="video/webm"
                    src="https://upload.wikimedia.org/wikipedia/commons/transcoded/5/54/Yawning_kitten.ogv/Yawning_kitten.ogv.480p.vp9.webm"
                  />
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
