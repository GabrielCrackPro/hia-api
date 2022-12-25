const { Schema } = require("mongoose");

const locationSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  room: {
    type: String,
    required: true,
  },
  items: [
    {
      type: Schema.Types.ObjectId,
      ref: "Item",
    },
  ],
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

locationSchema.set("toJSON", {
  transform: (doc, ret) => {
    delete ret._v;
  },
});

module.exports = locationSchema;
