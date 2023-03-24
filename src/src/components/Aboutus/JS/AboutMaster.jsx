import React from "react";
import Menu from "../../Homepage/JS/Menu";
import Navbar from "../../Homepage/JS/Navbar";
import AboutContent from "./AboutContent";
import Footer from "../../Homepage/JS/Footer";

const AboutMaster = () =>{
    return(
        <>
            <Navbar />
            <Menu />
            <AboutContent />
            <Footer />
        </>
    )
}
export default AboutMaster