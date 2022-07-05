const mongoose = require('mongoose');

const containerSchema = new mongoose.Schema({
    item :{
        type: String,
        required: true
    },
    quantity:{
        type: String,
        required: true
    }
})


module.exports = mongoose.model('container',containerSchema);