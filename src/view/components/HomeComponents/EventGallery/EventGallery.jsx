import React from "react";
import { EventGallery as eventimg } from "../../../../assets/images/index";
import { IoIosSearch } from "../../../../assets/logos/index"

const EventGallery = () => {
    return (
        <div className="container my-5 bg-dark">
            <div className="row p-5">
                <h3 className="fw-bold heading-font  text-light">Events</h3>
                <p className="heading-font  text-light">
                    At Atal Foundation, our events serve as platforms for awareness,
                    empowerment, and community engagement.
                </p>
                <div className="col-md-8 text-light">
                    <div className="row g-3">
                        <div className="col-8">
                            <div className="position-relative shadow-lg rounded-0">
                                <img
                                    src={eventimg}
                                    alt="August 15 - Indian Independence Day"
                                    className="img-fluid w-100"
                                    style={{ height: "308px" }}
                                />
                                <div className="position-absolute bottom-0 text-white w-100 text-center bg-dark bg-opacity-50 py-2">
                                    August 15 - Indian Independence Day
                                </div>
                            </div>
                        </div>

                        <div className="col-4">
                            <div className="position-relative shadow-lg rounded-0">
                                <img
                                    src={eventimg}
                                    alt="March 24 - World TB Day"
                                    className="img-fluid w-100"
                                />
                                <div className="position-absolute bottom-0 text-white w-100 text-center bg-dark bg-opacity-50 py-2">
                                    March 24 - World TB Day
                                </div>
                            </div>
                        </div>

                        <div className="col-4">
                            <div className="position-relative shadow-lg rounded-0">
                                <img
                                    src={eventimg}
                                    alt="November 19 - National Integration Day"
                                    className="img-fluid w-100"
                                />
                                <div className="position-absolute bottom-0 text-white w-100 text-center bg-dark bg-opacity-50 py-2">
                                    November 19 - National Integration Day
                                </div>
                            </div>
                        </div>

                        <div className="col-4">
                            <div className="position-relative shadow-lg rounded-0">
                                <img
                                    src={eventimg}
                                    alt="10th - Human Rights Day"
                                    className="img-fluid w-100"
                                />
                                <div className="position-absolute bottom-0 text-white w-100 text-center bg-dark bg-opacity-50 py-2">
                                    10th - Human Rights Day
                                </div>
                            </div>
                        </div>

                        <div className="col-4">
                            <div className="position-relative shadow-lg rounded-0">
                                <img
                                    src={eventimg}
                                    alt="October 17 - Anti Poverty Day"
                                    className="img-fluid w-100"
                                />
                                <div className="position-absolute bottom-0 text-white w-100 text-center bg-dark bg-opacity-50 py-2">
                                    October 17 - Anti Poverty Day
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 eventgallery-right">
                    <div className="p-4 bg-light shadow-sm">
                        <h4 className="fw-bold heading-font">Subscribe Now</h4>
                        <p className="heading-font">
                            Subscribe to The Optimist to get weekly updates on global health,
                            gender equality, education, and more.
                        </p>
                        <form className="d-flex border mb-3" role="search">
                            <div className="input-group">
                                <input type="search" className="form-control border-0 outline-0 bg-transparent" placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
                                <button className="input-group-text border-0" id="search-addon">
                                    <IoIosSearch className="fs-4" />
                                </button>
                            </div>
                        </form>
                        <button className="btn btn-primary">Learn About</button>
                        <p className="mt-2 text-muted small heading-font">
                            By submitting your email to subscribe, you agree to the ATAL
                            Foundation.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EventGallery;
