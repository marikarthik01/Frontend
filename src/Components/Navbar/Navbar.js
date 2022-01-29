import React from 'react';
import Home from '../Home/Home';
import Products from '../Products/Products';
import {Link} from 'react-router-dom';

function Navbar() {
    return (<div>
        <nav className="navbar navbar-expand-lg navbar-light bg-white py-3 shadow-sm">
            <div className="container">
                <Link className="navbar-brand fw-bold fs-4" to="/">HEALTHCARE</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="#">Products</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="#">Consulation</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="news">News</Link>
                        </li>
                        
                    </ul>
                    <div className="buttons">
                        <Link to="/login" className="btn btn-outline-dark">
                           <i className="fa fa-sign-in me-1"></i> Login</Link>
                        <Link to="/register" className="btn btn-outline-dark ms-2">
                           <i className="fa fa-user-plus me-1 "></i> Register</Link> 
                              
                    </div>
                </div>
            </div>
        </nav>
        <Home />
        <br />
        <Products />
    </div>);
}

export default Navbar;
