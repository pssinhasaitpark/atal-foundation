import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "bootstrap/dist/css/bootstrap.min.css";

const statesOfIndia = [
  "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", "Goa",
  "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka", "Kerala",
  "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram", "Nagaland",
  "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura",
  "Uttar Pradesh", "Uttarakhand", "West Bengal"
];


const citiesOfIndia = [
  "Mumbai", "Delhi", "Bangalore", "Hyderabad", "Ahmedabad", "Chennai", "Kolkata",
  "Surat", "Pune", "Jaipur", "Lucknow", "Kanpur", "Nagpur", "Indore", "Bhopal",
  "Visakhapatnam", "Patna", "Vadodara", "Ghaziabad", "Ludhiana", "Agra",
  "Nashik", "Faridabad", "Meerut", "Rajkot", "Kalyan-Dombivli", "Vasai-Virar",
  "Varanasi", "Srinagar", "Aurangabad", "Dhanbad"
];

const categories = ["Individual", "Corporate", "School", "College", "Medical Agency", "NGO"];

const GetRegistration = () => {

  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required("First Name is required"),
    lastName: Yup.string().required("Last Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    contactNo: Yup.string()
      .matches(/^\d{10}$/, "Invalid contact number")
      .required("Contact No. is required"),
    address: Yup.string().required("Address is required"),
    gender: Yup.string().required("Gender is required"),
    dobYear: Yup.string().required("Year is required"),
    dobMonth: Yup.string().required("Month is required"),
    dobDay: Yup.string().required("Day is required"),
    city: Yup.string().required("City is required"),
    state: Yup.string().required("State is required"),
    category: Yup.string().required("Category is required"),
    designation: Yup.string().required("Designation is required"),
    message: Yup.string(),
    photo: Yup.mixed().required("Photo is required"),
  });

  return (
    <div className="container my-4">
      <div className="w-50 mx-auto">
      <h4>Member Information</h4>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          contactNo: "",
          address: "",
          gender: "",
          dobYear: "",
          dobMonth: "",
          dobDay: "",
          city: "",
          state: "",
          category: "",
          designation: "",
          message: "",
          photo: null,
        }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          console.log("Form Data:", values);
          alert("Form Submitted Successfully!");
        }}
      >
        {({ setFieldValue }) => (
          <Form className="mt-3">
            <div className="row">

              <div className="col-md-6 mb-2">
                <label>First Name *</label>
                <Field type="text" name="firstName" className="form-control" />
                <ErrorMessage name="firstName" component="div" className="text-danger" />
              </div>


              <div className="col-md-6 mb-2">
                <label>Last Name *</label>
                <Field type="text" name="lastName" className="form-control" />
                <ErrorMessage name="lastName" component="div" className="text-danger" />
              </div>
            </div>

            <div className="mb-2">
              <label>Email Id *</label>
              <Field type="email" name="email" className="form-control" />
              <ErrorMessage name="email" component="div" className="text-danger" />
            </div>


            <div className="mb-2">
              <label>Contact No.</label>
              <Field type="text" name="contactNo" className="form-control" />
              <ErrorMessage name="contactNo" component="div" className="text-danger" />
            </div>

            <div className="mb-2">
              <label>Address</label>
              <Field as="textarea" name="address" className="form-control" />
              <ErrorMessage name="address" component="div" className="text-danger" />
            </div>

            <div className="mb-2">
              <label>Gender</label>
              <div>
                <Field type="radio" name="gender" value="Male" /> Male
                <Field type="radio" name="gender" value="Female" className="ms-3" /> Female
              </div>
              <ErrorMessage name="gender" component="div" className="text-danger" />
            </div>


            <div className="mb-2">
              <label>Date of Birth</label>
              <div className="d-flex gap-2">
                <Field as="select" name="dobYear" className="form-control">
                  <option value="">Year</option>
                  {[...Array(100)].map((_, i) => (
                    <option key={i} value={2025 - i}>{2025 - i}</option>
                  ))}
                </Field>
                <Field as="select" name="dobMonth" className="form-control">
                  <option value="">Month</option>
                  {[...Array(12)].map((_, i) => (
                    <option key={i} value={i + 1}>{i + 1}</option>
                  ))}
                </Field>
                <Field as="select" name="dobDay" className="form-control">
                  <option value="">Day</option>
                  {[...Array(31)].map((_, i) => (
                    <option key={i} value={i + 1}>{i + 1}</option>
                  ))}
                </Field>
              </div>
            </div>


            <div className="row">
              <div className="col-md-6">
                <label>State</label>
                <Field as="select" name="state" className="form-control">
                  <option value="">Select State</option>
                  {statesOfIndia.map((state, index) => (
                    <option key={index} value={state}>{state}</option>
                  ))}
                </Field>
              </div>

              <div className="col-md-6">
                <label>City</label>
                <Field as="select" name="city" className="form-control">
                  <option value="">Select City</option>
                  {citiesOfIndia.map((city, index) => (
                    <option key={index} value={city}>{city}</option>
                  ))}
                </Field>
              </div>
            </div>

            <div className="mb-2">
              <label>Category</label>
              <Field as="select" name="category" className="form-control">
                {categories.map((category, index) => (
                  <option key={index} value={category}>{category}</option>
                ))}
              </Field>
            </div>

            <div className="text-center"><button type="submit" className=" btn btn-primary">Submit</button></div>
          </Form>
        )}
      </Formik>
    </div>
    </div>
  );
};

export default GetRegistration;
