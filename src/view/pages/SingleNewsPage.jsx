import React from "react";
import { useParams } from "react-router-dom";
import useOurNews from "../hooks/useOurNews";

const SingleNewsPage = () => {
  const { id } = useParams();
  const { data, isLoading, isError } = useOurNews();
  if (isLoading)
    return <p className="text-muted fs-2 text-center">Loading Gallery...</p>;
  if (isError && isError)
    return <p className="text-muted fs-2 text-center">Error: {isError}</p>;
  const newsItem = data.find((item) => item._id === id);

  if (!newsItem) {
    return <div>News not found!</div>;
  }

  return (
    <div className="App news-detail-container container my-5 w-75">
      <h2 className="heading-font text-center">{newsItem.headline}</h2>
      <img
        src={newsItem.images}
        alt={newsItem.headline}
        className="w-100 my-4 object-fit-contain"
        style={{ height: "500px" }}
      />
      <div
        className="fw-light fs-6 lh-lg"
        dangerouslySetInnerHTML={{
          __html: newsItem.description,
        }}
      />
    </div>
  );
};

export default SingleNewsPage;
