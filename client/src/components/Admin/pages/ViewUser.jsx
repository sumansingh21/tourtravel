import React from "react";
import './css/ViewUser.css';
import Sidebar from "../Sidebar";
import '../css/Body.css';
import '../css/TopHeader.css';
import { NavLink } from "react-router-dom";
import '/node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min.js';
import "datatables.net-dt/js/dataTables.dataTables"
import "datatables.net-dt/css/jquery.dataTables.min.css"
import $ from 'jquery'; 
 
//For API Requests
//import axios from 'axios';
// import DataTable from 'datatables.net';
// import 'datatables.net-plugins/api/sum().mjs';

// import { useState } from "react";

const ViewUser = () => {
    // const defaultValue = {
    //     drname: '',
    //     drnum: '',
    //     mail: ''
    // }

    // const [user, setUser] = useState(defaultValue);

    // const onValueChange = (e) => {
    //     setUser({ ...user, [e.target.name]: e.target.value });
    //     console.log(user);
    // }
    
    // const table = new DataTable('#myTable');

    //initialize datatable
    $(document).ready(function () {
        setTimeout(function(){
        $('#myUserTable').DataTable();
         } ,1000);
    });

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
                                            <span><i class="fas fa-tachometer-alt pr-1" style={{ color: '#fff' }}></i> <span>Dashboard</span> <span className="float-right"><NavLink to='/' className='doctor-nav'>Home</NavLink> <span>/ <span>Add Doctor</span></span></span></span>
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
                                                <h4 className="text-center pt-2">User Details</h4><hr></hr>

                                                {/* <div className="row form-area">
                                                    <div className="col-12 col-md-4">
                                                        <table className="table">
                                                            <tr>
                                                                <td>Name <span style={{color:'red'}}>*</span></td>
                                                            </tr>
                                                            <tr>
                                                                <td><input type='text' name="drname" className="form-control" placeholder="Enter Your Name" onChange={(e)=>onValueChange(e)}></input></td>
                                                            </tr>
                                                        </table>
                                                    </div>
                                                    <div className="col-12 col-md-4">
                                                        <table className="table">
                                                            <tr>
                                                                <td>Mobile Number <span style={{color:'red'}}>*</span></td>
                                                            </tr>
                                                            <tr>
                                                                <td><input type='text' name="drnum" className="form-control" placeholder="Enter Mobile Number" onChange={(e)=>onValueChange(e)}></input></td>
                                                            </tr>
                                                        </table>
                                                    </div>
                                                    <div className="col-12 col-md-3">
                                                        <table className="table">
                                                            <tr>
                                                                <td>Email Id <span style={{color:'red'}}>*</span></td>
                                                            </tr>
                                                            <tr>
                                                                <td><input type='email' name="mail" className="form-control" placeholder="Enter Your Email Id" onChange={(e)=>onValueChange(e)}></input></td>
                                                            </tr>
                                                        </table>
                                                    </div>
                                                </div> */}

                                                <table class="table table-striped" id="myUserTable">
                                                    <thead>
                                                        <tr>
                                                            <th scope="col">Id</th>
                                                            <th scope="col">Full Name</th>
                                                            <th scope="col">Email</th>
                                                            <th scope="col">Username</th>
                                                            <th scope="col">User Type</th>
                                                            <th scope="col">Action</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <th scope="row">1</th>
                                                            <td>Mark</td>
                                                            <td>Otto</td>
                                                            <td>@mdo</td>
                                                            <td>@mdo</td>
                                                            <td>
                                                            {/* <button type="button" class="btn btn-primary deleteUSer mr-2">Edit</button> */}
                                                            <button type="button" class="btn btn-primary deleteUSer">Delete</button>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">2</th>
                                                            <td>Jacob</td>
                                                            <td>Thornton</td>
                                                            <td>@fat</td>
                                                            <td>@mdo</td>
                                                            <td>
                                                            {/* <button type="button" class="btn btn-primary deleteUSer mr-2">Edit</button> */}
                                                            <button type="button" class="btn btn-primary deleteUSer">Delete</button>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">3</th>
                                                            <td>Larry</td>
                                                            <td>the Bird</td>
                                                            <td>@twitter</td>
                                                            <td>@mdo</td>
                                                            <td>
                                                            {/* <button type="button" class="btn btn-primary deleteUSer mr-2">Edit</button> */}
                                                            <button type="button" class="btn btn-primary deleteUSer">Delete</button>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">4</th>
                                                            <td>Larry</td>
                                                            <td>the Bird</td>
                                                            <td>@twitter</td>
                                                            <td>@mdo</td>
                                                            <td>
                                                            {/* <button type="button" class="btn btn-primary deleteUSer mr-2">Edit</button> */}
                                                            <button type="button" class="btn btn-primary deleteUSer">Delete</button>
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
        </>
    )
}

export default ViewUser