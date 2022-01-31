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
    console.log(req.body)
    let users = await Users.create(req.body)
    await console.log(Users.find({}))
    res.send('signup')
})
router.get('/logout', (req, res) => {
    res.send('logout')
})

module.exports = router