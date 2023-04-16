import React from "react";
import { NavLink } from "react-router-dom";
import './css/Sidebar.css';

const Sidebar = () => {

    const ShowMenu = () => {
        if (document.getElementById('submenu').style.display === 'block') {
            document.getElementById('submenu').style.display = 'none';
            document.getElementById('drop').className = 'fas fa-angle-right';
        } else {
            document.getElementById('submenu').style.display = 'block';
            document.getElementById('drop').className = 'fas fa-angle-down';
            document.getElementById('submenu1').style.display = 'none';
            document.getElementById('drop1').className = 'fas fa-angle-right';
        }
    }

    const ShowMenu1 = () => {
        if (document.getElementById('submenu1').style.display === 'block') {
            document.getElementById('submenu1').style.display = 'none';
            document.getElementById('drop1').className = 'fas fa-angle-right';
        } else {
            document.getElementById('submenu1').style.display = 'block';
            document.getElementById('drop1').className = 'fas fa-angle-down';
            document.getElementById('submenu').style.display = 'none';
            document.getElementById('drop').className = 'fas fa-angle-right';
        }
    }

    const ShowMenu2 = () => {
        if (document.getElementById('submenu2').style.display === 'block') {
            document.getElementById('submenu2').style.display = 'none';
            document.getElementById('drop2').className = 'fas fa-angle-right';
        } else {
            document.getElementById('submenu2').style.display = 'block';
            document.getElementById('drop2').className = 'fas fa-angle-down';
            document.getElementById('submenu').style.display = 'none';
            document.getElementById('drop').className = 'fas fa-angle-right';
        }
    }
  

    const ShowMenu3 = () => {
        if (document.getElementById('submenu3').style.display === 'block') {
            document.getElementById('submenu3').style.display = 'none';
            document.getElementById('drop3').className = 'fas fa-angle-right';
        } else {
            document.getElementById('submenu3').style.display = 'block';
            document.getElementById('drop3').className = 'fas fa-angle-down';
            document.getElementById('submenu').style.display = 'none';
            document.getElementById('drop').className = 'fas fa-angle-right';
        }
    }


    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12 p-0 m-0 whole-sidebar">
                        <div className="sidebar">
                            <div className="sidebar-top">
                                <img src="../logo192.png" alt="logo" height='30px' width="30px"></img>
                                <span className="pl-2">Travel Buddy</span><hr></hr>
                            </div>

                            <div id="sidebar-bottom">
                                <nav>
                                    <NavLink to='/' className='nav mt-3' id="active"><i class="fas fa-tachometer-alt" style={{ color: '#3A1078' }}></i> Dashboard</NavLink>
                                    <NavLink to='' onClick={ShowMenu} className='nav'><i class="fas fa-user" style={{ color: '#EB455F' }}></i> User <i id="drop" className="fas fa-angle-right"></i></NavLink>
                                    <div id="submenu">
                                        <NavLink to='/pages/ViewUser' className='nav1'><i class="far fa-circle"></i> View User</NavLink>
                                        <NavLink to='/pages/AddAdmin' className='nav1'><i class="far fa-circle"></i>Add Admin</NavLink>
                                    </div>

                                    <NavLink to='' onClick={ShowMenu1} className='nav'><i class="fas fa-th-large" style={{ color: '#FFB84C' }}></i> Package Category <i id="drop1" className="fas fa-angle-right"></i></NavLink>
                                    <div id="submenu1">
                                        <NavLink to='/pages/AddCategory' className='nav1'><i class="far fa-circle"></i> Add Category</NavLink>
                                        <NavLink to='/pages/ViewCategory' className='nav1'><i class="far fa-circle"></i> View Category</NavLink>
                                    </div>

                                    <NavLink to='' onClick={ShowMenu2} className='nav'><i class="fas fa-th" style={{ color: '#362FD9' }}></i> Subcategory <i id="drop2" className="fas fa-angle-right"></i></NavLink>
                                    <div id="submenu2">
                                        <NavLink to='/pages/AddSubCategory' className='nav1'><i class="far fa-circle"></i> Add SubCategory</NavLink>
                                        <NavLink to='/pages/ViewSubCategory' className='nav1'><i class="far fa-circle"></i> View SubCategory</NavLink>
                                    </div>

                                    <NavLink to='' onClick={ShowMenu3} className='nav'><i class="fas fa-ticket-alt" style={{ color: '#8BF5FA' }}></i> Packages <i id="drop3" className="fas fa-angle-right"></i></NavLink>
                                    <div id="submenu3">
                                        <NavLink to='/pages/AddPackage' className='nav1'><i class="far fa-circle"></i> Add Package</NavLink>
                                        <NavLink to='/pages/ViewPackages' className='nav1'><i class="far fa-circle"></i> View Packages</NavLink>
                                    </div>

                                    <NavLink to='' className='nav'><i class="fas fa-kiss-wink-heart" style={{ color: '#D61355' }}></i> Blogs</NavLink>
                                    <NavLink to='' className='nav'><i class="fas fa-address-card" style={{ color: '#FCE22A', fontSize: '12px' }}></i> About Us <i id="drop4" className="fas fa-angle-right"></i></NavLink>
                                    <NavLink to='' className='nav'><i class="fas fa-phone" style={{ color: '#820000' }}></i> Contact Us <i id="drop5" className="fas fa-angle-right"></i></NavLink>
                                    <NavLink to='' className='nav'><i class="fas fa-photo-video" style={{ color: '#A75D5D' }}></i> Banners <i id="drop6" className="fas fa-angle-right"></i></NavLink>
                                    <NavLink to='' className='nav'><i class="fas fa-user-check" style={{ color: '#A31ACB' }}></i> Testimonials <i id="drop7" className="fas fa-angle-right"></i></NavLink>
                                    <NavLink to='' className='nav'><i class="fab fa-bitbucket" style={{ color: '#A31ACB' }}></i> Miscellaneous <i id="drop7" className="fas fa-angle-right"></i></NavLink>

                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Sidebar