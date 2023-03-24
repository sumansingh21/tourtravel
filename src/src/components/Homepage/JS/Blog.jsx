import React from 'react';
import { NavLink } from 'react-router-dom';
import '../CSS/Blog.css';

const img1 = 'goa2.jpg';
const img2 = 'ladakh.jpg';
const img3 = 'nilachal.jpg';
// const img4 ='Blog4.jpg';
const img5 = 'pondicheri.jpg';

const Blog = () => {
    return (
        <>

            <div className='container my-5'>
                <div className="Heading mb-4 text-center">
                    <span className='blog-text'>Exclusive collection of travel blogs</span>
                    <p className='blog-subtext'>
                       Read our exclusive blogs on exclusive packages
                    </p>
                </div>

                <div class="row g-4 mt-5">
                    <div class="col-12 col-lg-3 col-sm-12 IPcards">
                        <div class="card h-100 shadow">
                            <div className="inner">
                                <img src={img1} class="card-img-top opacity-remover" alt="Blog1" />
                            </div>
                            <div class="card-body">
                                <h5 class="card-title" className="card1-title">Goa Trip,2nd May,2022</h5>
                                <p class="card-text">Goa is a lot on the radar of my mind these days. Goa, as they say, is a vibe and I was lucky....
                                <span>
                                    {/* <button type="button" className="btn readmoreBtn">Read more</button> */}
                                    <NavLink to="" className="readmoreBtn"> Read more </NavLink>
                                </span>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-lg-3 col-sm-12 IPcards">
                        <div class="card h-100 shadow">
                            <div className="inner">
                                <img src={img2} class="card-img-top opacity-remover" alt="Blog2" />
                            </div>
                            <div class="card-body">
                                <h5 class="card-title" className="card1-title">Ladakh,5th Sep,2021</h5>
                                <p class="card-text">Ladakh is a lot on the radar of my mind these days. Ladakh, as they say, is a vibe and I was lucky....
                                <NavLink to="" className="readmoreBtn"> Read more </NavLink>
                                </p>
                                {/* <button type="button" class="btn btn-outline-info">Read more</button> */}
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-lg-3 col-sm-12 IPcards">
                        <div class="card h-100 shadow">
                            <div className="inner">
                                <img src={img3} class="card-img-top opacity-remover" alt="Blog3" />
                            </div>
                            <div class="card-body">
                                <h5 class="card-title" className="card1-title">Nilachal,13th Apr,2022</h5>
                                <p class="card-text">Nilachal is a lot on the radar of my mind these days. Nilachal, as they say, is a vibe and I was lucky....
                                <NavLink to="" className="readmoreBtn"> Read more </NavLink>
                                </p>
                                {/* <button type="button" class="btn btn-outline-info">Read more</button> */}
                            </div>
                        </div>
                    </div>
                    {/* <div class="col-md-3">
                    <div class="card h-100">
                        <img src={img4} class="card-img-top" alt="Blog4"/>
                            <div class="card-body">
                                <h5 class="card-title" className="card1-title">Manali,13th Aug,2022</h5>
                                <p class="card-text">Manali is a lot on the radar of my mind these days. Manali, as they say, is a vibe and I was lucky, I could experience a bit of the Susegad way of life. its parties, and nightlife, what I’m going to show you is the other side of Goa. This was the Goa that I experienced – the age old temples rendering stories of how....</p>
                                <button type="button" class="btn btn-outline-info">Read more</button>
                            </div>
                    </div>
                </div> */}
                    <div class="col-12 col-lg-3 col-sm-12 IPcards">
                        <div class="card h-100 shadow">
                            <div className="inner">
                                <img src={img5} class="card-img-top opacity-remover" alt="Blog5" />
                            </div>
                            <div class="card-body">
                                <h5 class="card-title" className="card1-title">Pondicheri</h5>
                                <p class="card-text">Pondicheri is a lot on the radar of my mind these days. Pondicheri, as they say, is a vibe and I was lucky....
                                <NavLink to="" className="readmoreBtn"> Read more </NavLink>
                                </p>
                                {/* <button type="button" class="btn btn-outline-info">Read more</button> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )

}

export default Blog;