import React from 'react';
import '../CSS/Holyday.css';

const HolydayByTheme = () => {
    return (
        <>
            <div className='container-fluid holiday-parent'>
                <div className='holiday-text mt-5'>
                    <span className='holidayText fw-bolder'> Holiday By Theme </span>
                    <p className="indiacard-details holiday-subtext fw-bolder">Select your best holiday package by theme</p>
                </div>
                <div className='container holiday-parent-two mt-2'>
                    <div className='row'>
                        <div className='col-1 sm-12 mx-2 holiday-details'>
                            <div className='themeParent'>
                                <div className='card-child-image mt-2'> </div>
                                <div className='card-child-text text-center'> Wildlife </div>
                            </div>
                        </div>

                        <div className='col-1 mx-2 holiday-details'>
                            <div className='themeParent'>
                                <div className='card-child-image mt-2'> </div>
                                <div className='card-child-text text-center'> Tample </div>
                            </div>
                        </div>

                        <div className='col-1 mx-2 holiday-details'>
                            <div className='themeParent'>
                                <div className='card-child-image mt-2'> </div>
                                <div className='card-child-text text-center h6'> Honeymoon  </div>
                            </div>
                        </div>

                        <div className='col-1 mx-2 holiday-details'>
                            <div className='themeParent'>
                                <div className='card-child-image mt-2'> </div>
                                <div className='card-child-text text-center'> Hill  </div>
                            </div>
                        </div>

                        <div className='col-1 mx-2 holiday-details'>
                            <div className='themeParent'>
                                <div className='card-child-image mt-2'> </div>
                                <div className='card-child-text text-center'> Winter </div>
                            </div>
                        </div>

                        <div className='col-1 mx-2 holiday-details'>
                            <div className='themeParent'>
                                <div className='card-child-image mt-2'> </div>
                                <div className='card-child-text text-center'> Sea </div>
                            </div>
                        </div>
                        
                        <div className='col-1 mx-2 holiday-details'>
                            <div className='themeParent'>
                                <div className='card-child-image mt-2'> </div>
                                <div className='card-child-text text-center'> Himalaya </div>
                            </div>
                        </div>

                        <div className='col-1 mx-2 holiday-details'>
                            <div className='themeParent'>
                                <div className='card-child-image mt-2'> </div>
                                <div className='card-child-text text-center'> Summer </div>
                            </div>
                        </div>

                        <div className='col-1 mx-2 holiday-details'>
                            <div className='themeParent'>
                                <div className='card-child-image mt-2'> </div>
                                <div className='card-child-text text-center'> River  </div>
                            </div>
                        </div>
                        
                        <div className='col-1 mx-2 holiday-details'>
                            <div className='themeParent'>
                                <div className='card-child-image mt-2'> </div>
                                <div className='card-child-text text-center'> Tent </div>
                            </div>
                        </div>
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