const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    name: {type: String, required: true},
    image: {type: String, required: true},
    price: {type: Number, required: true},
    split: {type: Number, required: true},
    section: {type: String, required: true},
})

module.exports = mongoose.model('Model', schema);