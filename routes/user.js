const jwt = require('jwt-simple')
const express = require('express')
const router = express.Router()
const User = require('../models/user')
const config = require('../config.js')
const passportService = require('../services/passport')
const passport = require('passport')

const requireSignIn = passport.authenticate('local',{session:false})

function tokenForUser(user){
  const timeStamp = new Date().getTime()
  return jwt.encode({sub:user.id,iat:timeStamp},config.secret)
}


router.post('/signup', async (req, res) => {
    try {
        User.findOne({email:req.body.email}, function(err,existingUser) {
          if(err) {
              res.json({succes:false,message:"user creation failed in findOne"})
          }
          if(existingUser) {
            res.json({succes:false,message:"user already exist"})
          }
        })
        const user = new User({
            firstname: req.body.lastname,
            lastname:req.body.lastname,
            gender:req.body.gender,
            age:req.body.age,
            email:req.body.email,
            password: req.body.password
        })
        const newUser = await user.save(function(err){
          if(err) {
            res.json({succes:false,message:"user creation failed12 ",err})
          } else {
            res.json({succes:true,message:"user created successfully",token:tokenForUser(user)})
          }
        })

    } catch (e) {
        res.send('Error' + e)
    }
}
)

router.post('/signin', requireSignIn, async (req, res) => {
    try {
      res.send({token:tokenForUser(req.user)})
    } catch (e) {
        res.send('Error' + e)
    }
}
)

router.post('/signout', async (req, res) => {
    try {
        res.json({success:true})
    } catch (e) {
        res.send('Error' + e)
    }
}
)


module.exports = router
