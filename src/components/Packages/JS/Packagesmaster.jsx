import React from "react";
import Menu from '../../Homepage/JS/Menu';
import Navbar from "../../Homepage/JS/Navbar";
import Footer from "../../Homepage/JS/Footer";
import PackagesBanner from './PackagesBanner';
import PackagesDetails from './PackagesDetails';
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
        <Footer />
        </>
    )
}
export default Packagesmaster;