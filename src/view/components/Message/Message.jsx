import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import useMessagesUs from "../../hooks/useMessageUs";
import { toast } from "react-toastify";

const MessageForm = () => {
  const { mutate, isLoading } = useMessagesUs();
  const validationSchema = Yup.object({
    name: Yup.string()
      .required("Name is required")
      .min(2, "Name must be at least 2 characters"),
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    message: Yup.string()
      .required("Message is required")
      .min(10, "Message must be at least 10 characters"),
  });

  return (
    <div className="container my-5">
      <div className="w-50 mx-auto">
        <h1 className="text-center">Message Us</h1>
        <Formik
          initialValues={{
            name: "",
            email: "",
            message: "",
          }}
          validationSchema={validationSchema}
          onSubmit={(values, { resetForm }) => {
            mutate(values, {
              onSuccess: () => {
                toast.success("Your message has been submitted successfully!");
                resetForm();
              },
              onError: (error) => {
                toast.error("There was an error submitting your message.");
              },
            });
          }}
        >
          {({ isSubmitting }) => (
            <Form>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Name:
                </label>
                <Field
                  type="text"
                  id="name"
                  name="name"
                  className="form-control"
                />
                <ErrorMessage
                  name="name"
                  component="div"
                  className="text-danger"
                />
              </div>

              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email:
                </label>
                <Field
                  type="email"
                  id="email"
                  name="email"
                  className="form-control"
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-danger"
                />
              </div>

              <div className="mb-3">
                <label htmlFor="message" className="form-label">
                  Message:
                </label>
                <Field
                  as="textarea"
                  id="message"
                  name="message"
                  className="form-control"
                  rows="4"
                />
                <ErrorMessage
                  name="message"
                  component="div"
                  className="text-danger"
                />
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  disabled={isSubmitting || isLoading}
                  className="btn btn-primary"
                >
                  Submit
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default MessageForm;
