const { Schema } = require("mongoose");

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
  },
  displayname: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  profilePicture: {
    type: String,
  },
  logged: {
    type: Boolean,
    default: false,
  },
  items: [
    {
      type: Object,
      ref: "Item",
    },
  ],
  shops: [
    {
      type: Object,
      ref: "Shop"
    }
  ],
  locations: [
    {
      type: Object,
      ref: "Location"
    }
  ],
  actions: [
    {
      type: Object,
      ref: "Action"
    }
  ],
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
});

userSchema.set("toJSON", {
  transform: (doc, ret) => {
    delete ret._v;
    delete ret.password;
  },
});

module.exports = userSchema;
