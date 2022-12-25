const { model } = require("mongoose");
const itemSchema = require("../schemas/itemSchema");

const Item = new model("Item", itemSchema);

module.exports = Item;
