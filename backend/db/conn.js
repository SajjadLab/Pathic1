import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const uri = process.env.DB;
var _db;
const dbo = {
  connectToServer: async function(callback) {
    try {
    _db = await mongoose.connect(
      uri,
      { useNewUrlParser: true, useUnifiedTopology: true },
      () => console.log(" Mongoose is connected"))
    }
    catch(err) {
      console.log(err);
    };
    console.log("Successfully connected to MongoDB");
  },

  getDb: function () {
    return _db;
  },
};

export default dbo