const mongoose = require('mongoose');

const OrdersSchema = new mongoose.Schema({
    name: { type: String, required: true },
    qty: { type: Number, required: true },
    price: { type: Number, required: true },
    mode: { type: String, required: true },
 
});

const OrdersModel = mongoose.model('orders', OrdersSchema);
