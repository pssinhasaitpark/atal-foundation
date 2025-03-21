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
      description:
        "In 1951, Vajpayee was seconded by the RSS, along with Deendayal Upadhyaya, to work for the newly formed Bharatiya Jana Sangh, a Hindu right-wing political party associated with the RSS. He was appointed as a national secretary of the party in charge of the Northern region, based in Delhi. He soon became a follower and aide of party leader Syama Prasad Mukherjee. In the 1957 Indian general election, Vajpayee contested elections to the Lok Sabha, the lower house of the Indian Parliament. He lost to Raja Mahendra Pratap in Mathura, but was elected from Balrampur.",

      image: MoreAboutFoundationImage1,
    },
    2: {
      title: "How we work",
      description:
        "In 1951, Vajpayee was seconded by the RSS, along with Deendayal Upadhyaya, to work for the newly formed Bharatiya Jana Sangh, a Hindu right-wing political party associated with the RSS. He was appointed as a national secretary of the party in charge of the Northern region, based in Delhi. He soon became a follower and aide of party leader Syama Prasad Mukherjee. In the 1957 Indian general election, Vajpayee contested elections to the Lok Sabha, the lower house of the Indian Parliament. He lost to Raja Mahendra Pratap in Mathura, but was elected from Balrampur.",

      image: MoreAboutFoundationImage2,
    },
    3: {
      title: "Our vision",
      description:
        "In 1951, Vajpayee was seconded by the RSS, along with Deendayal Upadhyaya, to work for the newly formed Bharatiya Jana Sangh, a Hindu right-wing political party associated with the RSS. He was appointed as a national secretary of the party in charge of the Northern region, based in Delhi. He soon became a follower and aide of party leader Syama Prasad Mukherjee. In the 1957 Indian general election, Vajpayee contested elections to the Lok Sabha, the lower house of the Indian Parliament. He lost to Raja Mahendra Pratap in Mathura, but was elected from Balrampur.",

      image: MoreAboutFoundationImage3,
    },
  };

  const foundation = foundationDetails[id];

  if (!foundation) {
    return <div>Foundation not found!</div>;
  }

  return (
    <div className="App foundation-detail-container container my-5 w-75">
      <h2 className="heading-font text-center">{foundation.title}</h2>
      <img
        src={foundation.image}
        alt={foundation.title}
        className="w-100 my-4"
      />
      <p>{foundation.description}</p>
    </div>
  );
};

export default SingleFoundationDetailPage;
