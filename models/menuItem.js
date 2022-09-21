const mongoose = require('mongoose')


const menuItemSchema = new mongoose.Schema({
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
        required: true,
        enum:["Dashboard","View"]
    },
});

module.exports = mongoose.model('MenuItem',menuItemSchema)

