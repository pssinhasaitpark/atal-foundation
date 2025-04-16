import React from "react";
import { useParams } from "react-router-dom";
import {
  MoreAboutFoundationImage1,
  MoreAboutFoundationImage2,
  MoreAboutFoundationImage3,
} from "../../assets/images/index";

const SingleFoundationDetailPage = () => {
  const { id } = useParams();
  const foundationDetails = {
    1: {
      title: "Our role",
      description:" <p>At Atal Foundation, our role goes beyond support — we are catalysts for change.</p><p>Rooted in the values of <strong>leadership</strong>, <strong>inclusivity</strong>, and <strong>service</strong>, we work to identify pressing social challenges and provide sustainable solutions through action-driven initiatives.</p><h2>Our Focus Areas</h2>    <ul><li>Education & Skill Development</li><li>Health & Well-being</li><li>Women & Youth Empowerment</li><li>Community Outreach & Awareness</li> </ul> <p>We partner with communities, institutions, and changemakers to create opportunities, bridge gaps, and build a future inspired by the legacy of <strong>Atal Bihari Vajpayee ji</strong>.</p><p>Empowering lives. Strengthening communities. Leading change.</p>",
      image: MoreAboutFoundationImage1,
    },
    2: {
      title: "How we work",
      description:"<div><h1>Atal Foundation</h1><p>At Atal Foundation, our role goes beyond support — we are catalysts for change.</p><p>Rooted in the values of <strong>leadership</strong>, <strong>inclusivity</strong>, and <strong>service</strong>, we work to identify pressing social challenges and provide sustainable solutions through action-driven initiatives.</p><h2>Our Focus Areas</h2><ul><li>Education & Skill Development</li><li>Health & Well-being</li><li>Women & Youth Empowerment</li><li>Community Outreach & Awareness</li></ul><p>We partner with communities, institutions, and changemakers to create opportunities, bridge gaps, and build a future inspired by the legacy of <strong>Atal Bihari Vajpayee ji</strong>.</p><p><strong>Empowering lives. Strengthening communities. Leading change.</strong></p><h2>Our Approach</h2><p>At Atal Foundation, we follow a people-first, ground-up approach. Our work begins with listening to communities, understanding their challenges, and identifying areas where meaningful change is needed the most. We then design and implement solutions that are sustainable, inclusive, and tailored to real-life needs. Every initiative is built on the pillars of transparency, collaboration, and accountability — ensuring that the impact we create is lasting and measurable. By partnering with local leaders, volunteers, experts, and institutions, we bring together resources and minds to uplift lives and empower communities across India.</p><p><strong>Our mission is simple: act with purpose, and build with heart.</strong></p></div>",
      image: MoreAboutFoundationImage2,
    },
    3: {
      title: "Our vision",
      description:"<div><h2>Our Vision</h2><p>To build an inclusive, empowered, and progressive India, where every individual—regardless of background—has the opportunity to grow, contribute, and lead.</p><p>Inspired by the ideals of Shri Atal Bihari Vajpayee ji, we envision a nation driven by service, unity, and innovation, where compassion fuels action and community uplifts every citizen.</p><p>Our goal is to nurture responsible citizens, spark social change, and create a lasting impact through initiatives rooted in culture, character, and collective progress.</p></div>",      image: MoreAboutFoundationImage3,
    },
  };

  const foundation = foundationDetails[id];

  if (!foundation) {
    return <div>Foundation not found!</div>;
  }

  return (
    <div className="App foundation-detail-container container my-5 ">
      <h2 className="heading-font text-center">{foundation.title}</h2>
      <img
        src={foundation.image}
        alt={foundation.title}
        className="w-100 my-4"
      />
      <div
                    className="fw-light fs-6 lh-lg"
                    dangerouslySetInnerHTML={{
                      __html: foundation.description,
                    }}
                  />
    </div>
  );
};

export default SingleFoundationDetailPage;
