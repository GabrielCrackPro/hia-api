const mongoose = require("mongoose");

const connect = async () => {
  await mongoose
    .connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
    })
    .then(() => console.log("🌎 Connected to DB"));
};

module.exports = {
  connect,
};
