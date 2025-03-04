import "./App.css";
import {
  HomePage,
  AboutUsPage,
  OpEducationPage,
  OpHealthcarePage,
  OpLivelihoodPage,
  OpGirlChildPage,
  OpPriviledgedPage,
  OpCivicDrivenPage,
  OpSocialPage,
  OpSpecialSupportPage,
  OpSpecialIntervationPage,
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
} from "./view/pages/index";
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
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutUsPage />} />
          <Route path="/Education" element={<OpEducationPage />} />
          <Route path="/Healthcare" element={<OpHealthcarePage />} />
          <Route path="/Livelihood" element={<OpLivelihoodPage />} />
          <Route
            path="/Girl Child & Women Empowerment"
            element={<OpGirlChildPage />}
          />
          <Route path="/Privileged Children" element={<OpPriviledgedPage />} />
          <Route path="/Civic Driven Change" element={<OpCivicDrivenPage />} />
          <Route path="/Social Entrepreneurship" element={<OpSocialPage />} />
          <Route
            path="/Special Support ourProgramme"
            element={<OpSpecialSupportPage />}
          />
          <Route
            path="/Special Interventions"
            element={<OpSpecialIntervationPage />}
          />
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
          <Route path="/people-behind" element={<PeopleBehindPage />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
