const express = require("express");
const mongoose = require("mongoose");
 
// recordRoutes is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /record.
const router = express.Router();
 
// This will help us connect to the database
const dbo = require("../db/conn");
 
// This help convert the id from string to ObjectId for the _id.
const ObjectId = require("mongodb").ObjectId;

// Bring in the TemporalGeoJson entity
const TemporalGeoJson = require("../models/TemporalGeoJson");
 
 
// This section will help you get a list of all the records.
router.route("/Pathic").get(async (req, res) => {
  try {
    const tgjs = await TemporalGeoJson.find({});
    const temp = {
      "type": "FeatureCollection",
      "features": tgjs
    };
    res.status(200).json(temp);
  }
  catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});
 
// This section will help you get a single record by id
router.route("/Pathic/:id").get(async (req, res) => {
  try {
    const tgjs = await TemporalGeoJson.findById({ObjectId( req.params.id )});
    res.status(200).json(tgjs);
  }
  catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});
 
// This section will help you create a new record.
router.route("/Pathic/add").post(async (req, res) => {
  try {
    const TGJ = await TemporalGeoJson.create({
      type: req.body.type,
      properties: {
        name: req.body.properties.name,
        startDate: req.body.properties.startDate,
        endDate: req.body.properties.endDate,
        relatedTerraperiums: req.body.properties.relatedTerraperiums
      },
      geometry: {
        type: req.body.geometry.type,
        coordinates: req.body.geometry.coordinates
      }
    });
    res.status(200).json(TGJ);
  }
  catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});
 
// This section will help you update a record by id.
router.route("/update/:id").post(function (req, response) {
 let db_connect = dbo.getDb(); 
 let myquery = { _id: ObjectId( req.params.id )}; 
 let newvalues = {   
   $set: {     
     name: req.body.name,    
     position: req.body.position,     
     level: req.body.level,   
   }, 
  }
});
 
// This section will help you delete a record
router.route("/:id").delete((req, response) => {
 let db_connect = dbo.getDb();
 let myquery = { _id: ObjectId( req.params.id )};
 db_connect.collection("records").deleteOne(myquery, function (err, obj) {
   if (err) throw err;
   console.log("1 document deleted");
   response.json(obj);
 });
});
 
module.exports = router;
