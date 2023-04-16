import React from "react";
import "../CSS/BlogAd.css";

const Blogpageimg1 = 'BlogAD1.png';
const Blogpageimg2 = 'BlogAD2.png';
const Blogpageimg3 = 'BlogAD3.png';

const BlogAd = () => {
    return (
        <>
            <div className=" container BlogPage-Ad-Parent">
                <div className="container BlogPage-Ad-Child1">
                    {/* <div className="container BlogPage-Ad-Child2 ">
                        <div className="BlogForm-header1">
                            <p className="BlogForm-header2">Search Tour</p>
                            <p className="BlogForm-header3">Find your dream tour today!</p>
                        </div>

                        <form>
                            <div class="form-group">
                                <input type="text" class="form-control" placeholder="Search Tour" />
                            </div>
                            <div class="form-group">
                                <input type="text" class="form-control" placeholder="Tour Code" />
                            </div>
                            <div class="form-group">
                                <select class="form-control" id="exampleFormControlSelect1">
                                    <option selected>Tour type</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </select>
                            </div>
                            <div className="BlogPage-CommentButton" >
                                <button type="submit" class="btn btn-primary BlogPage-CommentButton-child">Find Tours</button>
                            </div>
                        </form>
                    </div> */}

                    {/* -------------------------------------------------------------------------- */}
                    <div className="Blogpageimg">
                        <img src={Blogpageimg1} className="Blogpageimg1" alt="BlogAD1" />
                    </div>
                    <div className="Blogpageimg">
                        <img src={Blogpageimg2} className="Blogpageimg2" alt="BlogAD2" />
                    </div>
                    <div className="Blogpageimg">
                        <img src={Blogpageimg3} className="Blogpageimg3" alt="BlogAD3" />
                    </div>
                </div>

            </div>
        </>
    )
}
export default BlogAd;