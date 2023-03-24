import React from "react";
import "../CSS/BlogBanner.css";
// import "../"

const Blogimg = 'BlogBanner.jpg';
// const Blogimg1 = 'pexels-photo-7846484.webp';
const BlogBanner = () => {
    return (
        <>
            <div class="card bg-dark text-white">
                {/* <img src= class="BlogBanner" alt="BlogBanner"></img> */}
                <img src={Blogimg} className="card-img BlogBanner" alt="BlogBanner" />
                <div class="card-img-overlay BlogBannerText">
                    <div className="blog-text-container">
                        <p class="card-title">Darjeeling Tour Packages– Book Darjeeling Packages at Best Price</p><br></br>
                        {/* <p class="card-text Cardtext2">Blog</p> */}
                        
                    </div>
                </div>
                <div class="card-img-overlay Cardtext2">
                    <p class="card-text"><u><b>Blog</b></u></p>
                </div>
            </div>
        </>
    )
}
export default BlogBanner;