import React from 'react';
import { Link } from 'react-router-dom';
import './style.css'; // Ensure you have a CSS file for styling

const Navbar = () => {
    return (
        <nav className="navbar">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link to="/" className="nav-link">Home</Link>
                </li>
                <li className="nav-item">
                    <Link to="/products" className="nav-link">Products</Link>
                </li>
                <li className="nav-item">
                    <Link to="/cart" className="nav-link">Cart</Link>
                </li>
                <li className="nav-item">
                    <Link to="/checkout" className="nav-link">Checkout</Link>
                </li>
                <li className="nav-item">
                    <Link to="/signup" className="nav-link">Sign Up</Link>
                </li>
                <li className="nav-item">
                    <Link to="/signin" className="nav-link">Sign In</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
