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
    res.send({ name: "Hello" })
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




module.exports = router
