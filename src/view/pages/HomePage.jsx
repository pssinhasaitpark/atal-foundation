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
const HomePage = () => {
  return (
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
  );
};

export default HomePage;
