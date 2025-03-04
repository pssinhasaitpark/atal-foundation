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
import { toast } from "react-toastify";
import useSocialMediaLinks from "../../hooks/useSocialMediaLinks.js";

const Footer = () => {
  const { mutate: subscribe, isLoading } = useSubscribe();
  const {
    data: socialMediaLinks,
    isLoading: isLoadingLinks,
    isError: isErrorLinks,
  } = useSocialMediaLinks();
  const quickLinks = [
    { title: "Home", url: "/" },
    { title: "About", url: "/about" },
    { title: "Our Programmes", url: "/opEducation" },
    { title: "Get Involved", url: "/registration" },
    { title: "Gallery", url: "/gallery" },
    { title: "Message", url: "/message" },
    { title: "Events", url: "/events" },
    { title: "Contact", url: "/contacts" },
  ];
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
          toast.success("Successfully subscribed!");
          resetForm();
        },
        onError: (error) => {
          toast.error(`Error: ${error.response.data.message}`);
        },
      });
    },
  });

  return (
    <>
      <div className="footer bg-dark text-light">
        <div className="footer-padding">
          <div className="row w-100">
            <div className="col-md-4 col-12 footer-section my-5 my-lg-0">
              <h5 className="custom-badge-footer badge  mb-3 text-uppercase">
                Atal Foundation
              </h5>
              <h3 className="custom-footer-text heading-font">
                building a stronger <br />
                india, inspired by atal
              </h3>
            </div>
            <div className="col-md-3 col-12 footer-section quick-links-div my-5 my-lg-0">
              <div className="quick-links">
                <p className="mb-3 footer-center-list">Quick Links</p>
              </div>
              <div className="row quick-links-list">
                <div className="col-6">
                  {quickLinks.slice(0, 4).map((link, index) => (
                    <div key={index} className="">
                      <Link
                        to={link.url}
                        className="text-light text-decoration-none"
                        onClick={scrollToTop}
                      >
                        {link.title}
                      </Link>
                    </div>
                  ))}
                </div>
                <div className="col-6 ">
                  {quickLinks.slice(4).map((link, index) => (
                    <div key={index} className="">
                      <Link
                        to={link.url}
                        className="text-light text-decoration-none"
                        onClick={scrollToTop}
                      >
                        {link.title}
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="col-md-5 col-12 fotter-right-section my-5 my-lg-0 ">
              <h5 className="mb-4 fs-4 fw-medium">
                Sign up for our newsletter
              </h5>
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
                    className="btn btn-primary fs-3 d-flex align-items-center justify-content-center w-50"
                    disabled={isLoading}
                  >
                    {isLoading ? "Subscribing..." : "Subscribe"}
                  </button>
                </div>
                {formik.touched.email && formik.errors.email && (
                  <div className="text-danger mt-2">{formik.errors.email}</div>
                )}
              </form>

              <div className="footer-socialmedia-icons">
                {isErrorLinks ? (
                  <p>Error: {isErrorLinks}</p>
                ) : isLoadingLinks ? (
                  <p>Loading...</p>
                ) : (
                  // Convert socialMediaLinks object to an array of entries (key-value pairs)
                  Object.entries(socialMediaLinks).map(
                    ([icon, { link }], index) => (
                      <Link
                        key={index}
                        to={link}
                        target="_blank"
                        rel="noopener noreferrer"
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
      </div>
      <FooterBottom />
    </>
  );
};

export default Footer;
