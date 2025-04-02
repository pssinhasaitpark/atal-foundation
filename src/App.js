import "./App.css";
import MainLayout from "./view/Layout/MainLayout";
import {
  HomePage,
  AboutUsPage,
  ContactsPage,
  GalleryPage,
  EventsPage,
  MessagePage,
  Popup,
  GetMembersPage,
  GetRegistrationPage,
  GetSupportSpeaksPage,
  SingleNewsPage,
  SingleFoundationDetailPage,
  SingleEventPage,
  PeopleBehindPage,
  BookDetailPage,
  SinglePeopleBehind,
} from "./view/pages/index";
import { CardComponent, AudioPlayer ,PageNotFound} from "./view/components";
import { useState, useEffect } from "react";
import { Route, Routes } from "react-router";
function App() {
  const [showPopup, setShowPopup] = useState(false);
  useEffect(() => {
    const popupShown = sessionStorage.getItem("popupShown");
    if (!popupShown) {
      setShowPopup(true);
      sessionStorage.setItem("popupShown", "true");
    }
  }, []);
  const closePopup = () => {
    setShowPopup(false);
  };
  return (
    <>
      {showPopup && <Popup onClose={closePopup} />}
      <div className="App">
        <AudioPlayer />
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<HomePage />} />
            <Route path="/about" element={<AboutUsPage />} />
            <Route path="/contacts" element={<ContactsPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/events" element={<EventsPage />} />
            <Route path="/message" element={<MessagePage />} />
            <Route path="/members" element={<GetMembersPage />} />
            <Route path="/registration" element={<GetRegistrationPage />} />
            <Route path="/supportspeaks" element={<GetSupportSpeaksPage />} />
            <Route path="/news/:id" element={<SingleNewsPage />} />
            <Route
              path="/foundation/:id"
              element={<SingleFoundationDetailPage />}
            />
            <Route path="/event/:id" element={<SingleEventPage />} />
            <Route
              path="/our-programmes/:category"
              element={<CardComponent />}
            />
            <Route path="/people-behind" element={<PeopleBehindPage />} />
            <Route path="/sada-atal" element={<BookDetailPage />} />
            <Route path="/people-behind/peopleBehind/:id" element={<SinglePeopleBehind />} />
            <Route path="*" element={<PageNotFound />} />
          </Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
