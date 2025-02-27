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
          <Route path="/OpEducation" element={<OpEducationPage />} />
          <Route path="/OpHealthcare" element={<OpHealthcarePage />} />
          <Route path="/OpLivelihood" element={<OpLivelihoodPage />} />
          <Route path="/OpGirlChild" element={<OpGirlChildPage />} />
          <Route path="/OpPrivileged" element={<OpPriviledgedPage />} />
          <Route path="/OpCivicDriven" element={<OpCivicDrivenPage />} />
          <Route path="/OpSocial" element={<OpSocialPage />} />
          <Route path="/OpSpecialSupport" element={<OpSpecialSupportPage />} />
          <Route
            path="/OpSpecialInterventions"
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
        </Routes>
      </div>
    </>
  );
}

export default App;
