import React from 'react';

import "../styles/index.css"
import "../styles/home.css"

function SaleTerminal(props) {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-4 d-flex justify-content-center screen shadow">
                    <h3>Inventory</h3>
                    <div className="stock-list">

                    </div>
                </div>
                <div className="col-6 screen shadow">
                    <h3>Terminal</h3>
                    <div className="terminal-screen"></div>
                </div>
            </div>
        </div>
    );
}

export default SaleTerminal;