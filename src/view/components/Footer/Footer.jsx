import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import FooterBottom from "./FooterBottom.jsx";
import { FaWhatsapp, TiSocialFacebookCircular, FaInstagram, AiOutlineYoutube } from "../../../assets/logos/index.js";
import { useFormik } from 'formik';
import * as Yup from 'yup';
import useSubscribe from "../../hooks/useSubscribe.js";
import { toast } from 'react-toastify'; // Importing toastify

const Footer = () => {
  const { mutate: subscribe, isLoading } = useSubscribe();
  const quickLinks = [
    { title: "Home", url: "/" },
    { title: "About", url: "/about" },
    { title: "Our Programmes", url: "/programmes" },
    { title: "Get Involved", url: "/get-involved" },
    { title: "Gallery", url: "/gallery" },
    { title: "Message", url: "/message" },
    { title: "Events", url: "/events" },
    { title: "Contact", url: "/contacts" }
  ];
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const formik = useFormik({
    initialValues: {
      email: '',
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email('Invalid email address')
        .required('Email is required'),
    }),
    onSubmit: (values) => {

      subscribe(values.email, {
        onSuccess: () => {
          toast.success("You have successfully subscribed to our newsletter!");
        },
        onError: (error) => {
          toast.error(`Error: ${error.message}`);
        }
      });
    }
  });

  return (
    <>
      <div className="footer bg-dark text-light">
        <div className="footer-padding">
          <div className="row">
            <div className="col-md-4 footer-section my-5 my-lg-0">
              <h5 className="custom-badge badge rounded-0 border mb-3 text-light">
                Atal Foundation
              </h5>
              <h3 className="fw-bold fs-1 heading-font">
                building a stronger<br /> india, inspired by atal
              </h3>
            </div>
            <div className="col-md-3 footer-section quick-links-div ps-5 my-5 my-lg-0">
              <div className='quick-links'>
                <p className="mb-3 fs-4">Quick Links</p>
              </div>
              <div className='row quick-links fw-light'>
                <div className='col-6 lh-lg'>
                  {quickLinks.slice(0, 4).map((link, index) => (
                    <div key={index} className="">
                      <Link to={link.url} className="text-light text-decoration-none" onClick={scrollToTop}>
                        {link.title}
                      </Link>
                    </div>
                  ))}
                </div>
                <div className='col-6 lh-lg'>
                  {quickLinks.slice(4).map((link, index) => (
                    <div key={index} className="">
                      <Link to={link.url} className="text-light text-decoration-none" onClick={scrollToTop}>
                        {link.title}
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="col-md-4 footer-section footer-middle ps-lg-5 ms-lg-5 my-5 my-lg-0" >
              <h5 className="mb-4 fs-4 fw-medium">Sign up for our newsletter</h5>
              <form onSubmit={formik.handleSubmit}>
                <div className="d-flex">
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
                    className="btn btn-primary w-50"
                    disabled={isLoading}
                  >
                    {isLoading ? 'Subscribing...' : 'Subscribe'}
                  </button>
                </div>
                {formik.touched.email && formik.errors.email && (
                  <div className="text-danger mt-2">{formik.errors.email}</div>
                )}
              </form>

              <div className='footer-socialmedia-icons'>
               <FaWhatsapp className='footer-logos me-4' />
                <TiSocialFacebookCircular className='footer-logos me-4' />
                <FaInstagram className='footer-logos me-4' />
                <AiOutlineYoutube className='footer-logos me-4' />
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


// import React from 'react';
// import './Footer.css';
// import { Link } from 'react-router-dom';
// import FooterBottom from './FooterBottom.jsx';
// import { FaWhatsapp, TiSocialFacebookCircular, FaInstagram, AiOutlineYoutube } from "../../../assets/logos/index.js";
// import { useFormik } from 'formik';
// import * as Yup from 'yup';
// import useSubscribe from "../../hooks/HomeHooks/useSubscribe.js";
// import { toast } from 'react-toastify'; 
// import useSocialMediaLinks from '../../hooks/HomeHooks/useSocialMediaLinks.js';  // Import the hook

// const Footer = () => {
//   const { mutate: subscribe, isLoading } = useSubscribe();
//   const { data: socialMediaLinks, isLoading: isLoadingLinks } = useSocialMediaLinks(); // Fetch social media links
// const quickLinks = [
//   { title: "Home", url: "/" },
//   { title: "About", url: "/about" },
//   { title: "Our Programmes", url: "/programmes" },
//   { title: "Get Involved", url: "/get-involved" },
//   { title: "Gallery", url: "/gallery" },
//   { title: "Message", url: "/message" },
//   { title: "Events", url: "/events" },
//   { title: "Contact", url: "/contacts" }
// ];
// const scrollToTop = () => {
//   window.scrollTo({ top: 0, behavior: "smooth" });
// };
//   const quickLinks1 = ["Home", "About", "Our Programmes", "Get Involved"];
//   const quickLinks2 = ["Gallery", "Message", "Events", "Contact"];

//   const formik = useFormik({
//     initialValues: {
//       email: '',
//     },
//     validationSchema: Yup.object({
//       email: Yup.string()
//         .email('Invalid email address')
//         .required('Email is required'),
//     }),
//     onSubmit: (values) => {
//       subscribe(values.email, {
//         onSuccess: () => {
//           toast.success("You have successfully subscribed to our newsletter!");
//         },
//         onError: (error) => {
//           toast.error(`Error: ${error.message}`);
//         }
//       });
//     }
//   });

//   return (
//     <>
//       <div className="footer bg-dark text-light">
//         <div className="footer-padding">
//           <div className="row">
//             <div className="col-md-4 footer-section my-5 my-lg-0">
//               <h5 className="custom-badge badge rounded-0 border mb-3 text-light">
//                 Atal Foundation
//               </h5>
//               <h3 className="fw-bold fs-1 heading-font">
//                 building a stronger<br /> india, inspired by atal
//               </h3>
//             </div>
//             <div className="col-md-3 footer-section quick-links-div ps-5 my-5 my-lg-0">
//               <div className='quick-links'>
//                 <p className="mb-3 fs-4">Quick Links</p>
//               </div>
//               <div className='row quick-links fw-light'>
//                 <div className='col-6 lh-lg'>
// {quickLinks.slice(0, 4).map((link, index) => (
//   <div key={index} className="">
//     <Link to={link.url} className="text-light text-decoration-none" onClick={scrollToTop}>
//       {link.title}
//     </Link>
//   </div>
// ))}
// </div>
// <div className='col-6 lh-lg'>
// {quickLinks.slice(4).map((link, index) => (
//   <div key={index} className="">
//     <Link to={link.url} className="text-light text-decoration-none" onClick={scrollToTop}>
//       {link.title}
//     </Link>
//   </div>
// ))}
// </div>
//               </div>
//             </div>
//             <div className="col-md-4 footer-section footer-middle ps-lg-5 ms-lg-5 my-5 my-lg-0">
//               <h5 className="mb-4 fs-4 fw-medium">Sign up for our newsletter</h5>
//               <form onSubmit={formik.handleSubmit}>
//                 <div className="d-flex">
//                   <input
//                     type="email"
//                     name="email"
//                     className="form-control footer-form rounded-0"
//                     placeholder="Enter Email"
//                     value={formik.values.email}
//                     onChange={formik.handleChange}
//                     onBlur={formik.handleBlur}
//                   />
//                   <button
//                     type="submit"
//                     className="btn btn-primary w-50"
//                     disabled={isLoading}
//                   >
//                     {isLoading ? 'Subscribing...' : 'Subscribe'}
//                   </button>
//                 </div>
//                 {formik.touched.email && formik.errors.email && (
//                   <div className="text-danger mt-2">{formik.errors.email}</div>
//                 )}
//               </form>

//               <div className='footer-socialmedia-icons'>
//                 {isLoadingLinks ? (
//                   <p>Loading...</p>
//                 ) : (
//                   socialMediaLinks?.map((link, index) => (
//                     <a key={index} href={link.url} target="_blank" rel="noopener noreferrer">
//                       {link.icon === 'whatsapp' && <FaWhatsapp className='footer-logos me-4' />}
//                       {link.icon === 'facebook' && <TiSocialFacebookCircular className='footer-logos me-4' />}
//                       {link.icon === 'instagram' && <FaInstagram className='footer-logos me-4' />}
//                       {link.icon === 'youtube' && <AiOutlineYoutube className='footer-logos me-4' />}
//                     </a>
//                   ))
//                 )}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <FooterBottom />
//     </>
//   );
// };

// export default Footer;
