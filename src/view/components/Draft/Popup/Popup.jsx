import React from 'react';
import "./Popup.css"
const Popup = ({ onClose }) => {
  return (
    <div className='popup-main d-flex align-items-center justify-content-center position-fixed top-0 start-0 w-100 h-100'>
      <div className='popup-data position-relative text-center rounded-2 p-3 p-lg-5 bg-light'>
        <button onClick={onClose} className='position-absolute border-0 bg-transparent outline-0 top-0 end-0 p-2'>Close</button>
        <div className='mt-4 mt-lg-0'>
          <h2>Welcome to the Page! IMG</h2>
        </div>
        <a href="/" className='text-decoration-none text-dark'>Send Your Message</a>
      </div>
    </div>
  );
};

export default Popup;
