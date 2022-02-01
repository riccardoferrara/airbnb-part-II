// Import Packages
const express = require('express')
const router = express.Router()

//Create requests GET / POST
router.post('/', (req, res, next) => {
    try {
        if (!req.isAuthenticated()) {
            res.render('auth/login')
        } else {
            res.send('booking')
        }
    } catch (err) { next(err) }
})

module.exports = router