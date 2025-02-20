import React from 'react'
import { FaXTwitter, FaFacebookF, FaYoutube, FaInstagram, FaLinkedin } from "../../../../assets/logos/index"
import "./StickySocial.css"
const StickySocial = () => {
  return (
    <div className="sticky-social z-3">
      <ul className="social m-0 p-0">
        <li className="twitter p-1"><a href="/" className='twitter text-white p-2'><FaXTwitter /></a></li>
        <li className="fb p-1"><a href="/" className='fb text-white p-2'><FaFacebookF /></a></li>
        <li className="youtube p-1" ><a href="/" className='youtube text-white p-2'><FaYoutube /></a></li>
        <li className="insta p-1"><a href="/" className='insta text-white  p-2'><FaInstagram /></a></li>
        <li className="linkedin p-1"><a href="/" className='linkedin text-white p-2'><FaLinkedin /></a></li>
      </ul>
    </div>
  )
}

export default StickySocial