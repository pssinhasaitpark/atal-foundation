import React, { useCallback } from "react";
import { useFormik } from "formik";
import { ToastContainer } from "react-toastify";
import * as yup from "yup";
import { Row, Col } from "react-bootstrap";
import { useContacts } from "../../hooks/index";
import { contact1, contact2, contact3, ContactBanner } from "../../../assets/images/index";
import "./Contacts.css";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
const mapIconLogo = new L.Icon({
  iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",  // You can replace this URL with your own marker image
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});
const phoneRegExp =
  /^(\+?\d{0-9})?\s?-?\s?(\(?\d{7}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/;

const FormSchema = yup.object().shape({
  name: yup.string().max(30, "Must be 30 characters or less").required("Name is required"),
  email: yup
    .string()
    .matches(
      /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
      "Invalid email address"
    )
    .required("Email is required"),
  contact_no: yup.string().matches(phoneRegExp, "Phone number is not valid").required("Phone number is required"),
  enquiry: yup.string().max(300, "Enquiry must be less than 300 characters").required("Enquiry is required"),
});

const ContactCard = ({ image, title, content, type }) => {
  const handleClick = () => {
    if (type === "location") {
      window.open(`https://www.google.com/maps/search/?q=${encodeURIComponent(content)}`, "_blank");
    } else if (type === "phone") {
      window.location.href = `tel:${content}`;
    } else if (type === "email") {
      window.location.href = `mailto:${content}`;
    }
  };

  return (
    <div className="col-md-4 mb-3 position-relative" onClick={handleClick}>
      <div className="contact-card border-0 p-4 rounded-4 cursor-pointer">
        <div className="card-body">
          <div className="card-contact-imgs p-3 mb-3">
            <img loading="lazy" src={image} alt={title} />
          </div>
          <h5 className="fw-normal">{title}</h5>
          <p className="fw-light mb-0">{content}</p>
        </div>
      </div>
    </div>
  );
};

const Contacts = () => {
  const { mutate } = useContacts();

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      contact_no: "",
      enquiry: "",
    },
    validationSchema: FormSchema,
    onSubmit: (values) => {
      mutate(values);
    },
  });

  const position = [22.7146757, 75.9168254];

  const memoizedSubmit = useCallback((event) => formik.handleSubmit(event), [formik]);

  return (
    <div className="container text-center my-5">
      <div className="pages-banner-img">
        <img loading="lazy" src={ContactBanner} alt="Contact Banner" className="img-fluid w-100 h-100 object-fit-cover" />
      </div>
      <h2 className="fw-bold my-5 mb-4 heading-font">CONTACT US / JOIN US</h2>
      <p className="contact-page-maindescription mx-auto mb-5 fs-6 w-50 text-center fw-light lh-lg">
        At Atal Foundation, we are always ready to connect with individuals, organizations, and partners who share our vision of empowering communities and driving meaningful change. Whether you have a question, want to collaborate, or need support, we're here to help!
      </p>
      <div className="row mt-4 container mx-auto mb-5">
        <ContactCard
          image={contact1}
          title="OUR LOCATION"
          content="63, Prakriti Enclave bicholi hapsi road Indore"
          type="location"
        />
        <ContactCard
          image={contact2}
          title="PHONE NUMBER"
          content="91+942-531-6323"
          type="phone"
        />
        <ContactCard
          image={contact3}
          title="EMAIL ADDRESS"
          content="atalfoundation@gmail.com"
          type="email"
        />
      </div>

      <div className="position-relative" style={{ height: "120vh" }}>
        <div
          className="bg-img position-absolute w-100 h-100 "
          style={{
            zIndex: -1,
          }}
        ></div>
        <Row className="justify-content-center align-items-center h-100 mx-0 shadow">
          <Col md={8} lg={6} xl={5} className="bg-white p-4 shadow  w-75">
            <Row>
              <Col md={6} className="p-0">
                <MapContainer
                  center={position}
                  zoom={13}
                  style={{ height: "100%", width: "100%" }}
                  key={position}
                >
                  <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                  <Marker position={position} icon={mapIconLogo}>
                    <Popup>Our Location</Popup>
                  </Marker>
                </MapContainer>
              </Col>
              <Col md={6} className="p-5">
                <p className="contact-section-title mb-2 fs-2 text-start">GET A QUOTE NOW</p>
                <p className="contact-section-minidescription text-muted text-start fw-light">
                  We’d love to hear what you have in mind for your project and how we can help out. Contact us through the form below.
                </p>
                <form onSubmit={memoizedSubmit}>
                  <div className="mb-2">
                    <input
                      type="text"
                      placeholder="Your Name"
                      name="name"
                      onBlur={formik.handleBlur}
                      onChange={formik.handleChange}
                      value={formik.values.name}
                      required
                      className="form-control rounded-0 input-contact-fields fw-light"
                    />
                    {formik.touched.name && formik.errors.name && (
                      <div className="text-danger text-start fw-light">
                        {formik.errors.name}
                      </div>
                    )}
                  </div>

                  <div className="mb-2">
                    <input
                      type="email"
                      placeholder="Email Address"
                      name="email"
                      onBlur={formik.handleBlur}
                      onChange={formik.handleChange}
                      value={formik.values.email}
                      required
                      className="form-control rounded-0 input-contact-fields fw-light"
                    />
                    {formik.touched.email && formik.errors.email && (
                      <div className="text-danger text-start fw-light">{formik.errors.email}</div>
                    )}
                  </div>

                  <div className="mb-2">
                    <input
                      type="text"
                      placeholder="Phone Number"
                      name="contact_no"
                      onBlur={formik.handleBlur}
                      onChange={formik.handleChange}
                      value={formik.values.contact_no}
                      required
                      className="form-control rounded-0 input-contact-fields fw-light"
                    />
                    {formik.touched.contact_no && formik.errors.contact_no && (
                      <div className="text-danger text-start fw-light">
                        {formik.errors.contact_no}
                      </div>
                    )}
                  </div>

                  <div className="mb-3">
                    <textarea
                      placeholder="Your Enquiry"
                      name="enquiry"
                      onBlur={formik.handleBlur}
                      onChange={formik.handleChange}
                      value={formik.values.enquiry}
                      required
                      className="form-control rounded-0 input-contact-fields fw-light"
                    />
                    {formik.touched.enquiry && formik.errors.enquiry && (
                      <div className="text-danger text-start fw-light">
                        {formik.errors.enquiry}
                      </div>
                    )}
                  </div>

                  <button
                    type="submit"
                    className="btn btn-primary w-100 fw-bold font-monospace"
                  >
                    Submit
                  </button>
                </form>
              </Col>
            </Row>
          </Col>
        </Row>
        <ToastContainer />
      </div>
    </div>
  );
};

export default Contacts;
