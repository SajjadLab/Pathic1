import mongoose, { Schema } from "mongoose";
import Property from "./Property";

// Interpretation object for relating perspective
const EmpathSchema = new Schema({
    source: { type: Schema.types.ObjectId, ref: "source" },
    referenceGroup: { // Organizational location of the highlight
        heirarchy: String,
        value: String
    },
    highlight: { // Highlight from source
        type: String,
        required: false
    },
    interpretation: { // What the interpretor believes the author meant
        type: String,
        required: true
    },
    interpreter: { // The individual interprating the highlight
        type: String,
        required: true
    },
    interpretationDate: { // When this object was interpreted
        type: Property, // type FuzzyDate
        required: true
    },
    entities: [
        { type: Schema.Types.ObjectId, ref: "entity" }
    ],
    tags: { // Query tags
        type: [String],
        required: false
    }
})

module.exports = Empath = mongoose.model("Empath", EmpathSchema);