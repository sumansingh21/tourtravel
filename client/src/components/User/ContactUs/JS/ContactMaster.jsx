import React from "react";
import Navbar from "../../Homepage/JS/Navbar";
import Menu from "../../Homepage/JS/Menu";
import ContactBanner from "./ContactBanner";
import ContactDetails from './ContactDetails';
import Footer from "../../Homepage/JS/Footer";

const ContactMaster = () =>{
    return(
        <>
            <Navbar />
            <Menu />
            <ContactBanner />
            <ContactDetails />
            <Footer />
        </>
    )
}
export default ContactMaster;