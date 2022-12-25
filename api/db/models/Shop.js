const { model } = require("mongoose");
const shopSchema = require("../schemas/shopSchema");

const Shop = new model("Shop", shopSchema);

module.exports = Shop;
