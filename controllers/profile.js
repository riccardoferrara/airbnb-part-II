// Import Packages
const express = require('express')
const { update } = require('../models/users')
const router = express.Router()
const Users = require('../models/users')
const Houses = require('../models/houses')

// Functions
const loginOrErr = (req, res, user) => {
    req.login(user, (err) => {
        if (err) {
            throw err
        } else {
            console.log('logged in!')
                // after login go to the houses list page
        }
    })
}

//Create requests GET / POST
router.get('/', async(req, res, next) => {
    try {
        if (!req.isAuthenticated()) {
            res.render('auth/login')
        } else {
            let user = req.user
            console.log('logged user: ', user)
                // find all houses listet by the user
            let houses = await Houses.find({ host: req.user._id })
            console.log('houses: ', houses)
            res.render('profile', { user, houses })
        }
    } catch (err) { next(err) }
})

router.patch('/', async(req, res, next) => {
    try {
        if (!req.isAuthenticated()) {
            console.log('not logged')
            res.render('auth/login')
        } else {
            console.log('patching user informations')
                // user info from update request
            updated_user = req.body
            console.log('updated user: ', updated_user)
                // update database
            users = await Users.findOneAndUpdate(updated_user)
                // login out user and login with new values
            req.logout()
            loginOrErr(req, res, updated_user)
            console.log('after update logged user is: ', req.user)
            res.redirect('profile')
        }
    } catch (err) { next(err) }
})

module.exports = router