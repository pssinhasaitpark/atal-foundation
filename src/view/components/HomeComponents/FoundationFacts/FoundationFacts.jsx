import React from "react";

const FoundationFacts = () => {
    const facts = [
        { value: "1085", label: "Employees" },
        { value: "2,196", label: "Employees" },
        { value: "$8.5M", label: "Employees" },
        { value: "826", label: "Employees" },
        { value: "50", label: "Employees" },
    ];

    return (
        <div className="container py-lg-5">
            <h2 className="fw-bold heading-font">Foundation facts</h2>
            <div className="row mt-4 justify-content-lg-between justify-content-center">
                {facts.map((fact, index) => (
                    <div key={index} className="col-6 col-sm-4 col-md-3 col-lg-2 mb-3 " style={{ backgroundColor: "#FBFBFB" }}>
                        <div className="p-lg-4 p-5 text-center">
                            <p className="fs-1 fw-bold mb-1 heading-font">{fact.value}</p>
                            <p className="mb-0 text-muted">{fact.label}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FoundationFacts;
