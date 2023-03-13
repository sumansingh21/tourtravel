import React from "react";
import PBanner from "./PBanner";
import PLeftContainer from "./PLeftContainer";
import PRightContainer from "./PRightContainer";
import Menu from '../../Homepage/JS/Menu';
import Navbar from "../../Homepage/JS/Navbar";
import Footer from "../../Homepage/JS/Footer";

const PackageDetailsMaster = () => {
    return (
        <>
            <Navbar/>
            <Menu/>
            <PBanner />
            <PLeftContainer/>
            <PRightContainer/>
            <Footer/>
        </>
    )
}



export default PackageDetailsMaster;