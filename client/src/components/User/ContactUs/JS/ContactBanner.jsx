import React from "react";
import '../css/ContactBanner.css';
const ContactBanner = () =>{
    return(
        <>
            <div className="contact_banner">
                <img src="contactus.jpeg" className="contact_banner_img" alt="contactus-banner-img" />
                <div className="contact_banner_text">
                    <h3>Contact Us</h3>
                </div>
            </div>
        </>
    )
}
export default ContactBanner;