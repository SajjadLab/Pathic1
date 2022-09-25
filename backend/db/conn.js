import mongoose from "mongoose";

const uri = "mongodb+srv://sajjad:C3CLpUFnJ!FaGH9@pathic1.nnk5x.mongodb.net/?retryWrites=true&w=majority";
var _db;
const dbo = {
  connectToServer: function(callback) {
    try {
    _db = mongoose.connect(
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