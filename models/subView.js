const mongoose = require('mongoose')


const viewSchema = new mongoose.Schema({
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
        enum:["Widget","SubView"]
    },
    settings: {},
    settingsEdit: {},
    viewDef: {},
    viewDefEdit: {},
    options: {},
    optionsEdit:{}
});

module.exports = mongoose.model('ViewSchema',viewSchema)

