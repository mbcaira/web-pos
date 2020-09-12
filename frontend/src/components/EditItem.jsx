import React, { useState } from 'react';
import Axios from 'axios';

import InventoryList from './InventoryList';

import "../styles/edit-item.css" 

function EditItem() {
    const [item, updateItem] = useState({
        itemNumber: "",
        itemName: "",
        description: "",
        price: "",
        stock: ""
    });

    function handleChange(event) {
        const { name, value } = event.target;

        updateItem(prevItem =>{
            return {
                ...prevItem,
                [name]: value
            };
        });
    }

    function deleteItem(event) {
        updateItem({
            itemNumber: "",
            itemName: "",
            description: "",
            price: "",
            stock: ""
        });
        let url = 'http://localhost:5000/inventory/'+item.itemNumber;
        Axios.delete(url)
            .then(res => console.log(res.data))
            .catch((err) => console.log('Error: '+err));
        event.preventDefault();
    }

    function modifyItem(event) {
        updateItem({
            itemNumber: "",
            itemName: "",
            description: "",
            price: "",
            stock: ""
        });
        let url = 'http://localhost:5000/inventory/update/'+item.itemNumber;
        Axios.put(url, item)
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
                <div className="edit-item-container">
                    <div className="heading">Edit Item
                    </div>
                    <p className="instructions">Edit an item by entering its item number and editing the fields you wish to update and pressing edit</p>
                    <p className="instructions">Delete an item by entering its item number and pressing delete</p>
                    <form autoComplete="off">
                        <div className="form-group mx-sm-3 mb-2">
                            <input className="form-control edit-item" type="number"
                                name="itemNumber"
                                onChange={handleChange}
                                value={item.itemNumber}
                                placeholder="Item number"
                            />
                            <input className="form-control edit-item" type="text"
                                name="itemName"
                                onChange={handleChange}
                                value={item.itemName}
                                placeholder="Item name"
                            />
                            <input className="form-control edit-item" type="text"
                                name="description"
                                onChange={handleChange}
                                value={item.description}
                                placeholder="Description"
                            />
                            <input className="form-control edit-item" type="number"
                                name="stock"
                                onChange={handleChange}
                                value={item.stock}
                                placeholder="Stock"
                            />
                            <input className="form-control edit-item" type="number"
                                name="price"
                                onChange={handleChange}
                                value={item.price}
                                placeholder="Price"
                            />                            
                            <div className="container-fluid">
                                <button type="button" class="btn btn-success btn-lg add-button" onClick={modifyItem}>Edit item</button>
                                <button type="button" class="btn btn-danger btn-lg delete-button" onClick={deleteItem}>Delete item</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            </div>
        </div>
    );
}

export default EditItem;