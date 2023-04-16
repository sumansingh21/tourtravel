import React from "react";
import PBanner from "./PBanner";
import PackageDetailsContent from "./PackageDetailsContent";
import Footer from "../../Homepage/JS/Footer";
import Navbar from "../../Homepage/JS/Navbar";
import Menu from "../../Homepage/JS/Menu";
const PackagedetailsMaster = () => {
    return (
        <>
            <Navbar/>
            <Menu/>
            <PBanner />
            <PackageDetailsContent />
            <Footer/>
            
        </>
    )
}



export default PackagedetailsMaster;