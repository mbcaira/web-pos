import React from 'react';

import InventoryList from "./InventoryList";
import Terminal from "./Terminal";

function Home(){
    return (
        <div className="container-fluid">
            <div className="home-container">
                <div className="row">
                    <div className="col">
                        <InventoryList/>
                    </div>
                    <div className="col sticky-top">
                        <Terminal/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;