import React from 'react';
import logo from '../../images/Logo.svg'
import './Navbar.css'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



const Navbar = () => {
    return (
        <nav className='navbar'>
            <img src={logo} alt="" />
            <div className='cart'>
                {/* <span>{cart.length}</span> */}
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </div>
        </nav>
    );
};


export default Navbar;