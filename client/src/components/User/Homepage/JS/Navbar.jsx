import React from 'react';
import { NavLink } from 'react-router-dom';
import '../CSS/Navbar.css';

const Navbar = () => {
    return (
        <>
            <div className='topNav'>
                <div className='container navParent'>
                    <div className='navItem1 py-1'> <i className="fa-solid fa-phone"></i> +9876543210 </div>
                    <div className='navItem2 py-1'>
                        <NavLink to='' className='navLoginBtn mr-3' data-toggle="modal" data-target="#userLoginModal"> Login </NavLink>
                        <NavLink to='' className='navReginBtn' data-toggle="modal" data-target="#userRegModal"> Register </NavLink>
                    </div>
                </div>


                <div className="modal fade" id="userLoginModal" tabindex="-1" aria-labelledby="userLoginModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <form>
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title font-weight-bold" id="exampleModalLabel">User Login</h5>
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div className="modal-body">

                                    <div className="background">
                                        <div className="box">
                                            <div className="container LogInContainer">
                                                <div className="top-header">
                                                    {/* <span1> Have an account?</span1> */}
                                                    {/* <header>Login</header> */}
                                                </div>

                                                <div className="LogIn-field">
                                                    <i className="fa-solid fa-user Icon1"></i>
                                                    <input type="text" className="LInput" placeholder="Username" />
                                                </div>
                                                <div className="LogIn-field">
                                                    <i className="fa-solid fa-lock Icon1"></i>
                                                    <input type="password" className="LInput" placeholder="Password" />
                                                </div>
                                                <div className="Register-submit">
                                                    <button type="submit" class="button Rbutton">Login</button>
                                                </div>


                                                {/* ------------------------------------------------------------- */}

                                                <div className="LBottom">
                                                    <div >
                                                        <NavLink to="" className="BRight text-center" > Forget password ? </NavLink>
                                                    </div>
                                                </div>
                                                {/* <div className="Buttom-header">
                                                    <span2>Or</span2>
                                                </div>
                                                <div className="Register-field">
                                                    <input type="submit" className="LSubmit" value="Register" />
                                                </div> */}
                                            </div>
                                        </div>
                                    </div>


                                </div>
                                {/* <div className="modal-footer">
                                    <button type="btn" className="navLoginBtn">Submit</button>
                                </div> */}
                            </div>
                        </form>
                    </div>
                </div>

                <div className="modal fade" id="userRegModal" tabindex="-1" aria-labelledby="userRegModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <form>
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title font-weight-bold" id="exampleModalLabel">User Registration</h5>
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div className="modal-body">
                                    <div className="background">
                                        <div className='box'>


                                            <div className="">
                                                {/* <div className="RHeader">
                        <span>Registration Form</span>
                    </div> */}
                                                {/* <hr></hr> */}
                                                <div className="container LogInContainer">
                                                    <form>
                                                        <div class="form-group">
                                                            <input type="text" class=" Registration-Input-box" placeholder="Fullname" id="Username" />
                                                        </div>

                                                        <div class="form-group">
                                                            <input type="email" class=" Registration-Input-box" placeholder="Email" id="inputEmail4" />
                                                        </div>


                                                        <div class="form-group ">
                                                            <input type="text" class=" Registration-Input-box" placeholder='User Name' id="Username" />
                                                        </div>

                                                        <div class="form-group">
                                                            <input type="password" class=" Registration-Input-box" placeholder='Password' id="inputPassword4" />
                                                        </div>

                                                        <div class="form-group">
                                                            <input type="password" class=" Registration-Input-box" placeholder='Confirm Password' id="inputPassword4" />
                                                        </div>

                                                       
                                                        {/* <div class="form-group ">
                                <label for="inputAddress2">Address 2</label>
                                <input type="text" class="form-control Input-box" id="inputAddress2" placeholder="Apartment, studio, or floor" />
                            </div> */}
                                                        <div class="form-row ">
                                                            {/* <div class="form-group col-md-6">
                                    <label for="inputCity" className="RegistrationFrom-label">City</label>
                                    <input type="text" class="form-control Registration-Input-box" id="inputCity" />
                                </div>
                                <div class="form-group col-md-6 ">
                                    <label for="inputState" className="RegistrationFrom-label">State</label>
                                    <select id="inputState" class="form-control Registration-Input-box">
                                        <option className="RegistrationFrom-Option" selected>Select</option>
                                        <option>Andhra Pradesh</option>
                                        <option>Delhi</option>
                                        <option>Chennai</option>
                                        <option>Mumbai</option>
                                        <option>West Bengal</option>
                                    </select>
                                </div> */}
                                                            {/* <div class="form-group col-md-2 ">
                                    <label for="inputZip">Zip</label>
                                    <input type="text" class="form-control Input-box" id="inputZip" />
                                </div> */}
                                                        </div>
                                                        <div class="form-group ">
                                                            {/* <div class="form-check">
                                    <input class="form-check-input" type="checkbox" id="gridCheck" />
                                    <label class="form-check-label" for="gridCheck" className="RegistrationFrom-label">
                                        Check me out
                                    </label>
                                </div> */}
                                                        </div>
                                                        <div className="Register-submit">
                                                            <button type="submit" class="button Rbutton">Sign in</button>
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* <div className="modal-footer">
                                    <button type="btn" className="navLoginBtn">Submit</button>
                                </div> */}
                            </div>
                        </form>
                    </div>
                </div>


            </div>
        </>
    )
}


export default Navbar;