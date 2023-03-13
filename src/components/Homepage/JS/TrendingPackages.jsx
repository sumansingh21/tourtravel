import React from "react";
import '../CSS/TrendingPackages.css';
const TrendingPackages = () => {
    return (
        <>
            <div className="container my-5">
                <div className="cards-header text-center trending-text mb-4">
                    <span className=""> Trending Packages </span>
                    <p className="trending-subtext">
                        Try Packages which are currently running on trend on public demand
                    </p>
                </div>
                <div class="row mt-5">
                    <div class="col-12 col-md-2 col-lg-3 col-sm-4 px-5">
                        <div class="card bg-dark text-white">
                            <img src="himachal.jpg" class="card-img" alt="..." />
                            <div class="card-img-overlay">
                                <div class="card-title">Himachal</div>
                                <div class="card-text mb-3">Price Starting From 17000/-</div>
                               
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-md-2 col-lg-3 col-sm-4 px-5">
                        <div class="card bg-dark text-white">
                            <img src="himachal.jpg" class="card-img" alt="..." />
                            <div class="card-img-overlay">
                                <div class="card-title">Himachal</div>
                                <div class="card-text">Price Starting From 17000/-</div>
                              
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-md-2 col-lg-3 col-sm-4 px-5">
                        <div class="card bg-dark text-white">
                            <img src="himachal.jpg" class="card-img" alt="..." />
                            <div class="card-img-overlay">
                                <div class="card-title">Himachal</div>
                                <div class="card-text">Price Starting From 17000/-</div>
                            
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-md-2 col-lg-3 col-sm-4 px-5">
                        <div class="card bg-dark text-white">
                            <img src="himachal.jpg" class="card-img" alt="..." />
                            <div class="card-img-overlay">
                                <div class="card-title">Himachal</div>
                                <div class="card-text">Price Starting From 1700/-</div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
export default TrendingPackages