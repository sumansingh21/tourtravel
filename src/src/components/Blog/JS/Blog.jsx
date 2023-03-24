import React from "react";
import '../CSS/Blog.css'

const Blog = () =>{
  return(
    <>

<div class="container-fluied BlogBanner">
        <img src="banner1.jpg" alt="banner" class="blogBannerImg"/>
    </div>

         <div className="container my-5">
         <div>
          <p className="h1">Blogs</p>
         </div>
        <div id="carouselExampleControlsNoTouching" className="carousel slide mt-3" data-touch="false" data-interval="false">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-4">
                            <div className="card">
                                <img src="Pbanner1.jpg" className="card-image-top blog-card-image" alt="..."/>
                                <div className="card-body">
                                  <h5 className="card-title">Card title</h5>
                                  <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                </div>
                              </div>
                        </div>
                        <div className="col-sm-4">
                            <div className="card">
                                <img src="ladakh.jpg" className="card-image-top blog-card-image" alt="..."/>
                                <div className="card-body">
                                  <h5 className="card-title">Card title</h5>
                                  <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                </div>
                              </div>
                        </div>
                        <div className="col-sm-4">
                            <div className="card">
                                <img src="andaman.jpg" className="card-image-top blog-card-image" alt="..."/>
                                <div className="card-body">
                                  <h5 className="card-title">Card title</h5>
                                  <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                </div>
                              </div>
                        </div>
                      </div>
                </div>
              </div>
              {/* <div className="carousel-item">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-4">
                            <div className="card">
                                <image src="..." className="card-image-top" alt="..."/>
                                <div className="card-body">
                                  <h5 className="card-title">Card title</h5>
                                  <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                </div>
                              </div>
                        </div>
                        <div className="col-sm-4">
                            <div className="card">
                                <image src="..." className="card-image-top" alt="..."/>
                                <div className="card-body">
                                  <h5 className="card-title">Card title</h5>
                                  <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                </div>
                              </div>
                        </div>
                        <div className="col-sm-4">
                            <div className="card">
                                <image src="..." className="card-image-top" alt="..."/>
                                <div className="card-body">
                                  <h5 className="card-title">Card title</h5>
                                  <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                </div>
                              </div>
                        </div>
                      </div>
                </div>
              </div> */}
              {/* <div className="carousel-item">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-4">
                            <div className="card">
                                <image src="..." className="card-image-top" alt="..."/>
                                <div className="card-body">
                                  <h5 className="card-title">Card title</h5>
                                  <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                </div>
                              </div>
                        </div>
                        <div className="col-sm-4">
                            <div className="card">
                                <image src="..." className="card-image-top" alt="..."/>
                                <div className="card-body">
                                  <h5 className="card-title">Card title</h5>
                                  <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                </div>
                              </div>
                        </div>
                        <div className="col-sm-4">
                            <div className="card">
                                <image src="..." className="card-image-top" alt="..."/>
                                <div className="card-body">
                                  <h5 className="card-title">Card title</h5>
                                  <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                </div>
                              </div>
                        </div>
                      </div>
                </div>
              </div> */}
            </div>
            <button className="carousel-control-prev" type="button" data-target="#carouselExampleControlsNoTouching" data-slide="prev">
              <span className="carousel-control-prev-icon d-none" aria-hidden="true"></span>
              <span className="sr-only">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-target="#carouselExampleControlsNoTouching" data-slide="next">
              <span className="carousel-control-next-icon d-none" aria-hidden="true"></span>
              <span className="sr-only">Next</span>
            </button>
          </div>
    </div>
    
    </>
  )
}

export default Blog;