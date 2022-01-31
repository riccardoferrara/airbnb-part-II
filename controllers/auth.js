// Import Packages
const express = require('express')
const router = express.Router()
const Users = require('../models/users')

//Create requests GET / POST
router.get('/login', (req, res) => {
    res.render('login')
})

router.get('/signup', (req, res) => {
    res.render('signup')
})

router.post('/login', (req, res) => {
    res.send('login')
})

router.post('/signup', async(req, res) => {
    let user = req.body
    Users.findOne({
        'email': user.email
    }, async function(err, exist) {
        // hanlde err..
        // IF THE USER ALREADY EXISTS
        if (exist) {
            console.log('user exists!')
        } else
        // IF THE USER DO NOT EXISTS
        {
            let users = await Users.create(user)
            console.log('user created!')
        }
    })
})

router.get('/logout', (req, res) => {
    res.send('logout')
})

module.exports = router