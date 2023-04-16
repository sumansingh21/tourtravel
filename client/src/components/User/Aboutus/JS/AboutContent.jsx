import React from "react";
import '../CSS/AboutContent.css';
const AboutContent = () => {
    return (
        <>
            <div className="about-banner">
                <img src="aboutimg.jpg" class="about-banner-img" alt="Not Available" />
                <div className="about-banner-text">About Us</div>
            </div>
            <div className="conatiner-fluid about-content-container">
                <div className="container about-content-first">
                    <div className="about-content-first-heading">About Us</div>
                    The Travel Buddy is the flagship digital consumer brand within the Columbus Travel Media portfolio. A comprehensive guide to the world’s best travel destinations, its print heritage stretches back 30 years, with the online portal reaching its 19-year anniversary in 2018. Available in English, German, French and Spanish versions.
                </div>
                <div className="conatainer about-content-second col-xs-6">
                    Travel Buddy is one of the most respected and successful names in the global travel industry, with a long and rich company heritage spanning 30 years. The definitive resource for global travel content, its reputation has been built on journalistic credibility.We’ve been travelling the world for over 30 years, building a reputation for providing quality travel content that’s inspiring, engaging and informative.
                </div>
            </div>

        </>
    )
}
export default AboutContent