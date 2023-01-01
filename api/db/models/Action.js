const { model } = require("mongoose");
const actionSchema = require("../schemas/actionSchema.js");

const Action = new model("Action", actionSchema);

module.exports = Action;
