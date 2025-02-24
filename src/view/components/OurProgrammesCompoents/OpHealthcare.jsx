import React from 'react'
import { HealthCareBanner, AboutUsImgs2 } from "../../../assets/images/index";
import { Card } from "react-bootstrap";
const OpHealthcare = () => {
    return (
        <div className="container py-5">
            <div className="pages-banner-img">
                <img src={HealthCareBanner} alt="" className="img-fluid w-100 h-100 object-fit-cover" />
            </div>
            <nav aria-label="custom-breadcrumb" className="pt-5">
                <ol className="custom-breadcrumb list-unstyled d-flex align-items-end">
                    <li className="custom-breadcrumb-item fs-2">
                        <a href="/" className="heading-font text-decoration-none text-dark">
                            Our Programmes
                        </a>
                    </li>
                    <li
                        className="custom-breadcrumb-item active fs-3 heading-font text-muted ps-1"
                        aria-current="page"
                    >
                        Healthcare
                    </li>
                </ol>
            </nav>
            <div className="border-bottom py-lg-5">
                <div className="row align-items-stretch">
                    <div className="col-md-4 d-flex">
                        <img
                            src={AboutUsImgs2}
                            alt="Children learning"
                            className="img-fluid w-100 h-100 object-fit-cover"
                        />
                    </div>
                    <div className="col-md-8 d-flex flex-column justify-content-center">
                        <Card className="custom-card bg-transparent border-0 justify-content-center align-items-center">
                            <Card.Body className="card-style p-0 ps-5">
                                <h3 className="fw-bold fs-1 heading-font">
                                    Empowering Lives Through Quality Healthcare
                                </h3>

                                <p className='fw-light fs-6 lh-lg m-0'>
                                    Street and Working Children live and work in extremely unhygienic conditions making them prone to severe skin conditions like scabies.
                                    At the same time, as these children live and work on the streets they are susceptible to physical injuries, which often left untreated
                                    leads to impairment of body parts. One can see a high incidence of substance use among the children and they are also susceptible to
                                    sexually transmitted infections thereby making them fall in the high-risk category of people who could be exposed to HIV.
                                    Thus to reduce the problems faced by children and at the same time also create awareness amongst them about hygiene and nutrition,
                                    the health care programme was started by Atal Foundation in 2011.
                                </p>
                                <p class="fw-bold">Objectives</p>
                                <ul class="fw-light lh-lg list">
                                    <li class="list--item">To provide both curative and preventive treatment accessible to the children directly on the street</li>
                                    <li class="list--item">To form health cooperative of the children and to empower them to have ownership of the health project</li>
                                    <li class="list--item">To increase the awareness level of the children in terms of their health needs</li>
                                    <li class="list--item">To establish a cadre of child health educators</li>
                                    <li class="list--item">Propagating the concept of health cooperative at community and grass root level for collective action in the field of health</li>
                                    <li class="list--item">To network with the health professionals in the city as well as the government health care institutions</li>
                                    <li class="list--item">Advocate for change in policies on health issues at central, state and local levels, which has direct bearing on children's lives</li>
                                </ul>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
            </div>
            <div className="border-bottom py-lg-5">
                <div className="row align-items-stretch">
                    <div className="col-md-4 d-flex">
                        <img
                            src={AboutUsImgs2}
                            alt="Children learning"
                            className="img-fluid w-100 h-100 object-fit-cover"
                        />
                    </div>
                    <div className="col-md-8 d-flex flex-column justify-content-center">
                        <Card className="custom-card bg-transparent border-0 justify-content-center align-items-center">
                            <Card.Body className="card-style p-0 ps-5">
                                <h3 className="fw-bold fs-1 heading-font">
                                    empowering young lives with<br />
                                    health & knowledge
                                </h3>

                                <p className='fw-light fs-6 lh-lg m-0'>
                                    In order to tackle minor injuries and ailments in shelters and contact points in absence of a doctor, children are given basic training in first aid and handling emergencies. Their peers from different contact points select children who are then trained to be Child Health Educator. They are also made aware of different departments of government hospitals, to ensure that a child in need gets immediate medical attention. The children have also been provided with first aid kits for handling emergencies. Equipped to tackle situations, the child health educator complements the health team.
                                </p>
                                <p class="fw-bold">Responsibilities</p>
                                <ul class="fw-light lh-lg list">
                                    <li class="list--item">When a child falls sick, it is the responsibility of the child health educator to bring it to the notice of the street educator and the health team. If required the child health educator can take the child to a nearby government hospital for treatment</li>
                                    <li class="list--item">If any child is hospitalized, the child health educator remains in the hospital as attendant and organizes other children for care and support</li>
                                    <li class="list--item">Gives aid in minor ailments</li>
                                    <li class="list--item">Counsels' children about hygiene and good living</li>
                                    <li class="list--item">Disseminate information that helps in reducing risk behavior against substance abuse, STD's, HIV/AIDS</li>
                                    <li class="list--item">Promotes the concept of health cooperative and collective action</li>
                                </ul>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OpHealthcare