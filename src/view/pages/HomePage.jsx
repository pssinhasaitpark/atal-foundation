import React from "react";
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
import {
  useHomeSlide,
  useOurProgram,
  useOurNews,
  useGallery,
} from "../hooks/index";
const HomePage = () => {
  const { isLoading: homeSliderLoading } = useHomeSlide();
  const { isLoading: ourProgramLoading } = useOurProgram();
  const { isLoading: ourNewsLoading } = useOurNews();
  const { isLoading: galleryLoading } = useGallery();
  return (
    <>
      {homeSliderLoading &&
      ourProgramLoading &&
      ourNewsLoading &&
      galleryLoading ? (
        <LoadingSpinner />
      ) : (
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
      )}
    </>
  );
};

export default HomePage;
