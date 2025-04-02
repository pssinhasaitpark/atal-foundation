import React from "react";
import { Container, Button, Alert } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaCookie } from "react-icons/fa";
import { AiOutlineArrowLeft } from "react-icons/ai";
const PageNotFound = () => {
  return (
    <Container
      className="d-flex flex-column align-items-center justify-content-center"
      style={{ height: "50vh", textAlign: "center" }}
    >
      <h1 style={{ fontSize: "5rem" }}>
        404 <FaCookie style={{ fontSize: "2rem" }} />
      </h1>
      <h4>Oops! Page not found</h4>
      <Alert style={{ maxWidth: 600, marginBottom: "1rem",  backgroundColor:"rgb(246 134 51 / 48%)", }}>
        It's looking like you may have taken a wrong turn. Don't worry... it
        happens to the best of us. Here's a little tip that might help you get
        back on track.
      </Alert>
      <Button
       className="rounded"
        as={Link}
        to="/"
        style={{
          padding: "",
          fontSize: "",
          
          backgroundColor:"#f68633",
        }}
      >
        <AiOutlineArrowLeft style={{}} /> Back to main
      </Button>
    </Container>
  );
};

export default PageNotFound;
