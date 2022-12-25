const { Schema } = require("mongoose");

const shopSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  address: {
    type: String,
  },
  schedule: {
    type: String,
    required: true,
  },
  // eslint-disable-next-line camelcase
  created_at: {
    type: Date,
    default: Date.now,
  },
  // eslint-disable-next-line camelcase
  updated_at: {
    type: Date,
    default: Date.now,
  },
});

shopSchema.set("toJSON", {
  transform: (doc, ret) => {
    delete ret._v;
  },
});

module.exports = shopSchema;
