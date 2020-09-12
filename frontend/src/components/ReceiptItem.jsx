import React from 'react';

function ReceiptItem(props) {
    return (
        <div className="row item">
            <div className="col">
            {props.itemNumber}
            </div>
            <div className="col">
            {props.itemName}
            </div>
            <div className="col">
            {props.price}
            </div>
        </div>);
}

export default ReceiptItem;