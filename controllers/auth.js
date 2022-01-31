// Import Packages
const express = require('express')
const router = express.Router()

//Create requests GET / POST
router.get('/login', (req, res) => {
    res.render('login')
})
router.get('/signup', (req, res) => {
    res.send('signup')
})
router.post('/login', (req, res) => {
    res.send('login')
})
router.post('/signup', (req, res) => {
    res.send('signup')
})
router.get('/logout', (req, res) => {
    res.send('logout')
})

module.exports = router