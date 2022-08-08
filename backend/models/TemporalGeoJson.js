const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// This is the schema for GeoJson polygon object
// that relate to terraperiums during a period of time
const TemporalGeoJsonSchema = new Schema({
  type: {
    type: String,
    enum: ['Feature'],
    required:true
  },
  // The following are properties that help identify
  // a polygon with its time period and terraperium
  properties: {
    name: String,
    startDate: Date,
    endDate: Date,
    relatedTerraperiums: [String]
  },
  // Defines the actual geometry (polygon)
  geometry: {
    type: {
      type: String,
      enum: ['MultiPolygon'],
      required: true
    },
    coordinates: {
      type: [[[[Number]]]],
      required: true
    }
  }
});

module.exports = TemporalGeoJson = mongoose.model("TemporalGeoJson", TemporalGeoJsonSchema);
