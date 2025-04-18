import React, { useState } from "react";
import { useNavigate } from "react-router";
import { useBookSection } from "../../../hooks/index";
import "./BookSection.css";
import LightBox from "../../LightBox";
const BookSection = () => {
  const navigate = useNavigate();
  const { data, isLoading, isError, status } = useBookSection();
  const [open, setOpen] = useState(false);
  // eslint-disable-next-line
  const [photoIndex, setPhotoIndex] = useState(0);
  if (isLoading) return <div className="spinner"></div>;
  if (status === "failed") return <div>Error: {isError}</div>;
  if (data == null) return <></>;
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const handleClick = () => {
    navigate("/sada-atal");
  };
  return (
    <div className="container border-bottom rounded-5 py-lg-4 py-4">
      <div className="row align-items-center">
        <div className="col-md-5">
          <div className="atal-bookimg-div border shadow rounded-5">
            <img
              onClick={() => {
                setOpen(true);
              }}
              loading="lazy"
              src={`${process.env.REACT_APP_BASE_IMG_URL + data?.cover_image}`}
              alt={data?.book_title}
              className="img-fluid w-100 h-100 object-fit-cover rounded-5"
            />
          </div>
        </div>
        <div className="col-md-7">
          <div className="py-3 px-4">
            <p className="heading-font fs-3">{data?.book_title}</p>

            <div
              className="fw-light my-lg-4 fs-6 lh-lg"
              style={{
                display: "-webkit-box",
                WebkitLineClamp: 7,
                WebkitBoxOrient: "vertical",
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "normal",
              }}
              dangerouslySetInnerHTML={{
                __html: data.description,
              }}
            />
            <button
              onClick={() => {
                handleClick();
                scrollToTop();
              }}
              className="custom-button"
            >
              More Details
            </button>
          </div>
        </div>
      </div>
      <LightBox
        open={open}
        onClose={() => setOpen(false)}
        photoIndex={photoIndex}
        images={Array(data?.cover_image)}
        source={process.env.REACT_APP_BASE_IMG_URL}
      />
    </div>
  );
};

export default BookSection;
