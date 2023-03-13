import React from 'react';
import { NavLink } from 'react-router-dom';
import '../CSS/Navbar.css';

const Navbar = () => {
    return (
        <>
            <div className='topNav'>
                <div className='container navParent'>
                    <div className='navItem1 py-1'> <i class="fa-solid fa-phone"></i> +9876543210 </div>
                    <div className='navItem2 py-1'> 
                    <NavLink to='' className='navLoginBtn mr-3'> Login </NavLink>
                    <NavLink to='' className='navReginBtn'> Register </NavLink>
                    </div>
                </div>
            </div>
        </>
    )
}


export default Navbar;