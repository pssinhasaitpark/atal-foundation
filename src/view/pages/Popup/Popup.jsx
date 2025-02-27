import React from 'react';
import "./Popup.css"
import { PopupImage } from "../../../assets/images/index"
import { IoMdClose } from "../../../assets/logos/index"
const Popup = ({ onClose }) => {
  return (
    <div className='popup-main d-flex align-items-center justify-content-center position-fixed top-0 start-0 w-100 h-100'>
      <div className='popup-data position-relative text-center rounded-4 p-4 p-lg-5 bg-light'>
        <button onClick={onClose} className='position-absolute border-0 bg-transparent outline-0 top-0 end-0 p-2 d-flex align-items-center justify-content-center'>Close<IoMdClose className='ms-2 border border-1 border-dark rounded-0' /></button>
        <div className='mt-4 mt-lg-0 w-100 h-100'>
          <img src={PopupImage} alt="PopupImageAtal" className='rounded-4 w-100 h-100' />
        </div>
        <a href="/" className='text-decoration-none'><button className='btn btn-primary mt-2'>Send Your Message </button></a>
      </div>
    </div>
  );
};

export default Popup;
