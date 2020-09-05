import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/index.css'
import '../styles/navbar.css'

function Navbar(props) {
    return (
        <div className="header">
            <nav className="navbar navbar-expand-md navbar-light fixed-top bg-light shadow p-3 mb-5 bg-white rounded">
                <Link to="/" className="navbar-brand brand">WebPOS</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarsExampleDefault">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <Link to="/terminal" className="nav-link" href="#">Terminal <span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/inventory" className="nav-link" href="#">Inventory <span className="sr-only">(current)</span></Link>
                        </li>
                        {/* <li className="nav-item active">
                            <a className="nav-link" href="#">Customers <span className="sr-only">(current)</span></a>
                        </li> */}
                    </ul>
                    <Link to="/logout"><button type="button" className="btn btn-outline-danger btn-lg">Logout</button></Link>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;