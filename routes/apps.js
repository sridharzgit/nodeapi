const express = require('express')
const router = express.Router()
const App = require('../models/apps')

router.get('/', async (req, res) => {
    try {
        const apps = await App.find()
        res.json(apps)
    } catch (e) {
        res.send('Error', +e)
    }
}
)

router.post('/create', async (req, res) => {
    try {
        const apps = await App.find()
        const app_id = "a"+apps.length
        const app = new App({
            id: app_id,
            name: req.body.name,
            type: req.body.type
        })

        const newApp = await app.save()
        res.json(newApp)
    } catch (e) {
        res.send('Error' + e)
    }
}
)

router.post('/edit', async (req, res) => {
    try {
        const app = await App.findOne({id:req.body.app_id})
        app.name = req.body.name
        const newApp = await app.save()
        res.json(newApp)
    } catch (e) {
        res.send('Error' + e)
    }
}
)

router.post('/delete', async (req, res) => {
    try {
        const app = await App.findOneAndDelete({id:req.body.app_id})
        
        res.json(app)
    } catch (e) {
        res.send('Error' + e)
    }
}
)


module.exports = router
