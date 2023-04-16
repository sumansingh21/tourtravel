import React from "react";
import Menu from "../../Homepage/JS/Menu";
import Navbar from "../../Homepage/JS/Navbar";
import PackagesBanner from '../JS/PackagesBanner';
import PackagesDetails from '../JS/PackagesDetails';
import Footer from "../../Homepage/JS/Footer";
import PackagesCard from "./PackagesCard";
import FAQ from "./faq";

const Packagesmaster = () => {
    return(
        <>
        <Navbar />
        <Menu />
        <PackagesBanner />
        <PackagesDetails />
        <PackagesCard />
        <FAQ />
        <Footer/>
        </>
    )
}
export default Packagesmaster;