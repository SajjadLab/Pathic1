import { ObjectId } from "mongodb";
import mongoose, { Schema } from "mongoose";
import FuzzyDate from "./FuzzyDate";

// Interpretation object for relating perspective
const EmpathSchema = new Schema({
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
    interpretor: { // The individual interprating the highlight
        type: String,
        required: true
    },
    interpretationDate: { // When this object was interpreted
        type: FuzzyDate,
        required: true
    },
    entities: { // related entities that derive meaning from this empath
        type: [ObjectId],
        required: false
    },
    tags: { // Query tags
        type: [String],
        required: false
    }
})