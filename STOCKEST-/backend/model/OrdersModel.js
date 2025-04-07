
const { model } = require("mongoose");
const { OrdersSchema } = require('../schemas/OrdersSchema');
const OrdersModel = new model("orders", OrdersSchema);

module.exports = { OrdersModel };