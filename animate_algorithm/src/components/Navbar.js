import './Navbar.css';
import React from 'react';

const Navbar = (props) => {
    const { title } = props;
    return(
        <div className='navbar'>
            <div>
                <h2 className='navItem'>{title}</h2>
            </div>
            <li>
                <a className='navItem' href="/about">About Us</a>
                <a className='navItem' href="/about">Contact Us</a>
            </li>
        </div>
    )
}

export default Navbar;