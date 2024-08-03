const mongoose = require('mongoose')
const Schema = require('mongoose').Schema;

const db = require('../db/mongodb')
db.dbConnection();
//for object we need not give space
// - are not allowed cose they are considered as two different words
const bookSchema = new Schema({
    "title": {
        type: String,
        required: true
    },
    "authors": {
        type: String,
        required: true
    },
    "ISBN": {
        type: Number,
        required: true
    },
    "category": {
        type: String,
        required: true
    },
    "Published Year": {
        type: Date,
    },
    "Number of Copies": {
        type: Number,
        required: true
    },
    "Available Copies": {
        type: Number,
        required: true
    },
    "Publisher": {
        type: String,
        required: true
    }
})

const bookModel = new mongoose.model("Library",bookSchema)
module.exports = {bookModel}