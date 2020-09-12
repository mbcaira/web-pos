import React, { useState } from 'react';
import Axios from 'axios';

import Item from './Item';
import SearchItem from './SearchInventory';

import "../styles/inventory-list.css"

function InventoryList() {
    const [inventory, setInventory] = useState([]);
    
    function getItems() {
        Axios.get('http://localhost:5000/inventory')
            .then(res => setInventory(res.data))
            .catch((err) => console.log('Error: '+err));
    }
    getItems();
    return (
        <div className="container-fluid">
            <SearchItem/>
            <div className="inventory-list-container shadow">
                <div className="heading">Inventory</div>
                    <div className="row column-heading">
                        <div className="col-sm">
                            Item Number
                        </div>
                        <div className="col-sm">
                            Item Name
                        </div>
                        <div className="col-sm">
                            Description
                        </div>
                        <div className="col-sm">
                            Stock
                        </div>
                        <div className="col-sm">
                            Price
                        </div>
                    </div>
                    <div className="items-container">
                        {inventory.map((item, index) => {
                            return (
                                <Item
                                    key={index}
                                    itemNumber={item.itemNumber}
                                    itemName={item.itemName}
                                    description={item.description}
                                    stock={item.stock}
                                    price={item.price}
                                />
                            )
                        })}
                    </div>
                <div>
            </div>
        </div>
    </div>
    );
}

export default InventoryList;