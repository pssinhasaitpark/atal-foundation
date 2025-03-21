import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import FooterBottom from "./FooterBottom.jsx";
import {
  FaWhatsapp,
  TiSocialFacebookCircular,
  FaInstagram,
  AiOutlineYoutube,
} from "../../../assets/logos/index.js";
import { useFormik } from "formik";
import * as Yup from "yup";
import useSubscribe from "../../hooks/useSubscribe.js";
import useSocialMediaLinks from "../../hooks/useSocialMediaLinks.js";
const FooterLeftData = [
  {
    badge: {
      text: "Atal Foundation",
      classCSS: "custom-badge-footer badge  mb-3 text-uppercase",
    },
    heading: {
      text: "building a stronger india, inspired by atal",
      classCss: "custom-footer-text heading-font",
    },
  },
];
const quickLinks = [
  { title: "Home", url: "/" },
  { title: "Gallery", url: "/gallery" },
  { title: "About", url: "/about" },
  { title: "Message", url: "/message" },
  { title: "Our Programmes", url: "/our-programmes/Education" },
  { title: "Events", url: "/events" },
  { title: "Get Involved", url: "/registration" },
  { title: "Contact", url: "/contacts" },
];
const Footer = () => {
  const { mutate: subscribe, isPending } = useSubscribe();
  const {
    data: socialMediaLinks,
    isLoading: isLoadingLinks,
    isError: isErrorLinks,
  } = useSocialMediaLinks();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
    }),
    onSubmit: (values, { resetForm }) => {
      subscribe(values.email, {
        onSuccess: () => {
          resetForm();
        },
      });
    },
  });

  return (
    <>
      <footer className="footer bg-dark text-light">
        <div className="footer-padding">
          <div className="row w-100">
            {FooterLeftData.map((dt, index) => (
              <div
                key={index}
                className="col-md-4 col-12 footer-section my-5 my-lg-0"
              >
                <h3 className={dt.badge.classCSS}>{dt.badge.text}</h3>{" "}
                <h2 className={dt.heading.classCss}>{dt.heading.text}</h2>{" "}
              </div>
            ))}
            <div className="col-md-3 col-12 footer-section quick-links-div my-5 my-lg-0">
              <div className="quick-links">
                <p className="footer-center-list">Quick Links</p>
              </div>
              <div>
                <ul
                  className="d-grid list-unstyled lh-lg fs-5"
                  style={{ gridTemplateColumns: "1fr 1fr" }}
                >
                  {quickLinks.map((link, index) => (
                    <li key={index}>
                      <Link
                        to={link.url}
                        className="text-light text-decoration-none"
                        onClick={scrollToTop}
                      >
                        {link.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="col-md-5 col-12 fotter-right-section my-5 my-lg-0 ">
              <h2 className="mb-4 fs-4 fw-medium">
                Sign up for our newsletter
              </h2>{" "}
              <form onSubmit={formik.handleSubmit}>
                <div className="d-flex input-sub-bar">
                  <input
                    type="email"
                    name="email"
                    className="form-control footer-form rounded-0"
                    placeholder="Enter Email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  <button
                    type="submit"
                    className={`btn btn-primary d-flex align-items-center justify-content-center w-50 ${
                      isPending ? "fs-5" : "fs-3"
                    }`}
                    disabled={isPending}
                  >
                    {isPending ? "Subscribing..." : "Subscribe"}
                  </button>
                </div>
              </form>
              <div className="footer-socialmedia-icons">
                {isErrorLinks ? (
                  <p>Error: {isErrorLinks}</p>
                ) : isLoadingLinks ? (
                  <p>Loading...</p>
                ) : (
                  Object.entries(socialMediaLinks).map(
                    ([icon, { link }], index) => (
                      <Link
                        key={index}
                        to={link}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Visit our ${icon} page`}
                      >
                        {icon === "whatsapp" && (
                          <FaWhatsapp className="footer-logos me-4" />
                        )}
                        {icon === "facebook" && (
                          <TiSocialFacebookCircular className="footer-logos me-4" />
                        )}
                        {icon === "instagram" && (
                          <FaInstagram className="footer-logos me-4" />
                        )}
                        {icon === "youtube" && (
                          <AiOutlineYoutube className="footer-logos me-4" />
                        )}
                      </Link>
                    )
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </footer>
      <FooterBottom />
    </>
  );
};

export default Footer;
