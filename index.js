  const app = require('express')();
const cors = require('cors')
const express = require('express');
const mongoose= require('mongoose')
const PORT = 9090
const url = 'mongodb://localhost:27017/contentStore'

var options = {
  "origin": "http://localhost:8880",
  "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
  "preflightContinue": false,
  "allowedHeaders":"Content-Type,Accept,cache-control,content-type,expires,pragma",
  "optionsSuccessStatus": 204,
  "credentials":true
}
app.use(cors(options));

app.listen(PORT, ()=> console.log(`its alive on http://localhost:${PORT}`))

mongoose.connect(url)

const con = mongoose.connection
const userRouter = require('./routes/user')
const appsRouter = require('./routes/app')
const viewsRouter = require('./routes/view')
const folderViewsRouter = require('./routes/folderView')
//app.use(cors({origin:'http://localhost:3001/'}))

app.use(express.json())
app.use('/user',userRouter)
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
