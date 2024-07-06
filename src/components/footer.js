import React from 'react';
import { FaCcVisa, FaCcMastercard, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import { Link, Outlet } from 'react-router-dom';
import '../App.css';

const Footer = () => {
    return (
        <>
            <Outlet />
            <footer className="footer">
                <div className='footer-section'>
                    <h4>About</h4>
                    <div className='footer-links'>
                        <Link to='/aboutus'>About Us</Link>
                    </div>
                </div>
                <div className="footer-section">
                    <h4>Payment</h4>
                    <div className="payment-icons">
                        <FaCcVisa size="2em" />
                        <FaCcMastercard size="2em" />
                    </div>
                </div>
                <div className='footer-section'>
                    <h4>Contact</h4>
                    <div className='footer-links'>
                        <Link to='/contactus'>Contact Us</Link>
                    </div>
                </div>
                <div className='footer-section'>
                    <h4>Follow Us</h4>
                    <div className='social-icons'>
                        <a href="https://facebook.com"><FaFacebook size="2em" color="cyan" /></a>
                        <a href="https://twitter.com"><FaTwitter size="2em" color="cyan" /></a>
                        <a href="https://instagram.com"><FaInstagram size="2em" color="cyan" /></a>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;
