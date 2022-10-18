const mongoose = require('mongoose')


// const appSchema = new mongoose.Schema({
//     id: {
//         type: String,
//         required: true
//     },
//     name: {
//         type: String,
//         required: true
//     },
//     type: {
//         type: String,
//         default:"App"
//     },
//     views: {
//         type: Array,
//         default:[]
//     }
// });

const appSchema = new mongoose.Schema({}, { strict: false });


module.exports = mongoose.model('App',appSchema)
