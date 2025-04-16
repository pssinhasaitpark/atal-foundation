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
  AudioSection,
  BookSection,
  Certificates
} from "../components/index";

const HomePage = () => {
  return (
    <>
      <div className="App">
        <HomeSlider />
        <TopProgrammes />
        <BookSection />
        <PeopleBehind />
        <EventGallery />
        <VisionSection />
        <OurNews />
        <MissionSection />
        <Certificates/>
        <PhotoGallery2 />
        <FoundationFacts />
        <MoreAboutFoundation />
        <AudioSection />
      </div>
    </>
  );
};

export default HomePage;
