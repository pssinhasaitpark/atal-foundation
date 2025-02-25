import React from 'react'
import { Header, HomeSlider, TopProgrammes, PeopleBehind, EventGallery, Footer, OurNews, VisionSection, MissionSection, PhotoGallery2,FoundationFacts,MoreAboutFoundation } from '../components/index'
const HomePage = () => {
    return (
        <div>
            <Header />
            <HomeSlider />
            <TopProgrammes />
            <PeopleBehind />
            <EventGallery />
            <VisionSection />
            <OurNews />
            <MissionSection />
            <PhotoGallery2 />
            <FoundationFacts/>
            <MoreAboutFoundation/>
            <Footer />
        </div>
    )
}

export default HomePage