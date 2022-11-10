const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const App = require('../models/app')
const passportService = require('../services/passport')
const passport = require('passport')

//var Any = new Schema({ any: Schema.Types.Mixed })

//const requireAuth = passport.authenticate('jwt',{session:false})
router.get('/', async (req, res) => {
    try {
        const apps = await App.find()
        res.json(apps)
    } catch (e) {
        res.json({error:error})
        //res.send('Error', +e)
    }
}
)

router.post('/create', async (req, res) => {
    try {
        const app = new App(req.body)
        console.log("Hello",req.body)
        const newApp = await app.save()
        res.json(newApp)
    } catch (e) {
        res.send('Error' + e)
    }
}
)

router.post('/migrate', async (req, res) => {
    try {
        const app = new App(req.body)
        console.log("Hello",req.body)
        const newApp = await app.save()
        res.json(newApp)
    } catch (e) {
        res.send('Error' + e)
    }
}
)


// router.post('/edit', async (req, res) => {
//     try {
//         const app = await App.findOne({id:req.body.app_id})
//         app.name = req.body.name
//         const newApp = await app.save()
//         res.json(newApp)
//     } catch (e) {
//         res.send('Error' + e)
//     }
// }
// )

router.post('/delete', async (req, res) => {
    try {
        const app = await App.findByIdAndDelete(req.body.Id)
        res.json(app)
    } catch (e) {
        res.send('Error' + e)
    }
}
)


module.exports = router
