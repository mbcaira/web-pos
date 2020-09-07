import React from 'react';
import { Link } from 'react-router-dom'

import "../styles/navbar.css"

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light navbar-custom shadow header">
            <Link to="/" className="navbar-brand">WebPOS</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link to="/terminal" className="nav-link">Terminal</Link>
                    </li>
                    <li className="nav-item dropdown">
                        <Link to="/inventory" className="nav-link dropdown-toggle" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Inventory
                        </Link>
                        <div className="dropdown-menu shadow" aria-labelledby="navbarDropdownMenuLink">
                            <Link to="/inventory" className="dropdown-item">View inventory</Link>
                            <Link to="/inventory/add" className="dropdown-item">Add inventory</Link>
                            <Link to="/inventory/edit" className="dropdown-item">Edit inventory</Link>
                        </div>
                    </li>
                </ul>
            </div>
            <button className="btn btn-lg btn-outline-danger my-2" type="submit">Logout</button>
        </nav>  
    );
}

export default Navbar;