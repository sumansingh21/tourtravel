import React from 'react';
import './css/ViewPackages.css';
import Sidebar from "../Sidebar";
import '../css/Body.css';
import '../css/TopHeader.css';
import { NavLink } from "react-router-dom";
import '/node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min.js';
import "datatables.net-dt/js/dataTables.dataTables"
import "datatables.net-dt/css/jquery.dataTables.min.css"
import $ from 'jquery';
import JoditEditor from 'jodit-react';
import { useRef } from 'react';
import { useState } from 'react';

const ViewPackages = () => {
    $(document).ready(function () {
        setTimeout(function () {
            $('#myUserTable').DataTable();
        }, 1000);
    });

    const editor = useRef(null)
    const [content, setContent] = useState('')

    const editor2 = useRef(null)
    const [content2, setContent2] = useState('')

    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12 top_header">
                        <div className="row">
                            <div className="col-12 col-md-2"></div>
                            <div className="col-12 col-md-10">
                                <div className="row">
                                    <div className="col-12 col-md-6">
                                        <div className="header-left-icon">
                                            <i className="fas fa-bars"></i>
                                            <span>Home</span>
                                            <span>/</span>
                                            <span>Default </span>
                                        </div>
                                    </div>

                                    <div className="col-12 col-md-5">
                                        <div className="header-right-icon">
                                            <form>
                                                <table className="table table-responsive">
                                                    <tr>
                                                        <td><input type='search' name="search" placeholder="Search..." className="form-control"></input></td>
                                                        <td id="td"><i className="fas fa-search"></i></td>
                                                    </tr>
                                                </table>
                                            </form>
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-1 col-lg-1">
                                        <div className="haeder-right-sec-icon">
                                            <i className="far fa-user"></i>
                                            <i className="far fa-bell"></i>
                                            <i className="far fa-envelope"></i>
                                        </div>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-12">
                                        <div className="title">
                                            <span><i class="fas fa-tachometer-alt pr-1" style={{ color: '#fff' }}></i> <span>Dashboard</span> <span className="float-right"><NavLink to='/' className='doctor-nav'>Home</NavLink> <span>/ <span>View Packages</span></span></span></span>
                                        </div><hr style={{ backgroundColor: '#fff' }}></hr>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-12 col-md-2 p-0 m-0">
                        <Sidebar ></Sidebar>
                    </div>

                    <div className="col-12 col-md-10 col-lg-10 p-0 m-0">
                        <div className="body" id="dr-form-area">
                            <form>
                                <div className="container-fluid">
                                    <div className="row">
                                        <div className="col-12">
                                            <div className="dr-form">
                                                <h4 className="text-center pt-2">Packages Details</h4><hr></hr>
                                                <table class="table table-striped" id="myUserTable">
                                                    <thead>
                                                        <tr>
                                                            <th scope="col">Id</th>
                                                            <th scope="col">Package Name</th>
                                                            <th scope="col">Packages Route</th>
                                                            <th scope="col">Total Nights</th>
                                                            <th scope="col">Total Days</th>
                                                            <th scope="col">Starting Price</th>
                                                            <th scope="col">Package Image</th>
                                                            <th scope="col">Package Overview</th>
                                                            <th scope="col">Package Highlights</th>
                                                            <th scope="col">Route DEtails</th>
                                                            <th scope="col">Action</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <th scope="row">1</th>
                                                            <td>PAck 1</td>
                                                            <td>Route 1</td>
                                                            <td>1</td>
                                                            <td>1</td>
                                                            <td>17000</td>
                                                            <td><img src="/img1.jpg" alt="Image1" className="ViewCatImg" /> </td>
                                                            <td>Overview 1</td>
                                                            <td>Highlights 1</td>
                                                            <td>Route 1</td>
                                                            <td>
                                                                <i class="fas fa-edit mx-2" data-toggle="modal" data-target=".bd-example-modal-lg"> </i>
                                                                <i class="fas fa-trash alt mx-2"></i>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">1</th>
                                                            <td>PAck 1</td>
                                                            <td>Route 1</td>
                                                            <td>1</td>
                                                            <td>1</td>
                                                            <td>17000</td>
                                                            <td><img src="/img1.jpg" alt="Image1" className="ViewCatImg" /> </td>
                                                            <td>Overview 1</td>
                                                            <td>Highlights 1</td>
                                                            <td>Route 1</td>
                                                            <td>
                                                                <i class="fas fa-edit mx-2"></i>
                                                                <i class="fas fa-trash alt mx-2"></i>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">1</th>
                                                            <td>PAck 1</td>
                                                            <td>Route 1</td>
                                                            <td>1</td>
                                                            <td>1</td>
                                                            <td>17000</td>
                                                            <td><img src="/img1.jpg" alt="Image1" className="ViewCatImg" /> </td>
                                                            <td>Overview 1</td>
                                                            <td>Highlights 1</td>
                                                            <td>Route 1</td>
                                                            <td>
                                                                <i class="fas fa-edit mx-2"></i>
                                                                <i class="fas fa-trash alt mx-2"></i>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">1</th>
                                                            <td>PAck 1</td>
                                                            <td>Route 1</td>
                                                            <td>1</td>
                                                            <td>1</td>
                                                            <td>17000</td>
                                                            <td><img src="/img1.jpg" alt="Image1" className="ViewCatImg" /> </td>
                                                            <td>Overview 1</td>
                                                            <td>Highlights 1</td>
                                                            <td>Route 1</td>
                                                            <td>
                                                                <i class="fas fa-edit mx-2"></i>
                                                                <i class="fas fa-trash alt mx-2"></i>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>

                                                {/* <div className="row">
                                                <div className="col-12">
                                                    <div className="btn-submit">
                                                        <table>
                                                            <tr>
                                                                <td>
                                                                    <button type="reset" name="ok" className="btn btn-outline-danger">Reset</button>
                                                                    <button type="submit" name="ok" className="btn btn-outline-primary ml-2">Submit</button>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </div>
                                                </div>
                                            </div> */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            {/* Modal */}

            <div class="modal fade bd-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-lg">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLongTitle">Modal title</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-content">
                        <form className="">
                            <div className='formBackground'>
                                <div class="row">
                                    <div class="col-12 col-md-4 mx-5 pt-3">
                                        <lable> Package Name </lable>
                                        <input type="text" class="form-control mt-2" placeholder="Enter package Name" />
                                    </div>
                                    <div class="col-12 col-md-4 mx-5 pt-3">
                                        <lable> Package Route </lable>
                                        <input type="text" class="form-control mt-2" placeholder="Enter route Name" />
                                    </div>
                                    <div class="col-12 col-md-4 mx-5 pt-3">
                                        <lable> Total Night  </lable>
                                        <input type="text" class="form-control mt-2" placeholder="Enter total nights" />
                                    </div>
                                    <div class="col-12 col-md-4 mx-5 pt-3">
                                        <lable> Total Days  </lable>
                                        <input type="text" class="form-control mt-2" placeholder="Enter total days" />
                                    </div>
                                    <div class="col-12 col-md-4 mx-5 pt-3">
                                        <lable> Enter Starting price  </lable>
                                        <input type="text" class="form-control mt-2" placeholder="Enter starting price" />
                                    </div>
                                    <div class="col-12 col-md-4 mx-5 pt-3">
                                        <lable> Select package image  </lable>
                                        <input type="file" class="form-control mt-2" placeholder="Enter starting price" />
                                    </div>
                                    <div class="col-12 col-md-9 mx-5 pt-3">
                                        <lable> Enter Overview </lable>
                                        <textarea class="form-control mt-2" placeholder="Enter package Overview" />
                                    </div>
                                    <div class="col-12 col-md-9 mx-5 pt-3">
                                        <lable> Package highlights </lable>
                                        <JoditEditor
                                            className='mt-2'
                                            ref={editor}
                                            value={content}
                                            onChange={newContent => setContent(newContent)}
                                        />
                                    </div>
                                    <div class="col-12 col-md-9 mx-5 pt-3">
                                        <lable> Route Details </lable>
                                        <JoditEditor
                                            className='mt-2'
                                            ref={editor2}
                                            value={content2}
                                            onChange={newContent => setContent2(newContent)}
                                        />
                                    </div>
                                </div>
                                <div className='AddAdminBtnPArent'>
                                    <button type="button" className="btn btn-primary addcatenbtn">Add</button>
                                </div>
                            </div>

                        </form>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary">Save changes</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ViewPackages