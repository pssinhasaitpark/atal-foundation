import React from "react";

const LoadingSpinner = () => {
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "rgba(199, 199, 199, 0.07)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 9999,
        transition: 'opacity 1s ease-out'
      }}
    >
      <div className="spinner-border text-warning" role="status">
        <span className="sr-only"></span>
      </div>
    </div>
  );
};

export default LoadingSpinner;
