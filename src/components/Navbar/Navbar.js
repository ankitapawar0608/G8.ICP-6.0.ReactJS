import React from 'react'
import { Link } from "react-router-dom"
import "./Navbar.css";
import logoimg  from "./Learning-removebg-preview.png";

function Navbar() {
    return (
        <>

            <nav className="navbar navbar-expand-lg navbar-light navbar-color">
                <div className="container-fluid">
                    <Link className="navbar-brand m-2" >
                         <img src={logoimg} alt="Logo" className='logo'/> 
                         <span className='text-light fw-bold fs-2 '> CogNexLearn </span>
                    </Link>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link to="/" className="nav-link text-light fw-semibold m-2">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/allcourses' className="nav-link text-light fw-semibold m-2">All courses</Link>
                            </li> <li className="nav-item">
                                <Link to='/buycourses' className="nav-link text-light fw-semibold m-2" >Buy Courses</Link>
                            </li>

                            <li className="nav-item">
                                <Link to='/about' className="nav-link text-light fw-semibold m-2" >About</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/contact" class="nav-link text-light fw-semibold m-2">Contact Us</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/login' className="nav-link text-light btn btn-outline-primary fw-semibold m-2">
                                    Login
                                    {/* <button type="button" class="btn btn-outline-primary">Login</button> */}
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

        </>
    )
}

export default Navbar