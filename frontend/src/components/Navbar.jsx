import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/index.css'
import '../styles/navbar.css'

function Navbar(props) {
    return (
        <div className="header">
            <nav className="navbar navbar-expand-md navbar-light fixed-top bg-light">
                <a className="navbar-brand brand" href="#">WebPOS</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarsExampleDefault">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item dropdown nav-item active">
                            <a className="nav-link dropdown-toggle" href="http://example.com" id="dropdown01" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Inventory</a>
                            <div className="dropdown-menu" aria-labelledby="dropdown01">
                            <a className="dropdown-item" href="#">Action</a>
                            <a className="dropdown-item" href="#">Another action</a>
                            <a className="dropdown-item" href="#">Something else here</a>
                            </div>
                        </li>
                    </ul>
                    <button type="button" className="btn btn-outline-danger btn-lg">Logoff</button>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;