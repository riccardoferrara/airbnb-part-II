// Import Packages
const express = require('express')
const router = express.Router()

//Create requests GET / POST
router.get('/', (req, res) => {
    res.send('bookings')
})

module.exports = router