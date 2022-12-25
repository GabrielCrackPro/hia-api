const { Schema } = require("mongoose");

const itemSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  type: {
    type: String,
    required: true
  },
  location: {
    type: Schema.Types.ObjectId,
    ref: "Location",
  },
  // eslint-disable-next-line
  created_at: {
    type: Date,
    default: Date.now,
  },
  // eslint-disable-next-line
  updated_at: {
    type: Date,
    default: Date.now,
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
});

itemSchema.set("toJSON", {
  transform: (_doc, ret) => {
    delete ret._v;
  },
});

module.exports = itemSchema;
