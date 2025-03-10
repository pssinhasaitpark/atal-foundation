import React, { useState, useEffect } from "react";
import {
  HomeSlider,
  TopProgrammes,
  PeopleBehind,
  EventGallery,
  OurNews,
  VisionSection,
  MissionSection,
  PhotoGallery2,
  FoundationFacts,
  MoreAboutFoundation,
} from "../components/index";
import LoadingSpinner from "../components/LoadingSpinner/LoadingSpinner";

const HomePage = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const isFirstLoad = sessionStorage.getItem("isFirstLoad");

    if (!isFirstLoad) {
      setTimeout(() => {
        setIsLoading(false);
        sessionStorage.setItem("isFirstLoad", "true");
      }, 1500);
    } else {
      setIsLoading(false);
    }
  }, []);

  return (
    <>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <>
          <div className="App">
            <HomeSlider />
            <TopProgrammes />
            <PeopleBehind />
            <EventGallery />
            <VisionSection />
            <OurNews />
            <MissionSection />
            <PhotoGallery2 />
            <FoundationFacts />
            <MoreAboutFoundation />
          </div>
        </>
      )}
    </>
  );
};

export default HomePage;
