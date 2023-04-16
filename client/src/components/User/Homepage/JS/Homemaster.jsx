import React from 'react'
import Menu from './Menu';
import Navbar from './Navbar';
import Banner from './Banner';
import TrendingPackages from './TrendingPackages';
import Footer from './Footer';
import Search from './Seach';
import HolydayByTheme from './Holyday';
import Testimonials from './Testimonials';
import Blog from './Blog';
import IndiaPackages from './IndianPackages';
import Quote from './Quote';
import Bestplaces from './Bestplaces';
import Chooseus from './Chooseus';

const Homemaster = () =>{
    return(
    <>
       <Navbar/>
           <Menu/>
           <Banner/>
           <IndiaPackages/>
           <Search/>
           <TrendingPackages/>
           <Quote/>
           <Blog/>
           <HolydayByTheme/>
           <Bestplaces/>
           <Chooseus></Chooseus>
           <Testimonials/>
           <Footer/>
    </>
    )
}

export default Homemaster;