import React from 'react';

import Terminal from './Terminal';
import Inventory from './Inventory';

import "../styles/home.css"

function Home(props) {
    return (
        <div> 
            <Inventory className="inventory"/>      
            <Terminal className="terminal"/>   
        </div>
    );
}

export default Home;