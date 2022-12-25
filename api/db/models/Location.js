const { model } = require("mongoose");
const locationSchema = require("../schemas/locationSchema");

const Location = new model("Location", locationSchema);

module.exports = Location;
