import React from "react";
import "../CSS/PRightContainer.css";

const PRightContainer = () => {
    return (
        <>
            <div className="container">
                <div className="Right-container">
                    <div className="Form-head1">
                        <h3>Price on Request</h3>
                    </div>
                    <div className="Form-head2">
                        <h3>Book This Tour</h3>
                    </div>
                    <div className="Form-head3">
                        <span>* Required Field</span>
                    </div>


                    <div className="PDropdown1">
                        <select class="form-control">
                            <option>----Select Tour Type----*</option>
                            <option>Tour Within India</option>
                            <option>Tour Outside India</option>
                        </select>
                    </div>


                    <form>
                        <div className="FName">
                            <input type="text" class="form-control" placeholder="First name" />
                        </div>

                        <div class="form-group" className="FEmail">
                            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter your Email Id" />
                            <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                        </div>
                        <div className="PDropdown2">
                            <select class="form-control">
                                <option>Where to go*</option>
                                <option>Manali</option>
                                <option>Puri</option>
                                <option>Simla</option>
                                <option>Ladakh</option>
                            </select>
                        </div>


                        <div className="PDropdown3">
                            <select class="form-control">
                                <option>Depurture from*</option>
                                <option>Manali</option>
                                <option>Puri</option>
                                <option>Simla</option>
                                <option>Ladakh</option>
                            </select>
                        </div>


                        <div className="PDropdown4">
                            <select class="form-control">
                                <option>Country code*</option>
                                <option>+91 India</option>
                                <option>+93 Afganistan</option>
                                <option>+54 Argentina</option>
                                <option>+855 Combodia</option>
                            </select>
                        </div>


                        <div className="PPhone">
                            <input type="text" class="form-control" placeholder="Phone Number" />
                        </div>

                        <div className="PCount1">
                            <label>Select</label>
                            <input type="number" class="form-control" placeholder="Adults" />
                        </div>

                        <div className="PCount2">
                            <label>Select</label>
                            <input type="number" class="form-control" placeholder="Children" />
                        </div>

                        <div className="PDropdown5">
                            <label>Accomodation Type</label>
                            <select class="form-control">
                                <option>Luxury Hotel</option>
                                <option>3 Star Hotel</option>
                                <option>4 Star Hotel</option>
                                <option>5 Star Hotel</option>
                            </select>
                        </div>

                        <div className="PDropdown6">
                            <label>When do you want to go*</label>
                            <select class="form-control">
                                <option>Jan 2023</option>
                                <option>Feb 2023</option>
                                <option>Mar 2023</option>
                                <option>Apr 2023</option>
                            </select>
                        </div>

                        <div class="form-group">
                            {/* <label for="exampleFormControlTextarea1">Example textarea</label> */}
                            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Additional Information"></textarea>
                        </div>


                        <div class="form-group form-check">
                            <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                            <label class="form-check-label" for="exampleCheck1">Check me out</label>
                        </div>

                        <div className="PSubmitButton">
                            <button class="button Pbutton1"><b>Submit</b></button>
                        </div>

                    </form>

                </div>
            </div>
        </>
    )
}



export default PRightContainer;