import React from 'react';
import { Link } from 'react-router-dom';

import "./styles/navbar.css";

function Navbar() {
    return (
        <div className="header shadow p-3">
            <div className="nav-header">
                <nav className="navbar navbar-expand-lg navbar-light navbar-custom">
                    <Link to="/" className="navbar-brand">WebPOS</Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link to="/terminal" className="nav-link">Terminal<span className="sr-only"></span></Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/inventory" className="nav-link">Inventory</Link>
                            </li>
                        </ul>
                    </div>
                    <button class="btn btn-outline-danger my-2 my-sm-0 float-right logout" type="submit">Logout</button>
                </nav>
            </div>
        </div>
    );
}

export default Navbar;