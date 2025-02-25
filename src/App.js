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
  Popup,
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
        </Routes>
      </div>
    </>
  );
}

export default App;
