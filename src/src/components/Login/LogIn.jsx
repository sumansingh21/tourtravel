import React from "react";
import "./LogIn.css";

const LogIn = () => {
    return (
        <>
            <div className="background">
                <div className="box">
                    <div className="container LogInContainer">
                        <div className="top-header">
                            <span1> Have an account?</span1>
                            <header>Log in</header>
                        </div>

                        <div className="LogIn-field">
                            <i class="fa-solid fa-user "></i>
                            <input type="text" className="LInput" placeholder="Username" />
                        </div>
                        <div className="LogIn-field">
                            <i class="fa-solid fa-lock"></i>
                            <input type="password" className="LInput" placeholder="Password" />
                        </div>
                        <div className="LogIn-field">
                            <input type="submit" className="LSubmit" value="LogIn" />
                        </div>

                        {/* ------------------------------------------------------------- */}

                        <div className="LBottom">

                            <div class="form-group ">
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" id="gridCheck" />
                                    <label class="form-check-label" for="gridCheck">
                                        Remember me
                                    </label>
                                </div>
                            </div>

                            {/* <div className="BLeft">
                                <input type="checkbox" id="check"></input>
                                <label for="check">Remember Me</label>
                            </div> */}
                            <div className="BRight">
                                {/* <label><a href="#">Forgot password ?</a></label> */}
                            </div>
                        </div>
                        <div className="Buttom-header">
                            <span2>Or</span2>
                        </div>
                        <div className="Register-field">
                            <input type="submit" className="LSubmit" value="Register" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LogIn;