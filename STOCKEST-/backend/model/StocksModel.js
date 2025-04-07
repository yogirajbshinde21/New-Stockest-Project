
const { model } = require("mongoose");

const { StocksSchema } = require("../schemas/StocksSchema");

const StocksModel = new model("stocks", StocksSchema);

module.exports = { StocksModel };