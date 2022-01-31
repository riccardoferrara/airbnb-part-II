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

router.post('/signup', async(req, res, next) => {
    let user = req.body
    Users.findOne({
        'email': user.email
    }, async function(err, exist) {
        try {
            // hanlde err..
            // IF THE USER ALREADY EXISTS
            if (exist) {
                throw new Error('A user with this email is already registered')
            } else
            // IF THE USER DO NOT EXISTS
            {
                // create the user
                let users = await Users.create(user)
                console.log('user created!')
                    //login
                req.login(user, (err) => {
                    if (err) {
                        throw err
                    } else {
                        console.log('logged in!')
                            // after login go to the houses list page
                        res.redirect('/houses')
                    }
                })

            }
        } catch (err) {
            next(err)
        }
    })

})


router.get('/logout', (req, res) => {
    res.send('logout')
})

module.exports = router