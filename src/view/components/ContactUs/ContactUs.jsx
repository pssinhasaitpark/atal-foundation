import React from 'react';
import { Col, Form, Button } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import { Formik } from 'formik';
import * as Yup from 'yup';

const ContactUs = () => {
  const handleSubmit = (values) => {
    toast.success("Message sent successfully!");
    console.log(values);
  };
  const validationSchema = Yup.object({
    name: Yup.string()
      .required("Name is required")
      .min(3, "Name must be at least 3 characters long"),
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    phone: Yup.string()
      .required("Contact Number is required")
      .matches(
        /^[0-9]{10}$/,
        "Contact Number must be exactly 10 digits"
      ),
    message: Yup.string()
      .required("Message is required")
      .min(10, "Message must be at least 10 characters long"),
  });

  return (
    <div className="container">
      <ToastContainer />
      <div className="my-5">
        <Col md={6}>
          <h4>Contact Us</h4>
          <Formik
            initialValues={{
              name: '',
              email: '',
              phone: '',
              message: '',
            }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting,
            }) => (
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="name">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="name"
                    placeholder="Enter your name"
                    value={values.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    isInvalid={touched.name && errors.name}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.name}
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="mb-3" controlId="email">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    isInvalid={touched.email && errors.email}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.email}
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="mb-3" controlId="phone">
                  <Form.Label>Contact Number</Form.Label>
                  <Form.Control
                    type="text"
                    name="phone"
                    placeholder="Enter Contact Number"
                    value={values.phone}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    isInvalid={touched.phone && errors.phone}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.phone}
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="mb-3" controlId="message">
                  <Form.Label>Enquiry</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    name="message"
                    placeholder="Write your message"
                    value={values.message}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    isInvalid={touched.message && errors.message}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.message}
                  </Form.Control.Feedback>
                </Form.Group>

                <Button variant="success" type="submit" className="w-100" disabled={isSubmitting}>
                  Send Message
                </Button>
              </Form>
            )}
          </Formik>
        </Col>
      </div>
    </div>
  );
};

export default ContactUs;
