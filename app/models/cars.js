const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const carsSchema = new Schema({
    _id: {
        type: String
    },
    brand: {
        type: String,
        required: true
    },
    model:{
        type: String,
        required: true,
    },
    year:{
        type: Number,
        required: true
    },
    engine:{
        type: String,
        required: true,
    },
    color: {
        type: String,
    },
    price: {
        type: Number,
        required: true,
    }
})

module.exports = mongoose.model('Car', carsSchema);