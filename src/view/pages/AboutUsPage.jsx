import React from "react";
import { AboutUsComponent } from "../components/index";
import LoadingSpinner from "../components/LoadingSpinner/LoadingSpinner";
import { useAboutUs } from "../hooks";

const AboutUs = () => {
  const { isLoading } = useAboutUs();

  return (
    <>


      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <div className="App">
          <AboutUsComponent />
        </div>
      )}
    </>
  );
};

export default AboutUs;
