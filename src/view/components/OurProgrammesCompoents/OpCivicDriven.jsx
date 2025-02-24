import React from 'react'
import { CivicDrivenBanner, AboutUsImgs2 } from "../../../assets/images/index";
import { Card } from "react-bootstrap";
const OpCivicDriven = () => {
  return (
    <div className="container py-5">
      <div className="pages-banner-img">
        <img src={CivicDrivenBanner} alt="" className="img-fluid w-100 h-100 object-fit-cover" />
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
            Civic Driven Change
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
                  civic-driven change: empowering <br />
                  communities for a better tomorrow
                </h3>
                <p className='fw-light fs-6 lh-lg m-0'>
                  <strong>What is Civic-Driven Change?</strong> <br />
                  Civic-driven change is about people-led initiatives that shape society through collective action, advocacy, and responsibility. It focuses on empowering individuals and communities to actively participate in social transformation, governance, and sustainable development. At Atal Foundation, we believe that true progress happens when citizens take charge of change-by addressing social issues, influencing policies, and fostering an inclusive and responsible society.
                </p>
                <p className='fw-light fs-6 lh-lg m-0'><strong>Our Approach to Civic Engagement</strong> <br />
                  We drive civic-driven change through three key pillars:</p>
                <p className='fw-bold fs-6 lh-lg m-0'>✅ Awareness & Advocacy</p>
                <ul class="fw-light lh-lg list">
                  <li class="list--item">Educating citizens about their rights and responsibilities.</li>
                  <li class="list--item">Promoting active participation in democracy and governance.</li>
                  <li class="list--item">Raising awareness on critical issues like education, environment, and social justice.</li>
                </ul>
                <p className='fw-bold fs-6 lh-lg m-0'>✅ Community-Led Initiatives</p>
                <ul class="fw-light lh-lg list">
                  <li class="list--item">Encouraging local solutions to social challenges.</li>
                  <li class="list--item">Supporting grassroots movements for sustainable change.</li>
                  <li class="list--item">Providing platforms for collective action and leadership development.</li>
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
          <div className="col-md-8 d-flex">
            <Card className="custom-card bg-transparent border-0 justify-content-center align-items-center">
              <Card.Body className="card-style p-0 ps-5">
                <h3 className="fw-bold fs-1 heading-font">
                  Our Approach to Civic Engagement
                </h3>
                <p className='fw-bold fs-6 m-0'>We drive civic-driven change through three key pillars:</p>
                <p className='fw-light fs-6 lh-lg m-0'>✅ Awareness & Advocacy</p>
                <ul class="fw-light lh-lg list">
                  <li class="list--item">Educating citizens about their rights and responsibilities.</li>
                  <li class="list--item">Promoting active participation in democracy and governance.</li>
                  <li class="list--item">Raising awareness on critical issues like education, environment, and social justice.</li>
                </ul>
                <p className='fw-light fs-6 lh-lg m-0'>✅ Community-Led Initiatives</p>
                <ul class="fw-light lh-lg list">
                  <li class="list--item">Encouraging local solutions to social challenges.</li>
                  <li class="list--item">Supporting grassroots movements for sustainable change.</li>
                  <li class="list--item">Providing platforms for collective action and leadership development.</li>
                </ul>
                <p className='fw-light fs-6 lh-lg m-0'>✅ Partnerships & Policy Influence</p>
                <ul class="fw-light lh-lg list">
                  <li class="list--item">Collaborating with government agencies, NGOs, and corporate entities.</li>
                  <li class="list--item">Driving policy reforms for inclusive growth and equality.</li>
                  <li class="list--item">Bridging the gap between citizens and policymakers.</li>
                </ul>
                <p className='fs-6 fw-bold m-0'>Our Impact</p>
                <p className='fw-light fs-6 lh-lg m-0'>💡 10,000+ Citizens Engaged - Through workshops, campaigns, and training sessions.</p>
                <p className='fw-light fs-6 lh-lg m-0'>🌎 100+ Community Projects - Addressing social and environmental challenges.</p>
                <p className='fw-light fs-6 lh-lg m-0'>📢 Policy Advocacy - Contributing to reforms in education, health, and governance.</p>
                <p className='fw-light fs-6 lh-lg m-0'>Would you like any modifications, such as a different tone, additional sections, or a call-to-action tweak?</p>

              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
export default OpCivicDriven