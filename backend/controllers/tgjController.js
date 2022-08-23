// Bring in the TemporalGeoJson entity
import TemporalGeoJson from "../models/TemporalGeoJson.js";

// Get all tgj records
const getAllTGJ = async (req, res) => {
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
}

// get tgj by id
const getOneTGJ = async (req, res) => {
  try {
    const tgjs = await TemporalGeoJson.findById(req.params.id);
    res.status(200).json(tgjs);
  }
  catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
}

// add one tgj
const addOneTGJ = async (req, res) => {
  try {
    const TGJ = await TemporalGeoJson.create({
        ...req.body
    });
    res.status(200).json(TGJ);
  }
  catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
}

export { getAllTGJ, getOneTGJ, addOneTGJ };