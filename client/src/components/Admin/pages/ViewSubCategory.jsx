import React from 'react';
import './css/ViewSubCategory.css';
import { NavLink } from 'react-router-dom';
import Sidebar from '../Sidebar';
import '/node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min.js';
import "datatables.net-dt/js/dataTables.dataTables"
import "datatables.net-dt/css/jquery.dataTables.min.css"
import $ from 'jquery'; 


const ViewSubCategory = () =>{
    $(document).ready(function () {
        setTimeout(function(){
        $('#mySubCategoryTable').DataTable();
         } ,1000);
    });
    return(<>
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
                                                <h4 className="text-center pt-2">Category Details</h4><hr></hr>

                                                <table class="table table-striped" id="mySubCategoryTable">
                                                    <thead>
                                                        <tr>
                                                            <th className='text-center' scope="col">Id</th>
                                                            <th className='text-center' scope="col">Category Name</th>
                                                            <th className='text-center' scope="col">Sub Category Name</th>
                                                            <th className='text-center' scope="col">Image</th>
                                                            <th className='text-center' scope="col">Action</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody className='text-center'>
                                                        <tr>
                                                            <th scope="row">1</th>
                                                            <td>Cat1</td>
                                                            <td>Sub Cat1</td>
                                                            <td><img src="/img1.jpg" alt="Image1" className="ViewCatImg"/> </td>
                                                            <td>
                                                            {/* <button type="button" class="btn btn-primary deleteUSer mr-2">Edit</button> */}
                                                            <button type="button" class="btn btn-danger deleteUSer">Delete</button>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">2</th>
                                                            <td>Cat1</td>
                                                            <td>Sub Cat2</td>
                                                            <td><img src="/img1.jpg" alt="Image1" className="ViewCatImg"/> </td>
                                                            <td>
                                                            {/* <button type="button" class="btn btn-primary deleteUSer mr-2">Edit</button> */}
                                                            <button type="button" class="btn btn-danger deleteUSer">Delete</button>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">3</th>
                                                            <td>Cat1</td>
                                                            <td>Sub Cat3</td>
                                                            <td><img src="/img1.jpg" alt="Image1" className="ViewCatImg"/> </td>
                                                            <td>
                                                            {/* <button type="button" class="btn btn-primary deleteUSer mr-2">Edit</button> */}
                                                            <button type="button" class="btn btn-danger deleteUSer">Delete</button>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">4</th>
                                                            <td>Cat1</td>
                                                            <td>Sub Cat1</td>
                                                            <td><img src="/img1.jpg" alt="Image1" className="ViewCatImg"/> </td>
                                                            <td>
                                                            {/* <button type="button" class="btn btn-primary deleteUSer mr-2">Edit</button> */}
                                                            <button type="button" class="btn btn-danger deleteUSer">Delete</button>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
    </>)
}

export default ViewSubCategory