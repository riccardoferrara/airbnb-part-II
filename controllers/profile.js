// Import Packages
const express = require('express')
const router = express.Router()

//Create requests GET / POST
router.get('/', (req, res, next) => {
    try {
        if (!req.isAuthenticated()) {
            res.render('auth/login')
        } else {
            let user = req.user
            console.log('logged user: ', user)
            res.render('profile', { user })
        }
    } catch (err) { next(err) }
})

router.patch('/', (req, res, next) => {
    try {
        if (!req.isAuthenticated()) {
            res.render('auth/login')
        } else {
            res.send('profile')
        }
    } catch (err) { next(err) }
})

module.exports = router