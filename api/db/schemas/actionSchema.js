const { Schema } = require("mongoose");

const actionSchema = new Schema({
  action: {
    type: String,
    required: true,
  },
  user: {
    type: Object,
    required: true
  },
  // eslint-disable-next-line camelcase
  created_at: {
    type: Date,
    default: Date.now
  }
});

actionSchema.set("toJSON", {
  transform: (_doc, ret) => {
    delete ret._v;
  },
});



module.exports = actionSchema;
