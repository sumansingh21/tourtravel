import React from "react";
import './css/TopHeader.css';
import Sidebar from "./Sidebar";
import './css/Body.css';
import Body from "./Body";

const Main = () => {
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

                                    <div className="col-12 col-md-4">
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
                                    <div className="col-12 col-md-2 col-lg-2">
                                        <div className="haeder-right-sec-icon">
                                            <i className="far fa-user"></i>
                                            <i className="far fa-bell"></i>
                                            <i className="far fa-envelope"></i>
                                        </div>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-12 col-md-3 col-lg-3">
                                        <div className="card1">
                                            <div className="card1-left">
                                                <div className="card1-title">
                                                    Total User
                                                </div>
                                                <div className="card1-num">
                                                    100
                                                </div>
                                                
                                            </div>

                                            <div className="card1-right">
                                                <i class="fas fa-user"></i>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-12 col-md-3 col-lg-3">
                                        <div className="card1">
                                            <div className="card1-left">
                                                <div className="card1-title">
                                                    Total Visitor
                                                </div>
                                                <div className="card1-num">
                                                    200
                                                </div>
                                                
                                            </div>

                                            <div className="card1-right">
                                                <i class="fas fa-users" style={{ background: 'linear-gradient(90deg, rgba(36,2,117,0.9809173669467787) 24%, rgba(65,26,184,1) 48%, rgba(18,92,236,0.9837184873949579) 66%)' }}></i>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-12 col-md-3 col-lg-3">
                                        <div className="card1">
                                            <div className="card1-left">
                                                <div className="card1-title">
                                                    Total CallBack
                                                </div>
                                                <div className="card1-num">
                                                    5000
                                                </div>
                                                
                                            </div>

                                            <div className="card1-right">
                                                <i class="fas fa-phone" style={{ background: 'linear-gradient(90deg, rgba(58,117,2,0.9809173669467787) 22%, rgba(26,184,47,1) 53%, rgba(18,236,105,0.9837184873949579) 82%)' }}></i>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-12 col-md-3 col-lg-3">
                                        <div className="card1">
                                            <div className="card1-left">
                                                <div className="card1-title">
                                                    Total Purches
                                                </div>
                                                <div className="card1-num">
                                                    100
                                                </div>
                                                
                                            </div>

                                            <div className="card1-right">
                                                <i class="fas fa-money-bill" style={{ background: 'linear-gradient(90deg, rgba(117,2,53,0.9809173669467787) 6%, rgba(184,55,26,1) 29%, rgba(236,18,173,0.9837184873949579) 82%)' }}></i>
                                            </div>
                                        </div>
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
                        <div className="body">
                            <Body />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Main