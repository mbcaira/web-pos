import React, { useState } from 'react';

import InventoryList from './InventoryList'

function CreateItem(props){
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
                [name]:value
            };
        });
    }

    function submitItem(event) {
        props.onAdd(item);
        setItem({
            itemNumber: "",
            itemName: "",
            description: "",
            price: "",
            stock: ""
        });
        event.preventDefault();
    }

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col">
                    <InventoryList/>
                </div>
                <div className="col">
                    <div className="create-item-container">
                        <div className="heading">Create Item</div>
                        <br/>
                        <form>
                            <input
                                name="itemNumber"
                                onChange={handleChange}
                                value={item.itemNumber}
                                placeholder="Item number"
                            />
                            <input
                                name="itemName"
                                onChange={handleChange}
                                value={item.itemName}
                                placeholder="Item name"
                            />
                            <input
                                name="description"
                                onChange={handleChange}
                                value={item.description}
                                placeholder="Description"
                            />
                            <input
                                name="price"
                                onChange={handleChange}
                                value={item.price}
                                placeholder="Price"
                            />
                            <input
                                name="stock"
                                onChange={handleChange}
                                value={item.stock}
                                placeholder="Stock"
                            />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CreateItem;