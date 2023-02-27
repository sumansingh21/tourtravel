import React from 'react';
import { NavLink } from 'react-router-dom';
import './CSS/Menu.css';

const Menu = () => {
    return (
        <>

            <div className='parent'>
                <div className='logo'>
                    <NavLink to="" className="Logoposition"><img src="logo192.png" alt='logo'></img><span class="Logotext">Logo</span></NavLink>
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
            </div>
        </>
    )
}

export default Menu;