const mongoose = require("mongoose");

const uri = process.env.Mongodb_uri;

const connectDb = async () => {
  try {
    await mongoose.connect(uri);
    console.log("you are connected to the database........");
  } catch (e) {
    console.log(`There is error in connecting database ${e}`);
    process.exit(0);
  }
};

module.exports = connectDb;
