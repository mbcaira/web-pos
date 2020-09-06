import React from 'react';

import "../styles/inventory-list.css"

function InventoryList(props) {
    return (
        <div className="container-fluid">
            <div className="inventory-list-container">
                <div className="heading">Inventory</div>
                    <br/>
                    <div className="row">
                        <div className="col">
                        Item Number
                        </div>
                        <div className="col">
                        Item Name
                        </div>
                        <div className="col">
                        Description
                        </div>
                        <div className="col">
                        Stock
                        </div>
                        <div className="col">
                        Price
                    </div>
                </div>
            </div>
        </div>
    );
}

export default InventoryList;