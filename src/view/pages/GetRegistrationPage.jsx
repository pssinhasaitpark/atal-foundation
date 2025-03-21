import React, { useState } from "react";
import { Formik, Field, Form } from "formik";
import * as Yup from "yup";
import { ToastContainer, toast } from "react-toastify";
import useRegistration from "../hooks/useRegistration";
import { citiesList } from "../utils/index";
const states = Object.keys(citiesList);
const cities = citiesList;
const category = [
  "Individual",
  "Corporate",
  "Organisation",
  "NGO",
  "Medical Agency",
  "School",
  "College",
];

const validationSchema = Yup.object({
  message: Yup.string().required("Message is required"),
  first_name: Yup.string().required("First name is required"),
  last_name: Yup.string().required("Last name is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  mobile: Yup.string()
    .matches(/^[0-9]{10}$/, "Mobile number must be 10 digits")
    .required("Mobile is required"),
  address: Yup.string().required("Address is required"),
  gender: Yup.string().required("Gender is required"),
  date_of_birth: Yup.date().required("Date of birth is required"),
  city: Yup.string().required("City is required"),
  state: Yup.string().required("State is required"),
  category: Yup.string().required("Category is required"),
  designation: Yup.string().required("Designation is required"),
  images: Yup.array()
    .of(
      Yup.mixed()
        .test("fileType", "Only image files are allowed", (value) =>
          value && value[0] ? value[0] : true
        )
        .required("Image file is required")
    )
    .required("Profile image is required"),
});

const GetRegistrationPage = () => {
  const { mutate } = useRegistration();

  const [selectedState, setSelectedState] = useState("");
  // eslint-disable-next-line
  const [selectedCity, setSelectedCity] = useState("");
  const [imagePreview, setImagePreview] = useState(null);
  const initialValues = {
    message: "",
    first_name: "",
    last_name: "",
    email: "",
    mobile: "",
    address: "",
    gender: "",
    date_of_birth: "",
    city: "",
    state: "",
    category: "",
    designation: "",
    images: [],
  };

  const handleStateChange = (e) => {
    const selectedState = e.target.value;
    setSelectedState(selectedState);
    setSelectedCity("");
  };

  const handleImageChange = (event) => {
    const files = event.target.files;
    const fileArray = Array.from(files).map((file) => {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
      return reader.result;
    });

    setImagePreview(fileArray[0]);
  };

  const onSubmit = (values, { resetForm }) => {
    const formData = new FormData();
    Object.keys(values).forEach((key) => {
      if (key === "images") {
        values[key].forEach((image) => {
          formData.append(key, image);
        });
      } else {
        formData.append(key, values[key]);
      }
    });
    mutate(formData);

    resetForm();
    toast.success("Registration successful!");
  };

  return (
    <div className="App container mt-5 w-75 position-relative">
      <h4 className="text-center getInvolvedline">Registration Form</h4>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {({ touched, errors, setFieldValue }) => (
          <Form className="my-4">
            <div className="mb-3">
              <label htmlFor="first_name" className="form-label">
                First Name
              </label>
              <Field name="first_name" type="text" className="form-control" />
              {touched.first_name && errors.first_name && (
                <div className="text-danger">{errors.first_name}</div>
              )}
            </div>

            <div className="mb-3">
              <label htmlFor="last_name" className="form-label">
                Last Name
              </label>
              <Field name="last_name" type="text" className="form-control" />
              {touched.last_name && errors.last_name && (
                <div className="text-danger">{errors.last_name}</div>
              )}
            </div>

            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <Field name="email" type="email" className="form-control" />
              {touched.email && errors.email && (
                <div className="text-danger">{errors.email}</div>
              )}
            </div>
            <div className="mb-3">
              <label htmlFor="date_of_birth" className="form-label">
                Date of Birth
              </label>
              <Field
                name="date_of_birth"
                type="date"
                className="form-control"
              />
              {touched.date_of_birth && errors.date_of_birth && (
                <div className="text-danger">{errors.date_of_birth}</div>
              )}
            </div>
            <div className="mb-3 ">
              <label className="form-label">Gender</label>
              <div
                role="group"
                aria-labelledby="gender-radio-buttons"
                className="d-flex"
              >
                <div className="form-check me-5">
                  <Field
                    type="radio"
                    name="gender"
                    value="male"
                    className="form-check-input"
                    id="genderMale"
                  />
                  <label htmlFor="genderMale" className="form-check-label">
                    Male
                  </label>
                </div>
                <div className="form-check">
                  <Field
                    type="radio"
                    name="gender"
                    value="female"
                    className="form-check-input"
                    id="genderFemale"
                  />
                  <label htmlFor="genderFemale" className="form-check-label">
                    Female
                  </label>
                </div>
              </div>
              {touched.gender && errors.gender && (
                <div className="text-danger">{errors.gender}</div>
              )}
            </div>
            <div className="mb-3">
              <label htmlFor="mobile" className="form-label">
                Mobile
              </label>
              <Field name="mobile" type="text" className="form-control" />
              {touched.mobile && errors.mobile && (
                <div className="text-danger">{errors.mobile}</div>
              )}
            </div>

            <div className="mb-3">
              <label htmlFor="address" className="form-label">
                Address
              </label>
              <Field name="address" type="text" className="form-control" />
              {touched.address && errors.address && (
                <div className="text-danger">{errors.address}</div>
              )}
            </div>

            <div className="mb-3">
              <label htmlFor="state" className="form-label">
                State
              </label>
              <Field
                as="select"
                name="state"
                className="form-control"
                onChange={(e) => {
                  setFieldValue("state", e.target.value);
                  handleStateChange(e);
                }}
              >
                <option value="">Select a state</option>
                {states.map((state) => (
                  <option key={state} value={state}>
                    {state}
                  </option>
                ))}
              </Field>
              {touched.state && errors.state && (
                <div className="text-danger">{errors.state}</div>
              )}
            </div>

            <div className="mb-3">
              <label htmlFor="city" className="form-label">
                City
              </label>
              <Field as="select" name="city" className="form-control">
                <option value="">Select a city</option>
                {selectedState &&
                  cities[selectedState]?.map((city) => (
                    <option key={city} value={city}>
                      {city}
                    </option>
                  ))}
              </Field>
              {touched.city && errors.city && (
                <div className="text-danger">{errors.city}</div>
              )}
            </div>

            <div className="mb-3">
              <label htmlFor="category" className="form-label">
                Category
              </label>
              <Field
                as="select"
                name="category"
                className="form-control"
                onChange={(e) => {
                  setFieldValue("category", e.target.value);
                }}
              >
                <option value="">Select a category</option>
                {category.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </Field>
              {touched.category && errors.category && (
                <div className="text-danger">{errors.category}</div>
              )}
            </div>

            <div className="mb-3">
              <label htmlFor="designation" className="form-label">
                Designation
              </label>
              <Field name="designation" type="text" className="form-control" />
              {touched.designation && errors.designation && (
                <div className="text-danger">{errors.designation}</div>
              )}
            </div>

            <div className="mb-3">
              <label htmlFor="message" className="form-label">
                Message
              </label>
              <Field name="message" type="text" className="form-control" />
              {touched.message && errors.message && (
                <div className="text-danger">{errors.message}</div>
              )}
            </div>

            <div className="mb-3">
              <label htmlFor="images" className="form-label">
                Profile Image(s)
              </label>
              <input
                type="file"
                name="images"
                accept="image/*"
                className="form-control"
                onChange={(e) => {
                  const files = e.target.files;
                  setFieldValue("images", Array.from(files));
                  handleImageChange(e);
                }}
              />
              {imagePreview && (
                <img
                  src={imagePreview}
                  alt="Preview"
                  className="img-thumbnail mt-2 rounded-circle"
                  width="100"
                  style={{ height: "100px" }}
                />
              )}
              {touched.images && errors.images && (
                <div className="text-danger">{errors.images}</div>
              )}
            </div>

            <button type="submit" className="btn btn-primary d-flex mx-auto">
              Submit
            </button>
          </Form>
        )}
      </Formik>

      <ToastContainer />
    </div>
  );
};

export default GetRegistrationPage;
