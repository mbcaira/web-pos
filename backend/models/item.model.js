const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const itemSchema = new Schema({
    itemNumber: {
        type: Number,
        required: true,
        unique: true,
        trim: true,
        minlength: 4
    },
    itemName: {
        type: String,
        required: true,
        minlength: 3
    },
    description: {
        type: String
    },
    price: {
        type: Number,
        required: true
    },
    stock: {
        type: Number,
        required: true
    }
},   {
    timestamps: true
});

const Item = mongoose.model('Item', itemSchema);
module.exports = Item;