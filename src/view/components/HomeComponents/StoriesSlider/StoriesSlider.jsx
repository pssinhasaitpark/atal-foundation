// import React, { useRef } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Container, Card } from "react-bootstrap";
// import { banner1 } from "../../../../assets/images/index";
// import "./StoriesSlider.css";
// import { FaChevronRight, FaChevronLeft } from "../../../../assets/logos/index"
// const StoriesSlider = () => {
//   const swiperRef = useRef(null);
//   const handlePrevClick = () => {
//     swiperRef.current.swiper.slidePrev();
//   };
//   const handleNextClick = () => {
//     swiperRef.current.swiper.slideNext();
//   };

//   return (
//     <Container className="my-4">
//       <h3 className="story-title text-center position-relative mb-5">
//         Stories About Our Work
//       </h3>
//       <Swiper
//         ref={swiperRef}
//         spaceBetween={30}
//         modules={[]}
//         className="mySwiper mb-4"
//         breakpoints={{
//           400: {
//             slidesPerView: 1,
//           },
//           768: {
//             slidesPerView: 2,
//           },
//           1024: {
//             slidesPerView: 2,
//           },
//         }}
//       >
//         <SwiperSlide>
//           <Card>
//             <Card.Img variant="top" src={banner1} />
//             <Card.Body className="p-4">
//               <Card.Title className="fs-3 fw-normal text-success">
//                 Taking healthcare access to women who need it the most
//               </Card.Title>
//               <Card.Text className="lh-lg">
//                 On International Women’s Day, women and girls from disadvantaged
//                 communities in Mumbai were screened at a health camp by Sir H.N.
//                 Reliance Foundation Hospital.
//               </Card.Text>
//             </Card.Body>
//           </Card>
//         </SwiperSlide>
//         <SwiperSlide>
//           <Card>
//             <Card.Img variant="top" src={banner1} />
//             <Card.Body className="p-4">
//               <Card.Title className="fs-3 fw-normal text-success">
//                 Taking healthcare access to women who need it the most
//               </Card.Title>
//               <Card.Text className="lh-lg">
//                 On International Women’s Day, women and girls from disadvantaged
//                 communities in Mumbai were screened at a health camp by Sir H.N.
//                 Reliance Foundation Hospital.
//               </Card.Text>
//             </Card.Body>
//           </Card>
//         </SwiperSlide>
//         <SwiperSlide>
//           <Card>
//             <Card.Img variant="top" src={banner1} />
//             <Card.Body className="p-4">
//               <Card.Title className="fs-3 fw-normal text-success">
//                 Taking healthcare access to women who need it the most
//               </Card.Title>
//               <Card.Text className="lh-lg">
//                 On International Women’s Day, women and girls from disadvantaged
//                 communities in Mumbai were screened at a health camp by Sir H.N.
//                 Reliance Foundation Hospital.
//               </Card.Text>
//             </Card.Body>
//           </Card>
//         </SwiperSlide>
//       </Swiper>
//       <div className="d-flex justify-content-between">
//         <span>
//           <button className="btn btn-success p-2 px-3 fs-5">
//             Read More
//           </button>
//         </span>
//         <span>
//           <button
//             className="btn btn-success p-2 px-3 fs-5"
//             onClick={handlePrevClick}
//           >
//             <FaChevronLeft />
//           </button>
//           <button
//             className="btn btn-success p-2 px-3 fs-5"
//             onClick={handleNextClick}
//           >
//             <FaChevronRight />
//           </button>
//         </span>
//       </div>
//     </Container>
//   );
// };

// export default StoriesSlider;
