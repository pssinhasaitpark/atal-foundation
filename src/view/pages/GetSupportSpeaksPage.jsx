import React from "react";
import { useSupportSpeaks } from "../hooks/index";

const GetSupportSpeaksPage = () => {
  const { data, isLoading, status } = useSupportSpeaks();
  if (isLoading) return <div className="spinner"></div>;
  if (status === "failed")
    return (
      <h4 className="my-5 py-5  text-center getInvolvedline">
        No Data Available
      </h4>
    );
  const supportSpeaksData = data?.supportSpeakers;
  if (supportSpeaksData === undefined)
    return (
      <h4 className="my-5 py-5  text-center getInvolvedline">
        No Data Available
      </h4>
    );

  return (
    <div className="App container mt-5 w-75 position-relative">
      <h4 className="text-center getInvolvedline">Support Speaks</h4>
      <div className="row">
        {supportSpeaksData?.map((person, index) => (
          <div key={index} className="col-md-6 mb-4">
            <div className="card shadow-sm p-3 d-flex flex-row align-items-center">
              <img
                src={person.images[0].url}
                alt={person.name}
                className="rounded-circle me-3"
                width="80"
                height="80"
              />
              <div>
                <h5 className="fw-bold">{person.name}</h5>
                {person.post && <p className="mb-1">{person.post}</p>}
                <p className="text-muted">{person.location}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GetSupportSpeaksPage;
