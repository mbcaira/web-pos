import React, { useState } from 'react';
import "../styles/terminal.css"

function Terminal(props) {
    const [receipt, setReceipt] = useState([]);

    return (
        <div className="container-fluid">
            <div className="terminal-container shadow">
                <div className="heading">Terminal</div>
            </div>
        </div>
    );
}
export default Terminal;