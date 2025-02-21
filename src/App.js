import "./App.css";
import {
  HomePage,
  AboutUsPage,
  OpEducationPage,
  OpHealthcarePage,
  OpLivelihoodPage,
  OpGirlChildPage,
} from "./view/pages/index";
import { Route, Routes } from "react-router";
function App() {
  // const [showPopup, setShowPopup] = useState(true);
  // useEffect(() => {
  //   setShowPopup(true);
  // }, []);
  // const closePopup = () => {
  //   setShowPopup(false);
  // };
  return (
    <>
      {/* {showPopup && <Popup onClose={closePopup} />} */}
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutUsPage />} />
          <Route path="/OpEducation" element={<OpEducationPage />} />
          <Route path="/OpHealthcare" element={<OpHealthcarePage />} />
          <Route path="/OpLivelihood" element={<OpLivelihoodPage />} />
          <Route path="/OpGirlChild" element={<OpGirlChildPage />} />
        </Routes>
      </div>
    </>
  );
}
export default App;
