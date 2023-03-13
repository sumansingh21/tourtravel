import React from "react";
import '../CSS/PackagesCard.css';

const PackagesCard = () => {
    return (
        <>
            <div className="packages-cards-heading">Summer Holiday Packages in India</div>
            <div className="container">
                <div className="container-fluid package-filter">
                    <div className="package-filter-heading">Package Filter</div>
                    <div className="package-filter-whereto">Where to
                        <div className="package-filter-whereto-field">
                            <input type="text" placeholder="Select any place" />
                        </div>
                    </div>
                    <div className="package-filter-startdate">Start Date
                        <div className="package-filter-startdate-field">
                            <input type="date" placeholder="Select an date" />
                        </div>
                    </div>
                    <div className="package-class">
                        <div className="package-class-heading">
                            Package Class
                        </div>
                        <div class="package-class-content">
                            <div><input type="checkbox" name="choice" id="cb1" /><label for="cb1">Luxury Plus</label></div>
                            <div><input type="checkbox" name="choice" id="cb2" /><label for="cb2">Luxury</label></div>
                            <div><input type="checkbox" name="choice" id="cb3" /><label for="cb3">Mid range</label></div>
                            <div><input type="checkbox" name="choice" id="cb4" /><label for="cb4">Budget</label></div>
                        </div>
                    </div>
                    <div className="package-type">
                        <div className="package-type-heading">
                            Package type
                        </div>
                        <div class="package-type-content">
                            <div><input type="checkbox" name="choice" id="choice1" /><label for="cb1">Group Tour</label></div>
                            <div><input type="checkbox" name="choice" id="choice2" /><label for="cb2">Private Tour</label></div>
                            <div><input type="checkbox" name="choice" id="choice3" /><label for="cb3">Hotel Tour</label></div>
                        </div>
                    </div>
                </div>
                <div className="container packages-cards-content">
                    <div class="row packages-cards-content-row">
                        <div class="col-lg-3 packages-card-image">
                            <img src="tajmahal.jpg" class="img-fluid" alt="packages-card" />
                        </div>
                        <div class="col-lg-6 packages-cards-content-text">
                            <div class="card-title">Discover Ladakh by 2023</div>
                            <div class="card-text">
                                <i class="fa-solid fa-clock"></i>9 Nights/10 Days
                            </div>
                            <div class="card-text">
                                <i class="fa-solid fa-location-dot"></i>Manali-Jispa-Sarchu-Manali-Jispa-Sarchu
                            </div>
                        </div>
                        <div class="col-lg-3 CardlastSec">
                            Price on request
                            <button type="button">View Details</button>
                            <button type="button">Get a free quotes</button>
                        </div>
                    </div>
                    <div class="row packages-cards-content-row">
                        <div class="col-lg-3 packages-card-image">
                            <img src="tajmahal.jpg" class="img-fluid" alt="packages-card" />
                        </div>
                        <div class="col-lg-6 packages-cards-content-text">
                            <div class="card-title">Discover Ladakh by 2023</div>
                            <div class="card-text">
                                <i class="fa-solid fa-clock"></i>9 Nights/10 Days
                            </div>
                            <div class="card-text">
                                <i class="fa-solid fa-location-dot"></i>Manali-Jispa-Sarchu-Manali-Jispa-Sarchu
                            </div>
                        </div>
                        <div class="col-lg-3 CardlastSec">
                            Price on request
                            <button type="button">View Details</button>
                            <button type="button">Get a free quotes</button>
                        </div>
                    </div>
                    <div class="row packages-cards-content-row">
                        <div class="col-lg-3 packages-card-image">
                            <img src="tajmahal.jpg" class="img-fluid" alt="packages-card" />
                        </div>
                        <div class="col-lg-6 packages-cards-content-text">
                            <div class="card-title">Discover Ladakh by 2023</div>
                            <div class="card-text">
                                <i class="fa-solid fa-clock"></i>9 Nights/10 Days
                            </div>
                            <div class="card-text">
                                <i class="fa-solid fa-location-dot"></i>Manali-Jispa-Sarchu-Manali-Jispa-Sarchu
                            </div>
                        </div>
                        <div class="col-lg-3 CardlastSec">
                            Price on request
                            <button type="button">View Details</button>
                            <button type="button">Get a free quotes</button>
                        </div>
                    </div>
                    <div class="row packages-cards-content-row">
                        <div class="col-lg-3 packages-card-image">
                            <img src="tajmahal.jpg" class="img-fluid" alt="packages-card" />
                        </div>
                        <div class="col-lg-6 packages-cards-content-text">
                            <div class="card-title">Discover Ladakh by 2023</div>
                            <div class="card-text">
                                <i class="fa-solid fa-clock"></i>9 Nights/10 Days
                            </div>
                            <div class="card-text">
                                <i class="fa-solid fa-location-dot"></i>Manali-Jispa-Sarchu-Manali-Jispa-Sarchu
                            </div>
                        </div>
                        <div class="col-lg-3 CardlastSec">
                            Price on request
                            <button type="button">View Details</button>
                            <button type="button">Get a free quotes</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default PackagesCard