import React from 'react'
import "./Navbar.css"
import logo from "../images/enroll.png"
import {Link} from "react-router-dom"

function Navbar() {

  return (
    <div>
        <nav className="navbar navbar-expand-lg bg-white bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">Enrolme Education</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav link-color ms-auto mb-2 mb-lg-0">
                        <li className="nav-item" >
                            <Link className="nav-link" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/institution">Institutions</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/ielts">IELTS</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/signup">Signup</Link>
                        </li>
                        {/* <li className="nav-item">
                            <Link className="nav-link" to="/signin">Signin</Link>
                        </li> */}
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">About Us</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/contactus">Contact Us</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
  )
}

export default Navbar