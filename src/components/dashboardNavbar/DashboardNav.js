import React from 'react'
import "./DashboardNav.css"
import {Link} from "react-router-dom"

function DashboardNav() {

    function handleLogout(){
        localStorage.removeItem('token');
        window.location.reload(true);
    }

  return (
    <div>
        <nav className="navbar navbar-expand-lg bg-white bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand" href="/dashboard">Enrolme Dashboard</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav link-color ms-auto mb-2 mb-lg-0">
                        <li className="nav-item" >
                            <Link className="nav-link" aria-current="page" to="/dashreading">Reading</Link>
                        </li>
                        <li className="nav-item" >
                            <Link className="nav-link" aria-current="page" to="/dashlistening">Listening</Link>
                        </li>
                        <li className="nav-item" >
                            <Link className="nav-link" aria-current="page" to="/dashspeaking">Speaking</Link>
                        </li>
                        <li className="nav-item" >
                            <Link className="nav-link" aria-current="page" to="/dashwriting">Writing</Link>
                        </li>
                        <li className="nav-item" >
                            <button className='create-btn' style={{marginLeft:"14rem"}} onClick={handleLogout}>Log Out</button>
                            {/* <Link className="nav-link" aria-current="page" to="/">Log out</Link> */}
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
  )
}

export default DashboardNav