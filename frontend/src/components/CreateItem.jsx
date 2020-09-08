import React, { useState } from 'react';
import Axios from 'axios';

import InventoryList from './InventoryList'

import "../styles/create-item.css"

function CreateItem(){
    const [item, setItem] = useState({
        itemNumber: "",
        itemName: "",
        description: "",
        price: "",
        stock: ""
    });

    function handleChange(event) {
        const { name, value } = event.target;

        setItem(prevItem =>{
            return {
                ...prevItem,
                [name]: value
            };
        });
    }

    function submitItem(event) {
        setItem({
            itemNumber: "",
            itemName: "",
            description: "",
            price: "",
            stock: ""
        });
        
        Axios.post('http://localhost:5000/inventory/add', item)
            .then(res => console.log(res.data))
            .catch((err) => console.log(err));
        event.preventDefault();
    }

    return (
        <div className="container-fluid">
            <div className="row">
            <div className="col">
                <InventoryList />
            </div>
            <div className="col">
                <div className="create-item-container">
                    <div className="heading">Create Item</div>
                    <br/>
                    <form autoComplete="off">
                        <div className="form-group mx-sm-3 mb-2">
                            <input className="form-control create-item" type="number"
                                name="itemNumber"
                                onChange={handleChange}
                                value={item.itemNumber}
                                placeholder="Item number"
                            />
                            <input className="form-control create-item" type="text"
                                name="itemName"
                                onChange={handleChange}
                                value={item.itemName}
                                placeholder="Item name"
                            />
                            <input className="form-control create-item" type="text"
                                name="description"
                                onChange={handleChange}
                                value={item.description}
                                placeholder="Description"
                            />
                            <input className="form-control create-item" type="number"
                                name="stock"
                                onChange={handleChange}
                                value={item.stock}
                                placeholder="Stock"
                            />
                            <input className="form-control create-item" type="number"
                                name="price"
                                onChange={handleChange}
                                value={item.price}
                                placeholder="Price"
                            />
                            <div className="container-fluid">
                                <button type="button" class="btn btn-success add-button btn-lg" onClick={submitItem}>Add item</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            </div>
        </div>
    );
}

export default CreateItem;