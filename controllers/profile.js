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
            res.redirect('auth/login')
        } else {
            let user = req.user
            console.log('logged user: ', user)
                // find all houses listet by the user
            console.log('user ID:', req.user._id)
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
            res.redirect('auth/login')
        } else {
            console.log('patching user informations...')
                // user info from update request
            updated_user = req.body
            console.log('want to uptade user information as following: ', updated_user)
                // update database
            let user = await Users.findByIdAndUpdate(req.user._id, req.body, { new: true })
            console.log('user information updated! \n')
                // login out user and login with new values
            req.login(user, (err) => {
                    if (err) {
                        throw err
                    } else {
                        console.log('logged in!')
                            // after login go to the houses list page
                    }
                })
                // end login 
            console.log('user logged in: ', req.user)
                // res.redirect('profile')
            res.redirect('/profile')
        }
    } catch (err) { next(err) }
})

module.exports = router