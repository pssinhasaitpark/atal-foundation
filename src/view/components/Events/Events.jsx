import React from 'react'
import { Galleryimgs1, Galleryimgs2, Galleryimgs3, Galleryimgs4, Galleryimgs5, Galleryimgs6, EventsBanner } from '../../../assets/images/index'
import "./Events.css"
// import useEvents from '../../hooks/useEvents';
const Events = () => {
    // const { data, isLoading, isError, error } = useEvents();
    return (
        <div className='container my-lg-5 my-2'>
            <div className='pages-banner-img'>
                <img loading="lazy" src={EventsBanner} className='img-fluid w-100 h-100 object-fit-cover' alt="" />
            </div>
            <div className='event-imgs-section my-4 pb-5 border-bottom'>
                <div className='event-imgs-details'>
                    <p className="event-imgs-title fw-bold fs-1 heading-font">
                        Events - Driving Change, Inspiring Action
                    </p>
                    <p className='fw-light event-imgs-description lh-lg'>At Atal Foundation, we believe that every event is an opportunity to create impact, spread awareness, and empower communities. Our events bring together leaders, changemakers, volunteers, and beneficiaries to celebrate progress, discuss challenges, and drive meaningful initiatives. Join us in our mission to create a better future through impactful gatherings, workshops, and awareness campaigns.</p>
                </div>
                <div className='event-imgs'>
                    <div className="row d-flex flex-wrap">
                        <div className="col-12 col-md-8 event-img-1 p-3">
                            <img loading="lazy" src={Galleryimgs5} alt="" className="img-fluid" />
                        </div>
                        <div className="col-12 col-md-4 event-img-2 p-3">
                            <img loading="lazy" src={Galleryimgs3} alt="" className="img-fluid" />
                        </div>

                    </div>
                    <div className="row">
                        <div className="col-12 col-md-4 event-img-4 p-3">
                            <img loading="lazy" src={Galleryimgs4} alt="" className="img-fluid" />
                        </div>
                        <div className="col-12 col-md-4 event-img-5 p-3">
                            <img loading="lazy" src={Galleryimgs6} alt="" className="img-fluid" />
                        </div>
                        <div className="col-12 col-md-4 event-img-6 p-3">
                            <img loading="lazy" src={Galleryimgs1} alt="" className="img-fluid" />
                        </div>
                    </div>
                </div>

            </div>
            <div className='event-video-section my-4 pb-5 border-bottom'>
                <div className='event-video-details'>
                    <p className="event-video-title fw-bold fs-1 heading-font">
                        Event Video
                    </p>
                    <p className='fw-light event-video-description lh-lg'>At Atal Foundation, we believe that every event is an opportunity to create impact, spread awareness, and empower communities. Our events bring together leaders, changemakers, volunteers, and beneficiaries to celebrate progress, discuss challenges, and drive meaningful initiatives. Join us in our mission to create a better future through impactful gatherings, workshops, and awareness campaigns.</p>
                </div>
                <div className='event-video'>
                    <div className="row d-flex flex-wrap">
                        <div className="col-12 col-md-3 p-1">
                            <img loading="lazy" src={Galleryimgs5} alt="" className="img-fluid w-100 h-100" />
                        </div>
                        <div className="col-12 col-md-3 p-1">
                            <img loading="lazy" src={Galleryimgs3} alt="" className="img-fluid w-100 h-100" />
                        </div>
                        <div className="col-12 col-md-3 p-1">
                            <img loading="lazy" src={Galleryimgs2} alt="" className="img-fluid w-100 h-100" />
                        </div>
                        <div className="col-12 col-md-3 p-1">
                            <img loading="lazy" src={Galleryimgs1} alt="" className="img-fluid w-100 h-100" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Events