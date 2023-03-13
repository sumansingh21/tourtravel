import React from "react";
import { NavLink } from "react-router-dom";
import "../CSS/PLeftContainer.css";


const Pimg1 = 'Pbanner1.jpg';
const Pimg2 = 'Pbanner2.jpg';
const Pimg3 = 'Pbanner3.jpg';
// const Pimg4 = 'About.jpg';

const PLeftContainer = () => {
    return (
        <>
            <div className="container">
                <div className="Left-container">
                    <div className="body1">
                        <p>Shimla to Manali tour</p>
                        <p1>
                            <i class="fa-solid fa-clock mr-3"></i>2 Nights and 3 Days<br></br>
                        </p1>
                        <p2>
                            <i class="fa-solid fa-location-dot mr-3"></i>Shimla-Krfi-Manali-Rhotang Pas
                        </p2>
                    </div>

                    <div id="carouselExampleFade" class="carousel slide carousel-fade" data-ride="carousel">
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <img src={Pimg1} class="d-block w-100" alt="Pbanner1" />
                            </div>
                            <div class="carousel-item">
                                <img src={Pimg2} class="d-block w-100" alt="Pbanner2" />
                            </div>
                            <div class="carousel-item">
                                <img src={Pimg3} class="d-block w-100" alt="Pbanner3" />
                            </div>
                        </div>
                        <button class="carousel-control-prev" type="button" data-target="#carouselExampleFade" data-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="sr-only">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-target="#carouselExampleFade" data-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="sr-only">Next</span>
                        </button>
                    </div>

                    {/* ----------------------------------------------------------- */}

                    <nav class="navbar navbar-expand-lg navbar-light bg-light PNavbar">
                        {/* <NavLink to='' class="navbar-brand">Navbar</NavLink> */}
                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                            <div class="navbar-nav PNavbar1">
                                <NavLink to='' class="nav-link active ">Overview <span class="sr-only">(current)</span></NavLink>
                                <NavLink to='' class="nav-link ">Highlights</NavLink>
                                <NavLink to='' class="nav-link">Itinerary</NavLink>
                            </div>
                        </div>
                    </nav>
                    {/* --------------------------------------------------------------- */}



                    <div className="Overview">
                        <p1>Overview</p1>
                        <hr></hr>
                        <p>
                            Want that much-needed break from your routine life and get away from the hustle-bustle of Chandigarh? Plan a holiday with us and get the opportunity to visit some of the most sought after tourist destinations in Himachal Pradesh. This short trip to Manali with Kasol from Chandigarh will take you across Manali, Kullu, Kasol, Manikaran, Rohtang Pass, and Solang Valley. You can spend time in the lap of nature, enjoy the soothing weather, and witness beautiful views.

                            Our Manali tour package from Chandigarh package makes your trip smooth and hassle-free as it is equipped with swift transfers, cosy stays, delicious meals, and great sightseeing tours and excursions. We also offer the facility of customization with which you can modify the itinerary as per your needs and budget. So, plan a short tour to Manali and Kasol from Chandigarh and enjoy 4 days of utmost relaxation in Himachal Pradesh.
                        </p>
                        <p2>Highlights</p2>
                        <hr></hr>
                        <p>
                            <i class="fa-regular fa-circle-check mr-3"></i>Treat your eyes to the breathtaking beauty of Manali.
                        </p>
                        <p>
                            <i class="fa-regular fa-circle-check mr-3 "></i>Indulge in skiing, snow scooter, etc. at Rohtang Pass.
                        </p>
                        <p>
                            <i class="fa-regular fa-circle-check mr-3"></i>Spend time in nature at Solang Valley
                        </p>
                        <p>
                            <i class="fa-regular fa-circle-check mr-3"></i>Full day excursion to Kullu, Kasol Valley, and Manikaran.
                        </p>
                        <p>
                            <i class="fa-regular fa-circle-check mr-3"></i>Treat your eyes to the breathtaking beauty of Manali.
                        </p>
                        <p3>Itinerary - Manali with Kasol from Chandigarh</p3>
                        <hr></hr>
                        <p4>Day 1 - Chandigarh - Manali</p4><br></br>
                        <span>Get ready for an exciting trip to Manali from Chandigarh! On arrival at Chandigarh, meet our representative who will transfer you to Manali. This hill station in Uttarakhand is adorned with natural charm and unparalleled beauty. On your way, treat your eyes to the breathtaking landscapes all around. Upon reaching Manali, check in the hotel and relax. Savour a delightful dinner and enjoy a cosy sleep.</span>
                        <p>
                            <b>Distance from Chandigarh to Manali</b>: 300 km (approx.)<br></br>

                            <b>Travel Time</b>: 9 hours (approx.)
                        </p>
                        <hr></hr>
                        <p5>Day 2 - Manali - Rohtang Pass</p5><br></br>
                        <span>Post fulfilling breakfast, get ready, proceed for a tour of Rohtang Pass and Solang Valley. Here, indulge in fun activities like snow scooter, and skiing, among others. Spend the day in the lap of nature and by evening, return to your hotel in Manali. Enjoy dinner and hop onto the bed for a relaxed sleep. (Guests have to hire a Jeep for Rohtang Pass on direct payment)</span>
                        <p>
                            <b>Distance from Manali to Rohtang Pass</b>: 51 km (approx.)<br></br>

                            <b>Travel Time</b>: 2 hours (approx.)
                        </p>
                        <hr></hr>
                        <p6>Day 3 - Manali - Kullu - Kasol - Manikaran - Manali</p6><br></br>
                        <span>Begin day 3 of your Manali tour package with Kasol with a hearty breakfast. Get ready for a full day excursion tour. Today, you will be exploring the scenic splendours - Kullu, Kasol, and Manikaran. Kullu valley is known for its temples and majestic hills covered with pine trees, deodar forests, and widespread apple orchards. Kasol, on the other hand, hosts some amazing treks, has flavoursome food, and roaring rivers.

                            Visit Angora Rabbit Farm House to spend time with the bunnies and click pictures for mementoes. End the excursion with a visit to Manikaran, which is known for its hot sulphur water spring. After the tour, return to Manali.<br></br>
                            Spend the evening shopping in the local market for souvenirs. There is a variety of items to choose from like Tibetan Carpets, Buddhist paintings, artefacts, pullovers made of yak wool, etc. Once you are done shopping, return to the hotel for a comfy overnight stay.</span>
                        <p>
                            <b>Distance from Manali to Kullu</b>: 40 km (approx.)
                        </p>
                        <p>
                            <b>Travel Time</b>: 1 hour (approx.)
                        </p>
                        <b>Distance from Kullu to Kasol</b>: 39 km (approx.)
                        <p>
                            <b>Travel Time</b>: 1.5 hours (approx.)
                        </p>
                        Distance from Kasol to Manikaran: 5 km (approx.)
                        <p>
                            <b>Travel Time</b>: 10 min (approx.)
                        </p>
                        Distance from Manikaran to Manali: 80 km (approx.)
                        <p>
                            <b>Travel Time</b>: 2 hours (approx.)
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}



export default PLeftContainer;