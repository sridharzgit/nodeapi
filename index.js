const app = require('express')();
const express = require('express');
const mongoose= require('mongoose')
const PORT = 8080
const url = 'mongodb://localhost:27017/contentStore'
app.listen(PORT, ()=> console.log(`its alive on http://localhost:${PORT}`))

mongoose.connect(url)

const con = mongoose.connection
const appsRouter = require('./routes/apps')
const viewsRouter = require('./routes/views')
const folderViewsRouter = require('./routes/folderViews')
app.use(express.json())
app.use('/apps',appsRouter)
app.use('/views',viewsRouter)
con.on('open', function(){
  console.log("connected")
})

// app.get('/apps',(req,res)=>{
//     res.status(200).send({
//         id:1,
//         name:"app2"
//     })
// })


// const appSchema = new Schema({
//     id: {type: String,
//         required: true},
//     name: {
//       type: String,
//       required: true
//     },
//     type: {
//         type: String,
//         required: true
//       },
//     views: {
//         type:Array
//     }   
//   });

//   const viewSchema = new Schema({
//     id: {type: String,
//         required: true},
//     name: {
//       type: String,
//       required: true
//     },
//     type: {
//         type: String,
//         required: true
//       },
//     views: {
//         type:Array
//     },   
//     subViews : {
//         type:Array
//     }
//   });



