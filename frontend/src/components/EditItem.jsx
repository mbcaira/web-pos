import React from 'react';
import InventoryList from './InventoryList';

import "../styles/edit-item.css" 

function DeleteItem() {
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
                    <br/>
                    <form autoComplete="off">
                        <div className="form-group mx-sm-3 mb-2">
                            <input className="form-control edit-item" type="number"
                                name="itemNumber"
                                // onChange={handleChange}
                                // value={item.itemNumber}
                                placeholder="Item number"
                            />
                            <input className="form-control edit-item" type="text"
                                name="itemName"
                                // onChange={handleChange}
                                // value={item.itemName}
                                placeholder="Item name"
                            />
                            <input className="form-control edit-item" type="text"
                                name="description"
                                // onChange={handleChange}
                                // value={item.description}
                                placeholder="Description"
                            />
                            <input className="form-control edit-item" type="number"
                                name="price"
                                // onChange={handleChange}
                                // value={item.price}
                                placeholder="Price"
                            />
                            <input className="form-control edit-item" type="number"
                                name="stock"
                                // onChange={handleChange}
                                // value={item.stock}
                                placeholder="Stock"
                            />
                            <div className="container-fluid">
                                <button type="button" class="btn btn-success btn-lg add-button">Edit item</button>
                                <button type="button" class="btn btn-danger btn-lg delete-button">Delete item</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            </div>
        </div>
    );
}

export default DeleteItem;