import React from 'react'
import { Galleryimgs1, Galleryimgs2, Galleryimgs3, Galleryimgs4, Galleryimgs5, Galleryimgs6, GalleryBanner } from '../../../assets/images'
import "./Gallery.css"
const Gallery = () => {
    return (
        <div className='container my-lg-5 my-2'>
            <div className='pages-banner-img'>
                <img loading="lazy" src={GalleryBanner} className='img-fluid w-100 h-100 object-fit-cover' alt="" />
            </div>
            <div className='gallery-imgs-section my-4 pb-5 border-bottom'>
                <div className='gallery-imgs-details'>
                    <p className="gallery-imgs-title fw-bold fs-1 heading-font">
                        Gallery - Capturing Moments Of Change & Impact
                    </p>
                    <p className='fw-light gallery-imgs-description lh-lg'>Welcome to the Atal Foundation Gallery, where every image tells a story of hope, transformation, and resilience. Through our various initiatives, we have touched thousands of lives, empowering communities, supporting education, providing healthcare, and driving meaningful social change.</p>
                </div>
                <div className='gallery-imgs'>
                    <div className="row d-flex flex-wrap">
                        <div className="col-12 col-md-6 gallery-img-1 p-1">
                            <img loading="lazy" src={Galleryimgs5} alt="" className="img-fluid" />
                        </div>
                        <div className="col-12 col-md-3 gallery-img-2 p-1">
                            <img loading="lazy" src={Galleryimgs3} alt="" className="img-fluid" />
                        </div>
                        <div className="col-12 col-md-3 gallery-img-3 p-1">
                            <img loading="lazy" src={Galleryimgs2} alt="" className="img-fluid " />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 col-md-3 gallery-img-4 p-1">
                            <img loading="lazy" src={Galleryimgs4} alt="" className="img-fluid" />
                        </div>
                        <div className="col-12 col-md-3 gallery-img-5 p-1">
                            <img loading="lazy" src={Galleryimgs6} alt="" className="img-fluid" />
                        </div>
                        <div className="col-12 col-md-6 gallery-img-6 p-1">
                            <img loading="lazy" src={Galleryimgs1} alt="" className="img-fluid" />
                        </div>
                    </div>
                </div>


            </div>
            <div className='gallery-video-section my-4 pb-5 border-bottom'>
                <div className='gallery-video-details'>
                    <p className="gallery-video-title fw-bold fs-1 heading-font">
                        Video Gallery
                    </p>
                    <p className='fw-light gallery-video-description lh-lg'>Welcome to the Atal Foundation Gallery, where every image tells a story of hope, transformation, and resilience. Through our various initiatives, we have touched thousands of lives, empowering communities, supporting education, providing healthcare, and driving meaningful social change.</p>
                </div>
                <div className='gallery-video'>
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

export default Gallery