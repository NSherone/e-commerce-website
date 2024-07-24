import React, { useContext, useRef, useState } from 'react';
import './Navbar.css';

import logo from '../Assets/logo.png';
import cart_icon from '../Assets/cart_icon.png';
import { Link } from 'react-router-dom';
import { ShopContext } from '../../Context/ShopContext';
import nav_dropdown from '../Assets/nav_dropdown.png';

const Navbar = () => {
    const [menu, setMenu] = useState("shop");
    const { getTotalCartItems } = useContext(ShopContext);
    const menuRef = useRef();

    const dropdownToggle = (e) => {
        menuRef.current.classList.toggle('nav-menu-visible');
        e.target.classList.toggle('open');
    }

    const handleLogout = () => {
        localStorage.removeItem('auth-token');
        window.location.replace('/');
    }

    return (
        <div className='navbar'>
            <div className='nav-logo'>
                <img src={logo} alt="Artisian Fusion Logo" />
                <p>Artisian Fusion</p>
            </div>
            <img 
                className='nav-dropdown' 
                onClick={dropdownToggle} 
                src={nav_dropdown} 
                alt="Dropdown menu toggle" 
            />
            <ul ref={menuRef} className='nav-menu'>
                <li onClick={() => setMenu("shop")}>
                    <Link style={{ textDecoration: 'none' }} to='/'>Shop</Link>
                    {menu === "shop" ? <hr /> : null}
                </li>
                <li onClick={() => setMenu("gifts")}>
                    <Link style={{ textDecoration: 'none' }} to='/gifts'>Personalized Gifts</Link>
                    {menu === "gifts" ? <hr /> : null}
                </li>
                <li onClick={() => setMenu("pastries")}>
                    <Link style={{ textDecoration: 'none' }} to='/pastries'>Home Baking Pastry Items</Link>
                    {menu === "pastries" ? <hr /> : null}
                </li>
                <li onClick={() => setMenu("items")}>
                    <Link style={{ textDecoration: 'none' }} to='/items'>Decoration Items</Link>
                    {menu === "items" ? <hr /> : null}
                </li>
                <li onClick={() => setMenu("events")}>
                    <Link style={{ textDecoration: 'none' }} to='/events'>Event Management</Link>
                    {menu === "events" ? <hr /> : null}
                </li>
            </ul>
            <div className='nav-login-cart'>
                {localStorage.getItem('auth-token') ? (
                    <button onClick={handleLogout}>Logout</button>
                ) : (
                    <Link style={{ textDecoration: 'none' }} to='/login'>
                        <button>Login</button>
                    </Link>
                )}
                <Link style={{ textDecoration: 'none' }} to='/cart'>
                    <img src={cart_icon} alt="Cart Icon" />
                </Link>
                <div className='nav-cart-count'>{getTotalCartItems()}</div>
            </div>
        </div>
    );
}

export default Navbar;
