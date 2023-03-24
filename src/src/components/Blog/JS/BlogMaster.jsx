import React from 'react';
import Blog from './Blog';
import Menu from '../../Homepage/JS/Menu';
import Navbar from '../../Homepage/JS/Navbar';
import Footer from '../../Homepage/JS/Footer'

const BlogMaster = () =>{
    return(
        <>
         <Navbar/>
         <Menu/>
         <Blog/>
         <Footer/>
        </>
    )
}

export default BlogMaster;

