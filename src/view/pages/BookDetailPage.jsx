import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { LuMoveLeft, LuMoveRight } from "../../assets/logos/index";
import { SlideshowLightbox } from "lightbox.js-react";

import {
  AtalBook,
  atalBookSec1,
  atalBookSec2,
  atalBookSec3,
  atalBookSec4,
  atalBookSec5,
  atalBookSec6,
  atalBookSec7,
  atalBookSec8,
} from "../../assets/images/index";
const BookData = [
  {
    title: "सदा अटल पुस्तक के द्वितीय संस्करण का भव्य विमोचन संपन्न",
    description: `<p>नागपुर: भारत रत्न, पूर्व प्रधानमंत्री श्रद्धेय अटल बिहारी वाजपेयी जी की जन्मशताब्दी वर्ष के अवसर पर प्रकाशित "सदा अटल" पुस्तक के द्वितीय संस्करण का विमोचन 15 मार्च को केंद्रीय मंत्री श्री नितिन गडकरी जी के निवास पर संपन्न हुआ. 📚</p><p>इस अवसर पर अटल जी की भतीजी एवं अटल फाउंडेशन की राष्ट्रीय अध्यक्षा श्रीमती माला वाजपेयी तिवारी, पुस्तक के संपादक श्री अभिषेक तिवारी एवं अटल फाउंडेशन, महाराष्ट्र के उपाध्यक्ष श्री धर्मेंद्र देशमुख विशेष रूप से उपस्थित रहे. 👥</p>
  <p>"सदा अटल" पुस्तक में महामहिम राष्ट्रपति, प्रधानमंत्री श्री नरेंद्र मोदी, केंद्रीय मंत्री श्री नितिन गडकरी सहित देश के कई गणमान्य व्यक्तियों एवं वरिष्ठजनों के संस्मरण संकलित किए गए हैं, जो श्रद्धेय अटल जी के व्यक्तित्व और कृतित्व को सजीव रूप में प्रस्तुत करते हैं. 📖</p><p>इस ऐतिहासिक अवसर पर उपस्थित अतिथियों ने अटल जी के प्रति अपने भावपूर्ण विचार व्यक्त किए और उनके अद्वितीय नेतृत्व, ओजस्वी वाणी एवं अडिग राष्ट्रभक्ति को नमन किया. वक्ताओं ने कहा कि अटल जी केवल एक राजनेता ही नहीं, बल्कि आदर्श विचारधारा, असाधारण काव्य प्रतिभा और प्रेरणादायक नेतृत्व के प्रतीक थे. 💬</p>
  <ul>
  <li>अटल जी की वाणी में ओज था ⚡</li>
  <li>काव्य में संवेदना और विचारों में गहरी निष्ठा थी ✍️</li>
  <li>देश के प्रति उनकी निष्ठा आज भी प्रेरणा देती है 🇮🇳</li>
  </ul>
  <p>"सदा अटल" पुस्तक न केवल अटल जी के विचारों और कार्यों को जन-जन तक पहुँचाने का प्रयास है, बल्कि यह युवा पीढ़ी को उनके जीवन से प्रेरणा लेने का एक मार्गदर्शक ग्रंथ भी सिद्ध होगी. 📘</p>
  <ul>
  <li>युवाओं के लिए प्रेरणा का स्रोत 💡</li>
  <li>राजनीति से परे एक सच्चे राष्ट्रभक्त की विरासत 🏛️</li>
  </ul>
  <p>इस अवसर पर अनेक वरिष्ठ साहित्यकारों, शिक्षाविदों, राजनीतिक एवं सामाजिक कार्यकर्ताओं की गरिमामयी उपस्थिति रही. कार्यक्रम के अंत में अटल जी की काव्य रचनाओं का पाठ भी किया गया, जिससे वातावरण अटल जी की अमर वाणी से गूंज उठा. 🎤</p>
  <p><strong>"अटल हैं, अटल रहेंगे!"</strong> 🔥</p>
  <p>:🇮🇳: भारत माता की जय! :🇮🇳:</p>`,
    bookimg: [atalBookSec1],
    BookSliderImg: [
      {
        img: [AtalBook],
      },
      {
        img: [atalBookSec2],
      },
      {
        img: [atalBookSec3],
      },
      {
        img: [atalBookSec4],
      },
      {
        img: [atalBookSec5],
      },
      {
        img: [atalBookSec6],
      },
      {
        img: [atalBookSec7],
      },
      {
        img: [atalBookSec8],
      },
    ],
  },
];
const BookDetailPage = () => {
  const swiperRef = useRef(null);
  const handlePrevClick = () => {
    swiperRef.current.swiper.slidePrev();
  };
  const handleNextClick = () => {
    swiperRef.current.swiper.slideNext();
  };

  return (
    <div className="App container my-5">
      <div>
        <h2 className="heading-font text-center">{BookData[0].title}</h2>
        <img
          src={BookData[0].bookimg[0]}
          alt="SadaAtalbook"
          className="w-100 my-4 object-fit-contain"
          style={{ height: "500px" }}
        />
        <div
          className="fw-light fs-6 lh-lg w-75 mx-auto"
          dangerouslySetInnerHTML={{
            __html: BookData[0].description,
          }}
        />
      </div>
      <div className="py-5">
        <h3 className="heading-font text-center">
          Book Distribution and News Article
        </h3>
        <Swiper
          ref={swiperRef}
          spaceBetween={10}
          modules={[]}
          className="mySwiper mb-4"
          breakpoints={{
            400: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 4,
            },
          }}
        >
          {BookData[0].BookSliderImg?.map((image, index) => (
            <SwiperSlide key={index} className="photo-gallery-slider-card">
              <SlideshowLightbox
                backgroundColor="black"
                modalClose="clickOutside"
              >
                <img
                  loading="lazy"
                  src={image.img[0]}
                  alt={`gallery_image_${index}`}
                  className="photo-gallery-img w-100 "
                />
              </SlideshowLightbox>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="d-flex justify-content-center">
          <span>
            <button
              className="btn px-3 py-0 fs-2 border-0"
              onClick={handlePrevClick}
              aria-label="handlePrevClick"
            >
              <LuMoveLeft />
            </button>
            <button
              className="btn px-3 py-0 fs-2 border-0"
              onClick={handleNextClick}
              aria-label="handleNextClick"
            >
              <LuMoveRight />
            </button>
          </span>
        </div>
      </div>
    </div>
  );
};

export default BookDetailPage;
