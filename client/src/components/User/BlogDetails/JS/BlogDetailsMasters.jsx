import React from "react";
import BlogBanner from "./BlogBanner";
import BlogAd from "./BlogAd";
import BlogContent from "./BlogContent";
import Footer from "../../Homepage/JS/Footer";
import Menu from "../../Homepage/JS/Menu";
import Navbar from "../../Homepage/JS/Navbar";

const BlogDetailsMasters =()=>{
    return(
        <>
            <Navbar/>
            <Menu/>
            <BlogBanner/>
            <BlogAd/>
            <BlogContent/>
            <Footer/>
        </>
    )
}
export default BlogDetailsMasters ;