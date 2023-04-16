import React from 'react';
import { NavLink } from 'react-router-dom';
import '../CSS/Search.css';

const Search = () =>{
   return(
    <>
        {/* <div className="search-container">
        <div className="search-box">
            <input type="text" placeholder="Search..."></input>
            <NavLink href="#">
                <i className="fas fa-search"> </i>
            </NavLink>
        </div>
    </div> */}

    <div className="container-fluid searchBar-parent">
        <div className="container mr-5 mt-4">
            <div className="row justify-content-start">
                <div className="col-8">
                    <span className="searchQuote"> Know about your dream destination </span>
                </div>
            </div>
            <div className="row justify-content-center pb-5">
                <div className="search-box">
                    <input type="text" placeholder="Search..."></input>
                    <NavLink to="#" classNameName="searchIcon">
                        <i className="fas fa-search searchIcon"> </i>
                    </NavLink>
                </div>
            </div>
        </div>
    </div>
    </>
   )
}

export default Search;