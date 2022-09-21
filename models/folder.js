const mongoose = require('mongoose')


const folderSchema = new mongoose.Schema({
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
        default: "Folder"
    },
    views: {
        type: Array,
        default:[]
    }
});

module.exports = mongoose.model('Folder',folderSchema)

