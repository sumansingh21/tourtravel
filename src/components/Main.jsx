import React from 'react';
import Menu from './Homepage/Menu';
import Navbar from './Homepage/Navbar';
import Banner from './Homepage/Banner';
import { CardsHeader,Cards } from './Homepage/TrendingPackages';
import Footer from './Homepage/Footer';

const Main= () =>{
    return(
        <>
           <Navbar/>
           <Menu/>
           <Banner/>
           <CardsHeader/>
           <Cards/>
           <Cards/>
           <Cards/>
           <Cards/>
           <Footer/>
        </>
    )
}

export default Main;