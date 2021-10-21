import React from 'react';
import './Header.css';
import logo from '../../images/e-commerce.png'
import { NavLink } from 'react-router-dom';

const Header = () => {
   const activeStyle = {
        color: "red"
      }
    return (
        <div>
            <img src={logo} alt="" />
            <div className='nav d-flex justify-content-center'>
                <NavLink  exact to='/shop' className='navItem' activeStyle={activeStyle}>Shop</NavLink>
                <NavLink exact to='/review' className='navItem' activeStyle={activeStyle}>Order Review</NavLink>
                <NavLink exact to='/inventory' className='navItem'  activeStyle={activeStyle}>Manage Inventory Here</NavLink>
            </div>
        </div>
    );
};

export default Header;