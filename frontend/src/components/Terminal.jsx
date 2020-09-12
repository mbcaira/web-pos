import React, { useState } from 'react';
import Axios from 'axios';

import ReceiptItem from './ReceiptItem';

import "../styles/terminal.css"

function Terminal() {
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

    const tax = 13;

    const today = new Date();
    const date = ''+today.getDate()+'/'+today.getMonth()+'/'+today.getFullYear();

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

    function removeItem() {
        setResult({
            itemNumber: "",
            itemName: "",
            description: "",
            stock: "",
            price: ""
        });
        
        if (result.itemNumber !== "") {
            const currentReceipt = receipt.map(entry => entry.itemNumber);
            let delIndex = currentReceipt.indexOf(+result.itemNumber, 0);

            if (delIndex !== -1) {
                removeFromReceipt(receipt[delIndex], delIndex);
            } else {
                console.log('Item not found');
            }
        }
        
        function removeFromReceipt(item, index) {
            if (receipt.length !== 0) {
                setTotal(prevTotal => {
                    return (prevTotal-item.price)
                });
                setTotalTax(prevTotalTax => {
                    return (prevTotalTax-item.price*tax/100)
                });
                receipt.splice(index, 1);
            }
        }
    }

    function addItem() {
        setResult({
            itemNumber: "",
            itemName: "",
            description: "",
            stock: "",
            price: ""
        });
        
        if (result.itemNumber !== "") {
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
    }

    function processTransaction() {
        let update = {
            itemNumber: "",
            itemName: "",
            description: "",
            stock: "",
            price: ""
        }
        let url = 'http://localhost:5000/inventory/'
        if (receipt.length !== 0) {
            receipt.forEach(item => {
                Axios.get(url+item.itemNumber)
                    .then(res => {
                        update.stock = res.data.stock-1;
                        Axios.put(url+'update/'+item.itemNumber, update)
                            .then(() => console.log('Update request sent.'))
                            .catch((err) => console.log('Error: '+err));
                    })
                    .catch((err) => console.log('Error: '+err));
            })
            setReceipt([]);
            setTotal(0);
            setTotalTax(0);
        } else {
            console.log('Empty receipt, nothing to do.')
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
                        onClick={processTransaction}
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
                        <div className="col">Total: ${Number((total+totalTax).toFixed(2))}</div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Terminal;