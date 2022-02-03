// Import Packages
const express = require('express')
const router = express.Router()

//Create requests GET / POST
router.post('/', (req, res, next) => {
    try {
        if (!req.isAuthenticated()) {
            res.redirect('auth/login')
        } else {
            res.send('reviews')
        }
    } catch (err) { next(err) }
})

module.exports = router