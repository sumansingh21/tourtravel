import React from 'react';
import './css/AddPackage.css';
import Sidebar from '../Sidebar';
import { NavLink } from 'react-router-dom';
import JoditEditor from 'jodit-react';
import { useRef } from 'react';
import { useState } from 'react';

const AddPackage = () => {
    const editor = useRef(null)
    const [content, setContent] = useState('')

    const editor2 = useRef(null)
    const [content2, setContent2] = useState('')
    return (<>
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
                                        <span><i class="fas fa-tachometer-alt pr-1" style={{ color: '#fff' }}></i> <span>Dashboard</span> <span className="float-right"><NavLink to='/' className='doctor-nav'>Home</NavLink> <span>/ <span>Add Package</span></span></span></span>
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

                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-12">
                                    <div className="dr-form">
                                        <h4 className="text-center pt-2">Add Package</h4><hr></hr>

                                        <div className="row form-area container">
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
                                            {/* <div className="col-12 col-md-4">
                                                        <table className="table">
                                                            <tr>
                                                                <td>Name <span style={{color:'red'}}>*</span></td>
                                                            </tr>
                                                            <tr>
                                                                <td><input type='text' name="drname" className="form-control" placeholder="Enter Your Name"></input></td>
                                                            </tr>
                                                        </table>
                                                    </div>
                                                    <div className="col-12 col-md-4">
                                                        <table className="table">
                                                            <tr>
                                                                <td>Mobile Number <span style={{color:'red'}}>*</span></td>
                                                            </tr>
                                                            <tr>
                                                                <td><input type='text' name="drnum" className="form-control" placeholder="Enter Mobile Number"></input></td>
                                                            </tr>
                                                        </table>
                                                    </div>
                                                    <div className="col-12 col-md-3">
                                                        <table className="table">
                                                            <tr>
                                                                <td>Email Id <span style={{color:'red'}}>*</span></td>
                                                            </tr>
                                                            <tr>
                                                                <td><input type='email' name="mail" className="form-control" placeholder="Enter Your Email Id"></input></td>
                                                            </tr>
                                                        </table>
                                                    </div> */}
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>)
}

export default AddPackage