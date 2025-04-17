import React, { useState } from "react";
import { useParams } from "react-router-dom";
import useOurNews from "../hooks/useOurNews";
import LightBox from "../components/LightBox";
const SingleNewsPage = () => {
  const { id } = useParams();
  const { data, isLoading, isError } = useOurNews();
  const [open, setOpen] = useState(false);
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
        src={`${process.env.REACT_APP_BASE_IMG_URL + newsItem.images}`}
        onClick={() => {
          setOpen(true);
        }}
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
      <LightBox
        open={open}
        onClose={() => setOpen(false)}
        images={newsItem.images}
        source={process.env.REACT_APP_BASE_IMG_URL}
      />
    </div>
  );
};

export default SingleNewsPage;
