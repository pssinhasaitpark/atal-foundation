import React from "react";
import { Events } from "../components/index";
import { useEventsImgs, useEventsVids } from "../hooks";
import LoadingSpinner from "../components/LoadingSpinner/LoadingSpinner";
const EventsPage = () => {
  const { isLoading: imgLoad } = useEventsImgs();
  const { isLoading: vidLoad } = useEventsVids();

  return (
    <>
      {imgLoad && vidLoad ? (
        <LoadingSpinner />
      ) : (
        <div className="App">
          <Events />
        </div>
      )}
    </>
  );
};

export default EventsPage;
