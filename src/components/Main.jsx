import React from 'react';
import Menu from './Homepage/Menu';
import Navbar from './Homepage/Navbar';
import Banner from './Homepage/Banner';
import { CardsHeader,Cards } from './Homepage/TrendingPackages';

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
        </>
    )
}

export default Main;