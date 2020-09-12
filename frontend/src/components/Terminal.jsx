import React, { useState } from 'react';
import Axios from 'axios';

import ReceiptItem from './ReceiptItem';

import "../styles/terminal.css"

function Terminal() {
    const tax = 13;

    const today = new Date()
    const date = ''+today.getDate()+'/'+today.getMonth()+'/'+today.getFullYear()
    const [receipt, setReceipt] = useState([]);
    const [total, setTotal] = useState(0);
    const [totalTax, setTotalTax] = useState(0);
    const [result, setResult] = useState({
        itemNumber: "",
        itemName: "",
        description: "",
        stock: "",
        price: ""
    });

    function handleChange(event) {
        const { name, value } = event.target;

        setResult(prevResult => {
            return {
                ...prevResult,
                [name]: value
            }
        })

        event.preventDefault();
    }

    function removeItem(oldItem) {
        setResult({
            itemNumber: "",
            itemName: "",
            description: "",
            stock: "",
            price: ""
        });

        if (receipt.length !== 0) {
            receipt.splice(receipt.indexOf(result.itemNumber), 1)
            setTotalTax(prevTotalTax => {
                let newTotalTax = Number(prevTotalTax) - oldItem.price*tax/100;
                return newTotalTax;
            })
            setTotal(prevTotal => {
                let newTotal = Number(prevTotal)-oldItem.price;
                return newTotal;
            })
        }
    }

    function addItem(event) {
        setResult({
            itemNumber: "",
            itemName: "",
            description: "",
            stock: "",
            price: ""
        });
        
        let url = 'http://localhost:5000/inventory/'+result.itemNumber;
        Axios.get(url)
            .then(res => {
                if (res.data.itemNumber === null) {
                    console.log('Error, item number not passed.')
                } else {
                    addToReceipt(res.data)
                }
            })
            .catch((err) => console.log('Error: '+err));
        
        function addToReceipt(newItem) {
            setReceipt(prevItem => {
                return [...prevItem, newItem];
            })
            setTotal(prevTotal => {
                return (prevTotal+newItem.price)
            })
            setTotalTax(prevTotalTax => {
                return (prevTotalTax + newItem.price*tax/100)
            })
        }
    }

    return (
        <div className="container-fluid">
            <div className="terminal-container shadow">
                <div className="heading">Terminal</div>
                <form className="form search-form" autoComplete="off">
                    <input className="form-control my-sm-2" type="number" placeholder="Enter item number" aria-label="Search"
                        name="itemNumber"
                        onChange={handleChange}
                        value={result.itemNumber}
                    />
                    <button className="btn btn-success my-2 w-100 addto-button" type="button" 
                        onClick={addItem}
                    >Add</button>
                    <button className="btn btn-danger my-2 w-100 removefrom-button" type="button"
                        onClick={removeItem} 
                    >Remove</button>
                    <button className="btn btn-primary my-2 w-100 finish-button" type="button" 
                    >Process Transaction</button>
                </form>
                <div className="receipt-container">
                    <div className="row">
                        <div className="col">Item Number</div>
                        <div className="col">Item Name</div>
                        <div className="col">Price</div>
                    </div>
                    <div className="purchase-container">
                        {receipt.map((item, index) => {
                            return (
                                <ReceiptItem
                                    key={index}
                                    itemNumber={item.itemNumber}
                                    itemName={item.itemName}
                                    price={item.price}
                                />
                            )
                        })}
                    </div>
                    <div className="row">
                        <div className="col">Date: {date}</div>
                        <div className="col">Tax ({tax}%): ${Number(totalTax.toFixed(2))}</div>
                        <div className="col">Total: ${(total+totalTax).toFixed(2)}</div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Terminal;