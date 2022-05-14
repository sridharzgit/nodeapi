const express = require('express')
const router = express.Router()
const App = require('../models/apps')
const View = require('../models/menuItems')

// get all apps with app_id given 
router.get('/:app_id', async (req, res) => {
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
        const app =await App.findOne({id:app_id})
        const view_id = app_id+".v"+app.views.length
        console.log("newView Id",view_id)
        const view = new View({
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

router.post('/edit', async (req, res) => {
    try {
        const app = await App.findOne({id:req.body.app_id})
        const view=app.views.find(view=>{return view.id===req.body.view_id})
        const reqView = req.body.view
        Object.assign(view,reqView)
        const newApp = await app.save()
        res.json(newApp)
    } catch (e) {
        res.send('Error' + e)
    }
}
)

router.post('/delete', async (req, res) => {
    try {
        const app = await App.findOne({id:req.body.app_id})
        const viewIndex=app.views.findIdex(view=>{return view.id===req.body.view_id})
        if(viewIndex!==-1) {
            app.views.splice(viewIndex-1,1)
        }
        const newApp = await app.save()
        res.json(newApp)
    } catch (e) {
        res.send('Error' + e)
    }
}
)


module.exports = router
