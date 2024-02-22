// Footer.js

import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-md-6 col-sm-12">
                        <h4>CogNexLearn</h4>
                        <p>We are India's Most Loved Coding Community. Join us! 
                        </p>
                    </div>
                    <div className=" col-lg-3 col-md-6 col-sm-12">
                        <h5>Helpful Links</h5>
                        <ul className="list-unstyled">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/allcourses">All Courses</Link></li>
                            <li><Link to="/buycourses">Buy Courses</Link></li>
                            <li><Link to="/about">About Us</Link></li>
                            <li><Link to="/contact">Contact Us</Link></li>
                            <li><Link to="/login">Login</Link></li>
                        </ul>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12">
                        <h5>Learn</h5>
                        <ul className="list-unstyled">
                            <li><Link to="/buycourses">Fullstack Development</Link></li>
                            <li><Link to="/buycourses">Java Programming</Link></li>
                            <li><Link to="/buycourses">C Programming</Link></li>
                            <li><Link to="/buycourses">C++ Programming</Link></li>
                        </ul>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12">
                        <p>Contact us</p>
                        <p><Link to="tel:+918830779433">+91-8888888888</Link></p>
                        <p><a href="mailto:ankitapawar0608@gmail.com">cognexlearn@gmail.com</a></p>
                    </div>
                </div>
                <div className="row ">
                   
                    <div className="col-md-12">
                     
                        <p className='text-center'>Copyright © CogNexLearn 2024</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
