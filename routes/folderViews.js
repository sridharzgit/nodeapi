const express = require('express')
const router = express.Router()
const App = require('../models/apps')
const MenuItem = require('../models/menuItems')
const Folder = require('../models/folders')

// get all apps with app_id given 
router.get('/:app_id/:folder_id', async (req, res) => {
    try {
        const app_id = req.params.app_id
        const apps = await App.find({id:app_id})
        res.json(apps)
    } catch (e) {
        res.send('Error', +e)
    }
    res.send({ name: "Hello" })
}
)

router.post('/create', async (req, res) => {
    try {
        const app_id = req.body.app_id
        const folder_id = req.body.folder_id
        const app =await App.findOne({id:app_id})
        console.log(app)
        const folder = app.views.find(view=>{return view.id===folder_id})
        
        if(!folder.views) {
            folder.views =[]
        }
        const view_id = folder_id+".v"+folder.views.length
        console.log(view_id)
        const view = new MenuItem({
            id: view_id,
            name: req.body.name,
            type: req.body.type
        })
        app.views.push(view)
        app.save()
        res.json(app)
    } catch (e) {
        res.send('Error' + e)
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



module.exports = router
