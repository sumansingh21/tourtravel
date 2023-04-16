import React from 'react';
import { NavLink } from 'react-router-dom';
import '../CSS/Menu.css';

window.onload = function(){

const temp = document.querySelector(".hamburger");
temp.onclick = function () {
    const temp2 = document.querySelector(".menu-list");
    temp2.classList.toggle("active");
}
};



const Menu = () => {
    return (
        <>
          

            {/* <div className='parent'>
                <div className='logo'>
                    <NavLink to="" className="Logoposition"><img src="logo192.png" alt='logo'></img><span className="Logotext">Logo</span></NavLink>
                </div>

                <div className='toggle'>

                </div>

                <div className='menu'>
                  <nav>
                    <ul>
                        <li><NavLink to='' className='nav'>Home</NavLink></li>
                        <li><NavLink to='' className='nav'>About</NavLink></li>
                        <li><NavLink to='' className='nav'>Services</NavLink></li>
                        <li><NavLink to='' className='nav'>Blog</NavLink></li>
                    </ul>
                  </nav>
                </div>
            </div> */}


            <div class="menu-master">
                <div class="logoSection">
                    <div class=""> <img src="TRAVELBUDDY1ee.png" alt="Logo" class="logo"></img> </div>
                    <div class="logoName"> Travel Buddy </div>
                </div>

                <div class="hamburger">
                    <div class="line"></div>
                    <div class="line"></div>
                    <div class="line"></div>
                </div>
                <div id="menuOptions"> 
                <nav class="menu-list">
                    <ul>
                        <li><NavLink to='/' className='menuItem'> Home </NavLink>  </li>
                        <li><NavLink to='/Packages' className='menuItem'> Packages </NavLink>
                        <div class="d-menu">
                        <ul>
                            <li className=""><NavLink to='/' className=''>Summer</NavLink></li>
                            <li className=""><NavLink to='/' className=''>Winter</NavLink></li>
                            <li className=""><NavLink to='/' className=''>Monsoon</NavLink></li>
                            <li className=""><NavLink to='/' className=''>Indian </NavLink>
                                <div className="ds-menu">
                                    <ul>
                                        <li><NavLink to='/' className=''>Delhi</NavLink></li>
                                        <li><NavLink to='/' className=''>Delhi</NavLink></li>
                                        <li><NavLink to='/' className=''>Delhi</NavLink></li>
                                    </ul>
                                </div>
                            </li>
                            <li class=""><NavLink to='/' className=''>International</NavLink></li>
                          </ul>
                    </div>
                        </li>
                        <li><NavLink to='/Blog' className='menuItem'> Blog </NavLink>   </li>
                        <li><NavLink to='/aboutUS' className='menuItem'> About Us  </NavLink>   </li>
                        <li><NavLink to='/ContactUs' className='menuItem'> Contact Us </NavLink></li>
                    </ul>
                </nav>
                </div>
               
            </div>
        </>

    )
}

export default Menu;