import mongoose from "mongoose";

const uri = "mongodb://localhost:27017/Pathic";
var _db;
const dbo = {
  connectToServer: function(callback) {
    _db = mongoose.connect(uri).
      catch(err => handleError(err));
    console.log("Successfully connected to MongoDB");
  },

  getDb: function () {
    return _db;
  },
};

export default dbo