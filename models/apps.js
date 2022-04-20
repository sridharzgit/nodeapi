const mongoose = require('mongoose')


const appSchema = new mongoose.Schema({
    id: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    views: {
        type: Array
    }
});

module.exports = mongoose.model('App',appSchema)

