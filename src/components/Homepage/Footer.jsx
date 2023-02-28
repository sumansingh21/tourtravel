import React from "react";
import "./CSS/Footer.css";

const img1 ='Facebook.png'
const img2 ='Instagram.png'
const img3 ='twitter-6.svg'
const img4 ='pinterest-1.svg'
const img5 ='visa-4.svg'

const Footer = () => {
    return (
        <>
            <div class="card text-white bg-dark">
                <div className="container text-center text-md-left">
                    <div className="row text-center text-md-left">
                        <div className="col-d-3 lg-3 xl-3 mx-auto mt-3">
                            <h3 className="head1">Contact US</h3>
                            <p>
                            <i class="fa-solid fa-house mr-3"></i>47, M.T Road, Kolkata-700012
                            </p>
                            <p>
                            <i class="fa-solid fa-envelope mr-3"></i>Tourandtravel@gmail
                            </p>
                            <p>
                            <i class="fa-solid fa-phone mr-3"></i>85895613213
                            </p>
                            <p>
                            <i class="fa-solid fa-print mr-3"></i>003-568-177
                            </p>
                        </div>
                        <div className="col-d-3 lg-3 xl-3 mx-auto mt-3">
                            <h3 className="head">Social Media</h3>
                            <p>
                            <i class="fa-brands fa-facebook mr-3"></i> Tourandtravel
                            </p>
                            <p>
                            <i class="fa-brands fa-instagram mr-3"></i> Tourandtravelgram
                            </p>
                            <p>
                            <i class="fa-brands fa-twitter mr-3"></i>@tour
                            </p>
                        </div>
                        <div className="col1-d-3 lg-3 xl-3 mx-auto mt-3">
                            <h5>Sign up to our Newsletter</h5>
                            
                            <input type="text1" placeholder="Enter your email"></input>
                            <button type="button" class="btn btn-info">Sign up</button>
                             <div>

                             </div>
                        </div>
                    </div>
                    <div className="row2"> 
                    <img src={img1} alt="Facebook" className="img1"></img>
                    <img src={img2} alt="Instagram.png" className="img2"></img>
                    <img src={img3} alt="twitter-6" className="img3"></img>
                    <img src={img4} alt="pinterest-1.svg" className="img4"></img>
                    <img src={img5} alt="vis-4" className="img4"></img>

                    
                        
                    </div>
                    <div className="row1 ">
                        <p> Copyright 2023, All Rights Reserved  | </p>
                    </div>

                </div>
            </div>


        </>
    )
}




export default Footer;