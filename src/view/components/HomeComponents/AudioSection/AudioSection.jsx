import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Container } from "react-bootstrap";
import { LuMoveLeft, LuMoveRight } from "../../../../assets/logos/index";
import { useAudio } from "../../../hooks/index";
import {
  atalaudio1,
  atalaudio2,
  atalaudio3,
  atalaudio4,
  atalaudio5,
  atalaudio6,
  atalaudio7,
} from "../../../../assets/images/index";
const audioData = [
  {
    heading: "10 Famous and Best Poems of Atal Bihari Vajpayee - In Voice",
    description: "Atal Bihari Vajpayee - In Voice",
    audio_section: [
      {
        title: "सरकारें आएंगी, जाएंगी, पार्टियां बनेंगी",
        images: [atalaudio1],
        audio: "https://example.com/audio1.mp3",
      },
      {
        title: "हम शांति को स्थायी बनाना चाहते हैं।",
        images: [atalaudio2],
        audio: "https://example.com/audio2.mp3",
      },
      {
        title: "विकास के लिए शांति आवश्यक है।",
        images: [atalaudio3],
        audio: "https://example.com/audio3.mp3",
      },
      {
        title: "हिंसा से कुछ भी हासिल नहीं होता।",
        images: [atalaudio4],
        audio: "https://example.com/audio4.mp3",
      },
      {
        title: "आप मित्र बदल सकते हैं, लेकिन पड़ोसी नहीं।",
        images: [atalaudio5],
        audio: "https://example.com/audio4.mp3",
      },
      {
        title: "हम सभी धर्मों के समान सम्मान में विश्वास रखते हैं।",
        images: [atalaudio6],
        audio: "https://example.com/audio4.mp3",
      },
      {
        title: "मैं मानता हूँ कि बंदूक किसी समस्या का समाधान नहीं है।",
        images: [atalaudio7],
        audio: "https://example.com/audio4.mp3",
      },
    ],
  },
];
const AudioCard = ({ info }) => {
  return (
    <>
      <div
        className="row border rounded-4 m-1 p-1 py-4"
        style={{
          backgroundColor: "#efefef4f",
          boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px",
        }}
      >
        <div className="col-sm-4 p-0">
          <img
            src={info.images}
            className="audio--sec-img w-100 object-fit-cover rounded-4"
            style={{ height: "100px" }}
            alt={info.title}
          />
        </div>
        <div className="col-sm-8 d-flex flex-column justify-content-around">
          <p
            className="heading-font text-center"
            style={{
              display: "-webkit-box",
              WebkitLineClamp: 1,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "normal",
            }}
          >
            {info.title}
          </p>
          <audio controls className="audio--sec-audio w-100 h-lg-50">
            <source src={info.audio} type="audio/mp3" />
            Your browser does not support the audio element.
          </audio>
        </div>
      </div>
    </>
  );
};
const AudioSection = () => {
  const swiperRef = useRef(null);
  const { data, isLoading, isError, status } = useAudio();
  if (isLoading) return <div className="spinner"></div>;
  if (status === "failed") return <div>Error: {isError}</div>;
  console.log(data);

  const handlePrevClick = () => {
    swiperRef.current.swiper.slidePrev();
  };

  const handleNextClick = () => {
    swiperRef.current.swiper.slideNext();
  };

  return (
    <div>
      <Container className="py-lg-4 py-3">
        <div>
          <div className="d-flex justify-content-between align-items-center mb-3">
            <div>
              <h2 className="top-programmes-title audio-gallery-title align-items-center heading-font">
                {audioData[0].heading}
              </h2>
              <p className="heading-font custom-our-mission-sub">
                {audioData[0].description}
              </p>
            </div>
            <span>
              <button
                className="btn px-3 py-0 fs-2 border-0"
                onClick={handlePrevClick}
                aria-label="handlePrevClick"
              >
                <LuMoveLeft />
              </button>
              <button
                className="btn px-3 py-0 fs-2 border-0"
                onClick={handleNextClick}
                aria-label="handleNextClick"
              >
                <LuMoveRight />
              </button>
            </span>
          </div>

          <Swiper
            ref={swiperRef}
            spaceBetween={2}
            modules={[]}
            className="mySwiper mb-4"
            breakpoints={{
              400: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 4,
              },
            }}
          >
            {audioData[0]?.audio_section?.map((data, index) => (
              <SwiperSlide key={index} className="">
                <AudioCard info={data} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </Container>
    </div>
  );
};

export default AudioSection;
