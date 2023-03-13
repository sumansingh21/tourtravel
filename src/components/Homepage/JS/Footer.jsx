import React from "react";
import { NavLink } from "react-router-dom";
import "../CSS/Footer.css";

// const img1 = 'Facebook.png'
// const img2 = 'Instagram.png'
// const img3 = 'twitter-6.svg'
// const img4 = 'pinterest-1.svg'
// const img5 = 'visa-4.svg'

const Footer = () => {
    return (
        <>
            {/* <div className="card text-white bg-dark footer-parent">
                <div classNameName="container text-center text-md-left">
                    <div classNameName="row text-center text-md-left">
                        <div classNameName="col-d-3 lg-3 xl-3 mx-auto mt-3">
                            <h3 classNameName="head1">Contact US</h3>
                            <p>
                                <i className="fa-solid fa-house mr-3"></i>47, M.T Road, Kolkata-700012
                            </p>
                            <p>
                                <i className="fa-solid fa-envelope mr-3"></i>Tourandtravel@gmail
                            </p>
                            <p>
                                <i className="fa-solid fa-phone mr-3"></i>85895613213
                            </p>
                            <p>
                                <i className="fa-solid fa-print mr-3"></i>003-568-177
                            </p>
                        </div>
                        <div classNameName="col-d-3 lg-3 xl-3 mx-auto mt-3">
                            <h3 classNameName="head">Social Media</h3>
                            <p>
                                <i className="fa-brands fa-facebook mr-3"></i> Tourandtravel
                            </p>
                            <p>
                                <i className="fa-brands fa-instagram mr-3"></i> Tourandtravelgram
                            </p>
                            <p>
                                <i className="fa-brands fa-twitter mr-3"></i>@tour
                            </p>
                        </div>
                        <div classNameName="col1-d-3 lg-3 xl-3 mx-auto mt-3">
                            <h5>Sign up to our Newsletter</h5>

                            <input type="text1" placeholder="Enter your email"></input>
                            <button type="button" className="btn btn-info">Sign up</button>
                            <div>

                            </div>
                        </div>
                    </div>
                     <div classNameName="row2">
                        <img src={img1} alt="Facebook" classNameName="img1"></img>
                        <img src={img2} alt="Instagram.png" classNameName="img2"></img>
                        <img src={img3} alt="twitter-6" classNameName="img3"></img>
                        <img src={img4} alt="pinterest-1.svg" classNameName="img4"></img>
                        <img src={img5} alt="vis-4" classNameName="img4"></img>
                    </div> 

                    <div classNameName="row1 ">
                        <p> Copyright 2023, All Rights Reserved  | </p>
                    </div>

                </div>
            </div> */}
         
            <div className="">

<footer className="text-white text-center text-lg-start bg-dark">
  
  <div className="container-fluid p-4">
  
    <div className="row mt-4">
      
      <div className="col-lg-4 col-md-12 mb-4 mb-md-0">
        <h5 className="text-uppercase mb-4">About company</h5>

        <p>
          At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium
          voluptatum deleniti atque corrupti.
        </p>

        <p>
          Blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas
          molestias.
        </p>

        <div className="mt-4">
          
          <navLink type="button" className="btn btn-floating btn-light btn-lg mx-2"><i className="fab fa-facebook-f"></i></navLink>
         
          <navLink to="" type="button" className="btn btn-floating btn-light btn-lg mx-2"><i className="fab fa-dribbble"></i></navLink>
          
          <navLink to="" type="button" className="btn btn-floating btn-light btn-lg mx-2"><i className="fab fa-twitter"></i></navLink>
         
          <navLink to="" type="button" className="btn btn-floating btn-light btn-lg mx-2"><i className="fab fa-google-plus-g"></i></navLink>
        </div>
      </div>
  
      <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
        <h5 className="text-uppercase mb-4 pb-1">Suscribe Newsletter</h5>

        <div className="form-outline form-white mb-4">
          <input type="text" id="formControlLg" className="form-control form-control-lg" />
          <button type="button" className="btn btn-light mt-4">Sign up</button>
        </div>

    
      </div>
    
      <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
        <h5 className="text-uppercase mb-4">Contact Us</h5>

        <p>
            <i className="fa-solid fa-house mr-3"></i>47, M.T Road, Kolkata-700012
        </p>
        <p>
            <i className="fa-solid fa-envelope mr-3"></i>Tourandtravel@gmail
        </p>
        <p>
            <i className="fa-solid fa-phone mr-3"></i>85895613213
        </p>
        <p>
            <i className="fa-solid fa-print mr-3"></i>003-568-177
        </p>
      </div>
      
    </div>
   
  </div>
 

  
  <div className="text-center p-3 footerStyle">
    © 2020 Copyright:
    <NavLink to="" className="text-white" href="https://mdbootstrap.com/">MDBootstrap.com</NavLink>
  </div>
  
</footer>

</div>

        </>
    )
}




export default Footer;