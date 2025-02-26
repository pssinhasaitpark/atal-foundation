import React from 'react';
import { Col, Form, Button } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import { Formik } from 'formik';
import * as Yup from 'yup';

const MessageUs = () => {
    const handleSubmit = (values) => {
        toast.success("Message sent successfully!");
    };
    const validationSchema = Yup.object({
        name: Yup.string()
            .required("Name is required")
            .min(3, "Name must be at least 3 characters long"),
        email: Yup.string()
            .email("Invalid email format")
            .required("Email is required"),
        message: Yup.string()
            .required("Message is required")
            .min(10, "Message must be at least 10 characters long"),
    });

    return (
        <div className="container">
            <ToastContainer />
            <div className="my-5">
                <Col md={6}>
                    <h4>Message Us</h4>
                    <Formik
                        initialValues={{
                            name: '',
                            email: '',
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
                                <Form.Group className="mb-3" controlId="message">
                                    <Form.Label>Message</Form.Label>
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

export default MessageUs;
