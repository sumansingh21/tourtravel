import React from 'react';
import '../CSS/Holyday.css';

const HolydayByTheme = () => {
    return (
        <>
            <div className='container-fluid holiday-parent'>
                <div className='holiday-text mt-5'>
                    <span className='holidayText fw-bolder'> Holiday By Theme </span>
                    <p className="indiacard-details holiday-subtext fw-bolder">Select your best holiday package by theme </p>
                </div>
                <div className='container holiday-parent-two mt-2'>
                    <div className='row'>

                        <div className='col-12 col-lg-1 col-sm-12 mr-2 holiday-details child'>
                            <div className="childImage">
                                <img src='andaman.jpg' alt='andaman' className='H-img-adg' />

                            </div>

                            <p className="childText">Wildlife</p>
                        </div>

                        <div className='col-12 col-lg-1 col-sm-12 mr-2 holiday-details child'>
                            <div className="childImage">
                                <img src='andaman.jpg' alt='andaman' className='H-img-adg' />
                            </div>

                            <p className="childText">Honeymoon</p>
                        </div>

                        <div className='col-12 col-lg-1 col-sm-12 mr-2 holiday-details child'>
                            <div className="childImage">
                                <img src='andaman.jpg' alt='andaman' className='H-img-adg' />
                            </div>

                            <p className="childText">Forest</p>
                        </div>

                        <div className='col-12 col-lg-1 col-sm-12 mr-2 holiday-details child'>
                            <div className="childImage">
                                <img src='andaman.jpg' alt='andaman' className='H-img-adg' />
                            </div>

                            <p className="childText">Hill</p>
                        </div>

                        <div className='col-12 col-lg-1 col-sm-12 mr-2 holiday-details child'>
                            <div className="childImage">
                                <img src='andaman.jpg' alt='andaman' className='H-img-adg' />
                            </div>

                            <p className="childText">Reaver</p>
                        </div>

                        <div className='col-12 col-lg-1 col-sm-12 mr-2 holiday-details child'>
                            <div className="childImage">
                                <img src='andaman.jpg' alt='andaman' className='H-img-adg' />
                            </div>

                            <p className="childText">Tample</p>
                        </div>

                        <div className='col-12 col-lg-1 col-sm-12 mr-2 holiday-details child'>
                            <div className="childImage">
                                <img src='andaman.jpg' alt='andaman' className='H-img-adg' />
                            </div>

                            <p className="childText">Summer</p>
                        </div>

                        <div className='col-12 col-lg-1 col-sm-12 mr-2 holiday-details child'>
                            <div className="childImage">
                                <img src='andaman.jpg' alt='andaman' className='H-img-adg' />
                            </div>

                            <p className="childText">Sea</p>
                        </div>

                        <div className='col-12 col-lg-1 col-sm-12 mr-2 holiday-details child'>
                            <div className="childImage">
                                <img src='andaman.jpg' alt='andaman' className='H-img-adg' />
                            </div>

                            <p className="childText">Ocean</p>
                        </div>

                        <div className='col-12 col-lg-1 col-sm-12 mr-2 holiday-details child'>
                            <div className="childImage">
                                <img src='andaman.jpg' alt='andaman' className='H-img-adg' />
                            </div>

                            <p className="childText">Lake</p>
                        </div>

                        <div className='col-12 col-lg-1 col-sm-12 mr-2 holiday-details child'>
                            <div className="childImage">
                                <img src='andaman.jpg' alt='andaman' className='H-img-adg' />
                            </div>

                            <p className="childText">Summer</p>
                        </div>

                        {/* <div className='col-12 col-lg-1 col-sm-12 mr-2 holiday-details'>
                            <div className='themeParent mx-2'>
                                <div className='card-child-image mt-2'> </div>
                                <div className='card-child-text text-center'> Wildlife </div>
                            </div>
                            <p> Wildlifefefe </p>
                        </div>

                        <div className='col-12 col-lg-1 col-sm-12 mx-2 holiday-details'>
                            <div className='themeParent mx-2'>
                                <div className='card-child-image mt-2'> </div>
                                <div className='card-child-text text-center'> Tample </div>
                            </div>
                        </div>

                        <div className='col-12 col-lg-1 col-sm-12 mx-2 holiday-details'>
                            <div className='themeParent mx-2'>
                                <div className='card-child-image mt-2'> </div>
                                <div className='card-child-text text-center h6'> Honeymo  </div>
                            </div>
                        </div>

                        <div className='col-12 col-lg-1 col-sm-12 mx-2 holiday-details'>
                            <div className='themeParent mx-2'>
                                <div className='card-child-image mt-2'> </div>
                                <div className='card-child-text text-center'> Hill  </div>
                            </div>
                        </div>

                        <div className='col-12 col-lg-1 col-sm-12 mx-2 holiday-details'>
                            <div className='themeParent mx-2'>
                                <div className='card-child-image mt-2'> </div>
                                <div className='card-child-text text-center'> Winter </div>
                            </div>
                        </div>

                        <div className='col-12 col-lg-1 col-sm-12 mx-2 holiday-details'>
                            <div className='themeParent mx-2'>
                                <div className='card-child-image mt-2'> </div>
                                <div className='card-child-text text-center'> Sea </div>
                            </div>
                        </div>
                        
                        <div className='col-12 col-lg-1 col-sm-12 mx-2 holiday-details'>
                            <div className='themeParent mx-2'>
                                <div className='card-child-image mt-2'> </div>
                                <div className='card-child-text text-center'> Himalaya </div>
                            </div>
                        </div>

                        <div className='col-12 col-lg-1 col-sm-12 mx-2 holiday-details'>
                            <div className='themeParent mx-2'>
                                <div className='card-child-image mt-2'> </div>
                                <div className='card-child-text text-center'> Summer </div>
                            </div>
                        </div>

                        <div className='col-12 col-lg-1 col-sm-12 mx-2 holiday-details'>
                            <div className='themeParent mx-2'>
                                <div className='card-child-image mt-2'> </div>
                                <div className='card-child-text text-center'> River  </div>
                            </div>
                        </div>
                        
                        <div className='col-12 col-lg-1 col-sm-12 mx-2 holiday-details'>
                            <div className='themeParent mx-2'>
                                <div className='card-child-image mt-2'> </div>
                                <div className='card-child-text text-center'> Tent </div>
                            </div>
                        </div> */}

                        {/* <div className='col-1 mx-2 holiday-details'>

                        </div>
                        <div className='col-1 mx-2 holiday-details'>

                        </div> */}

                    </div>
                </div>

            </div>
        </>
    )
}

export default HolydayByTheme;