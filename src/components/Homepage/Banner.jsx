import React from "react";
import "./CSS/Banner.css";

const img = 'Banner1.jpg';
const img1 = 'Banner2.jpg';
const img2 = 'Banner3.jpg';
const img3 = 'search.jpg';


const Banner = () => {
    return (
        <>
            <div id="carouselExampleInterval" class="carousel slide" data-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active" data-interval="10000">
                        <img src={img} alt="Banner1" className="img-fluid"></img>
                    </div>
                    <div class="carousel-item" data-interval="2000">
                        <img src={img1} alt="Banner2" className="img1-fluid"></img>
                    </div>
                    <div class="carousel-item">
                        <img src={img2} alt="Banner3" className="img2-fluid"></img>
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

            <div className="Search">
                <div className="container">
                    <input type="text" placeholder="Search your destination" />
                    <button type="button" class="btn btn-outline-warning">Search</button>
                    <img src={img3} alt="search" className="img4-fluid"></img>
                </div>

            </div>

        </>
    )

}
export default Banner;