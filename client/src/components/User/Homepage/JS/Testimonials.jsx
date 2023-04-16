import React from 'react';
import '../CSS/Testimonials.css';

const Testimonials = () => {
    return (
        <>
            <div className="Testi-Master-Parent my-5">
                <div className='text-center mb-4'>
                    <span className='testi-text' >Our Client Talk </span>
                    <p className='font-italic testi-subtext'>Let's see what people say about our service ,which always inspire us to do something more better all time</p>
                </div>

                <div classNameName='container testi-container mt-5'>
                    <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
                        <ol className="carousel-indicators">
                            <li data-target="#carouselExampleCaptions" data-slide-to="0" className="active"></li>
                            <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
                            <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
                        </ol>
                        <div className="container-fluid carousel-inner">
                            <div className="carousel-item active">
                                {/* <img src="..." className="" alt="..."></img>
      <div className="carousel-caption d-none d-md-block">
        <h5>First slide label</h5>
        <p>Some representative placeholder content for the first slide.</p>
      </div> */}
                                <div className='container'>
                                    <div className='row'>
                                        <div className='col-12 col-md-3 IPcards'>
                                            <div className='testi-card'>
                                            <div className='testi-child-one'>
                                            <div className='testi-image'> <img src={"avatar.png"} alt="..."  className='testi-image'/> </div>
                                                    <span className='testi-name text-center'> Mr. Asraf ali   </span>
                                                </div>
                                                <div className='container testi-child-two'>
                                                    This is my best travel memory
                                                </div>
                                            </div>
                                        </div>
                                        <div className='col-12 col-md-3 IPcards'>
                                            <div className='testi-card'>
                                                <div className='testi-child-one'>
                                                    <div className='testi-image'><img src={"avatar.png"} alt="..."  className='testi-image'/>   </div>
                                                    <span className='testi-name text-center'> Mr. Asraf ali   </span>
                                                </div>
                                                <div className='container testi-child-two'>
                                                This is my best travel memory
                                                </div>


                                            </div>
                                        </div>
                                        <div className='col-12 col-md-3 IPcards'>
                                            <div className='testi-card'>
                                            <div className='testi-child-one'>
                                                    <div className='testi-image'><img src={"avatar.png"} alt="..."  className='testi-image'/>   </div>
                                                    <span className='testi-name text-center'> Mr. Asraf ali   </span>
                                                </div>
                                                <div className='container testi-child-two'>
                                                This is my best travel memory
                                                </div>
                                            </div>
                                        </div>
                                        <div className='col-12 col-md-3 IPcards'>
                                            <div className='testi-card'>
                                            <div className='testi-child-one'>
                                                    <div className='testi-image'><img src={"avatar.png"} alt="..."  className='testi-image'/>   </div>
                                                    <span className='testi-name text-center'> Mr. Asraf ali   </span>
                                                </div>
                                                <div className='container testi-child-two'>
                                                This is my best travel memory
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>

                            </div>
                             <div className="carousel-item">
                            <div className='container'>
                            <div className='row'>
                                        <div className='col-12 col-md-3 IPcards'>
                                            <div className='testi-card'>
                                            <div className='testi-child-one'>
                                                    <div className='testi-image'><img src={"avatar.png"} alt="..."  className='testi-image'/>  </div>
                                                    <span className='testi-name text-center'> Mr. Asraf ali   </span>
                                                </div>
                                                <div className='container testi-child-two'>
                                                This is my best travel memory
                                                </div>
                                            </div>
                                        </div>
                                        <div className='col-12 col-md-3 IPcards'>
                                            <div className='testi-card'>
                                                <div className='testi-child-one'>
                                                    <div className='testi-image'><img src={"avatar.png"} alt="..."  className='testi-image'/>   </div>
                                                    <span className='testi-name text-center'> Mr. Asraf ali   </span>
                                                </div>
                                                <div className='container testi-child-two'>
                                                This is my best travel memory
                                                </div>


                                            </div>
                                        </div>
                                        <div className='col-12 col-md-3 IPcards'>
                                            <div className='testi-card'>
                                            <div className='testi-child-one'>
                                                    <div className='testi-image'><img src={"avatar.png"} alt="..."  className='testi-image'/>   </div>
                                                    <span className='testi-name text-center'> Mr. Asraf ali   </span>
                                                </div>
                                                <div className='container testi-child-two '>
                                                This is my best travel memory
                                                </div>
                                            </div>
                                        </div>
                                        <div className='col-12 col-md-3 IPcards'>
                                            <div className='testi-card'>
                                            <div className='testi-child-one'>
                                                    <div className='testi-image'><img src={"avatar.png"} alt="..."  className='testi-image'/>   </div>
                                                    <span className='testi-name text-center'> Mr. Asraf ali   </span>
                                                </div>
                                                <div className='container testi-child-two'>
                                                This is my best travel memory
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                            </div>
                        </div>
                            <div className="carousel-item">
                            <div className='container'>
                            <div className='row'>
                                        <div className='col-12 col-md-3 IPcards'>
                                            <div className='testi-card'>
                                            <div className='testi-child-one'>
                                                    <div className='testi-image'><img src={"avatar.png"} alt="..."  className='testi-image'/>   </div>
                                                    <span className='testi-name text-center'> Mr. Asraf ali   </span>
                                                </div>
                                                <div className='container testi-child-two'>
                                                This is my best travel memory
                                                </div>
                                            </div>
                                        </div>
                                        <div className='col-12 col-md-3 IPcards'>
                                            <div className='testi-card'>
                                                <div className='testi-child-one'>
                                                    <div className='testi-image'><img src={"avatar.png"} alt="..."  className='testi-image'/>   </div>
                                                    <span className='testi-name text-center'> Mr. Asraf ali   </span>
                                                </div>
                                                <div className='container testi-child-two'>
                                                This is my best travel memory
                                                </div>


                                            </div>
                                        </div>
                                        <div className='col-12 col-md-3 IPcards'>
                                            <div className='testi-card'>
                                            <div className='testi-child-one'>
                                                    <div className='testi-image'><img src={"avatar.png"} alt="..."  className='testi-image'/>   </div>
                                                    <span className='testi-name text-center'> Mr. Asraf ali   </span>
                                                </div>
                                                <div className='container testi-child-two'>
                                                This is my best travel memory
                                                </div>
                                            </div>
                                        </div>
                                        <div className='col-12 col-md-3 IPcards'>
                                            <div className='testi-card'>
                                            <div className='testi-child-one'>
                                                    <div className='testi-image'><img src={"avatar.png"} alt="..."  className='testi-image'/>   </div>
                                                    <span className='testi-name text-center'> Mr. Asraf ali   </span>
                                                </div>
                                                <div className='container testi-child-two'>
                                                This is my best travel memory
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                            </div>
                        </div> 
                        </div>
                        <button className="carousel-control-prev" type="button" data-target="#carouselExampleCaptions" data-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="sr-only">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-target="#carouselExampleCaptions" data-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="sr-only">Next</span>
                        </button>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Testimonials;