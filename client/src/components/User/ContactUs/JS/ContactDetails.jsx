import React from "react";
import '../css/ContactDetails.css';
const ContactDetails = () => {
    return (
        <>
            <div className="container-fluid main-container">
                <div className="container-fluid contactus-map-details">
                    <div className="contact-us-form">
                        <form>
                            <h2>Get In Touch</h2>
                            <label>Name</label>
                            <input type="text" placeholder="Enter your name" />
                            <label>Email</label>
                            <input type="email" placeholder="Enter your email" />
                            <label>Phone Number</label>
                            <input type="tel" placeholder="Enter your contact number" />
                            <label>Message</label>
                            <textarea placeholder="Enter your message" />
                            <button>Submit</button>
                        </form>
                    </div>
                    <div className="contact-map-details">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3687.1499184838!2d88.3292444!3d22.460999899999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a027a8391dd6bdd%3A0x6de8a4e2e9cbec64!2sMahatma%20Gandhi%20Rd%2C%20West%20Bengal!5e0!3m2!1sen!2sin!4v1679668735319!5m2!1sen!2sin" />
                    </div>
                </div>
                <div className="container-fluid contact-information">
                    <div className="head-office">
                        <h2>Head Office</h2>
                        <p>
                            <i className="fa-solid fa-house mr-3"></i>47, M.G Road, Kolkata-700012
                        </p>
                        <p>
                            <i className="fa-solid fa-envelope mr-3"></i>Tourandtravel@gmail.com
                        </p>
                        <p>
                            <i className="fa-solid fa-phone mr-3"></i>85895613213
                        </p>
                        <p>
                            <i className="fa-solid fa-print mr-3"></i>003-568-177
                        </p>
                    </div>
                    <div className="branch-office">
                        <h2>Branch Office</h2>
                        <p>
                            <i className="fa-solid fa-house mr-3"></i>47, M.G Road, Kolkata-700012
                        </p>
                        <p>
                            <i className="fa-solid fa-envelope mr-3"></i>Tourandtravel@gmail.com
                        </p>
                        <p>
                            <i className="fa-solid fa-phone mr-3"></i>85895613213
                        </p>
                        <p>
                            <i className="fa-solid fa-print mr-3"></i>003-568-177
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}
export default ContactDetails;