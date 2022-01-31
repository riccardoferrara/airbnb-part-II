// Import Packages
const express = require('express')
const router = express.Router()
const Users = require('../models/users')


//functions 
const createUser = async(user) => {
    let users = await Users.create(user)
    return true
}

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
    let created = await createUser(user)
    res.send('signed up')
        // if (created) {
        //     req.login({
        //         email: 'tony@gmail.com',
        //         password: '123456'
        //     })
        // }
})

router.get('/logout', (req, res) => {
    res.send('logout')
})

module.exports = router