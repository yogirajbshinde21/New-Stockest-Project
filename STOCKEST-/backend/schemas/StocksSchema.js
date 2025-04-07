
const { Schema } = require("mongoose");

const StocksSchema = new Schema({
    name: { type: String, required: true },
    quantity: { type: Number, required: true },
    price: { type: Number, required: true },
});

module.exports = { StocksSchema };