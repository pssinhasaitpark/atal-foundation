import "./App.css";
import { HomePage } from "./view/pages/index";
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
      <HomePage />
    </>
  );
}
export default App;
