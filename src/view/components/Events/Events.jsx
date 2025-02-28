import React from 'react';
import { Galleryimgs1, Galleryimgs2, Galleryimgs3, Galleryimgs4, Galleryimgs5, Galleryimgs6, EventsBanner,EventGallery1, EventGallery2, EventGallery3, EventGallery4, EventGallery5  } from '../../../assets/images/index';
import "./Events.css";
// import useEvents from '../../hooks/useEvents';


const eventData = {
    banner: EventsBanner,
    imageSection: {
        title: "Events - Driving Change, Inspiring Action",
        description: "At Atal Foundation, we believe that every event is an opportunity to create impact, spread awareness, and empower communities. Our events bring together leaders, changemakers, volunteers, and beneficiaries to celebrate progress, discuss challenges, and drive meaningful initiatives. Join us in our mission to create a better future through impactful gatherings, workshops, and awareness campaigns.",
        images: [
            { src: Galleryimgs5, alt: "Event Image 1", className: "event-img-1" },
            { src: Galleryimgs3, alt: "Event Image 2" },
            { src: Galleryimgs4, alt: "Event Image 3" },
            { src: Galleryimgs6, alt: "Event Image 4" },
            { src: Galleryimgs1, alt: "Event Image 5" }
        ]
    },
    videoSection: {
        title: "Event Video",
        description: "At Atal Foundation, we believe that every event is an opportunity to create impact, spread awareness, and empower communities. Our events bring together leaders, changemakers, volunteers, and beneficiaries to celebrate progress, discuss challenges, and drive meaningful initiatives. Join us in our mission to create a better future through impactful gatherings, workshops, and awareness campaigns.",
        images: [
            { src: Galleryimgs5, alt: "Video Thumbnail 1" },
            { src: Galleryimgs3, alt: "Video Thumbnail 2" },
            { src: Galleryimgs2, alt: "Video Thumbnail 3" },
            { src: Galleryimgs1, alt: "Video Thumbnail 4" }
        ]
    }
};

const Events = () => {
    // const { data, isLoading, isError, error } = useEvents();
    const { banner, imageSection, videoSection } = eventData;

    return (
        <div className='container my-lg-5 my-2'>
            <div className='pages-banner-img'>
                <img loading="lazy" src={banner} className='img-fluid w-100 h-100 object-fit-cover' alt="Event Banner" />
            </div>

            <div className='event-imgs-section my-4 pb-3'>
                <div className='event-imgs-details'>
                    <p className="event-imgs-title fw-bold fs-1 heading-font">
                        {imageSection.title}
                    </p>
                    <p className='fw-light event-imgs-description lh-lg'>
                        {imageSection.description}
                    </p>
                </div>

                <div className='event-imgs'>
                    <div className="row d-flex flex-wrap">
                        {imageSection.images.slice(0, 2).map((img, index) => (
                            <div key={index} className={`col-12 ${index === 0 ? 'col-md-8' : 'col-md-4'} p-3`}>
                                <img loading="lazy" src={img.src} alt={img.alt} className={`img-fluid ${img.className || ''}`} />
                            </div>
                        ))}
                    </div>

                    <div className="row">
                        {imageSection.images.slice(2).map((img, index) => (
                            <div key={index} className="col-12 col-md-4 p-3">
                                <img loading="lazy" src={img.src} alt={img.alt} className={`img-fluid ${img.className || ''}`} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className='event-video-section my-4'>
                <div className='event-video-details'>
                    <p className="event-video-title fw-bold fs-1 heading-font">
                        {videoSection.title}
                    </p>
                    <p className='fw-light event-video-description lh-lg'>
                        {videoSection.description}
                    </p>
                </div>

                <div className='event-video'>
                    <div className="row d-flex flex-wrap">
                        {videoSection.images.map((img, index) => (
                            <div key={index} className="col-12 col-md-3 p-1" style={{width:"25%",height:"400px"}}>
                               
                                <video height="100%" width="100%" controls="controls" preload="none" onclick="this.play();arguments[0].preventDefault();">
                                    <source type="video/webm" src="https://upload.wikimedia.org/wikipedia/commons/transcoded/5/54/Yawning_kitten.ogv/Yawning_kitten.ogv.480p.vp9.webm"/>
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
