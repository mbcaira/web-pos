import React, { useState } from 'react';
import Axios from 'axios';

import Item from './Item'

import "../styles/search-inventory.css"

function SearchInventory() {
    const [result, setResult] = useState({
        itemNumber: "",
        itemName: "",
        description: "",
        price: "",
        stock: ""
    });

    function handleChange(event) {
        const { name, value } = event.target;

        setResult(() => {
            return {
                [name]: value
            }
        })
    }

    function findItem(event) {
        
        setResult({
            itemNumber: "",
            itemName: "",
            description: "",
            price: "",
            stock: ""
        });

        let url = 'http://localhost:5000/inventory/'+result.itemNumber
        Axios.get(url)
            .then(res => {
                if (res.data.itemNumber === null) {
                    console.log("Cannot find item");
                } else {
                    setResult(res.data);
                }
            })
            .catch((err) => console.log('Error: '+err));
        event.preventDefault();
    }

    return (
        <div className="search-container shadow">
            <div className="heading">Search Item</div>
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
            <Item
                itemNumber={result.itemNumber}
                itemName={result.itemName}
                description={result.description}
                stock={result.stock}
                price={result.price}
            />
            <form className="form search-form" autoComplete="off">
                <input className="form-control mr-sm-2 text-box style=margin-bottom:10px" type="number" placeholder="Search for an item by item number" aria-label="Search"
                    name="itemNumber"
                    onChange={handleChange}
                />
                <button className="btn btn-primary my-2 my-sm-3 w-100 search-button" type="button" onClick={findItem}>Search</button>
            </form>
        </div>
    );
}

export default SearchInventory