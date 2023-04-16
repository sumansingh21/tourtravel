import React, { useEffect } from "react";
import "../CSS/Banner.css";
import AOS from 'aos';
import 'aos/dist/aos.css'

// const img = 'Banner1.jpg';
// const img1 = 'Banner1.jpg';
// const img2 = 'Banner1.jpg';
// const img3 = 'search.jpg';


function Banner() {
    useEffect(() => {
        AOS.init();
    },[])
    return (
        <>
            {/*
                 ---------------------------Sayan---------------------------------------
              <div id="carouselExampleInterval" class="carousel slide" data-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active" data-interval="10000">
                        <img src={img} alt="Banner1" className="img-fluid"></img>
                    </div>
                    <div class="carousel-item"  data-interval="2000">
                        <img src={img1} alt="Banner2" className="img-fluid"></img>
                    </div>
                    <div class="carousel-item">
                        <img src={img2} alt="Banner3" className="img-fluid"></img>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-target="#carouselExampleInterval" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-target="#carouselExampleInterval" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                </button>
            </div> 
            ----------------------------------Sayan-----------------------------------------
            */}

            {/* <div className="Search">
                <div className="container">
                    <input type="text" placeholder="Search your destination" />
                    <button type="button" class="btn btn-outline-warning">Search</button>
                    <img src={img3} alt="search" className="img4-fluid"></img>
                </div>

            </div> */}

            <div data-aos="fade-right" class="bannerParent">
                <div data-aos="fade-up" duration="5000" class="bannerChild">
                
                    <span ><p class="HeadOne"> YOUR TRAVEL JUST GOT UPGRADED </p>  <br /> <p class="BannerSubhead"> - A complete travel solutioin for all your needs</p> </span>

                </div>
            </div>    

            </>
            )

}
            export default Banner;